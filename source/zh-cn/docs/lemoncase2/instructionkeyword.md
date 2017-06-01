title: '指令关键字'
---

## import
---

<br/>
## process
---
<p class="alert alert-warning">process main{ }<br/>process sub{ }</p>
定义一个过程，包括主过程与子过程。
<pre class='sublemon'>//这是一个主过程
process main(){

}

//这是一个子过程，除了使用‘main'作为关键词以外，您可以使用任意不带特殊符号的字符串来对子过程进行命名。
process anyname(){ 

}</pre>  

<br/>
## return
---
<p class="alert alert-warning">return;</p>
用于结束一个子过程并且返回相应的值到子过程变量。执行到`return`语句时，子过程会立刻停止。
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
}</pre>

<br/>
## for...in
---
<p class="alert alert-warning">for (variable in object){ }</p>
以任意顺序遍历一个对象的可枚举属性。对于每个不同的属性，语句都会被执行。

<pre class="sublemon">
process main () {
	A = {a:1,b:2};
	for (x in A){
    	log "A["+x+"]="+A[x];
  }
}
//Output:
//A[a]=1
//A[b]=2</pre>

<br/>
## for...of
---
<p class="alert alert-warning">for (variable of object){ statement }</p>
在可迭代对象上创建一个迭代循环，对每个不同属性的属性值,调用一个自定义的有执行语句的迭代挂钩.

<pre class='sublemon'>
//遍历一个数组
process main () {
 A = [10,20,30];
  for (x of A){
      log x;
  }
}
//Output
//10
//20
//30

//遍历一个字符串
process main () {
  for (x of "Lemonce"){
      log x;
  }
}
//Output:
//L
//e
//m
//o
//n
//c
//e</pre>

<br/>
## if...else
---
<p class="alert alert-warning">if (condition)<br/>statement1<br/>[else<br/>statement2]</p>
当指定条件为 true 时，if 语句 会执行一条语句。如果该条件为 false，则执行另一条语句。

<pre class='sublemon'>
process main () {
a=4;
x=a*a;
if (x< 9){
    log "1";
 }
else if (x==9){
    log x;
    log "2";
 }
else {
    log "3";
 }
}
//Output "3"</pre>

<br/>
## continue
---
<p class="alert alert-warning">continue;</p>
结束当前（或标签）的循环语句的本次迭代，并继续执行循环的下一次迭代。

<pre class='sublemon'>
process main () {
i = 0;
n = 0;
while (i < 5) {
   i=i+1;
   log i;
   if (i === 3) {
      continue;
   }
   n += i;
   log n;  //Output 1,3,7,12
   }
}</pre>

<br/>
## while
---
<p class="alert alert-warning">while (condition)<br/> statement</p>
产生一个当满足条件为true时便执行指定语句的循环。每次执行语句前，条件都会被评估。
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
}</pre>

<br/>
## log
---
<p class="alert alert-warning">log [expression,variable,string];</p>
向控制台输出一条消息。可以输出测试用例中已定义的变量，表达式，字符串等等。

<pre class='sublemon'>
log '2'+3	//输出  23
log true	//输出  true</pre>
