title: 'Lemoncase2 语言指南'
---

Lemoncase2 是一门类似 JavaScript 的编程语言，用于 Lemonce 中的用例编写。以下的指南会帮助您更好地理解这门编程语言。

Lemoncase2 语言库: http://lemonce.github.io/lemoncase2
<br>

## [语法]()
---

**速查表**

|[指令关键字](/zh-cn/docs/lemoncase2/instructionkeyword.html)|[动作关键字](/zh-cn/docs/lemoncase2/actionkeyword.html)|[表达式](/zh-cn/docs/lemoncase2/expression.html) |[宏](/zh-cn/docs/lemoncase2/marco.html)|[魔术字](/zh-cn/docs/lemoncase2/marco.html)
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

**标识符** 

在标识符的定义上，Lemoncase2 类似于 JavaScript。
```C
        Var a = 1;
```
但在 Lemoncase2 中，您不需要使用`Var`字符。

```C
        a = 1;
        a = true;
```

**数据类型**

以下是您可以使用的数据类型。

```C
        number (e.g., 0.12, 1e-3)
        string (e.g., 'you', "me")
        Boolean (true/false)
        RegExp
```

RegExp will be used as it is, to match against a string, if it is used with ~~ operator.

Otherwise it will generate a random string based on the regexp pattern (use randexp underneath).

在需要进行一些模糊测试的时候可以使用。

**宏** 

宏是运行测试用例时的全局设置。 [`了解更多`](zh-cn/docs/lemoncase2/marco.html)
- #TIMES
- #AUTOWAIT
- #LIMIT

**指令关键字**  

以下是 Lemoncase2 的所有指令关键字。[`了解更多`](/zh-cn/docs/lemoncase2/instructionkeyword.html)
- import
- process (main/sub)
- return
- for...in/of
- if...else
- continue
- while
- log

**动作关键字** 

以下是 Lemoncase2 的所有动作关键字。[`了解更多`](/zh-cn/docs/lemoncase2/actionkeyword.html)
- click/dbclick
- input...by
- move/hold/drop
- scroll
- jumpto
- wait
- assert
- forward/back
- refresh
- upload

**魔术关键字**

魔术关键字代表了一些特殊的功能。[`了解更多`](/zh-cn/docs/lemoncase2/marco.html)
- $HREF
- $BUTTON
- $IT
- $LOOP

**表达式** 

以下是 Lemoncase2 的所有表达式。[`了解更多`](/zh-cn/docs/lemoncase2/expression.html)
- <@ [selector:string] />/<# [selector:string] />/<! [selector:string] />
- [exp_A:string] ~~ [exp_B:string|RegExp]
- [exp_A:string] !~ [exp_B:string|RegExp]

**内置子过程** 

以下是所有形式的内置子过程。[`了解更多`](/zh-cn/docs/lemoncase2/subprocess.html)
- format/now
- bool/number
- ceil/floor/max/min/random
- length/charAt/indexOf/substr/trim
<br>

## [作用域]()
---
全局作用域。在 Lemoncase2 主过程中无需 `return` 关键词，主过程没有参数，`process main { }` 是程序的主入口。
<br>

## [操作示例](/zh-cn/docs/lemoncase2/example.html)
---

以下是几个关于 Lemoncase2 语言的操作示例。[`了解更多`](/zh-cn/docs/lemoncase2/example.html)

**Hello World** 

**A Typical test case** 

**Typical examples** 