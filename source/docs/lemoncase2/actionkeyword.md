title: 'Action Keyword'
---

## input
---
Type a string into an element like <input type="text" /> or <textarea>.

```C 
// <input id="link" class="case" />
input 'div#link.case' by "hello world.";
```
<br>

## click 
---
Click a HTML element.
```C
        // <a href="...">Text</a>
        click 'a';
```
```
// <a id="link" href="...">Text</a>
click 'a#link';
```
<br>

## dbclick 
---
Double click a HTML element.
```C
// <div id="link" class="case">Text</div>
dblclick 'div#link.case';
```
<br>

## rclick 
---
Right click a HTML element.
```C
// <div id="link" class="case">Text</div>
rclick 'div#link.case';
```
<br>

## move 
---
Trigger move enter/leave events on a HTML element.Like the `Highlight` keyword in Selenium.
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
Jump to a complete URL.

```C
jumpto "deepin.org"  ×
jumpto "www.deepin.org"  ×
jumpto "http://www.deepin.org"  √
```
<br>

## forward
---
<br>

## back
---
<br>

## upload
---
<br>