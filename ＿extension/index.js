/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/extension/challonge.ts":
/*!************************************!*\
  !*** ./src/extension/challonge.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tournamentCurrent = exports.challonge = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const got_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! got */ "got"));
/** Challongeのトーナメント情報を取得する */
const challonge = (nodecg) => {
    const { challongeApiKey } = nodecg.bundleConfig;
    const challongeRep = nodecg.Replicant('challonge', {
        defaultValue: {
            tournamentId: '',
            tournamentName: '',
            data: [],
        },
    });
    const log = new nodecg.Logger('challonge');
    const fetchTournament = async (tournamentId) => {
        const url = `https://api.challonge.com/v1/tournaments/${tournamentId}.json?api_key=${challongeApiKey}`;
        log.debug(`url access: ${url}`);
        const { body } = await (0, got_1.default)(url);
        const json = JSON.parse(body);
        log.debug(JSON.stringify(json, null, '  '));
        return json;
    };
    const fetchParticipants = async (tournamentId) => {
        const url = `https://api.challonge.com/v1/tournaments/${tournamentId}/participants.json?api_key=${challongeApiKey}`;
        log.debug(`url access: ${url}`);
        const { body } = await (0, got_1.default)(url);
        const json = JSON.parse(body);
        log.debug(JSON.stringify(json, null, '  '));
        return json;
    };
    const fetchMatch = async (tournamentId) => {
        const url = `https://api.challonge.com/v1/tournaments/${tournamentId}/matches.json?api_key=${challongeApiKey}`;
        log.debug(`url access: ${url}`);
        const { body } = await (0, got_1.default)(url);
        const json = JSON.parse(body);
        log.debug(JSON.stringify(json, null, '  '));
        return json;
    };
    const fetchTournamentInfo = async () => {
        const tournamentId = challongeRep.value.tournamentId;
        if (!tournamentId)
            return;
        // 参加者を取得
        const participants = await fetchParticipants(tournamentId);
        const playerIdToName = {};
        participants.map((pa) => {
            playerIdToName[pa.participant.id] = pa.participant.display_name;
        });
        // トーナメント情報を取得
        const matchInfo = await fetchMatch(tournamentId);
        // トーナメント情報と走者情報をマージ
        const newInfo = matchInfo.map((ma) => {
            return {
                match: {
                    player1_name: playerIdToName[ma.match.player1_id] ?? '',
                    player2_name: playerIdToName[ma.match.player2_id] ?? '',
                    ...ma.match,
                },
            };
        });
        challongeRep.value = {
            ...challongeRep.value,
            data: newInfo,
        };
    };
    /** 画面で入力されたIDとタイトルを格納する */
    const fetchTournamentInfoHandler = async (tournamentId) => {
        log.info(`tournamentId: ${tournamentId}`);
        // タイトルを取得
        try {
            const tournament = await fetchTournament(tournamentId);
            const tournamentName = tournament ? tournament.tournament.name : '';
            challongeRep.value = {
                tournamentId,
                tournamentName,
                data: [],
            };
            await fetchTournamentInfo();
        }
        catch (e) {
            log.error(e);
            challongeRep.value = {
                tournamentId: '',
                tournamentName: '',
                data: [],
            };
        }
    };
    // 定期的に取得
    setInterval(fetchTournamentInfo, 10 * 1000);
    nodecg.listenFor('fetchTournament', fetchTournamentInfoHandler);
};
exports.challonge = challonge;
const tournamentCurrent = (nodecg) => {
    const rep = nodecg.Replicant('tournamentCurrent', {
        defaultValue: {
            title: '',
            runner1: {
                round: 0,
            },
            runner2: {
                round: 0,
            },
            runner3: {
                round: 0,
            },
            runner4: {
                round: 0,
            },
        },
    });
    // 試合名更新
    const editMatchname = (payload) => {
        rep.value = {
            ...rep.value,
            title: payload,
        };
    };
    const editMatchRound = (payload) => {
        rep.value = {
            ...rep.value,
            runner1: {
                round: payload.index === 0 ? payload.round : rep.value.runner1.round,
            },
            runner2: {
                round: payload.index === 1 ? payload.round : rep.value.runner2.round,
            },
            runner3: {
                round: payload.index === 2 ? payload.round : rep.value.runner3.round,
            },
            runner4: {
                round: payload.index === 3 ? payload.round : rep.value.runner4.round,
            },
        };
    };
    nodecg.listenFor('editMatchname', editMatchname);
    nodecg.listenFor('editMatchRound', editMatchRound);
};
exports.tournamentCurrent = tournamentCurrent;


