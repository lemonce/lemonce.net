---
title: Lemonce Editor v2.0.0
date: 2017-02-15 13:50:33
keywords: 'Editor'
---

## Version 2.0.0 is online
##### date:2017-02-15
---

Today we are happy to announce that Lemonce Editor releases version 2.0.0.  

Compared with the previous version 1, version 2 has three major changes below.
- Adopted a new version of the engine.
- Adopted the LemonceDriver which is more sophiscated than WebDriver in many ways. [more details](/feature/lcdriver.html)
- Changed the internal frame from Augular to Vue.

The new version is closer to beta right now and we will improve it gradually in the subsequent versions.
The UI of version 2 which has a big change compared with version 1 will be a whole new experience for you, but it will also help you to start your test more easily, especially for those who are used to Visual Studio Code.
<br>

## Updates for version 2.0.1
---
**Bug Fix**
- Fixed the issue that the console output misalignment cause of the communication delay.
- Fixed the issue that the magic keyword "$IT" only save the selector once.

**New Functions**
- Added a new function to record "move" action (shift+click).
- Added a new function to record "assert" action(Ctrl+click).
- Added action statements using the latest selector as default which with no selector.
- Added action statements using the value of magic keyword "$IT" as selector which with no selector.
- Added a new function to stop suite.
- Added a role to change the icon of the play/stop button when switch to playing/stoping the case.
- Added a role to change the icon of the play/stop button when switch to playing/stoping the suite.
- Added the terminal(the command line window).
<br>

## Updates for version 2.0.3
---
**Bug Fix**
- Fixed the issue that the webview not back to its original,pristine state when running another task.

**Optimized**
- Optimized the delault case folder of the right-click menu in the case files editing area.
- Optimized the delault suite folder of the right-click menu in the suite files editing area.
- Adjusted the container's style when the container was selected or not.
- Adjusted the width of the horizontal sroll to be consistent with the vertical one in the case editor.
- Canceled the output panel in the webview, which merged with the debugger. 

**New Functions**
- Added a right-click memu of the tab window which provided a quick way to close or detach it.
- Added a unique icon in the webview tab to distinguish other tabs.
- Added a right-click menu of the webview tab which provided a quick way to close it.
- Added the debugger's console panel to debug and analyze statements.
- Added the debugger's output panel to log the status information.
- Added a paragraph mark in the output panel to assist tracking and locating the errors.
<br>

## Updates for version 2.0.4
---
**Bug Fix**
- Fixed the issue that sometimes the built-in developer tools in the webview couldn't be opened.
- Fixed the issue that "dblclick" don't execute the double-click action.
- Fixed the issue that when the parameter and argument has the same name,the variables confused.
- Fixed the issue that sometimes the case can't be stop running.
- Fixed issues that a kind of expressions allowed before("4=3").

**Optimized**
- Optimized the calculation of the highlight displacement,all of the parent-node traversals calculated.
- Optimized the RPC communication model to assure its stability.
- Increased the recording accuracy.
- Canceled the moment model for faster loading.

**New Functions**
- Added the option menu to choose the xpath selector as default before recording.
- Added a method "click /option/" to choose the select drop-down menu.
- Added automatically word wrapped in the editor.
<br>

## Updates for version 2.0.5
---
**Bug Fix**
- Fixed the issue that when using the inspect element, the current selection didn't be replaced.
- Fixed the issue that the suite report displayed incorrectly.

**Optimized**
- Optimized the style of the output panel.
- Optimized for displaying the graphical report.

**New Functions**
- Added the array syntax.
- Added the object syntax.
- Added the "for in/of" syntax.
- Added the "$BUTTON" syntax to simulate operating the right/middle/left mouse button.
- Added using the up or down arrow key to browse the list of previous commands in the debugger console.
<br>