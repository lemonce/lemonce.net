title: '兼容性测试'
---
目前灵萌测支持在Firefox、Chrome上开展兼容性测试。您需要按照下文的步骤来进行。

<br/>
## 1 配置代理服务器
---

配置代理服务器是启用兼容性测试的第一步，我们会在客户端内提供相关的地址和端口给您，来完成兼容性测试。
【此处加入客户端端口图片】

<br/>
#### 1.1 Win10 & Win8
<hr width="50%" align="left">

在Win10 或 Win8 系统，用户需要按照以下步骤手动配置代理服务器，如下图所示。
- 进入 setting → Network & Internet → Manual proxy setup

<img src="/images/test-mode/win10-1.png">

- 打开 Use a proxy server，填入 Address 和 Port（**要和客户端中保持一致**）

<img src="/images/test-mode/win10-2.png">

<br/>
#### 1.1 Win7
<hr width="50%" align="left">

在 Win7 系统，用户需要按照以下步骤手动配置代理服务器，如下图所示。

- 进入 控制面板 → 网络和 Internet → 连接选项卡
- 点击 LAN settings（局域网设置）

<img src="/images/test-mode/win7-1.png">

- 按下图填入 Address 和 Port（**要和客户端中保持一致**）

<img src="/images/test-mode/win7-2.png">

<br/>
#### 1.3 Mac
<hr width="50%" align="left">

在 Mac 系统，用户需要按照以下步骤手动配置代理服务器，如下图所示。

- Safari的二级菜单里 → 点击偏好设置
- 高级 → 代理 → 更改设置

<img class="box-shadow" src="/images/test-mode/mac-1.png">

- Web 代理（HTTP） → 填入 Address 和 Port（**要和客户端中保持一致**）→ 点击保存并应用

<img class="box-shadow" src="/images/test-mode/mac-2.png">

<br/>
#### 1.4 Firefox
<hr width="50%" align="left">

在 Firefox 浏览器中，用户可不通过系统全局配置代理，而仅在 Firefox 浏览器中单独配置，如下图所示。

- 选项（Options） → 高级（Advanced） → 网络（Network） → 设置（Settings）

<img src="/images/test-mode/firefox-1.png">

-  Manual proxy configuration → 填入 Address 和 Port（**要和客户端中保持一致**）→ 点击 OK

<img class="box-shadow" src="/images/test-mode/firefox-2.png">

<br/>
## 2 HTTP & HTTPS
---
在配置完代理服务器之后，需要继续选择网页的待测环境。分为 HTTP 及 HTTPS 两种环境，要想了解这两种网络环境的区别请[查看这里](https://www.instantssl.com/https-tutorials/what-is-https.html)。

#### 2.1 HTTP

如果待测网页本来就属于 HTTP 环境，则不需要多余的配置。

#### 2.2 HTTPS

如果待测网页处于 HTTPS 环境，那么用户可以有两种选择。

**① 将待测网页退回到 HTTP 环境。** 

**② 继续保持 HTTPS 环境。** 

使用了代理服务器之后，相较于 HTTP 环境，如果还继续采用 HTTPS 环境进行功能测试，会给本地的 CPU 造成极大的负担，代理服务器会占用大部分内存。

例如，当测试人员中断某个请求 A 之后并向服务器派发新的请求B时，代理服务器仍然与远端继续保持连接并继续派发并接收请求 A，直至。因此测试的过程也会显得非常缓慢，甚至会出现中断的情况。