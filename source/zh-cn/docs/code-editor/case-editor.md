title: '用例编辑器'
---
## 工具栏
---
整个工具栏显示如下。

<img  src="/images/code-editor/case-toolbar.png">
<br>

<i class="fa fa-file-code-o"></i>  **新建 Case**  

在工作空间之外建立一个新的测试用例，默认命名为“Untitle-0.lc2",但用户需要寻找一个路径去保存。用户也可以使用`Ctrl+N`来完成这一步操作。

<i class="fa fa-folder-open-o"></i> **打开 Case**

打开一个本地的用例。用户也可以使用`Ctrl+O`来完成这一步操作。

<i class="fa fa-floppy-o"></i> **保存 Case** 

- 如果用例是在工作空间中创建的，只需要点击本按钮来完成保存。
- 如果用例是通过菜单栏或者当前工具栏创建的，并且是第一次保存的时候，用户需要自己寻找一个路径去保存。

也可以使用`Ctrl+S`快捷键进行操作。

<i class="fa fa-crosshairs"></i> **查看元素**

选中页面内一个元素并在代码区域输出该元素的CSSPath。点击鼠标右键以退出。

<i class="fa fa-link"></i> **插入链接**

在代码生成的区域鼠标指针所在的位置插入当前网页的链接地址。

<i class="fa fa-play"></i> **运行 Case /** <i class="fa fa-pause"></i> **暂停 Case /** <i class="fa fa-play-circle-o"></i> **继续运行 Case**

开始、暂停或继续当前用例。

<i class="fa fa-stop"></i> **停止 Case**

停止正在运行的当前用例。

<i class="fa fa-circle" style="color:red"></i> **开始录制/** <i class="fa fa-stop-circle-o" style="color:red"></i> **结束录制**

将鼠标和键盘的操作转换为代码。一旦开始录制，这个按钮会从 <i class="fa fa-circle" style="color:red"></i> 变为 <i class="fa fa-stop-circle-o" style="color:red"></i>。 再次点击以停止录制。

**selector / xpath**

在录制过程中，获取页面内元素选择器的两种选择方式。`selector`为默认的CSSPath,`xpath`为XPath。

<i class="fa fa-undo"></i> **撤销 /** <i class="fa fa-repeat"></i> **重复**

返回到上一步操作或前进到下一步操作，用户也可以使用 `Ctrl+Z`/`Ctrl+Y` 完成该操作。

<i class="fa fa-columns"></i> **分离视图**

点击该按钮以分割编辑器，可以在编辑器另一侧显示相同的内容，并且任何对内容的改动都会同步到另一侧。工作原理和 Visual Studio Code 中的“分割编辑器”相同。

<br/>
## 主界面
---
整个主界面展示如下。分为两个部分：
- Case 列表
- 代码编辑区

<img class="large-images" src="/images/code-editor/case-interface-zh.png">
<br/>

**Case 列表**

Case 列表展示的是工作空间中的所有的 Case，双击以激活需要编辑的 Case，会在 Lemonce 右方弹出该 Case 中所包含的代码。

**Case 代码**

用户通过录制或者键盘输入都会在此区域生成相应的lc2代码，可以直接在编辑区内对代码进行增删改查。