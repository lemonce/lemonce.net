title: '语法'23333333
---
# Lemoncase2
用来描述测试用例的语言

# 语法
所有的语句必须以分号 ; 结尾  
例：  
`click 'here';`

## 变量 - stable

类似于 python ：  
```Python
a = 1;
a = true;
```

## 类型

**Lemoncase2 有以下数据类型**
* 数值 (e.g., 0.12, 1e-3)
* 字符 (e.g., 'you', "me")
* 布尔 (true/false)
* 正则 (/abs/i)

## 宏指令
宏指令定义了测试用例运行的参数。
### #TIMES [times:number|1] - stable
```C
// 用例会运行 10 次。
#TIMES 10
```
### #INTERVAL [interval:number|3000] - stable
```C
// 用例执行的间隔是 1000 毫秒。
#INTERVAL 1000
```
### #SCREEN [width:number],[height:number] - beta
```C
// 将待测页面的宽度设为 800px 高度设为 height 600px。
#SCREEN 800,600
```
### #AUTOWAIT - beta
```C
// 自动等待
#AUTOSCROLL
```
### #LIMIT [time:number] - stable
```C
// 时间限制
#LIMIT 50
```
  
## 指令

### assert [exp][ in [overtime:number]] - stable
断言当前的表达式[时间限制]。

### verify [exp][ in [overtime:number]] - beta
检测当前的表达式[时间限制]。和 assert 不一样的地方在于，即使失败，用例也会继续执行。

### wait [time:number] - stable
等待一定时间。

### log [exp] - stable
在控制台中输出表达式的结果。

### jumpto [exp] - stable
跳转到一个链接。

### refresh - beta
刷新当前页面。

### process [identifier] { [statements] } - locked
定义一个过程 / 函数。

### [action] [selector:string] by/to [params|params1,params2]
模拟用户操作的指令。

> 动作指令关键字

### input - stable
输入文字到 input 元素 `<input type="text" />` 或 `<textarea>`.
```C
// <input id="link" class="case" />
input 'div#link.case' by "hello world.";
```

### click - stable
鼠标左键单击一个元素.
```C
// <a href="...">Text</a>
click 'a';

// <a id="link" href="...">Text</a>
click 'a#link';
```

### dblclick - stable
鼠标双击一个元素.
```C
// <div id="link" class="case">Text</div>
dblclick 'div#link.case';
```

### rclick - stable
鼠标右键单击一个元素.
```C
// <div id="link" class="case">Text</div>
rclick 'div#link.case';
```

### select [selector:string] by [value:string|index:number] - stable
从选择列表下拉中选中 &lt;option> 目标是 &lt;select> 元素。参数可以是： value|index.
*(仅能使用在 &lt;select> 元素上)*
```C
// <select>
//   <option value="a"></option> // index:0
//   <option value="b"></option> // index:1 <-- 这个会被选中
//   <option value="c"></option> // index:2
// </select>

select "select" by 1;

// 或

select "select" by "b";
```

### movein - beta
鼠标经过一个HTML元素.

### moveout - beta
鼠标移出一个HTML元素.

### scroll - beta
滚动到页面上的一个位置.
  
目前版本不支持对 `<iframe>` 元素派发事件, 所以如果待测页面正在使用如 JEECG 等“企业级”应用时，很多指令不会正常触发.
  
执行动作指令时，如果发生任何异常，例如无法找到目标元素，用例执行会终止并在控制台中报错.  

### check - deprecated
选中一个单选框。

### uncheck - deprecated
取消选中一个单选框。

## 表达式 - stable

> 表达式和任何c系列的语言是完全一样的

例：
```C
1 + 2 * 3;
'Hello' + ', world!';
```

### 扩展 css 选择器 - stable
Lemoncase2 默认支持 css 选择器，你可以使用：
* 原生 DOM API 中的 querySelectorAll.
* jQuery Sizzle ^2.3.0.
    * *你可以使用如 :contain(). 等原生 API 里面没有的选择器*
* iframe 选择器 `<` 来选中 `<iframe>` 中的元素*

```html
<!-- From top frame -->
<iframe id="top">
    #document
    <html>
        <body>
            <iframe id="project">
                #document
                <html>
                    <body>
                        <a href="./">link</a> <!-- select it. -->
                        <b>link</b>
                    </body>
                </html>
            </iframe>
        </body>
    </html>
</iframe>
```
* `iframe < iframe < a`
* `* < * < a`
* `#top < #project < a`
* `* < #project < a:contain(link)`

### 选择器操作符 - beta

`<# [selector:string] />`
```C
// 返回符合选择器的元素的数量.
// <div id="link" class="case">Text</div>

log <# 'div'/>; // Output 1
log <# '#link'/>; // Output 1
log <# '#no'/>; // Output 0
```

