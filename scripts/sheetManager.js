/** シート取得 */
function getSheet(sheetId,sheetName) {
  var sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
  return sheet;
}

/** 範囲取得 */
function getRange(sheet, rows) {
  if(rows == undefined) rows = 1;
  if(rows > 26 || rows <= 0) {
    console.error('列数エラー, 現在1～26まで。指定列数 : ' + rows);
    return;
  }
  var startColumnTitle = 'A';
  var endColumnTitle = String.fromCodePoint(startColumnTitle.codePointAt(0)+(rows-1));
  return sheet.getRange(startColumnTitle + '1:' + endColumnTitle + MAX_NUM);
}

/** 入力済みのデータを取得する */
function getFinishedData(range) {
 var data = range.getValues();
 return data;
}

/** 書き込み */
function setRead(range, writeItems) {
  // 入力と範囲の数が一致しないとダメなので足し引きする
  if (writeItems.length < MAX_NUM) {
    console.log('書き込む数 : ' + writeItems.length)
    while (writeItems.length < MAX_NUM) {
      writeItems.push(['']);
    }
  } else if (writeItems.length > MAX_NUM) {
    console.log('書き込むの数 : ' + writeItems.length)
    while (writeItems.length > MAX_NUM) {
      writeItems.pop();
    }
  }
  
  range.setValues(writeItems);
}
