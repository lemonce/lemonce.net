title: '内置子过程'
---
所有的内置子过程都需要有如下的形式：`子过程名称()`。

<br/>
## Date
---

**now**

`now()` 方法返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。
<pre class='sublemon'>
//假设以2017年1月1日，0时0分为当前时间
log now(); //输出 1483200000
</pre>

**format**

`format` 与上方的 `now` 共同使用，以某种确定的格式输出当前的时间。关于`format`更详细的使用方式请[点击这里](https://www.npmjs.com/package/dateformat)。
<pre class='sublemon'>
//假设以2017年1月1日，0时0分为当前时间
log format(now,"yyyy-mm-dd");
//输出：2017-01-01
log format(now,"yyyy-m-d");
//输出：2017-1-1
log format(now,"mm-d");
//输出：01-1
log format(now,"dddd,mmmm dS,yyyy,h:MM:ss TT");
//输出：Sunday，January 1st,2017,0:00:00 AM
log format(now,"isoDateTime");
//输出：2017-01-01T00:00+0800

//也可以用于输出某一天的完整信息
format("Jan 1 2017"，"fullDate"); //输出：Sunday,January 1st,2017
</pre>

<br/>
## Type
---

**bool( )**

`bool()` 对象是一个布尔值的对象包装器。可以将变量、数字或正则转换为布尔值。
<pre class='sublemon'>
bool(3.14) // 输出 true
bool(3>4) // 输出 false
</pre>

**number( )**

`number()` 对象是经过封装的能让你处理数字值的对象。number 对象由 number() 构造器创建。
<pre class='sublemon'>
number('3.14') // 输出  3.14
number('3'+'2') // 输出  32
</pre>

<br/>
## Math
---

**abs()**

`abs(number)` 返回当前数字的绝对值, abs(x)=|x|。
<pre class='sublemon'>
abs(-3.14) // 输出  3.14
abs('') // 输出  0
abs() // 输出  NaN
abs('string') // 输出  NaN</pre>

**ceil( )**

`ceil(number)` 返回大于当前数字的最小的整数。
<pre class='sublemon'>
ceil(3.14) // 输出  4
ceil(-3.14) // 输出  -3</pre>

**floor( )**

`floor(number)` 返回小于当前数字的最大整数。
<pre class='sublemon'>
floor(3.14) // 输出  3
floor(-3.14) // 输出  -4</pre>

**max( )**

`max(number1,number2,...)` 返回一组数中的最大值。
<pre class='sublemon'>
max(3+2,number('3'+'2'))  // 输出  32</pre>

**min( )**

`min(number1,number2,...)` 返回一组数中的最小值。

**random( )**

`random()` 返回一个浮点，伪随机数在范围[0，1)，然后用户可以缩放到所需的范围。实现选择初始种子进行随机数生成算法；它不能被用户选择或重置。
<pre class='sublemon'>
//在一个特定的范围输出一个随机数
random() * (max - min) + min </pre>

<br/>
## String
---

**length( )** 

`length(string)`表示一个字符串的长度。
<pre class='sublemon'>
length("Lemonce") //输出  7</pre>

**charAt( )**

`charAt(string,pos)` 从一个字符串中返回指定的字符。
<pre class='sublemon'>
charAt('Lemonce',5)  //输出 'c'</pre>

**indexOf( )**

`indexOf(dstSting,testString)` 方法返回调用 String 对象中第一次出现的指定值的索引，开始在 fromIndex 进行搜索。如果未找到该值，则返回-1。
<pre class='sublemon'>
indexOf('Lemonce','L')  //输出  0
indexOf('Lemonce','e')  //输出  1
indexOf('Lemonce','l')  //输出  -1</pre>

**substr( )**

`substr(string,from,[length])` 返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
<pre class='sublemon'>
substr('Lemoncase',2,3)  //输出 'mon'
substr('Lemoncase',2)  //输出 'moncase'</pre>

**trim( )**

`trim(string)` 删除一个字符串两端的空白字符。在这个字符串里的空格包括所有的空格字符 (space, tab, no-break space 等)以及所有的行结束符（如 LF，CR）。
<pre class='sublemon'>
trim('  Lemon case  ')  //输出 'Lemon case'</pre>

<br/>
## Array
---
数组对象是一个用于构造数组的全局对象; 它们是高级的，列表式的对象。数组的格式为 `arrayname = [element1,element2,...]`，其中 array[0] = element1。以下方的数组为例：

```
process main () {
smartphones = ["Smartisan","iPhone","Mi"];
}
```

**length( )** 

`length(array)`表示一个字符串的长度。也可以使用 `array.length`。
<pre class='sublemon'>
log length("smartphones"); //输出  3
log smartphones.length;//输出 3
</pre>

**for...in/of**

`for (var in/of array)` 遍历数组，可与[指令关键字](/zh-cn/docs/lemoncase2/instructionkeyword.html)中的 `for...in/of`对照查看。
<pre class='sublemon'>
for (x in smartphones){
    log x;  //输出 0,1,2
}
for (x of smartphones){
    log x;  //输出 Smartisan,iPhone,Mi
}
</pre>

**indexOf**

`indexOf(array,element)`指出当前元素在数组中的位置。
<pre class='sublemon'>
log indexOf(smartphones,"Smartisan"); //输出 0
log smartphones.indexOf("iPhone"); //不支持这种写法，输出 -1
</pre>

