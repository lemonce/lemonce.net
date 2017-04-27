title: 'Compare Lemonce and Selenium Selectors'
layout: page without sidebar
---

## Web Element Location
---
Compared to Selenium selectors, Lemonce selectors have many outstanding advantages that enable a test automation project to easily achieve accurate web element identification and precise location. 

Lemonce uses enhanced CSS selector, Xpath selector, as well as Sizzle selector, which can locate element by content. It supports iframe penetration location and intelligent identification for different selectors. In addition, Lemonce has a great programming language,LemonCase2, which has simple and concise language grammars to make coding work easier, so unlike Selenium that requires complicated coding and heavy workload to handle element location, Lemonce allows testers to achieve better testing performance with minimal coding work. 

Object location (web element location) is the core process of web test automation. For handling a web element, firstly you need identify the web element properly. It is like the way you identify a person who has some varied unique characteristics or identifications. For example, you may find the person with his or her ID number, name, address, etc. Lemonce's advanced web UI recognition techniques will help record and play back any web action accurately and reliably, and unlike Selenuium, Lemonce requires minimal coding to acquire many features that a great web element locator should have.
 

The following comparisons will let you understand a smart web app testing team should choose Lemonce instead of Selenium to perform web test automation, especially for handling web element identification and location.

- **Selenium:** Selenium provides a number of webelement location methods and Webdriver offers rich APIs. There are multiple element location strategies: id, name, CSS selectors, xpath, and so on. CSS selector has higher efficiency than xpath when locating web elements,( Read more in Selenium WebDriver Selector section). 
- **LemonCase2:** Compared with Webdriver webElement,LemonCase2, a key part of Lemonce testing tool, is a proprietary programming language for web testing. Like Selenium Webdriver, it supports multiple selectors. In addition, LemonCase2 can support Sizzle Selector and has intelligent identification for different selectors, no matter it is CSS selector , xpath selector, or sizzle selector. 

|                |Lemonce             |Selenium                                          |
|----------------|:------------------:|:------------------------------------------------:|
|ID              |`#<elementID>`        |`driver.findElement(By.id(<elementID>))`        |
|Name            |`[name=<elementName>]`|`driver.findElement(By.name(<elementName>))`    |
|className |`.<elementClassName>` |`driver.findElement(By.className(<elementClassName>))`|
|tagName         |`<htmlTagName>`       |`driver.findElement(By.tagName(<htmlTagName>))` |
|linkText        |`[href=<linkText>]`  |`driver.findElement(By.linkText(<linkText>))`    |
|partialLinkText |`[href*=<partialLinkText>]`|`driver.findElement(By.partialLinkText(<partialLinkText>))`|
|css             |`<cssSelector>`	|`driver.findElement(By.cssSelector(<cssSelector>))`|
|xpath           |`<xpathQuery>`	|`driver.findElement(By.xpath(<xpathQuery>))`	    |
<br>

## Selenium Webdriver Selector
---
Selenium Webdriver:CSS selector,xpath selector,Dom selector, and others like name selector. Dom selector requires complicated programming, testers must have in-depth learning on JavaScript. Even though it has highest execution efficiency, this selector seldom is used as final web element selection solution. So Dom selector will not be introduced below.

Most selenium selectors are the subset of CSS selector. That is, other selector solutions, including ID selector, name selector, and even xpath selector can use CSS selector as equivalent alternative. CSS selector has powerful functions with concise grammar. But there is some learning cost required to grasp it. (And sometimes you need take care of Selenium CSS selector multiple classes.)  

Here are some examples to show how CSS selector substitute other selectors:

- Selenium ID selector:`By.id(<elementID>)`
- Selenium CSS selector（equivalent to ID selector）:`By.cssSelector(#<elementID>)`
- Selenium name selector:`By.name(<elementName>)`
- Selenium CSSselector（equivalent to nameselector）:`By.cssSelector([name=<elementName>])`
- Selenium className selector:`By.className(<elementClassName >)`
- Selenium CSS selector（equivalent to nameselector）:`By.cssSelector(.<elementClassName >)`

Because Selenium IDE can only support xpath recording, and xpath is relatively easy to learn, that is why Selenium beginners and most users use xpath selector solution.

Xpath selector has lower learning cost than css selector,but with efficiency problem and the issue that **it cannot locate web elements with changed paths**. 