`<@ [selector:string] />`
```C
// 获取一个符合选择器的 HTML 元素的内容.
// 返回字符串或 `false` ，如果没有匹配到任何元素.

// <div id="link" class="case">Text</div>

log <@ 'div'/>; // 输出 Text
log <@ '#link'/>; // 输出 Text
log <@ '#no'/>; // 输出 false
```

`<! [selector:string] />`
```C
// 检查元素是否可见.
// 返回 `true` 如果元素存在并且可见.
// 否则返回 `false`

// <div id="link" class="case">Text</div>
// <div id="link2" style="display:none">Text</div>

log <@ 'a'/>; // 返回 false
log <@ 'div'/>; // 返回 true
log <@ '#link2'/>; // 返回 false
```

### 比较操作符 - stable
> 比较操作符左右的两个表达式，并返回 true 或 false.

`[exp_A:string] ~~ [exp_B:string|RegExp]`
* exp_B 如果不是字符串或正则，返回 false.
* exp_A 如果不是字符串，返回 false.
* exp_A 如果不符合正则 exp_B 则返回 false.
* exp_A 字符串中如果包含字符串 exp_B 则返回 true.
* exp_A 符合正则 exp_B 则返回 true.

`[exp_A:string] !~ [exp_B:string|RegExp]`
* 等同于 !(exp_A ~~ exp_B).

# 作用域 - beta

* `全局作用域` 全局的变量哪里都能访问.
* `过程 / 函数 作用域` 变量只有在过程的生命周期内有效.  

## 内置过程 - beta
* number(any): number
* bool(any): boolean
* length(str?: string): number
* charAt(string, index): string
* indexOf(string, string): number
* substr(string, index): string
* min(num1: number, num2: number): number
* max(num1: number, num2: number): number
* random(seed?: regexp): string
* abs(num: number): number
* ceil(num: number): number
* floor(num: number): number
* round(num: number): number
* format(date: Date): string
* now(): number

## 魔法关键字 - beta
* $href: 获取当前链接
* $loop: 获取当前运行的次数

# 例子
你要的Hello, world在这里.
## Hello, world
```C
process main {
    log 'hello world';
}
```

## 通常的用法 
只运行一次的用例.
```C
#TIMES 1

process main {
    jumpto '[URL]';
    wait 2000;
    ...
    [statement]
    ...
}
```

## 测试一个用户注册页面
```C
#TIMES 1
#INTERVAL 3000

process main {
	jumpto '/#/register';
	wait 2000;
	// There are 5 text boxes.
	assert <#'#userInfoFrom input'/> === 5;
	// There is a captcha svg.
	assert <!"img.pull-right"/>;
	// There is a login button.
	assert <!"#userInfoFrom > button.btn"/>;
	// There is a home button.
	assert <@"#global-back-button"/> ~~ 'glyphicon-home';

	userNameRule = "#name-rule > div";

	// Input username length < 6
	input "#account-name" by '12345';
	assert <@userNameRule/> ~~ '不少于6个字符';

    // Input username length > 16
	input "#account-name" by /\w{17}/;
	assert <@userNameRule/> ~~ '不超过16个字符';

	// Username is blank
	input "#account-name" by '';
	assert <@userNameRule/> ~~ '用户名不为空';

	// Username is repeat.
	input "#account-name" by 'active';
	click "#account-email";
	assert <!"#name-repeat"/> && <@"#name-repeat"/> ~~ '用户名重复' in 2000;
	
	// Blank email.
	emailRule = "#email-rule > div";
	input "#account-email" by '';
	assert <@emailRule/> ~~ '邮箱不为空';

	// Error email
	input "#account-email" by 'fdsf';
	assert <@emailRule/> ~~ '请输入正确格式的邮箱';

	// Repeat email
	input "#account-email" by 'lichao@or-change.cn';
	click "#account-password";
	assert <!"#emial-repeat"/> && <@"#emial-repeat"/> ~~ '邮箱重复' in 2000;
	
	// Input password length < 8
	input "#account-password" by /\w{1,7}/;
	assert <@"#password-rule > div"/> ~~ '不少于8个字符';
	// Input password length >20
	input "#account-password" by /\w{20,}/;
	assert <@"#password-rule > div"/> ~~ '不超过20个字符';
	// Blank password
	input "#account-password" by ' ';
	assert <@"#password-rule > div"/> ~~ '密码不为空';
	// Error char.
	input "#account-password" by '测试测试测试测试';
	assert <@"#password-rule > div"/> ~~ '您输入了非法字符';
	
	// Password !== Confirm
	password = /\w{10}/;
	input "#account-password" by password;
	input "#account-password-confirm" by password + 'a';
	assert <@"#confirm-rule > div"/> ~~ '两次输入不一致';
	
}
```
