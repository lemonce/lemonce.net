title: '指令关键字'
---

## import
---

引用一个子过程。
<pre class='sublemon'>//这是一个实现右键的过程
process main(){

}

</pre>  

<br>
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

<br>
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

<br>
## for...in
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

<br>
## for...of
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

<br>
## if...else
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

<br>
## continue
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

<br>
## while
---

`while`语句用于结束一个子过程并且返回相应的值到子过程变量。执行到`return`语句时，子过程会立刻停止。
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

<br>
## log
---

记录一个表达式的值。
<pre class='sublemon'>
log '2'+3	//输出  23
log true	//输出  true
</pre>
