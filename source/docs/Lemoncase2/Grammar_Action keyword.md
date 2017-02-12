title: 'Action Keyword'
---

**input** 

Type a string into an element like <input type="text" /> or <textarea>.
```C 
// <input id="link" class="case" />
input 'div#link.case' by "hello world.";
```

**click** 

Click a HTML element.
```C
        // <a href="...">Text</a>
        click 'a';

// <a id="link" href="...">Text</a>
click 'a#link';
```

**dbclick** 

Double click a HTML element.
```C
// <div id="link" class="case">Text</div>
dblclick 'div#link.case';
```

**rclick** 

Right click a HTML element.
```C
// <div id="link" class="case">Text</div>
rclick 'div#link.case';
```

**move** 

Trigger move enter/leave events on a HTML element.
<br><br/>