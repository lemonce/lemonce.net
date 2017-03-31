title: '灵萌测界面'
---

After the configuration, you will see the UI of Lemonce is divided into four areas a as below. Like code editors, Lemonce adopts a common user interface and layout of an explorer on the left, showing all of the files and folders you have access to, and an editor on the right, showing the content of the files you have opened.


<img class="large-images" src="/images/firstrun-02.png">
<br>

## 1 菜单栏
---

位于客户端的顶部，包括了File（文件）、Edit（编辑）、View（视图）和 Help（帮助）四个按钮。

#### File

- **New** `Ctrl+N` 新建测试用例（Ctrl+N）或套件。
- **Open** `Ctrl+O` 打开一个现有的用例。
- **Open Workspace/Folder** 打开一个文件夹作为工作空间。
- **Close Workspace**  关闭当前的工作空间。
- **Restart** `Ctrl+R` 重启灵萌测客户端。
- **Exit** `Ctrl+W` 退出灵萌测客户端。

#### Edit

- **Undo / Redo** `Ctrl+Z`/`Ctrl+Y`
- **Cut / Copy / Paste** `Ctrl+X`/`Ctrl+C`/`Ctrl+V`
- **Delete** `Del`
- **Select All** `Ctrl+A` 

#### View

- **Command Palette** `Ctrl+Shift+P` 在编辑区顶部打开一个命令行。
- **Toggle Dev Tool** `Ctrl+Shift+I` 
- **Zoom in/out** `Ctrl+=`/`Ctrl+-`
- **Reset Zoom** `Ctrl+0`
- **Toggle Fullscreen** `F11`
- **Toggle Side Bar** `Ctrl+B` 显示或隐藏边栏。
- **Debug Console** `Ctrl+D` 打开或关闭调试器面板。

#### Help

- **Learn More** 
- **License**
<br>

## 2 View bar && Side bar
---
View bar is located on the far left-hand side including three buttons to switch the view of Side bar, which can assist you while working on your project.
视图边栏位于客户端的最左侧，包含了三个按键用于转换功能边栏。

#### 2.1 <i class="fa fa-code fa-2x"></i> **Explore**  

The Explorer is used to browse, open, and manage all of the files and folders in your project. 
<br>
**2.1.1 OPEN EDITORS** 

At the top of the Explorer is a section labeled **OPEN EDITORS**. This is a list of active files or previews. These are files you previously opened in Lemonce that you're working on. For example, a file will be listed in the **OPEN EDITORS** section if you:

- Make a change to a file.
- Double-click a file's header.
- Double-click a file in the Explorer.
- Open a file that is not part of the current folder.

Just click an item in the OPEN EDITORS section, and it becomes active in Lemonce.

Once you are done with your task, you can remove but not delete files seperately from the **OPEN EDITORS** section by click <i class="fa fa-times"></i>.
<br>
**2.1.2 Buttons of editor groups**

There are three buttons to active different corresponding areas of editor groups, you can find more detailed information below. 


- <i class="fa fa-file-code-o fa-2x" style="color:green"></i> **Toggle Case Panel**

- <i class="fa fa-file-text-o fa-2x" style="color:green"></i> **Toggle Suite Panel**

- <i class="fa fa-globe fa-2x" style="color:green"></i> **Open Webview**
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