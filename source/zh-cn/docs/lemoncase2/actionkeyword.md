title: '动作关键字'
---

## click / dbclick
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
对HTML页面元素触发鼠标移动/移出的动作，类似于Selenium中的`Highlight`指令
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

## jumpto
---
跳转到一个URL链接。链接可以采用以下三种方式填写，都能完成跳转。
<pre class='sublemon'>
jumpto "deepin.org"; 

jumpto "www.deepin.org"; 

jumpto "http://www.deepin.org"; 
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
## forward / back
---
<br>

## refresh
---
<br>

## upload
---
<br>