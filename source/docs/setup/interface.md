title: 'Lemonce Interface'
---

After the configuration, you will see the UI of Lemonce is divided into four areas a as below. Like code editors, Lemonce adopts a common user interface and layout of an explorer on the left, showing all of the files and folders you have access to, and an editor on the right, showing the content of the files you have opened.

<center><img src="/images/setup/interface-whole.png"></center>
<p align="center">Lemonce interface on Windows</p>

<center><img class="box-shadow" src="/images/setup/interface-mac.jpg"></center>
<p align="center">Lemonce interface on Mac</p>

<br/>
## 1 Menu bar
---

Located on the top including File,Edit,View and Help.

#### 1.1 File

- **New** <button>Ctrl+N</button> Create a new case or suite.
- **Open** <button>Ctrl+O</button> Open a existed case.
- **Open Workspace/Folder** Open a folder as workspace.
- **Close Workspace**  Close the current workspace.
- **Restart** <button>Ctrl+R</button> Restart Lemonce.
- **Exit** <button>Ctrl+W</button> Exit Lemonce.

#### 1.2 Edit

- **Undo / Redo** <button>Ctrl+Z</button>/<button>Ctrl+Y</button>
- **Cut / Copy / Paste** <button>Ctrl+X</button>/<button>Ctrl+C</button>/<button>Ctrl+V</button>
- **Delete** <button>Del</button>
- **Select All** <button>Ctrl+A</button>

#### 1.3 View

- **Command Palette** <button>Ctrl+Shift+P</button> Open a command palette at the top of editor area.
- **Toggle Dev Tool** <button>Ctrl+Shift+I</button> 
- **Zoom in/out** <button>Ctrl+=</button>/<button>Ctrl+-</button>
- **Reset Zoom** <button>Ctrl+0</button>
- **Toggle Fullscreen** <button>F11</button>
- **Toggle Side Bar** <button>Ctrl+B</button> Show or hide side bar.
- **Debug Console** <button>Ctrl+D</button> Open/Close the Panel.

#### 1.4 Help

- **Learn More** 
- **License** About the license.

<br/>
## 2 View bar && Side bar
---
View bar is located on the far left-hand side including three buttons to switch the view of Side bar, which can assist you while working on your project.

#### 2.1 **Explore**  <i class="fa fa-code fa-2x"></i>
<hr width=35% align="left">

The Explorer is used to browse, open, and manage all of the files and folders in your project. 

**I. OPEN EDITORS** 

At the top of the Explorer is a section labeled  <span class="btn-gray">**OPEN EDITORS**</span> . This is a list of active files or previews. These are files you previously opened in Lemonce that you're working on. For example, a file will be listed in the <span class="btn-gray">**OPEN EDITORS**</span> section if you:

- Make a change to a file.
- Double-click a file's header.
- Double-click a file in the Explorer.
- Open a file that is not part of the current folder.

Just click an item in the <span class="btn-gray">**OPEN EDITORS**</span> section, and it becomes active in Lemonce.

Once you are done with your task, you can remove but not delete files seperately from the <span class="btn-gray">**OPEN EDITORS**</span> section by click <i class="fa fa-times"></i>.

**II. Buttons of editor groups**

There are three buttons to active different corresponding areas of editor groups, you can find more detailed information below. 

- <i class="fa fa-file-code-o fa-2x" style="color:green"></i> **Toggle Case Panel**

- <i class="fa fa-file-text-o fa-2x" style="color:green"></i> **Toggle Suite Panel**

- <i class="fa fa-globe fa-2x" style="color:green"></i> **Open Webview**

**III. WORKSPACE** 

You can click the button <button class="btn-blue"> open folder</button> under the label <span class="btn-gray">**NO WORKSPCACE**</span> to open a folder as workspace at the first time.

After opening a folder in Lemonce, the contents of the folder are shown in the Explorer. You can do many things by right-click from here:
- Create, delete, and rename files and folders.
- Open the existed cases/folders in file explorer.
- `Move files and folders with drag and drop.`
- `Use the context menu to explore all options.`

<br/>
#### 2.2 **Config Panel** <i class="fa fa-cog fa-2x"></i> 
<hr width=35% align="left">

There are just two functions below in side bar now,more functions are coming soon.
- Change the language to English/Chinese
- Open/Close Cmd(command pallete)
- Open/Close Output

<br/>
#### 2.3 **View Reports** <i class="fa fa-bar-chart fa-2x"></i>
<hr width=35% align="left">

Reports are listed in side bar chronologically.Click one of them you will see [more details](/docs/guide/reports.html) in popup of reports.
<br/>

<img class="guide-images" src="/images/setup/interface-report.png">

<br/>
## 3 Editor Groups
---
The main area to edit your files. You can open as many as editors you want and you can also open Webview at one side while editing.
More details are offered in [Code Editor](docs/code-editor/index.html).

<br/>
## 4 Output && Console panel
---
You can display different panels below the editor region for output or debug information or errors and warnings.

- Two buttons on the top are used for switching between "Output" and "Console" panels
- Click <i class="fa fa-times-circle" color="grey"></i> on the right to close current panel.You can reopen the panel from "Edit" submenu in menu bar.
- Click <i class="fa fa-ban"></i> to clear the current panel.

<br/>
#### 4.1 **Output panel**
<hr width=35% align="left">

Take "logout" case as an example in the video, the following contents will be generated in the output panel.
<pre class='sublemon'>
 [18:57:32.488] Testing Start.
 [18:57:32.551] Line:4 Jump to 'https://www.npmjs.com/~lemoncase'.
 [18:57:32.561] Line:5 Wait 2333 ms.
 [18:57:35.585] Line:7 click '#user-info-drop-down-menu-toggle > svg:nth-child(4) > path:nth-child(1)'.
 [18:57:36.234] Line:9 click '#user-info-menu > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > form:nth-child(1) > button:nth-child(2)'.
 [18:57:36.242] Line:11 Wait 2000 ms.
 [18:57:38.235] End of execution
</pre>

Output information can be divided into the following sections:
- Testing Start && <span class="btn-blue">End of execution</span> (hightlighted blue to interval test cases)
- System time (show in the brackets)
- The line number of the executing codes
- Details of the running test cases

<br/>
#### 4.2 **Console panel**
<hr width=35% align="left">

You can try to use Lemoncase2 to finish some commands here.