title: '开始测试'
---
本文档将帮助用户如何采用Lemonce客户端一步步创建一个网页测试项目。用户将学习如何记录测试脚本、创建断言、运行测试和查看测试报告。

<br/>
## [创建测试用例](/zh-cn/docs/guide/case.html)
---
<embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=11689477&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>

<br/>
**从菜单栏中建立新测试用例**

用户可以从菜单栏中或者采用快捷键 <button>Ctrl+N</button> 新建测试用例，以这种方式建立的测试用例需要用户寻找路径保存。

**从工具栏中建立新测试用例**

用户可以从用例编辑器中的工具栏中新建测试用例，以这种方式建立的测试用例需要用户寻找路径保存。

**从工作空间中建立新测试用例**

工作空间关联本地文件系统，在这里新建、改动或删除文件，会同步到本地相关的文件夹中去。

<br/>
## [录制器的使用](/zh-cn/docs/guide/recorder.html)
---
<embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=11701463&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>

<br/>
 **录制脚本**
 
在录制开始之前，需要点击`process main`的大括号中部，以保证代码生成在正确的位置。随着录制的进行，编辑区中会自动生成代码和注释。

**在录制过程中添加断言**

在录制过程中，按住 <button>Ctrl</button> 并用鼠标选择相应的界面元素，即可自动添加断言语句。

**回放已录制的步骤**

点击 <i class="fa fa-stop-circle-o" style="color:red"></i> 结束录制。点击 <i class="fa fa-play"></i> 按钮，可开始回放刚才录制的过程。

<br/>
## [完善测试套件](/zh-cn/docs/guide/suite.html)
---
<embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=11723084&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>

<br/>
**创建测试套件**

- **从菜单栏中建立新测试套件**
用户可以从菜单栏中新建测试用例，以这种方式建立的测试用例需要用户寻找路径保存。

- **从工具栏中建立新测试套件**
用户可以从用例编辑器中的工具栏中新建测试用例，以这种方式建立的测试用例需要用户寻找路径保存。

- **从工作空间中建立新测试套件**
工作空间关联本地文件系统，在这里新建、改动或删除文件，会同步到本地相关的文件夹中去。

**套件编辑器**

- **激活测试套件**
在Suite版块中选中要进行编辑的套件双击，可将套件激活至上方编辑区进行编辑。

- **调取测试用例**
从面板右方显示的用例库中选择合适的测试用例来组成测试套件，双击即可添加到套件之中。
添加多个用例之后[...]

- **运行测试套件**
编辑完成并保存套件之后，点击工具栏中的 <i class="fa fa-play"></i> / <i class="fa fa-stop"></i>  来开始/停止运行测试套件。

<br/>
## [查看测试报告](/zh-cn/docs/guide/reports.html)
---
测试报告一共分为三个区域。

- **用例列表区**  用例列表区域在最左部的黑色区域。

- **语句日志区**  日志区域将每一条测试用例中的执行语句以列表的形式展现出来。还包括了执行开始或持续时间等信息。

- **测试代码区**  和编辑器中的代码区域相同，测试代码区展示了每一条测试用例的全部lc2代码与注释。