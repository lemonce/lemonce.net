title: 'Case Editor'
---
## Tool Bar
---
The whole toolbar is shown below.

<img class="box-shadow" src="/images/code-editor/case-toolbar.png">

<br/>
<i class="fa fa-file-code-o"></i>  **New Case**  

Create a new case out of work space with a default name 'Untitle-0.lc2', you should still find a path to save it later.You can also use <button>Ctrl+N</button> on keyboard to complete this operation.

<i class="fa fa-folder-open-o"></i> **Open Case**

Open a case in your local system. You can also use <button>Ctrl+O</button> on keyboard to complete this operation.

<i class="fa fa-floppy-o"></i> **Save Case** 

- If the case is created in work space,just click the button to finish saving. 
- If the case is created by clicking the <i class="fa fa-file-code-o"></i> and it is the first time to save it, you have to find a path to save it.
You can also use <button>Ctrl+S</button> to complete this operation.

<i class="fa fa-download"></i> **Import Case**

Import a local case as a sub-process to current main process.

<i class="fa fa-crosshairs"></i> **Inspect Element**

Select the elements in the page and output the its CSSPath to the code area.Right click to exit.

<i class="fa fa-link"></i> **Insert Link**

Insert the current URL in code area where the mouse pointer is located.

<i class="fa fa-play"></i> **Start Case /** <i class="fa fa-pause"></i> **Pause Case /** <i class="fa fa-play-circle-o"></i> **Continue Case**

Start, pause, or continue the current case.

<i class="fa fa-stop"></i> **Stop Case**

Stop the current case.

<i class="fa fa-circle" style="color:red"></i> **Start Record/**<i class="fa fa-stop-circle-o" style="color:red"></i> **Stop Record**

Convert all mouse and keyboard actions to codes.When starting recording, this button will change from <i class="fa fa-circle" style="color:red"></i> to <i class="fa fa-stop-circle-o" style="color:red"></i>. Click it again to stop recording.

**selector && xpath**

 Switch the selector in recording process, <button>selector</button> stands for CSSPath and <button>xpath</button> for XPath.

<i class="fa fa-undo"></i> **Undo/** <i class="fa fa-repeat"></i> **Redo**

Back/Forward to the previous/next code change, you can also use <button>Ctrl+Z</button>/<button>Ctrl+Y</button> to complete this operation.

<i class="fa fa-columns"></i> **Split Editor**

Split the editor and display the same content on the right, any changes on both sides will sync to the other side.Just like the split editor in Visual Studio Code.

<br/>
## Main Interface
---
The whole main interface is shown below, and is separated into 2 parts：
- Case List
- Coding area

<img class="guide-images" src="/images/code-editor/case-interface.png">
<br/>

**Case List**

The Case List shows all the cases in the workspace. You can activate the case to be edited by double clicking it, and then the code contained in the selected case will pop up in the coding area.

**Case Code**

By recording or keyboard inputing, you can generate corresponding code in this area. Direct editing in the coding area is also allowed.