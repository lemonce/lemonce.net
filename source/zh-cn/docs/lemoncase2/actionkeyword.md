title: '动作关键字'
---

## click / dblclick
---
<p class="alert alert-warning">click/dblclick "[selector](/zh-cn/docs/lemoncase2/selector.html)";</p>

单击或双击一个HTML的页面元素。

<pre class='sublemon'>
process main () {
    
    // Deepin Technology Community
	jumpto "https://www.deepin.org/en/";
	wait 2333;

	// dblclick
	dblclick '#hs-site-navigation > .hs-toggle-menu';
	wait 2323;
	
	// click
	click '#hs-site-navigation > .hs-toggle-menu';
}</pre>

<br/>
## input...by
---
<p class="alert alert-warning">input "[selector](/zh-cn/docs/lemoncase2/selector.html)" by "string";</p>
输入一段字符串到文档框中去。 

<input type="text" /> 或者 <textarea>

<pre class='sublemon'>
// eg: id="link" class="case" 
input 'div#link.case' by "hello world.";</pre>

<br/>
## move 
---
<p class="alert alert-warning">move "[selector](/zh-cn/docs/lemoncase2/selector.html)";</p>
对HTML页面元素触发鼠标移入移出的动作。该动作可触发CSShover。

<pre class='sublemon'>
process main () {
    
	jumpto "https://www.deepin.org/en/";
	wait 2333;
	click '#hs-site-navigation > .hs-toggle-menu';
	
	// 在以下三个页面元素上移动
	move '#menu-main span:contains(Projects)';
	move '#menu-main span:contains(Download)';
	move '#menu-main span:contains(Documents)';
}</pre>

<br/>
## hold
---
<p class="alert alert-warning">hold "[selector](/zh-cn/docs/lemoncase2/selector.html)";</p>
鼠标持续点住一个元素。具体的示例在下方的`drop`中。

<br/>
## drop
---
<p class="alert alert-warning">drop;</p>
鼠标释放一个元素。

<pre class="sublemon">
process main () {

	jumpto "https://jqueryui.com/draggable/";
	wait 2333;
	
	//持续点住页面上的一个元素，用move来完成拖拽和指针移动
    hold '#content > iframe:nth-child(5) < #draggable';
    move '#content > iframe:nth-child(5) < html';
    
    //释放该元素
    drop;
}</pre>

<br/>
## scroll
---
<p class="alert alert-warning">scroll "[selector](/zh-cn/docs/lemoncase2/selector.html)";</p>
滚动页面，保持选中元素位于屏幕中部。

<pre class="sublemon">
process main () {
  
	jumpto "http://www.lemonce.com";
	wait 2333;
	
	//scroll
	scroll 'footer';
}</pre>

<br/>
## jumpto
---
<p class="alert alert-warning">jumpto "URL";</p>
跳转到一个URL链接。


<br/>
## back / forward / refresh
---
<p class="alert alert-warning">back;<br/>forward;<br/>refresh;</p>
`back` 后退一页；`forward` 向前移动一页；`refresh` 刷新当前网页。
<pre class='sublemon'>
process main () {

	
	// The world's leading software development platform · GitHub
	jumpto "https://github.com/";
	wait 2333;
	// Sign up
	click "a:contains(Sign up)";
	wait 2000;
	
	//back
	back;
	wait 2000;
	
	//forward
	forward;
	wait 2000;

    //refresh
	refresh;
}</pre>

<br/>
## wait
---
<p class="alert alert-warning">wait [time:number]</p>
等待一定的时间（以毫秒为单位）。

<pre class='sublemon'>
//编辑器会等待3000毫秒再执行下一个动作
wait 3000;</pre>

<br/>
## assert
---
<p class="alert alert-warning">assert [expression] in [time:number]</p>
断言一个表达式为真或假（在一定的时间内），具体参照以下示例。关于表达式的更多介绍，[点击这里](/zh-cn/docs/lemoncase2/expression.html)。

<pre class='sublemon'>

//断言id为'test'的输入框个数为1个
assert <# "textarea#test"/> == 1;

//断言id为'test'的输入框包含'Lemonce'
assert <@ "testarea#test"/> ~~ "Lemonce"

//断言id名为'test'的输入框会在两秒钟内出现
assert <# "textarea#test"/> in 2000;

process main () {
    
	// The world's leading software development platform · GitHub
	jumpto "https://github.com/";
	// wait
	wait 2333;
	// click "login"
	click "#user\\[login\\]";
	// assert
	assert <@'h1'/> ~~ "Built" in 1000;
}</pre>

<br/>
## upload
---
<p class="alert alert-warning">upload ["filePath1","filePath2"]</p>
如果一个测试需要上传一个文件到一个 web 应用程序，可以采用 `upload` 命令来上传。以下是例子。

**注意**：在 Windows 系统中路径采用的是"\"，需要用户改为 "/" 或进行转义 "\\\" 才能在灵萌测中运行。如"C:\Users\1.img"需要在灵萌测中改为"C:/Users/1.img"。
<pre class='sublemon'>
#AUTOWAIT 1000
process main () {

	// Angular file upload - flow.js
	jumpto "http://flowjs.github.io/ng-flow/";
	wait 3333;
	// 点击 Basic upload
	click "div.ng-scope > .drop > span.btn-default";
	upload ["C:/1.lc2"];
	wait 4000;
	// 点击 Single image upload
	click "body > div:nth-child(1) > section:nth-child(2) > div:nth-child(10) > div:nth-child(4) > span:nth-child(1)";
    upload ["C:/1.jpg","D:/2.png"];
	// 当只支持上传一个文件时，lemonce会默认上传第一个文件
    wait 4000;
}</pre>