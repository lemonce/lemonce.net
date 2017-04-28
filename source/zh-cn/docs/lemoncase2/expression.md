title: "表达式"
---

## 选择器表达式
---
以下是 Lemoncase2 的三种选择器操作表达式，帮助用户更好地选择页面元素相应的属性。
以下方的一段 HTML 为例。

```
<div id="link" class="case">
    <p>Text1</p>
    <div>
        <p>Text2</p>
    </div>
</div>
```

**<# [selector:string] />** 

输出：该选择器的个数。

`log <# "div"/>; // 输出：2`<br>
`log <# "#link"/>; // 输出：1`<br>
`log <# ".case"/>; // 输出：1`

支持计算表达式与变量。

`log <# "div"/>+1~~3; // 输出：true`<br>
`x="div"; log <# x/>; // 输出：2`

**<@ [selector:string] />** 

选取 HTML 内部第一个与该选择器匹配的元素中的内容。如果不存在相应内容，则输出：`false`。

`log <@ "div"/>; // 输出：Text1\n\nText2`<br>
`log <@ "div > div"/>; // 输出：Text2`<br>
`log <@ "p"/>; // 输出：Text1`

**<! [selector:string] />** 

检查该元素是否存在。如果存在输出：`true`，不存在输出：`false`.

`log <! "a"/>; // 输出： false`<br>
`log <! "div"/>; // 输出： true`<br>
`log <! "#link"/>; // 输出： true`

<br>
## 比较符
---

**~~ : 约等于**

- [string] ~~ [string] 字符串A中有一段字符串和字符串B相同<br>
- [string] ~~ [/RegExp/] 字符串A中有一段字符串和正则表达式B相同<br>

`"Lemonce"~~/[A-Z][a-t]/  //输出：true`<br>
`"Lemonce"~~"mon" //输出：true`

**== : 等于**

- [string] == [string] 字符串A与字符串B完全相同<br>
- [var] == [var] 变量A与变量B完全相同<br>

`"Lemonce" == "Lemonce" //输出：true`<br>
`"x" == "x" //输出：true`

**!~ : 不约等于**

- [string] !~ [string] 字符串A中没有任何一段字符串和字符串B相同<br>
- [string] !~ [/RegExp/] 字符串A中没有任何一段字符串和正则表达式B相同<br>

`"Lemonce"!~/L[A-Z][a-t]/  //输出：true`<br>
`"Lemonce"!~"mon" //输出：false`

**!= : 不等于**

- [string] != [string] 字符串A与字符串B不相同<br>
- [var] != [var] 变量A与变量B不相同<br>

`"Lemonce" != "Lemonce" //输出：false`<br>
`"x" != "y" //输出：true`



