title: '常见问题'
---

##### No.1
<hr width="75%" align="left">

**Q:** 控制台中出现的 “RuntimeError, line:7,Error: Driver action request failed.” 是什么原因？

**A:** 一旦出现这种情况，意味着line7的代码执行失败，此时 Lemonce Editor 会停止运行。造成失败很可能是因为：

① **页面尚未加载完全**（有时候页面虽然页面显示完全，但页面内元素并未加载完成）。

导致line7中使用动作语句如`click`，`input`，`move`等找不到可操作的元素。此时可以在line7之前添加`wait`或者`assert`语句，来控制页面加载的情况。

② **lc2代码中的选择器（selector）在页面内无法定位到相应的元素。**

造成这个问题有多种原因，可能是因为：

- **用户手写了错误的选择器。**

- **页面内的选择器是动态生成的。**录制脚本时使用 <i class="fa fa-crosshairs"></i> 按钮定位的元素生成的选择器，在回放时已经发生了变化，此时需要其他方式来手写一个相对稳定的选择器，比如[内容选择](/zh-cn/docs/lemoncase2/selector.html)等等。

<br/>
##### No.2
<hr width="75%" align="left">

**Q:** Lemonce是否能打开多个浏览器窗口？

**A:** Lemonce内置浏览器窗口并非完整的浏览器，因此不具备tab切换的功能。如果一定要在tab间切换，可以使用`jumpto`语句做跳转，跳转到新页面和旧页面。另外Lemoncase语法中有 `back`（后退）`forward`（前进），可以用来做页面间的切换，相关语法使用请[点击这里。](/zh-cn/docs/lemoncase2/actionkeyword.html)

<br/>
##### No.3
<hr width="75%" align="left">
**Q:** Lemonce中是否有可用于一个测试套件中所有测试用例的**全局变量**？

**A:** Lemonce并没有采用相关的设计，但是我们选用了更好的解决方式————关键词 `import`。
举个栗子。假设用户已经写好了一个用于存放变量的 globals.lc2 的文件如下。

<pre class="sublemon">
var="Lemonce";// 定义一个全局变量var
link="https://www.baidu.com"; // 定义一个全局变量link
process main () {

}
process jumpToBaidu() {
    jumpto link;//link 此时为变量
}</pre>

用户可以按照如下的方式在新的lc2文件中使用global.lc2文件。

<pre class="sublemon">
 import './global.lc2'; // 此处文件路径要选择正确
//主过程中可以使用在global.lc2文件中定义的所有内容

process main () {
   jumpto link; // link 是在global.lc2文件中定义的变量
   log var;// 输出 “Lemonce”
   jumpToBaidu();// 跳转到百度
 }</pre>

您也可以[点击这里](/zh-cn/docs/lemoncase2/instructionkeyword.html)查看具体关于import的使用。