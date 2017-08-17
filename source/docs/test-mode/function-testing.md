title: 'Function Testing'
---
After [creating test case](/docs/guide/case.html) and [completing a suite](/docs/guide/suite.html), if you have no need on crossbrowser testing when it comes to testing process, you can start your function testing directly in webview.

<br/>
## 1 Webview
---
Webview built in Lemonce Editor is essential for function testing.

<br/>
#### 1.1 Tool Bar
<hr width="50%" align="left">

The whole toolbar is shown below. The address input box is in the middle, which you can enter URL in and press <button>Enter</button> on your keyboard to jump.

<img class="box-shadow" src="/images/code-editor/webview-toolbar.png">

- <i class="fa fa-arrow-left"></i> **Back** / <i class="fa fa-arrow-right"></i> **Next**  Back/Forward to the previous/next page.
- <i class="fa fa-home"></i> **Homepage** Back to homepage (The default is `about:blank`).
- <i class="fa fa-refresh"></i> **Refresh** Refresh the current page. 
- <i class="fa fa-pencil-square-o"></i> **Debugger** Developer tool is a debugger for testers or developers with certain coding ability.

<img class="guide-images" src="/images/code-editor/webview-debugger.png">

#### 1.2 Open Webview
<hr width="50%" align="left">

Only the webview is opened, can function testing get started. There are two ways to open webview.

- **Automatically** No matter in case or suite editor, click <i class="fa fa-play"></i> button, Lemonce Editor will get splited and the webview will be opened automatically at the same time.
- **Manually** Click <i class="fa fa-globe fa-2x" style="color:green"></i> button to open webview in the side bar,.

<br/>
## 2 Start testing
---
Click <i class="fa fa-play"></i> button and Lemonce Editor will default to start your testing in webview.

You can display different panels below the editor region for output or debug information or errors and warnings. After the test ,you can check your [test report](/docs/guide/reports.html).