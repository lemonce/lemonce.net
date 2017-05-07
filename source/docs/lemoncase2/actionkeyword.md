title: 'Action Keyword'
---

## click / dblclick
---
Click or double click a HTML element.

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
Trigger move enter/leave events on a HTML element.

<br>
## hold
---
Hold an element by mouse.

<br>
## drop
---
Release an element by mouse.

<br>
## scroll
---
Move an element to the center of the screen.

<br>
## jumpto / back / forward / refresh
---
`jumpto` jump to a URL;`forward` move forward to the next page; `back` move back to the previous page；`refresh` refresh the current page.
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

Wait a few time like a person.

<pre class='sublemon'>
//Editor will wait 3000ms to start the next action.
wait 3000;
</pre>

<br>
## assert
---

Assert that the expression is true[ within overtime].

<pre class='sublemon'>//Asserts the existence of a input box with the id of "test".
assert <#"textarea#test"/>;

//Asserts that a input box with the id of "test" will appear in 2 seconds.
assert <#"textarea#test"/> in 2000;
</pre>

<br>
## upload
---
<pre class='sublemon'>
#AUTOWAIT 1000
process main () {

	// Angular file upload - flow.js
	jumpto "http://flowjs.github.io/ng-flow/";
	wait 3333;
	// click Basic upload
	click "div.ng-scope > .drop > span.btn-default";
	upload ["path of file1","path of file2"];
	wait 4000;
	// click Single image upload
	click "body > div:nth-child(1) > section:nth-child(2) > div:nth-child(10) > div:nth-child(4) > span:nth-child(1)";
    upload ["path of file3","path of file4"];
	// 
    wait 4000;
}