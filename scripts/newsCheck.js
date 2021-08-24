function newsCheck(misch) {
  var titleList = getNews();

  // シートの準備
  let sheet = getSheet(misch.sheetId, misch.sheetName);
  let range = getRange(sheet, misch.rows);

  var checkedData = checkFinished(range, titleList, misch.checkRow);

  // 一致チェック後残ったら処理
  if (checkedData.length > 0) {
    // 抽出した差分を更に処理
    var postData = [];
    for ( var i = 0; i < checkedData.length; i++) {
      // 日付の処理
      var noticeDate = parseDate(checkedData[i][0]);
      var noticeDateStr = Utilities.formatDate(noticeDate, 'Asia/Tokyo', 'M月d日');
      
      // 一定期間内のお知らせのみpostDataに移す
      if (ignoreCheck(noticeDate)) {
        console.log('古いお知らせ : ' + noticeDateStr + ', ' + checkedData[i][1]);
      } else {
        postData.push([noticeDateStr, checkedData[i][1]]);
      }
    }
    
    // postDataに追加された場合のみdiscordに送信
    if (postData.length > 0) {
      var text = '';
      // 日付 タイトル で追加
      postData.forEach(data => text += data[0] + ' ' + data[1] + '\n');

      // discordにpost
      postDiscordText(misch.webhook, text);
      // シートに保存
      setRead(range, titleList);
    }
  } else {
    console.log('既存データのみ');
  }
}

/** YYYY.MM.DDの日付フォーマットをDateに変換 */
function parseDate(str) {
  var dateStr = str.split('.');
  var year = parseInt(dateStr[0], 10);
  var month = parseInt(dateStr[1], 10) - 1;
  var date = parseInt(dateStr[2], 10);
  return new Date(year, month, date);
}

/** 指定日時離れているかの判定 */
function ignoreCheck(noticeDate) {
  var diffMs = Math.abs(new Date().getTime() - noticeDate.getTime());
  var diffDate = diffMs / (1000 * 60 * 60 * 24);
  return diffDate > IGNORE_DATE;
}