title: 'Suite Editor'
---
## 工具栏
---
整个工具栏显示如下。

<img class="long-images" src="/images/code-editor/suite-toolbar.png">
<br>

<i class="fa fa-file-text-o"></i> **New Suite**  

在工作空间之外创建一个新的套件，默认名称为“Untitle-0.lct”，用户需要自己寻找一个保存路径来进行保存。用户**无法使用** `Ctrl+N` 来新建套件，这个快捷键仅仅适用于建立新的用例。

<i class="fa fa-folder-open-o"></i> **Oper Suite**

打开本地的测试套件。

<i class="fa fa-floppy-o"></i> **Save Suite** 

- 如果测试套件是在工作空间中建立的，只需要点击按钮保存即可。
- 如果套件是通过菜单栏或者当前工具栏创建的，并且是第一次进行保存，用户需要自己寻找一个路径来进行保存。也可以使用`Ctrl+S`快捷键进行操作。


<i class="fa fa-times"></i> **Remove Suite**

选中的用例会以高亮的灰色显示，移除但不删除它。

<i class="fa fa-arrow-up"></i> **Move Up/** <i class="fa fa-arrow-down"></i> **Move Down**

用上下键来改变测试用例的在套件中的执行顺序，选中的用例会以高亮的灰色显示。

<i class="fa fa-play"></i> **Run Suite/** <i class="fa fa-stop"></i>  **Stop Suite**

开始执行或结束执行当前的测试套件。


<i class="fa fa-columns"></i>  **Split Editor**

点击该按钮以分割编辑器，可以在编辑器另一侧显示相同的内容，并且任何对内容的改动都会同步到另一侧。工作原理和 Visual Studio Code 中的”分割编辑器“相同。

<i class="fa fa-list-alt"></i> **Toggle Explorer**

打开用例库。用户可以选择相应的用例添加到当前的套件中去。