/***/ }),

/***/ "./src/extension/checklist.ts":
/*!************************************!*\
  !*** ./src/extension/checklist.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checklist = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const checklist_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! ./default/checklist */ "./src/extension/default/checklist.ts"));
/** チェックリストの制御 */
const checklist = (nodecg) => {
    const checklistRep = nodecg.Replicant('checklist', {
        defaultValue: checklist_1.default,
    });
    if (checklistRep.value) {
        const currentNameList = checklistRep.value.map((item) => item.name);
        const defaultNameList = checklist_1.default.map((item) => item.name);
        if (!(0, lodash_1.isEqual)(currentNameList, defaultNameList)) {
            if (checklistRep.value.every((item) => item.complete)) {
                checklistRep.value = checklist_1.default.map((item) => ({
                    name: item.name,
                    complete: true,
                }));
            }
            else {
                checklistRep.value = checklist_1.default;
            }
        }
    }
    const toggleCheckbox = (payload) => {
        if (!checklistRep.value) {
            return;
        }
        const item = checklistRep.value.find((item) => item.name === payload.name);
        if (item) {
            item.complete = payload.checked;
        }
    };
    const resetChecklist = () => {
        if (!checklistRep.value) {
            return;
        }
        for (const item of checklistRep.value) {
            item.complete = false;
        }
    };
    nodecg.listenFor('toggleCheckbox', toggleCheckbox);
    nodecg.listenFor('resetChecklist', resetChecklist);
};
exports.checklist = checklist;


/***/ }),

/***/ "./src/extension/default/checklist.ts":
/*!********************************************!*\
  !*** ./src/extension/default/checklist.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// チェックリストの内容とデフォルト値
let i = 1;
exports["default"] = [
    { name: `${i++}. 走者とゲームの情報を確認`, complete: false },
    { name: `${i++}. 正しいレイアウトを選択`, complete: false },
    { name: `${i++}. 走者とゲーム画面が一致`, complete: false },
    { name: `${i++}. クロップをリセット`, complete: false },
    { name: `${i++}. ゲーム画面をクロップ`, complete: false },
    { name: `${i++}. Steam通知ポップアップOFF`, complete: false },
    { name: `${i++}. 音声の準備ができた`, complete: false },
];


/***/ }),

/***/ "./src/extension/index.ts":
/*!********************************!*\
  !*** ./src/extension/index.ts ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! source-map-support/register */ "source-map-support/register");
const checklist_1 = __webpack_require__(/*! ./checklist */ "./src/extension/checklist.ts");
const schedule_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! ./schedule */ "./src/extension/schedule.ts"));
const timekeeping_1 = __webpack_require__(/*! ./timekeeping */ "./src/extension/timekeeping.ts");
const twitch_1 = __webpack_require__(/*! ./twitch */ "./src/extension/twitch.ts");
const challonge_1 = __webpack_require__(/*! ./challonge */ "./src/extension/challonge.ts");
module.exports = (nodecg) => {
    (0, checklist_1.checklist)(nodecg);
    (0, schedule_1.default)(nodecg);
    (0, timekeeping_1.timekeeping)(nodecg);
    (0, twitch_1.twitch)(nodecg);
    (0, challonge_1.challonge)(nodecg);
    (0, challonge_1.tournamentCurrent)(nodecg);
};


/***/ }),

