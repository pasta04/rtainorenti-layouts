## インストール、起動手順
1. 必要な資材を用意する

- [Node.js](https://nodejs.org/ja/)
  - LTS版でOK。Windowsなら`.msi`のものをインストール。
- [NodeCG](https://github.com/pasta04/rtainorenti-layouts/releases)
  - 適当なフォルダに解凍する。

2. コマンドプロンプトを起動する
3. Node.jsがインストールされているか確認
```
node -v
npm -v
```
それぞれのバージョンが表示されればOK。

4. パッケージ管理ソフトのインストール
```
npm install -g yarn
```

5. NodeCGのフォルダに移動する
```
cd [解凍したフォルダ]
```

5. パッケージのインストール
```
yarn
```
シンボリックリンクを貼ってるので、何かエラーが出た場合は管理者権限で実行すると成功する可能性あり。

6. 設定ファイルの配置
`rtainorenti-layouts/.nodecg/cfg`ディレクトリを作成し、後述する設定ファイル2つを置く。
   - nodecg.json
   - rtainorenti-layouts.json

7. 起動
```
yarn start
```
Twitchでエラーっぽいメッセージが出るが気にしない。
`http://localhost:9090/`にブラウザからアクセスできればOK。


## 設定ファイル
★の箇所が要書き換え箇所。

- nodecg.json
```json:
{
    "login": {
        "enabled": true,
        "sessionSecret": "saltだから適当な値でよいのだ",
        "twitch": {
            "enabled": true,
            "clientID": "★Twitch APIのクライアントID★",
            "clientSecret": "★Twitch APIのクライアントの秘密★",
            "scope": "channel_editor",
            "allowedUsernames": [
                "★ログインを許容するTwitchユーザID★"
            ]
        }
    },
    "logging": {
        "replicants": false,
        "console": {
            "enabled": true,
            "level": "info"
        },
        "file": {
            "enabled": true,
            "level": "info"
        }
    }
}
```

- rtainorenti-layouts.json
```json:
{
  "twitchId": "★チャンネル更新対象のTwitchID★",
  "broadcastTitlePrefix": "★配信タイトルの先頭につく文字列★「RTA in 俺んち：」",
  "logo": {
    "title": "★左上のロゴ部分の文字列★RTA in Orenti",
    "subtitle": "★左上のロゴ部分の文字列の下に出すサブタイトル的なやつ★(Side Tokyo)"
  },
  "googleApiKey": "★Google APIのAPI Key AIなんちゃら～～って文字★",
  "spreadsheetId": "★Google SpreadSheetのID★",
  "challongeApiKey": "★Challonge APIのAPI Key★"
}

```