Xpath’s execution efficiency is quite low in IE, and this shortcoming is usually suffered criticism by web app testers. Else, xpath selector has lower efficiency than CSS selector because of its design issue, and there are some relative discussions on [Stack Overflow:](http://stackoverflow.com/questions/1909584/xpath-to-css-selector)

_“Unfortunately CSS won't parse the entire tree when move up and down till it finds what it is after. This is the main reason why XPath is so slow. CSS finds an item and then can move laterally through the DOM. The CSS below will find the input box that is after the TD that has class=TCN which holds your span with text in the table.”_

Among those users who don’t master CSS selector, they usually manually modify the recorded xpath selector codes and change them into codes using ID selector, Name selector , etc., so as to increase test efficiency. However, elements in many web projects don’t have ID or name properties, so there is no way to simply achieve element selection through this kind of electors.

CSS selector is more powerful with abundant and accurate object location solution and the efficiency is much better than xpath selector. Sauce lab sofficial site provides specific instructions web pages to teach users how to completely switch xpath selectors into css selectors:https://saucelabs.com/resources/articles/selenium-tips-css-selectors

## LemonCase2 Selector
---
LemonCase2 originally supports those improved CSS selector, xpath selector, and sizzle selector. (Sizzle selector is a selector based on special CSS selector that is expanded by JQuerys and increases many features CSS selector doesn’t own. The most well-known feature is location selection by element content. )

#### 1 Reduce

Compared to Selenium, LemonCase2 doesn’t have ID selector,name selector, and Dom selector, because CSS selector overlaps the selector features of ID selector, name selector, and Dom selector has some defects such as high learning threshold and difficult encapsulation.

#### 2 Enhance

A) **Iframe Penetration selector** 

LemonCase2 expands original CSS selector, xpath selectorand sizzle selector, includes Iframe penetration selection symbol l”<”,which enables the expanded selector to support direct element location inside iframes.(see more in [Lemonce vs Selenium:Iframe Element Testing](/footer/blog/selenium-iframe-element-testing.html))

B) **Sizzle selector** 

In addition, CSS selector section adds the support for sizzle selector, expands the original features of CSS selector so that it can support the selector feature that can locate element by content.

Sizzle selector is much friendly with testers. The webpage element location depends on its contents.  So the selector itself has more clear meanings (semantic expression) . 

Here is an example: for the button of “Sign in” in Google.
 
 <img src="/images/blog/selector-1.png">

- CSS selector path: `#gbw > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > a:nth-child(1)`
- Xpath selector path: `/*[@id='gbw']/div/div/div[2]/div[3]/div/a[1]`
- Sizzle selector path: `a:contains(Sign in)` 

Element selection based on contents can simplify selector to a certain extent, and enhance the readability of selector, so users can understand more information about the target elements. Therefore, it accomplishes the semantization of selectors.

Furthermore, iterative development usually will lead to failures in locating object element because its path has changed. Sizzle content selector allows element path to be set default in some scenarios and focus on element contents. This feature can avoid location problem caused by changed element path, enhance the reusability of test cases, so as to tremendously reduce the maintenance cost. 

C) **Intelligent Identification for Different Selectors**

When Selenium uses different selectors, it need make some statements specifically. For example:  

- css:`driver.findElement(By.cssSelector(<cssSelector>))`
- xpath:`driver.findElement(By.xpath(<xpathQuery>))`

Lemonce Compiler can intelligently identify selectors according to their different characteristics, so the coding workload will be reduced.

- css:`"<cssSelector>"`
- xpath:`"<xpathQuery>"`
- sizzle:`"<sizzleSelector>"`

#### 3 Solve Selenium selector problems

A)	**Support CSS selector recording**

CSS selector has some learning threshold. But direct CSS selector recording method, or the feature of element capturer, can directly capture the element’s optimized css path. This approach can reduce the learning cost of CSS selector to a certain extent. Else, Lemonce also supports xpath selector recording, which may bring better testing experience.

B)	**Increase xpath selector’s execution efficiency**

Because xpath selector itself can be switched to CSS selector with Lemonce grammar compiler that can automatically transform xpath selector into CSS selector before execution.  In this way, xpath is able to have the same execution efficiency as CSS selector in different browsers.

C)	**Locate element by content**

With sizzle selector’s further enhancement on CSS selector, the object location based on element content can properly solve some of the object element location problems.The improved CSS selector and xpath selector can achieve direct element location inside iframes. (see more in [Lemonce vs Selenium:Iframe Element Testing](/footer/blog/selenium-iframe-element-testing.html))

