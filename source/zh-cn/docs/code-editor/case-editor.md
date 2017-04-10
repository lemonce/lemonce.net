title: '用例编辑器'
---
## 工具栏
---
整个工具栏显示如下。

<img class="long-images" src="/images/code-editor/case-toolbar.png">
<br>

<i class="fa fa-file-code-o"></i>  **New Case**  

在工作空间之外建立一个新的测试用例，默认命名为“Untitle-0.lc2",但用户需要寻找一个路径去保存。用户也可以使用`Ctrl+N`来完成这一步操作。

<i class="fa fa-folder-open-o"></i> **Open Case**

打开一个本地的用例。用户也可以使用`Ctrl+O`来完成这一步操作。

<i class="fa fa-floppy-o"></i> **Save Case** 

- If the case is created in work space,just click the button to finish saving. 
- 如果用例是在工作空间中创建的，只需要点击本按钮来完成保存。
- If the case is created by clicking the button "New Case" and it is the first time to save it, you have to find a path to save it.
- 如果用例是通过菜单栏或者
用户也可以使用`Ctrl+S`进行保存。

<i class="fa fa-crosshairs"></i> **Inspect Element**

Select the elements in the page and output the HTML to the code area.Right click to exit.

<i class="fa fa-link"></i> **Insert Link**

Insert the current URL in code area where the mouse pointer is located.

<i class="fa fa-play"></i> **Start Case/** <i class="fa fa-stop"></i> **Stop Case**

Start/Stop the current case.

<i class="fa fa-circle" style="color:red"></i> **Start Record/**<i class="fa fa-stop-circle-o" style="color:red"></i> **Stop Record**

将鼠标和键盘的操作转换为代码。一旦开始录制，这个按钮会从 <i class="fa fa-circle" style="color:red"></i> 变为 <i class="fa fa-stop-circle-o" style="color:red"></i>。 再次点击以停止录制。

<i class="fa fa-undo"></i> **Undo/** <i class="fa fa-repeat"></i> **Redo**

返回到上一步操作或前进到下一步操作，用户也可以使用 `Ctrl+Z`/`Ctrl+Y` 完成该操作。

<i class="fa fa-columns"></i> **Split Editor**

Split the editor and display the same content on the right, any changes on both sides will sync to the other side.Just like the split editor in Visual Studio Code.
分割编辑器，可以在另一边显示相同的内容，并且任何对内容的改动都会同步到另一边。工作原理和 Visual Studio Code 中的”分割编辑器“相同。
