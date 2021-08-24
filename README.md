# AssaultLilyLastBullet-NEWS-Checker
スマートホンアプリ「アサルトリリィ Last Bullet」のゲーム内からみれるお知らせがwebでも見れたのでスクリーニングし、更新分をDiscordウェブフックに送信するbotを作った。  
GASとスプレッドシートのみで動作

## キャプチャ
![キャプチャ](https://raw.githubusercontent.com/towa5165/AssaultLilyLastBullet-NEWS-Checker/img/capture.png)

変化があったお知らせがこのように表示されるのでチェックしやすい。

##### 細かい仕様
- 日付とタイトルを取得し、タイトルのみ比較して更新をチェックする
- 日付をタイトルに付け足してからDiscordウェブフックに送信
- たまにお知らせが減って古いのを取得してしまうため、一定期間以上前のものは除外処理している
