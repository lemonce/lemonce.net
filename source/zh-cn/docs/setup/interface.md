title: '灵萌测界面'
---

在配置完成工作空间以后，灵萌测客户端的界面如下图被分为四个区域。类似于一些代码编辑IDE，灵萌测采用了常用的用户界面：资源管理器列在左方，显示了用户能选择到的所有文件及文件夹；编辑器放在右方，显示用户正在编辑的内容。

<img class="large-images" src="/images/firstrun-02.png">
<br>

## 1 菜单栏
---

位于客户端顶部，包括了文件、编辑、视图和帮助四个一级菜单。

#### 1.1 文件

- **New** `Ctrl+N` 新建测试用例（Ctrl+N）或套件。
- **Open** `Ctrl+O` 打开一个现有的用例。
- **Open Workspace/Folder** 打开一个文件夹作为工作空间。
- **Close Workspace**  关闭当前的工作空间。
- **Restart** `Ctrl+R` 重启灵萌测客户端。
- **Exit** `Ctrl+W` 退出灵萌测客户端。

#### 1.2 编辑

- **Undo / Redo** `Ctrl+Z`/`Ctrl+Y`
- **Cut / Copy / Paste** `Ctrl+X`/`Ctrl+C`/`Ctrl+V`
- **Delete** `Del`
- **Select All** `Ctrl+A` 

#### 1.3 视图

- **Command Palette** `Ctrl+Shift+P` 在编辑区顶部打开一个命令行。
- **Toggle Dev Tool** `Ctrl+Shift+I` 
- **Zoom in/out** `Ctrl+=`/`Ctrl+-`
- **Reset Zoom** `Ctrl+0`
- **Toggle Fullscreen** `F11`
- **Toggle Side Bar** `Ctrl+B` 显示或隐藏边栏。
- **Debug Console** `Ctrl+D` 打开或关闭调试器面板。

#### 1.4 帮助

- **Learn More** 
- **License**
<br>

## 2 视图边栏 && 功能边栏
---

视图边栏位于客户端的最左侧，包含了三个按键用于转换功能边栏。能够帮助用户快速地对项目进行编辑。

#### 2.1 <i class="fa fa-code fa-2x"></i> **资源管理器**  

资源管理器用于浏览，打开和管理用户项目中所有的文件及文件夹。
<br>
**2.1.1 打开编辑区** 

在资源管理器的顶部为“OPEN EDITORS”的区域，用于临时显示正在编辑或者待编辑的多个文件。例如，如果用户正在对文件进行以下四种操作，该文件就会被列入到“OPEN EDITORS”中。

- Make a change to a file.对一个文件做出改动。
- Double-click a file's header.
- Double-click a file in the Explorer.在资源管理器中双击一个文件。
- Open a file that is not part of the current folder.

Just click an item in the OPEN EDITORS section, and it becomes active in Lemonce.

Once you are done with your task, you can remove but not delete files seperately from the **OPEN EDITORS** section by click <i class="fa fa-times"></i>.
<br>
**2.1.2 编辑区激活按钮**

以下三个按钮，用于激活编辑区的相应区域。

- <i class="fa fa-file-code-o fa-2x" style="color:green"></i> **Toggle Case Panel** 切换用例版块

- <i class="fa fa-file-text-o fa-2x" style="color:green"></i> **Toggle Suite Panel** 切换套件版块

- <i class="fa fa-globe fa-2x" style="color:green"></i> **Open Webview** 打开网页视图
<br>

**2.1.3 WORKSPACE** 

You can click the button <span class="button"> open folder</span> under the label **NO WORKSPCACE** to open a folder as workspace at the first time.

After opening a folder in Lemonce, the contents of the folder are shown in the Explorer. You can do many things by right-click from here:
- Create, delete, and rename files and folders.
- Open the existed cases/folders in file explorer.
- `Move files and folders with drag and drop.`
- `Use the context menu to explore all options.`

#### 2.2 <i class="fa fa-cog fa-2x"></i> **Config Panel** 

There are just two functions below in side bar now,more functions are coming soon.
- Change the language to English/Chinese
- Open/close command pallete

#### 2.3 <i class="fa fa-bar-chart fa-2x"></i> **View Reports** 

Reports are listed in side bar chronologically.Click one of them you will see [more details](docs/code-editor/index.html) in popup of reports.
<br>

<img class="large-images" src="/">
<br>

## 4 Editor Groups
---
The main area to edit your files. You can open as many as editors you want and you can also open Webview at one side while editing.
More details is offered in [Code Editor](docs/code-editor/index.html).

#### 4.1 Case-Editor && WebView

#### 4.2 Suite-Editor && WebView

<br>

## 5 Panel
---
You can display different panels below the editor region for output or debug information, errors and warnings, or an integrated terminal.