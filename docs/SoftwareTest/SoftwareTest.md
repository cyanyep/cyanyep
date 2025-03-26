# 软件测试

安装功能测试被测系统需要安装的软件包括：
**Python**, **pycharm**, **firefox**浏览器, firefox的驱动程序**geckodriver.exe**，被测系统**ECShop网站**, 开源免费的测试软件**selenium**（在pycharm中安装库）

基础：HTML、CSS

# Selenium

## WebDriver⭐⭐

1、启动浏览器---重点

- 变量=webdriver.浏览器名称()
  - 例：`driver=webdriver.Firefox()`

2、启动浏览器---重点

- 只需要设置隐式等待的超时时间（秒数），那么**所有查找元素的步骤都会自带等待的功能。**

- 如果已经到达超时时间，还没有查找到目标元素，就会得出元素不存在的结论。
- `driver.implicitly_wait(16)`#隐式等待的超时时间设置为16秒

3、浏览器窗口最大化

- `driver.maximize_window()`

4、打开具体的网页：get方法，参数是url（str类型）---重点！

- `driver.get('http://localhost/upload/index.php')`#打开ecshop前台首页

5、**查找当前浏览器窗口里当前网页里的元素**（要操作的控件，比如文本框、按钮……）以及元素的基础操作。

- 语法：`driver.find_element(By.定位类型,'定位数据').操作方法(操作数据)`

- By是Selenium中用来描述具体的定位类型的专用类。（使用前必须要先导入：from selenium.webdriver.common.by import By）

- 元素的三个基础操作方法：
  - click()---点击（最常用，因为能操作的控件类型很多）
  - send_keys('具体的一些字符')---追加输入（针对文本框使用较多）
  - clear()----清空（针对文本框使用较多）

- 例如：
  - driver.find_element(By.ID,'keyword').send_keys('100')#找到搜索按钮前面的那一个文本框（关键字文本框），输入100

6、增加等待固定时间的步骤。

- from time import sleep
- sleep(秒数)

7、关闭浏览器：`driver.quit()`方法，无参。---重点！

```python
driver = webdriver.Firefox()
driver.implicitly_wait(3)
driver.get('http://localhost:8080/upload/index.php')  # 80端口被占用
a=driver.find_element(By.ID, 'keyword')
a.send_keys('30')
b=driver.find_element(By.NAME,'imageField')
b.click()
sleep(5)
driver.quit()
```



## 定位⭐⭐

- **1.ID， 2.NAME， 3.LINK_TEXT， 4.PARTIAL_LINK_TEXT， 5.CLASS_NAME， 6.TAG_NAME， 7.XPATH， 8.CSS选择器**

- **find_element查找单个元素，find_elements查找多个元素**

- **刷新后需要重新定位**

### 普通定位类型（定位方法、定位策略）

1、ID定位：有id属性，建议用id属性值进行定位。（**最推荐**）

- `driver.find_element(By.ID,'keyword').send_keys('100')`#找到搜索按钮前面的那一个文本框（关键字文本框），输入100

2、NAME定位：没有id属性时，也可以使用name属性值定位元素。(**次推荐**)

- `driver.find_element(By.NAME,'imageField').click()`#找到“搜索”按钮，点击它

3、LINK_TEXT  ---链接文本定位

- **只用于定位超级链接**（<a……），并且<a……>与</a>之间存在**较短的文本**的情况。

- 要求定位数据必须与<a……>与</a>之间文本完全一致。（**相等、精确匹配**）

- `driver.find_element(By.LINK_TEXT,'高级搜索').click()`#找到文本是“高级搜索”的超级链接，点击它

4、PARTIAL_LINK_TEXT  ---部分链接文本定位

- **只用于定位超级链接**（<a……），并且<a……>与</a>之间存在**较长**的文本的情况。
- <a……>与</a>之间文本只要包含定位数据就可以定位到。（包含、**模糊匹配**）

5、CLASS_NAME: 定位Class属性值定位元素

- `driver.find_element(By.CLASS_NAME,'bnt_blue_2').click()`#找到一个类名是bnt_blue_2的“查询该订单号”的按钮，点击它

6、TAG_NAME: 定位标签名

- `driver.find_element(By.TAG_NAME,'textarea').send_keys('111')`#找到标签名是textarea的文本域，输入111

### XPATH高级定位

7、XPATH: 定位xpath表达式

- 方式一：**复制得到xpath表达式**，在开发者工具中右键复制xpath表达式
  - `driver.find_element(By.XPATH,'/html/body/div[7]/div[2]/div[4]/div/div/form/table/tbody/tr[3]/td[2]/input[3]').click()`#点击一个元素（这个目标元素是“询问”后的单选按钮）

- 方式二：自己书写xpath表达式（需要熟悉xpath表达式的语法）

  - **绝对路径xpath**：以/开头，从html这个根节点（最顶层节点）开始描述路径。---不容易后期维护，所以建议少用！
    - `/html/body/div[7]/div[2]/div[4]/div/div/form/table/tbody/tr[3]/td[2]/input[3]`

  - **相对路径xpath**：以//开头，不从html这个根节点开始描述，从其他层次开始描述。---维护性好，建议使用！

相对路径

- **//标记名**
  - `driver.find_element(By.XPATH,'//textarea').send_keys('222')`#找到标签名是textarea的文本域，输入222
- **//父标记名/子标记名**
  - `driver.find_element(By.XPATH,'//form/a').click()`#点击form标记下级的a元素（当前网页里就是“高级搜索”）
- **//标记名称[筛选条件]**
  - 筛选条件的多种写法常用的有：**[索引号]、[@属性名="属性值"]**
  - **索引号**代表同父（同级别）下同标记的兄弟节点中目标节点是第几个，这个整数从1开始排序。
    - `driver.find_element(By.XPATH,'//form/input[1]').send_keys('100')`#向form这个父元素下级的第1个input标记的子元素（目前就是：关键字文本框）里输入100

  - **[@属性名="属性值"]**  是用属性值的精确匹配来进行元素的筛选，在xpath里属性可以是任何你在html格式的网页源代码里看到的属性，不限于id、name、class。
    - `driver.find_element(By.XPATH,'//a[@href="pick_out.php"]').click()`#找一个href属性值等于pick_out.php的元素，点击它。注意：引号不要里外冲突！！！

  - **[text()="文本"]**：是用标记名的文本与指定文本比较来进行元素的筛选 
    - text()无参，可以获得<标记名……>与它自己的</标记名>之间的完整文本（元素的文本，str类型），标记名可以是任何标记名（包括a）。
    - `driver.find_element(By.XPATH,'//a[text()="文本"]').click()`#找一个匹配文本的超级链接，点击它
  - **[标签名="文本"]**：是用标子记名的文本与指定文本比较来进行元素的筛选 
    - `driver.find_element(By.XPATH,'//a[strong="文本"]').click()`#找一个匹配strong标签的文本的超级链接，点击它
