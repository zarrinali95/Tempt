// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");

  });

  chrome.browserAction.onClicked.addListener(function() {
  alert('Hello, World!');
  })

  var min = 1;
var max = 5;
var current = min;

function updateIcon() {
  chrome.browserAction.setIcon({path:"icon" + current + ".png"});
  current++;

  if (current > max)
    current = min;
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
});
