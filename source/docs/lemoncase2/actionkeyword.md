title: 'Action Keyword'
---

## click / dblclick
---
Click or double click a HTML element.

<pre class='sublemon'>
process main () {
    
	jumpto "https://support.mozilla.org/en-US/";
	wait 2333;
	
	//double click "#tabzilla"
	dblclick "#tabzilla";
	
	//click "#tabzilla"
	click "#tabzilla";
}
</pre>

<br>
## input...by
---
Type a string into an element like <input type="text" /> or <textarea>.

<pre class='sublemon'>
// eg: id="link" class="case" 
input 'div#link.case' by "hello world.";
</pre>

<br>
## move 
---
Trigger onmouseenter or onmouseleave events on a HTML element. This action can trigger CSShover.

<pre class='sublemon'>
process main () {
    
	jumpto "https://www.deepin.org/en/";
	wait 2333;
	click '#hs-site-navigation > div:nth-child(1)';
	
	// Move on the 3 elements in the following.
	move '#menu-main > li:nth-child(2) > a:nth-child(1) > span:nth-child(1)';
	move '#menu-main > li:nth-child(3) > a:nth-child(1) > span:nth-child(1)';
	move '#menu-main > li:nth-child(4) > a:nth-child(1) > span:nth-child(1)';
}
</pre>

<br>
## hold
---
Hold an element by mouse continuely. The specific example is shown in the `drop` below.

<br>
## drop
---
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
}
</pre>

<br>
## scroll
---
Scroll the page and keep the selected element in the center of the screen.

<pre class="sublemon">
process main () {
  
	// Deepin Technology Community
	jumpto "https://www.deepin.org/en/";
	wait 2333;
	
	//
	scroll '#hs-top-footer';
}
</pre>

<br>
## jumpto / back / forward / refresh
---
`jumpto` jump to a URL;`forward` move forward to the next page; `back` move back to the previous page；`refresh` refresh the current page.

<pre class='sublemon'>
process main () {

	// jumpto
	jumpto "https://www.deepin.org/en/";
	wait 2333;
	click "#hs-site-navigation > div:nth-child(1) > span:nth-child(1)";
	click "#menu-main > li:nth-child(2) > a:nth-child(1) > span:nth-child(1)";
	wait 2000;
	
	//back : Get back to the homepage.
	back;
	wait 2000;
	
	//forward : Get forward to the doc page.
	forward;
	wait 2000;

    //refresh : Refresh the doc page.
	refresh;
}
</pre>

<br>
## wait
---
Wait a few time like a person［in milliseconds］.

<pre class='sublemon'>
//Editor will wait 3000ms to start the next action.
wait 3000;
</pre>

<br>
## assert
---
Assert that the expression is true [within certain time].

<pre class='sublemon'>
//Asserts the existence of a input box with the id of "test".
assert <#"textarea#test"/>;

//Asserts that a input box with the id of "test" will appear in 2 seconds.
assert <#"textarea#test"/> in 2000;
</pre>

<br>
## upload
---
If a test needs to upload a file to a web application, you can use the `upload` command to upload. The syntax is: `upload [the path of a file]`. There's one example in the following.

**Attention**：For Windows users, scine ‘\’ is used in the system path, you need to change '\' to '/' or use escape character like '\\\' to ensure lemonce runs successfully. For example, 'C:\Users\1.img' needs to be transformed into 'C:/Users/1.img' in lemonce.

<pre class='sublemon'>
#AUTOWAIT 1000
process main () {

	// Angular file upload - flow.js
	jumpto "http://flowjs.github.io/ng-flow/";
	wait 3333;
	// Click 'Basic upload'.
	click "div.ng-scope > .drop > span.btn-default";
	upload ["path of file1","path of file2"];
	wait 4000;
	// Click 'Single image upload'.
	click "body > div:nth-child(1) > section:nth-child(2) > div:nth-child(10) > div:nth-child(4) > span:nth-child(1)";
    upload ["path of file3","path of file4"];
	// Lemonce will upload the first file by default when only one file is supported.
    wait 4000;
}
</pre>