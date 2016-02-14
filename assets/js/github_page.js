
chrome.runtime.onMessage.addListener(function(request, sender) {
  // console.log(request.source)


});


$( document ).ready(function() {
  var request = new XMLHttpRequest();
  // Initialize a request
  request.open('get', 'https://api.github.com/users/funchal')
  // Send it
  request.send()
  console.log(request.readyState)
});

//https://parse.com/tutorials/adding-third-party-authentication-to-your-web-app
// http://www.sitepoint.com/build-trello-chrome-extension-api-authentication/