- **[contains(text(),"字符串")]**， Xpath语法里的contains函数：用来描述包含关系。包含关系(**模糊匹配**)
  - `driver.find_element(By.XPATH,'//img[contains(@src,"bnt_reg")]').click()`#找一个src属性值里包含bnt_reg的图片（img、就是“注册”这个元素），点击它
  - `driver.find_element(By.XPATH,'//a[contains(text(),"高级")]').click()`#找到文本里包含“高级”的超级链接（就是“高级搜索”），点击它

```python
driver.find_element(By.ID, 'username').send_keys('cyan')
driver.find_element(By.NAME, 'extend_field1').send_keys('123@hotmail.com')
driver.find_element(By.LINK_TEXT, '查看购物车').click()

driver.find_element(By.XPATH, '//a[contains(@href,"register")]').click()
driver.find_element(By.XPATH, '//a[@href="user.php"]').click()
driver.find_element(By.XPATH, '//td/select/option[5]').click()
driver.find_element(By.XPATH, '//div[@class="goodsItem"]/a[1]').click()
driver.find_element(By.XPATH, '//a[text()="高级搜索"]').click()
driver.find_element(By.XPATH, '//img[@alt="夏新N7"]').click()
```

### CSS选择器高级定位

1、复制得到CSS选择器

- 开发者工具右键复制CSS选择器

- CSS选择器定位语法：

  - `driver.find_element(By.CSS_SELECTOR,'CSS选择器')`

  - `driver.find_element(By.CSS_SELECTOR,'#ECS_MEMBERZONE > a:nth-child(2) > img:nth-child(1)').click()`#点击“登录”

2、#id属性值

- `driver.find_element(By.CSS_SELECTOR,'#keyword')`

3、.class 类名

- `driver.find_element(By.CSS_SELECTOR,'.go')`

4、[属性名=”属性值”]    ---所有属性都可用

- 注意：属性名前不写@

- `driver.find_element(By.CSS_SELECTOR,'[href="pick_out.php"]')`

5、标记名   ---找该标记名的元素

- `driver.find_element(By.CSS_SELECTOR,'textarea')`

6、组合使用上述选择条件

- **标记名写在开头**

- `input.inputBg[name="user_email"][type="text"]`

7、父>子           ---逐级向下查找

- `form>a`
- `div>form>a`
- `form#searchForm>a`

8、祖先 后代       ---跳级向下查找（英文空格）

- `div#search a`

9、标记名:first-child 、标记名:nth-child(索引号) 、标记名:last-child  ---第几个子元素（从1开编号的整数）

-  `div#mainNav>a:nth-child(3)`

| <div>   | xpath表达式    | css选择器              |
| ------- | -------------- | ---------------------- |
| <input> | //div/input[1] | div>input:first-child  |
| <input> | //div/input[2] | div>input:nth-child(2) |
| <a>     | div/a[1]       | div>a:nth-child(3)     |
| <input> | div/a[2]       | div>a:nth-child(4)     |
| <a>     | //div/input[3] | div>input:nth-child(5) |
| <a>     | //div/a[3]     | div>a:last-child       |
| </div>  |                |                        |

```python
driver.find_element(By.CSS_SELECTOR,'a[href="message.php"]').click()
sleep(3)
driver.find_elements(By.CSS_SELECTOR,'input.inputBg')[0].send_keys('vip@163.com')
list = driver.find_elements(By.CSS_SELECTOR,'input[name="msg_type"]')
a = list[2]
if not a.is_selected():
    a.click();
sleep(2)
driver.find_element(By.CSS_SELECTOR,'td>input[name="msg_title"]').send_keys('维修')
driver.find_element(By.CSS_SELECTOR,'textarea').send_keys('手机坏了怎么处理？')
driver.find_element(By.CSS_SELECTOR,'input.bnt_blue_1').click()
```



### 小结：定位方法

- driver.find_element(By.ID,’id属性值’)
- driver.find_element(By.NAME,’name属性值’)
- driver.find_element(By.LINK_TEXT,’完整链接文本’)
- driver.find_element(By.PARTIAL_LINK_TEXT,’一部分链接文本’)
- driver.find_element(By.CLASS_NAME,’类名’)
- driver.find_element(By.TAG_NAME,’标记名’)
- driver.find_element(By.XPATH,’xpath表达式’)
- driver.find_element(By.CSS_SELECTOR,’css选择器’)

## 浏览器操作⭐

| 功能          | 语法              | 参数      | 说明                                                 |
| ------------- | ----------------- | --------- | ---------------------------------------------------- |
| 访问网址      | driver.get("url") | url是网址 |                                                      |
| 后退 (左箭头) | driver.back()     | 无        | 也就是“上一页”                                       |
| 前进 (右箭头) | driver.forward()  | 无        | 也就是“下一页”，必须前面步骤中后退过，现在才能前进。 |
| 刷新          | driver.refresh()  | 无        |                                                      |



```python
from selenium.common.exceptions import NoSuchElementException
while True:
    try:
    	driver.find_element(By.LINK_TEXT,"P806")
    except NoSuchElementException:
    	driver.refresh(
    else:
    	driver.find_element(By.LINK_TEXT,"P806").click(
    	break
```



| 功能                      | 语法                                 | 参数              | 说明                                          |
| ------------------------- | ------------------------------------ | ----------------- | --------------------------------------------- |
| 浏览器窗口最小化          | driver.minimize_window()             | 无                |                                               |
| 浏览器窗口最大化          | driver.maximize_window()             | 无                |                                               |
| 自定义浏览器窗口 大小     | driver.set_window_size(width,height) | 宽度、高度        | 参数数字以像素值为单位，不 能超过屏幕分辨率。 |
| 获取浏览器大小            | driver.get_window_size()             |                   | 返回字典，包含width,height                    |
| 设置浏览器在屏幕 的位置   | driver.set_window_position(x,y)      | 左上角x和y 坐标值 |                                               |
| 获取浏览器在屏幕 上的位置 | driver.get_window_position()         |                   | 返回字典，包含浏览器左上角 坐标值x，y         |

