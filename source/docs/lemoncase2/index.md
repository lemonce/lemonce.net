title: 'Lemoncase2 Guide'
---
Lemoncase2 is a Javascript-like scripting language,which is used for developing scripts in Lemonce. Read this guide to help you understand the language.

browser automation library: http://lemonce.github.io/lemoncase2

<br/>
## [Grammar](/docs/lemoncase2/index.html)
---

**Zoom Table**

|[Instruction keyword](/docs/lemoncase2/instructionkeyword.html)|[Action keyword](/docs/lemoncase2/actionkeyword.html)|[Expression](/docs/lemoncase2/expression.html) |[Macro](/docs/lemoncase2/macro.html)|[Magic keyword](/docs/lemoncase2/magic.html)
|:--------------:|:---------:|:-----------:|:-------:|:-------:|
|import          |click / dbclick      |<@"[selector](/docs/lemoncase2/selector.html)"> |#TIMES   |$HREF  |
|process              |input...by    |<#"[selector](/docs/lemoncase2/selector.html)"> |#AUTOWAIT|$BUTTON|
|return         |move |<!"[selector](/docs/lemoncase2/selector.html)"> |#LIMIT   |$IT    |
|for...in          |hold       |A~~B         |         |$LOOP  |
|for...of        |drop       |A==B         |||         
|if...else        |scroll       |A!=B         |||         
|continue       |jumpto     |RegExp       |||         
|while        |wait     ||||          
|log           |assert       ||||           
|             |forward / back     ||||          
|                |refresh    ||||          
|                |upload      ||||   |       

**Identifier** 

Lemoncase2 is similar to JS in identifiers.
<pre class='sublemon'>
var a = 1; // You have to identify 'var' in JS.
//On the contrary, you do not have to use 'var' keyword in LC2.
//So this is a wrong statement in Lemoncase.
a = 1;
a = true;</pre>

<br/>
**Datatype**

The following shows a list of data types which can be used in LC2.
- number (e.g., 0.12, 1e-3)
- string (e.g., 'you', "me")
- Boolean (true/false)
- RegExp

When you use ~~ operator, the RegExp will be used to match the string, otherwise it will generate a random string based on the RegExp.

RegExp can be used it if you want to do some fuzzy testing.

<br/>
**Instruction keyword** 

Below are the instruction keywords in LC2. [`Read more.`](/docs/lemoncase2/instructionkeyword.html)
- import
- process (main/sub)
- return
- for...in/of
- if...else
- continue
- while
- log

<br/>
**Action keyword** 

Below are the action keywords in LC2. [`Read more.`](/docs/lemoncase2/actionkeyword.html)
- click/dblclick
- input...by
- move/hold/drop
- scroll
- jumpto
- back/forward/refresh
- wait
- assert
- upload

<br/>
**Expression** 

Below are the expressions in LC2. [`Read more.`](/docs/lemoncase2/expression.html)
- <# “selector” />
- <@ “selector” />
- <! “selector” />
- "stringA" ~~ "stringB"
- "stringA" ~~ /RegExp/
- "stringA" == "stringB"
- [var] == [var]????

<br/>
**Selector** 

Below are the type of selectors applied in Lemoncase2.[`Read more.`](docs/lemoncase2/selector.html)
- css selector
- xpath
- sizzle

<br/>
**Native sub-process** 

Below are the types of the inbuilt sub-process in LC2. [`Read more.`](/docs/lemoncase2/subprocess.html)
- now/format
- bool/number/string
- abs/ceil/floor/max/min/random
- length/charAt/indexOf/substr/trim
- length/for...in/for...of/indexOf

<br/>
**Macro** 

Macro is the global setting for your case during runtime. [`Read more.`](/docs/lemoncase2/macro.html)
- #TIMES
- #AUTOWAIT
- #LIMIT

<br/>
**Magic keyword**

Below are the magic keywords which stand for some special functions. [`Read more.`](/docs/lemoncase2/magic.html)
- $HREF
- $BUTTON
- $IT
- $LOOP

<br/>
## [Scope](/docs/lemoncase2/index.html)
---
Global scope. 
There is no `return` keyword in LC2.The main process has no parameter.`process main { }` is the program's entry.

<br/>
## [Example](/docs/lemoncase2/example.html)
---
Here are some examples for you to get started with the LC2 language. [`Read more.`](/docs/lemoncase2/example.html)

**Hello World** 

**A Typical test case** 

**Typical examples** 
