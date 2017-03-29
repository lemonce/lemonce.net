title: 'Marco && Magic keyword'
---

## #TIMES
---

The times of running the same test case.The defaut value is 1.
```C
// The case will run 10 times.
#TIMES 10

```
<br>

## #AUTOWAIT
---
The defaut value is 500.

<pre class='sublemon'>

// 
</pre>

<br>

## #LIMIT
---

<pre class='sublemon'>
// Auto scroll the window when trigger an instruction.
#AUTOSCROLL
</pre>

<br>

## $HREF
---

Save the current URL.

<pre class='sublemon'>
//这是一个用 $BUTTON 模拟右键点击的子过程
process rightclick(a) {
    $BUTTON = "right";
    click a;
}
</pre>

<br>

## $BUTTON
---

Simulate the three kinds of mouse click, $BUTTON = left/middle/right.

<pre class='sublemon'>
//This is a sub process simulating right-click with $BUTTON
process rightclick(a) {
    $BUTTON = "right";
    click a;
}
</pre>

<br>

## $IT
---

Save the selector of an element in the page.
<pre class='sublemon'>
process main () {
	jumpto "https://www.deepin.org/";
	wait 3000;
	$IT = '#menu-main > li:nth-child(1) > a:nth-child(1) > span:nth-child(1)';
    // save the selector of 'Home' button
	click ;// default object is $IT,here IDE will click 'Home' button
	click '#menu-main > li:nth-child(2) > a:nth-child(1) > span:nth-child(1)'; 
    // $IT here will change to the current selector
}
</pre>

<br>

## $LOOP
---

Save the current times of loop, often used with #TIMES.
<pre class='sublemon'>
#TIMES 3
// the case will run three times
process main () {
	jumpto "https://www.deepin.org/";
	wait 500;
	log $LOOP; // output 0,1,2 respectively
}
</pre>

<br>