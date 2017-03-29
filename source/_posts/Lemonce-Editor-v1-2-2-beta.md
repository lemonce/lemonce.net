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
- Fixed case blank right-click menu defaults to case folder.
- Fixed the problem that $IT can save the state only once.
- 
修正 case空白区右键菜单  默认进入 case文件夹
修正 suite空白区右键菜单  默认进入 suite文件夹
修复 WebView未清空上次执行状态而影响测试结果的问题

**New Functions**
- Added `Tab` right-click menu to allow close and separate views.
- 新增 Tab的右键菜单，允许切换左右视图
- 新增 浏览器Tab右键菜单弹出webview
- 新增 import 按钮，快速引用工作空间内的应用

## Updates for version 2.0.4
---
**Bug Fix**
- 修复 可以稳定的打开调试器，解决了某些场景下无法打开调试器的错误
- 修复 dblclick 双击动作的触发问题
- 增强 使用了更加稳定的RPC通讯提高回放的稳定性
- 修复 LCVM子过程parameter和arguments同名时，变量访问混乱的问题
- 修复 ‘4=3’表达式可以通过的错误
- 修正 高亮偏移计算已经正确遍历到根节点
- 修正 开始执行测试可以在任何时候及时停止
- 修正 裁剪了moment模块，提高了一些加载速度

**New Functions**
- 新增 可以使用 click <option> 的方式操作下拉菜单
- 新增 录制器可以使用xpath表示选择器
- 增强 提高了录制器的准确率
- 新增 编辑器自动换行
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