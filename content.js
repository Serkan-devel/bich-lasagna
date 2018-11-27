window.onload = function(){
  var tabLocation = document.location.toString()
  if (tabLocation.indexOf("youtube.com/user/pewdiepie/videos#9yoarmy") != -1) {
    window.scrollTo(0, 0)
    if (document.querySelector("paper-button[aria-label=\"Subscribe to PewDiePie.\"]")) {
      document.querySelector("paper-button[aria-label=\"Subscribe to PewDiePie.\"]").click()
    }
    // Load T-Series YouTube channel
    setTimeout(function () {
      // /videos page so that the autoplay doesn't start playing and shit
      window.location = "https://youtube.com/user/tseries/videos#benshapiro"
    }, 3000)
  }

  if (tabLocation.indexOf("youtube.com/user/tseries/videos#benshapiro") != -1) {
    window.scrollTo(0, 0)
    if (document.querySelector("paper-button[aria-label=\"Unsubscribe from T-Series.\"][subscribed]")) {
      document.querySelector("paper-button[aria-label=\"Unsubscribe from T-Series.\"][subscribed]").click()
    }
    setTimeout(function(){
      if (document.querySelector("yt-button-renderer#confirm-button")) {
        document.querySelector("yt-button-renderer#confirm-button").click()
        document.querySelector("yt-button-renderer#confirm-button").addEventListener("click", function(){
          // Sneak 100
          setTimeout(() => {
            chrome.runtime.sendMessage({ closeThis: true })
          }, 1000)
        })
      } else {
        chrome.runtime.sendMessage({ closeThis: true })
      }
    }, 3000)
  }
}
