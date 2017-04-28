title: '操作示例'
---

## Hello World
---
如何输出最经典的 Hellow World。
<pre class='sublemon'>
process main {
    log 'hello world';
}
</pre>

<br>

## 简短示例
---
执行五遍的测试用例。

<pre class='sublemon'>
#TIMES 5

process main {
    jumpto '[URL]';
    wait 2000;
    ...
    [statement]
    ...
}
</pre>

<br>
## 经典示例
---
测试一个页面的用户登录。

<pre class='sublemon'>
process main () {

	// Deepin Technology Community
	jumpto "https://www.deepin.org/en/";
	wait 2333;
	// click div|
	click "#hs-site-navigation > div:nth-child(1)";
	// click Login
	click "#menu-main > li:nth-child(11) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(1)";
	// Navigate to New Page
	wait 2000;
	// click deepinID
	click "#loginform > div:nth-child(3) > a:nth-child(1)";
	// Navigate to New Page
	wait 2000;
	// click a text field
	click "#content > form:nth-child(2) > input:nth-child(4)";
	// type in lemonceide
	input "#content > form:nth-child(2) > input:nth-child(4)" by "lemonceide";
	// type in password
	input "#content > form:nth-child(2) > input:nth-child(6)" by "password";
	// click SIGN IN
	click "#content > form:nth-child(2) > input:nth-child(9)";
	// Navigate to New Page
	wait 2000;
	// click div|
	click "#hs-site-navigation > div:nth-child(1)";
	// click Deepin ID
	click "#menu-main > li:nth-child(11) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(1)";
	// Navigate to New Page
	wait 2000;
	// assert element <body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)> contains [lemonceide]
	assert <@"body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)"/> ~~ "lemonceide";
}
</pre>