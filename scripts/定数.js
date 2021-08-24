/** アサルトリリィゲーム内お知らせ **/
const NEWS_URL = 'https://api-allb.pokelabo.jp/web/announce/';
const WEBHOOK_NEWS = PropertiesService.getScriptProperties().getProperty('WEBHOOK_NEWS');
const SHEET_NEWS_ID = PropertiesService.getScriptProperties().getProperty('SHEET_NEWS_ID');
const SHEET_NEWS_NAME = 'lb_news';

/** シート関係 **/
// 保持MAX
const MAX_NUM = 20;

/** お知らせで無視する日数 **/
const IGNORE_DATE = 3;