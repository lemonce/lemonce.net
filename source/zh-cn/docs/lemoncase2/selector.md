title: '选择器'
---
灵萌测支持 css，xpath 及 sizzle 三种形式的选择器，其中 css 和 xpath 选择器可以在录制的时候自动实现。

<br/>
## [css selector](http://www.w3school.com.cn/cssref/css_selectors.asp)
---
以下是关于 css selector 的几个示例，具体的使用文档请[点击此处查看](http://www.w3school.com.cn/cssref/css_selectors.asp)。

|css selector    |examples   |
|:--------------:|:---------:|
|.class|.intro|
|#id|#username|
|[attribute=value]|[name=google]|
|:nth-child()|div>p:nth-child(2)|

在录制的过程中，选择器下拉菜单默认选择 selector，即以 css 选择器进行录制，也可以自己在编辑器中手写，手写的 css 选择器会更加简洁。

假设用户要完成在谷歌首页**点击搜索栏**，再**把鼠标移动到右上角登录按钮**这两个操作，用 css 选择器显示的语句如下：
<pre class="sublemon">
process main () {

	// Google
	jumpto "https://www.google.com/";
	wait 2333;

	// 点击搜索栏
	click "#lst-ib";
	// 鼠标移动到右上角登录按钮
	move "#gb_70";
}</pre>

`click` 和 `move` 动作关键词之后，跟随的即为 css selector 的 id 选择器，分别为：
- #lst-ib
- #gb_70

<br/>
## [xpath](http://www.w3school.com.cn/xpath/xpath_intro.asp)
---
关于 xpath 选择器具体的使用文档，请[点击此处查看](http://www.w3school.com.cn/xpath/xpath_intro.asp)。

在录制过程中，在选择器下拉菜单可以选择 xpath，录制出来的选择器代码都是以 xpath 显示。也可以自己在编辑器中手写 xpath ，同样以上方的 case 为例，用 xpath 选择器显示的代码如下：
<pre class="sublemon">
process main () {

	// Google
	jumpto "https://www.google.com/";
	wait 2333;
	
	// 点击搜索栏
	click "/*[@id='lst-ib']";
	// 鼠标移动到右上角登录按钮
	move "/*[@id='gbw']/div/div/div[2]/div[3]/div/a";
}</pre>

`click` 和 `move` 动作关键词之后，跟随的即为 xpath 选择器，分别为：
- /*[@id='lst-ib']
- /*[@id='gbw']/div/div/div[2]/div[3]/div/a

<br/>
## [sizzle](https://github.com/jquery/sizzle/wiki)
---
关于 sizzle 选择器具体的使用文档，请[点击此处查看](https://github.com/jquery/sizzle/wiki)。

在网站开发的过程中，某些网页中的元素的 xpath 或者 css 选择器可能会发生变化。此时可以尝试采用 sizzle 选择器。

录制结束之后，可以把代码中的选择器进行手工改动为 sizzle。同样以上方的 case 为例，用 sizzle 选择器显示的代码如下：
<pre class="sublemon">
process main () {
    
	// Google
	jumpto "https://www.google.com/";
	wait 2333;

	// 点击搜索栏
	click "#lst-ib:eq(0)";
	// 鼠标移动到右上角登录按钮
	move "a:contains(Sign in)";
}</pre>

`click` 和 `move` 动作关键词之后，跟随的即为 sizzle 选择器，分别为：
- #lst-ib:eq(0)
- a:contains(Sign in)

其中 `:contains(innerText)`是一种比较常用的 sizzle 选择方式，对于一些 css 和 xpath 选择器可能产生变化，但网页显示内容却不发生改变的元素，sizzle 能够大幅提高同一 case 复用度，降低维护成本。