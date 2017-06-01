title: 'Standard built-in objects'
---
All the standard built-in objects in LC2 are shown below.

<br/>
## Array
---
<p class="alert alert-warning">array0[element1,element2,...]; array0[n]=element(n+1)<br/>array1[array0,element1,...]</p>
The **array** object is a global object used to construct arrays: they are advanced, list-type objects. Take the array in the following for example：

<pre class='sublemon'>
process main () {
Smartisan = ["T1","T2","M1"];// define an array named "Smartisan"
smartphones = [Smartisan,"iPhone","Mi"];//define an array named "smartphones"
log Smartisan[0];//output T1
log smartphones[0][2];//output M1
}</pre>

<br/>
**length** 
<p class="alert alert-warning">length(array)<br/>array.length</p>
returns the length of a array. 
<pre class='sublemon'>
log length(smartphones); //Output  3
log smartphones.length;//Output 3</pre>

**for...in/of**
<p class="alert alert-warning">for(var in array)<br/>for(var of array)</p>
traverse an array. You can also view the usage of `for...in/of` in [instruction keyword](/docs/lemoncase2/instructionkeyword.html).

<pre class='sublemon'>
for (x in smartphones){
    log x;  //Output 0,1,2
}
for (x of smartphones){
    log x;  //Output Smartisan,iPhone,Mi
}</pre>

**indexOf**
<p class="alert alert-warning">indexOf(array,element)</p>
indicates the position of a specified element.
<pre class='sublemon'>
log indexOf(smartphones,"Smartisan"); //Output 0
log smartphones.indexOf("iPhone"); //Does not support this syntax，output -1.</pre>

<br/>
## Bool
---
<p class="alert alert-warning">bool([variable,number,RegExp])</p>
a boolean object wrapper which could convert a variable/number/RegExp to a Boolean format.  
<pre class='sublemon'>
bool(3.14) // Output  true
bool(3>4) // Output  false
bool(3-3) // Output false</pre>

<br/>
## Date
---
Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.

<br/>
**now**
<p class="alert alert-warning">now();</p>
returns the number of milliseconds elapsed from January 1st 1970, 00:00:00 UTC to the current time.
<pre class='sublemon'>
//Set 2017-1-1,00:00 as current time
log now(); //Output 1483200000</pre>

**format**
<p class="alert alert-warning">format("time","display-format")<br/>format(now(),"display-format")</p>
returns specified time in a certain format, and could be used with the **now** above together. More details about **format** usage please [click here](https://www.npmjs.com/package/dateformat).
<pre class='sublemon'>
//Output formated time.
log format("May 11 2012","fullDate"); //Output：Friday,May 11,2017
log format("May 11 2012","isoDate"); //Output：2012-05-11

//Assuming January 1, 2017, 0:00 to be the current time. Output formated current time.
log format(now(),"yyyy-mm-dd");//Output：2017-01-01
log format(now(),"yyyy-m-d");//Output：2017-1-1
log format(now(),"mm-d");//Output：01-1
log format(now(),"dddd,mmmm dS,yyyy,h:MM:ss TT");//Output：Sunday,January 1st,2017,0:00:00 AM
log format(now(),"isoDateTime");//Output：2017-01-01T00:00+0800</pre>

<br/>
## Math
---

**abs**
<p class="alert alert-warning">abs([number])</p>
returns the absolute value of a number, that is abs(x)=|x|.
<pre class='sublemon'>
abs(-3.14) // Output  3.14
abs('') // Output  0
abs() // Output  NaN
abs('string') // Output  NaN</pre>

**ceil**
<p class="alert alert-warning">ceil([number])</p>
returns the smallest integer greater than or equal to a given number.
<pre class='sublemon'>
ceil(3.14) // Output  4
ceil(-3.14) // Output  -3</pre>

**floor**
<p class="alert alert-warning">floor([number])</p>
returns the largest integer less than or equal to a given number.
<pre class='sublemon'>
floor(3.14) // Output  3
floor(-3.14) // Output  -4</pre>

**max**
<p class="alert alert-warning">max([number1],[number2],...)</p>
returns the maximum of a set of numbers.
<pre class='sublemon'>
max(3+2,number('3'+'2'))  // Output  32</pre>

**min**
<p class="alert alert-warning">min([number1],[number2],...)</p>
returns the minimum of a set of numbers.

**random**
<p class="alert alert-warning">random()</p>
returns a float pseudo-random number in the range [0, 1), that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale it to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
<pre class='sublemon'>
//Output a random number in a specified range.
random() * (max - min) + min </pre>

<br/>
## Number
---
<p class="alert alert-warning">number("string")</p>
number is a wrapper object allowing you to work with numerical values. A Number object is created using the **number()** constructor.
<pre class='sublemon'>
number('3.14') // Output  3.14
number('3'+'2') // Output  32
number('') // Output  0</pre>

<br/>
## String
---
<p class="alert alert-warning">string([variable,number])</p>
The global object **string** is a constructor for a string or a sequence of characters. Values could also be converted or generated into strings with it.
<pre class='sublemon'>
log length(string(3.14)); //Output  4</pre>

<br/>
**length** 
<p class="alert alert-warning">length("string")</p>
represents the length of a string.
<pre class='sublemon'>
length("Lemonce") //Output  7</pre>

**charAt**
<p class="alert alert-warning">charAt("string",[letterPosition:number])</p>
returns the specified character from a string.Number counts from zero.
<pre class='sublemon'>
charAt('Lemonce',5)  //Output c</pre>

**indexOf**
<p class="alert alert-warning">indexOf("wholeString","chosenLetter")</p>
returns the index within the calling string object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
<pre class='sublemon'>
indexOf('Lemonce','L')  //Output  0
indexOf('Lemonce','e')  //Output  1
indexOf('Lemonce','l')  //Output  -1</pre>

**substr**
<p class="alert alert-warning">substr("string",[startLetter:number],[length:number])</p>
returns the characters in a string beginning at the specified location through the specified number of characters. 
<pre class='sublemon'>
substr('Lemoncase',2,3)  //Output 'mon'
substr('Lemoncase',2)  //Output 'moncase'</pre>

**trim**
<p class="alert alert-warning">trim("string")</p>
removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
<pre class='sublemon'>
trim('  Lemon case  ')  //Output 'Lemon case'</pre>