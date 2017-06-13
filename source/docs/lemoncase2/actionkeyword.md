title: 'Action keyword'
---

## click / dblclick
---
<p class="alert alert-warning">click/dblclick "[selector](/docs/lemoncase2/selector.html)";</p>
Click or double click a HTML element.

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
<p class="alert alert-warning">input "[selector](/docs/lemoncase2/selector.html)" by "string";</p>
input a string to a text area.

<pre class='sublemon'>
// eg: id="link" class="case" 
input 'div#link.case' by "hello world.";</pre>

<br/>
## move 
---
<p class="alert alert-warning">move "[selector](/docs/lemoncase2/selector.html)";</p>
Trigger onmouseenter or onmouseleave events on a HTML element. This action can trigger CSShover.

<pre class='sublemon'>
process main () {
    
	jumpto "https://www.deepin.org/en/";
	wait 2333;
	click '#hs-site-navigation > .hs-toggle-menu';
	
	// Move on the 3 elements in the following.
	move '#menu-main span:contains(Projects)';
	move '#menu-main span:contains(Download)';
	move '#menu-main span:contains(Documents)';
}</pre>

<br/>
## hold
---
<p class="alert alert-warning">hold "[selector](/docs/lemoncase2/selector.html)";</p>
Hold an element by mouse continuely. The specific example is shown in the `drop` below.

<br/>
## drop
---
<p class="alert alert-warning">drop;</p>
Release an element by mouse.

<pre class="sublemon">
process main () {

	jumpto "https://jqueryui.com/draggable/";
	wait 2333;
	
	//Click on an element in the page, use `move` to achieve drag and pointer movement.
    hold '#content > iframe:nth-child(5) < #draggable';
    move '#content > iframe:nth-child(5) < html';
    
    //Release the element.
    drop;
}</pre>

<br/>
## scroll
---
<p class="alert alert-warning">scroll "[selector](/docs/lemoncase2/selector.html)";</p>
Scroll the page and keep the selected element in the center of the screen.

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
jump to a URL.

<br/>
## back / forward / refresh
---
<p class="alert alert-warning">back;<br/>forward;<br/>refresh;</p>
`forward` move forward to the next page; `back` move back to the previous page；`refresh` refresh the current page.

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
Wait a few time like a person［in milliseconds］.

<pre class='sublemon'>
//Editor will wait 3000ms to start the next action.
wait 3000;</pre>

<br/>
## assert
---
<p class="alert alert-warning">assert [expression] in [time:number]</p>
Assert that the expression is true [within certain time].

<pre class='sublemon'>
//Asserts the existence of a input box with the id of "test".
assert <#"textarea#test"/>;

//Asserts that a input box with the id of "test" will appear in 2 seconds.
assert <#"textarea#test"/> in 2000;</pre>

<br/>
## upload
---
<p class="alert alert-warning">upload ["filePath1","filePath2"]</p>
If a test needs to upload a file to a web application, you can use the `upload` command to upload. There's one example in the following.

**Attention**：For Windows users, scine ‘\’ is used in the system path, you need to change '\' to '/' or use escape character like '\\\' to ensure lemonce runs successfully. For example, 'C:\Users\1.img' needs to be transformed into 'C:/Users/1.img' in lemonce.
<pre class='sublemon'>
#AUTOWAIT 1000
process main () {

	// Angular file upload - flow.js
	jumpto "http://flowjs.github.io/ng-flow/";
	wait 3333;
	// Click 'Basic upload'.
	click "div.ng-scope > .drop > span.btn-default";
	upload ["C:/1.lc2"];
	wait 4000;
	// Click 'Single image upload'.
	click "body > div:nth-child(1) > section:nth-child(2) > div:nth-child(10) > div:nth-child(4) > span:nth-child(1)";
    upload ["C:/1.jpg","D:/2.png"];
	// Lemonce will upload the first file by default when only one file is supported.
    wait 4000;
}</pre>