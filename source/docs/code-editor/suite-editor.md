title: 'Suite Editor'
---
## Tool Bar
---
The whole toolbar is shown below.

<img class="long-images" src="/images/code-editor/suite-toolbar.png">
<br>

<i class="fa fa-file-text-o"></i> **New Suite**  

Create a new suite out of work space with a default name 'Untitle-0.lct', and you should still find a path to save it later. Here you **can't use** `Ctrl+N` because this shortcut can only be used to create a new case.

<i class="fa fa-folder-open-o"></i> **Open Suite**

Open a suite in local system.

<i class="fa fa-floppy-o"></i> **Save Suite** 

- If the suite is created in work space,just click the button to finish saving. 
- If the suite is created by clicking the button "New Suite" and it is the first time to save it, you must find a path to save it. You can also use `Ctrl+S` to complete this operation.

<i class="fa fa-times"></i> **Remove Suite**

Remove but not delete the selected case which is highlighted with gray.

<i class="fa fa-arrow-up"></i> **Move Up/** <i class="fa fa-arrow-down"></i> **Move Down**

Change the order of the cases list by moving up/down the select case highlighted with gray.

<i class="fa fa-play"></i> **Run Suite/** <i class="fa fa-stop"></i>  **Stop Suite**

Start/Stop running the current suite.


<i class="fa fa-columns"></i>  **Split Editor**

Split the editor and display the same content on the right, any changes on both sides will sync to the other side.Just like the split editor in Visual Studio Code.

<i class="fa fa-list-alt"></i> **Toggle Explorer**

Open case library.Here you can choose the cases to add to current suite.

<br/>
## Main Interface
---
The whole main interface is shown below, and is separated into 3 parts:
- Suite list
- Case list
- Case libirary

<img class="large-images" src="/images/code-editor/suite-interface.png">
<br/>

**Suite list**
Suite list shows all the suite in your work space. You can activate the suite to be edited by double clicking it. The cases contained in the suite will show in the case list on the right side.

**Case list**
Case list shows the cases in the current suite. The case list contains 3 cols: case Number, case Name, and current case status. The status of the case includes: 
- `Ready`: The case needs to be run.
- `Pass`: The case has been tested successfully.
- `Failed`: The case failed.

**Case library**
The case library shows all the cases under the current workspace sorted by the name of the case. Double-click the required case to import it into the case list and generate the test suite that the user needs.

**Attention:** 
If the user renames a case which has been already referenced in a suite, the name  will not change in the `case list`, but will change and sycronize in the `case library`. In this situation, you needs to re-import the case from the `case library`, otherwise the suite may not be able to run successfully.