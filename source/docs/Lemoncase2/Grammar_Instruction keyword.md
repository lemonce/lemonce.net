title: 'Instruction keyword'
---

Simulate an action.
```C
[action] [selector:string] by/to [params|params1,params2]
```
**process**

**assertion** 

Assert that the expression is true[ within overtime].

```C
assert[exp][in[overtime:number]]

//Asserts the existence of a input box with the id of "test".
assert <#"textarea#test"/>;
//Asserts that a input box with the id of "test" will appear in 2 seconds.
assert <#"textarea#test"/> in 2000;
```

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

**jumpto**

Jump to a URL.

```C
jumpto [exp]
```
