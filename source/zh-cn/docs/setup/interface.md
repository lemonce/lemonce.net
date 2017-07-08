title: '灵萌测界面'
---

在配置完成工作空间以后，灵萌测客户端的界面如下图被分为四个区域。类似于一些代码编辑IDE，灵萌测采用了常用的用户界面：资源管理器列在左方，显示了用户能选择到的所有文件及文件夹；编辑器放在右方，显示用户正在编辑的内容。

下图是一个完整的灵萌测界面，其中不同的数字标明了不同的功能区域，下面会进行详细介绍。

<img class="setup-images" src="/images/setup/interface-whole.png">

<br/>
## 1 菜单栏
---

位于客户端顶部，包括了文件、编辑、视图和帮助四个一级菜单。

<br/>
#### 1.1 文件
<hr width=15% align="left">

- **新建** <button>Ctrl+N</button> 新建测试用例（Ctrl+N）或套件。
- **打开** <button>Ctrl+O</button> 打开一个现有的用例。
- **打开工作空间** 打开一个文件夹作为工作空间。
- **关闭工作空间**  关闭当前的工作空间。
- **重新启动** <button>Ctrl+R</button> 重启灵萌测客户端。
- **退出** <button>Ctrl+W</button> 退出灵萌测客户端。

<br/>
#### 1.2 编辑
<hr width=15% align="left">

- **撤销 / 重复** <button>Ctrl+Z</button>/<button>Ctrl+Y</button>
- **剪切 / 复制 / 粘贴** <button>Ctrl+X</button>/<button>Ctrl+C</button>/<button>Ctrl+V</button>
- **删除** <button>Del</button>
- **全选** <button>Ctrl+A</button> 

<br/>
#### 1.3 视图
<hr width=15% align="left">

- **命令面板** <button>Ctrl+Shift+P</button> 在编辑区顶部打开一个命令行。
- **开发者工具** <button>Ctrl+Shift+I</button> 
- **放大/缩小** <button>Ctrl+=</button>/<button>Ctrl+-</button>
- **重置缩放** <button>Ctrl+0</button>
- **全屏** <button>F11</button>
- **切换左边栏** <button>Ctrl+B</button> 显示或隐藏边栏。
- **切换调试窗口** <button>Ctrl+D</button> 打开或关闭调试器面板。

<br/>
#### 1.4 帮助
<hr width=15% align="left">

- **了解更多** 
- **许可证**

<br/>
## 2 视图边栏 && 功能边栏
---

视图边栏位于客户端的最左侧，包含了三个用于转换功能边栏的视图的按键。来帮助用户更有效率地切换工作版块。

#### 2.1 资源管理器 <i class="fa fa-code fa-2x"></i> 
<hr width=35% align="left">
**I. 已打开的编辑器** 

资源管理器用于浏览，打开和管理用户项目中所有的文件及文件夹。

在资源管理器的顶部为 <span class="btn-gray">**已打开的编辑器**</span> 的区域，用于临时显示正在编辑或者待编辑的多个文件。例如，如果用户正在对文件进行以下四种操作，该文件就会被列入到 <span class="btn-gray">**已打开的编辑器**</span> 中。

- 对一个文件做出改动。
- 在编辑器顶栏上双击文件名称。
- 在资源管理器中双击一个文件。
- 打开一个不属于当前文件夹的文件。

只需在 <span class="btn-gray">**已打开的编辑器**</span> 的区域点击一个文件，该文件立即在灵萌测中被激活。当用户结束当前文件的编辑之后，只需点击文件名之前的 <i class="fa fa-times"></i> 即可在 <span class="btn-gray">**已打开的编辑器**</span> 中移出该文件。

<br/>
**II. 编辑区激活按钮**

以下三个按钮，用于激活编辑区的相应区域。

- <i class="fa fa-file-code-o fa-2x" style="color:green"></i> **切换case面板** 

- <i class="fa fa-file-text-o fa-2x" style="color:green"></i> **切换suite面板** 

- <i class="fa fa-globe fa-2x" style="color:green"></i> **打开webview** 

<br/>
**III. 工作空间** 

用户可以点击 <span class="btn-gray">**没有设定工作空间**</span> 标签下的 <button class="btn-blue">打开文件夹</button> 按钮来打开一个文件夹作为工作空间。

打开选中的文件夹之后，资源管理器会显示当前文件夹中的文件目录，此时用户可以在这里通过鼠标右键完成以下的操作：
- 新建、删除、重命名文件或者文件夹。
- 打开已有的用例或文件夹的本地路径。

<br/>
#### 2.2 配置面板 <i class="fa fa-cog fa-2x"></i> 
<hr width=35% align="left">
目前配置面板只有以下两个功能，后续会添加更多功能。
- 改变客户端的语言（目前支持中/英文）
- 打开/关闭控制台
- 打开/关闭调试输出

<br/>
#### 2.3 查看报告 <i class="fa fa-bar-chart fa-2x"></i>
<hr width=35% align="left">

测试报告按照时间顺序排列。点击这些报告，用户可以从一个报告弹窗中得到具体的测试信息。
关于测试报告的更多内容在[查看测试报告](/zh-cn/docs/guide/reports.html)中。

<br/>
<img class="guide-images" src="/images/setup/interface-report.png">

<br/>
## 3 编辑区
---

编辑文件的主要区域。用户可以在这里打开足够多的编辑器，也能在编辑的同时在另一侧打开网页视图。推荐用户采用分离视图，即一边是用例/套件编辑器，一边是网页视图的方式来编辑。

关于编辑区的内容在这里就不再赘述，更多详细的介绍请参考[编辑器](/zh-cn/docs/code-editor/index.html)一节。

<br/>
## 4 输出 && 调试面板
---
用户可以在编辑区下方显示不同的面板，用于输出或调试信息、错误或警告。

- 顶部的“输出”与“调试”按钮可用于切换这两个不同的面板；
- 右上角的 <i class="fa fa-times-circle" color="grey"></i> 则用于关闭当前面板。若想再次启动面板，用户可在菜单栏的“编辑”子菜单中再次将其调出；
- 点击 <i class="fa fa-ban"></i> ，可清空当前面板的内容。

<br/>
#### 4.1 **输出面板**
<hr width=35% align="left">

以视频中的"logout"用例为例，运行完毕之后会在面板中生成以下内容。
<pre class='sublemon'>
 [18:57:32.488] Testing Start.
 [18:57:32.551] Line:4 Jump to 'https://www.npmjs.com/~lemoncase'.
 [18:57:32.561] Line:5 Wait 2333 ms.
 [18:57:35.585] Line:7 click '#user-info-drop-down-menu-toggle > svg:nth-child(4) > path:nth-child(1)'.
 [18:57:36.234] Line:9 click '#user-info-menu > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > form:nth-child(1) > button:nth-child(2)'.
 [18:57:36.242] Line:11 Wait 2000 ms.
 [18:57:38.235] End of execution
</pre>

可见输出信息可分为以下几个部分：
- 测试开始（Testing Start）与执行结束（<span class="btn-blue">End of execution</span> 会以蓝色高亮来区隔连续的用例）
- 系统时间（中括号内部）
- 执行代码所在的行数
- 具体的执行用例的内容

<br/>
#### 4.2 **调试面板**
<hr width=35% align="left">

用户可在调试面板中尝试使用 Lemoncase2 语言。方法与和再浏览器中使用调试面板一样。