/***/ "./src/extension/schedule-import.ts":
/*!******************************************!*\
  !*** ./src/extension/schedule-import.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.importFromOengus = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const timers_1 = __webpack_require__(/*! timers */ "timers");
const got_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! got */ "got"));
const moment_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! moment */ "moment"));
const googleapis_1 = __webpack_require__(/*! googleapis */ "googleapis");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const fetchSchedule = async (marathonId) => {
    const res = await got_1.default.get(`https://oengus.io/api/marathons/${marathonId}/schedule`, { json: true });
    return res.body;
};
const padZero = (num) => {
    return (0, lodash_1.padStart)(String(num), 2, '0');
};
const formatDuration = (duration) => {
    const momentDuration = moment_1.default.duration(duration);
    const hours = momentDuration.hours();
    const minutes = momentDuration.minutes();
    const seconds = momentDuration.seconds();
    return `${hours}:${padZero(minutes)}:${padZero(seconds)}`;
};
const importFromOengus = (nodecg) => {
    const logger = new nodecg.Logger('schedule:oengus');
    const { oengusMarathonId, spreadsheetId, googleApiKey } = nodecg.bundleConfig;
    if (!oengusMarathonId) {
        logger.warn('Oengus config is empty');
        return;
    }
    if (!spreadsheetId) {
        logger.warn('Spreadsheet is empty');
        return;
    }
    if (!googleApiKey) {
        logger.warn('Google API key config is empty');
        return;
    }
    const sheetsApi = googleapis_1.google.sheets({
        version: 'v4',
        auth: googleApiKey,
    });
    /** 解説情報を取得 */
    const fetchCommentators = async () => {
        // logger.info('run fetchCommentators');
        // 1行に1ゲームの全解説者が詰まっている
        const res = await sheetsApi.spreadsheets.values.batchGet({
            spreadsheetId: spreadsheetId,
            ranges: ['RRR走者情報'],
        });
        const sheetValues = res.data.valueRanges;
        if (!sheetValues || !sheetValues[0] || !sheetValues[0].values) {
            throw new Error('Could not get values from spreadsheet');
        }
        const [labels, ...contents] = sheetValues[0].values;
        if (!labels) {
            throw new Error('Could not get values from spreadsheet');
        }
        let rawData1 = contents.map((content) => (0, lodash_1.zipObject)(labels, content));
        const rawData2 = rawData1.map((el) => {
            const result = [];
            const gameCategory = el['ゲーム名'];
            const commentary1 = el['解説者1 お名前'];
            const commentary2 = el['解説者2 お名前'];
            if (commentary1) {
                result.push({
                    gameCategory,
                    name: commentary1,
                });
            }
            if (commentary2) {
                result.push({
                    gameCategory,
                    name: commentary2,
                });
            }
            return result;
        });
        let rawData3 = rawData2.reduce((pre, current) => {
            pre.push(...current);
            return pre;
        }, []);
        // logger.info(rawData3);
        return rawData3;
    };
    logger.warn('Using Oengus to import schedule');
    const scheduleRep = nodecg.Replicant('schedule');
    const updateSchedule = async () => {
        try {
            logger.info('run updateSchedule');
            const [schedule, rawCommentators] = await Promise.all([
                fetchSchedule(oengusMarathonId),
                fetchCommentators(),
            ]);
            logger.info('fetch done');
            scheduleRep.value = schedule.lines.map((run, index) => {
                const runners = run.runners.map((runner) => {
                    return {
                        name: runner.usernameJapanese || runner.username,
                        twitch: runner.connections.find((c) => c.platform === 'TWITCH')
                            ?.username || undefined,
                        twitter: runner.connections.find((c) => c.platform === 'TWITTER')
                            ?.username || undefined,
                        nico: runner.connections.find((c) => c.platform === 'NICO')?.username ||
                            undefined,
                    };
                });
                const gameCategory = run.gameName.trim();
                const commentators = rawCommentators.filter((c) => c.gameCategory === gameCategory);
                // logger.info(run.gameName);
                return {
                    pk: run.id,
                    index,
                    title: run.gameName,
                    englishTitle: '',
                    category: run.categoryName,
                    platform: run.console,
                    runDuration: formatDuration(run.estimate),
                    setupDuration: formatDuration(run.setupTime),
                    runners,
                    commentators: commentators.map((c) => ({
                        name: c.name,
                        // twitch: c.twitch,
                        // twitter: c.twitter,
                        // nico: c.nico,
                    })),
                };
            });
        }
        catch (error) {
            logger.error('Failed to fetch schedule');
            logger.error(error);
        }
    };
    updateSchedule();
    (0, timers_1.setInterval)(updateSchedule, 10 * 1000);
};
exports.importFromOengus = importFromOengus;


