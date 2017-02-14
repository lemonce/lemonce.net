title: 'Instruction keyword'
---

Simulate an action.

`[action] [selector:string] by/to [params|params1,params2]`

**process**

Define a process,including the main process and sub process.

```
//This is a main process.
process main{ } 
```
```C 
//This is a sub process which can be named with different keywords(except 'main').
process sub{ }
process sub1{ }
```
**assert** 

Assert that the expression is true[ within overtime].

```C
//Asserts the existence of a input box with the id of "test".
assert <#"textarea#test"/>;
```
```C 
//Asserts that a input box with the id of "test" will appear in 2 seconds.
assert <#"textarea#test"/> in 2000;
```
**return**

**wait** 

Wait a few time like a person.

```C
//Editor will wait 3000ms to start the next action.
wait 3000;
```

**log** 

Record the value of an expression.

```C
log [exp]
```
