title: 'Instruction keyword'
---

## import
---
<p class="alert alert-warning">import "./../case.lc2"</p>
Import another case or more.You should write the code  before `process main`,or you can click the button <i class="fa fa-download"></i> in the toolbar of [Case-Editor](/docs/code-editor/case-editor.html) to complete import.

The case below shows how to import `$BUTTON` in [Magic Keyword](/docs/lemoncase2/magic.html).
<pre class='sublemon'>//Import the case named "rightclick.lc2"
import "./rightclick.lc2";
process main () {
	// New Page
	jumpto "https://www.github.com/";
	wait 2333;
	rightclick ("a:contains('Sign up')");//Here we use process rightclick() from the case "rightclick.lc2"
}</pre>

The case "rightclick.lc2" shows below.

<pre class='sublemon'>
//This is a sub-process simulating right-click with $BUTTON.​
process rightclick(a) {
    $BUTTON = "right";
    click a;
}</pre>

<br/>
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
<p class="alert alert-warning">return [expression];</p>
Ends process execution(and specifies a value to be returned). A process immediately stops at the point where `return` is called.
<pre class='sublemon'>
process main () {
  log square(10);
  return;
  log "Mi";
}

process square(x){
    log 1+1;
    return x*x;
    log "Smartisan";
}
//Output:
//2 first,output 1+1 in process square
//100 next,output 100 in process main
//"Smartisan" will not appear cause the process square has already stopped
//"Mi" will not appear cause the process main has already stopped</pre>
  
<br/>
## for...in
---
<p class="alert alert-warning">for (variable in object){ }</p>
Iterates over the enumerable properties of an object, in original insertion order. For each distinct property, statements can be executed.

<pre class='sublemon'>
process main () {
    // for...in(array)
    X=["Smartisan","Mi"];
    for (i in X){
    log "X[" +i+ "]="+ X[i];
  }
  
    // for...in(array)
    A = {1:1,2:2};
    for (a in A){
    log "A["+a+"]="+A[a];
  }
}
//Output:
//X[0]=Smartisan
//X[1]=Mi
//A[1]=1
//A[2]=2</pre>

<br/>
## for...of
---
<p class="alert alert-warning">for (variable of object){ statement }</p>
Creates a loop iterating over iterable objects, invoking a custom iteration hook with statements to be executed for the value of each distinct property.

<pre class='sublemon'>

process main () {
  // for...of(string),Iterating over a String.
  B = "Lemonce";
  for (b of B){
    log b;
  }
  
  // for...of(array),Iterating over an Array.
  C = [20,30,40];
  for (c of C){
    log c;
  }
}

//Output
//L
//e
//m
//o
//n
//c
//e
//20
//30
//40</pre>

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
log '2'+3;	//Output  23
log true;	//Output  true</pre>
