title: 'Instruction keyword'
---

## process
---

Define a process,including `process main` and `process sub`.

<pre class='sublemon'>//This is a main process.
process main(){

}

//This is a sub process which can be named with different keywords(except 'main').
process anyname(){ 

}
</pre>  

<br>
## return
---
The `return` statement ends sub-process execution and specifies a value to be returned to the sub-process caller.A sub-process immediately stops at the point where return is called.

<pre class='sublemon'>
process main () {
	counter();   
	}  
process counter() {
	count = 1;
	while(count < 5){	    // until 4
		log count + 'A';
		count +=1;
		log count + 'B';    // until 5
      }
	return;
    log count + 'C';        // never appears      
}
</pre>
  
<br>
## for...in
---

The `for...in` statement iterates over the enumerable properties of an object, in original insertion order. For each distinct property, statements can be executed.

Syntax：
```
for(variable in object){

}
```

<pre class='sublemon'>
process main () {
	A = {a:1,b:2};
	for (x in A){
    	log "A["+x+"]="+A[x];
  }
}
//Output:
//A[a]=1
//A[b]=2
</pre>

<br>
## for...of
---
The `for...of` statement creates a loop iterating over iterable objects, invoking a custom iteration hook with statements to be executed for the value of each distinct property.

Syntax：
```
for (variable of object){
	statement
	}
```

<pre class='sublemon'>
//iterating over an Array
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

//iterating over a String
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
//e
</pre>

<br>
## if...else
---
The `if` statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.

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
//Output "3"
</pre>

<br>
## continue
---

The `continue` statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

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
}
</pre>

<br>
## while
---

The `while` statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

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
    log count + 'C';        // process counter is over      
}
</pre>

<br>
## log
---

Record the value of an expression.

<pre class='sublemon'>
log '2'+3	//Output  23
log true	//Output  true
</pre>
