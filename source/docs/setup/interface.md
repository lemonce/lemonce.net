title: 'Lemonce Interface'
---

After the configuration, you will see the UI of Lemonce is divided into four areas a as below. Like code editors, Lemonce adopts a common user interface and layout of an explorer on the left, showing all of the files and folders you have access to, and an editor on the right, showing the content of the files you have opened.

<img class="large-images" src="/images/setup/interface-whole.png">
<br>

## 1 Menu bar
---

Located on the top including File,Edit,View and Help.

#### 1.1 File

- **New** `Ctrl+N` Create a new case or suite.
- **Open** `Ctrl+O` Open a existed case.
- **Open Workspace/Folder** Open a folder as workspace.
- **Close Workspace**  Close the current workspace.
- **Restart** `Ctrl+R` Restart Lemonce.
- **Exit** `Ctrl+W` Exit Lemonce.

#### Edit

- **Undo / Redo** `Ctrl+Z`/`Ctrl+Y`
- **Cut / Copy / Paste** `Ctrl+X`/`Ctrl+C`/`Ctrl+V`
- **Delete** `Del`
- **Select All** `Ctrl+A`

#### View

- **Command Palette** `Ctrl+Shift+P` Open a command palette at the top of editor area.
- **Toggle Dev Tool** `Ctrl+Shift+I` 
- **Zoom in/out** `Ctrl+=`/`Ctrl+-`
- **Reset Zoom** `Ctrl+0`
- **Toggle Fullscreen** `F11`
- **Toggle Side Bar** `Ctrl+B` Show or hide side bar.
- **Debug Console** `Ctrl+D` Open/Close the Panel.

#### Help

- **Learn More** 
- **License**
<br>

## View bar && Side bar
---
View bar is located on the far left-hand side including three buttons to switch the view of Side bar, which can assist you while working on your project.

####  <i class="fa fa-code fa-2x"></i> **Explore**  

The Explorer is used to browse, open, and manage all of the files and folders in your project. 
<br>
**OPEN EDITORS** 

At the top of the Explorer is a section labeled **OPEN EDITORS**. This is a list of active files or previews. These are files you previously opened in Lemonce that you're working on. For example, a file will be listed in the **OPEN EDITORS** section if you:

- Make a change to a file.
- Double-click a file's header.
- Double-click a file in the Explorer.
- Open a file that is not part of the current folder.

Just click an item in the OPEN EDITORS section, and it becomes active in Lemonce.

Once you are done with your task, you can remove but not delete files seperately from the **OPEN EDITORS** section by click <i class="fa fa-times"></i>.
<br>
**Buttons of editor groups**

There are three buttons to active different corresponding areas of editor groups, you can find more detailed information below. 


- <i class="fa fa-file-code-o fa-2x" style="color:green"></i> **Toggle Case Panel**

- <i class="fa fa-file-text-o fa-2x" style="color:green"></i> **Toggle Suite Panel**

- <i class="fa fa-globe fa-2x" style="color:green"></i> **Open Webview**
<br>

**WORKSPACE** 

You can click the button <span class="button"> open folder</span> under the label **NO WORKSPCACE** to open a folder as workspace at the first time.

After opening a folder in Lemonce, the contents of the folder are shown in the Explorer. You can do many things by right-click from here:
- Create, delete, and rename files and folders.
- Open the existed cases/folders in file explorer.
- `Move files and folders with drag and drop.`
- `Use the context menu to explore all options.`

#### <i class="fa fa-cog fa-2x"></i> **Config Panel** 

There are just two functions below in side bar now,more functions are coming soon.
- Change the language to English/Chinese
- Open/close command pallete

#### <i class="fa fa-bar-chart fa-2x"></i> **View Reports** 

Reports are listed in side bar chronologically.Click one of them you will see [more details](docs/code-editor/index.html) in popup of reports.
<br>

<img class="large-images" src="/">
<br>

## Editor Groups
---
The main area to edit your files. You can open as many as editors you want and you can also open Webview at one side while editing.
More details are offered in [Code Editor](docs/code-editor/index.html).

#### Case-Editor && WebView

#### Suite-Editor && WebView

<br>

## Output && Console panel
---
You can display different panels below the editor region for output or debug information or errors and warnings.