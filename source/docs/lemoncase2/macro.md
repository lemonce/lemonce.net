title: 'Macro'
---

## #TIMES
---
The number of times to run the test case.The defaut value is 1 if `TIMES` has not been set before main process.
<pre class='sublemon'>
// The test case will run 10 times.
#TIMES 10
process main{

}</pre>
<br>

## #AUTOWAIT
---
The interval time between two statements,and the default value is 500ms.
<pre class='sublemon'>
// Change the autowait time to one second.
#AUTOWAIT 1000
process main{

}</pre>
<br>

## #LIMIT
---
The upper limit time of every statement waiting for selector element showing up,and the default value is 5000ms.
<pre class='sublemon'>
// Change the limit time to 10 seconds.
#LIMIT 10000
process main{

}</pre>
<br>
