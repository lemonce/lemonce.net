title: '内置对象'
---
LC2 所有的内置对象展示如下。

<br/>
## Array
---
<p class="alert alert-warning">array0[element1,element2,...]; array0[n]=element(n+1)<br/>array1[array0,element1,...]</p>
数组对象是一个用于构造数组的全局对象；它们是高级的，列表式的对象。调取数组元素的语法如上方所示，并且支持数组嵌套。下方是例子：

<pre class='sublemon'>
process main () {
Smartisan = ["T1","T2","M1"];//定义名为"Smartisan"的数组
smartphones = [Smartisan,"iPhone","Mi"];//定义名为"smartphones"的数组
log Smartisan[0];//输出 T1
log smartphones[0][2];//输出 M1
}</pre>

<br/>
**length** 
<p class="alert alert-warning">length("array")<br/>array.length</p>
表示一个数组的长度。
<pre class='sublemon'>
log length("smartphones"); //输出  3
log smartphones.length;//输出 3</pre>

**for...in/of**
<p class="alert alert-warning">for(var in array)<br/>for(var of array)</p>
遍历数组，可与[指令关键字](/zh-cn/docs/lemoncase2/instructionkeyword.html)中的 `for...in/of`对照查看。
<pre class='sublemon'>
for (x in smartphones){
    log x;  //输出 0,1,2
}
for (x of smartphones){
    log x;  //输出 Smartisan,iPhone,Mi
}</pre>

**indexOf**
<p class="alert alert-warning">indexOf(array,element)</p>
指出当前元素在数组中的位置。
<pre class='sublemon'>
log indexOf(smartphones,"Smartisan"); //输出 0
log smartphones.indexOf("iPhone"); //语法错误，输出 -1。</pre>

<br/>
## Bool
---
<p class="alert alert-warning">bool([variable,number,RegExp])</p>
布尔值的对象包装器。可以将变量、数字或正则转换为布尔值。
<pre class='sublemon'>
bool(3.14) // 输出 true
bool(3>4) // 输出 false
bool(3-3) // 输出 false</pre>

<br/>
## Date
---
创建 Date 实例用来处理日期和时间。 Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。

<br/>
**now**
<p class="alert alert-warning">now( )</p>
返回自世界标准时间到当前时间的毫秒数。
<pre class='sublemon'>
//假设以2017年1月1日，0时0分为当前时间
log now(); //输出 1483200000</pre>

**format**
<p class="alert alert-warning">format("time","display-format")<br/>format(now(),"display-format")</p>
以某种确定的格式输出指定的时间，可与上方的 **now** 共同使用。关于 **format** 更详细的使用方式请[点击这里](https://www.npmjs.com/package/dateformat)。
<pre class='sublemon'>
//用于输出某一天的相关信息
log format("May 11 2012"，"fullDate"); //输出：Friday,May 11,2017
log format("May 11 2012"，"isoDate"); //输出：2012-05-11

//用于输出当前的信息，假设以2017年1月1日，0时0分为当前时间
log format(now(),"yyyy-mm-dd");//输出：2017-01-01
log format(now(),"yyyy-m-d");//输出：2017-1-1
log format(now(),"mm-d");//输出：01-1
log format(now(),"dddd,mmmm dS,yyyy,h:MM:ss TT");//输出：Sunday，January 1st,2017,0:00:00 AM
log format(now(),"isoDateTime");//输出：2017-01-01T00:00+0800</pre>

<br/>
## Math
---
**abs**
<p class="alert alert-warning">abs([number])</p>
返回当前数字的绝对值, abs(x)=|x|。
<pre class='sublemon'>
abs(-3.14) // 输出  3.14
abs('') // 输出  0
abs() // 输出  NaN
abs('string') // 输出  NaN</pre>

**ceil**
<p class="alert alert-warning">ceil([number])</p>
返回大于当前数字的最小的整数。
<pre class='sublemon'>
ceil(3.14) // 输出  4
ceil(-3.14) // 输出  -3</pre>

**floor**
<p class="alert alert-warning">floor([number])</p>
返回小于当前数字的最大整数。
<pre class='sublemon'>
floor(3.14) // 输出  3
floor(-3.14) // 输出  -4</pre>

**max**
<p class="alert alert-warning">max([number1],[number2],...)</p>
返回一组数中的最大值。
<pre class='sublemon'>
max(3+2,number('3'+'2'))  // 输出  32</pre>

**min**
<p class="alert alert-warning">min([number1],[number2],...)</p>
返回一组数中的最小值。

**random**
<p class="alert alert-warning">random()</p>
返回一个浮点，伪随机数在范围[0，1)，然后用户可以缩放到所需的范围。实现选择初始种子进行随机数生成算法；它不能被用户选择或重置。
<pre class='sublemon'>
//在一个特定的范围输出一个随机数
random() * (max - min) + min </pre>

<br/>
## Number
---
<p class="alert alert-warning">number("string")</p>
number 对象是经过封装的能让你处理数字值的对象。number 对象由 number() 构造器创建。
<pre class='sublemon'>
number('3.14') // 输出  3.14
number('3'+'2') // 输出  32
number('') // 输出  0</pre>

<br/>
## String
---
<p class="alert alert-warning">string([variable,number])</p>
string 全局对象是一个用于字符串或一个字符序列的构造函数。也能使用 `string` 将其他值生成或转换成字符串。
<pre class='sublemon'>
log length(string(3+0.14)); //输出  4</pre>

<br/>
**length** 
<p class="alert alert-warning">length("string")</p>
表示一个字符串的长度。
<pre class='sublemon'>
length("Lemonce") //输出  7</pre>

**charAt**
<p class="alert alert-warning">charAt("string",[letterPosition:number])</p>
从一个字符串中返回指定的字符。
<pre class='sublemon'>
charAt('Lemonce',5)  //输出 'c'</pre>

**indexOf**
<p class="alert alert-warning">indexOf("wholeString","testString")</p>
返回调用 String 对象中第一次出现的指定值的索引，开始在 fromIndex 进行搜索。如果未找到该值，则返回-1。
<pre class='sublemon'>
indexOf('Lemonce','L')  //输出  0
indexOf('Lemonce','e')  //输出  1
indexOf('Lemonce','l')  //输出  -1</pre>

**substr**
<p class="alert alert-warning">substr("string",[startLetter:number],[length:number])</p>
`substr(string,from,[length])` 返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
<pre class='sublemon'>
substr('Lemoncase',2,3)  //输出 'mon'
substr('Lemoncase',2)  //输出 'moncase'</pre>

**trim**
<p class="alert alert-warning">trim("string")</p>
删除一个字符串两端的空白字符。在这个字符串里的空格包括所有的空格字符 (space, tab, no-break space 等)以及所有的行结束符（如 LF，CR）。
<pre class='sublemon'>
trim('  Lemon case  ')  //输出 'Lemon case'</pre>