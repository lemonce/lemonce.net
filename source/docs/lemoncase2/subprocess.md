title: 'Native sub-process'
---
All the native sub-process should have a form as `sub-process()`.

<br>
## Date
---

**now( )**

`now()` method returns the number of milliseconds elapsed from January 1st 1970, 00:00:00 UTC to the current time.
<pre class='sublemon'>
//Set 2017-1-1,00:00 as current time
log now(); //Output 1483200000</pre>

**format( )**

`format()` returns specified time in a certain format, and could be used with the `now()` above together. More details about `format()` usage please [click here](https://www.npmjs.com/package/dateformat).
<pre class='sublemon'>
//Output formated time.
format("May 11 2012"，"fullDate"); //Output：Friday,May 11,2017
format("May 11 2012"，"isoDate"); //Output：2012-05-11

//Assuming January 1, 2017, 0:00 to be the current time. Output formated current time.
log format(now,"yyyy-mm-dd");
//Output：2017-01-01
log format(now,"yyyy-m-d");
//Output：2017-1-1
log format(now,"mm-d");
//Output：01-1
log format(now,"dddd,mmmm dS,yyyy,h:MM:ss TT");
//Output：Sunday，January 1st,2017,0:00:00 AM
log format(now,"isoDateTime");
//Output：2017-01-01T00:00+0800</pre>


<br>
## Type
---

**bool( )**

`bool()` is a boolean object wrapper which could convert a variable/number/RegExp to a Boolean format.  
<pre class='sublemon'>
bool(3.14) // Output  true
bool(3>4) // Output  false</pre>

**number( )**

`number()` is a wrapper object allowing you to work with numerical values. A Number object is created using the `number()` constructor.
<pre class='sublemon'>
number('3.14') // Output  3.14
number('3'+'2') // Output  32</pre>

**string( )**

The global object `string()` is a constructor for a string or a sequence of characters. Values could also be converted or generated into strings with `string()`.
<pre class='sublemon'>
log length(string(3.14)); //Output  4</pre>


<br>
## Math
---

**abs( )**

`abs()` returns the absolute value of a number, that is abs(x)=|x|.
<pre class='sublemon'>
abs(-3.14) // Output  3.14
abs('') // Output  0
abs() // Output  NaN
abs('string') // Output  NaN</pre>

**ceil( )**

`ceil(number)` returns the smallest integer greater than or equal to a given number.
<pre class='sublemon'>
ceil(3.14) // Output  4
ceil(-3.14) // Output  -3</pre>

**floor( )**

`floor(number)` returns the largest integer less than or equal to a given number.
<pre class='sublemon'>
floor(3.14) // Output  3
floor(-3.14) // Output  -4</pre>

**max( )**

`max(number1,number2,...)` returns the maximum of a set of numbers.
<pre class='sublemon'>
max(3+2,number('3'+'2'))  // Output  32</pre>

**min( )**

`min(number1,number2,...)` returns the minimum of a set of numbers.

**random( )**
`random()` function returns a float pseudo-random number in the range [0, 1), that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale it to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
<pre class='sublemon'>
//Output a random number in a specified range.
random() * (max - min) + min </pre>

<br>
## String
---

**length( )** 

The `length(string)` property represents the length of a string.
<pre class='sublemon'>
length("Lemonce") //Output  7</pre>

**charAt( )**

The `charAt(string,pos)` method returns the specified character from a string.
<pre class='sublemon'>
charAt('Lemonce',5)  //Output 'c'</pre>

**indexOf( )**

The `indexOf(dstSting,testString)` method returns the index within the calling string object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
<pre class='sublemon'>
indexOf('Lemonce','L')  //Output  0
indexOf('Lemonce','e')  //Output  1
indexOf('Lemonce','l')  //Output  -1</pre>

**substr( )**

The `substr(string,from,[length])` method returns the characters in a string beginning at the specified location through the specified number of characters. 
<pre class='sublemon'>
substr('Lemoncase',2,3)  //Output 'mon'
substr('Lemoncase',2)  //Output 'moncase'</pre>

**trim( )**

The `trim(string)` method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
<pre class='sublemon'>
trim('  Lemon case  ')  //Output 'Lemon case'</pre>

<br/>
## Array
---
The array object is a global object used to construct arrays: they are advanced, list-type objects. The format is `arrayname = [element1,element2,...]`, in which arrayname[0] = element1. Take the array in the following for example：

<pre class='sublemon'>
process main () {
smartphones = ["Smartisan","iPhone","Mi"];//Define an array.
}</pre>

**length( )** 

`length(array)` returns the length of a array. You can also use `array.length`.
<pre class='sublemon'>
log length("smartphones"); //Output  3
log smartphones.length;//Output 3</pre>

**for...in/of**

Use `for (var in/of array)` to traverse an array. You can also view the usage of `for...in/of` in [instruction keyword](/zh-cn/docs/lemoncase2/instructionkeyword.html).

<pre class='sublemon'>
for (x in smartphones){
    log x;  //Output 0,1,2
}
for (x of smartphones){
    log x;  //Output Smartisan,iPhone,Mi
}</pre>

**indexOf()**

`indexOf(array,element)` indicates the position of a specified element.
<pre class='sublemon'>
log indexOf(smartphones,"Smartisan"); //Output 0
log smartphones.indexOf("iPhone"); //Does not support this syntax，output -1.</pre>

