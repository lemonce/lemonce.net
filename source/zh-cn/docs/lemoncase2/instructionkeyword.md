title: '指令关键字'
---

## process
---

定义一个过程，包括`process main`和 `process sub`。
<pre class='sublemon'>//这是一个主过程
process main(){

}

//这是一个子过程，除了使用‘main'作为关键词以外，您可以使用任意不带特殊符号的字符串来对子过程进行命名。
process anyname(){ 

}
</pre>  
  
## assert
---

断言一个表达式为真（在一定的时间内）
<pre class='sublemon'>//断言存在一个id为'test'的输入框
assert <#"textarea#test"/>;

//断言id名为‘test’的输入框会在两秒钟内出现
assert <#"textarea#test"/> in 2000;
</pre>

## return
---

`return`语句用于结束一个子过程并且返回相应的值到子过程变量。执行到`return`语句时，子过程会立刻停止。
<pre class='sublemon'>
process main () {
	counter();   
	}  
process counter() {
	count = 1;
	while(count < 5){	    // count=1,2,3,4
		log count + 'A';
		count +=1;
		log count + 'B';    // count=2,3,4,5
      }
	return;
    log count + 'C';        // 子过程已结束，本语句不会执行      
}
</pre>
  
## wait
---

等待一定的时间（以毫秒为单位）。
<pre class='sublemon'>
//编辑器会等待3000毫秒再执行下一个动作
wait 3000;
</pre>

## log
---

记录一个表达式的值。
<pre class='sublemon'>
log '2'+3	//输出  23
log true	//输出  true
</pre>
