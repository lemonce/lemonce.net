title: 'Lemonce Interface'
---

After the configuration, you will see the UI of Lemonce is divided into four areas a as below. Like code editors, Lemonce adopts a common user interface and layout of an explorer on the left, showing all of the files and folders you have access to, and an editor on the right, showing the content of the files you have opened.

<img class="large-images-special" src="/images/setup/interface-whole.png">
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

#### 1.2 Edit

- **Undo / Redo** `Ctrl+Z`/`Ctrl+Y`
- **Cut / Copy / Paste** `Ctrl+X`/`Ctrl+C`/`Ctrl+V`
- **Delete** `Del`
- **Select All** `Ctrl+A`

#### 1.3 View

- **Command Palette** `Ctrl+Shift+P` Open a command palette at the top of editor area.
- **Toggle Dev Tool** `Ctrl+Shift+I` 
- **Zoom in/out** `Ctrl+=`/`Ctrl+-`
- **Reset Zoom** `Ctrl+0`
- **Toggle Fullscreen** `F11`
- **Toggle Side Bar** `Ctrl+B` Show or hide side bar.
- **Debug Console** `Ctrl+D` Open/Close the Panel.

#### 1.4 Help

- **Learn More** 
- **License** About the license.

<br>
## 2 View bar && Side bar
---
View bar is located on the far left-hand side including three buttons to switch the view of Side bar, which can assist you while working on your project.

#### 2.1 **Explore**  <i class="fa fa-code fa-2x"></i>
<hr width=35% align="left">

The Explorer is used to browse, open, and manage all of the files and folders in your project. 

**I. OPEN EDITORS** 

At the top of the Explorer is a section labeled **OPEN EDITORS**. This is a list of active files or previews. These are files you previously opened in Lemonce that you're working on. For example, a file will be listed in the **OPEN EDITORS** section if you:

- Make a change to a file.
- Double-click a file's header.
- Double-click a file in the Explorer.
- Open a file that is not part of the current folder.

Just click an item in the OPEN EDITORS section, and it becomes active in Lemonce.

Once you are done with your task, you can remove but not delete files seperately from the **OPEN EDITORS** section by click <i class="fa fa-times"></i>.

**II. Buttons of editor groups**

There are three buttons to active different corresponding areas of editor groups, you can find more detailed information below. 

- <i class="fa fa-file-code-o fa-2x" style="color:green"></i> **Toggle Case Panel**

- <i class="fa fa-file-text-o fa-2x" style="color:green"></i> **Toggle Suite Panel**

- <i class="fa fa-globe fa-2x" style="color:green"></i> **Open Webview**

**III. WORKSPACE** 

You can click the button <span class="button"> open folder</span> under the label **NO WORKSPCACE** to open a folder as workspace at the first time.

After opening a folder in Lemonce, the contents of the folder are shown in the Explorer. You can do many things by right-click from here:
- Create, delete, and rename files and folders.
- Open the existed cases/folders in file explorer.
- `Move files and folders with drag and drop.`
- `Use the context menu to explore all options.`

<br>
#### 2.2 **Config Panel** <i class="fa fa-cog fa-2x"></i> 
<hr width=35% align="left">

There are just two functions below in side bar now,more functions are coming soon.
- Change the language to English/Chinese
- Open/close command pallete

<br>
#### 2.3 **View Reports** <i class="fa fa-bar-chart fa-2x"></i>
<hr width=35% align="left">

Reports are listed in side bar chronologically.Click one of them you will see [more details](/docs/guide/reports.html) in popup of reports.
<br>

<img class="large-images" src="/images/setup/interface-report.png">

<br>
## 3 Editor Groups
---
The main area to edit your files. You can open as many as editors you want and you can also open Webview at one side while editing.
More details are offered in [Code Editor](docs/code-editor/index.html).

<br>
## 4 Output && Console panel
---
You can display different panels below the editor region for output or debug information or errors and warnings.

- Two buttons on the top are used for switching between "Output" and "Console" panels
- Click <i class="fa fa-times-circle" color="grey"></i> on the right to close current panel.You can reopen the panel from "Edit" submenu in menu bar.
- Click <i class="fa fa-ban"></i> to clear the current panel.

<br>
#### 4.1 **Output panel**
<hr width=35% align="left">

Take "logout" case as an example in the video, the following contents will be generated in the output panel.
<pre class='sublemon'>
[3:10:57.926] Testing Start.
[3:10:57.932] Line:4 Jump to 'https://www.deepin.org/en/'.
[3:10:58.490] Line:5 Wait 555 ms.
[3:11:00.157] Line:7 click 'div.hs-toggle-menu'.
[3:11:01.495] Line:11 Jump to 'https://www.deepin.org/wp-login.php'.
[3:11:02.052] Line:12 Wait 555 ms.
[3:11:02.250] Line:14 click '#loginform > div:nth-child(3) > a:nth-child(1)'.
[3:11:02.746] Line:16 Jump to 'https://login.deepin.org/oauth2/authorize?client_id=0634ab169bf76a5df39812c4350778c83b3450e4'.
[3:11:03.305] Line:17 Wait 555 ms.
[3:11:08.306] RuntimeError, line:19,Error: No-response from last fetching.
[3:11:08.310] End of execution
</pre>

Output information can be divided into the following sections:
- Testing Start && End of execution (hightlighted blue to interval test cases)
- System time (show in the brackets)
- The line number of the executing codes
- Details of the running test cases

<br>
#### 4.2 **Console panel**
<hr width=35% align="left">

You can try to use Lemoncase2 to finish some commands here.