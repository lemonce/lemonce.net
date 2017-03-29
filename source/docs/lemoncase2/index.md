title: 'Lemoncase2 Guide'
---
Lemoncase2 is a Javascript-like scripting language,which is used for developing scripts in Lemonce. Read this guide to help you understand the language.

browser automation library: http://lemonce.github.io/lemoncase2
<br>

## [Grammar]()
---

**Zoom Table**

|[Instruction keyword](/docs/lemoncase2/instructionkeyword.html)|[Action keyword](/docs/lemoncase2/actionkeyword.html)|[Expression](/docs/lemoncase2/expression.html) |[Macro](/docs/lemoncase2/marco.html)|[Magic keyword](/docs/lemoncase2/marco.html)
|:--------------:|:---------:|:-----------:|:-------:|:-------:|
|import          |click      |<@"cssPath"> |#TIMES   |$HREF  |
|in              |dbclick    |<#"cssPath"> |#AUTOWAIT|$BUTTON|
|process         |input...by |<!"cssPath"> |#LIMIT   |$IT    |
|return          |move       |A~~B         |         |$LOOP  |
|for...in        |hold       |A==B         |||         
|for...of        |drop       |A!=B         |||         
|if...else       |scroll     |RegExp       |||         
|continue        |jumpto     ||||          
|while           |wait       ||||           
|log             |assert     ||||          
|                |forward    ||||          
|                |back       ||||            
|                |refresh    ||||           
|                |upload     |||||           

**Idntifier** 

Lemoncase2 is similar to JS.
```C
        Var a = 1;
```
But you do not have to use `var` keyword (there's no type check currently, haha)
```C
        a = 1;
        a = true;
```

**Datatype**

Below is a list of data type you can use.

```C
        number (e.g., 0.12, 1e-3)
        string (e.g., 'you', "me")
        Boolean (true/false)
        RegExp
```

RegExp will be used as it is, to match against a string, if it is used with ~~ operator.

Otherwise it will generate a random string based on the regexp pattern (use randexp underneath).

Use it if you want to do some fuzzy testing.

**Marco** 

Macro is the global setting for your case during runtime. [`read more`](/docs/lemoncase2/marco.html)
- #TIMES
- #AUTOWAIT
- #LIMIT

**Instruction keyword** 

`[action] [selector:string] by/to [params|params1,params2]`
[`read more`](/docs/lemoncase2/instructionkeyword.html)
- process (main/sub)
- assert (in)
- return/wait
- log

**Action keyword** 

Below are the action keywords in LC2.[`read more`](/docs/lemoncase2/actionkeyword.html)
- input
- click/dbclick
- move/hold/drop
- scroll
- jumpto
- forward/back
- upload

**Magic keyword**

Below are the magic keywords which stand for some special functions.[`read more`](/docs/lemoncase2/marco.html)
- $HREF
- $BUTTON
- $IT
- $LOOP

**Expression** 

[`read more`](/docs/lemoncase2/expression.html)
- <@ [selector:string] />/<# [selector:string] />/<! [selector:string] />
- [exp_A:string] ~~ [exp_B:string|RegExp]
- [exp_A:string] !~ [exp_B:string|RegExp]

**Inbuilt sub-process** 

Below is the list of type of Inbuilt sub-process.[`read more`](/docs/lemoncase2/subprocess.html)
- format/now
- bool/number
- ceil/floor/max/min/random
- length/charAt/indexOf/substr/trim
<br><br/>

## [Scope](/docs/lemoncase2/scope.html)
---
Global scope. 
So there is no return keyword in LC2. A process has no parameter.
Process main is the program's entry.
<br><br/>

## [Example](/docs/lemoncase2/example.html)
---
Here are some examples for you to get started with the language.

**Hello World** 

**A Typical test case** 

**Typical examples** 