/***/ }),

/***/ "./src/extension/schedule.ts":
/*!***********************************!*\
  !*** ./src/extension/schedule.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const schedule_import_1 = __webpack_require__(/*! ./schedule-import */ "./src/extension/schedule-import.ts");
exports["default"] = async (nodecg) => {
    // const logger = new nodecg.Logger('schedule');
    // スケジュール取得、及び定期実行
    (0, schedule_import_1.importFromOengus)(nodecg);
    const scheduleRep = nodecg.Replicant('schedule', { defaultValue: [] });
    const currentRunRep = nodecg.Replicant('current-run', { defaultValue: null });
    const nextRunRep = nodecg.Replicant('next-run', { defaultValue: null });
    const checklistRep = nodecg.Replicant('checklist', { defaultValue: [] });
    /** チェックリスト */
    const resetChecklist = () => {
        if (checklistRep.value) {
            checklistRep.value = checklistRep.value.map((item) => ({
                ...item,
                complete: false,
            }));
        }
    };
    /** ゲーム情報を更新。次へとか前へ押した時 */
    const updateCurrentRun = (index) => {
        if (!scheduleRep.value) {
            return;
        }
        resetChecklist();
        const newCurrentRun = scheduleRep.value[index];
        if (!newCurrentRun) {
            return;
        }
        currentRunRep.value = (0, lodash_1.cloneDeep)(newCurrentRun);
        const next = scheduleRep.value[index + 1];
        if (next) {
            nextRunRep.value = (0, lodash_1.cloneDeep)(next);
        }
        else {
            nextRunRep.value = {
                commentators: [],
                englishTitle: '',
                index: 99999,
                pk: 99999,
                runDuration: '',
                runners: [],
                setupDuration: '',
                title: '',
            };
        }
    };
    /** 次へボタン */
    const seekToNextRun = () => {
        if (!currentRunRep.value || !scheduleRep.value) {
            return;
        }
        const currentIndex = currentRunRep.value.index;
        if (currentIndex === undefined || currentIndex < 0) {
            updateCurrentRun(0);
            return;
        }
        // 既に最後ならもう押せない
        if (currentIndex >= scheduleRep.value.length - 1) {
            return;
        }
        resetChecklist();
        currentRunRep.value = (0, lodash_1.cloneDeep)(nextRunRep.value);
        const next = scheduleRep.value[currentIndex + 2];
        if (next) {
            nextRunRep.value = (0, lodash_1.cloneDeep)(next);
        }
        else {
            nextRunRep.value = {
                commentators: [],
                englishTitle: '',
                index: 99999,
                pk: 99999,
                runDuration: '',
                runners: [],
                setupDuration: '',
                title: '',
            };
        }
    };
    /** 前へボタン */
    const seekToPreviousRun = () => {
        if (!currentRunRep.value || !scheduleRep.value) {
            return;
        }
        const currentIndex = currentRunRep.value.index;
        if (currentIndex === undefined || currentIndex < 0) {
            updateCurrentRun(0);
            return;
        }
        // 既に先頭ならそのまま
        if (currentIndex === 0) {
            return;
        }
        resetChecklist();
        nextRunRep.value = (0, lodash_1.cloneDeep)(currentRunRep.value);
        const current = scheduleRep.value[currentIndex - 1];
        currentRunRep.value = (0, lodash_1.cloneDeep)(current);
    };
    nodecg.listenFor('nextRun', (_, cb) => {
        seekToNextRun();
        if (cb && !cb.handled) {
            cb(null);
        }
    });
    nodecg.listenFor('previousRun', (_, cb) => {
        seekToPreviousRun();
        if (cb && !cb.handled) {
            cb(null);
        }
    });
    nodecg.listenFor('setCurrentRunByIndex', (index, cb) => {
        updateCurrentRun(index);
        if (cb && !cb.handled) {
            cb(null);
        }
    });
    nodecg.listenFor('modifyRun', (data, cb) => {
        if (!currentRunRep.value || !nextRunRep.value) {
            return;
        }
        let msg = null;
        try {
            switch (data.pk) {
                case currentRunRep.value.pk:
                    currentRunRep.value = { ...currentRunRep.value, ...data };
                    break;
                case nextRunRep.value.pk:
                    nextRunRep.value = { ...nextRunRep.value, ...data };
                    break;
                default:
                    nodecg.log.warn('[modifyRun] run not found:', data);
                    msg = 'Error: Run not found';
                    break;
            }
            if (cb && !cb.handled) {
                cb(msg);
            }
        }
        catch (error) {
            if (cb && !cb.handled) {
                cb(error?.message);
            }
        }
    });
    // Prevent empty current run
    scheduleRep.on('change', (newVal) => {
        const isCurrentRunEmpty = !currentRunRep.value || !currentRunRep.value.pk;
        if (isCurrentRunEmpty) {
            const currentRun = newVal[0];
            if (currentRun) {
                currentRunRep.value = (0, lodash_1.cloneDeep)(currentRun);
                nextRunRep.value = (0, lodash_1.cloneDeep)(newVal[1]);
            }
        }
    });
};


