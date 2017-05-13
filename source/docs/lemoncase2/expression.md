title: "Expression"
---

## Selector operator
---

The following show 3 different kinds of selector operation statements in Lemoncase2, which can help users select the corresponding attributes of  page elements more conveniently.

- **<# [selector:string] />** 
Get the number of elements that matches the selector. Calculation expressions and variables can be applied.

- **<@ [selector:string] />** 
Get the innerHTML of the 1st element that matches the selector. If related content does not exist, output `null`.

- **<! [selector:string] />** 
Check whether the element exists or not. Output `true` if such element exists, otherwise output `null`.

The example shows bellow:

```
process main () {

	jumpto "https://login.deepin.org/oauth2/authorize?client_id=fcb9f8cac81074100b9482d534767a1fecc148b3&redirect_uri=https%3A%2F%2Faccount.deepin.org%2Flogin&response_type=code&scope=base%2Cuser%3Aread%2Cuser%3Aedit%2Cprofile%3Aread%2Cprofile%3Aedit";
	wait 2333;
	
	// <# "selector"/>
	log <# "div"/>; // Out put the number of "div" elements.
	log <# ".links"/>+1; // Support expressions and variables.
	
	// <@ "selector"/>
	log <@ ".msg"/>;  // Output the inside text of the class "msg".
	
	// <! "selector"/>
	log <! "[name=username]"/>; // To check whether "[name=username]" exists or not.
	log <! ".a"/>;
}
```

<br/>
## Compare operator
---

**~~ : Approximately equal to**

- [string] ~~ [string] A part of string A is the same as string B.<br>
- [string] ~~ [/RegExp/] A part of string A can matches the regular expression B.<br>

`"Lemonce"~~/[A-Z][a-t]/  //Output：true`<br>
`"Lemonce"~~"mon" //Output：true`

**== : Equal to**

- [string] == [string] String A is exactly the same as string B.<br>
- [var] == [var] Variable A is exactly the same as variable B.<br>

`"Lemonce" == "Lemonce" //Output：true`<br>
`"x" == "x" //Output：true`

**!~ : Not appromimately equal to**

- [string] !~ [string] No part of string A is the same as string B.<br>
- [string] !~ [/RegExp/] No part of string A could match the regular expression B.<br>

`"Lemonce"!~/L[A-Z][a-t]/  //Output：true`<br>
`"Lemonce"!~"mon" //Output：false`

**!= : Not equal to**

- [string] != [string] String A is different from string B.<br>
- [var] != [var] Variable A is different from string B.<br>

`"Lemonce" != "Lemonce" //Output：false`<br>
`"x" != "y" //Output：true`

