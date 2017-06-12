title: 'Instruction keyword'
---

## process
---
<p class="alert alert-warning">process main{ }<br/>process sub{ }</p>
Define a process,including `process main` and `process sub`.

<pre class='sublemon'>//This is a main process.
process main(){

}

//This is a sub process which can be named with different keywords without special characters (except 'main').
process anyname(){ 

}</pre>  

<br/>
## return
---
<p class="alert alert-warning">return;</p>
Ends sub-process execution and specifies a value to be returned to the sub-process caller. A sub-process immediately stops at the point where return is called.
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
	return 0;
    log count + 'C';        // Never appears. 
}</pre>
  
<br/>
## for...in
---
<p class="alert alert-warning">for (variable in object){ }</p>
Iterates over the enumerable properties of an object, in original insertion order. For each distinct property, statements can be executed.

<pre class='sublemon'>
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
Creates a loop iterating over iterable objects, invoking a custom iteration hook with statements to be executed for the value of each distinct property.

<pre class='sublemon'>
//Iterating over an Array.
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

//Iterating over a String.
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
Executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.

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
Terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

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
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
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
    log count + 'C';        // This statement never appears. 
}</pre>

<br/>
## log
---
<p class="alert alert-warning">log [expression,variable,string];</p>
Output a message to the console. You can output variables, expressions, strings etc. that have been defined in the test case.

<pre class='sublemon'>
log '2'+3	//Output  23
log true	//Output  true</pre>