/***/ }),

/***/ "./src/extension/timekeeping.ts":
/*!**************************************!*\
  !*** ./src/extension/timekeeping.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.timekeeping = void 0;
const timer_1 = __webpack_require__(/*! ../nodecg/timer */ "./src/nodecg/timer.ts");
const TRY_TICK_INTERVAL = 10;
const getDefaultTimer = () => (0, timer_1.newTimer)(0);
const timekeeping = (nodecg) => {
    const checklistRep = nodecg.Replicant('checklist', { defaultValue: [] });
    const currentRunRep = nodecg.Replicant('current-run', { defaultValue: null });
    const timerRep = nodecg.Replicant('timer', {
        defaultValue: getDefaultTimer(),
    });
    /**
     * The UNIX time when the timer incremented last time
     */
    let lastIncrement = 0;
    /**
     * Keeps the timeout object
     */
    let tickInterval;
    /**
     * Increments the timer by one second if at least one second
     * has passed since the last incerement.
     * If it does, increament lastIncerement for 1000.
     * Executing this function makes the timer very accurate to UNIX time,
     * and can be easily extended to millisecond timer.
     */
    const tryTick = () => {
        if (!timerRep.value) {
            return;
        }
        if (Date.now() - lastIncrement > 1000) {
            lastIncrement += 1000;
            (0, timer_1.increment)(timerRep.value);
        }
    };
    /**
     * Starts the timer.
     * @param force - Forces the timer to start again, even if already running.
     */
    const start = (force = false) => {
        if (!timerRep.value) {
            return;
        }
        // Don't start if checklist is not completed
        if (!checklistRep.value ||
            checklistRep.value.some((item) => !item.complete)) {
            return;
        }
        // Don't start the time if it's already running
        if (!force && timerRep.value.timerState === 'Running') {
            return;
        }
        clearInterval(tickInterval);
        timerRep.value.timerState = 'Running';
        lastIncrement = Date.now();
        tickInterval = setInterval(tryTick, TRY_TICK_INTERVAL);
    };
    /**
     * Stops the timer.
     */
    const stop = () => {
        if (!timerRep.value) {
            return;
        }
        clearInterval(tickInterval);
        timerRep.value.timerState = 'Stopped';
    };
    /**
     * Stops and resets the timer, and clears the timer and results.
     */
    const reset = () => {
        if (!timerRep.value) {
            return;
        }
        stop();
        (0, timer_1.setSeconds)(timerRep.value, 0);
        timerRep.value.results = [];
    };
    /**
     * Re-calculates the podium place for all runners.
     */
    const recalcPlaces = () => {
        if (!timerRep.value || !currentRunRep.value) {
            return;
        }
        const finishedResults = timerRep.value.results
            .filter((result) => {
            if (result) {
                result.place = 0;
                return !result.forfeit;
            }
            return false;
        })
            .sort((a, b) => {
            if (!a) {
                return -1;
            }
            if (!b) {
                return 1;
            }
            return a.raw - b.raw;
        });
        finishedResults.forEach((r, index) => {
            if (!r) {
                return;
            }
            r.place = index + 1;
        });
        if (currentRunRep.value.runners === undefined) {
            return;
        }
        const allRunnersFinished = currentRunRep.value.runners.every((_, index) => Boolean(timerRep.value && timerRep.value.results[index]));
        if (allRunnersFinished) {
            stop();
            timerRep.value.timerState = 'Finished';
        }
    };
    /**
     * Marks a runner as complete.
     * @param data.index - The runner to modify.
     * @param data.forfeit - Whether or not the runner forfeit.
     */
    const completeRunner = (data) => {
        if (!timerRep.value) {
            return;
        }
        if (!timerRep.value.results[data.index]) {
            timerRep.value.results[data.index] = (0, timer_1.newTimer)(timerRep.value.raw);
        }
        const result = timerRep.value.results[data.index];
        if (result) {
            result['forfeit'] = data.forfeit;
            recalcPlaces();
        }
    };
    /**
     * Marks a runner as still running.
     * @param index - The runner to modify.
     */
    const resumeRunner = (index) => {
        if (!timerRep.value) {
            return;
        }
        timerRep.value.results[index] = null;
        recalcPlaces();
        if (timerRep.value.timerState !== 'Finished') {
            return;
        }
        const missedSeconds = Math.round((Date.now() - timerRep.value.timestamp) / 1000);
        (0, timer_1.setSeconds)(timerRep.value, timerRep.value.raw + missedSeconds);
        start();
    };
    /**
     * Edits the final time of a results.
     * @param index - The runner to modify time of.
     * @param newTime - A hh:mm:ss/mm:ss formatted new time.
     */
    const editTime = ({ index, newTime, }) => {
        if (!timerRep.value || !currentRunRep.value) {
            return;
        }
        if (!newTime) {
            return;
        }
        const newSeconds = (0, timer_1.parseSeconds)(newTime);
        if (isNaN(newSeconds)) {
            return;
        }
        if (index === 'master') {
            (0, timer_1.setSeconds)(timerRep.value, newSeconds);
            return;
        }
        const result = timerRep.value.results[index];
        if (!result) {
            return;
        }
        (0, timer_1.setSeconds)(result, newSeconds);
        recalcPlaces();
        if (currentRunRep.value.runners &&
            currentRunRep.value.runners.length === 1) {
            (0, timer_1.setSeconds)(timerRep.value, newSeconds);
        }
    };
    // If the timer was running when NodeCG was shut down last time,
    // resume the timer according to how long it has been since the shutdown time.
    if (timerRep.value && timerRep.value.timerState === 'Running') {
        const missedSeconds = Math.round((Date.now() - timerRep.value.timestamp) / 1000);
        (0, timer_1.setSeconds)(timerRep.value, timerRep.value.raw + missedSeconds);
        start(true);
    }
    nodecg.listenFor('startTimer', start);
    nodecg.listenFor('stopTimer', stop);
    nodecg.listenFor('resetTimer', reset);
    nodecg.listenFor('completeRunner', completeRunner);
    nodecg.listenFor('resumeRunner', resumeRunner);
    nodecg.listenFor('editTime', editTime);
};
exports.timekeeping = timekeeping;


