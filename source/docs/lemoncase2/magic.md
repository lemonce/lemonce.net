title: 'Magic Keyword'
---

## $HREF
---

Save the current URL.

<pre class='sublemon'>
process main {
    jumpto "https://www.google.com/";
    log #HREF;
}</pre>

<br/>
## $BUTTON
---
<p class="alert alert-warning">$BUTTON = left/middle/right</p>
Simulate the three kinds of mouse click. By setting `$BUTTON` with left/middle/right, you can simulate left click, middle click, or right click.

<pre class='sublemon'>
//This is a sub process simulating right-click with $BUTTON.
process rightclick(a) {
    $BUTTON = "right";
    click a;
}</pre>

<br/>
## $IT
---

Save the selector of an element in the page.
<pre class='sublemon'>
process main () {
	jumpto "https://www.google.com/"; // Jump to Google
	$IT = "#gs_htif0"; // Assign CSSselector of search bar of Google.com to $IT.
	click ; // The object of click action is $IT in default, so the search bar will be clicked.
	click 'input[value=Google Search]'; // Change the value of $IT from '#gs_htif0' to 'input[value=Google Search]', that is, change the value when the CSS selector shows up next time. 
}</pre>

<br/>
## $LOOP
---

Save the current times of loop, often used with #TIMES.
<pre class='sublemon'>
#TIMES 3
// the case will run three times.
process main () {
	jumpto "https://www.google.com/";
	wait 500;
	log $LOOP; // Runs 3 times and output 0,1,2 respectively.
}</pre>