/**
 * お知らせ取得
 * return [[日付, タイトル], [日付, タイトル], ...]
 */
function getNews() {

  var titleList = [];
  var dateTime = [];
  
  // お知らせページ取得
  var html = UrlFetchApp.fetch(NEWS_URL).getContentText();

  // 日付
  Parser.data(html).from('<div class="date-time">').to('</div>').iterate().forEach(function (date) {
    dateTime.push(date);
  });
  // タイトル
  Parser.data(html).from('<p class="comment">').to('</p>').iterate().forEach(function (title) {
    titleList.push(title);
  });

  var newsList = [];
  for (var i = 0; i < titleList.length && i < MAX_NUM; i++) {
    newsList.push([dateTime[i], titleList[i]]);
  }

  return newsList;
}