D)	**Selector Intelligent Identification**
When multiple selectors are used in testing codes to describe different elements, lemonCase2 compiler will compare characteristics of different selectors with regular expression matching, and then achieve intelligent identifications for different selectors. This method will make language grammar more simple and concise with no necessary to work in the way like Selenium grammar to add some identification symbols ( such as By.cssSelector(),By.xpath() etc.) to differentiate different selectors. 

Here are some examples:

`click "#gbw";`  //click an element selected by CSS selector

`click"[@id='gbw']";` // click an element selected by xpath selector

<br>

## Complexity Comparisons of Frequently-used Operation Grammar
---

【Notes】These simple grammar comparisons are to present advantages of LemonCase2 selector and its grammar. To see more detailed grammar comparisons, please view the specific documentation of grammar comparisons.

<table border="1">
  <tr>
    <th></th>
    <th>Lemoncase2</th>
    <th>Selenium Webdriver</th>
  </tr>
  <tr>
    <td width="200" rowspan="2" valign="center">Left Click with Mouse</td>
    <td width="400">`$BUTTON = left;`<br>`click"<xpathQuery>";`</td>
    <td>`Actions action = new Actions(driver);`
    `action.click(driver.findElement(By.xpath(<xpathQuery>)));`</td>
  </tr>
  <tr>
    <td>`//$BUTTON Default Value left`<br>`click"<xpathQuery>";`</td>
    <td>`Actions action = new Actions(driver);`
    `action.click(driver.findElement(By.xpath(<xpathQuery>)));`</td>
  </tr>
  <tr>
    <td>Double Left Click with Mouse</td>
    <td>`dblclick "<xpathQuery>";`</td>
    <td>`Driver driver=new Driver();`
    `driver.findElement(By.xpath(<xpathQuery>)).click();`</td>
  </tr>
  <tr>
    <td >Press Left Mouse Button</td>
    <td>`//$BUTTON Default Value left`<br>`hold "(<xpathQuery>";`</td>
    <td>`Actions action = new Actions(driver);`
    `action.clickAndHold(driver.findElement(By.xpath(<xpathQuery>)));`</td>
  </tr>
  <tr>
    <td >Drag Element with Mouse</td>
    <td>`move "(<xpathQuery>";`</td>
    <td>`Actions action = new Actions(driver);`
    `action.moveToElement(driver.findElement(By.xpath(<xpathQuery>)));`</td>
  </tr>
  <tr>
    <td >Right Click with Mouse</td>
    <td>`$BUTTON = right;`<br>`click"<xpathQuery>";`</td>
    <td>`Actions action = new Actions(driver);`
    `action.contextClick(driver.findElement(By.xpath(<xpathQuery>)));`</td>
  </tr>
  <tr>
    <td >Drag object element onto a specific element </td>
    <td>`hold "(<xpathQuery>";`<br>`move "(<xpathQuery>";`<br>`drop;`</td>
    <td>`Actions action = new Actions(driver);`
    `action.dragAndDrop(driver.findElement(By.xpath(xpath)),
    driver.findElement(By.xpath(<xpathQuery>)));`</td>
  </tr>
  <tr>
    <td>Drag object element onto a specific element</td>
    <td>`hold "#1";`<br>`move "#3";`<br>`drop`</td>
    <td>`Actions action = new Actions(driver);`
    `action.clickAndHold(driver.findElement(By.id("1")))
    .moveToElement(driver.findElement(By.id("3"))).perform();`</td>
  </tr>
</table>

From the selector comparisons above, you may understand Lemonce can be a great Selenium alternative, especially because the powerful features of its selectors can implement precise element identification and selection. Even when you are looking for GUI element locators for some special element testing, which is required to recognize web elements inside iframes, Lemonce can beat all other web app testing tools, and will become the best alternative to Selenium. And moreover, you don’t need spend much time to solve those problems and issues in Selenium, including those require much coding work on Selenuim selector by class, by text or innertext, or more complicated issues like selenium css selector nth child. Lemonce has its unique simple programming language with concise and intuitive grammar to allow you to create complex test cases easily and efficiently with very low learning cost.  If you use Selenium testing tools, you have to master one or two programming or script languages such as python, c#, Java, etc. which require more learning costs, especially for a testing team which members use different kinds of programming languages.

So, choose Lemonce Editor for web test automation, and get rid of tedious problems and defects caused by Selenium.