| 功能           | 语法                    | 说明    |
| -------------- | ----------------------- | ------- |
| 获得网页标题   | 变量=driver.title       | str类型 |
| 获得当前URL    | 变量=driver.current_url | str类型 |
| 获得网页源代码 | 变量=driver.page_source | str类型 |



## 元素基本操作

### 文本框和文本域⭐

- 点击：
  - **`click()`**
- 清空
  - **clear()**
- 输入
  - **send_keys("数据")**
  - 保留原有的数据，追加输入
  - 文本域输入时使用转义字符"\n"转行

- 获得属性值：
  - **get_attribute("html里的标记属性名")**
  - "value"(最常使用)代表当前文本框或文本域里的当前内容(str类型)。
  - "title'"代表鼠标移动到上面时显示的提示，
  - "placeholder",代表未输入任何内容时的占位符。

- 获得当前是否可用的状态值：
  - **is_enabled()**

### 按钮

- 点击：
  - click()
- 获得属性值：
  - 最常使用的属性名是"value",

- 获得当前是否可用的状态值：
  - is_enabled()

### 单选按钮和复选框⭐

- 点击：
  - click()
- 获得当前是否可用的状态值：
  - is_enabled()
- 获得当前是否已经被选中的状态值：
  - **is_selected()**

### 超级链接和图片

- 点击：
  - click()

- 
  获得属性值：

  - get_attribute("属性名")

  - 得到的属性值类型是str

  - 对于超级链接，常用属性名是href,代表跳转到的目标网页URL。

  - 对于图片，常用属性名是src,代表图片的存储路径。

### 超级链接和静态文本⭐

- 获得文本内容：**开始和结束标记之间的文本字符串**。
  - **text**
  - text是一个webelement页面元素对象的属性名
  - 得到的文本是str类型的数据



```python
driver.set_window_size(800,600)
dict1=driver.get_window_position()
print(f"窗口左上角位置坐标{dict1['x']},{dict1['y']}")
driver.minimize_window()

dict1=driver.get_window_size()
print(f"窗口大小尺寸{dict1['width']},{dict1['height']}")
driver.set_window_position(60,60)

dict1=driver.get_window_position()
print(f"自定义窗口左上角位置坐标{dict1['x']},{dict1['y']}")
driver.maximize_window()

dict1=driver.get_window_size()
print(f"窗口大小尺寸{dict1['width']},{dict1['height']}")
driver.find_element(By.LINK_TEXT,"高级搜索").click()

driver.back()

title1=driver.title
url1=driver.current_url
print(f"当前网页的标题：《{title1}》, URL：{url1}")
driver.forward()

driver.get(url1)

driver.back()
```

- 小结
  - 点击**click()**
  - 清空**clear()**
  - 输入**send_keys("数据")**
  - 获得属性值：**get_attribute("属性名")**
  - 获得当前是否可用的状态值**is_enabled()**
  - 获得当前是否已经被选中的状态值**is_selected()**



## 模拟键鼠操作⭐⭐

### 模拟键盘操作

- selenium:提供了完整的模拟键盘操作事件，模拟键盘的操作需要先导入键盘操作专用类**Keys**:
  - `from selenium.webdriver.common.keys import Keys`
- 模拟按键操作的语法：
  - **元素对象.send keys(Keys.常量)**
- 说明：这些常量作为send_keys.方法的参数使用即可模拟用户对于该按键的点击操作，**如果模拟多个按键组合操作，就给send keys,方法添加多个参数即可。**

| 编号 | 常量      | 按键    | 编号 | 常量                                       | 按键              |
| ---- | --------- | ------- | ---- | ------------------------------------------ | ----------------- |
| 1    | ENTER     | 回车键  | 9    | ESCAPE                                     | Esc键             |
| 2    | BACKSPACE | 退格键  | 10   | HOME                                       | 定位行首          |
| 3    | SHIFT     | Shift键 | 11   | END                                        | 定位行尾          |
| 4    | CONTROL   | Ctrl键  | 12   | F1--F12                                    | F1--F12键         |
| 5    | TAB       | tab键   | 13   | NUMPAD0----NUMPAD9                         | 小键盘的0---9数字 |
| 6    | ALT       | Alt键   | 14   | ARROW_LEFT\ARROW_UP\ARROW_RIGHT\ARROW_DOWN | 方向键(↑→↓)       |
| 7    | INSERT    | 插入键  | 15   | PAGE_UP\PAGE_DOWN                          | 上一页\下一页     |
| 8    | DELETE    | 删除键  | 16   | ADD\SUBTRACT\MULTIPLY\DIVIDE\EQUALS        | 加减\乘\除\等于   |

- 删除最后一个内容

```python
kw=driver.find_element(By.ID,"keyword")
kw.send_keys("806")
kW.send_keys(Keys.ENTER)

kw=driver.find_element(By.ID,"keyword")
kw.click()
kw.send_keys(Keys.END)
kW.send_keys(Keys.ARROW_LEFT)

kw.send_keys(Keys.DELETE)

kW.send_keys(Keys.ENTER)
```

- 全选复制粘贴

```python
tex1=driver.find_element(By.NAME,"username")
tex1.send_keys("vip")
tex1.send_keys(Keys.CONTROL,"a")#全选
tex1.send_keys(Keys.CONTROL,"c")#复制
tex2=driver.find_element(By.NAME,"password")
tex2.send_keys(Keys.CONTROL,"v")#粘贴
tex2.send_keys(Keys.ENTER)
```

### 模拟鼠标操作

在实际场景中，会有单击、长时间单击、双击、右击、拖放、移动等鼠标操作，或在当前光标位置的按键输入或鼠标操作。
selenium提供了名为**ActionChains**的类来处理这些操作，我们一般翻译为“操作链”或“动作链”。

**导入ActionChains类**：`from selenium.webdriver.common.action_chains import ActionChains`

ActionChains类使用前需要先实例化：`变量=ActionChains(driver))`

