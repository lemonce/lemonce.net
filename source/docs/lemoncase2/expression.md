title: "Expression"
---

## Selector operator
---

Take HTML below as an example.

```
<div id="link" class="case">
    <p>Text1</p>
    <div>
        <p>Text2</p>
    </div>
</div>
```

**<# [selector:string] />** 

Get the number of elements that matches the selector.

`log <# "div"/>; // Output:2`<br>
`log <# "#link"/>; // Output:1`<br>
`log <# ".case"/>; // Output:1`

Calculation expressions and variables can be applied.

`log <# "div"/>+1~~3; // 输出：true`<br>
`x="div"; log <# x/>; // 输出：2`

**<@ [selector:string] />** 

Get the innerHTML of the 1st element that matches the selector.The result is a string or `false` if there"s no match.

`log <@ "div"/>; // Output:Text1\n\nText2`<br>
`log <@ "div > div"/>; // Output:Text2`<br>
`log <@ "p"/>; // Output:Text1`

**<! [selector:string] />** 

Check for element visibility.The result is `true` if such element exist && width > 0 && height > 0.Otherwise it is `false`.

`log <! "a"/>; // Output:false`<br>
`log <! "div"/>; // Output:true`<br>
`log <! "#link"/>; // Output:true`

<br>
## Compare operator
---

**[exp_A:string] ~~ [exp_B:string|RegExp]**

- exp_B is not a string or RegExp, false. 

- exp_A is not a string, false.

- exp_A is not matched to exp_B(RegExp), false.

- exp_A has a sub string like exp_B, true.

- exp_A is matched to exp_B(RegExp), true.

**[exp_A:string] !~ [exp_B:string|RegExp]**

