title: 'Example'
---
Here are some examples for you to get started with the language.

## Hello World
---

```
process main {
    log 'hello world';
}
```

## A typical test case
---
A test case that runs only once.

```
#TIMES 1

process main {
    jumpto '[URL]';
    wait 2000;
    ...
    [statement]
    ...
}
```

## Typical examples
---
Test a user registration page.

```
#AUTOWAIT 500
#TIMES 1

process main () {

	// npm
	jumpto "https://www.npmjs.com/";
	wait 3000;
	// click log in
	click "ul.user-info-salutation > li:nth-child(1) > a:nth-child(2)";
	// Navigate to new page
	wait 1398;
	// click Username
	click "#name";
	// input brandroytnm
	input "#name" by "brandroytnm";
	// input 123456
	input "#password" by "123456";
	// click Login
	click "button.btn";
	// Navigate to new page
	wait 1707;
	// assert element div.error contains [Invalid username or password]
	assert <@"div.error"/> ~~ "Invalid username or password";
	// click log in
	click "ul.user-info-salutation > li:nth-child(1) > a:nth-child(2)";
	// Navigate to new page
	wait 1448;
	// assert element div.col-xs-18 > a:nth-child(1) contains [Recover your Password]
	assert <@"div.col-xs-18 > a:nth-child(1)"/> ~~ "Recover your Password";
	// click Username
	click "#name";
	// input brandroytnm
	input "#name" by "brandroytnm";
	// input P@ssw0rd
	input "#password" by "P@ssw0rd";
	// click Login
	click "button.btn";
	// Navigate to new page
	wait 2260;
	// assert element #salutation-username contains [androytnm]
	assert <@"#salutation-username"/> ~~ "androytnm";
	
	// @brandroytnm
	jumpto "https://www.npmjs.com/~brandroytnm";
	wait 555;
	// click a svg|
	click "svg.header-drop-down-icon";
	// click Logout
	click "button.btn-link";
	// Navigate to new page
	wait 4581;
	// assert element h1.title contains [Build amazing things]
	assert <@"h1.title"/> ~~ "Build amazing things";
}
```