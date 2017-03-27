title: '动作关键字'
---

## input
---
输入一段字符串使其变为元素
Type a string into an element like <input type="text" /> or <textarea>.

```C 
// <input id="link" class="case" />
input 'div#link.case' by "hello world.";
```
<br>

## click 
---
点击一个HTML的页面元素
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
双击一个HTML页面元素
```C
// <div id="link" class="case">Text</div>
dblclick 'div#link.case';
```
<br>

## rclick 
---
右键一个HTML页面元素
```C
// <div id="link" class="case">Text</div>
rclick 'div#link.case';
```
<br>

## move 
---
对HTML页面元素触发鼠标移动/移出的动作，类似于Selenium中的`Highlight`指令
Trigger move enter/leave events on a HTML element.Like the `Highlight` keyword in Selenium.
<br>

## hold
---
Hold an element by mouse.
<br>

## drop
---
鼠标释放一个元素
Release an element by mouse.
<br>

## scroll
---
滚动页面，保持选中元素位于屏幕中部
Move an element to the center of the screen.
<br>

## jumpto
---
跳转到一个URL链接
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