title: 'Selector'
---
Lemonce2 supports 3 different kinds of selectors: css, xpath, sizzle, among which css and xpath selector can be generated automatically while recording.

<br/>
## [css selector](https://www.w3schools.com/cssref/css_selectors.asp)
---
The following are a few examples of css selector, to read detail documents about css selector please [click here](https://www.w3schools.com/cssref/css_selectors.asp).

|css selector    |examples   |
|:--------------:|:---------:|
|.class|.intro|
|#id|#username|
|[attribute=value]|[name=google]|
|:nth-child()|div>p:nth-child(2)|

In the recording, the drop-down menu defaults to choose css selector to record. You can also write your own code in the code editor in order to make your code more brief.

Assume the user attempts to complete two operations on the Google home page: **click on the search bar**, then **move the mouse to the login button in the upper right corner**. Using css selector, the statements will be as the following. 
<pre class="sublemon">
process main () {

	// Google
	jumpto "https://www.google.com/";
	wait 2333;

	// Click the search bar.
	click "#lst-ib";
	// Move the mouse to the Gmail.
	move "#gbw > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)";
}</pre>

The action keywords `click` and `move` are followed by the id selectors of css selectors as follows:
- #lst-ib
- #gbw > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)

<br/>
## [xpath](https://www.w3schools.com/xml/xpath_intro.asp)
---
To read detail documents about xpath please [click here](https://www.w3schools.com/xml/xpath_intro.asp).

In the recording, you can select xpath in the selector drop-down menu so the code generated by recording is in xpath forms. You can also write your code in the code editor. Apply xpath to the former case, the code generated will be like:

<pre class="sublemon">
process main () {

	// Google
	jumpto "https://www.google.com/";
	wait 2333;
	
	// Click the search bar.
	click "/*[@id='lst-ib']";
	// Move the mouse to the Gmail
    move "/*[@id='gbw']/div/div/div[1]/div[1]/a";
}</pre>

The action keywords `click` and` move` are followed by the xpath selectors as follows:
- /*[@id='lst-ib']
- /*[@id='gbw']/div/div/div[1]/div[1]/a

<br/>
## [sizzle](https://github.com/jquery/sizzle/wiki)
---
To learn more detail usages of sizzle selector, please [click here](https://github.com/jquery/sizzle/wiki).

During website development, the xpath or css selector of elements may change in some pages. In this case, you can try to use the sizzle selector.

After recording, you change change the selector to sizzle manually. Apply sizzle to the former case, the code generated is like the following:

<pre class="sublemon">
process main () {
    
	// Google
	jumpto "https://www.google.com/";
	wait 2333;

	// Click the search bar.
	click "#lst-ib:eq(0)";
	// Move the mouse to the Gmail
    move "#gbw a:contains(Gmail)";
}</pre>

The action keywords `click` and` move` are followed by the sizzle selectors as follows:
- #lst-ib:eq(0)
- #gbw a:contains(Gmail)

Among them,  `:contains(innerText)` is a frequently used sizzle selection method. For those elements whose contant will not change but the css and xpath selectors will change, using sizzle will significantly improve case reuse rate and reduce maintenance costs.