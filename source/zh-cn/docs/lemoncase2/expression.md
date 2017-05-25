title: "表达式"
---

## 选择器表达式
---
以下是 Lemoncase2 的三种选择器操作表达式，帮助用户更好地选择页面元素相应的属性。

<br/>
<span class="alert alert-warning">**<# ["selector"](/zh-cn/docs/lemoncase2/selector.html) />** </span>

输出：该选择器的个数。支持计算表达式与变量。

<br/>
<span class="alert alert-warning">**<@ ["selector"](/zh-cn/docs/lemoncase2/selector.html) />** </span>

选取 HTML 内部第一个与该选择器匹配的元素中的内容。如果不存在相应内容，则输出：`null`。

<br/>
<span class="alert alert-warning">**<! ["selector"](/zh-cn/docs/lemoncase2/selector.html) />** </span>

检查该元素是否存在。如果存在输出：`true`，不存在输出：`null`.

示例如下：

```
process main () {

	jumpto "https://login.deepin.org/oauth2/authorize?client_id=fcb9f8cac81074100b9482d534767a1fecc148b3&redirect_uri=https%3A%2F%2Faccount.deepin.org%2Flogin&response_type=code&scope=base%2Cuser%3Aread%2Cuser%3Aedit%2Cprofile%3Aread%2Cprofile%3Aedit";
	wait 2333;
	
	// <# "selector"/>
	log <# "div"/>; //输出"div"的个数
	log <# ".links"/>+1; //支持表达式和变量
	
	// <@ "selector"/>
	log <@ ".msg"/>;  //输出类"msg"内部的文字
	
	// <! "selector"/>
	log <! "[name=username]"/>`; //验证"[name=username]"是否存在
	log <! ".a"/>;
}
```

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