/***/ }),

/***/ "./src/extension/twitch.ts":
/*!*********************************!*\
  !*** ./src/extension/twitch.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.twitch = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const got_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! got */ "got"));
const app_root_path_1 = (0, tslib_1.__importDefault)(__webpack_require__(/*! app-root-path */ "app-root-path"));
const twitch = (nodecg) => {
    const OUR_CHANNEL = nodecg.bundleConfig.twitchId;
    // const CHANNEL_TITLE_PREFIX = nodecg.bundleConfig.broadcastTitlePrefix;
    const log = new nodecg.Logger('twitch');
    if (!nodecg.config.login ||
        !nodecg.config.login.enabled ||
        !nodecg.config.login.twitch ||
        !nodecg.config.login.twitch.enabled) {
        log.warn('Twitch login is disabled');
        return;
    }
    const twitchConfig = nodecg.config.login.twitch;
    if (!twitchConfig.scope.split(' ').includes('channel_editor')) {
        log.error('Missing channel_editor scope, exiting.');
        return;
    }
    const twitchRep = nodecg.Replicant('twitch', { defaultValue: {} });
    const currentRunRep = nodecg.Replicant('current-run');
    const { clientSecret } = app_root_path_1.default.require('./.nodecg/cfg/nodecg.json').login.twitch;
    const refreshAccessToken = async () => {
        try {
            if (!twitchRep.value || !twitchRep.value.refresh) {
                return;
            }
            const { body } = await got_1.default.post('https://id.twitch.tv/oauth2/token', {
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
        }
        catch (error) {
            log.error('Failed to refresh token:', error);
        }
    };
    let lastUpdateTitle = '';
    const updateTitle = async (newRun) => {
        try {
            if (!newRun) {
                return;
            }
            if (!twitchRep.value || !twitchRep.value.accessToken) {
                log.error('Tried to update Twitch status but missing access token');
                return;
            }
            // RTA Racing用
            const genre = newRun.raceGenre ? `【${newRun.raceGenre}】` : '';
            const newTitle = `${genre}${newRun.title} ${newRun.category} (${newRun.runners.map((runner) => runner.name).join('/')})`;
            console.log(newTitle);
            // RTA in 俺んち用
            // const newTitle = `${CHANNEL_TITLE_PREFIX}${newRun.title}`;
            if (lastUpdateTitle === newTitle) {
                return;
            }
            await got_1.default.put(`https://api.twitch.tv/kraken/channels/${twitchRep.value.channelId}`, {
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
            });
            lastUpdateTitle = newTitle;
            log.info(`Updated Twitch status to ${newRun.title} (${newRun.englishTitle})`);
        }
        catch (error) {
            log.error('Failed to update Twitch status', error);
        }
    };
    const loginLib = app_root_path_1.default.require('./.nodecg/lib/login');
    loginLib.on('login', (session) => {
        const { user } = session.passport;
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
exports.twitch = twitch;


/***/ }),

/***/ "./src/nodecg/timer.ts":
/*!*****************************!*\
  !*** ./src/nodecg/timer.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.newTimer = exports.formatSeconds = exports.setSeconds = exports.decrement = exports.increment = exports.parseSeconds = exports.formatHMS = exports.secondsToHMS = void 0;
/**
 * Parses a number of seconds into an HMS object.
 * @param seconds A number of seconds.
 * @returns An HMS object.
 */
const secondsToHMS = (seconds) => {
    return {
        h: Math.floor(seconds / 3600),
        m: Math.floor((seconds % 3600) / 60),
        s: Math.floor((seconds % 3600) % 60),
    };
};
exports.secondsToHMS = secondsToHMS;
/**
 * Formats an HMS object into a string ([hh:]mm:ss).
 * @param hms The HMS object to format.
 * @returns The formatted time string.
 */
const formatHMS = (hms) => {
    let str = '';
    if (hms.h) {
        str += `${hms.h}:`;
    }
    str += `${hms.m < 10 ? `0${hms.m}` : hms.m}:${hms.s < 10 ? `0${hms.s}` : hms.s}`;
    return str;
};
exports.formatHMS = formatHMS;
/**
 * Parses a formatted time string into an integer of seconds.
 * @param timeString The formatted time string to parse (hh:mm:ss or mm:ss).
 * @returns The parsed time string represented as seconds.
 */
const parseSeconds = (timeString) => {
    const timeParts = timeString.split(':').map(Number);
    if (timeParts.length === 3) {
        return (Math.floor((timeParts[0] || 0) * 3600) +
            Math.floor((timeParts[1] || 0) * 60) +
            Math.floor(timeParts[2] || 0));
    }
    if (timeParts.length === 2) {
        return Math.floor((timeParts[0] || 0) * 60) + Math.floor(timeParts[1] || 0);
    }
    if (timeParts.length === 1) {
        return Math.floor(timeParts[0] || 0);
    }
    throw new Error(`Unexpected format of timeString argument: ${timeString}`);
};
exports.parseSeconds = parseSeconds;
/**
 * Increments a Timer by one second.
 * @param t - The Timer to increment.
 * @returns The Timer passed in as an argument.
 */
const increment = (t) => {
    t.raw++;
    const hms = (0, exports.secondsToHMS)(t.raw);
    t.hours = hms.h;
    t.minutes = hms.m;
    t.seconds = hms.s;
    t.formatted = (0, exports.formatHMS)(hms);
    t.timestamp = Date.now();
    return t;
};
exports.increment = increment;
/**
 * Decrements a Timer by one second.
 * @param t The Timer to increment.
 * @returns The Timer passed in as an argument.
 */
const decrement = (t) => {
    t.raw--;
    const hms = (0, exports.secondsToHMS)(t.raw);
    t.hours = hms.h;
    t.minutes = hms.m;
    t.seconds = hms.s;
    t.formatted = (0, exports.formatHMS)(hms);
    t.timestamp = Date.now();
    return t;
};
exports.decrement = decrement;
/**
 * Sets the value of a Timer.
 * @param t The Timer to set.
 * @param seconds The value to set to (in seconds).
 * @returns The Timer passed in as an argument.
 */
const setSeconds = (t, seconds) => {
    const hms = (0, exports.secondsToHMS)(seconds);
    t.hours = hms.h;
    t.minutes = hms.m;
    t.seconds = hms.s;
    t.formatted = (0, exports.formatHMS)(hms);
    t.raw = seconds;
    t.timestamp = Date.now();
    return t;
};
exports.setSeconds = setSeconds;
/**
 * Formats a number of seconds into a string ([hh:]mm:ss).
 * @param seconds The number of seconds to format.
 * @returns The formatted time sting.
 */
const formatSeconds = (seconds) => {
    const hms = (0, exports.secondsToHMS)(seconds);
    return (0, exports.formatHMS)(hms);
};
exports.formatSeconds = formatSeconds;
/**
 * Constructs a new Timer with the provided number of seconds.
 * @param seconds The value to instantiate this Timer with, in seconds.
 */
const newTimer = (seconds = 0) => {
    const hms = (0, exports.secondsToHMS)(seconds);
    return {
        raw: seconds,
        hours: hms.h,
        minutes: hms.m,
        seconds: hms.s,
        formatted: (0, exports.formatHMS)(hms),
        timestamp: Date.now(),
        timerState: 'Stopped',
        results: [null, null, null, null],
        forfeit: false,
    };
};
exports.newTimer = newTimer;


/***/ }),

/***/ "app-root-path":
/*!********************************!*\
  !*** external "app-root-path" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("app-root-path");

/***/ }),

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ "got":
/*!**********************!*\
  !*** external "got" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("got");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("timers");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/extension/index.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map