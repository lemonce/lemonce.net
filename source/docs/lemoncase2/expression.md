title: "Expression"
---

## Selector operator
---

The following show 3 different kinds of selector operation statements in Lemoncase2, which can help users select the corresponding attributes of  page elements more conveniently.

<br/>
<span class="alert alert-warning">**<# ["selector"](/docs/lemoncase2/selector.html) />** </span>

Get the number of elements that matches the selector. Calculation expressions and variables can be applied.

<br/>
<span class="alert alert-warning">**<@ ["selector"](/docs/lemoncase2/selector.html) />** </span>

Get the innerHTML of the 1st element that matches the selector. If related content does not exist, output `null`.

<br/>
<span class="alert alert-warning">**<! ["selector"](/docs/lemoncase2/selector.html) />** </span>

Check whether the element exists or not. Output `true` if such element exists, otherwise output `null`.

The example shows bellow:

```
process main () {

	// The world's leading software development platform · GitHub
	jumpto "https://github.com/";
	wait 2333;
	
	// <# "selector"/>
	log <# "div"/>; // Output the number of tag "div"
	log <# ".form"/>+1; // Output the number of class "form"
	
	// <@ "selector"/>
	log <@ "h1"/>;  // Output the inner text of  tag "h1"
	log <@ "label[for*=user]"/>;
	log <@ "#user\\[login\\]"/>; // Need translation symbol
	log <@ ".form-control[name=timestamp_secret] + button"/>; // Adjacent sibling selector is available
	
	// <! "selector"/>
	log <! "#js"/>; // id="js" doesn't exist in html
	log <! "a"/>;// tag a exists in html
}
```

<br/>
## Compare operator
---

**~~ : Approximately equal to**

- [string] ~~ [string] A part of string A is the same as string B.<br/>
- [string] ~~ [/RegExp/] A part of string A can matches the regular expression B.<br/>

`"Lemonce"~~/[A-Z][a-t]/  //Output：true`<br/>
`"Lemonce"~~"mon" //Output：true`

**== : Equal to**

- [string] == [string] String A is exactly the same as string B.<br/>
- [var] == [var] Variable A is exactly the same as variable B.<br/>

`"Lemonce" == "Lemonce" //Output：true`<br/>
`"x" == "x" //Output：true`

**!~ : Not appromimately equal to**

- [string] !~ [string] No part of string A is the same as string B.<br/>
- [string] !~ [/RegExp/] No part of string A could match the regular expression B.<br/>

`"Lemonce"!~/L[A-Z][a-t]/  //Output：true`<br/>
`"Lemonce"!~"mon" //Output：false`

**!= : Not equal to**

- [string] != [string] String A is different from string B.<br/>
- [var] != [var] Variable A is different from string B.<br/>

`"Lemonce" != "Lemonce" //Output：false`<br/>
`"x" != "y" //Output：true`

