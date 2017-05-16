title: 'Magic keyword'
---

## $HREF
---

Save the current URL.

<pre class='sublemon'>
process main {
    jumpto "https://www.deepin.org/";
    log #HREF;
}</pre>

<br>

## $BUTTON
---

Simulate the three kinds of mouse click. By setting $BUTTON = left/middle/right, you can simulate left click, middle click, or right click.

<pre class='sublemon'>
//This is a sub process simulating right-click with $BUTTON.
process rightclick(a) {
    $BUTTON = "right";
    click a;
}</pre>

<br>

## $IT
---

Save the selector of an element in the page.
<pre class='sublemon'>
process main () {
	jumpto "https://www.baidu.com/"; // Jump to Baidu.com.
	$IT = "#kw"; // Assign CSSselector of search bar of Baidu.com to $IT.
	click ; // The object of click action is $IT in default, so the search bar will be clicked.
	click '#su'; // Change the value of $IT from '#kw' to '#su', that is, change the value when the CSSselector shows up next time. 
}</pre>

<br>

## $LOOP
---

Save the current times of loop, often used with #TIMES.
<pre class='sublemon'>
#TIMES 3
// the case will run three times.
process main () {
	jumpto "https://www.deepin.org/";
	wait 500;
	log $LOOP; // Runs 3 times and output 0,1,2 respectively.
}</pre>

<br>