| 编号操作方法 |                                                           | 功能说明                                                   |
| ------------ | --------------------------------------------------------- | ---------------------------------------------------------- |
| 1*           | **click(on_element=None)**                                | 单击鼠标左键                                               |
| 2 *          | **click_and_hold(on_element=None)**                       | 点击鼠标左键，不松开                                       |
| 3*           | **context_click(on_element=None)**                        | 点击鼠标右键                                               |
| 4 *          | **double_click(on_element=None)**                         | 双击鼠标左键                                               |
| 5 *          | **drag_and_drop(source, target)**                         | 拖拽到某个元素位置后松开                                   |
| 6            | drag_and_drop_by _offset(source, xoffset, yoffset)        | 拖拽到某个坐标后松开                                       |
| 7            | key_down(value, element=None)                             | 按下某个键盘上的键                                         |
| 8            | key_up(value, element=None)                               | 松开某个键                                                 |
| 9 *          | **move_to_element(to_element)**                           | 鼠标移动到某个元素                                         |
| 10           | move_by_offset(xoffset, yoffset)                          | 鼠标从当前位置移动到某个坐标, 一般很少用位置关系来移动鼠标 |
| 11           | move_to_element_with_offset(to_element, xoffset, yoffset) | 移动到距某个元素 (左上角坐标) 多少距离的位置               |
| 12 *         | **release(on_element=None)**                              | 在某个元素位置松开鼠标左键                                 |
| 13 *         | **send_keys(*keys_to_send)**                              | 发送某个键到当前焦点位置的元素                             |
| 14           | send_keys_to_element(element, *keys_to_send）             | 发送某个键到指定元素                                       |
| 15 *         | **perform()**                                             | 执行链中的所有动作                                         |

#### ActionChains基本用法

两种调用方法，效果相同。

1.	链式写法：
   ActionChains(driver).方法1(参数).方法2(参数).perform()
2.	分步写法：
   变量=ActionChains(driver)
   变量.方法1(参数)
   变量.方法2(参数)
   变量.perform()

- 操作链

```python
double_cli=driver.find_element(By.XPATH,'//input[@value="dbl click me"]
cli=driver.find_element(By.XPATH,'//input [@value="click me"]')
right_cli=driver.find_element(By.XPATH,'//input[@value="right click me"]
#ActionChains(driver).double_click(double_cli).click(cli).context_click(right_cli).perform()
action=ActionChains(driver)
action.click(cli)
                              
action.double_click(double_cli)
                              
action.context_click(right_cli)
                              
action.perform()
```

- 使用send_keys模拟tab键

```python
t=driver.find_element(By.ID,"keyword")
ActionChains(driver).click(t).perform()
sLeep(3)
ActionChains(driver).send_keys(Keys.TAB).perform()
sLeep(3)
ActionChains(driver).send_keys(Keys.TAB).perform()
sLeep(3)
ActionChains(driver).send_keys(Keys.ENTER).perform()
```

## 消息框操作⭐

- 在wb浏览的时候经常会弹出消息框，用于给客户提示：
  - JavaScript根据功能把它分为三类：Alert(提示框)、Confirm(确认框)、Prompt(输入框)(不常用)
  - Selenium中把它们统称为Alert

- 消息框的特点：
  - 特点1：
    - 因为它**不属于网页元素，所以在消息框上右击之后，没有“检查"菜单，无法查看其网页源代码**。
  - 特点2：
    - 一般都是模态消息框，不关闭它，后面的网页是无法操作的。

​		注意：不是所有的弹出框都叫Alert,在使用 Alert前，先要识别出到底是不是Alert。

- Alert类：是Selenium中消息框处理的专用类。
- **初始化Alerta类对象**：
  - 切换到消息框，得到Alert对象实例
    - **`对象=driver.switch_to.alert`**

- **AIet类对象属性**：记录消息框里的信息。

  - `变量=对象.text` →str类型消息框里的信息。

- **Alert类对象方法**：用于操作消息框。

  - `对象.accept()`→点击确认/确定按钮。

  - `对象.dismiss()`→点击取消按钮。
  - `对象.send_keys(数据)`→向prompt类型消息框里输入数据。（不常用）



```python
driver.find_element(By.XPATH,//img [contains(@src,"bnt_cat.gif")]').click()
#输出消息框内容
mes1=driver.switch_to.alert
tex=mes1.text
print(tex)
mes1.dismiss()
driver.find_element(By.XPATH,'//img[contains(@src,"bnt_colles.gif")]').click()

mes2=driver.switch_to.alert
tex2=mes2.text
print(tex2)
mes2.accept()
```

```python
driver.find_element(By.XPATH,'//input[@value="Click For Prompt"]').click()
mes1=driver.switch_to.alert
mes1.send_keys("hello")

mes1.accept()
tex1=driver.find_element(By.NAME,"t1").get_attribute("value")
print(tex1)

driver.find_element(By.XPATH,'//input[@value="Click For Prompt"]').click()

mes2=driver.switch_to.alert
mes2.send_keys("hello")
mes2.dismiss()
tex2=driver.find_element(By.NAME,"t1").get_attribute("value")
print(tex2)
```

- 小结

  - 指令

    - **`对象=driver.switch_to.alert`**
    - `变量=对象.text`→str类型消息框里的信息。
    - `对象.accept()`→点击确认/确定按钮。

    - `对象.dismiss()`→点击取消按钮。
    - `对象.send_keys(数据)`→向prompt类型消息框里输入数据。（不常用）

## 切换浏览器窗口⭐

- driver.window_handles获取打开的所有窗口句柄，是一个列表。

  - 所谓句柄(handles),就是窗口的唯一标识，系统通过窗口的句柄来区分不同的窗口。

  - 列表中每个窗口句柄的出现顺序是窗口的启动顺序，所有最后启动的那个窗口的句柄就是列表最后一个成员（索引号是-1）

- **切换到最新窗口的步骤：**

  - `list1=driver.window_handles`

  - `driver.switch_to.window(list1[-1])`

- **获得当前窗口句柄**

  - `driver.current_window_handle`

- **关闭窗口有两种方法：**

  - driver.quit0→关闭本次运行期间所启动的所有浏览器窗口，退出驱动程序，一般用于程序末尾，测试结束时使用。

  - driver.close(0→关闭当前一个浏览器窗口，保留其他浏览器窗口，一般用于业务步骤之间，属于一个测试中间的操作步骤。

- **所有的操作只针对当前窗口：**
  - 比如close只关闭当前一个窗口，find_element查找元素只在当前窗口里查找。

- **没有执行窗口切换的代码时，当前窗口就是最初启动的窗口**。
- **当前窗口已经被关闭以后，不会自动切换到其他窗口**
  - 就算其他窗口只有一个，也不会自动变为当前窗口。

- NoSuchWindowException异常原因：
  - 当前窗口已经被关闭，或要切换到的目标窗口句柄不正确。

```python
driver.find_element(By.LINK_TEXT,"EC").click()#打开一个新窗口

a=driver.current_window_handle#获取当前窗口句柄
Lst1=driver.window_handles#获取所有窗口句柄
driver.switch_to.window(lst1[-1])#切换到最新窗口

driver.find_element(By.LINK_TEXT,"ECShop ")click()#新窗口
sleep(3)
Lst2=driver.window_handles
driver.switch_to.window(lst2[-1])#切换到最新窗口
driver.close()#关闭当前窗口
driver.switch_to.window(a)#切换到最初窗口
```

- 切换窗口语法总结：

  - driver.current_window_handle→获得当前浏览器窗口句柄
  - driver.windows_handles→获得所有浏览器窗口句柄(List)
  - driver.switch_to.window(窗口句柄)→切换到特定窗口

  - driver.close()→关闭当前一个浏览器窗口

  - driver.quit()→关闭所有浏览器窗口



## 切换Frame⭐

- 后台测试问题分析：
  - HTML里是否有网页的嵌套（网页里是否存在frame或iframe标记的元素）

### Frame标记

- frame是HTML语法里的框架，你可以在同一个浏览器窗口中显示不止一个网页。

```html
<frameset cols="25%,50%,25%">
    <frame src="a.htm"></frame>
    <frame src="b.htm"></frame>
    <frame src="c.htm"></frame>
</frameset>
```

- 说明：

  - **frameset**告知HTML 文件是框架模式，并**设定可视窗口怎么分割**。不能嵌套在body下级，需要用它**代替body写在html下级**。（frame需要在frameset中，iframe可以在body中）

  - frame设定一个框架窗口里包含的页面源文件地址

- HTML5不支持<frame>标签，HTML4支持<frame>标签

### Iframe标记

- iframe称为"内联框架”，写在body里，用于嵌入另一个网页。

```html
<iframe src="a.htm"></iframe>
<iframe src="b.htm"></iframe>
<iframe src="c.htm"></iframe>
```

说明：
 Selenium自动化测试时，**如果网页里目标元素位于frame或iframe内部的网页里，必须切换Frame**，frameset不用做任何处理。

### 切换frame语法

- 不论HTML里标记是frame还是iframe,Selenium中切换Frame语法都是相同的。
- **切换Frame语法**：
  - **`driver.switch_to.frame(标识信息)`**
- **标识信息**可以支持：
  - frame或iframe**标记的id属性值(str类型)、name属性值(str类型)、或从0开始编号的索引号(int类型)**
  - frame或iframe**标记的页面元素对象(webelement类型（用find_element返回的元素）)**。
- **切换回默认主网页**
  - **`driver.switch_to.default_content()`**
- **问题1**
  - 抛出NoSuchFrameException
  - 分析：没有找到要切换的目标Frame，是由于之前切换到子网页里造成的。
  - **切换子网页后需要再切换到默认主网页后才能进入子网页**
    - `driver.switch_to.default_content()`
- **问题2**
  - **NoSuchElementException**
  - 分析：切换到新窗口之前，位于后台页里的上方子网页内，切换到新窗口，操作完毕后，关闭新窗口，切换回原后台窗口，无法再次定位上方子网页内的元素。
  - 原因：**切换完窗口之后，默认又回到主网页里**。
  - 解决方案：**先切换到子网页里，再定位元素进行操作**。
    - driver..switch_to.window(…)
    - driver.switch_to.frame(…）
- **问题3**
  - 抛出NoSuchWindowException
  - 分析：点击“退出”之前，位于后台页里的上方子网页内，点击“退出”之后，跳转到登录页，登录页里没有frame,无法定位主网页内的元素。
  - 原因：在子网页里操作之后，跳转到没有frame的网页，**就算子网页消失也不会默认回到主网页里**。
  - 解决方案：**先切换到默认主网页里，再定位元素进行操作**。
    - driver.switch_to.default_content()

```python
driver.switch_to.frame("menu-frame")#切换frame
driver.find_element(By.LINK_TEXT,"商品回收站").click()

#抛出NoSuchFrameException，需要切换回默认主网页
driver.switch_to.default_content()#切换回默认主网页！！
driver.switch_to.frame("header-frame")#切换到子网页里
driver.find_element(By.LINK_TEXT,"开店向导").click()

#切换别的窗口后切换回来点击，抛出NoSuchElementException，会切换的默认主网页，需要再切换到子网页里
a=driver.current_window_handle
Lst1=driver.window_handles
driver.switch_to.window(lst1[-1])
driver.find_element(By.LINK_TEXT,"查看购物车").click()
driver.close()
driver.switch_to.window(a)
driver.switch_to.frame("header-frame")#切换到子网页里
driver.find_element(By.LINK_TEXT,"个人设置").click()

driver.find_element(By.LINK_TEXT,"")click()#切换到没有frame的网页中
#抛出NoSuchFrameException，需要切换回默认主网页
driver.switch_to.default_content()#切换回默认主网页
driver.find_element(By.NAME,"username").send_keys("admin")
```

### 总结

- 指令
  - driver.switch_to.frame(标识信息）
  - driver.switch_to.default_content()

- 切换到子网页后，需要切换回默认主网页后才能再切换到子网页（问题1）
- 切换窗口后，Selenium会自动切换到主网页（问题2）
- 页面跳转后，Selenium不会自动切换到主网页（问题3）

## 下拉列表操作

- HTML里的下拉列表表示方式，一般来说分为两种情况：
  - 一种是标准下拉列表：标准的select标签下拉列表方式实现；
  - 另一种是组装下拉列表：非select类下拉框，比如ul-li方式实现，或div-span方式实现

```html
标准下拉列表：<select>和<option>
    <select multiple="true">
    <option value="a">选项1</option>
    <option value:="b">选项2</option>
    <option value="c">选项3</option>
    <option value="d">选项4</option>
</select>
组装下拉列表：<ul>和<li>或<div>和</div>
<ul>
    <li>选项1</li>
    <li>选项2</li>
</ul>
<div>
    <span>选项1</span>
    <span>选项2</span>
</div>
```



**方式一**：利用下拉列表的专用操作类Select（更专业，更灵活，易用只适用于标准下拉列表不适用于组装下拉列表）

- 步骤1、导入Select类
- 步骤2、定位下拉列表
- 步骤3、封装Select对象
- 步骤4、调用方法完成操作或获得属性值

**方式二**：模拟手工操作过程（更直观易理解、适用广泛适用于组装下拉列表对于标准下拉列表，不建议使用）

- 步骤1、点击下拉列表或移动鼠标到下拉列表
- 步骤2、等待几秒
- 步骤3、点击一个选项



对于select标记的下拉列表，selenium webdriver提供了专用类Select来处理，更专业，更灵活，易用。

- 导入Select类：
  - `from selenium.webdriver.support.select import Select`
- **定位下拉列表**：html里select标记的页面元素
  - `变量1=driver..ind_element(By...,"..") `→变量1数据类型是webelement
- **封装Select对象**：调用构造方法，得到该类型的对象实例
  - `变量2=Select(变量1) `→变量2数据类型是Select

| 编号 | 方法名称                           | 功能               | 参数说明                                         |
| ---- | ---------------------------------- | ------------------ | ------------------------------------------------ |
| 1*   | **select_by_index(index)**         | 通过索引定位       | index是从0开始编号的索引号(int类型)              |
| 2    | **select_by_value("value")**       | 通过value值定位    | value是option标记的value属性值（str类型）        |
| 3*   | **select_by_visible_text("text")** | 通过文本值定位     | text是<option>与</option>之间的文本值 (str类型） |
| 4    | deselect_all()                     | 取消所有选项       | 无参                                             |
| 5    | deselect_by_index(inde x)          | 取消对应index 选项 | index是从0开始编号的索引号（int类型)             |
| 6    | deselect_by_value("valu e”)        | 项                 | 取消对应value选项                                |
| 7    | deselect_by_visible_text ("text")  | 取消对应文本选项   | text是<option>与</option>之间的文本值 (str类型） |

- 说明：deselect.…这几个方法，**只适用于多选的下拉列表**(html中select标记有multiple,属性信息就是支持多选的下拉列表)，如果下拉框不支持多选，则抛出NotlmplementedError,如果不存在指定值的选项，则抛出NoSuchElementException



属性：可以通过Select对象实例直接获得这些属性的值

| 编号 | 属性名称              | 说明                   | 属性值类型       |
| ---- | --------------------- | ---------------------- | ---------------- |
| 1*   | first_selected_option | 被选中的选项中的第一个 | webelement       |
| 2    | all_selected_options  | 所有已选中的选项       | list<webelement> |
| 3    | options               | 所有选项               | list<webelement> |

```html
<option value:="order.php?act=list">订单列表</option><!-- webelement对象 ->
<!--订单列表 webelement对象的text属性值->
```

```python
s1=driver.find_element(By.ID,"category")
s2=Select(s1)
#s2.select_by_index(13)
#s2.select_by_visible_text("&NBSP&NBSP&NBSP&NBSP耳机")
s2.select_by_value("8")
#将降序改为正序
s3=driver.find_element(By.NAME,"order")
s4=Select(s3)
t1=s4.first_selected_option.text
ift1=="倒序"：
s4.select_by_visible_text("正序")
#判断第一个排序规则下拉列表里的当前选项文本，如果包含“上架时间”，就从所有选项中选择文本内包含“价格”的选项。
s5=driver.find_element(By.NAME,"sort")
s6=Select(s5)
t1=s6.first_selected_option.text
if "上架时间" in t1:
	for o in s6.options:
		if"价格" in o.text
			s6.select_by_visible_text(o.text)
```

- 小结
  - 专用操作类Select适用于：
    - 标准下拉列表：标准的select标签下拉列表方式实现
  - 模拟手工操作过程
    - 组装下拉列表：非select类下拉框，比如ul-li方式实现，或div-span方式实现
  - 指令
    - `from selenium.webdriver.support.select import Select`
    - 变量1=driver..ind_element(By...,"..") `→变量1数据类型是webelement
    - `变量2=Select(变量1) `→变量2数据类型是Select

## 截屏操作

一．为什么要进行截屏操作

截屏：就是把当前屏幕上浏览器窗口内的网页或某个特定的网页区域截图保存为图片的过程。

- 为什么要截屏？简单地说，主要是为了保留证据。

  - 截图帮助我们了解应用的流程，并检查它是否有相应的行为。

  - 有助于执行交叉浏览测试，因为用户需要查看执行报告。

  - 捕获失败测试的屏幕截屏，方便复现Bug。

  - 无头浏览器跟踪执行。

二.何时要截屏

- 截屏应用场景：跟踪脚本运行后网页状态，或运行脚本出现错误或失败时，进行截屏操作。
  - 记录操作步骤执行后界面状态
  - 断言失败
  - 定位元素错误
  - 弹出框没有出现

三.怎么截屏

| 编号 | 功能                             | 语法                                  | 参数                   |
| ---- | -------------------------------- | ------------------------------------- | ---------------------- |
| 1    | 对当前浏览器窗口内的网页进行截屏 | **driver.save_screenshot(filename)**  | filename为图片完整名称 |
| 2    | 对元素截屏                       | **页面元素对象.screenshot(filename)** | filename为图片完整名称 |

- 注意：**图片完整名称必须包含路径和后缀**，只支持png格式。
  - 既支持绝对路径，也支持相对路径。
- 示例：
  - driver.save_screenshot(r"D:\a.png")
  - driver.find_element(By.ID,"search").screenshot(r".\b.png")

四．**用Pillow进行消息框截图**
Selenium截屏功能限制：**默认的截屏方法无法对消息框截图。**
消息框截图：Pillow库是一个Python的第三方图像处理库。

1.	安装pillow:在pycharm解释器里安装pillow
2.	导入模块from PIL import ImageGrab
ImageGrab模块用于将当前屏幕的内容或者剪贴板上的内容拷贝到PIL图像内存
3.	Image=ImageGrab.grab()
4.	Image.save（文件名）
文件名必须包含路径和后缀，一般用png格式。

```python
1.	浏览器窗口最大化
2.	打开ECShop前台首页
3.	对整个浏览器窗口截屏
4.	对网页的右侧商品信息区，做区域截屏
5.	设置窗口尺寸大小为宽2000px高3000px
6.	对整个浏览器窗口截屏

import os
p=r"c:\pp"
if not os.path.exists(p):
	os.mkdir(p)
#driver.save_screenshot(p+"\a1.png")#3.	对整个浏览器窗口截屏
driver.save_screenshot(os.path.join(p,"al.png"))

ele=driver.find_element(By.CLASS_NAME,"AreaR")
ele.screenshot(os.path.join(p,"b1.png"))#4.	对网页的右侧商品信息区，做区域截屏

driver.set_window_size(2000,3000)
driver.save_screenshot(os.path.join(p,"c1.png"))#6.	对放大的整个浏览器窗口截屏
```

```python
1.	打开ECShop后台页
2.	输入正确的用户名、密码、验证码，点击“进入管理中心”，等待5秒，对整个浏览器窗口截屏
3.	切换上方头部区，对整个浏览器窗口截屏
4.	定位上方头部区的body元素，对该元素进行截屏
5.	点击“计算器”，等待3秒，对整个浏览器窗口截屏
6.	切换到计算器窗口，对整个浏览器窗口截屏

if not os.path.exists(p):
	os.mkdir(p)
driver.switch_to.frame("header-frame")
driver.save_screenshot(os.path.join(p,"02.png"))#切换上方头部区，对整个浏览器窗口截屏
ele=driver.find_element(By.XPATH,'//body')#在header-frame子网页中只有一个body，可以直接用body定位
ele.screenshot(os.path.join(p,"03.png"))#定位上方头部区的body元素，对该元素进行截屏

driver.find_element(By.LINK_TEXT,"计算器").click()
driver.save_screenshot(os.path.join(p,"04.png"))#没有切换窗口，还是对当前窗口截屏
Lst=driver.window_handles
driver.switch_to.window(lst[-1])
driver.save_screenshot(os.path.join(p, "05.png")#对计算器窗口截屏
```

```python
1.	打开ECShop后台页
2.	点击“进入管理中心”，等待3秒
3.	尝试对整个浏览器窗口截屏
4.	切换到弹出框，等待3秒
5.	尝试对整个浏览器窗口截屏
6.	点击 “确定”，等待3秒
7.	尝试对整个浏览器窗口截屏

8. 使用pillow截屏
from PIL import ImageGrab

#driver.save_screenshot(os.path.join(p,"p1.png"))
mes=driver.switch_to.alert
#driver.save_screenshot(os.path.join(p,"p2.png"))
mes.accept()
#driver.save_screenshot(os.path.join(p,"p3.png"))
#都失败

Image=ImageGrab.grab()
Image.save（文件名）
```



- 小结
  - 对浏览器窗口截屏：
    - 如果当前屏幕有滚动条，只截取当前屏幕上显示的部分，不截取完整网页，需要**先把浏览器窗口尺寸修改为比网页尺寸大，然后再截屏就可以截取完整网页。**
    - 有多frame的情况下，不论是否切换frame,都不影响对整个浏览器窗口截屏。
    - 多浏览器窗口情况下，只对当前一个窗口截屏
  - 对页面元素截屏：
    - **不论窗口多大，都可以**针对页面元素截取该元素尺寸区间的完整范围
    - 有多frame的情况下，切换frame后对body进行元素定位，再截图可以截取这一个子网页的内容。
  - 指令：
    - `driver.save_screenshot(r"D:\a.png")`对整个浏览器网页截屏
    - `driver.find_element(By.ID,"search").screenshot(r".\b.png")`-》对元素截屏
    - 消息框情况下对整个浏览器网页截屏
      - `from PIL import ImageGrab`
      - `Image=ImageGrab.grab()`
      - `Image.save（文件名）`



## 验证码测试

- 有些网站需要验证码通过后方可进入网页,目的很简单,就是区分是自然人访问还是计算机程序访问。

- 验证码：简称为captcha
  - 一种随机生成的信息（数字、字母、汉字、图片、算术题、问答题）或者系统发送到客户终端的信息，为了防止恶意的请求行为，增加应用程序的安全性。
  - 防止恶意攻击、盗取信息。

- 验证码种类：

  - 1)纯数字（有些需要计算）

  - 2)纯英文（可能区分大小写）

  - 3)英数混合（可能有干扰背景）

  - 4)汉字

  - 5)滑动

  - 6)点选（选字、选物）

  - 7)问答题

  - 8)点选（语序选择）

  - 9)空间推理

  - 10)无感知

  - 11)手机验证码

  - 12)语音验证码

  - 13)视频验证码

- 验证码测试难点：
  - Selenium自动化测试与验证码设计初衷是矛盾的：
    - Selenium自动化测试：用程序代替人工操作
    - 验证码存在的意义：让自然人能操作，程序不能操作。
  - Selenium测试处理验证码的原因：
    - 在Web应用中，大部分系统在用户登录注册的时候都要求输入验证码，而在设计自动化测试脚本时，就需要临时处理验证码的问题，否则无法继续执行后续测试。
    - 在Selenium中并没有对验证码处理的方法。

- **验证码的常用处理方式**：
  - 通过配置**去掉验证码**（测试环境下-采用）
    - 开发来提供配置，如配置文件、界面配置、修改数据库等，建议使用。
  - 设置**万能验证码**（生产环境和测试环境下-采用)
    - 开发来提供万能验证码，生产和测试环境下采用，必须注意保密，建议使用。
  - **验证码识别技术**（通过编程语言库，识别率很难达到100%）
    - OCR技术：成功率不高，验证码种类繁多，开发成本高，不太建议！
  - **记录cookie**(通过添加cookie:来跳过登录)

- **验证码测试策略：**
  - 测试登录功能时，验证码测试策略：
    - **去掉验证码**（测试环境）、设置万能验证码（生产环境和测试环境）来进行自动化测试。
    - 验证码部分采用**手工测试**方式进行测试。
  - 不需要测试登录功能时，验证码测试策略：
    - **记录cookie进行跳过登录**。

- **ddddocr识别验证码：**
  - ddddocr是由sml2h3开发的专为验证码厂商进行对自家新版本验证码难易强度进行验证的一个python库。
    - 1、安装：**请在pycharm解释器里安装**
    - 2、导入ddddocr：`import ddddocr`
    - 3、定位识别图片元素：`img=driver.find_element(By.....,"..")`
    - 4、将图片元素截图：`img.screenshot('check.png')`
    - 5、读图片文件的二进制：img_bytes=open('check.png','rb').read()
    - 6、创建ocr对象：ocr=ddddocr.DdddOcr()
    - 7、识别验证码：check_code=ocr.classification(img_bytes)

```python
filename=os.path.join(os.path.dirname(os.getcwd()),"check.png")#获取当前目录的绝对路径保存图片
ele.screenshot(filename)
img_bin=open(filename,"rb").read()
ocr=ddddocr.Ddddocr()
checkcode=ocr.classification(img_bin)#识别验证码
print(checkcode)#输出验证码
driver.find_element(By.NAME,"captcha").send_keys(checkcode)
sLeep(3)
driver.find_element(By.XPATH,'//input[@value:="进入管理中心"]').click()
```

- 小结
  - 验证码的常用处理方式
    - 去掉验证码
    - 设置万能验证码
    - 验证码识别技术OCR
    - 记录cookie跳过登录的验证码
  - ddddocr识别验证码
    - 导入ddddocr：`import ddddocr`
    - 定位识别图片元素：`img=driver.find_element(By.....,"..")`
    - 将图片元素截图：`img.screenshot('check.png')`
    - 读图片文件的二进制：img_bytes=open('check.png','rb').read()
    - 创建ocr对象：ocr=ddddocr.DdddOcr()
    - 识别验证码：check_code=ocr.classification(img_bytes)

## 文件上传下载操作

### 	文件上传

- **文件上传遇到的问题**
  - 文件上传，如果**按照手工方式操作，需要操作Windows对话框**，而Selenium默认只能操作浏览器里的网页，不能操作Windows对话框。
- **Selenium标准文件上传**
  - Selenium**针对file类型的input**标记封装了现成的文件上传操作。
  - 标准文件上传的“浏览”、“选择文件"或“上传”按钮是文件型按钮，语法如下：
    - `<input type="file" name="file_name">`
  - 进行文件上传的语法
    - driver.find_element(By.NAME,"file").send_keys(r"D:\111.txt")
- 文件路径**支持绝对路径**，不支持相对路径（.或…)，需要采用os模块里的path相关函数：(os.getcwd()获取当前目录的绝对路径)
  - filepath=os.path.join(os.path.dirname(os.getcwd()),"temp","111.txt")
  - driver.find_element(By.ID,"file").send_keys(filepath)
- 语法说明：
  - **os.getcwd()用于返回当前工作目录的绝对路径**。
  - **os.path.dirname(path)函数返回参数的文件或文件夹所在的目录**
  - **os.path.join(path1,path2…)函数拼接两个或更多的路径**

```python
driver.find_element(By.ID,"file").send_keys("c:\\pp\\222.txt")#预览上传文件
sleep(3)
driver.find_element(By.NAME,"submit").click()#点击上传
```

- 小结

  - Selenium只能针对file类型的input进行文件上传`<input type="file" name="file_name">`
    - 进行文件上传的语法
      - `driver.find_element(By.NAME,"file").send_keys(r"D:\111.txt")`

  - 文件路径**支持绝对路径**，不支持相对路径，用`os.getcwd()`获取当前目录的绝对路径

### 文件下载

- 火狐浏览器下载配置
  - 关于火孤浏览器的参数，可以通过在Firefox浏览器地址栏中输入"about:config"查看，设置好配置信息后，在重新启动浏览器后浏览器就会根据这些配置进行运行或操作。
- browser.download.folderList：设置Firefox的默认下载文件夹。
  - 0是桌面；1是“我的下载"；2是自定义。

- browser.download.dir：下载文件存放目录。
  - 如果browser.download.folderList=0，那么就不需要设置该参数。
- browser.download.manager.showWhenStarting：是否显示开始
  - True为显示开始，Flase为不显示开始。
- browser.helperApps.neverAsk.saveToDisk:对所给文件类型不再弹出框进行询问
  - 在下载文件时，浏览器可能会弹出对应的下载提示框。
  - 这个提示框是浏览器的，不能使用Selenium进行操作，所以可以通过该配置关闭提示。
  - 上面例子中表示：对于下载类型为二进制流的文件不需要弹出提示。
  - 常用的类型有：application/, octet-stream, application/vnd.ms-excel, text/csv, 
    application/zip, application/pdf, application/json,application/msword

参考http://www.w3school.com.cn/media/media_mimeref.asp

| 文件扩展名      | Content-Type(Mime-Type)       | 文件扩展名 | Content-Type(Mime-Type)                 |
| --------------- | ----------------------------- | ---------- | --------------------------------------- |
| *（二进制流）   | application/octet-stream      | .wav       | audio/wav                               |
| .ppt            | application/vnd.ms-powerpoint | .xls       | application/x-xls                       |
| .html .htx .htm | text/html                     | .apk       | application/vnd.android.package-archive |
| .jpeg .jpg      | image/jpeg                    | .cer       | application/x-x509-ca-cert              |
| .mp3            | audio/mp3                     | .rpm       | audio/x-pn-realaudio-plugin             |
| .mp4            | video/mpeg4                   | .dll       | application/x-msdownload                |
| .png            | image/png                     | .pdf       | application/pdf                         |
| .zip            | application/zip               | .doc       | application/msword                      |
| .json           | application/json              | .xml       | applicaiton/xml                         |

#### Firefox启动配置(需要在调用WebDriver的Firefox()前配置)

在调用WebDriver的Firefox()方法时设置信息会作为参数传递给浏览器。Firefox浏览器在启动、运行(下载)时就会根据这些设置信息进行操作：

- 实例化一个配置对象：配置对象=webdriver.FirefoxProfile()
- 通过配置对象添加配置信息：配置对象.set_preference(key,value)
- 以配置对象启动浏览器：webdriver.Firefox(firefox_profile=配置对象）



```python
obj=webdriver.FirefoxProfile()
obj.set_preference("browser.download.folderList",2)
obj.set_preference("browser.download.dir","c:\\pp")
obj.set_preference("browser.download.manager.showWhenstarting",False)
obj.set_preference("browser.helperApps.neverAsk.saveToDisk","application/octet-stream")
driver=webdriver.Firefox(firefox_profile=obj)
driver.get("https://www.firefox.com.cn/")
sLeep(3)
driver.find_element(By.XPATH,'//div[aid="download-button-thanks"]/a').click()
sleep(15)
driver.quit()
```



注意：遇到报错的情况，是因为FirefoxProfile()已经弃用，请把上面的代码更改如下：

```python
from selenium.webdriver.common.options import BaseOptions
setobj=webdriver.FirefoxOptions()
setobj.set_preference(“browser.download.folderList”,2)
setobj.set_preference(“browser.download.dir”,”c:\\temp\\”)
setobj.set_preference(“browser.download.manager.showWhenStarting”,False)
setobj.set_preference(“browser.helperApps.neverAsk.saveToDisk”,”application/octet-stream”)
driver=webdriver.Firefox(Options=setobj)

```

参考来源：https://blog.csdn.net/huaalily/article/details/122492912

