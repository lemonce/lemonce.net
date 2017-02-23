title: 'Instruction keyword'
---

## process
---

Define a process,including `process main` and `process sub`.

<pre class='sublemon'>//This is a main process.
process main(){

}

//This is a sub process which can be named with different keywords(except 'main').
process sub-1(){ 

}
</pre>  
  
## assert
---

Assert that the expression is true[ within overtime].

<pre class='sublemon'>//Asserts the existence of a input box with the id of "test".
assert <#"textarea#test"/>;

//Asserts that a input box with the id of "test" will appear in 2 seconds.
assert <#"textarea#test"/> in 2000;
</pre>

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
  
## wait
---

Wait a few time like a person.

<pre class='sublemon'>
//Editor will wait 3000ms to start the next action.
wait 3000;
</pre>

## log
---

Record the value of an expression.

<pre class='sublemon'>
log '2'+3	//Output  23
log true	//Output  true
</pre>
