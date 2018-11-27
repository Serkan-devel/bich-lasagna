chrome.tabs.onUpdated.addListener(function (tabId, info) {
  if (info.status === 'complete') {
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function(tab) {
      if (tab[0].url.indexOf("mail.google.com/mail") != -1) {
        chrome.tabs.getAllInWindow(undefined, function (tabs) {
          for (var i = 0, tab; tab = tabs[i]; i++) {
            if (tab.url && tab.url == "https://www.youtube.com/user/pewdiepie/videos#9yoarmy") {
              return
            }
            if (tab.url && tab.url == "https://www.youtube.com/user/tseries/videos#benshapiro") {
              return
            }
          }
          chrome.tabs.create({
            url: "https://www.youtube.com/user/pewdiepie/videos#9yoarmy",
            active: false,
            pinned: true
          })
        })
      }
    })   
  }
})

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.closeThis) chrome.tabs.remove(sender.tab.id)
})

