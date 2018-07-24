// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'developer.chrome.com'},
        }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'drive.google.com'},
        }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'docs.google.com'},
       }),
         new chrome.declarativeContent.PageStateMatcher({
           pageUrl: {hostEquals: 'slides.google.com'},
       }),
         new chrome.declarativeContent.PageStateMatcher({
           pageUrl: {hostEquals: 'sheets.google.com'},
      }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'www.facebook.com'},
        }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'www.youtube.com'},
        }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'www.instagram.com'},
        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'www.twitter.com'},
        })
        ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
});
