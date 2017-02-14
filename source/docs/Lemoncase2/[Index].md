title: 'Lemoncase2 Guide'
---
This guide will teach you how to use the programming language of Lemoncase2.

browser automation library: http://lemonce.github.io/lemoncase2
<br>

## [Grammar]()
---

**Zoom Table**

|[Instruction keyword](/docs/Lemoncase2/Grammar_Instruction keyword.html)|[Action keyword](/docs/Lemoncase2/Grammar_Action keyword.html)|[Expression](/docs/Lemoncase2/Grammar_Expression.html) |[Macro](/docs/Lemoncase2/Grammar_Marco.html)|[Magic keyword](/docs/Lemoncase2/Grammar_Magic keyword.html)
|:--------------:|:---------:|:-----------:|:-------:|:-------:|
|process         |click      |<@"cssPath"> |#TIMES   |
|in              |input      |<#"cssPath"> |#AUTOWAIT|
|by              |rclick     |<!"cssPath"> |#LIMIT   |
|assert          |dbclick    |A~~B         |         |
|log             |move       |A==B         |         |
|return          |hold       |A!=B         |         |
|wait            |drop       |RegExp       |         |
|                |scroll     |       |         |
|                |jumpto     |       |         |
|                |refresh    |       |         |
|                | back      |       |         |
|                |forward    |       |         |
|                |upload     |       |        ||
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

**Marco** 

Macro is the global setting for your case during runtime. [`more details`](/docs/Lemoncase2/Grammar_Marco.html)
- #TIMES
- #AUTOWAIT
- #LIMIT

**Instruction keyword** 

Simulate an action.[`read more`](/docs/Lemoncase2/Grammar_Instruction keyword.html)
- process (main/sub)
- assertion (in)
- return/wait
- log

**Action keyword** 

[`read more`](/docs/Lemoncase2/Grammar_Action keyword.html)
- input
- click/dbclick/rclick
- move/hold/drop
- scroll
- jumpto
- forward/back
- upload

**Expression** 

[`read more`](/docs/Lemoncase2/Grammar_Expression.html)
- <@ [selector:string] />/<# [selector:string] />/<! [selector:string] />
- [exp_A:string] ~~ [exp_B:string|RegExp]
- [exp_A:string] !~ [exp_B:string|RegExp]

**Inbuilt sub-process** 

Below is the list of type of Inbuilt sub-process.[`read more`](/docs/Lemoncase2/Grammar_Inbuilt sub-process.html)
- format/now
- bool/number
- ceil/floor/max/min/random
- length/charAt/indexOf/substr/trim
<br><br/>

## [Scope](/docs/Lemoncase2/Scope.html)
---
Global scope. 
So there is no return keyword in LC2. A process has no parameter.
Process main is the program's entry.
<br><br/>

## [Example](/docs/Lemoncase2/Example.html)
---
Here are some examples for you to get started with the language.

**Hello World** 

**A Typical test case** 

**Typical examples** 
