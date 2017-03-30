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
- Fixed the problem of dislocation output caused by communication delay (similar to the CPU overclocking error).
- Fixed the problem that $IT can only save the current state once.

**New Functions**
- Added `shift+click` can record `move` action when recording.
- Added that you can use the previous default selector to execute the action statement.
- Added the function to stop suite.
- Added the logic of case && suite running and stoping button.
- Added command line.
<br>

## Updates for version 2.0.3
---
**Bug Fix**
- Fixed the webview not back to its original,pristine state when running another task.

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
- Fixed issues that sometimes the built-in developer tools in the webview couldn't be opened.
- Fixed issues that "dblclick" don't execute the double-click action.
- Fixed issues that when the parameter and argument has the same name,the variables confused.
- Fixed issues that a kind of expressions allowed before("4=3").
- Fixed issues that sometimes the running cases can't be stop.

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
修正 抓取器默认替换原选中的选择器内容
修正 suite生成报告的新接口，正确连接并显示

**New Functions**
新增 数组语法 [....]
新增 对象语法 {.....}
新增 for in/of 遍历器语法
新增 鼠标全按钮动作仿真$BUTTON(=right,middle,left)语法（支持鼠标右键）
新增 调试器（console）按上箭头可以回溯历史命令
优化 控制台输出样式
增强 suite运行后report报告功能及图形显示
<br>