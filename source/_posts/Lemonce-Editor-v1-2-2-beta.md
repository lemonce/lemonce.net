---
title: Lemonce Editor v2.0.0
date: 2017-02-15 13:50:33
keywords: 'Editor'
---

## Version 2.0.0 is online
---

Today we are happy to announce that Lemonce Editor releases version 2.0.0.  

The new version adds a right click menu to webview, which is the section that 
display the testing page in the editor. There are 3 options available in the menu:
log element, click element, assert element. They do exactly what their name 
suggest.  

Before v1.2.2, it's pain to work with disabled or readonly element. With the 
new menu, it will be easier to work with those now.
<br>

## Updates for version 2.0.1
---
**Bug Fix**
- Fixed the problem of dislocation output caused by communication delay (similar to the CPU overclocking error)
- Fixed the problem that $IT can save the state only once

**New Functions**
- Added `shift+click` can record `move` action when recording
- Added that you can use the previous default selector to execute the action statement.
- Added the function to stop suite
- Added the logic of case && suite running and stoping button
- Added command line

The new version is closer to beta right now and will ship with our new shiny 
driver. This driver is our JavaScript version of WebDriver, and is more 
sophiscated than WebDriver in many ways.  
<br>

## Updates for version 2.0.3
---
**Bug Fix**
- Fixed case blank right-click menu defaults to case folder
- Fixed the problem that $IT can save the state only once
- 

**New Functions**
- Added `Tab` right-click menu to allow close and separate views