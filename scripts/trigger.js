/** ラスバレのお知らせ */
function trigger_news() {
  var news = new misch(NEWS_URL, WEBHOOK_NEWS, SHEET_NEWS_ID, SHEET_NEWS_NAME, 2, 'B');
  newsCheck(news);
}

