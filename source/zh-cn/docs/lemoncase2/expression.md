title: '表达式'
---

## 选择器操作
---
**<# [selector:string] />** 

Get the number of elements that matches the selector.

`<div id="link" class="case">Text</div>`
<pre class='sublemon'>
log <# 'div'/>; // Output 1
log <# '#link'/>; // Output 1
log <# '#no'/>; // Output 0</pre>

**<@ [selector:string] />** 

Get the innerHTML of the 1st element that matches the selector.The result is a string or `false` if there's no match.


`<div id="link" class="case">Text</div>`
<pre class='sublemon'>
log <@ 'div'/>; // Output Text
log <@ '#link'/>; // Output Text
log <@ '#no'/>; // Output false</pre>

**<! [selector:string] />** 

Check for element visibility.The result is `true` if such element exist && width > 0 && height > 0.Otherwise it is `false`.


`<div id="link" class="case">Text</div>`
<br>
`<div id="link2" style="display:none">Text</div>`

<pre class='sublemon'>
log <! 'a'/>; // Output false
log <! 'div'/>; // Output true
log <! '#link2'/>; // Output false
</pre>

<br>
## Compare operator
---

**[exp_A:string] ~~ [exp_B:string|RegExp]**

- exp_B is not a string or RegExp, false. 

- exp_A is not a string, false.

- exp_A is not matched to exp_B(RegExp), false.

- exp_A has a sub string like exp_B, true.

- exp_A is matched to exp_B(RegExp), true.

**[exp_A:string] !~ [exp_B:string|RegExp]**

