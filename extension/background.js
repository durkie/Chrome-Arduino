chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('serialmonitor.html', {
    'width': 500,
    'height': 500
  });
});