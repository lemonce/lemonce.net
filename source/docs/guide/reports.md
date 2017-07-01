title: 'View Test Report'
---
The test report is divided into three areas. The case-area lists all of the test cases for the entire test task, the contents of the log-area and the code-area correspond to each other as a sub area of each test case.
<img class="guide-images" src="/images/guide/report-01.png">

At the bottom of report shows the numbers of passed and failed cases and the execution duration time.

<img class="box-shadow" src="/images/guide/report-02.png">
<br/>
## 1 Case list
---
Case list is in the black area on the left,and the example is shown below.

<img src="/images/guide/report-03.png">

Case list has the following features and information,and the selected case is highlighted in gray. 

- **search function** To complete exact case searching when a suite has many cases.

- **execution information** Include the name of cases,the time of execution and if the cases pass or not. <i class="fa fa-check" style="color:green"></i> means passed， <i class="fa fa-close" style="color:red"></i>  means failed.

<br/>
## 2 Logs
---
The logs show the execution statements in each of the test cases in the form of a list. In addition, the following information is included:

- A case starts with a "case started" log and finish with a "case done" log.
- After the assertion fails,screenshots of the current webview will be saved.
- the logs of "Assertion Failure" will be in red.

<img src="/images/guide/report-04.png">

Every log contains three parts of information,and the selected log is highlighted in gray while the corresponding codes will be highlighted,too.

- **execution comments for current log** More detailed and clear than the comments which is generated automatically in code-editor.

- **execution start or duration** Execution start time is displayed in "hh-mm-ss" format;for `click` or `input`,log will shows duration time.

- **the number of code rows**

<br/>
## 3 Codes
---
All the LC2 codes and comments of the current case.