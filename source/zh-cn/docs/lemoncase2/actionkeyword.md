title: '动作关键字'
---

## click / dblclick
---
单击或双击一个HTML的页面元素。

<br>
## input...by
---
输入一段字符串到文档框中去。 

<input type="text" /> 或者 <textarea>

<pre class='sublemon'>
// eg: id="link" class="case" 
input 'div#link.case' by "hello world.";
</pre>

<br>
## move 
---
对HTML页面元素触发鼠标移动/移出的动作。

<br>
## hold
---
鼠标持续点住一个元素。

<br>
## drop
---
鼠标释放一个元素。

<br>
## scroll
---
滚动页面，保持选中元素位于屏幕中部

<br>
## jumpto / back / forward / refresh
---
`jumpto` 跳转到一个URL链接；`forward` 向前移动一页；`back` 后退一页；`refresh` 刷新当前网页。
<pre class='sublemon'>
process main () {

	// Deepin Technology Community
	jumpto "https://www.deepin.org/en/";
	wait 2333;
	// click span|
	click "#hs-site-navigation > div:nth-child(1) > span:nth-child(1)";
	// click Projects
	click "#menu-main > li:nth-child(2) > a:nth-child(1) > span:nth-child(1)";
	// Navigate to New Page
	wait 2000;
	back;
	wait 2000;
	forward;
	wait 2000;
	refresh;
}
</pre>

<br>
## wait
---

等待一定的时间（以毫秒为单位）。
<pre class='sublemon'>
//编辑器会等待3000毫秒再执行下一个动作
wait 3000;
</pre>

<br>
## assert
---

断言一个表达式为真（在一定的时间内）
<pre class='sublemon'>//断言存在一个id为'test'的输入框
assert <#"textarea#test"/>;

//断言id名为‘test’的输入框会在两秒钟内出现
assert <#"textarea#test"/> in 2000;
</pre>

<br>
## upload
---

如果一个测试需要上传一个文件到一个 web 应用程序，可以采用 `upload` 命令来上传。语法格式为：`upload [the path of a file]`。以下是例子。

**注意**：在 Windows 系统中路径采用的是"\"，需要用户改为 "/" 或进行转译 "\\\" 才能在灵萌测中运行。如"C:\Users\1.img"需要在灵萌测中改为"C:/Users/1.img"。
<pre class='sublemon'>
#AUTOWAIT 1000
process main () {

	// Angular file upload - flow.js
	jumpto "http://flowjs.github.io/ng-flow/";
	wait 3333;
	// 点击 Basic upload
	click "div.ng-scope > .drop > span.btn-default";
	upload ["path of file1","path of file2"];
	wait 4000;
	// 点击 Single image upload
	click "body > div:nth-child(1) > section:nth-child(2) > div:nth-child(10) > div:nth-child(4) > span:nth-child(1)";
    upload ["path of file3","path of file4"];
	// 当只支持上传一个文件时，lemonce会默认上传第一个文件
    wait 4000;
}
</pre>