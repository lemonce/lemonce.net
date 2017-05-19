title: 'Example'
---

## Hello World
---
How to output the most classic phrase.
<pre class='sublemon'>
process main {
    log 'hello world';
}
</pre>

<br/>
## A Typical test case
---
A test case that runs five times.

<pre class='sublemon'>
#TIMES 

process main {
    jumpto '[URL]';
    wait 2000;
    ...
    [statement]
    ...
}</pre>

<br/>
## Typical examples
---
Test a user registration page.

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
	// type in caonima438
	input "#content > form:nth-child(2) > input:nth-child(6)" by "caonima438";
	// click SIGN IN
	click "#content > form:nth-child(2) > input:nth-child(9)";
	// Navigate to New Page
	wait 2000;
	// click Deepin ID
	click "#menu-main > li:nth-child(11) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(1)";
	// Navigate to New Page
	wait 2000;
	// assert element <body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)> contains [lemonceide]
	assert <@"body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)"/> ~~ "lemonceide";
	// click Home
	click "#newHeader > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(1)";
	// Navigate to New Page
	wait 2000;
}
</pre>