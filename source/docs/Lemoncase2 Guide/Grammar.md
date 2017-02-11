title: 'Grammar'
---

## Idntifier
---
Lemoncase2 is similar to JS.

```C
        Var a = 1;
```

But you do not have to use 'var' keyword (there's no type check currently, haha)

```C
        a = 1;
        a = true;
```
<br><br/>

## Datatype
---
Below is a list of data type you can use

```C
        number (e.g., 0.12, 1e-3)
        string (e.g., 'you', "me")
        Boolean (true/false)
        RegExp
```

RegExp will be used as it is, to match against a string, if it is used with ~~ operator.

Otherwise it will generate a random string based on the regexp pattern (use randexp underneath).

Use it if you want to do some fuzzy testing.
<br><br/>

## Marco
---

Macro is the global setting for your case during runtime.

**#TIMES**

```C
        [// The case will run 10 times.]
        #TIMES 10
```

**#INTERVAL**

```C
        // The case will wait 1000ms before start another one.
        #INTERVAL 1000
```

**#CLOCK**

```C
        // The frequency of the engine, the engine will tick per 30ms.
        #CLOCK 30
```

**#SCREEN**

```C
// Set the screen to width 800px and height 600px.
#SCREEN 800,600
```

**#AUTOSROLL**

```C
// Auto scroll the window when trigger an instruction.
#AUTOSCROLL
```
<br><br/>

## Instruction keyword
---
Simulate an action.
```C
[action] [selector:string] by/to [params|params1,params2]
```

**assertion**: Assert that the expression is true[ within overtime].

```C
assert[exp][in[overtime:number]]
```

**wait** :Wait a few time like a person.

```C
//Editor will wait 3000ms to start the next action.
wait 3000;
```

**log**: Record the value of an expression.

```C
log [exp]
```

**jumpto**: Jump to a URL.

```C
jumpto [exp]
```
<br><br/>

## Action keyword
---
**input**: Type a string into an element like <input type="text" /> or <textarea>.
```C 
// <input id="link" class="case" />
input 'div#link.case' by "hello world.";
```

**click** Click a HTML element.
```C
        // <a href="...">Text</a>
        click 'a';

// <a id="link" href="...">Text</a>
click 'a#link';
```

**dbclick** Double click a HTML element.
```C
// <div id="link" class="case">Text</div>
dblclick 'div#link.case';
```

**rclick** Right click a HTML element.
```C
// <div id="link" class="case">Text</div>
rclick 'div#link.case';
```

**move** Trigger move enter/leave events on a HTML element.
<br><br/>

## Inbuilt sub-procedure
---
Below is the list of type of Inbuilt sub-procedure.[read more]()
<br><br/>

## Selector operator
---
**<# [selector:string] />** Get the number of elements that matches the selector.

```C 
// <div id="link" class="case">Text</div>
log <# 'div'/>; // Output 1
log <# '#link'/>; // Output 1
log <# '#no'/>; // Output 0
```

**<@ [selector:string] />** Get the innerHTML of the 1st element that matches the selector.The result is a string or `false` if there's no match.

```C
// <div id="link" class="case">Text</div>
log <@ 'div'/>; // Output Text
log <@ '#link'/>; // Output Text
log <@ '#no'/>; // Output false
```

**<! [selector:string] />** Check for element visibility.The result is `true` if such element exist && width > 0 && height > 0.Otherwise it is false

```C
// <div id="link" class="case">Text</div>
// <div id="link2" style="display:none">Text</div>
log <@ 'a'/>; // Output false
log <@ 'div'/>; // Output true
log <@ '#link2'/>; // Output false
```