title: '版本更新消息'
layout: page without sidebar
---

## 版本更新 2.0.6
---

**修复**

- 某些情况下录制点击动作时，额外多录制一次的问题
- 注释对应语言

**优化**

- 当录制跳转语句时，默认等待2s
- `format`方法的实现方式

**新增**

- 上传功能及语法
- csv批量导入的命令行操作
<br>

## 版本更新 2.0.5
---
**修复**
- 抓取器默认替换原选中的选择器内容
- suite生成报告的新接口，正确连接并显示

**优化**
- 控制台输出样式
- suite运行后report报告功能及图形显示

**新增**
- 数组语法
- 对象语法
- `for in/of` 遍历器语法
- 鼠标全按钮动作仿真 `$BUTTON(=right,middle,left)`语法（支持鼠标右键）
- 调试器（console）按上箭头可以回溯历史命令
<br>

## 版本更新 2.0.4
---
**修复**
- 可以稳定的打开调试器，解决了某些场景下无法打开调试器的错误
- 修复 `dblclick` 双击动作的触发问题
- 修复 LCVM 子过程 parameter 和 arguments 同名时，变量访问混乱的问题
- 开始执行测试可以在任何时候及时停止
- 修复 ‘4=3’表达式可以通过的错误

**优化**
- 高亮偏移计算已经正确遍历到根节点
- 使用了更加稳定的RPC通讯提高回放的稳定性
- 提高了录制器的准确率
- 裁剪了 moment 模块，提高了一些加载速度

**新增**
- 新增 录制器可以使用xpath表示选择器
- 新增 可以使用 `click <option>` 的方式操作下拉菜单
- 新增 编辑器自动换行
<br>

## 版本更新 2.0.3
---
**修复**
- WebView未清空上次执行状态而影响测试结果的问题

**优化**
- case 空白区右键菜单，默认进入 case 文件夹
- suite 空白区右键菜单，默认进入 suite 文件夹
- container激活及未激活状态样式变化更显著
- case Editor横向及纵向滚动条宽度保持一致
- 浏览器 WebView 输出面板，输出面板与 debugger 控制台合并 

**新增**
- Tab的右键菜单，允许关闭和分离视图
- webview Tab提示图标
- 浏览器Tab右键菜单关闭webview
- debugger控制台窗口，调试语句
- debugger输出窗口，输出case及suite运行状态
- debugger调试状态段落标记，辅助查找错误提示行
<br>

## 版本更新 2.0.1
---
**修复**
- 修正通信延迟产生的（类似CPU超频错误）错位输出的问题
- 修复`$IT`仅保存一次状态的问题

**新增**
- 新增录制时 shift+click 可以录制 move 功能
- 新增录制时 Ctrl+click 可以录制 assert 功能
- 新增缺省选择器时，可默认使用上次选择器执行动作语句
- 新增suite停止功能
- 新增case运行及停止点击按钮的逻辑
- 新增suite运行及停止点击按钮的逻辑
- 新增命令行功能
<br>

## 版本更新 2.0.0
---

今天（2017-02-15）灵萌测2.0.0版本正式上线。相比于之前的1.0版本，2.0版本主要有以下几个大的改动。

- 采用了新版本的引擎
- 采用了自主开发的 LemonceDriver ，能够避开 WebDriver 所带来的一些问题 
- 将内部的框架从 Augular 改为 Vue

目前新的大版本更趋近于一个试用版本，我们会在后续的小版本更新中进行持续的改进。2.0版本的界面相对于之前的版本有一个大的改动，但是会帮助用户更直观简捷地开展测试，特别是曾经使用过VS Code用户。
<br>






