import got from 'got';
import appRootPath from 'app-root-path';
import {NodeCG} from '../nodecg/nodecg';
import {CurrentRun} from '../nodecg/replicants';

export const twitch = (nodecg: NodeCG) => {
	const OUR_CHANNEL = nodecg.bundleConfig.twitchId;
	// const CHANNEL_TITLE_PREFIX = nodecg.bundleConfig.broadcastTitlePrefix;

	const log = new nodecg.Logger('twitch');
	if (
		!nodecg.config.login ||
		!nodecg.config.login.enabled ||
		!nodecg.config.login.twitch ||
		!nodecg.config.login.twitch.enabled
	) {
		log.warn('Twitch login is disabled');
		return;
	}

	const twitchConfig = nodecg.config.login.twitch;
	if (!twitchConfig.scope.split(' ').includes('channel_editor')) {
		log.error('Missing channel_editor scope, exiting.');
		return;
	}

	const twitchRep = nodecg.Replicant('twitch', {defaultValue: {}});
	const currentRunRep = nodecg.Replicant('current-run');
	const {clientSecret} = appRootPath.require(
		'./.nodecg/cfg/nodecg.json',
	).login.twitch;

	const refreshAccessToken = async () => {
		try {
			if (!twitchRep.value || !twitchRep.value.refresh) {
				return;
			}
			const {body} = await got.post('https://id.twitch.tv/oauth2/token', {
				form: true,
				body: {
					grant_type: 'refresh_token',
					refresh_token: twitchRep.value.refresh.refreshToken,
					client_id: twitchConfig.clientID,
					client_secret: clientSecret,
					scope: twitchConfig.scope,
				},
			});
			const response = JSON.parse(body);
			const expiresInMs = response.expires_in * 1000;
			setTimeout(refreshAccessToken, expiresInMs);

			twitchRep.value.accessToken = response.access_token;
			twitchRep.value.refresh = {
				refreshToken: response.refresh_token,
				refreshAt: Date.now() + expiresInMs,
			};
			log.info('Refreshed token');
		} catch (error) {
			log.error('Failed to refresh token:', error);
		}
	};

	let lastUpdateTitle = '';
	const updateTitle = async (newRun: CurrentRun) => {
		try {
			if (!newRun) {
				return;
			}
			if (!twitchRep.value || !twitchRep.value.accessToken) {
				log.error(
					'Tried to update Twitch status but missing access token',
				);
				return;
			}
			// RTA Racing用
			const genre = newRun.raceGenre ? `【${newRun.raceGenre}】` : '';
			const newTitle = `${genre}${newRun.title} ${
				newRun.category
			} (${newRun.runners.map((runner) => runner.name).join('/')})`;
			console.log(newTitle);
			// RTA in 俺んち用
			// const newTitle = `${CHANNEL_TITLE_PREFIX}${newRun.title}`;
			if (lastUpdateTitle === newTitle) {
				return;
			}
			await got.put(
				`https://api.twitch.tv/kraken/channels/${twitchRep.value.channelId}`,
				{
					json: true,
					body: {
						channel: {
							status: newTitle,
							game: newRun.englishTitle,
						},
					},
					headers: {
						Accept: 'application/vnd.twitchtv.v5+json',
						Authorization: `OAuth ${twitchRep.value.accessToken}`,
						'Client-ID': twitchConfig.clientID,
					},
				},
			);
			lastUpdateTitle = newTitle;
			log.info(
				`Updated Twitch status to ${newRun.title} (${newRun.englishTitle})`,
			);
		} catch (error) {
			log.error('Failed to update Twitch status', error);
		}
	};

	const loginLib = appRootPath.require('./.nodecg/lib/login');
	loginLib.on('login', (session: any) => {
		const {user} = session.passport;
		if (user.provider !== 'twitch' || user.username !== OUR_CHANNEL) {
			return;
		}
		twitchRep.value = {
			accessToken: user.accessToken,
			channelId: user.id,
			refresh: {
				refreshToken: user.refreshToken,
				refreshAt: Date.now(),
			},
		};
		log.info(`Twitch title updater is enabled for ${user.username}`);
		refreshAccessToken();
	});

	currentRunRep.on('change', updateTitle);

	twitchRep.once('change', (newVal) => {
		if (newVal.refresh) {
			const refreshIn = newVal.refresh.refreshAt - Date.now();
			setTimeout(() => {
				refreshAccessToken();
			}, refreshIn);
		}
	});
};
