'use strict';

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
   // If the received message has the expected format...
   if (msg.text === 'facebook') {
       // Call the specified callback, passing
       // the web-page's DOM content as argument

       $('body').css('background-color', 'blue');
   }
});


