title: '选择器'
---
灵萌测支持 css，xpath 及 sizzle 三种形式的选择器。其中 css 和 xpath 选择器可以在录制的时候自动实现，sizzle 只能在编辑代码时由手工撰写的方式实现。

<br/>
## [css](https://www.w3.org/TR/CSS2/selector.html)
---
关于 css 选择器的具体文档，请点击上方的标题查看。

在录制的过程中，选择器下拉菜单默认选择 selector，即以 css 选择器进行录制。以视频中的名为 logout 的 case为例。
<pre class="sublemon">
process main () {

	// Deepin Technology Community
	jumpto "https://github.com";
	wait 2333;
	// click div|
	click "#hs-site-navigation > div:nth-child(1)";
	// click Logout
	click "#menu-main > li:nth-child(11) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(1)";
	// Navigate to New Page
	wait 2000;
}
</pre>

两个 `click` 动作关键词之后，跟随的即为 css 选择器，分别为：
- #hs-site-navigation > div:nth-child(1)
- #menu-main > li:nth-child(11) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(1)

<br/>
## [xpath](https://www.w3.org/TR/xpath-30/)
---
关于 xpath 选择器的具体文档，请点击上方的标题查看。

在录制过程中，在选择器下拉菜单可以选择以 xpath 进行录制，录制出来的选择器代码都是以 xpath 显示。同样以上方的 case 为例。
<pre class="sublemon">
process main () {

	// Deepin Technology Community
	jumpto "https://www.deepin.org/en/";
	wait 2333;
	// click div|
	click "/*[@id='hs-site-navigation']/div[1]";
	// click Logout
	click "/*[@id='menu-main']/li[11]/ul[1]/li[2]/a/span";
	// Navigate to New Page
	wait 2000;
}
</pre>

两个 `click` 动作关键词之后，跟随的即为 xpath 选择器，分别为：
- /*[@id='hs-site-navigation']/div[1]
- /*[@id='menu-main']/li[11]/ul[1]/li[2]/a/span

<br/>
## [sizzle](https://github.com/jquery/sizzle/wiki)
---
关于 sizzle 选择器的具体文档，请点击上方的标题查看。

有一些项目，随着网站的更新，网页中的 xpath 路径会发生变化，此时以 xpath 选择器描述的 lc2 语言就会发生运行错误的情况出现，但如果页面上的内容固定，可以采用 sizzle 选择器。

录制结束之后，可以把代码中的选择器进行手工改动为 sizzle。以同样的 case 为例。
<pre class="sublemon">
process main () {
    
	// Deepin Technology Community
	jumpto "https://www.deepin.org/en/";
	wait 2333;
	// click div|
	click ".hs-toggle-menu:has(span)";
	// click Logout
	click "span:contains(Logout)";
	// Navigate to New Page
	wait 2000;
}
</pre>

其中第二个 `click` 之后的选择器即为 sizzle 选择器。