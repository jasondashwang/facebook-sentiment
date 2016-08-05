'use strict';

var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?facebook\.com/;

chrome.browserAction.onClicked.addListener(function (tab) {
   // ...check the URL of the active tab against our pattern and...
   if (urlRegex.test(tab.url)) {
       // ...if it matches, send a message specifying a callback too

       chrome.tabs.sendMessage(tab.id, {text: 'facebook'}, function(data){


          // if(typeof data === 'string'){
          //   chrome.tabs.create({url: chrome.extension.getURL('index.html')}, function(tab){

          //   });
          // }

          // if(typeof data === 'object') {
          //   chrome.tabs.create({url: chrome.extension.getURL('json.html')}, function(tab){

          //   });
          // }

       });



   }
});
