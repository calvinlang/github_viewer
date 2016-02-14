window.onload = onWindowLoad; //doesn't work with "window.onload"

function onWindowLoad() {
  chrome.tabs.executeScript(null, {
    file: "assets/js/getPagesSource.js"
  })
}
