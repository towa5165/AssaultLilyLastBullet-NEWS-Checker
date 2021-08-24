/** postする */
function postDiscord(url, content) {
  try {
    var params = {
      'method' : 'post',
      'headers' : {'Content-type':'application/json'},
      'payload' : JSON.stringify(content)
    }
    UrlFetchApp.fetch(url,params);
  } catch(e) {
    throw e;
  }
}

/** 単純なテキストpost用 */
function postDiscordText(url, str) {
  postDiscord(url, {content:str});
}