title: '宏'
---

## #TIMES
---
决定了执行测试用例的次数，添加在主过程之前，默认值为1。

<pre class='sublemon'>
// 这个测试用例会执行十次
#TIMES 10
process main{

}</pre>

<br/>
## #AUTOWAIT
---
每条语句执行间隔时间，默认等待500毫秒。
<pre class='sublemon'>
// 将主动等待时间改为一秒
#AUTOWAIT 1000
process main{

}</pre>

<br/>
## #LIMIT
---
每条语句等待选择器元素出现时长的上限，默认值为5秒
<pre class='sublemon'>
// 将被动等待时间改为十秒
#LIMIT 10000
process main{

}</pre>

