title: '魔术字'
---

## $HREF
---

提取当前的链接。

<pre class='sublemon'>
process main {
    jumpto "https://www.baidu.com/";
    log $HREF;
}</pre>

<br/>
## $BUTTON
---
<p class="alert alert-warning">$BUTTON = left/middle/right</p>
模拟鼠标按键的位置，像上面的语法结构显示的那样，可设定为左中右。
<pre class='sublemon'>
//这是一个用 $BUTTON 模拟右键点击的子过程
process rightclick(a) {
    $BUTTON = "right";
    click a;
}</pre>

<br/>
## $IT
---

保存页面内某一元素的选择器。
<pre class='sublemon'>
process main () {
	jumpto "https://www.baidu.com/"; // 跳转到百度
	$IT = "#kw"; // 将百度搜索栏的选择器赋值给 $IT
	click ; // 缺省状态默认对象为 $IT，此时会直接点击搜索栏
	click '#su'; // $IT此时的值变为'#su',即下一次选择器出现的时候重新赋值给$IT
}</pre>

<br/>
## $LOOP
---

提取当前循环的次数，一般都与 #TIMES 共同使用。
<pre class='sublemon'>
//
#TIMES 3
process main () {
	jumpto "https://www.baidu.com/";
	wait 500;
	log $LOOP; //运行三次，分别输出 0,1,2
}</pre>