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
## jumpto
---
Jump to a URL.
<pre class='sublemon'>
jumpto "deepin.org"; 

jumpto "www.deepin.org"; 

jumpto "http://www.deepin.org"; 
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
## forward / back
---

<br>
## refresh
---

<br>
## upload
---