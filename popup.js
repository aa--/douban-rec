// Copyright (c) 2015. All rights reserved.

document.addEventListener('DOMContentLoaded', function () {
  function getCurrentTab(callback) {
    var queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(queryInfo, function(tabs) {
      callback(tabs[0]);
    });
  }

  getCurrentTab(function(tab){
    var r = (function(t, e) {
                return 'http://www.douban.com/share/service/?href='+e(t.url)+'&name='+e(t.title)+'&v=1'+'&source=bookmarklet';
            })(tab, encodeURIComponent);
    var action_url = r+'&r=1';
    if (action_url) {
      document.getElementsByTagName('iframe')[0].src = action_url;
    }
  });
});
