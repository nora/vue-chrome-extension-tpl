var content = chrome.extension.getURL('js/content.js');
var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', content);
document.body.appendChild(script);
