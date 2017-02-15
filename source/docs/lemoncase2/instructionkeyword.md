title: 'Instruction keyword'
---

## process
---

Define a process,including the main process and sub process.

```
//This is a main process.
process main(){}
```
```C 
//This is a sub process which can be named with different keywords(except 'main').
process sub1(){ }
```
<br>

## assert
---

Assert that the expression is true[ within overtime].

```C
//Asserts the existence of a input box with the id of "test".
assert <#"textarea#test"/>;
```
```C 
//Asserts that a input box with the id of "test" will appear in 2 seconds.
assert <#"textarea#test"/> in 2000;
```
<br>

## return
---
The `return` statement ends sub-process execution and specifies a value to be returned to the sub-process caller.A sub-process immediately stops at the point where return is called.
```
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
```
<br>

## wait
---

Wait a few time like a person.

```C
//Editor will wait 3000ms to start the next action.
wait 3000;
```
<br>

## log
---

Record the value of an expression.

```C
log '2'+3	//Output  23
log true	//Output  true
```
