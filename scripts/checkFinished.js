/**
 * 既存チェック
 * range シートのrange
 * data [[data], [arg]]
 * checkRow 同一チェックを行う列(アルファベット)
 * 
 * return 前回との差分
 */
function checkFinished(range, data, checkRow) {
  // 現在シートに記録されているデータを取得
  let finishedDataList = getFinishedData(range);
  
  // 配列を複製
  var checkData = data.slice(0);
  
  //チェックする指定列からindexを指定
  if (checkRow == undefined) checkRow = 'A';
  var checkRowIndex = checkRow.codePointAt(0) - 'A'.codePointAt(0);
  if (checkRowIndex < 0) {
    console.error('チェック対象の列の指定エラー, 指定 : ' + checkRow);
    return;
  }

  // チェック済みを除去
  finishedDataList.forEach(item => {
    // チェック対象の列の値を取得
    var finishedData = item[checkRowIndex];

    // 空白の場合次の処理へ
    if (finishedData.length == 0) return;

    // 存在チェック
    for(var i = 0; i < checkData.length; i++) {
      // チェック済みが存在するindexを除去
      if (checkData[i][checkRowIndex] == finishedData) {
        checkData.splice(i, 1);
        break;
      }
    }
  });

  return checkData;
}
