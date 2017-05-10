title: '套件编辑器'
---
## 工具栏
---
整个工具栏显示如下。

<img class="long-images" src="/images/code-editor/suite-toolbar.png">
<br>

<i class="fa fa-file-text-o"></i> **新建 Suite**  

在工作空间之外创建一个新的套件，默认名称为“Untitle-0.lct”，用户需要自己寻找一个保存路径来进行保存。用户**无法使用** `Ctrl+N` 来新建套件，这个快捷键仅仅适用于建立新的用例。

<i class="fa fa-folder-open-o"></i> **打开 Suite**

打开本地的测试套件。

<i class="fa fa-floppy-o"></i> **保存 Suite** 

- 如果测试套件是在工作空间中建立的，只需要点击按钮保存即可。
- 如果套件是通过菜单栏或者当前工具栏创建的，并且是第一次进行保存，用户需要自己寻找一个路径来进行保存。也可以使用`Ctrl+S`快捷键进行操作。


<i class="fa fa-times"></i> **移除 Suite**

选中的用例会以高亮的灰色显示，移除但不删除它。

<i class="fa fa-arrow-up"></i> **上移/** <i class="fa fa-arrow-down"></i> **下移**

用上下键来改变测试用例的在套件中的执行顺序，选中的用例会以高亮的灰色显示。

<i class="fa fa-play"></i> **运行 Suite/** <i class="fa fa-stop"></i>  **停止运行 Suite**

开始执行或结束执行当前的测试套件。


<i class="fa fa-columns"></i>  **分离视图**

点击该按钮以分割编辑器，可以在编辑器另一侧显示相同的内容，并且任何对内容的改动都会同步到另一侧。工作原理和 Visual Studio Code 中的”分割编辑器“相同。

<i class="fa fa-list-alt"></i> **档案管理**

打开用例库。用户可以选择相应的用例添加到当前的套件中去。

<br/>
## 主界面
---
整个主界面展示如下。分为三个部分：
- Suite 列表
- Case 列表
- 用例库

<img class="large-images" src="/images/code-editor/suite-interface.png">
<br/>

**Suite 列表**

Suite 列表展示的是工作空间中的所有的 Suite，单击以激活需要编辑的 Suite，会在右方的 Case 列表中显示出该 Suite 所包含的 Case。

**Case列表**

Case 列表显示的是当前 Suite 内包含的 Case。Case 列表分为三列：Case 的编号，Case 的名称以及 Case 当前的状态。Case 状态分为：待运行状态 Ready；通过状态 Pass；失败状态 Failed。

**用例库**

用例库展示的是当前工作空间下的所有 Case，以 Case 的名称排序。双击所需的 Case 可以将其导入到 Case 列表之中来形成用户所需的 Suite。

**注意:** 如果用户重命名了一个 Case，并且该 Case 之前已经在一个 Suite 中被引用，Case列表中该 Case 的名称不会发生改变，但用例库中名称会产生重命名同步。用户需要重新从用例库中导入该 Case，否则可能会出现 Suite 无法执行或执行出错的情况。