title: 'Lemonce Update News'
layout: page without sidebar
---
## Updates for version 2.0.11
---

**Optimized**

- Optimized the business process of license.
- Optimized mailbox authentication of license.

**New Functions**

- Added versions available on Mac.
- Added versions available on Linux.
- When the web page uses the basic authentication of the HTTP protocol for user authentication, the webview will pop up corresponding window for inputing user information.

## Updates for version 2.0.10
---

**Optimized**

- Optimized that when click the case/suite-running button in the suite editor,the webview will be opened automatically.

**New Functions**

- Added "Help" button in help submemu of menu bar which links to the offical help docs.
- Added "Feedback" button in help submemu of menu bar which links to the official feedback page.

## Updates for version 2.0.9
---

**Bug Fix**

- Fixed the issue that sometimes the codes in the report couldn't display correctly.
- Fixed the issue that the test case couldn't run correctly in some pages.
- Fixed the issue that the CSV file couldn't be imported when the name include a space.
- Fixed the issue that the code couldn‘t get line wrapped when adjusting the area size of code-editor.

**Optimized**

- Optimized when the test case running error, the error line in the case editing area will be highlighted.

**New Functions**

- Added a shortcut key that press <button>Ctrl+F</button> to find the string in the case editor.
- Added a shortcut key that press <button>Ctrl+F</button> twice to replace the string in the case editor.
- Added a shortcut key that press <button>F5</button> to start running the current active test case.
- Added a shortcut key that press <button>F9</button> to start running the current active test suite.
- Added a function to set the font size of the case in the menu bar with six font sizes to choose.
- Added <button>Open Output</button> 和 <button>Close Output</button> in Config Panel

## Updates for version 2.0.8
---

**Bug Fix**

- Fixed the issue that the recorder couldn't create the correct selector which required an escape character to change semantics.

**Optimized**

- Adjusted the syntax highlighting.
- Optimized the XPath analyzer.
- Optimized that the text in the output/console pannel can be selected and copied.
- Optimized that when click the <i class="fa fa-play"></i> button in the case editor,the webview will be opened automatically.
- Optimized the communiacation program to ensure the cases/suites running well.
- Optimized that when quit lemonce, there will be a popup to prompt you.

**New Functions**

- Added the `keyboard` syntax to simulate the whole keyboard operations.
- Added <i class="fa fa-download"></i> button in the case editor for importing cases quickly.
- Added <button>Ctrl+S</button> to save the current active case.

## Updates for version 2.0.7
---

**Bug Fix**

- Fixed the issue that sometimes the address bar in the webvew showing the wrong "about:blank" address when jumping into a new page.
- Fixed the issue that sometimes the driver executed the action statement twice.

**Optimized**

- Optimized that the webview will be rebooted when running cases crash.
- Optimized that the output pannel will show more information for debugging when the upload fail.

**New Functions**

- Added <i class="fa fa-pause"></i> button to pause the running case.
- LC_Driver support the keyboard event.
- LCVM support the focusin/out event.
- Added the `forward` syntax.
- Added the `back` syntax.
- Added the `scroll` syntax.
- Added the `drop` syntax.

## Updates for version 2.0.6
---

**Bug Fix**

- Fixed the issue that sometimes the recorder created additional statements.
- Fixed the issue that the comments didn't match the language setted.

**Optimized**

- When recording the `jumpto` action, the time of created `wait` statements was adjusted to 2 second.
- Optimized the `format` function.

**New Functions**

- Added the `upload` function.
- Added the `upload` syntax.
- Added a tool for bluk importing the '.csv' file to '.lc2' file.

## Updates for version 2.0.5
---
**Bug Fix**
- Fixed the issue that when using the inspect element, the current selection didn't be replaced.
- Fixed the issue that the suite report displayed incorrectly.

**Optimized**
- Optimized the style of the output panel.
- Optimized for displaying the graphical report.

**New Functions**
- Added the `array` syntax.
- Added the object syntax.
- Added the `for in/of` syntax.
- Added the `$BUTTON` syntax to simulate operating the right/middle/left mouse button.
- Added using the up or down arrow key to browse the list of previous commands in the debugger console.

## Updates for version 2.0.4
---
**Bug Fix**
- Fixed the issue that sometimes the built-in developer tools in the webview couldn't be opened.
- Fixed the issue that `dblclick` don't execute the double-click action.
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
- Added a method `click <option>` to choose the select drop-down menu.
- Added automatically word wrapped in the editor.

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

## Updates for version 2.0.1
---
**Bug Fix**
- Fixed the issue that the console output misalignment cause of the communication delay.
- Fixed the issue that the magic keyword "$IT" only save the selector once.

**New Functions**
- Added a new function to record `move` action <button>Shift+click</button>.
- Added a new function to record `assert` action <button>Ctrl+click</button>.
- Added action statements using the latest selector as default which with no selector.
- Added action statements using the value of magic keyword "$IT" as selector which with no selector.
- Added a new function to stop suite.
- Added a role to change the icon of the play/stop button when switch to playing/stoping the case.
- Added a role to change the icon of the play/stop button when switch to playing/stoping the suite.
- Added the terminal(the command line window).

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