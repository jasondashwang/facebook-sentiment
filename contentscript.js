'use strict';

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
   // If the received message has the expected format...
   if (msg.text === 'facebook') {
       // Call the specified callback, passing
       // the web-page's DOM content as argument

       $('body').css('background-color', 'blue');
   }
});


// var watson = require('watson-developer-cloud');
// var fs = require("fs");
// var path = require('path');
// var exec = require('child_process').exec
// var alchemy_language = watson.alchemy_language({
//  api_key: "e126fa19ab91c2c7807cbc26b5682cbfc162dbcf"
// });

// var sample = "except my panic monster is defective. most procrastinators I know have the ability to do everything last minute bc they don't want to deal with consequences i have a panic monster but it has this disease called self-sabatoge like when it's 72 hours to a deadline, panic monster comes out and says 'you'll fail this paper if you don't finish it' but then he says 'but fuck it it's not like you could do anything about that at this point, you can't possibly finish on time because of all the time you wasted. my panic monster is broken because of constant desensitization to fear and anxiety. it sorta sucks way more than it sounds like it does."
// var sample2 = "I'm really in love with my puppy, it's very cute"
// var sample3 = `interesting article particularly about interactions with other stimulants + marijuana. I'm dying to know if modafinil could benefit ADHD patients bc frankly it's actually safer and far less abusable than traditional stimulants and at the same time it seems like it's more effective. the author talked about "side effects" and it making their heart race but that only happened when they had coffee or smoked so I feel like it was some kind of synergy with caffeine/nicotine`
// var sample4 = `https://www.instagram.com/colgategammaphibeta/`


// var parameters = {
//  extract: "doc-sentiment",
//  sentiment: 1,
//  maxRetrieve: 1,
//  text: sample4
// };

// alchemy_language.combined(parameters, function (err, response) {
//  if (err)
//    console.log('error:', err);
//  else
//    console.log(JSON.stringify(response, null, 2));
// });

