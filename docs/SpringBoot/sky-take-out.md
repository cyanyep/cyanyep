# 苍穹外卖

[课程资料](https://pan.baidu.com/s/1MNDzXyVlr3mtmLgBjcPJVw?pwd=6633#list/path=%2F)

# 苍穹外卖-day01

## 课程内容

- 软件开发整体介绍
- 苍穹外卖项目介绍
- 开发环境搭建
- 导入接口文档
- Swagger

## 1. 软件开发整体介绍

作为一名软件开发工程师,我们需要了解在软件开发过程中的开发流程， 以及软件开发过程中涉及到的岗位角色，角色的分工、职责， 并了解软件开发中涉及到的三种软件环境。那么这一小节，我们将从 软件开发流程、角色分工、软件环境 三个方面整体介绍一下软件开发。



### 1.1 软件开发流程

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221106162815172.png" alt="image-20221106162815172"  style="zoom:80%;" />



**1). 第1阶段: 需求分析**

完成需求规格说明书、产品原型编写。  

需求规格说明书， 一般来说就是使用 Word 文档来描述当前项目的各个组成部分，如：系统定义、应用环境、功能规格、性能需求等，都会在文档中描述。**例如：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221106163758703.png" alt="image-20221106163758703" style="zoom: 50%;" />

产品原型，一般是通过网页(html)的形式展示当前的页面展示什么样的数据, 页面的布局是什么样子的，点击某个菜单，打开什么页面，点击某个按钮，出现什么效果，都可以通过产品原型看到。 **例如：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221106163925031.png" alt="image-20221106163925031" style="zoom:50%;" />





**2). 第2阶段: 设计**

设计的内容包含 UI设计、数据库设计、接口设计。

UI设计：用户界面的设计，主要设计项目的页面效果，小到一个按钮，大到一个页面布局，还有人机交互逻辑的体现。**例如：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221106165303946.png" alt="image-20221106165303946" style="zoom:50%;" />

数据库设计：需要设计当前项目中涉及到哪些数据库，每一个数据库里面包含哪些表，这些表结构之间的关系是什么样的，表结构中包含哪些字段。**例如：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221106165554917.png" alt="image-20221106165554917" style="zoom:50%;" />

接口设计：通过分析原型图，首先，粗粒度地分析每个页面有多少接口，然后，再细粒度地分析每个接口的传入参数，返回值参数，同时明确接口路径及请求方式。**例如：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221106171538880.png" alt="image-20221106171538880" style="zoom:50%;" />



**3). 第3阶段: 编码**

编写项目代码、并完成单元测试。

项目代码编写：作为软件开发工程师，我们需要对项目的模块功能分析后，进行编码实现。

单元测试：编码实现完毕后，进行单元测试，单元测试通过后再进入到下一阶段。**例如：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221106175351594.png" alt="image-20221106175351594" style="zoom:50%;" />





**4). 第4阶段: 测试**

在该阶段中主要由测试人员, 对部署在测试环境的项目进行功能测试, 并出具测试报告。



**5). 第5阶段: 上线运维**

在项目上线之前， 会由运维人员准备服务器上的软件环境安装、配置， 配置完毕后， 再将我们开发好的项目，部署在服务器上运行。



### 1.2 角色分工

在对整个软件开发流程熟悉后， 我们还有必要了解一下在整个软件开发流程中涉及到的岗位角色，以及各个角色的职责分工。



| 岗位/角色                           | 对应阶段                      | 职责/分工                                  |
| :---------------------------------- | ----------------------------- | :----------------------------------------- |
| 项目经理                            | 全阶段                        | 对整个项目负责，任务分配、把控进度         |
| 产品经理                            | 需求分析                      | 进行需求调研，输出需求调研文档、产品原型等 |
| UI设计师                            | 设计                          | 根据产品原型输出界面效果图                 |
| 架构师                              | 设计                          | 项目整体架构设计、技术选型等               |
| <font color='red'>开发工程师</font> | <font color='red'>编码</font> | <font color='red'>功能代码实现</font>      |
| 测试工程师                          | 测试                          | 编写测试用例，输出测试报告                 |
| 运维工程师                          | 上线运维                      | 软件环境搭建、项目上线                     |



上述我们讲解的角色分工, 是在一个项目组中比较标准的角色分工, 但是在实际的项目中, 有一些项目组由于人员配置紧张, 可能并没有专门的架构师或测试人员, 这个时候可能需要有项目经理或者程序员兼任。



### 1.3 软件环境

作为软件开发工程师，在编码的过程中就不可避免地会接触多种软件环境，我们主要来分析在工作中经常遇到的三套环境， 分别是: 开发环境、测试环境、生产环境。 接下来，我们分别介绍一下这三套环境的作用和特点。



**1). 开发环境(development)**

我们作为软件开发人员，在开发阶段使用的环境，就是开发环境，一般外部用户无法访问。

比如，我们在开发中使用的MySQL数据库和其他的一些常用软件，我们可以安装在本地， 也可以安装在一台专门的服务器中， 这些应用软件仅仅在软件开发过程中使用， 项目测试、上线时，我们不会使用这套环境了，这个环境就是开发环境。



**2). 测试环境(testing)**

当软件开发工程师，将项目的功能模块开发完毕，并且单元测试通过后，就需要将项目部署到测试服务器上，让测试人员对项目进行测试。那这台测试服务器就是专门给测试人员使用的环境， 也就是测试环境，用于项目测试，一般外部用户无法访问。



**3). 生产环境(production)**

当项目开发完毕，并且由测试人员测试通过之后，就可以上线项目，将项目部署到线上环境，并正式对外提供服务，这个线上环境也称之为生产环境。

首先，会在开发环境中进行项目开发，往往开发环境大多数都是本地的电脑环境和局域网内的环境，当开发完毕后，然后会把项目部署到测试环境，测试环境一般是一台独立测试服务器的环境，项目测试通过后，最终把项目部署到生产环境，生产环境可以是机房或者云服务器等线上环境。

## 2. 苍穹外卖项目介绍

在开发苍穹外卖这个项目之前，我们需要全方位的来介绍一下当前我们学习的这个项目。接下来，我们将从项目简介、产品原型、技术选型三个方面来介绍苍穹外卖这个项目。



### 2.1 项目介绍

本项目（苍穹外卖）是专门为餐饮企业（餐厅、饭店）定制的一款软件产品，包括 系统管理后台 和 小程序端应用 两部分。其中系统管理后台主要提供给餐饮企业内部员工使用，可以对餐厅的分类、菜品、套餐、订单、员工等进行管理维护，对餐厅的各类数据进行统计，同时也可进行来单语音播报功能。小程序端主要提供给消费者使用，可以在线浏览菜品、添加购物车、下单、支付、催单等。

![image-20250118000932805](http://stofu80ry.sabkt.gdipper.com/picture/image-20250118000932805.png)

接下来，通过功能架构图来展示**管理端**和**用户端**的具体业务功能模块。

![image-20250118000944009](http://stofu80ry.sabkt.gdipper.com/picture/image-20250118000944009.png)

**1). 管理端功能**

员工登录/退出 , 员工信息管理 , 分类管理 , 菜品管理 , 套餐管理 , 菜品口味管理 , 订单管理 ，数据统计，来单提醒。

**2). 用户端功能**

 微信登录 , 收件人地址管理 , 用户历史订单查询 , 菜品规格查询 , 购物车功能 , 下单 , 支付、分类及菜品浏览。



### 2.2 产品原型

**产品原型**，用于展示项目的业务功能，一般由产品经理进行设计。

> **<font color='red'>注意事项：</font>** 产品原型主要用于展示项目的功能，并不是最终的页面效果。



**管理端原型图：**





<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221106195259858.png" alt="image-20221106195259858" style="zoom:50%;" />

**用户端原型图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221106195354556.png" alt="image-20221106195354556" style="zoom:50%;" />

**1). 管理端**

餐饮企业内部员工使用。 主要功能有: 

| 模块      | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| 登录/退出 | 内部员工必须登录后,才可以访问系统管理后台                    |
| 员工管理  | 管理员可以在系统后台对员工信息进行管理，包含查询、新增、编辑、禁用等功能 |
| 分类管理  | 主要对当前餐厅经营的 菜品分类 或 套餐分类 进行管理维护， 包含查询、新增、修改、删除等功能 |
| 菜品管理  | 主要维护各个分类下的菜品信息，包含查询、新增、修改、删除、启售、停售等功能 |
| 套餐管理  | 主要维护当前餐厅中的套餐信息，包含查询、新增、修改、删除、启售、停售等功能 |
| 订单管理  | 主要维护用户在移动端下的订单信息，包含查询、取消、派送、完成，以及订单报表下载等功能 |
| 数据统计  | 主要完成对餐厅的各类数据统计，如营业额、用户数量、订单等     |



**2). 用户端**

移动端应用主要提供给消费者使用。主要功能有:

| 模块        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| 登录/退出   | 用户需要通过微信授权后登录使用小程序进行点餐                 |
| 点餐-菜单   | 在点餐界面需要展示出菜品分类/套餐分类, 并根据当前选择的分类加载其中的菜品信息, 供用户查询选择 |
| 点餐-购物车 | 用户选中的菜品就会加入用户的购物车, 主要包含 查询购物车、加入购物车、删除购物车、清空购物车等功能 |
| 订单支付    | 用户选完菜品/套餐后, 可以对购物车菜品进行结算支付, 这时就需要进行订单的支付 |
| 个人信息    | 在个人中心页面中会展示当前用户的基本信息, 用户可以管理收货地址, 也可以查询历史订单数据 |



### 2.3 技术选型

关于本项目的技术选型, 我们将会从 用户层、网关层、应用层、数据层 这几个方面进行介绍，主要用于展示项目中使用到的技术框架和中间件等。

![image-20250118001012690](http://stofu80ry.sabkt.gdipper.com/picture/image-20250118001012690.png)

**1). 用户层**

本项目中在构建系统管理后台的前端页面，我们会用到H5、Vue.js、ElementUI、apache echarts(展示图表)等技术。而在构建移动端应用时，我们会使用到微信小程序。



**2). 网关层**

Nginx是一个服务器，主要用来作为Http服务器，部署静态资源，访问性能高。在Nginx中还有两个比较重要的作用： 反向代理和负载均衡， 在进行项目部署时，要实现Tomcat的负载均衡，就可以通过Nginx来实现。



**3). 应用层**

SpringBoot： 快速构建Spring项目, 采用 "约定优于配置" 的思想, 简化Spring项目的配置开发。

SpringMVC：SpringMVC是spring框架的一个模块，springmvc和spring无需通过中间整合层进行整合，可以无缝集成。

Spring Task:  由Spring提供的定时任务框架。

httpclient:  主要实现了对http请求的发送。

Spring Cache:  由Spring提供的数据缓存框架

JWT:  用于对应用程序上的用户进行身份验证的标记。

阿里云OSS:  对象存储服务，在项目中主要存储文件，如图片等。

Swagger： 可以自动的帮助开发人员生成接口文档，并对接口进行测试。

POI:  封装了对Excel表格的常用操作。

WebSocket: 一种通信网络协议，使客户端和服务器之间的数据交换更加简单，用于项目的来单、催单功能实现。



**4). 数据层**

MySQL： 关系型数据库, 本项目的核心业务数据都会采用MySQL进行存储。

Redis： 基于key-value格式存储的内存数据库, 访问速度快, 经常使用它做缓存。

Mybatis： 本项目持久层将会使用Mybatis开发。

pagehelper:  分页插件。

spring data redis:  简化java代码操作Redis的API。



**5). 工具**

git: 版本控制工具, 在团队协作中, 使用该工具对项目中的代码进行管理。

maven: 项目构建工具。

junit：单元测试工具，开发人员功能实现完毕后，需要通过junit对功能进行单元测试。

postman:  接口测工具，模拟用户发起的各类HTTP请求，获取对应的响应结果。



## 3. 开发环境搭建

## 

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221106200821282.png" alt="image-20221106200821282" style="zoom: 67%;" />

开发环境搭建主要包含**前端环境**和**后端环境**两部分。作为服务端开发工程师， 我们课程学习的重心应该放在后端的业务代码上， 前端的页面我们只需要导入资料中的nginx， 前端页面的代码我们只需要能看懂即可。

### 3.1 前端环境搭建

**1). 前端工程基于 nginx** 

从资料中找到前端运行环境的nginx，移动到**非中文目录**下。

**sky**目录中存放了管理端的前端资源



**2). 启动nginx，访问测试** 

启动nginx：双击 nginx.exe 即可启动 nginx 服务，访问端口号为 80，**注意不要放在中文路径中**

http://localhost:80

### 3.2 后端环境搭建

#### 3.2.1 熟悉项目结构

后端工程基于 maven 进行项目构建，并且进行**分模块**开发

项目的整体结构

| **序号** | **名称**     | **说明**                                                     |
| -------- | ------------ | ------------------------------------------------------------ |
| 1        | sky-take-out | maven父工程，统一管理依赖版本，聚合其他子模块                |
| 2        | sky-common   | 子模块，存放公共类，例如：工具类、常量类、异常类等           |
| 3        | sky-pojo     | 子模块，存放实体类、VO、DTO等                                |
| 4        | sky-server   | 子模块，后端服务，存放配置文件、Controller、Service、Mapper等 |



对项目整体结构了解后，接下来我们详细分析上述的每个子模块：

- sky-common 子模块中存放的是一些公共类，可以供其他模块使用


```
├── sky-common
│   ├── src
│   │   └── main
│   │       ├── java
│   │       │   └── com.sky
│   │       │       ├── constant
│   │       │       ├── context
│   │       │       ├── enumeration
│   │       │       ├── exception
│   │       │       ├── json
│   │       │       ├── properties
│   │       │       ├── result
│   │       │       └── utils
│   │       └── resources
│   └── test
└── pom.xml
└── sky-common.iml
```

- 分析sky-common模块的每个包的作用：


| 名称        | 说明                           |
| ----------- | ------------------------------ |
| constant    | 存放相关常量类                 |
| context     | 存放上下文类                   |
| enumeration | 项目的枚举类存储               |
| exception   | 存放自定义异常类               |
| json        | 处理json转换的类               |
| properties  | 存放SpringBoot相关的配置属性类 |
| result      | 返回结果类的封装               |
| utils       | 常用工具类                     |

- **sky-pojo:** 模块中存放的是一些 entity、DTO、VO

```
├── sky-pojo
│   ├── src
│   │   └── main
│   │       ├── java
│   │       │   └── com.sky
│   │       │       ├── dto
│   │       │       ├── entity
│   │       │       └── vo
│   │       └── resources
│   └── test
└── pom.xml
└── sky-pojo.iml
```

- 分析sky-pojo模块的每个包的作用：

  | **名称** | **说明**                                     |
  | -------- | -------------------------------------------- |
  | Entity   | 实体，通常和数据库中的表对应                 |
  | DTO      | 数据传输对象，通常用于程序中各层之间传递数据 |
  | VO       | 视图对象，为前端展示数据提供的对象           |
  | POJO     | 普通Java对象，只有属性和对应的getter和setter |

  

- **sky-server:** 模块中存放的是 配置文件、配置类、拦截器、controller、service、mapper、启动类等

```
├── sky-server
│   ├── src
│   │   └── main
│   │       ├── java
│   │       │   └── com.sky
│   │       │       ├── config
│   │       │       ├── controller.admin
│   │       │       ├── handler
│   │       │       ├── interceptor
│   │       │       ├── mapper
│   │       │       ├── service
│   │       │       └── SkyApplication
│   │       └── resources
│   │           ├── mapper
│   │           ├── application.yml
│   │           └── application-dev.yml
│   └── test
└── pom.xml
└── sky-server.iml
```

- 分析sky-server模块的每个包的作用：

  | 名称           | 说明             |
  | -------------- | ---------------- |
  | config         | 存放配置类       |
  | controller     | 存放controller类 |
  | interceptor    | 存放拦截器类     |
  | mapper         | 存放mapper接口   |
  | service        | 存放service类    |
  | SkyApplication | 启动类           |



#### 3.2.2 Git版本控制

使用Git进行项目代码的版本控制，具体操作：

**1). 创建Git本地仓库**

**2). 创建Git远程仓库**

**3). 将本地文件推送到Git远程仓库**

参考[Git分布式版本控制工具——5、在Idea中使用Git](../Git/git.md)

#### 3.2.3 数据库环境搭建

**从资料中找到[sky.sql](sky.sql)**

​	通过该sql文件直接可创建数据库，所以不需要提前创建数据库，直接导入该文件执行即可。

​	执行完成后，共创建出11张表

每张表的说明：

| **序号** | **表名**      | **中文名**     |
| -------- | ------------- | -------------- |
| 1        | employee      | 员工表         |
| 2        | category      | 分类表         |
| 3        | dish          | 菜品表         |
| 4        | dish_flavor   | 菜品口味表     |
| 5        | setmeal       | 套餐表         |
| 6        | setmeal_dish  | 套餐菜品关系表 |
| 7        | user          | 用户表         |
| 8        | address_book  | 地址表         |
| 9        | shopping_cart | 购物车表       |
| 10       | orders        | 订单表         |
| 11       | order_detail  | 订单明细表     |

我们目前先简单了解大概有哪些表, 每张表存储什么数据, 有一个印象。对于具体的表结构, 以及表结构中的字段, 可以参考资料中的**《[数据库设计文档](数据库设计文档.md)》**，同时在讲解具体的功能开发时, 我们也会再详细介绍。

#### 3.2.4 前后端联调

后端的初始工程中已经实现了**登录**功能，直接进行前后端联调测试即可

实现思路：



<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221107110539832.png" alt="image-20221107110539832" style="zoom:67%;" />

**1.Controller层**

在sky-server模块中，com.sky.controller.admin.EmployeeController

```java
/**
     * 登录
     *
     * @param employeeLoginDTO
     * @return
     */
    @PostMapping("/login")
    public Result<EmployeeLoginVO> login(@RequestBody EmployeeLoginDTO employeeLoginDTO) {
        log.info("员工登录：{}", employeeLoginDTO);
		//调用service方法查询数据库
        Employee employee = employeeService.login(employeeLoginDTO);

        //登录成功后，生成jwt令牌
        Map<String, Object> claims = new HashMap<>();
        claims.put(JwtClaimsConstant.EMP_ID, employee.getId());
        String token = JwtUtil.createJWT(
                jwtProperties.getAdminSecretKey(),
                jwtProperties.getAdminTtl(),
                claims);

        EmployeeLoginVO employeeLoginVO = EmployeeLoginVO.builder()
                .id(employee.getId())
                .userName(employee.getUsername())
                .name(employee.getName())
                .token(token)
                .build();

        return Result.success(employeeLoginVO);
    }
```

**2.Service层**

在sky-server模块中，com.sky.service.impl.EmployeeServiceImpl

```java
/**
     * 员工登录
     *
     * @param employeeLoginDTO
     * @return
     */
    public Employee login(EmployeeLoginDTO employeeLoginDTO) {
        String username = employeeLoginDTO.getUsername();
        String password = employeeLoginDTO.getPassword();

        //1、根据用户名查询数据库中的数据
        Employee employee = employeeMapper.getByUsername(username);

        //2、处理各种异常情况（用户名不存在、密码不对、账号被锁定）
        if (employee == null) {
            //账号不存在
            throw new AccountNotFoundException(MessageConstant.ACCOUNT_NOT_FOUND);
        }

        //密码比对
        if (!password.equals(employee.getPassword())) {
            //密码错误
            throw new PasswordErrorException(MessageConstant.PASSWORD_ERROR);
        }

        if (employee.getStatus() == StatusConstant.DISABLE) {
            //账号被锁定
            throw new AccountLockedException(MessageConstant.ACCOUNT_LOCKED);
        }

        //3、返回实体对象
        return employee;
    }
```

**3.Mapper层**

在sky-server模块中，com.sky.mapper.EmployeeMapper

```java
package com.sky.mapper;

import com.sky.entity.Employee;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface EmployeeMapper {

    /**
     * 根据用户名查询员工
     * @param username
     * @return
     */
    @Select("select * from employee where username = #{username}")
    Employee getByUsername(String username);

}

```

注：可以通过断点调试跟踪后端程序的执行过程



#### 3.2.5 nginx反向代理和负载均衡

对登录功能测试完毕后，接下来，我们思考一个问题：**前端发送的请求，是如何请求到后端服务的？**

前端请求地址：http://localhost/api/employee/login

后端接口地址：http://localhost:8080/admin/employee/login





​              **前端请求地址**                                                                                       **后端接口地址**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221107151607921.png" alt="image-20221107151607921" style="zoom:50%;" />                                  <img src="C:/Users/86157/Downloads/讲义/day01/assets/image-20221107151623005.png" alt="image-20221107151623005" style="zoom: 33%;" />

很明显，两个地址不一致，那是如何请求到后端服务的呢？

![image-20221107152041371](http://stofu80ry.sabkt.gdipper.com/picture/image-20221107152041371.png)



**1). nginx反向代理**

**nginx 反向代理**，就是将前端发送的动态请求由 nginx 转发到后端服务器

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221107152112092.png" alt="image-20221107152112092" style="zoom:67%;" />

那为什么不直接通过浏览器直接请求后台服务端，需要通过nginx反向代理呢？



**nginx 反向代理的好处：**

- 提高访问速度

  因为nginx本身可以进行缓存，如果访问的同一接口，并且做了数据缓存，nginx就直接可把数据返回，不需要真正地访问服务端，从而提高访问速度。

- 进行负载均衡

  所谓负载均衡,就是把大量的请求按照我们指定的方式均衡的分配给集群中的每台服务器。

- 保证后端服务安全

  因为一般后台服务地址不会暴露，所以使用浏览器不能直接访问，可以把nginx作为请求访问的入口，请求到达nginx后转发到具体的服务中，从而保证后端服务的安全。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221107153808368.png" alt="image-20221107153808368" style="zoom:67%;" />

**nginx 反向代理的配置方式：**

```nginx
server{
    listen 80;
    server_name localhost;
    
    location /api/{
        proxy_pass http://localhost:8080/admin/; #反向代理
    }
}
```

**proxy_pass：**该指令是用来设置代理服务器的地址，可以是主机名称，IP地址加端口号等形式。

如上代码的含义是：监听80端口号， 然后当我们访问 http://localhost:80/api/../..这样的接口的时候，它会通过 location /api/ {} 这样的反向代理到 http://localhost:8080/admin/上来。



接下来，进到nginx-1.20.2\conf，打开nginx配置

```nginx
# 反向代理,处理管理端发送的请求
location /api/ {
	proxy_pass   http://localhost:8080/admin/;
    #proxy_pass   http://webservers/admin/;
}
```

当在访问http://localhost/api/employee/login，nginx接收到请求后转到http://localhost:8080/admin/，故最终的请求地址为http://localhost:8080/admin/employee/login，和后台服务的访问地址一致。



**2). nginx 负载均衡**

当如果服务以集群的方式进行部署时，那nginx在转发请求到服务器时就需要做相应的负载均衡。其实，负载均衡从本质上来说也是基于反向代理来实现的，最终都是转发请求。



**nginx 负载均衡的配置方式：**

```nginx
upstream webservers{
    server 192.168.100.128:8080;
    server 192.168.100.129:8080;
}
server{
    listen 80;
    server_name localhost;
    
    location /api/{
        proxy_pass http://webservers/admin;#负载均衡
    }
}
```

**upstream：**如果代理服务器是一组服务器的话，我们可以使用upstream指令配置后端服务器组。

如上代码的含义是：监听80端口号， 然后当我们访问 http://localhost:80/api/../..这样的接口的时候，它会通过 location /api/ {} 这样的反向代理到 http://webservers/admin，根据webservers名称找到一组服务器，根据设置的负载均衡策略(默认是轮询)转发到具体的服务器。

**注：**upstream后面的名称可自定义，但要上下保持一致。



**nginx 负载均衡策略：**

| **名称**   | **说明**                                               |
| ---------- | ------------------------------------------------------ |
| 轮询       | 默认方式                                               |
| weight     | 权重方式，默认为1，权重越高，被分配的客户端请求就越多  |
| ip_hash    | 依据ip分配方式，这样每个访客可以固定访问一个后端服务   |
| least_conn | 依据最少连接方式，把请求优先分配给连接数少的后端服务   |
| url_hash   | 依据url分配方式，这样相同的url会被分配到同一个后端服务 |
| fair       | 依据响应时间方式，响应时间短的服务将会被优先分配       |

具体配置方式：

**轮询：**

```nginx
upstream webservers{
    server 192.168.100.128:8080;
    server 192.168.100.129:8080;
}
```

**weight:**

```nginx
upstream webservers{
    server 192.168.100.128:8080 weight=90;
    server 192.168.100.129:8080 weight=10;
}
```

**ip_hash:**

```nginx
upstream webservers{
    ip_hash;
    server 192.168.100.128:8080;
    server 192.168.100.129:8080;
}
```

**least_conn:**

```nginx
upstream webservers{
    least_conn;
    server 192.168.100.128:8080;
    server 192.168.100.129:8080;
}
```

**url_hash:**

```nginx
upstream webservers{
    hash &request_uri;
    server 192.168.100.128:8080;
    server 192.168.100.129:8080;
}
```

**fair:**

```nginx
upstream webservers{
    server 192.168.100.128:8080;
    server 192.168.100.129:8080;
    fair;
}
```



### 3.3 完善登录功能

**问题：**员工表中的密码是明文存储，安全性太低。

![image-20221107160529803](http://stofu80ry.sabkt.gdipper.com/picture/image-20221107160529803-1739097193169-19.png)

**解决思路：**

1. 将密码加密后存储，提高安全性

   <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221107161918913.png" alt="image-20221107161918913" style="zoom:50%;" />

2. 使用MD5加密方式对明文密码加密

   <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221107160739680.png" alt="image-20221107160739680" style="zoom:50%;" />

**实现步骤：**

1. 修改数据库中明文密码，改为MD5加密后的密文

   打开employee表，修改密码

   ![image-20221107161446710](http://stofu80ry.sabkt.gdipper.com/picture/image-20221107161446710.png)

2. 修改Java代码，前端提交的密码进行MD5加密后再跟数据库中密码比对

   打开EmployeeServiceImpl.java，修改比对密码

   ```java
   /**
    * 员工登录
    *
    * @param employeeLoginDTO
    * @return
    */
   public Employee login(EmployeeLoginDTO employeeLoginDTO) {
   
       //1、根据用户名查询数据库中的数据
   
       //2、处理各种异常情况（用户名不存在、密码不对、账号被锁定）
       //.......
       //密码比对
       // TODO 后期需要进行md5加密，然后再进行比对
       password = DigestUtils.md5DigestAsHex(password.getBytes());
       if (!password.equals(employee.getPassword())) {
           //密码错误
           throw new PasswordErrorException(MessageConstant.PASSWORD_ERROR);
       }
   
       //........
   
       //3、返回实体对象
       return employee;
   }
   ```

   

## 4. 导入接口文档

接下来，就要进入到项目的业务开发了，而我们的开发方式就是基本当前企业主流的前后端分离开发方式，那么这种方式就要求我们之前需要先将接口定义好，这样前后端人员才能并行开发，所以，这个章节就需要将接口文档导入到管理平台，为我们后面业务开发做好准备。其实，在真实的企业开发中，接口设计过程其实是一个非常漫长的过程，可能需要多次开会讨论调整，甚至在开发的过程中才会发现某些接口定义还需要再调整，这种情况其实是非常常见的，但是由于项目时间原因，所以选择一次性导入所有的接口，在开发业务功能过程当中，也会带着大家一起来分析一下对应的接口是怎么确定下来的，为什么要这样定义，从而培养同学们的接口设计能力。



### 4.1 前后端分离开发流程

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221107181446913.png" alt="image-20221107181446913" style="zoom:67%;" />

第一步：定义接口，确定接口的路径、请求方式、传入参数、返回参数。

第二步：前端开发人员和后端开发人员并行开发，同时，也可自测。

第三步：前后端人员进行连调测试。

第四步：提交给测试人员进行最终测试。



### 4.2 操作步骤

可以使用apifox。访问地址：https://apifox.com

**1). 从资料中找到项目接口文件**

**2). 选择新建项目**

创建出两个项目



![image-20250210163750430](http://stofu80ry.sabkt.gdipper.com/picture/image-20250210163750430.png)

在项目中选择数据导入YApi

![image-20250210163819770](http://stofu80ry.sabkt.gdipper.com/picture/image-20250210163819770.png)

导入成功

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221107185742061.png" alt="image-20221107185742061" style="zoom:50%;" />



另一个用户端json文件也执行相同操作。



## 5. Swagger

### 5.1 介绍

Swagger 是一个规范和完整的框架，用于生成、描述、调用和可视化 RESTful 风格的 Web 服务(<https://swagger.io/>)。 它的主要作用是：

1. 使得前后端分离开发更加方便，有利于团队协作

2. 接口的文档在线自动生成，降低后端开发人员编写接口文档的负担

3. 功能测试 

   Spring已经将Swagger纳入自身的标准，建立了Spring-swagger项目，现在叫Springfox。通过在项目中引入Springfox ，即可非常简单快捷的使用Swagger。

knife4j是为Java MVC框架集成Swagger生成Api文档的增强解决方案,前身是swagger-bootstrap-ui,取名kni4j是希望它能像一把匕首一样小巧,轻量,并且功能强悍!

目前，一般都使用knife4j框架。



### 5.2 使用步骤

1. 导入 knife4j 的maven坐标

   在pom.xml中添加依赖

   ```xml
   <dependency>
      <groupId>com.github.xiaoymin</groupId>
      <artifactId>knife4j-spring-boot-starter</artifactId>
   </dependency>
   ```

2. 在配置类中加入 knife4j 相关配置

   WebMvcConfiguration.java

   ```java
   /**
   * 通过knife4j生成接口文档
   * @return
   */
   @Bean
   public Docket docket() {
       ApiInfo apiInfo = new ApiInfoBuilder()
               .title("苍穹外卖项目接口文档")
               .version("2.0")
               .description("苍穹外卖项目接口文档")
               .build();
       Docket docket = new Docket(DocumentationType.SWAGGER_2)
               .apiInfo(apiInfo)
               .select()
               .apis(RequestHandlerSelectors.basePackage("com.sky.controller"))
               .paths(PathSelectors.any())
               .build();
       return docket;
   }
   ```

   

3. 设置静态资源映射，否则接口文档页面无法访问

   WebMvcConfiguration.java

   ```java
   /**
        * 设置静态资源映射
        * @param registry
   */
   protected void addResourceHandlers(ResourceHandlerRegistry registry) {
           registry.addResourceHandler("/doc.html").addResourceLocations("classpath:/META-INF/resources/");
           registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
   }
   ```

4. 访问测试

   接口文档访问路径为 http://ip:port/doc.html ---> http://localhost:8080/doc.html

   <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221107173033632.png" alt="image-20221107173033632" style="zoom:50%;" />

   接口测试:测试登录功能

   <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221107173137506.png" alt="image-20221107173137506" style="zoom:50%;" />

**思考：**通过 Swagger 就可以生成接口文档，那么我们就不需要 Yapi 了？

1、Yapi 是设计阶段使用的工具，管理和维护接口

2、Swagger 在开发阶段使用的框架，帮助后端开发人员做后端的接口测试



### 5.3 常用注解

通过注解可以控制生成的接口文档，使接口文档拥有更好的可读性，常用注解如下：

| **注解**          | **说明**                                               |
| ----------------- | ------------------------------------------------------ |
| @Api              | 用在类上，例如Controller，表示对类的说明               |
| @ApiModel         | 用在类上，例如entity、DTO、VO                          |
| @ApiModelProperty | 用在属性上，描述属性信息                               |
| @ApiOperation     | 用在方法上，例如Controller的方法，说明方法的用途、作用 |

接下来，使用上述注解，生成可读性更好的接口文档

在sky-pojo模块中

EmployeeLoginDTO.java

```java
package com.sky.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

@Data
@ApiModel(description = "员工登录时传递的数据模型")
public class EmployeeLoginDTO implements Serializable {

    @ApiModelProperty("用户名")
    private String username;

    @ApiModelProperty("密码")
    private String password;

}

```

EmployeeLoginVo.java

```java
package com.sky.vo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(description = "员工登录返回的数据格式")
public class EmployeeLoginVO implements Serializable {

    @ApiModelProperty("主键值")
    private Long id;

    @ApiModelProperty("用户名")
    private String userName;

    @ApiModelProperty("姓名")
    private String name;

    @ApiModelProperty("jwt令牌")
    private String token;

}
```

在sky-server模块中

EmployeeController.java

```java
package com.sky.controller.admin;

import com.sky.constant.JwtClaimsConstant;
import com.sky.dto.EmployeeLoginDTO;
import com.sky.entity.Employee;
import com.sky.properties.JwtProperties;
import com.sky.result.Result;
import com.sky.service.EmployeeService;
import com.sky.utils.JwtUtil;
import com.sky.vo.EmployeeLoginVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * 员工管理
 */
@RestController
@RequestMapping("/admin/employee")
@Slf4j
@Api(tags = "员工相关接口")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private JwtProperties jwtProperties;

    /**
     * 登录
     *
     * @param employeeLoginDTO
     * @return
     */
    @PostMapping("/login")
    @ApiOperation(value = "员工登录")
    public Result<EmployeeLoginVO> login(@RequestBody EmployeeLoginDTO employeeLoginDTO) 	{
        //..............

        
    }

    /**
     * 退出
     *
     * @return
     */
    @PostMapping("/logout")
    @ApiOperation("员工退出")
    public Result<String> logout() {
        return Result.success();
    }

}

```

启动服务：访问http://localhost:8080/doc.html

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221107175649468.png" alt="image-20221107175649468" style="zoom:50%;" />



### 5.4 小技巧

创建两个docket分别扫描controller下的两个包，并设置groupName可以将接口分为两个文档

```
@Bean
public Docket docket1() {
    ApiInfo apiInfo = new ApiInfoBuilder()
            .title("苍穹外卖项目接口文档")
            .version("2.0")
            .description("苍穹外卖项目接口文档")
            .build();
    Docket docket = new Docket(DocumentationType.SWAGGER_2)
            .groupName("管理端接口")
            .apiInfo(apiInfo)
            .select()
            .apis(RequestHandlerSelectors.basePackage("com.sky.controller.admin"))
            .paths(PathSelectors.any())
            .build();
    return docket;
}
/**
 * 通过knife4j生成接口文档
 * @return
 */
@Bean
public Docket docket2() {
    ApiInfo apiInfo = new ApiInfoBuilder()
            .title("苍穹外卖项目接口文档")
            .version("2.0")
            .description("苍穹外卖项目接口文档")
            .build();
    Docket docket = new Docket(DocumentationType.SWAGGER_2)
            .groupName("用户端接口")
            .apiInfo(apiInfo)
            .select()
            .apis(RequestHandlerSelectors.basePackage("com.sky.controller.user"))
            .paths(PathSelectors.any())
            .build();
    return docket;
}
```

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20250211191111056.png" alt="image-20250211191111056" style="zoom: 50%;" />

# 苍穹外卖-day02

## 课程内容

- 新增员工
- 员工分页查询
- 启用禁用员工账号
- 编辑员工
- 导入分类模块功能代码



**功能实现：**员工管理、菜品分类管理。

**员工管理效果：**



<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112172846316.png" alt="image-20221112172846316" style="zoom:50%;" /> 



**菜品分类管理效果：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112172925354.png" alt="image-20221112172925354" style="zoom:50%;" /> 



## 1. 新增员工

### 1.1 需求分析和设计

#### 1.1.1 产品原型

一般在做需求分析时，往往都是对照着产品原型进行分析，因为产品原型比较直观，便于我们理解业务。

后台系统中可以管理员工信息，通过新增员工来添加后台系统用户。

**新增员工原型：**



<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111161120975.png" alt="image-20221111161120975" style="zoom: 50%;" /> 



当填写完表单信息, 点击"保存"按钮后, 会提交该表单的数据到服务端, 在服务端中需要接受数据, 然后将数据保存至数据库中。

**注意事项：**

1. 账号必须是唯一的
2. 手机号为合法的11位手机号码
3. 身份证号为合法的18位身份证号码
4. 密码默认为123456



#### 1.1.2 接口设计

找到资料-->项目接口文档-->苍穹外卖-管理端接口.html

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111162912753.png" alt="image-20221111162912753" style="zoom:50%;" /> <img src="C:/Users/86157/Downloads/讲义/day02/assets/image-20221111162930483.png" alt="image-20221111162930483" style="zoom:50%;" />

明确新增员工接口的**请求路径、请求方式、请求参数、返回数据**。



本项目约定：

- **管理端**发出的请求，统一使用**/admin**作为前缀。
- **用户端**发出的请求，统一使用**/user**作为前缀。



#### 1.1.3 表设计

新增员工，其实就是将我们新增页面录入的员工数据插入到employee表。

**employee表结构：**

| **字段名**  | **数据类型** | **说明**     | **备注**    |
| ----------- | ------------ | ------------ | ----------- |
| id          | bigint       | 主键         | 自增        |
| name        | varchar(32)  | 姓名         |             |
| username    | varchar(32)  | 用户名       | 唯一        |
| password    | varchar(64)  | 密码         |             |
| phone       | varchar(11)  | 手机号       |             |
| sex         | varchar(2)   | 性别         |             |
| id_number   | varchar(18)  | 身份证号     |             |
| status      | Int          | 账号状态     | 1正常 0锁定 |
| create_time | Datetime     | 创建时间     |             |
| update_time | datetime     | 最后修改时间 |             |
| create_user | bigint       | 创建人id     |             |
| update_user | bigint       | 最后修改人id |             |

其中，employee表中的status字段已经设置了默认值1，表示状态正常。

![image-20221111180159188](http://stofu80ry.sabkt.gdipper.com/picture/image-20221111180159188.png)  



### 1.2 代码开发

#### 1.2.1 设计DTO类

**根据新增员工接口设计对应的DTO**

前端传递参数列表：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111164002448.png" alt="image-20221111164002448" style="zoom:50%;" /> 

**思考：**是否可以使用对应的实体类来接收呢？



<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111164453341.png" alt="image-20221111164453341" style="zoom:50%;" /> 

**注意：** **当前端提交的数据和实体类中对应的属性差别比较大时，建议使用DTO来封装数据**

由于上述传入参数和实体类有较大差别，所以自定义DTO类。

进入sky-pojo模块，在com.sky.dto包下，已定义EmployeeDTO



```java
package com.sky.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class EmployeeDTO implements Serializable {

    private Long id;

    private String username;

    private String name;

    private String phone;

    private String sex;

    private String idNumber;

}
```



#### 1.2.2 Controller层

 **EmployeeController中创建新增员工方法**

进入到sky-server模块中，在com.sky.controller.admin包下，在EmployeeController中创建新增员工方法，接收前端提交的参数。

```java
	/**
     * 新增员工
     * @param employeeDTO
     * @return
     */
    @PostMapping
    @ApiOperation("新增员工")
    public Result save(@RequestBody EmployeeDTO employeeDTO){
        log.info("新增员工：{}",employeeDTO);
        employeeService.save(employeeDTO);//该方法后续步骤会定义
        return Result.success();
    }
```

**注：**Result类定义了后端统一返回结果格式。

进入sky-common模块，在com.sky.result包下定义了Result.java

```java
package com.sky.result;

import lombok.Data;

import java.io.Serializable;

/**
 * 后端统一返回结果
 * @param <T>
 */
@Data
public class Result<T> implements Serializable {

    private Integer code; //编码：1成功，0和其它数字为失败
    private String msg; //错误信息
    private T data; //数据

    public static <T> Result<T> success() {
        Result<T> result = new Result<T>();
        result.code = 1;
        return result;
    }

    public static <T> Result<T> success(T object) {
        Result<T> result = new Result<T>();
        result.data = object;
        result.code = 1;
        return result;
    }

    public static <T> Result<T> error(String msg) {
        Result result = new Result();
        result.msg = msg;
        result.code = 0;
        return result;
    }

}
```



#### 1.2.3 Service层接口

**在EmployeeService接口中声明新增员工方法**

进入到sky-server模块中,com.sky.server.EmployeeService

```java
	/**
     * 新增员工
     * @param employeeDTO
     */
    void save(EmployeeDTO employeeDTO);
```



#### 1.2.4 Service层实现类

**在EmployeeServiceImpl中实现新增员工方法**

com.sky.server.impl.EmployeeServiceImpl中创建方法

```java
	/**
     * 新增员工
     *
     * @param employeeDTO
     */
    public void save(EmployeeDTO employeeDTO) {
        Employee employee = new Employee();

        //对象属性拷贝
        BeanUtils.copyProperties(employeeDTO, employee);

        //设置账号的状态，默认正常状态 1表示正常 0表示锁定
        employee.setStatus(StatusConstant.ENABLE);

        //设置密码，默认密码123456
        employee.setPassword(DigestUtils.md5DigestAsHex(PasswordConstant.DEFAULT_PASSWORD.getBytes()));

        //设置当前记录的创建时间和修改时间
        employee.setCreateTime(LocalDateTime.now());
        employee.setUpdateTime(LocalDateTime.now());

        //设置当前记录创建人id和修改人id
        employee.setCreateUser(10L);//目前写个假数据，后期修改
        employee.setUpdateUser(10L);

        employeeMapper.insert(employee);//后续步骤定义
    }
```



在sky-common模块com.sky.constants包下已定义StatusConstant.java

```java
package com.sky.constant;

/**
 * 状态常量，启用或者禁用
 */
public class StatusConstant {

    //启用
    public static final Integer ENABLE = 1;

    //禁用
    public static final Integer DISABLE = 0;
}

```



#### 1.2.5 Mapper层

**在EmployeeMapper中声明insert方法**

com.sky.EmployeeMapper中添加方法

```java
	/**
     * 插入员工数据
     * @param employee
     */
    @Insert("insert into employee (name, username, password, phone, sex, id_number, create_time, update_time, create_user, update_user,status) " +
            "values " +
            "(#{name},#{username},#{password},#{phone},#{sex},#{idNumber},#{createTime},#{updateTime},#{createUser},#{updateUser},#{status})")
    void insert(Employee employee);
```



在application.yml中已开启驼峰命名，故id_number和idNumber可对应。

```yaml
mybatis:
  configuration:
    #开启驼峰命名
    map-underscore-to-camel-case: true
```



### 1.3 功能测试

代码已经发开发完毕，对新增员工功能进行测试。

**功能测试实现方式：**

- 通过接口文档测试
- 通前后端联调测试

接下来我们使用上述两种方式分别测试。



#### 1.3.1 接口文档测试

**启动服务：**访问http://localhost:8080/doc.html，进入新增员工接口



<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111184934153.png" alt="image-20221111184934153" style="zoom:50%;" />   

json数据：

```json
{
  "id": 0,
  "idNumber": "111222333444555666",
  "name": "xiaozhi",
  "phone": "13812344321",
  "sex": "1",
  "username": "小智"
}
```

响应码：401 报错

**通过断点调试：**进入到JwtTokenAdminInterceptor拦截器

```java
 	/**
     * 校验jwt
     *
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //判断当前拦截到的是Controller的方法还是其他资源
        if (!(handler instanceof HandlerMethod)) {
            //当前拦截到的不是动态方法，直接放行
            return true;
        }

        //1、从请求头中获取令牌 jwtProperties.getAdminTokenName()获取为token
        String token = request.getHeader(jwtProperties.getAdminTokenName());

        //2、校验令牌
        try {
            log.info("jwt校验:{}", token);
            Claims claims = JwtUtil.parseJWT(jwtProperties.getAdminSecretKey(), token);
            Long empId = Long.valueOf(claims.get(JwtClaimsConstant.EMP_ID).toString());
            log.info("当前员工id：", empId);
            //3、通过，放行
            return true;
        } catch (Exception ex) {
            //4、不通过，响应401状态码
            response.setStatus(401);
            return false;
        }
    }
```

**报错原因：**由于JWT令牌校验失败，导致EmployeeController的save方法没有被调用

**解决方法：**调用员工登录接口获得一个合法的JWT令牌

使用admin用户登录获取令牌

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111185649636.png" alt="image-20221111185649636" style="zoom: 50%;" /> 

**添加令牌：**

将合法的JWT令牌添加到全局参数中

文档管理-->全局参数设置-->添加参数

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111185901726.png" alt="image-20221111185901726" style="zoom: 50%;" /> 

**接口测试：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111190132481.png" alt="image-20221111190132481" style="zoom:50%;" /> 

其中，请求头部含有JWT令牌

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111190248268.png" alt="image-20221111190248268" style="zoom:50%;" /> 

**查看employee表：**

![image-20221111191624908](http://stofu80ry.sabkt.gdipper.com/picture/image-20221111191624908.png)

测试成功。



#### 1.3.2 前后端联调测试

启动nginx,访问 http://localhost

登录-->员工管理-->添加员工

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111192339271.png" alt="image-20221111192339271" style="zoom:50%;" /> 

保存后，查看employee表

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111192446950.png" alt="image-20221111192446950"  /> 

测试成功。



**注意：**由于开发阶段前端和后端是并行开发的，后端完成某个功能后，此时前端对应的功能可能还没有开发完成，
导致无法进行前后端联调测试。所以在开发阶段，后端测试主要以接口文档测试为主。



### 1.4 代码完善

目前，程序存在的问题主要有两个：

- 录入的用户名已存，抛出的异常后没有处理
- 新增员工时，创建人id和修改人id设置为固定值

接下来，我们对上述两个问题依次进行分析和解决。



#### 1.4.1 问题一

**描述：**录入的用户名已存，抛出的异常后没有处理

**分析：**

新增username=zhangsan的用户，若employee表中之前已存在。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111193700895.png" alt="image-20221111193700895" style="zoom: 50%;" /> 

后台报错信息：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111194049620.png" alt="image-20221111194049620" style="zoom:80%;" /> 

查看employee表结构：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111194131787.png" alt="image-20221111194131787" style="zoom:50%;" /> 

发现，username已经添加了唯一约束，不能重复。

**解决：**

通过全局异常处理器来处理。

进入到sky-server模块，com.sky.hander包下，GlobalExceptionHandler.java添加方法

```java
	/**
     * 处理SQL异常
     * @param ex
     * @return
     */
    @ExceptionHandler
    public Result exceptionHandler(SQLIntegrityConstraintViolationException ex){
        //Duplicate entry 'zhangsan' for key 'employee.idx_username'
        String message = ex.getMessage();
        if(message.contains("Duplicate entry")){
            String[] split = message.split(" ");
            String username = split[2];
            String msg = username + MessageConstant.ALREADY_EXISTS;
            return Result.error(msg);
        }else{
            return Result.error(MessageConstant.UNKNOWN_ERROR);
        }
    }
```

进入到sky-common模块，在MessageConstant.java添加

```java
public static final String ALREADY_EXISTS = "已存在";
```

再次，接口测试：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111195521095.png" alt="image-20221111195521095" style="zoom:50%;" /> 



####  1.4.2 问题二

**描述**：新增员工时，创建人id和修改人id设置为固定值

**分析：**

```java
	/**
     * 新增员工
     *
     * @param employeeDTO
     */
    public void save(EmployeeDTO employeeDTO) {
        Employee employee = new Employee();
        //................
        //////////当前设置的id为固定值10//////////
        employee.setCreateUser(10L);
        employee.setUpdateUser(10L);
        //////////////////////////////////////
        //.................................

        employeeMapper.insert(employee);//后续步骤定义
    }
```

**解决：**

通过某种方式动态获取当前登录员工的id。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111201922482.png" alt="image-20221111201922482" style="zoom:50%;" /> 

员工登录成功后会生成JWT令牌并响应给前端：

在sky-server模块

```java
package com.sky.controller.admin;
/**
 * 员工管理
 */
@RestController
@RequestMapping("/admin/employee")
@Slf4j
@Api(tags = "员工相关接口")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private JwtProperties jwtProperties;

    /**
     * 登录
     *
     * @param employeeLoginDTO
     * @return
     */
    @PostMapping("/login")
    @ApiOperation(value = "员工登录")
    public Result<EmployeeLoginVO> login(@RequestBody EmployeeLoginDTO employeeLoginDTO) {
        //.........

        //登录成功后，生成jwt令牌
        Map<String, Object> claims = new HashMap<>();
        claims.put(JwtClaimsConstant.EMP_ID, employee.getId());
        String token = JwtUtil.createJWT(
                jwtProperties.getAdminSecretKey(),
                jwtProperties.getAdminTtl(),
                claims);

        //............

        return Result.success(employeeLoginVO);
    }

}
```

后续请求中，前端会携带JWT令牌，通过JWT令牌可以解析出当前登录员工id：

JwtTokenAdminInterceptor.java

```java
package com.sky.interceptor;

/**
 * jwt令牌校验的拦截器
 */
@Component
@Slf4j
public class JwtTokenAdminInterceptor implements HandlerInterceptor {

    @Autowired
    private JwtProperties jwtProperties;

    /**
     * 校验jwt
     *
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
       
		//..............
        
        //1、从请求头中获取令牌
        String token = request.getHeader(jwtProperties.getAdminTokenName());

        //2、校验令牌
        try {
            log.info("jwt校验:{}", token);
            Claims claims = JwtUtil.parseJWT(jwtProperties.getAdminSecretKey(), token);
            Long empId = Long.valueOf(claims.get(JwtClaimsConstant.EMP_ID).toString());
            log.info("当前员工id：", empId);
            //3、通过，放行
            return true;
        } catch (Exception ex) {
            //4、不通过，响应401状态码
            response.setStatus(401);
            return false;
        }
    }
}
```

**思考：**解析出登录员工id后，如何传递给Service的save方法？

通过ThreadLocal进行传递。



#### 1.4.3 ThreadLocal

**介绍：**

ThreadLocal 并不是一个Thread，而是Thread的局部变量。
ThreadLocal为每个线程提供单独一份存储空间，具有线程隔离的效果，只有在线程内才能获取到对应的值，线程外则不能访问。

**常用方法：**

- public void set(T value) 	设置当前线程的线程局部变量的值
- public T get() 		返回当前线程所对应的线程局部变量的值
- public void remove()        移除当前线程的线程局部变量

对ThreadLocal有了一定认识后，接下来继续解决**问题二**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111212349365.png" alt="image-20221111212349365" style="zoom:67%;" /> 

初始工程中已经封装了 ThreadLocal 操作的工具类：

在sky-common模块

```java
package com.sky.context;

public class BaseContext {

    public static ThreadLocal<Long> threadLocal = new ThreadLocal<>();

    public static void setCurrentId(Long id) {
        threadLocal.set(id);
    }

    public static Long getCurrentId() {
        return threadLocal.get();
    }

    public static void removeCurrentId() {
        threadLocal.remove();
    }

}
```

在拦截器中解析出当前登录员工id，并放入线程局部变量中：

在sky-server模块中，拦截器：

```java
package com.sky.interceptor;

/**
 * jwt令牌校验的拦截器
 */
@Component
@Slf4j
public class JwtTokenAdminInterceptor implements HandlerInterceptor {

    @Autowired
    private JwtProperties jwtProperties;

    /**
     * 校验jwt
     *
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        
		//.............................
       
        //2、校验令牌
        try {
            //.................
            Claims claims = JwtUtil.parseJWT(jwtProperties.getAdminSecretKey(), token);
            Long empId = Long.valueOf(claims.get(JwtClaimsConstant.EMP_ID).toString());
            log.info("当前员工id：", empId);
            /////将用户id存储到ThreadLocal////////
            BaseContext.setCurrentId(empId);
            ////////////////////////////////////
            //3、通过，放行
            return true;
        } catch (Exception ex) {
            //......................
        }
    }
}
```

在Service中获取线程局部变量中的值：

```java
	/**
     * 新增员工
     *
     * @param employeeDTO
     */
    public void save(EmployeeDTO employeeDTO) {
        //.............................

        //设置当前记录创建人id和修改人id
        employee.setCreateUser(BaseContext.getCurrentId());//目前写个假数据，后期修改
        employee.setUpdateUser(BaseContext.getCurrentId());

        employeeMapper.insert(employee);
    }
```

测试：使用admin(id=1)用户登录后添加一条记录

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111214044510.png" alt="image-20221111214044510" style="zoom:50%;" /> 

查看employee表记录

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111214354053.png" alt="image-20221111214354053" style="zoom:50%;" /> 



### 1.5 代码提交

代码提交并推送到git

## 2. 员工分页查询⭐⭐

### 2.1 需求分析和设计

#### 2.1.1 产品原型

系统中的员工很多的时候，如果在一个页面中全部展示出来会显得比较乱，不便于查看，所以一般的系统中都会以分页的方式来展示列表数据。而在我们的分页查询页面中, 除了分页条件以外，还有一个查询条件 "员工姓名"。

**查询员工原型：**



<img src="C:/Users/86157/Downloads/讲义/day02/assets/image-20221111215309289.png" alt="image-20221111215309289" style="zoom:67%;" /> 

**业务规则**：

- 根据页码展示员工信息
- 每页展示10条数据
- 分页查询时可以根据需要，输入员工姓名进行查询



#### 2.1.2 接口设计

找到资料-->项目接口文档-->苍穹外卖-管理端接口.html

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221111220031113.png" alt="image-20221111220031113" style="zoom:50%;" /><img src="C:/Users/86157/Downloads/讲义/day02/assets/image-20221111220041965.png" alt="image-20221111220041965" style="zoom:50%;" />

**注意事项：**

- 请求参数类型为Query，不是json格式提交，在路径后直接拼接。/admin/employee/page?name=zhangsan
- 返回数据中records数组中使用Employee实体类对属性进行封装。



### 2.2 代码开发

#### 2.2.1 设计DTO类

根据请求参数进行封装，在sky-pojo模块中

```java
package com.sky.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class EmployeePageQueryDTO implements Serializable {

    //员工姓名
    private String name;

    //页码
    private int page;

    //每页显示记录数
    private int pageSize;

}

```



#### 2.2.2 封装PageResult

后面所有的分页查询，统一都封装为PageResult对象。

在sky-common模块

```java
package com.sky.result;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

/**
 * 封装分页查询结果
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageResult implements Serializable {

    private long total; //总记录数

    private List records; //当前页数据集合

}

```

员工信息分页查询后端返回的对象类型为: Result<PageResult>

```java
package com.sky.result;

import lombok.Data;

import java.io.Serializable;

/**
 * 后端统一返回结果
 * @param <T>
 */
@Data
public class Result<T> implements Serializable {

    private Integer code; //编码：1成功，0和其它数字为失败
    private String msg; //错误信息
    private T data; //数据

    public static <T> Result<T> success() {
        Result<T> result = new Result<T>();
        result.code = 1;
        return result;
    }

    public static <T> Result<T> success(T object) {
        Result<T> result = new Result<T>();
        result.data = object;
        result.code = 1;
        return result;
    }

    public static <T> Result<T> error(String msg) {
        Result result = new Result();
        result.msg = msg;
        result.code = 0;
        return result;
    }

}
```



#### 2.2.3 Controller层

在sky-server模块中，com.sky.controller.admin.EmployeeController中添加分页查询方法。

```java
	/**
     * 员工分页查询
     * @param employeePageQueryDTO
     * @return
     */
    @GetMapping("/page")
    @ApiOperation("员工分页查询")
    public Result<PageResult> page(EmployeePageQueryDTO employeePageQueryDTO){
        log.info("员工分页查询，参数为：{}", employeePageQueryDTO);
        PageResult pageResult = employeeService.pageQuery(employeePageQueryDTO);//后续定义
        return Result.success(pageResult);
    }
```



#### 2.2.4 Service层接口

在EmployeeService接口中声明pageQuery方法：

```java
	/**
     * 分页查询
     * @param employeePageQueryDTO
     * @return
     */
    PageResult pageQuery(EmployeePageQueryDTO employeePageQueryDTO);
```



#### 2.2.5 Service层实现类

在EmployeeServiceImpl中实现pageQuery方法：

```java
	/**
     * 分页查询
     *
     * @param employeePageQueryDTO
     * @return
     */
    public PageResult pageQuery(EmployeePageQueryDTO employeePageQueryDTO) {
        // select * from employee limit 0,10
        //开始分页查询
        PageHelper.startPage(employeePageQueryDTO.getPage(), employeePageQueryDTO.getPageSize());

        Page<Employee> page = employeeMapper.pageQuery(employeePageQueryDTO);//后续定义

        long total = page.getTotal();
        List<Employee> records = page.getResult();

        return new PageResult(total, records);
    }
```

**注意：**此处使用 mybatis 的分页插件 PageHelper 来简化分页代码的开发。底层基于 mybatis 的拦截器实现。

故在pom.xml文中添加依赖(初始工程已添加)

```xml
<dependency>
   <groupId>com.github.pagehelper</groupId>
   <artifactId>pagehelper-spring-boot-starter</artifactId>
   <version>${pagehelper}</version>
</dependency>
```



#### 2.2.6 Mapper层

在 EmployeeMapper 中声明 pageQuery 方法：

```java
	/**
     * 分页查询
     * @param employeePageQueryDTO
     * @return
     */
    Page<Employee> pageQuery(EmployeePageQueryDTO employeePageQueryDTO);
```

在 src/main/resources/mapper/EmployeeMapper.xml 中编写SQL：

```sql
<select id="pageQuery" resultType="com.sky.entity.Employee">
        select * from employee
        <where>
            <if test="name != null and name != ''">
                and name like concat('%',#{name},'%')
            </if>
        </where>
        order by create_time desc
    </select>
```



### 2.3 功能测试

### 

可以通过接口文档进行测试，也可以进行前后端联调测试。

接下来使用两种方式分别测试：



#### 2.3.1 接口文档测试

**重启服务：**访问http://localhost:8080/doc.html，进入员工分页查询

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112101848657.png" alt="image-20221112101848657" style="zoom:67%;" /> 

**响应结果：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112101946022.png" alt="image-20221112101946022" style="zoom:50%;" /> 



#### 2.3.2 前后端联调测试⭐⭐

**点击员工管理**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112102441810.png" alt="image-20221112102441810" style="zoom:50%;" />  



**输入员工姓名为zhangsan**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112102540938.png" alt="image-20221112102540938" style="zoom:50%;" /> 

不难发现，**最后操作时间格式**不清晰，在**代码完善**中解决。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112102745437.png" alt="image-20221112102745437" style="zoom:50%;" /> 



### 2.4 代码完善⭐⭐⭐

**问题描述：**操作时间字段显示有问题。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112103235539.png" alt="image-20221112103235539" style="zoom:50%;" /> 



**解决方式：**

**1).  方式一**

在属性上加上注解，对日期进行格式化

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112103501581.png" alt="image-20221112103501581" style="zoom:67%;" /> 

但这种方式，需要在每个时间属性上都要加上该注解，使用较麻烦，不能全局处理。



**2).  方式二（推荐 )**

在WebMvcConfiguration中扩展SpringMVC的消息转换器，统一对日期类型进行格式处理

```java
	/**
     * 扩展Spring MVC框架的消息转化器
     * @param converters
     */
    protected void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
        log.info("扩展消息转换器...");
        //创建一个消息转换器对象
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        //需要为消息转换器设置一个对象转换器，对象转换器可以将Java对象序列化为json数据
        converter.setObjectMapper(new JacksonObjectMapper());
        //将自己的消息转化器加入容器中
        converters.add(0,converter);
    }
```

添加后，再次测试

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112104305608.png" alt="image-20221112104305608" style="zoom:67%;" /> 

时间格式定义，sky-common模块中

```java
package com.sky.json;

public class JacksonObjectMapper extends ObjectMapper {

	//.......
    public static final String DEFAULT_DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm";
    //.......

    }
}
```

### 2.5 代码提交

## 3. 启用禁用员工账号

### 3.1 需求分析与设计

#### 3.1.1 产品原型

在员工管理列表页面，可以对某个员工账号进行启用或者禁用操作。账号禁用的员工不能登录系统，启用后的员工可以正常登录。如果某个员工账号状态为正常，则按钮显示为 "禁用"，如果员工账号状态为已禁用，则按钮显示为"启用"。

**启禁用员工原型：**



<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112112359233.png" alt="image-20221112112359233" style="zoom:67%;" /> 

**业务规则：**

- 可以对状态为“启用” 的员工账号进行“禁用”操作
- 可以对状态为“禁用”的员工账号进行“启用”操作
- 状态为“禁用”的员工账号不能登录系统



#### 3.1.2 接口设计

<img src="C:/Users/86157/Downloads/讲义/day02/assets/image-20221112112728333.png" alt="image-20221112112728333" style="zoom:50%;" /><img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112112739680.png" alt="image-20221112112739680" style="zoom:50%;" />



1). 路径参数携带状态值。

2). 同时，把id传递过去，明确对哪个用户进行操作。

3). 返回数据code状态是必须，其它是非必须。



### 3.2 代码开发

#### 3.2.1 Controller层

在sky-server模块中，根据接口设计中的请求参数形式对应的在 EmployeeController 中创建启用禁用员工账号的方法：

```java
	/**
     * 启用禁用员工账号
     * @param status
     * @param id
     * @return
     */
    @PostMapping("/status/{status}")
    @ApiOperation("启用禁用员工账号")
    public Result startOrStop(@PathVariable Integer status,Long id){
        log.info("启用禁用员工账号：{},{}",status,id);
        employeeService.startOrStop(status,id);//后绪步骤定义
        return Result.success();
    }
```



#### 3.2.2 Service层接口

在 EmployeeService 接口中声明启用禁用员工账号的业务方法：

```java
	/**
     * 启用禁用员工账号
     * @param status
     * @param id
     */
    void startOrStop(Integer status, Long id);
```



#### 3.2.3 Service层实现类

在 EmployeeServiceImpl 中实现启用禁用员工账号的业务方法：

```java
	/**
     * 启用禁用员工账号
     *
     * @param status
     * @param id
     */
    public void startOrStop(Integer status, Long id) {
        Employee employee = Employee.builder()
                .status(status)
                .id(id)
                .build();

        employeeMapper.update(employee);
    }
```



#### 3.2.4 Mapper层⭐⭐

在 EmployeeMapper 接口中声明 update 方法：

```java
	/**
     * 根据主键动态修改属性
     * @param employee
     */
    void update(Employee employee);
```

在 EmployeeMapper.xml 中编写SQL：

```sql
<update id="update" parameterType="Employee">
    update employee
    <set>
        <if test="name != null">name = #{name},</if>
        <if test="username != null">username = #{username},</if>
        <if test="password != null">password = #{password},</if>
        <if test="phone != null">phone = #{phone},</if>
        <if test="sex != null">sex = #{sex},</if>
        <if test="idNumber != null">id_Number = #{idNumber},</if>
        <if test="updateTime != null">update_Time = #{updateTime},</if>
        <if test="updateUser != null">update_User = #{updateUser},</if>
        <if test="status != null">status = #{status},</if>
    </set>
    where id = #{id}
</update>
```



### 3.3 功能测试

#### 3.3.1 接口文档测试

**测试前，**查询employee表中员工账号状态

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112143142457.png" alt="image-20221112143142457" style="zoom:67%;" /> 

**开始测试**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112143316357.png" alt="image-20221112143316357" style="zoom:50%;" /> 

**测试完毕后**，再次查询员工账号状态

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112143428676.png" alt="image-20221112143428676" style="zoom: 67%;" /> 



#### 3.3.2 前后端联调测试

**测试前：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112143552246.png" alt="image-20221112143552246" style="zoom: 33%;" /> 

**点击启用:**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112143655318.png" alt="image-20221112143655318" style="zoom:33%;" /> 



### 3.4 代码提交

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112143827631.png" alt="image-20221112143827631" style="zoom:50%;" /> 

后续步骤和上述功能代码提交一致，不再赘述。



## 4. 编辑员工

### 4.1 需求分析与设计

#### 4.1.1 产品原型

在员工管理列表页面点击 "编辑" 按钮，跳转到编辑页面，在编辑页面回显员工信息并进行修改，最后点击 "保存" 按钮完成编辑操作。

**员工列表原型：**



<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112144731759.png" alt="image-20221112144731759" style="zoom: 67%;" /> 

**修改页面原型**：

注：点击修改时，数据应该正常回显到修改页面。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112144842825.png" alt="image-20221112144842825" style="zoom: 67%;" /> 



#### 4.1.2 接口设计

根据上述原型图分析，编辑员工功能涉及到两个接口：

- 根据id查询员工信息
- 编辑员工信息

**1). 根据id查询员工信息**

<img src="C:/Users/86157/Downloads/讲义/day02/assets/image-20221112145607939.png" alt="image-20221112145607939" style="zoom:50%;" /> <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112145619775.png" alt="image-20221112145619775" style="zoom:50%;" />



**2). 编辑员工信息**

<img src="C:/Users/86157/Downloads/讲义/day02/assets/image-20221112145643769.png" alt="image-20221112145643769" style="zoom:50%;" /> <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112145659035.png" alt="image-20221112145659035" style="zoom:50%;" />

**注:因为是修改功能，请求方式可设置为PUT。**



### 4.2 代码开发

#### 4.2.1 回显员工信息功能

**1). Controller层**

在 EmployeeController 中创建 getById 方法：

```java
	/**
     * 根据id查询员工信息
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    @ApiOperation("根据id查询员工信息")
    public Result<Employee> getById(@PathVariable Long id){
        Employee employee = employeeService.getById(id);
        return Result.success(employee);
    }
```



**2). Service层接口**

在 EmployeeService 接口中声明 getById 方法：

```java
    /**
     * 根据id查询员工
     * @param id
     * @return
     */
    Employee getById(Long id);
```



**3). Service层实现类**

在 EmployeeServiceImpl 中实现 getById 方法：

```java
 	/**
     * 根据id查询员工
     *
     * @param id
     * @return
     */
    public Employee getById(Long id) {
        Employee employee = employeeMapper.getById(id);
        employee.setPassword("****");
        return employee;
    }
```



**4). Mapper层**

在 EmployeeMapper 接口中声明 getById 方法：

```java
	/**
     * 根据id查询员工信息
     * @param id
     * @return
     */
    @Select("select * from employee where id = #{id}")
    Employee getById(Long id);
```



#### 4.2.2 修改员工信息功能

**1). Controller层**

在 EmployeeController 中创建 update 方法：

```java
	/**
     * 编辑员工信息
     * @param employeeDTO
     * @return
     */
    @PutMapping
    @ApiOperation("编辑员工信息")
    public Result update(@RequestBody EmployeeDTO employeeDTO){
        log.info("编辑员工信息：{}", employeeDTO);
        employeeService.update(employeeDTO);
        return Result.success();
    }
```



**2). Service层接口**

在 EmployeeService 接口中声明 update 方法：

```java
    /**
     * 编辑员工信息
     * @param employeeDTO
     */
    void update(EmployeeDTO employeeDTO);
```



**3). Service层实现类**

在 EmployeeServiceImpl 中实现 update 方法：

```java
 	/**
     * 编辑员工信息
     *
     * @param employeeDTO
     */
    public void update(EmployeeDTO employeeDTO) {
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeDTO, employee);

        employee.setUpdateTime(LocalDateTime.now());
        employee.setUpdateUser(BaseContext.getCurrentId());

        employeeMapper.update(employee);
    }
```

在实现**启用禁用员工账号**功能时，已实现employeeMapper.update(employee)，在此不需写Mapper层代码。



### 4.3 功能测试

#### 4.3.1 接口文档测试

分别测试**根据id查询员工信息**和**编辑员工信息**两个接口

**1). 根据id查询员工信息**

查询employee表中的数据，以id=4的记录为例

![image-20221112154253995](http://stofu80ry.sabkt.gdipper.com/picture/image-20221112154253995.png)

开始测试

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112154411245.png" alt="image-20221112154411245" style="zoom:50%;" /> 

获取到了id=4的相关员工信息

**2). 编辑员工信息**

修改id=4的员工信息，**name**由**zhangsan**改为**张三丰**，**username**由**张三**改为**zhangsanfeng**。

 <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112155001414.png" alt="image-20221112155001414" style="zoom:50%;" /> 

查看employee表数据

![image-20221112155029547](http://stofu80ry.sabkt.gdipper.com/picture/image-20221112155029547.png)



#### 4.3.2 前后端联调测试

进入到员工列表查询

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112155206712.png" alt="image-20221112155206712" style="zoom:50%;" /> 

对员工姓名为杰克的员工数据修改，点击修改，数据已回显

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112155430652.png" alt="image-20221112155430652" style="zoom:50%;" /> 

修改后，点击保存

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112155559298.png" alt="image-20221112155559298" style="zoom:50%;" /> 

### 4.4 代码提交

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112155735984.png" alt="image-20221112155735984" style="zoom:50%;" /> 

后续步骤和上述功能代码提交一致，不再赘述。



## 5. 导入分类模块功能代码

### 5.1 需求分析与设计

#### 5.1.1 产品原型

后台系统中可以管理分类信息，分类包括两种类型，分别是 **菜品分类** 和 **套餐分类** 。

先来分析**菜品分类**相关功能。

**新增菜品分类：**当我们在后台系统中添加菜品时需要选择一个菜品分类，在移动端也会按照菜品分类来展示对应的菜品。

**菜品分类分页查询：**系统中的分类很多的时候，如果在一个页面中全部展示出来会显得比较乱，不便于查看，所以一般的系统中都会以分页的方式来展示列表数据。

**根据id删除菜品分类：**在分类管理列表页面，可以对某个分类进行删除操作。需要注意的是当分类关联了菜品或者套餐时，此分类不允许删除。

**修改菜品分类：**在分类管理列表页面点击修改按钮，弹出修改窗口，在修改窗口回显分类信息并进行修改，最后点击确定按钮完成修改操作。

**启用禁用菜品分类：**在分类管理列表页面，可以对某个分类进行启用或者禁用操作。

**分类类型查询：**当点击分类类型下拉框时，从数据库中查询所有的菜品分类数据进行展示。



**分类管理原型：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112160907419.png" alt="image-20221112160907419" style="zoom:50%;" /> 

**业务规则：**

- 分类名称必须是唯一的
- 分类按照类型可以分为菜品分类和套餐分类
- 新添加的分类状态默认为“禁用”



#### 5.1.2 接口设计

根据上述原型图分析，菜品分类模块共涉及6个接口。

- 新增分类
- 分类分页查询
- 根据id删除分类
- 修改分类
- 启用禁用分类
- 根据类型查询分类

接下来，详细地分析每个接口。

找到资料-->项目接口文档-->苍穹外卖-管理端接口.html

**1). 新增分类**

<img src="C:/Users/86157/Downloads/讲义/day02/assets/image-20221112163011291.png" alt="image-20221112163011291" style="zoom: 67%;" /> <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112163044547.png" alt="image-20221112163044547" style="zoom:67%;" />

**2). 分类分页查询**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112163209383.png" alt="image-20221112163209383" style="zoom:50%;" /><img src="C:/Users/86157/Downloads/讲义/day02/assets/image-20221112163233212.png" alt="image-20221112163233212" style="zoom:50%;" />

**3). 根据id删除分类**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112163323554.png" alt="image-20221112163323554" style="zoom:50%;" /> 

**4). 修改分类**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112163424457.png" alt="image-20221112163424457" style="zoom:50%;" /> <img src="C:/Users/86157/Downloads/讲义/day02/assets/image-20221112163445296.png" alt="image-20221112163445296" style="zoom:50%;" />

**5). 启用禁用分类**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112163557247.png" alt="image-20221112163557247" style="zoom:50%;" /> <img src="C:/Users/86157/Downloads/讲义/day02/assets/image-20221112163622896.png" alt="image-20221112163622896" style="zoom:50%;" />

**6). 根据类型查询分类**

<img src="C:/Users/86157/Downloads/讲义/day02/assets/image-20221112163806318.png" alt="image-20221112163806318" style="zoom:50%;" /> <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112163839168.png" alt="image-20221112163839168" style="zoom:50%;" />

#### 5.1.3 表设计

**category表结构：**

| **字段名**  | **数据类型** | **说明**     | **备注**            |
| ----------- | ------------ | ------------ | ------------------- |
| id          | bigint       | 主键         | 自增                |
| name        | varchar(32)  | 分类名称     | 唯一                |
| type        | int          | 分类类型     | 1菜品分类 2套餐分类 |
| sort        | int          | 排序字段     | 用于分类数据的排序  |
| status      | int          | 状态         | 1启用 0禁用         |
| create_time | datetime     | 创建时间     |                     |
| update_time | datetime     | 最后修改时间 |                     |
| create_user | bigint       | 创建人id     |                     |
| update_user | bigint       | 最后修改人id |                     |



### 5.2 代码导入

导入资料中的分类管理模块功能代码即可

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112164259732.png" alt="image-20221112164259732" style="zoom:50%;" /> 

可按照mapper-->service-->controller依次导入，这样代码不会显示相应的报错。

进入到sky-server模块中

#### 5.2.1 Mapper层

**DishMapper.java**

```java
package com.sky.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface DishMapper {

    /**
     * 根据分类id查询菜品数量
     * @param categoryId
     * @return
     */
    @Select("select count(id) from dish where category_id = #{categoryId}")
    Integer countByCategoryId(Long categoryId);

}

```

**SetmealMapper.java**

```java
package com.sky.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface SetmealMapper {

    /**
     * 根据分类id查询套餐的数量
     * @param id
     * @return
     */
    @Select("select count(id) from setmeal where category_id = #{categoryId}")
    Integer countByCategoryId(Long id);

}
```

**CategoryMapper.java**

```java
package com.sky.mapper;

import com.github.pagehelper.Page;
import com.sky.dto.CategoryPageQueryDTO;
import com.sky.entity.Category;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CategoryMapper {

    /**
     * 插入数据
     * @param category
     */
    @Insert("insert into category(type, name, sort, status, create_time, update_time, create_user, update_user)" +
            " VALUES" +
            " (#{type}, #{name}, #{sort}, #{status}, #{createTime}, #{updateTime}, #{createUser}, #{updateUser})")
    void insert(Category category);

    /**
     * 分页查询
     * @param categoryPageQueryDTO
     * @return
     */
    Page<Category> pageQuery(CategoryPageQueryDTO categoryPageQueryDTO);

    /**
     * 根据id删除分类
     * @param id
     */
    @Delete("delete from category where id = #{id}")
    void deleteById(Long id);

    /**
     * 根据id修改分类
     * @param category
     */
    void update(Category category);

    /**
     * 根据类型查询分类
     * @param type
     * @return
     */
    List<Category> list(Integer type);
}
```

**CategoryMapper.xml**,进入到resources/mapper目录下

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.CategoryMapper">

    <select id="pageQuery" resultType="com.sky.entity.Category">
        select * from category
        <where>
            <if test="name != null and name != ''">
                and name like concat('%',#{name},'%')
            </if>
            <if test="type != null">
                and type = #{type}
            </if>
        </where>
        order by sort asc , create_time desc
    </select>

    <update id="update" parameterType="Category">
        update category
        <set>
            <if test="type != null">
                type = #{type},
            </if>
            <if test="name != null">
                name = #{name},
            </if>
            <if test="sort != null">
                sort = #{sort},
            </if>
            <if test="status != null">
                status = #{status},
            </if>
            <if test="updateTime != null">
                update_time = #{updateTime},
            </if>
            <if test="updateUser != null">
                update_user = #{updateUser}
            </if>
        </set>
        where id = #{id}
    </update>

    <select id="list" resultType="Category">
        select * from category
        where status = 1
        <if test="type != null">
            and type = #{type}
        </if>
        order by sort asc,create_time desc
    </select>
</mapper>

```



#### 5.2.2 Service层

**CategoryService.java**

```java
package com.sky.service;

import com.sky.dto.CategoryDTO;
import com.sky.dto.CategoryPageQueryDTO;
import com.sky.entity.Category;
import com.sky.result.PageResult;
import java.util.List;

public interface CategoryService {

    /**
     * 新增分类
     * @param categoryDTO
     */
    void save(CategoryDTO categoryDTO);

    /**
     * 分页查询
     * @param categoryPageQueryDTO
     * @return
     */
    PageResult pageQuery(CategoryPageQueryDTO categoryPageQueryDTO);

    /**
     * 根据id删除分类
     * @param id
     */
    void deleteById(Long id);

    /**
     * 修改分类
     * @param categoryDTO
     */
    void update(CategoryDTO categoryDTO);

    /**
     * 启用、禁用分类
     * @param status
     * @param id
     */
    void startOrStop(Integer status, Long id);

    /**
     * 根据类型查询分类
     * @param type
     * @return
     */
    List<Category> list(Integer type);
}

```

**EmployeeServiceImpl.java**

```java
package com.sky.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.sky.constant.MessageConstant;
import com.sky.constant.PasswordConstant;
import com.sky.constant.StatusConstant;
import com.sky.context.BaseContext;
import com.sky.dto.EmployeeDTO;
import com.sky.dto.EmployeeLoginDTO;
import com.sky.dto.EmployeePageQueryDTO;
import com.sky.entity.Employee;
import com.sky.exception.AccountLockedException;
import com.sky.exception.AccountNotFoundException;
import com.sky.exception.PasswordErrorException;
import com.sky.mapper.EmployeeMapper;
import com.sky.result.PageResult;
import com.sky.service.EmployeeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeMapper employeeMapper;

    /**
     * 员工登录
     *
     * @param employeeLoginDTO
     * @return
     */
    public Employee login(EmployeeLoginDTO employeeLoginDTO) {
        String username = employeeLoginDTO.getUsername();
        String password = employeeLoginDTO.getPassword();

        //1、根据用户名查询数据库中的数据
        Employee employee = employeeMapper.getByUsername(username);

        //2、处理各种异常情况（用户名不存在、密码不对、账号被锁定）
        if (employee == null) {
            //账号不存在
            throw new AccountNotFoundException(MessageConstant.ACCOUNT_NOT_FOUND);
        }

        //密码比对
        // TODO 后期需要进行md5加密，然后再进行比对
        password = DigestUtils.md5DigestAsHex(password.getBytes());
        if (!password.equals(employee.getPassword())) {
            //密码错误
            throw new PasswordErrorException(MessageConstant.PASSWORD_ERROR);
        }

        if (employee.getStatus() == StatusConstant.DISABLE) {
            //账号被锁定
            throw new AccountLockedException(MessageConstant.ACCOUNT_LOCKED);
        }

        //3、返回实体对象
        return employee;
    }

    /**
     * 新增员工
     *
     * @param employeeDTO
     */
    public void save(EmployeeDTO employeeDTO) {
        Employee employee = new Employee();

        //对象属性拷贝
        BeanUtils.copyProperties(employeeDTO, employee);

        //设置账号的状态，默认正常状态 1表示正常 0表示锁定
        employee.setStatus(StatusConstant.ENABLE);

        //设置密码，默认密码123456
        employee.setPassword(DigestUtils.md5DigestAsHex(PasswordConstant.DEFAULT_PASSWORD.getBytes()));

        //设置当前记录的创建时间和修改时间
        employee.setCreateTime(LocalDateTime.now());
        employee.setUpdateTime(LocalDateTime.now());

        //设置当前记录创建人id和修改人id
        employee.setCreateUser(BaseContext.getCurrentId());//目前写个假数据，后期修改
        employee.setUpdateUser(BaseContext.getCurrentId());

        employeeMapper.insert(employee);
    }

    /**
     * 分页查询
     *
     * @param employeePageQueryDTO
     * @return
     */
    public PageResult pageQuery(EmployeePageQueryDTO employeePageQueryDTO) {
        // select * from employee limit 0,10
        //开始分页查询
        PageHelper.startPage(employeePageQueryDTO.getPage(), employeePageQueryDTO.getPageSize());

        Page<Employee> page = employeeMapper.pageQuery(employeePageQueryDTO);

        long total = page.getTotal();
        List<Employee> records = page.getResult();

        return new PageResult(total, records);
    }

    /**
     * 启用禁用员工账号
     *
     * @param status
     * @param id
     */
    public void startOrStop(Integer status, Long id) {
        Employee employee = Employee.builder()
                .status(status)
                .id(id)
                .build();

        employeeMapper.update(employee);
    }

    /**
     * 根据id查询员工
     *
     * @param id
     * @return
     */
    public Employee getById(Long id) {
        Employee employee = employeeMapper.getById(id);
        employee.setPassword("****");
        return employee;
    }

    /**
     * 编辑员工信息
     *
     * @param employeeDTO
     */
    public void update(EmployeeDTO employeeDTO) {
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeDTO, employee);

        employee.setUpdateTime(LocalDateTime.now());
        employee.setUpdateUser(BaseContext.getCurrentId());

        employeeMapper.update(employee);
    }

}
```



#### 5.2.3 Controller层

**CategoryController.java**

```java
package com.sky.controller.admin;

import com.sky.dto.CategoryDTO;
import com.sky.dto.CategoryPageQueryDTO;
import com.sky.entity.Category;
import com.sky.result.PageResult;
import com.sky.result.Result;
import com.sky.service.CategoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * 分类管理
 */
@RestController
@RequestMapping("/admin/category")
@Api(tags = "分类相关接口")
@Slf4j
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    /**
     * 新增分类
     * @param categoryDTO
     * @return
     */
    @PostMapping
    @ApiOperation("新增分类")
    public Result<String> save(@RequestBody CategoryDTO categoryDTO){
        log.info("新增分类：{}", categoryDTO);
        categoryService.save(categoryDTO);
        return Result.success();
    }

    /**
     * 分类分页查询
     * @param categoryPageQueryDTO
     * @return
     */
    @GetMapping("/page")
    @ApiOperation("分类分页查询")
    public Result<PageResult> page(CategoryPageQueryDTO categoryPageQueryDTO){
        log.info("分页查询：{}", categoryPageQueryDTO);
        PageResult pageResult = categoryService.pageQuery(categoryPageQueryDTO);
        return Result.success(pageResult);
    }

    /**
     * 删除分类
     * @param id
     * @return
     */
    @DeleteMapping
    @ApiOperation("删除分类")
    public Result<String> deleteById(Long id){
        log.info("删除分类：{}", id);
        categoryService.deleteById(id);
        return Result.success();
    }

    /**
     * 修改分类
     * @param categoryDTO
     * @return
     */
    @PutMapping
    @ApiOperation("修改分类")
    public Result<String> update(@RequestBody CategoryDTO categoryDTO){
        categoryService.update(categoryDTO);
        return Result.success();
    }

    /**
     * 启用、禁用分类
     * @param status
     * @param id
     * @return
     */
    @PostMapping("/status/{status}")
    @ApiOperation("启用禁用分类")
    public Result<String> startOrStop(@PathVariable("status") Integer status, Long id){
        categoryService.startOrStop(status,id);
        return Result.success();
    }

    /**
     * 根据类型查询分类
     * @param type
     * @return
     */
    @GetMapping("/list")
    @ApiOperation("根据类型查询分类")
    public Result<List<Category>> list(Integer type){
        List<Category> list = categoryService.list(type);
        return Result.success(list);
    }
}
```

全部导入完毕后，进行编译

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112170742400.png" alt="image-20221112170742400" style="zoom:50%;" /> 

### 5.3 功能测试

重启服务，访问http://localhost:80,进入分类管理

**分页查询：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112171252992.png" alt="image-20221112171252992" style="zoom:50%;" /> 

**分类类型：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112171402210.png" alt="image-20221112171402210" style="zoom:50%;" /> 

**启用禁用：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112171604991.png" alt="image-20221112171604991" style="zoom:50%;" /> 

点击禁用

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112171700774.png" alt="image-20221112171700774" style="zoom:50%;" /> 

**修改：**

回显

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112172117834.png" alt="image-20221112172117834" style="zoom:50%;" />  

修改后

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112172150709.png" alt="image-20221112172150709" style="zoom:50%;" />

**新增：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112172356093.png" alt="image-20221112172356093" style="zoom:50%;" /> 

点击确定，查询列表

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112172439370.png" alt="image-20221112172439370" style="zoom:50%;" /> 

**删除：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112172525216.png" alt="image-20221112172525216" style="zoom:50%;" /> 

删除后，查询分类列表

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221112172611754.png" alt="image-20221112172611754" style="zoom:50%;" /> 

删除成功

### 5.4 代码提交git

# 苍穹外卖-day03

## 课程内容

- 公共字段自动填充
- 新增菜品
- 菜品分页查询
- 删除菜品
- 修改菜品



**功能实现：**菜品管理

**菜品管理效果图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121142133307.png" alt="image-20221121142133307" style="zoom:50%;" /> 





## 1. 公共字段自动填充⭐⭐⭐

### 1.1 问题分析

在上一章节我们已经完成了后台系统的**员工管理功能**和**菜品分类功能**的开发，在**新增员工**或者**新增菜品分类**时需要设置**创建时间、创建人、修改时间、修改人等字段**，在**编辑员工**或者**编辑菜品分类**时需要设置修改时间、修改人等字段。这些字段属于公共字段，也就是也就是在我们的系统中很多表中都会有这些字段，如下：

| **序号** | **字段名**  | **含义** | **数据类型** |
| -------- | ----------- | -------- | ------------ |
| 1        | create_time | 创建时间 | datetime     |
| 2        | create_user | 创建人id | bigint       |
| 3        | update_time | 修改时间 | datetime     |
| 4        | update_user | 修改人id | bigint       |

而针对于这些字段，我们的赋值方式为： 

1). 在新增数据时, 将createTime、updateTime 设置为当前时间, createUser、updateUser设置为当前登录用户ID。

2). 在更新数据时, 将updateTime 设置为当前时间, updateUser设置为当前登录用户ID。



目前,在我们的项目中处理这些字段都是在每一个业务方法中进行赋值操作,如下:

**新增员工方法：**

```java
	/**
     * 新增员工
     *
     * @param employeeDTO
     */
    public void save(EmployeeDTO employeeDTO) {
        //.......................
		//////////////////////////////////////////
        //设置当前记录的创建时间和修改时间
        employee.setCreateTime(LocalDateTime.now());
        employee.setUpdateTime(LocalDateTime.now());

        //设置当前记录创建人id和修改人id
        employee.setCreateUser(BaseContext.getCurrentId());//目前写个假数据，后期修改
        employee.setUpdateUser(BaseContext.getCurrentId());
		///////////////////////////////////////////////
        employeeMapper.insert(employee);
    }
```

**编辑员工方法：**

```java
	/**
     * 编辑员工信息
     *
     * @param employeeDTO
     */
    public void update(EmployeeDTO employeeDTO) {
       //........................................
	   ///////////////////////////////////////////////
        employee.setUpdateTime(LocalDateTime.now());
        employee.setUpdateUser(BaseContext.getCurrentId());
       ///////////////////////////////////////////////////

        employeeMapper.update(employee);
    }
```

**新增菜品分类方法：**

```java
	/**
     * 新增分类
     * @param categoryDTO
     */
    public void save(CategoryDTO categoryDTO) {
       //....................................
       //////////////////////////////////////////
        //设置创建时间、修改时间、创建人、修改人
        category.setCreateTime(LocalDateTime.now());
        category.setUpdateTime(LocalDateTime.now());
        category.setCreateUser(BaseContext.getCurrentId());
        category.setUpdateUser(BaseContext.getCurrentId());
        ///////////////////////////////////////////////////

        categoryMapper.insert(category);
    }
```

**修改菜品分类方法：**

```java
	/**
     * 修改分类
     * @param categoryDTO
     */
    public void update(CategoryDTO categoryDTO) {
        //....................................
        
		//////////////////////////////////////////////
        //设置修改时间、修改人
        category.setUpdateTime(LocalDateTime.now());
        category.setUpdateUser(BaseContext.getCurrentId());
        //////////////////////////////////////////////////

        categoryMapper.update(category);
    }
```



如果都按照上述的操作方式来处理这些公共字段, 需要在每一个业务方法中进行操作, 编码相对冗余、繁琐，那能不能对于这些公共字段在某个地方统一处理，来简化开发呢？

**答案是可以的，我们使用AOP切面编程，实现功能增强，来完成公共字段自动填充功能。**



### 1.2 实现思路

在实现公共字段自动填充，也就是在插入或者更新的时候为指定字段赋予指定的值，使用它的好处就是可以统一对这些字段进行处理，避免了重复代码。在上述的问题分析中，我们提到有四个公共字段，需要在新增/更新中进行赋值操作, 具体情况如下: 

| **序号** | **字段名**  | **含义** | **数据类型** | **操作类型**       |
| -------- | ----------- | -------- | ------------ | ------------------ |
| 1        | create_time | 创建时间 | datetime     | **insert**         |
| 2        | create_user | 创建人id | bigint       | **insert**         |
| 3        | update_time | 修改时间 | datetime     | **insert、update** |
| 4        | update_user | 修改人id | bigint       | **insert、update** |



**实现步骤：**

1). 自定义注解 **AutoFill**，用于标识需要进行公共字段自动填充的方法

2). 自定义切面类 **AutoFillAspect**，统一拦截加入了 AutoFill 注解的方法，通过**反射**为公共字段赋值

3). 在 Mapper 的方法上加入 AutoFill 注解



若要实现上述步骤，需掌握以下知识(之前课程内容都学过)

**技术点：**枚举、注解、AOP、反射



### 1.3 代码开发

按照上一小节分析的实现步骤依次实现，共三步。

#### 1.3.1 步骤一

**自定义注解 AutoFill**              

进入到sky-server模块，创建com.sky.annotation包。

```java
package com.sky.annotation;

import com.sky.enumeration.OperationType;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 自定义注解，用于标识某个方法需要进行功能字段自动填充处理
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface AutoFill {
    //数据库操作类型：UPDATE INSERT
    OperationType value();
}
```

其中OperationType已在sky-common模块中定义

```java
package com.sky.enumeration;

/**
 * 数据库操作类型
 */
public enum OperationType {

    /**
     * 更新操作
     */
    UPDATE,

    /**
     * 插入操作
     */
    INSERT
}
```



#### 1.3.2 步骤二

**自定义切面 AutoFillAspect**

在sky-server模块，创建com.sky.aspect包。

```java
package com.sky.aspect;

/**
 * 自定义切面，实现公共字段自动填充处理逻辑
 */
@Aspect
@Component
@Slf4j
public class AutoFillAspect {

    /**
     * 切入点
     */
    @Pointcut("execution(* com.sky.mapper.*.*(..)) && @annotation(com.sky.annotation.AutoFill)")
    public void autoFillPointCut(){}

    /**
     * 前置通知，在通知中进行公共字段的赋值
     */
    @Before("autoFillPointCut()")
    public void autoFill(JoinPoint joinPoint){
        /////////////////////重要////////////////////////////////////
        //可先进行调试，是否能进入该方法 提前在mapper方法添加AutoFill注解
        log.info("开始进行公共字段自动填充...");

    }
}
```

**完善自定义切面 AutoFillAspect 的 autoFill 方法**

```java
package com.sky.aspect;

import com.sky.annotation.AutoFill;
import com.sky.constant.AutoFillConstant;
import com.sky.context.BaseContext;
import com.sky.enumeration.OperationType;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import java.lang.reflect.Method;
import java.time.LocalDateTime;

/**
 * 自定义切面，实现公共字段自动填充处理逻辑
 */
@Aspect
@Component
@Slf4j
public class AutoFillAspect {

    /**
     * 切入点
     */
    @Pointcut("execution(* com.sky.mapper.*.*(..)) && @annotation(com.sky.annotation.AutoFill)")
    public void autoFillPointCut(){}

    /**
     * 前置通知，在通知中进行公共字段的赋值
     */
    @Before("autoFillPointCut()")
    public void autoFill(JoinPoint joinPoint){
        log.info("开始进行公共字段自动填充...");

        //获取到当前被拦截的方法上的数据库操作类型
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();//方法签名对象
        AutoFill autoFill = signature.getMethod().getAnnotation(AutoFill.class);//获得方法上的注解对象
        OperationType operationType = autoFill.value();//获得数据库操作类型

        //获取到当前被拦截的方法的参数--实体对象
        Object[] args = joinPoint.getArgs();
        if(args == null || args.length == 0){
            return;
        }

        Object entity = args[0];

        //准备赋值的数据
        LocalDateTime now = LocalDateTime.now();
        Long currentId = BaseContext.getCurrentId();

        //根据当前不同的操作类型，为对应的属性通过反射来赋值
        if(operationType == OperationType.INSERT){
            //为4个公共字段赋值
            try {
                Method setCreateTime = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_CREATE_TIME, LocalDateTime.class);
                Method setCreateUser = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_CREATE_USER, Long.class);
                Method setUpdateTime = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_TIME, LocalDateTime.class);
                Method setUpdateUser = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_USER, Long.class);

                //通过反射为对象属性赋值
                setCreateTime.invoke(entity,now);
                setCreateUser.invoke(entity,currentId);
                setUpdateTime.invoke(entity,now);
                setUpdateUser.invoke(entity,currentId);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }else if(operationType == OperationType.UPDATE){
            //为2个公共字段赋值
            try {
                Method setUpdateTime = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_TIME, LocalDateTime.class);
                Method setUpdateUser = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_USER, Long.class);

                //通过反射为对象属性赋值
                setUpdateTime.invoke(entity,now);
                setUpdateUser.invoke(entity,currentId);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
```



#### 1.3.3 步骤三

**在Mapper接口的方法上加入 AutoFill 注解**

以**CategoryMapper**为例，分别在新增和修改方法添加@AutoFill()注解，也需要**EmployeeMapper**做相同操作



```java
package com.sky.mapper;

@Mapper
public interface CategoryMapper {
    /**
     * 插入数据
     * @param category
     */
    @Insert("insert into category(type, name, sort, status, create_time, update_time, create_user, update_user)" +
            " VALUES" +
            " (#{type}, #{name}, #{sort}, #{status}, #{createTime}, #{updateTime}, #{createUser}, #{updateUser})")
    @AutoFill(value = OperationType.INSERT)
    void insert(Category category);
    /**
     * 根据id修改分类
     * @param category
     */
    @AutoFill(value = OperationType.UPDATE)
    void update(Category category);

}
```

**同时**，将业务层为公共字段赋值的代码注释掉。

1). 将员工管理的新增和编辑方法中的公共字段赋值的代码注释。

2). 将菜品分类管理的新增和修改方法中的公共字段赋值的代码注释。



### 1.4 功能测试

以**新增菜品分类**为例，进行测试

**启动项目和Nginx**



<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121154642757.png" alt="image-20221121154642757" style="zoom:50%;" /> 

**查看控制台**

通过观察控制台输出的SQL来确定公共字段填充是否完成

![image-20221121154841887](http://stofu80ry.sabkt.gdipper.com/picture/image-20221121154841887.png)

**查看表**

category表中数据

![image-20221121155104152](http://stofu80ry.sabkt.gdipper.com/picture/image-20221121155104152.png)

其中create_time,update_time,create_user,update_user字段都已完成自动填充。

由于使用admin(id=1)用户登录进行菜品添加操作,故create_user,update_user都为1.



### 1.5 代码提交**

## 2. 新增菜品

### 2.1 需求分析与设计

#### 2.1.1 产品原型

后台系统中可以管理菜品信息，通过 **新增功能**来添加一个新的菜品，在添加菜品时需要选择当前菜品所属的菜品分类，并且需要上传菜品图片。

**新增菜品原型：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121164131337.png" alt="image-20221121164131337" style="zoom: 50%;" /> 

当填写完表单信息, 点击"保存"按钮后, 会提交该表单的数据到服务端, 在服务端中需要接受数据, 然后将数据保存至数据库中。



**业务规则：**

- 菜品名称必须是唯一的
- 菜品必须属于某个分类下，不能单独存在
- 新增菜品时可以根据情况选择菜品的口味
- 每个菜品必须对应一张图片



#### 2.1.2 接口设计

根据上述原型图先**粗粒度**设计接口，共包含3个接口。

**接口设计：**

- 根据类型查询分类（已完成）
- 文件上传
- 新增菜品



接下来**细粒度**分析每个接口，明确每个接口的请求方式、请求路径、传入参数和返回值。

**1. 根据类型查询分类**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121165033612.png" alt="image-20221121165033612" style="zoom:50%;" /> <img src="C:/Users/86157/Downloads/讲义/day03/assets/image-20221121165043619.png" alt="image-20221121165043619" style="zoom:50%;" />

**2. 文件上传**

<img src="C:/Users/86157/Downloads/讲义/day03/assets/image-20221121165201319.png" alt="image-20221121165201319" style="zoom:50%;" /><img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121165215634.png" alt="image-20221121165215634" style="zoom:50%;" />



**3. 新增菜品**

<img src="C:/Users/86157/Downloads/讲义/day03/assets/image-20221121165254961.png" alt="image-20221121165254961" style="zoom: 50%;" /><img src="C:/Users/86157/Downloads/讲义/day03/assets/image-20221121165308394.png" alt="image-20221121165308394" style="zoom: 50%;" /><img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121165322687.png" alt="image-20221121165322687" style="zoom: 50%;" />



#### 2.1.3 表设计⭐⭐（逻辑外键）

通过原型图进行分析：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121165917874.png" alt="image-20221121165917874" style="zoom:50%;" /> 

新增菜品，其实就是将新增页面录入的菜品信息插入到dish表，如果添加了口味做法，还需要向dish_flavor表插入数据。所以在新增菜品时，涉及到两个表：

| 表名        | 说明       |
| ----------- | ---------- |
| dish        | 菜品表     |
| dish_flavor | 菜品口味表 |



**1). 菜品表:dish**

| **字段名**  | **数据类型**  | **说明**     | **备注**     |
| ----------- | ------------- | ------------ | ------------ |
| id          | bigint        | 主键         | 自增         |
| name        | varchar(32)   | 菜品名称     | 唯一         |
| category_id | bigint        | 分类id       | **逻辑外键** |
| price       | decimal(10,2) | 菜品价格     |              |
| image       | varchar(255)  | 图片路径     |              |
| description | varchar(255)  | 菜品描述     |              |
| status      | int           | 售卖状态     | 1起售 0停售  |
| create_time | datetime      | 创建时间     |              |
| update_time | datetime      | 最后修改时间 |              |
| create_user | bigint        | 创建人id     |              |
| update_user | bigint        | 最后修改人id |              |

**2). 菜品口味表:dish_flavor**

| **字段名** | **数据类型** | **说明** | **备注** |
| ---------- | ------------ | -------- | -------- |
| id         | bigint       | 主键     | 自增     |
| dish_id    | bigint       | 菜品id   | 逻辑外键 |
| name       | varchar(32)  | 口味名称 |          |
| value      | varchar(255) | 口味值   |          |



### 2.2 代码开发

#### 2.2.1 文件上传实现⭐⭐

因为在新增菜品时，需要上传菜品对应的图片(文件)，包括后绪其它功能也会使用到文件上传，故要实现通用的文件上传接口。

文件上传，是指将本地图片、视频、音频等文件上传到服务器上，可以供其他用户浏览或下载的过程。文件上传在项目中应用非常广泛，我们经常发抖音、发朋友圈都用到了文件上传功能。

实现文件上传服务，需要有存储的支持，那么我们的解决方案将以下几种：

1. 直接将图片保存到服务的硬盘（springmvc中的文件上传）
   1. 优点：开发便捷，成本低
   2. 缺点：扩容困难
2. 使用分布式文件系统进行存储
   1. 优点：容易实现扩容
   2. 缺点：开发复杂度稍大（有成熟的产品可以使用，比如：FastDFS,MinIO）
3. 使用第三方的存储服务（例如OSS）
   1. 优点：开发简单，拥有强大功能，免维护
   2. 缺点：付费

在本项目选用阿里云的OSS服务进行文件存储。（前面课程已学习过阿里云OSS,不再赘述）

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121174942235.png" alt="image-20221121174942235" style="zoom:67%;" /> 

**实现步骤：**

**1). 定义OSS相关配置**

在sky-server模块

application-dev.yml

```yaml
sky:
  alioss:
    endpoint: oss-cn-hangzhou.aliyuncs.com
    access-key-id: xxxxx
    access-key-secret: xxxxx
    bucket-name: sky-take-out
```

application.yml

```yaml
spring:
  profiles:
    active: dev    #设置环境
sky:
  alioss:
    endpoint: ${sky.alioss.endpoint}
    access-key-id: ${sky.alioss.access-key-id}
    access-key-secret: ${sky.alioss.access-key-secret}
    bucket-name: ${sky.alioss.bucket-name}

```



**2). 读取OSS配置**

在sky-common模块中，已定义

```java
package com.sky.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "sky.alioss")
@Data
public class AliOssProperties {

    private String endpoint;
    private String accessKeyId;
    private String accessKeySecret;
    private String bucketName;

}
```



**3). 生成OSS工具类对象**

AliOssUtil工具类使用了映射文件属性由spring管理，所以需要通过配置类给spring自定义bean管理

在sky-server模块

```java
package com.sky.config;

import com.sky.properties.AliOssProperties;
import com.sky.utils.AliOssUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * 配置类，用于创建AliOssUtil对象
 */
@Configuration
@Slf4j
public class OssConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public AliOssUtil aliOssUtil(AliOssProperties aliOssProperties){
        log.info("开始创建阿里云文件上传工具类对象：{}",aliOssProperties);
        return new AliOssUtil(aliOssProperties.getEndpoint(),
                aliOssProperties.getAccessKeyId(),
                aliOssProperties.getAccessKeySecret(),
                aliOssProperties.getBucketName());
    }
}
```

其中，AliOssUtil.java已在sky-common模块中定义

```java
package com.sky.utils;

import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import java.io.ByteArrayInputStream;

@Data
@AllArgsConstructor
@Slf4j
public class AliOssUtil {

    private String endpoint;
    private String accessKeyId;
    private String accessKeySecret;
    private String bucketName;

    /**
     * 文件上传
     *
     * @param bytes
     * @param objectName
     * @return
     */
    public String upload(byte[] bytes, String objectName) {

        // 创建OSSClient实例。
        OSS ossClient = new OSSClientBuilder().build(endpoint, accessKeyId, accessKeySecret);

        try {
            // 创建PutObject请求。
            ossClient.putObject(bucketName, objectName, new ByteArrayInputStream(bytes));
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }

        //文件访问路径规则 https://BucketName.Endpoint/ObjectName
        StringBuilder stringBuilder = new StringBuilder("https://");
        stringBuilder
                .append(bucketName)
                .append(".")
                .append(endpoint)
                .append("/")
                .append(objectName);

        log.info("文件上传到:{}", stringBuilder.toString());

        return stringBuilder.toString();
    }
}
```



**4). 定义文件上传接口**

在sky-server模块中定义接口

```java
package com.sky.controller.admin;

import com.sky.constant.MessageConstant;
import com.sky.result.Result;
import com.sky.utils.AliOssUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.UUID;

/**
 * 通用接口
 */
@RestController
@RequestMapping("/admin/common")
@Api(tags = "通用接口")
@Slf4j
public class CommonController {

    @Autowired
    private AliOssUtil aliOssUtil;

    /**
     * 文件上传
     * @param file
     * @return
     */
    @PostMapping("/upload")
    @ApiOperation("文件上传")
    public Result<String> upload(MultipartFile file){
        log.info("文件上传：{}",file);

        try {
            //原始文件名
            String originalFilename = file.getOriginalFilename();
            //截取原始文件名的后缀   dfdfdf.png
            String extension = originalFilename.substring(originalFilename.lastIndexOf("."));
            //构造新文件名称
            String objectName = UUID.randomUUID().toString() + extension;

            //文件的请求路径
            String filePath = aliOssUtil.upload(file.getBytes(), objectName);
            return Result.success(filePath);
        } catch (IOException e) {
            log.error("文件上传失败：{}", e);
        }

        return Result.error(MessageConstant.UPLOAD_FAILED);
    }
}
```



#### 2.2.2 新增菜品实现⭐⭐

**1). 设计DTO类**

在sky-pojo模块中

```java
package com.sky.dto;

import com.sky.entity.DishFlavor;
import lombok.Data;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Data
public class DishDTO implements Serializable {

    private Long id;
    //菜品名称
    private String name;
    //菜品分类id
    private Long categoryId;
    //菜品价格
    private BigDecimal price;
    //图片
    private String image;
    //描述信息
    private String description;
    //0 停售 1 起售
    private Integer status;
    //口味
    private List<DishFlavor> flavors = new ArrayList<>();
}
```



**2). Controller层**

进入到sky-server模块

```java
package com.sky.controller.admin;

import com.sky.dto.DishDTO;
import com.sky.dto.DishPageQueryDTO;
import com.sky.entity.Dish;
import com.sky.result.PageResult;
import com.sky.result.Result;
import com.sky.service.DishService;
import com.sky.vo.DishVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Set;

/**
 * 菜品管理
 */
@RestController
@RequestMapping("/admin/dish")
@Api(tags = "菜品相关接口")
@Slf4j
public class DishController {

    @Autowired
    private DishService dishService;

    /**
     * 新增菜品
     *
     * @param dishDTO
     * @return
     */
    @PostMapping
    @ApiOperation("新增菜品")
    public Result save(@RequestBody DishDTO dishDTO) {
        log.info("新增菜品：{}", dishDTO);
        dishService.saveWithFlavor(dishDTO);//后绪步骤开发
        return Result.success();
    }
}
```



**3). Service层接口**

```java
package com.sky.service;

import com.sky.dto.DishDTO;
import com.sky.entity.Dish;

public interface DishService {

    /**
     * 新增菜品和对应的口味
     *
     * @param dishDTO
     */
    public void saveWithFlavor(DishDTO dishDTO);

}
```



**4). Service层实现类**

```java
package com.sky.service.impl;


@Service
    @Slf4j
public class DishServiceImpl implements DishService {

    @Autowired
    private DishMapper dishMapper;
    @Autowired
    private DishFlavorMapper dishFlavorMapper;

    /**
     * 新增菜品和对应的口味
     *
     * @param dishDTO
     */
    @Transactional
    public void saveWithFlavor(DishDTO dishDTO) {

        Dish dish = new Dish();
        BeanUtils.copyProperties(dishDTO, dish);

        //向菜品表插入1条数据
        dishMapper.insert(dish);//后绪步骤实现

        //获取insert语句生成的主键值
        Long dishId = dish.getId();

        List<DishFlavor> flavors = dishDTO.getFlavors();
        if (flavors != null && flavors.size() > 0) {
            flavors.forEach(dishFlavor -> {
                dishFlavor.setDishId(dishId);
            });
            //向口味表插入n条数据
            dishFlavorMapper.insertBatch(flavors);//后绪步骤实现
        }
    }

}
```



**5). Mapper层**

DishMapper.java中添加

```java
	/**
     * 插入菜品数据
     *
     * @param dish
     */
    @AutoFill(value = OperationType.INSERT)
    void insert(Dish dish);
```

在/resources/mapper中创建DishMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.DishMapper">

    <insert id="insert" useGeneratedKeys="true" keyProperty="id">
        insert into dish (name, category_id, price, image, description, create_time, update_time, create_user,update_user, status)
        values (#{name}, #{categoryId}, #{price}, #{image}, #{description}, #{createTime}, #{updateTime}, #{createUser}, #{updateUser}, #{status})
    </insert>
</mapper>

```

DishFlavorMapper.java

```java
package com.sky.mapper;

import com.sky.entity.DishFlavor;
import java.util.List;

@Mapper
public interface DishFlavorMapper {
    /**
     * 批量插入口味数据
     * @param flavors
     */
    void insertBatch(List<DishFlavor> flavors);

}
```

在/resources/mapper中创建DishFlavorMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.DishFlavorMapper">
    <insert id="insertBatch">
        insert into dish_flavor (dish_id, name, value) VALUES
        <foreach collection="flavors" item="df" separator=",">
            (#{df.dishId},#{df.name},#{df.value})
        </foreach>
    </insert>
</mapper>
```



### 2.3 功能测试

进入到菜品管理--->新建菜品

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121195440804.png" alt="image-20221121195440804" style="zoom:50%;" /> 

由于没有实现菜品查询功能，所以保存后，暂且在表中查看添加的数据。

dish表：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121195737692.png" alt="image-20221121195737692" style="zoom:50%;" /> 

dish_flavor表：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121195902555.png" alt="image-20221121195902555" style="zoom:50%;" /> 

测试成功。



### 2.4代码提交

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121200332933.png" alt="image-20221121200332933" style="zoom:50%;" />  

后续步骤和上述功能代码提交一致，不再赘述。



## 3. 菜品分页查询

### 3.1 需求分析和设计

#### 3.1.1 产品原型

系统中的菜品数据很多的时候，如果在一个页面中全部展示出来会显得比较乱，不便于查看，所以一般的系统中都会以分页的方式来展示列表数据。

**菜品分页原型：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121201552489.png" alt="image-20221121201552489" style="zoom: 67%;" /> 

在菜品列表展示时，除了菜品的基本信息(名称、售价、售卖状态、最后操作时间)外，还有两个字段略微特殊，第一个是图片字段 ，我们从数据库查询出来的仅仅是图片的名字，图片要想在表格中回显展示出来，就需要下载这个图片。第二个是菜品分类，这里展示的是分类名称，而不是分类ID，此时我们就需要根据菜品的分类ID，去分类表中查询分类信息，然后在页面展示。

**业务规则：**

- 根据页码展示菜品信息
- 每页展示10条数据
- 分页查询时可以根据需要输入菜品名称、菜品分类、菜品状态进行查询



#### 3.1.2 接口设计

根据上述原型图，设计出相应的接口。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121202019258.png" alt="image-20221121202019258" style="zoom:50%;" /> <img src="C:/Users/86157/Downloads/讲义/day03/assets/image-20221121202033284.png" alt="image-20221121202033284" style="zoom:50%;" />



### 3.2 代码开发

#### 3.2.1 设计DTO类

**根据菜品分页查询接口定义设计对应的DTO：**

在sky-pojo模块中，已定义

```java
package com.sky.dto;

import lombok.Data;
import java.io.Serializable;

@Data
public class DishPageQueryDTO implements Serializable {

    private int page;
    private int pageSize;
    private String name;
    private Integer categoryId; //分类id
    private Integer status; //状态 0表示禁用 1表示启用

}
```



#### 3.2.2 设计VO类

**根据菜品分页查询接口定义设计对应的VO：**

在sky-pojo模块中，已定义

```java
package com.sky.vo;

import com.sky.entity.DishFlavor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DishVO implements Serializable {

    private Long id;
    //菜品名称
    private String name;
    //菜品分类id
    private Long categoryId;
    //菜品价格
    private BigDecimal price;
    //图片
    private String image;
    //描述信息
    private String description;
    //0 停售 1 起售
    private Integer status;
    //更新时间
    private LocalDateTime updateTime;
    //分类名称
    private String categoryName;
    //菜品关联的口味
    private List<DishFlavor> flavors = new ArrayList<>();
}
```



#### 3.2.3 Controller层

**根据接口定义创建DishController的page分页查询方法：**

```java
	/**
     * 菜品分页查询
     *
     * @param dishPageQueryDTO
     * @return
     */
    @GetMapping("/page")
    @ApiOperation("菜品分页查询")
    public Result<PageResult> page(DishPageQueryDTO dishPageQueryDTO) {
        log.info("菜品分页查询:{}", dishPageQueryDTO);
        PageResult pageResult = dishService.pageQuery(dishPageQueryDTO);//后绪步骤定义
        return Result.success(pageResult);
    }
```



#### 3.2.4 Service层接口

**在 DishService 中扩展分页查询方法：**

```java
	/**
     * 菜品分页查询
     *
     * @param dishPageQueryDTO
     * @return
     */
    PageResult pageQuery(DishPageQueryDTO dishPageQueryDTO);
```



#### 3.2.5 Service层实现类

**在 DishServiceImpl 中实现分页查询方法：**

```java
	/**
     * 菜品分页查询
     *
     * @param dishPageQueryDTO
     * @return
     */
    public PageResult pageQuery(DishPageQueryDTO dishPageQueryDTO) {
        PageHelper.startPage(dishPageQueryDTO.getPage(), dishPageQueryDTO.getPageSize());
        Page<DishVO> page = dishMapper.pageQuery(dishPageQueryDTO);//后绪步骤实现
        return new PageResult(page.getTotal(), page.getResult());
    }
```



#### 3.2.6 Mapper层⭐⭐

**在 DishMapper 接口中声明 pageQuery 方法：**

```java
	/**
     * 菜品分页查询
     *
     * @param dishPageQueryDTO
     * @return
     */
    Page<DishVO> pageQuery(DishPageQueryDTO dishPageQueryDTO);
```

**在 DishMapper.xml 中编写SQL：**

```xml
<select id="pageQuery" resultType="com.sky.vo.DishVO">
        select d.* , c.name as categoryName from dish d left outer join category c on d.category_id = c.id
        <where>
            <if test="name != null">
                and d.name like concat('%',#{name},'%')
            </if>
            <if test="categoryId != null">
                and d.category_id = #{categoryId}
            </if>
            <if test="status != null">
                and d.status = #{status}
            </if>
        </where>
        order by d.create_time desc
</select>
```



### 3.3 功能测试

#### 3.3.1 接口文档测试

**启动服务：**访问http://localhost:8080/doc.html，进入菜品分页查询接口

**注意：**使用admin用户登录重新获取token，防止token失效。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121210252403.png" alt="image-20221121210252403" style="zoom:50%;" />  

**点击发送：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121210333489.png" alt="image-20221121210333489" style="zoom: 67%;" /> 



#### 3.3.2 前后端联调测试

启动nginx,访问 http://localhost

**点击菜品管理**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121210500188.png" alt="image-20221121210500188" style="zoom:50%;" /> 

数据成功查出。



## 4. 删除菜品

### 4.1 需求分析和设计

#### 4.1.1 产品原型

在菜品列表页面，每个菜品后面对应的操作分别为**修改**、**删除**、**停售**，可通过删除功能完成对菜品及相关的数据进行删除。

**删除菜品原型：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121211236356.png" alt="image-20221121211236356" style="zoom:67%;" /> 



**业务规则：**

- 可以一次删除一个菜品，也可以批量删除菜品
- 起售中的菜品不能删除
- 被套餐关联的菜品不能删除
- 删除菜品后，关联的口味数据也需要删除掉



#### 4.1.2 接口设计

根据上述原型图，设计出相应的接口。

<img src="C:/Users/86157/Downloads/讲义/day03/assets/image-20221121211801121.png" alt="image-20221121211801121" style="zoom:50%;" /> <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121211814429.png" alt="image-20221121211814429" style="zoom:50%;" />

**注意：**删除一个菜品和批量删除菜品共用一个接口，故ids可包含多个菜品id,之间用逗号分隔。



#### 4.1.3 表设计⭐⭐

在进行删除菜品操作时，会涉及到以下三张表。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221121212436851.png" alt="image-20221121212436851" style="zoom:50%;" /> 

**注意事项：**

- 在dish表中删除菜品基本数据时，同时，也要把关联在dish_flavor表中的数据一块删除。
- setmeal_dish表为菜品和套餐关联的中间表。
- 若删除的菜品数据关联着某个套餐，此时，删除失败。
- 若要删除套餐关联的菜品数据，先解除两者关联，再对菜品进行删除。



### 4.2 代码开发

#### 4.1.2 Controller层

**根据删除菜品的接口定义在DishController中创建方法：**

```java
	/**
     * 菜品批量删除
     *
     * @param ids
     * @return
     */
    @DeleteMapping
    @ApiOperation("菜品批量删除")
    public Result delete(@RequestParam List<Long> ids) {
        log.info("菜品批量删除：{}", ids);
        dishService.deleteBatch(ids);//后绪步骤实现
        return Result.success();
    }
```



#### 4.2.2 Service层接口

**在DishService接口中声明deleteBatch方法：**

```java
	/**
     * 菜品批量删除
     *
     * @param ids
     */
    void deleteBatch(List<Long> ids);
```



#### 4.2.3 Service层实现类

**在DishServiceImpl中实现deleteBatch方法：**

```java
    @Autowired
    private SetmealDishMapper setmealDishMapper;
	/**
     * 菜品批量删除
     *
     * @param ids
     */
    @Transactional//事务
    public void deleteBatch(List<Long> ids) {
        //判断当前菜品是否能够删除---是否存在起售中的菜品？？
        for (Long id : ids) {
            Dish dish = dishMapper.getById(id);//后绪步骤实现
            if (dish.getStatus() == StatusConstant.ENABLE) {
                //当前菜品处于起售中，不能删除
                throw new DeletionNotAllowedException(MessageConstant.DISH_ON_SALE);
            }
        }

        //判断当前菜品是否能够删除---是否被套餐关联了？？
        List<Long> setmealIds = setmealDishMapper.getSetmealIdsByDishIds(ids);
        if (setmealIds != null && setmealIds.size() > 0) {
            //当前菜品被套餐关联了，不能删除
            throw new DeletionNotAllowedException(MessageConstant.DISH_BE_RELATED_BY_SETMEAL);
        }

        //删除菜品表中的菜品数据
        for (Long id : ids) {
            dishMapper.deleteById(id);//后绪步骤实现
            //删除菜品关联的口味数据
            dishFlavorMapper.deleteByDishId(id);//后绪步骤实现
        }
    }
```



#### 4.2.4 Mapper层

**在DishMapper中声明getById方法，并配置SQL：**

```java
	/**
     * 根据主键查询菜品
     *
     * @param id
     * @return
     */
    @Select("select * from dish where id = #{id}")
    Dish getById(Long id);
```

**创建SetmealDishMapper，声明getSetmealIdsByDishIds方法，并在xml文件中编写SQL：**

```java
package com.sky.mapper;

import com.sky.entity.SetmealDish;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface SetmealDishMapper {
    /**
     * 根据菜品id查询对应的套餐id
     *
     * @param dishIds
     * @return
     */
    //select setmeal_id from setmeal_dish where dish_id in (1,2,3,4)
    List<Long> getSetmealIdsByDishIds(List<Long> dishIds);
}

```

SetmealDishMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.SetmealDishMapper">
    <select id="getSetmealIdsByDishIds" resultType="java.lang.Long">
        select setmeal_id from setmeal_dish where dish_id in
        <foreach collection="dishIds" item="dishId" separator="," open="(" close=")">
            #{dishId}
        </foreach>
    </select>
</mapper>
```

**在DishMapper.java中声明deleteById方法并配置SQL：**

```java
	/**
     * 根据主键删除菜品数据
     *
     * @param id
     */
    @Delete("delete from dish where id = #{id}")
    void deleteById(Long id);
```

**在DishFlavorMapper中声明deleteByDishId方法并配置SQL：**

```java
    /**
     * 根据菜品id删除对应的口味数据
     * @param dishId
     */
    @Delete("delete from dish_flavor where dish_id = #{dishId}")
    void deleteByDishId(Long dishId);
```



### 4.3 功能测试

既可以通过Swagger接口文档进行测试，也可以通过前后端联调测试，接下来，我们直接使用**前后端联调测试**。

进入到菜品列表查询页面

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221122125332084.png" alt="image-20221122125332084" style="zoom:50%;" /> 

对测试菜品进行删除操作

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221122125625014.png" alt="image-20221122125625014" style="zoom:50%;" /> 

同时，进到dish表和dish_flavor两个表查看**测试菜品**的相关数据都已被成功删除。



再次，删除状态为启售的菜品

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221122125841464.png" alt="image-20221122125841464" style="zoom:50%;" /> 

点击批量删除

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221122130016566.png" alt="image-20221122130016566" style="zoom:50%;" /> 

删除失败，因为起售中的菜品不能删除。

### 4.4 代码提交

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221122130426605.png" alt="image-20221122130426605" style="zoom:50%;" /> 

后续步骤和上述功能代码提交一致，不再赘述。



## 5. 修改菜品

### 5.1 需求分析和设计

#### 5.1.1 产品原型

在菜品管理列表页面点击修改按钮，跳转到修改菜品页面，在修改页面回显菜品相关信息并进行修改，最后点击保存按钮完成修改操作。

**修改菜品原型：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221122130837173.png" alt="image-20221122130837173" style="zoom:50%;" /> 



#### 5.1.2 接口设计

通过对上述原型图进行分析，该页面共涉及4个接口。

**接口：**

- 根据id查询菜品
- 根据类型查询分类(已实现)
- 文件上传(已实现)
- 修改菜品

我们只需要实现**根据id查询菜品**和**修改菜品**两个接口，接下来，我们来重点分析这两个接口。

**1). 根据id查询菜品**

<img src="C:/Users/86157/Downloads/讲义/day03/assets/image-20221122131733147.png" alt="image-20221122131733147" style="zoom:50%;" /><img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221122131743509.png" alt="image-20221122131743509" style="zoom:50%;" />

**2). 修改菜品**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221122131837393.png" alt="image-20221122131837393" style="zoom:50%;" /> <img src="C:/Users/86157/Downloads/讲义/day03/assets/image-20221122131847583.png" alt="image-20221122131847583" style="zoom:50%;" />



<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221122131914533.png" alt="image-20221122131914533" style="zoom:50%;" /> 

**注:因为是修改功能，请求方式可设置为PUT。**



### 5.2 代码开发

#### 5.2.1 根据id查询菜品实现

**1). Controller层**

**根据id查询菜品的接口定义在DishController中创建方法：**

```java
    /**
     * 根据id查询菜品
     *
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    @ApiOperation("根据id查询菜品")
    public Result<DishVO> getById(@PathVariable Long id) {
        log.info("根据id查询菜品：{}", id);
        DishVO dishVO = dishService.getByIdWithFlavor(id);//后绪步骤实现
        return Result.success(dishVO);
    }
```



**2). Service层接口**

**在DishService接口中声明getByIdWithFlavor方法：**

```java
	/**
     * 根据id查询菜品和对应的口味数据
     *
     * @param id
     * @return
     */
    DishVO getByIdWithFlavor(Long id);
```



**3). Service层实现类**

**在DishServiceImpl中实现getByIdWithFlavor方法：**

```java
	/**
     * 根据id查询菜品和对应的口味数据
     *
     * @param id
     * @return
     */
    public DishVO getByIdWithFlavor(Long id) {
        //根据id查询菜品数据
        Dish dish = dishMapper.getById(id);

        //根据菜品id查询口味数据
        List<DishFlavor> dishFlavors = dishFlavorMapper.getByDishId(id);//后绪步骤实现

        //将查询到的数据封装到VO
        DishVO dishVO = new DishVO();
        BeanUtils.copyProperties(dish, dishVO);
        dishVO.setFlavors(dishFlavors);

        return dishVO;
    }
```



**4). Mapper层**

**在DishFlavorMapper中声明getByDishId方法，并配置SQL：**

```java
    /**
     * 根据菜品id查询对应的口味数据
     * @param dishId
     * @return
     */
    @Select("select * from dish_flavor where dish_id = #{dishId}")
    List<DishFlavor> getByDishId(Long dishId);
```



#### 5.2.1 修改菜品实现

**1). Controller层**

**根据修改菜品的接口定义在DishController中创建方法：**

```java
	/**
     * 修改菜品
     *
     * @param dishDTO
     * @return
     */
    @PutMapping
    @ApiOperation("修改菜品")
    public Result update(@RequestBody DishDTO dishDTO) {
        log.info("修改菜品：{}", dishDTO);
        dishService.updateWithFlavor(dishDTO);
        return Result.success();
    }
```



**2). Service层接口**

**在DishService接口中声明updateWithFlavor方法：**

```java
	/**
     * 根据id修改菜品基本信息和对应的口味信息
     *
     * @param dishDTO
     */
    void updateWithFlavor(DishDTO dishDTO);
```



**3). Service层实现类**

**在DishServiceImpl中实现updateWithFlavor方法：**

```java
	/**
     * 根据id修改菜品基本信息和对应的口味信息
     *
     * @param dishDTO
     */
    public void updateWithFlavor(DishDTO dishDTO) {
        Dish dish = new Dish();
        BeanUtils.copyProperties(dishDTO, dish);

        //修改菜品表基本信息
        dishMapper.update(dish);

        //删除原有的口味数据
        dishFlavorMapper.deleteByDishId(dishDTO.getId());

        //重新插入口味数据
        List<DishFlavor> flavors = dishDTO.getFlavors();
        if (flavors != null && flavors.size() > 0) {
            flavors.forEach(dishFlavor -> {
                dishFlavor.setDishId(dishDTO.getId());
            });
            //向口味表插入n条数据
            dishFlavorMapper.insertBatch(flavors);
        }
    }
```



**4). Mapper层**

**在DishMapper中，声明update方法：**

```java
	/**
     * 根据id动态修改菜品数据
     *
     * @param dish
     */
    @AutoFill(value = OperationType.UPDATE)
    void update(Dish dish);
```

**并在DishMapper.xml文件中编写SQL:**

```xml
<update id="update">
        update dish
        <set>
            <if test="name != null">name = #{name},</if>
            <if test="categoryId != null">category_id = #{categoryId},</if>
            <if test="price != null">price = #{price},</if>
            <if test="image != null">image = #{image},</if>
            <if test="description != null">description = #{description},</if>
            <if test="status != null">status = #{status},</if>
            <if test="updateTime != null">update_time = #{updateTime},</if>
            <if test="updateUser != null">update_user = #{updateUser},</if>
        </set>
        where id = #{id}
</update>
```



### 5.3 功能测试

本次测试直接通过**前后端联调测试** ，可使用Debug方式启动项目，观察运行中步骤。

进入菜品列表查询页面，对第一个菜品的价格进行修改

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221122141233080.png" alt="image-20221122141233080" style="zoom:50%;" /> 

点击修改，回显成功

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221122141348677.png" alt="image-20221122141348677" style="zoom:50%;" /> 

菜品价格修改后，点击保存

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221122141456498.png" alt="image-20221122141456498" style="zoom:50%;" /> 

修改成功



### 5.4 代码提交



## 6.完成菜品管理模块中的**菜品起售停售**功能

### 6.1. 根据产品原型进行需求分析，分析出业务规则

菜品起售表示该菜品可以对外售卖，在用户端可以点餐，菜品停售表示此菜品下架，用户端无法点餐。

业务规则为：如果执行停售操作，则包含此菜品的套餐也需要停售。

### 6.2. 设计 菜品起售停售 功能的接口

![image-20221018101214247](C:/Users/86157/AppData/Local/Temp/9fb5d21a-bb0b-4935-8c92-776c9ff4b397_资料.rar.397/资料/day03/作业答案/assets/image-20221018101214247.png)

### 6.3. 根据接口设计进行代码实现

#### 6.3.1  DishController

~~~java
/**
     * 菜品起售停售
     * @param status
     * @param id
     * @return
*/
@PostMapping("/status/{status}")
@ApiOperation("菜品起售停售")
public Result<String> startOrStop(@PathVariable Integer status, Long id){
    dishService.startOrStop(status,id);
    return Result.success();
}
~~~

#### 6.3.2 DishService

~~~java
/**
     * 菜品起售停售
     * @param status
     * @param id
*/
void startOrStop(Integer status, Long id);
~~~

#### 6.3.3 DishServiceImpl

~~~java
/**
     * 菜品起售停售
     *
     * @param status
     * @param id
*/
@Transactional
public void startOrStop(Integer status, Long id) {
    Dish dish = Dish.builder()
        .id(id)
        .status(status)
        .build();
    dishMapper.update(dish);

    if (status == StatusConstant.DISABLE) {
        // 如果是停售操作，还需要将包含当前菜品的套餐也停售
        List<Long> dishIds = new ArrayList<>();
        dishIds.add(id);
        // select setmeal_id from setmeal_dish where dish_id in (?,?,?)
        List<Long> setmealIds = setmealDishMapper.getSetmealIdsByDishIds(dishIds);
        if (setmealIds != null && setmealIds.size() > 0) {
            for (Long setmealId : setmealIds) {
                Setmeal setmeal = Setmeal.builder()
                    .id(setmealId)
                    .status(StatusConstant.DISABLE)
                    .build();
                setmealMapper.update(setmeal);
            }
        }
    }
}
~~~

#### 6.3.4 SetmealMapper

~~~java
/**
     * 根据id修改套餐
     *
     * @param setmeal
 */
@AutoFill(OperationType.UPDATE)
void update(Setmeal setmeal);
~~~

#### 6.3.5 SetmealMapper.xml

~~~xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.SetmealMapper">

    <update id="update" parameterType="Setmeal">
        update setmeal
        <set>
            <if test="name != null">
                name = #{name},
            </if>
            <if test="categoryId != null">
                category_id = #{categoryId},
            </if>
            <if test="price != null">
                price = #{price},
            </if>
            <if test="status != null">
                status = #{status},
            </if>
            <if test="description != null">
                description = #{description},
            </if>
            <if test="image != null">
                image = #{image},
            </if>
            <if test="updateTime != null">
                update_time = #{updateTime},
            </if>
            <if test="updateUser != null">
                update_user = #{updateUser}
            </if>
        </set>
        where id = #{id}
    </update>

</mapper>
~~~



### 6.4. 分别通过swagger接口文档和前后端联调进行功能测试



# 苍穹外卖-day04

## 1. 新增套餐

### 1.1 需求分析和设计

产品原型：

![image-20221018135930842](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018135930842.png)

![image-20221018140833345](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018140833345.png)

业务规则：

- 套餐名称唯一
- 套餐必须属于某个分类
- 套餐必须包含菜品
- 名称、分类、价格、图片为必填项
- 添加菜品窗口需要根据分类类型来展示菜品
- 新增的套餐默认为停售状态

接口设计（共涉及到4个接口）：

- 根据类型查询分类（已完成）
- 根据分类id查询菜品
- 图片上传（已完成）
- 新增套餐

![image-20221018141521068](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018141521068.png)

![image-20221018141606787](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018141606787.png)

数据库设计：

setmeal表为套餐表，用于存储套餐的信息。具体表结构如下：

| 字段名      | 数据类型      | 说明         | 备注        |
| ----------- | ------------- | ------------ | ----------- |
| id          | bigint        | 主键         | 自增        |
| name        | varchar(32)   | 套餐名称     | 唯一        |
| category_id | bigint        | 分类id       | 逻辑外键    |
| price       | decimal(10,2) | 套餐价格     |             |
| image       | varchar(255)  | 图片路径     |             |
| description | varchar(255)  | 套餐描述     |             |
| status      | int           | 售卖状态     | 1起售 0停售 |
| create_time | datetime      | 创建时间     |             |
| update_time | datetime      | 最后修改时间 |             |
| create_user | bigint        | 创建人id     |             |
| update_user | bigint        | 最后修改人id |             |

setmeal_dish表为套餐菜品关系表，用于存储套餐和菜品的关联关系。具体表结构如下：

| 字段名     | 数据类型      | 说明     | 备注     |
| ---------- | ------------- | -------- | -------- |
| id         | bigint        | 主键     | 自增     |
| setmeal_id | bigint        | 套餐id   | 逻辑外键 |
| dish_id    | bigint        | 菜品id   | 逻辑外键 |
| name       | varchar(32)   | 菜品名称 | 冗余字段 |
| price      | decimal(10,2) | 菜品单价 | 冗余字段 |
| copies     | int           | 菜品份数 |          |

### 1.2 代码实现

#### 1.2.1 DishController

~~~java
/**
     * 根据分类id查询菜品
     * @param categoryId
     * @return
*/
@GetMapping("/list")
@ApiOperation("根据分类id查询菜品")
public Result<List<Dish>> list(Long categoryId){
    List<Dish> list = dishService.list(categoryId);
    return Result.success(list);
}
~~~

#### 1.2.2 DishService

~~~java
/**
     * 根据分类id查询菜品
     * @param categoryId
     * @return
*/
List<Dish> list(Long categoryId);
~~~

#### 1.2.3 DishServiceImpl

~~~java
/**
     * 根据分类id查询菜品
     * @param categoryId
     * @return
*/
public List<Dish> list(Long categoryId) {
    Dish dish = Dish.builder()
        .categoryId(categoryId)
        .status(StatusConstant.ENABLE)
        .build();
    return dishMapper.list(dish);
}
~~~

#### 1.2.4 DishMapper

~~~java
/**
     * 动态条件查询菜品
     * @param dish
     * @return
*/
List<Dish> list(Dish dish);
~~~

#### 1.2.5 DishMapper.xml

~~~xml
<select id="list" resultType="Dish" parameterType="Dish">
    select * from dish
    <where>
        <if test="name != null">
            and name like concat('%',#{name},'%')
        </if>
        <if test="categoryId != null">
            and category_id = #{categoryId}
        </if>
        <if test="status != null">
            and status = #{status}
        </if>
    </where>
    order by create_time desc
</select>
~~~

#### 1.2.6 SetmealController

~~~java
/**
 * 套餐管理
 */
@RestController
@RequestMapping("/admin/setmeal")
@Api(tags = "套餐相关接口")
@Slf4j
public class SetmealController {

    @Autowired
    private SetmealService setmealService;

    /**
     * 新增套餐
     * @param setmealDTO
     * @return
     */
    @PostMapping
    @ApiOperation("新增套餐")
    public Result save(@RequestBody SetmealDTO setmealDTO) {
        setmealService.saveWithDish(setmealDTO);
        return Result.success();
    }
}
~~~

#### 1.2.7 SetmealService

~~~java
public interface SetmealService {

    /**
     * 新增套餐，同时需要保存套餐和菜品的关联关系
     * @param setmealDTO
     */
    void saveWithDish(SetmealDTO setmealDTO);
}
~~~

#### 1.2.8 SetmealServiceImpl

~~~java
/**
 * 套餐业务实现
 */
@Service
@Slf4j
public class SetmealServiceImpl implements SetmealService {

    @Autowired
    private SetmealMapper setmealMapper;
    @Autowired
    private SetmealDishMapper setmealDishMapper;
    @Autowired
    private DishMapper dishMapper;

    /**
     * 新增套餐，同时需要保存套餐和菜品的关联关系
     * @param setmealDTO
     */
    @Transactional
    public void saveWithDish(SetmealDTO setmealDTO) {
        Setmeal setmeal = new Setmeal();
        BeanUtils.copyProperties(setmealDTO, setmeal);

        //向套餐表插入数据
        setmealMapper.insert(setmeal);

        //获取生成的套餐id
        Long setmealId = setmeal.getId();

        List<SetmealDish> setmealDishes = setmealDTO.getSetmealDishes();
        setmealDishes.forEach(setmealDish -> {
            setmealDish.setSetmealId(setmealId);
        });

        //保存套餐和菜品的关联关系
        setmealDishMapper.insertBatch(setmealDishes);
    }
}
~~~

#### 1.2.9 SetmealMapper

~~~java
/**
     * 新增套餐
     * @param setmeal
*/
@AutoFill(OperationType.INSERT)
void insert(Setmeal setmeal);
~~~

#### 1.2.10 SetmealMapper.xml

~~~xml
<insert id="insert" parameterType="Setmeal" useGeneratedKeys="true" keyProperty="id">
    insert into setmeal
    (category_id, name, price, status, description, image, create_time, update_time, create_user, update_user)
    values (#{categoryId}, #{name}, #{price}, #{status}, #{description}, #{image}, #{createTime}, #{updateTime},
    #{createUser}, #{updateUser})
</insert>
~~~

#### 1.2.11 SetmealDishMapper

~~~java
/**
     * 批量保存套餐和菜品的关联关系
     * @param setmealDishes
*/
void insertBatch(List<SetmealDish> setmealDishes);
~~~

#### 1.2.12 SetmealDishMapper.xml

~~~xml
<insert id="insertBatch" parameterType="list">
    insert into setmeal_dish
    (setmeal_id,dish_id,name,price,copies)
    values
    <foreach collection="setmealDishes" item="sd" separator=",">
        (#{sd.setmealId},#{sd.dishId},#{sd.name},#{sd.price},#{sd.copies})
    </foreach>
</insert>
~~~

### 1.3 功能测试

略

## 2. 套餐分页查询

### 2.1 需求分析和设计

产品原型：

![image-20221018152429246](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018152429246.png)

业务规则：

- 根据页码进行分页展示
- 每页展示10条数据
- 可以根据需要，按照套餐名称、分类、售卖状态进行查询

接口设计：

![image-20221018152731141](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018152731141.png)

### 2.2 代码实现

#### 2.2.1 SetmealController

~~~java
/**
     * 分页查询
     * @param setmealPageQueryDTO
     * @return
*/
@GetMapping("/page")
@ApiOperation("分页查询")
public Result<PageResult> page(SetmealPageQueryDTO setmealPageQueryDTO) {
    PageResult pageResult = setmealService.pageQuery(setmealPageQueryDTO);
    return Result.success(pageResult);
}
~~~

#### 2.2.2 SetmealService

~~~java
/**
     * 分页查询
     * @param setmealPageQueryDTO
     * @return
*/
PageResult pageQuery(SetmealPageQueryDTO setmealPageQueryDTO);
~~~

#### 2.2.3 SetmealServiceImpl

~~~java
/**
     * 分页查询
     * @param setmealPageQueryDTO
     * @return
*/
public PageResult pageQuery(SetmealPageQueryDTO setmealPageQueryDTO) {
    int pageNum = setmealPageQueryDTO.getPage();
    int pageSize = setmealPageQueryDTO.getPageSize();

    PageHelper.startPage(pageNum, pageSize);
    Page<SetmealVO> page = setmealMapper.pageQuery(setmealPageQueryDTO);
    return new PageResult(page.getTotal(), page.getResult());
}
~~~

#### 2.2.4 SetmealMapper

~~~java
/**
     * 分页查询
     * @param setmealPageQueryDTO
     * @return
*/
Page<SetmealVO> pageQuery(SetmealPageQueryDTO setmealPageQueryDTO);
~~~

#### 2.2.5 SetmealMapper.xml

~~~xml
<select id="pageQuery" resultType="com.sky.vo.SetmealVO">
    select
    	s.*,c.name categoryName
    from
    	setmeal s
    left join
    	category c
    on
    	s.category_id = c.id
    <where>
        <if test="name != null">
            and s.name like concat('%',#{name},'%')
        </if>
        <if test="status != null">
            and s.status = #{status}
        </if>
        <if test="categoryId != null">
            and s.category_id = #{categoryId}
        </if>
    </where>
    order by s.create_time desc
</select>
~~~

### 2.3 功能测试

略

## 3. 删除套餐

### 3.1 需求分析和设计

产品原型：

![image-20221018153756531](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018153756531.png)

业务规则：

- 可以一次删除一个套餐，也可以批量删除套餐
- 起售中的套餐不能删除

接口设计：

![image-20221018154541067](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018154541067.png)

### 3.2 代码实现

#### 3.2.1 SetmealController

~~~java
/**
     * 批量删除套餐
     * @param ids
     * @return
*/
@DeleteMapping
@ApiOperation("批量删除套餐")
public Result delete(@RequestParam List<Long> ids){
    setmealService.deleteBatch(ids);
    return Result.success();
}
~~~

#### 3.2.2 SetmealService

~~~java
/**
     * 批量删除套餐
     * @param ids
*/
void deleteBatch(List<Long> ids);
~~~

#### 3.2.3 SetmealServiceImpl

~~~java
/**
     * 批量删除套餐
     * @param ids
*/
@Transactional
public void deleteBatch(List<Long> ids) {
    ids.forEach(id -> {
        Setmeal setmeal = setmealMapper.getById(id);
        if(StatusConstant.ENABLE == setmeal.getStatus()){
            //起售中的套餐不能删除
            throw new DeletionNotAllowedException(MessageConstant.SETMEAL_ON_SALE);
        }
    });

    ids.forEach(setmealId -> {
        //删除套餐表中的数据
        setmealMapper.deleteById(setmealId);
        //删除套餐菜品关系表中的数据
        setmealDishMapper.deleteBySetmealId(setmealId);
    });
}
~~~

#### 3.2.4 SetmealMapper

~~~java
/**
     * 根据id查询套餐
     * @param id
     * @return
*/
@Select("select * from setmeal where id = #{id}")
Setmeal getById(Long id);

/**
     * 根据id删除套餐
     * @param setmealId
*/
@Delete("delete from setmeal where id = #{id}")
void deleteById(Long setmealId);
~~~

#### 3.2.5 SetmealDishMapper

~~~java
/**
     * 根据套餐id删除套餐和菜品的关联关系
     * @param setmealId
*/
@Delete("delete from setmeal_dish where setmeal_id = #{setmealId}")
void deleteBySetmealId(Long setmealId);
~~~

### 3.3 功能测试

略

## 4. 修改套餐

### 4.1 需求分析和设计

产品原型：

![image-20221018160214225](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018160214225.png)

接口设计（共涉及到5个接口）：

- 根据id查询套餐
- 根据类型查询分类（已完成）
- 根据分类id查询菜品（已完成）
- 图片上传（已完成）
- 修改套餐

![image-20221018160915177](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018160915177.png)

![image-20221018160949864](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018160949864.png)



![image-20221018161046352](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018161046352.png)

![image-20221018161117780](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018161117780.png)

![image-20221018161139861](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018161139861.png)

### 4.2 代码实现

#### 4.2.1 SetmealController

~~~java
/**
     * 根据id查询套餐，用于修改页面回显数据
     *
     * @param id
     * @return
*/
@GetMapping("/{id}")
@ApiOperation("根据id查询套餐")
public Result<SetmealVO> getById(@PathVariable Long id) {
    SetmealVO setmealVO = setmealService.getByIdWithDish(id);
    return Result.success(setmealVO);
}

/**
     * 修改套餐
     *
     * @param setmealDTO
     * @return
*/
@PutMapping
@ApiOperation("修改套餐")
public Result update(@RequestBody SetmealDTO setmealDTO) {
    setmealService.update(setmealDTO);
    return Result.success();
}
~~~

#### 4.2.2 SetmealService

~~~java
/**
     * 根据id查询套餐和关联的菜品数据
     * @param id
     * @return
*/
SetmealVO getByIdWithDish(Long id);

/**
     * 修改套餐
     * @param setmealDTO
*/
void update(SetmealDTO setmealDTO);
~~~

#### 4.2.3 SetmealServiceImpl

~~~java
/**
     * 根据id查询套餐和套餐菜品关系
     *
     * @param id
     * @return
*/
public SetmealVO getByIdWithDish(Long id) {
    Setmeal setmeal = setmealMapper.getById(id);
    List<SetmealDish> setmealDishes = setmealDishMapper.getBySetmealId(id);

    SetmealVO setmealVO = new SetmealVO();
    BeanUtils.copyProperties(setmeal, setmealVO);
    setmealVO.setSetmealDishes(setmealDishes);
    
    return setmealVO;
}

/**
     * 修改套餐
     *
     * @param setmealDTO
*/
@Transactional
public void update(SetmealDTO setmealDTO) {
    Setmeal setmeal = new Setmeal();
    BeanUtils.copyProperties(setmealDTO, setmeal);

    //1、修改套餐表，执行update
    setmealMapper.update(setmeal);

    //套餐id
    Long setmealId = setmealDTO.getId();

    //2、删除套餐和菜品的关联关系，操作setmeal_dish表，执行delete
    setmealDishMapper.deleteBySetmealId(setmealId);

    List<SetmealDish> setmealDishes = setmealDTO.getSetmealDishes();
    setmealDishes.forEach(setmealDish -> {
        setmealDish.setSetmealId(setmealId);
    });
    //3、重新插入套餐和菜品的关联关系，操作setmeal_dish表，执行insert
    setmealDishMapper.insertBatch(setmealDishes);
}
~~~

#### 4.2.4 SetmealDishMapper

~~~java
	/**
     * 根据套餐id查询套餐和菜品的关联关系
     * @param setmealId
     * @return
     */
    @Select("select * from setmeal_dish where setmeal_id = #{setmealId}")
    List<SetmealDish> getBySetmealId(Long setmealId);
~~~



### 4.3 功能测试

略

## 5. 起售停售套餐

### 5.1 需求分析和设计

产品原型：

![image-20221018163720881](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018163720881.png)

业务规则：

- 可以对状态为起售的套餐进行停售操作，可以对状态为停售的套餐进行起售操作
- 起售的套餐可以展示在用户端，停售的套餐不能展示在用户端
- 起售套餐时，如果套餐内包含停售的菜品，则不能起售

接口设计：

![image-20221018165055208](http://stofu80ry.sabkt.gdipper.com/picture/image-20221018165055208.png)

### 5.2 代码实现

#### 5.2.1 SetmealController

~~~java
/**
     * 套餐起售停售
     * @param status
     * @param id
     * @return
*/
@PostMapping("/status/{status}")
@ApiOperation("套餐起售停售")
public Result startOrStop(@PathVariable Integer status, Long id) {
    setmealService.startOrStop(status, id);
    return Result.success();
}
~~~

#### 5.2.2 SetmealService

~~~java
/**
     * 套餐起售、停售
     * @param status
     * @param id
*/
void startOrStop(Integer status, Long id);
~~~

#### 5.2.3 SetmealServiceImpl

~~~java
/**
     * 套餐起售、停售
     * @param status
     * @param id
*/
public void startOrStop(Integer status, Long id) {
    //起售套餐时，判断套餐内是否有停售菜品，有停售菜品提示"套餐内包含未启售菜品，无法启售"
    if(status == StatusConstant.ENABLE){
        //select a.* from dish a left join setmeal_dish b on a.id = b.dish_id where b.setmeal_id = ?
        List<Dish> dishList = dishMapper.getBySetmealId(id);
        if(dishList != null && dishList.size() > 0){
            dishList.forEach(dish -> {
                if(StatusConstant.DISABLE == dish.getStatus()){
                    throw new SetmealEnableFailedException(MessageConstant.SETMEAL_ENABLE_FAILED);
                }
            });
        }
    }

    Setmeal setmeal = Setmeal.builder()
        .id(id)
        .status(status)
        .build();
    setmealMapper.update(setmeal);
}
~~~

#### 5.2.4 DishMapper

~~~java
/**
     * 根据套餐id查询菜品
     * @param setmealId
     * @return
*/
@Select("select a.* from dish a left join setmeal_dish b on a.id = b.dish_id where b.setmeal_id = #{setmealId}")
List<Dish> getBySetmealId(Long setmealId);
~~~

### 5.3 功能测试

略

# 苍穹外卖-day05

## 课程内容

- Redis入门
- Redis数据类型
- Redis常用命令
- 在Java中操作Redis
- 店铺营业状态设置

功能实现：**营业状态设置**

**效果图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221130223019209.png" alt="image-20221130223019209" style="zoom:50%;" /> 

选择**营业中**，客户可在小程序端下单：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221130223113561.png" alt="image-20221130223113561" style="zoom:50%;" /> 

选择**打烊中**，客户无法在小程序端下单：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221130223205032.png" alt="image-20221130223205032" style="zoom:50%;" /> 



## 1. Redis入门

## 2. Redis数据类型

## 3. Redis常用命令

## 4.在Java中操作Redis

[redis基础](../redis/redis基础.md)

## 5. 店铺营业状态设置

### 5.1 需求分析和设计

#### 5.1.1 产品原型

进到苍穹外卖后台，显示餐厅的营业状态，营业状态分为**营业中**和**打烊中**，若当前餐厅处于营业状态，自动接收任何订单，客户可在小程序进行下单操作；若当前餐厅处于打烊状态，不接受任何订单，客户便无法在小程序进行下单操作。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221130212134915.png" alt="image-20221130212134915" style="zoom:50%;" /> 

点击**营业状态**按钮时，弹出更改营业状态

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221130213550300.png" alt="image-20221130213550300" style="zoom:50%;" /> 

选择营业，设置餐厅为**营业中**状态

选择打烊，设置餐厅为**打烊中**状态

**状态说明：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221130213947179.png" alt="image-20221130213947179" style="zoom: 67%;" /> 



#### 5.1.2 接口设计

根据上述原型图设计接口，共包含3个接口。

**接口设计：**

- 设置营业状态
- 管理端查询营业状态
- 用户端查询营业状态

**注：**从技术层面分析，其实管理端和用户端查询营业状态时，可通过一个接口去实现即可。因为营业状态是一致的。但是，本项目约定：

- **管理端**发出的请求，统一使用/admin作为前缀。
- **用户端**发出的请求，统一使用/user作为前缀。

因为访问路径不一致，故分为两个接口实现。

**1). 设置营业状态**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221130215725802.png" alt="image-20221130215725802" style="zoom:50%;" /> 



**2). 管理端营业状态**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221130215814021.png" alt="image-20221130215814021" style="zoom:50%;" /> 



**3). 用户端营业状态**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221130215836785.png" alt="image-20221130215836785" style="zoom:50%;" /> 



#### 5.1.3 营业状态存储方式

虽然，可以通过一张表来存储营业状态数据，但整个表中只有一个字段，所以意义不大。

营业状态数据存储方式：基于Redis的字符串来进行存储

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221130220037713.png" alt="image-20221130220037713" style="zoom:50%;" /> 

**约定：**1表示营业 0表示打烊



### 5.2 代码开发

#### 5.2.1 设置营业状态

在sky-server模块中，创建ShopController.java

**根据接口定义创建ShopController的setStatus设置营业状态方法：**

```java
package com.sky.controller.admin;

import com.sky.result.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("adminShopController")
@RequestMapping("/admin/shop")
@Api(tags = "店铺相关接口")
@Slf4j
public class ShopController {

    public static final String KEY = "SHOP_STATUS";

    @Autowired
    private RedisTemplate redisTemplate;

    /**
     * 设置店铺的营业状态
     * @param status
     * @return
     */
    @PutMapping("/{status}")
    @ApiOperation("设置店铺的营业状态")
    public Result setStatus(@PathVariable Integer status){
        log.info("设置店铺的营业状态为：{}",status == 1 ? "营业中" : "打烊中");
        redisTemplate.opsForValue().set(KEY,status);
        return Result.success();
    }
}
```



#### 5.2.2 管理端查询营业状态

**根据接口定义创建ShopController的getStatus查询营业状态方法：**

```java
        /**
         * 获取店铺的营业状态
         * @return
         */
        @GetMapping("/status")
        @ApiOperation("获取店铺的营业状态")
        public Result<Integer> getStatus(){
            Integer status = (Integer) redisTemplate.opsForValue().get(KEY);
            log.info("获取到店铺的营业状态为：{}",status == 1 ? "营业中" : "打烊中");
            return Result.success(status);
        }
```



#### 5.2.3 用户端查询营业状态

创建com.sky.controller.user包，在该包下创建ShopController.java

**根据接口定义创建ShopController的getStatus查询营业状态方法：**

```java
package com.sky.controller.user;

import com.sky.result.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

@RestController("userShopController")
@RequestMapping("/user/shop")
@Api(tags = "店铺相关接口")
@Slf4j
public class ShopController {

    public static final String KEY = "SHOP_STATUS";

    @Autowired
    private RedisTemplate redisTemplate;

    /**
     * 获取店铺的营业状态
     * @return
     */
    @GetMapping("/status")
    @ApiOperation("获取店铺的营业状态")
    public Result<Integer> getStatus(){
        Integer status = (Integer) redisTemplate.opsForValue().get(KEY);
        log.info("获取到店铺的营业状态为：{}",status == 1 ? "营业中" : "打烊中");
        return Result.success(status);
    }
}
```



### 5.3 功能测试

#### 5.3.1 接口文档测试

**启动服务：**访问http://localhost:8080/doc.html，打开店铺相关接口

**注意：**使用admin用户登录重新获取token，防止token失效。

**设置营业状态：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221201175251351.png" alt="image-20221201175251351" style="zoom:50%;" /> 

点击发送

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221201175428279.png" alt="image-20221201175428279" style="zoom:50%;" /> 

查看Idea控制台日志

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221201175511626.png" alt="image-20221201175511626" style="zoom:50%;" /> 

查看Redis中数据

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221201175634896.png" alt="image-20221201175634896" style="zoom:50%;" /> 



**管理端查询营业状态：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221201175807978.png" alt="image-20221201175807978" style="zoom:50%;" /> 



**用户端查询营业状态：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221201175917397.png" alt="image-20221201175917397" style="zoom:50%;" /> 



#### 5.3.2 接口分组展示

在上述接口文档测试中，管理端和用户端的接口放在一起，不方便区分。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221201181927458.png" alt="image-20221201181927458" style="zoom:50%;" /> 

接下来，我们要实现管理端和用户端接口进行区分。

在WebMvcConfiguration.java中，分别扫描"com.sky.controller.admin"和"com.sky.controller.user"这两个包。

```java
	@Bean
    public Docket docket1(){
        log.info("准备生成接口文档...");
        ApiInfo apiInfo = new ApiInfoBuilder()
                .title("苍穹外卖项目接口文档")
                .version("2.0")
                .description("苍穹外卖项目接口文档")
                .build();

        Docket docket = new Docket(DocumentationType.SWAGGER_2)
                .groupName("管理端接口")
                .apiInfo(apiInfo)
                .select()
                //指定生成接口需要扫描的包
                .apis(RequestHandlerSelectors.basePackage("com.sky.controller.admin"))
                .paths(PathSelectors.any())
                .build();

        return docket;
    }

    @Bean
    public Docket docket2(){
        log.info("准备生成接口文档...");
        ApiInfo apiInfo = new ApiInfoBuilder()
                .title("苍穹外卖项目接口文档")
                .version("2.0")
                .description("苍穹外卖项目接口文档")
                .build();

        Docket docket = new Docket(DocumentationType.SWAGGER_2)
                .groupName("用户端接口")
                .apiInfo(apiInfo)
                .select()
                //指定生成接口需要扫描的包
                .apis(RequestHandlerSelectors.basePackage("com.sky.controller.user"))
                .paths(PathSelectors.any())
                .build();

        return docket;
    }
```

重启服务器，再次访问接口文档，可进行选择**用户端接口**或者**管理端接口**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221201182658244.png" alt="image-20221201182658244" style="zoom:50%;" /> 



#### 5.3.3 前后端联调测试

启动nginx,访问 http://localhost

进入后台，状态为**营业中**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221201180353062.png" alt="image-20221201180353062" style="zoom:50%;" /> 

点击**营业状态设置**，修改状态为**打烊中**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221201180529842.png" alt="image-20221201180529842" style="zoom:50%;" /> 

再次查看状态，状态已为**打烊中**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221201180639063.png" alt="image-20221201180639063" style="zoom:50%;" /> 



### 5.4 代码提交

# 苍穹外卖-day06

## 课程内容

- HttpClient
- 微信小程序开发
- 微信登录
- 导入商品浏览功能代码



功能实现：**微信登录**、**商品浏览**

**微信登录效果图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203184545847.png" alt="image-20221203184545847" style="zoom:50%;" /> 



**商品浏览效果图：**

<img src="C:/Users/86157/Downloads/讲义/day06/assets/image-20221203184623026.png" alt="image-20221203184623026" style="zoom:50%;" /> <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203184638043.png" alt="image-20221203184638043" style="zoom:50%;" /> 



## 1. HttpClient

### 1.1 介绍

HttpClient 是Apache Jakarta Common 下的子项目，可以用来提供高效的、最新的、功能丰富的支持 HTTP 协议的客户端编程工具包，并且它支持 HTTP 协议最新的版本和建议。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203185003231.png" alt="image-20221203185003231" style="zoom:50%;" /> 

**HttpClient作用：**

- 发送HTTP请求
- 接收响应数据

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203185149985.png" alt="image-20221203185149985" style="zoom:33%;" />  为什么要在Java程序中发送Http请求？有哪些应用场景呢？

**HttpClient应用场景：**

当我们在使用扫描支付、查看地图、获取验证码、查看天气等功能时

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203185536013.png" alt="image-20221203185536013" style="zoom: 50%;" />  <img src="C:/Users/86157/Downloads/讲义/day06/assets/image-20221203185557674.png" alt="image-20221203185557674" style="zoom:50%;" />   <img src="C:/Users/86157/Downloads/讲义/day06/assets/image-20221203185614509.png" alt="image-20221203185614509" style="zoom:50%;" />   <img src="C:/Users/86157/Downloads/讲义/day06/assets/image-20221203185632934.png" alt="image-20221203185632934" style="zoom:50%;" /> 



其实，应用程序本身并未实现这些功能，都是在应用程序里访问提供这些功能的服务，访问这些服务需要发送HTTP请求，并且接收响应数据，可通过HttpClient来实现。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203185427462.png" alt="image-20221203185427462" style="zoom:50%;" /> 

**HttpClient的maven坐标：**

```xml
<dependency>
	<groupId>org.apache.httpcomponents</groupId>
	<artifactId>httpclient</artifactId>
	<version>4.5.13</version>
</dependency>
```



**HttpClient的核心API：⭐**

- HttpClient：Http客户端对象类型，使用该类型对象可发起Http请求。
- HttpClients：可认为是构建器，可创建HttpClient对象。
- CloseableHttpClient：实现类，实现了HttpClient接口。
- HttpGet：Get方式请求类型。
- HttpPost：Post方式请求类型。

**HttpClient发送请求步骤：**

- 创建HttpClient对象
- 创建Http请求对象
- 调用HttpClient的execute方法发送请求



### 1.2 入门案例

对HttpClient编程工具包有了一定了解后，那么，我们使用HttpClient在Java程序当中来构造Http的请求，并且把请求发送出去，接下来，就通过入门案例分别发送**GET请求**和**POST请求**，具体来学习一下它的使用方法。

#### 1.2.1 GET方式请求

正常来说，首先，应该导入HttpClient相关的坐标，但在项目中，就算不导入，也可以使用相关的API。

因为在项目中已经引入了aliyun-sdk-oss坐标：

```xml
<dependency>
    <groupId>com.aliyun.oss</groupId>
    <artifactId>aliyun-sdk-oss</artifactId>
</dependency>
```

上述依赖的底层已经包含了HttpClient相关依赖。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203194852825.png" alt="image-20221203194852825" style="zoom:50%;" /> 

故选择导入或者不导入均可。

进入到sky-server模块，编写测试代码，发送GET请求。

**实现步骤：**⭐

1. 创建HttpClient对象
2. 创建请求对象
3. 发送请求，接受响应结果
4. 解析结果
5. 关闭资源

```java
package com.sky.test;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class HttpClientTest {

    /**
     * 测试通过httpclient发送GET方式的请求
     */
    @Test
    public void testGET() throws Exception{
        //创建httpclient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();

        //创建请求对象
        HttpGet httpGet = new HttpGet("http://localhost:8080/user/shop/status");

        //发送请求，接受响应结果
        CloseableHttpResponse response = httpClient.execute(httpGet);

        //获取服务端返回的状态码
        int statusCode = response.getStatusLine().getStatusCode();
        System.out.println("服务端返回的状态码为：" + statusCode);

        HttpEntity entity = response.getEntity();
        String body = EntityUtils.toString(entity);
        System.out.println("服务端返回的数据为：" + body);

        //关闭资源
        response.close();
        httpClient.close();
    }
}
```

在访问http://localhost:8080/user/shop/status请求时，需要提前启动项目。

**测试结果：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203195917572.png" alt="image-20221203195917572" style="zoom:50%;" /> 



#### 1.2.2 POST方式请求

在HttpClientTest中添加POST方式请求方法，相比GET请求来说，POST请求若携带参数需要封装请求体对象，并将该对象设置在请求对象中。

**实现步骤：**

1. 创建HttpClient对象
2. 创建请求对象
3. 发送请求，接收响应结果
4. 解析响应结果
5. 关闭资源

```java
	/**
     * 测试通过httpclient发送POST方式的请求
     */
    @Test
    public void testPOST() throws Exception{
        // 创建httpclient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();

        //创建请求对象
        HttpPost httpPost = new HttpPost("http://localhost:8080/admin/employee/login");

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("username","admin");
        jsonObject.put("password","123456");

        StringEntity entity = new StringEntity(jsonObject.toString());
        //指定请求编码方式
        entity.setContentEncoding("utf-8");
        //数据格式
        entity.setContentType("application/json");
        httpPost.setEntity(entity);

        //发送请求
        CloseableHttpResponse response = httpClient.execute(httpPost);

        //解析返回结果
        int statusCode = response.getStatusLine().getStatusCode();
        System.out.println("响应码为：" + statusCode);

        HttpEntity entity1 = response.getEntity();
        String body = EntityUtils.toString(entity1);
        System.out.println("响应数据为：" + body);

        //关闭资源
        response.close();
        httpClient.close();
    }
```

**测试结果：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203201023925.png" alt="image-20221203201023925" style="zoom:50%;" /> 



## 2. 微信小程序开发⭐⭐

### 2.1 介绍

小程序是一种新的开放能力，开发者可以快速地开发一个小程序。可以在微信内被便捷地获取和传播，同时具有出色的使用体验。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203204712437.png" alt="image-20221203204712437" style="zoom:50%;" /> 

**官方网址：**https://mp.weixin.qq.com/cgi-bin/wx?token=&lang=zh_CN

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203205305487.png" alt="image-20221203205305487" style="zoom:50%;" /> 

小程序主要运行微信内部，可通过上述网站来整体了解微信小程序的开发。

**首先，**在进行小程序开发时，需要先去注册一个小程序，在注册的时候，它实际上又分成了不同的注册的主体。我们可以以个人的身份来注册一个小程序，当然，也可以以企业政府、媒体或者其他组织的方式来注册小程序。那么，不同的主体注册小程序，最终开放的权限也是不一样的。比如以个人身份来注册小程序，是无法开通支付权限的。若要提供支付功能，必须是企业、政府或者其它组织等。所以，不同的主体注册小程序后，可开发的功能是不一样的。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203210640473.png" alt="image-20221203210640473" style="zoom:50%;" /> 



**然后，**微信小程序我们提供的一些开发的支持，实际上微信的官方是提供了一系列的工具来帮助开发者快速的接入
并且完成小程序的开发，提供了完善的开发文档，并且专门提供了一个开发者工具，还提供了相应的设计指南，同时也提供了一些小程序体验DEMO，可以快速的体验小程序实现的功能。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203211226920.png" alt="image-20221203211226920" style="zoom:50%;" /> 

**最后，**开发完一个小程序要上线，也给我们提供了详细地接入流程。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203211535565.png" alt="image-20221203211535565" style="zoom:50%;" /> 



### 2.2 准备工作

开发微信小程序之前需要做如下准备工作：

- 注册小程序
- 完善小程序信息
- 下载开发者工具

**1). 注册小程序**

注册地址：https://mp.weixin.qq.com/wxopen/waregister?action=step1

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203212348111.png" alt="image-20221203212348111" style="zoom: 50%;" /> 



**2). 完善小程序信息**

登录小程序后台：https://mp.weixin.qq.com/

两种登录方式选其一即可

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203212454040.png" alt="image-20221203212454040" style="zoom:50%;" /> <img src="C:/Users/86157/Downloads/讲义/day06/assets/image-20221203212508081.png" alt="image-20221203212508081" style="zoom:50%;" /> 

完善小程序信息、小程序类目

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203212615981.png" alt="image-20221203212615981" style="zoom:50%;" /> 

查看小程序的 AppID

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203212702993.png" alt="image-20221203212702993" style="zoom:50%;" /> 



**3). 下载开发者工具**

资料中已提供，无需下载，熟悉下载步骤即可。

下载地址： https://developers.weixin.qq.com/mi niprogram/dev/devtools/stable.html

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203212836364.png" alt="image-20221203212836364" style="zoom:50%;" /> 

扫描登录开发者工具

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203212954956.png" alt="image-20221203212954956" style="zoom:50%;" /> 

创建小程序项目

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203213042020.png" alt="image-20221203213042020" style="zoom:50%;" /> 

熟悉开发者工具布局

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203213108317.png" alt="image-20221203213108317" style="zoom:50%;" /> 

**设置不校验合法域名**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203213212370.png" alt="image-20221203213212370" style="zoom:50%;" /> 

**注：**开发阶段，小程序发出请求到后端的Tomcat服务器，若不勾选，请求发送失败。



### 2.3 入门案例

实际上，小程序的开发本质上属于前端开发，主要使用JavaScript开发，咱们现在的定位主要还是在后端，所以，对于小程序开发简单了解即可。

#### 2.3.1 小程序目录结构

小程序包含一个描述整体程序的 app 和多个描述各自页面的 page。一个小程序主体部分由三个文件组成，必须放在项目的根目录，如下：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203220557676.png" alt="image-20221203220557676" style="zoom:50%;" /> 

**文件说明：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203220635867.png" alt="image-20221203220635867" style="zoom:50%;" /> 

**app.js：**必须存在，主要存放小程序的逻辑代码

**app.json：**必须存在，小程序配置文件，主要存放小程序的公共配置

**app.wxss:**  非必须存在，主要存放小程序公共样式表，类似于前端的CSS样式

对小程序主体三个文件了解后，其实一个小程序又有多个页面。比如说，有商品浏览页面、购物车的页面、订单支付的页面、商品的详情页面等等。那这些页面会放在哪呢？
会存放在pages目录。

每个小程序页面主要由四个文件组成：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203220826893.png" alt="image-20221203220826893" style="zoom:50%;" /> 

**文件说明：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221203220839187.png" alt="image-20221203220839187" style="zoom:50%;" /> 

**js文件：**必须存在，存放页面业务逻辑代码，编写的js代码。

**wxml文件：**必须存在，存放页面结构，主要是做页面布局，页面效果展示的，类似于HTML页面。

**json文件：**非必须，存放页面相关的配置。

**wxss文件：**非必须，存放页面样式表，相当于CSS文件。



#### 2.3.2 编写和编译小程序⭐

**1). 编写**

进入到index.wxml，编写页面布局

```xml
<view class="container">
  <view>{{msg}}</view>
   <view>
    <button type="default" bindtap="getUserInfo">获取用户信息</button>
    <image style="width: 100px;height: 100px;" src="{{avatarUrl}}"></image>
    {{nickName}}
  </view>
   <view>
    <button type="primary" bindtap="wxlogin">微信登录</button>
    授权码：{{code}}
  </view>
   <view>
    <button type="warn" bindtap="sendRequest">发送请求</button>
    响应结果：{{result}}
  </view>
</view>
```

进入到index.js，编写业务逻辑代码

```javascript
Page({
  data:{
    msg:'hello world',
    avatarUrl:'',
    nickName:'',
    code:'',
    result:''
  },
  getUserInfo:function(){
    wx.getUserProfile({
      desc: '获取用户信息',
      success:(res) => {
        console.log(res)
        this.setData({
          avatarUrl:res.userInfo.avatarUrl,
          nickName:res.userInfo.nickName
        })
      }
    })
  },
  wxlogin:function(){
    wx.login({
      success: (res) => {
        console.log("授权码："+res.code)
        this.setData({
          code:res.code
        })
      }
    })
  },
  sendRequest:function(){
    wx.request({
      url: 'http://localhost:8080/user/shop/status',
      method:'GET',
      success:(res) => {
        console.log("响应结果：" + res.data.data)
        this.setData({
          result:res.data.data
        })
      }
    })
  }})
```



**2). 编译**

点击编译按钮

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204181233015.png" alt="image-20221204181233015" style="zoom:50%;" /> 



**3). 运行效果**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204181606927.png" alt="image-20221204181606927" style="zoom:50%;" /> 



点击**获取用户信息**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204182056440.png" alt="image-20221204182056440" style="zoom: 67%;" /> 



点击**微信登录**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204182238762.png" alt="image-20221204182238762" style="zoom: 67%;" /> 



点击**发送请求**

因为请求http://localhost:8080/user/shop/status，先要启动后台项目。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204192519728.png" alt="image-20221204192519728" style="zoom: 67%;" /> 

**注：**设置不校验合法域名，若不勾选，请求发送失败。



#### 2.3.3 发布小程序

小程序的代码都已经开发完毕，要将小程序发布上线，让所有的用户都能使用到这个小程序。

点击上传按钮：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204225355015.png" alt="image-20221204225355015" style="zoom:50%;" /> 

指定版本号：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204225502698.png" alt="image-20221204225502698" style="zoom:50%;" /> 

上传成功：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204225557820.png" alt="image-20221204225557820" style="zoom:50%;" /> 

把代码上传到微信服务器就表示小程序已经发布了吗？
**其实并不是。**当前小程序版本只是一个开发版本。

进到微信公众平台，打开版本管理页面。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204230231476.png" alt="image-20221204230231476" style="zoom:50%;" /> 

需提交审核，变成审核版本，审核通过后，进行发布，变成线上版本。

一旦成为线上版本，这就说明小程序就已经发布上线了，微信用户就可以在微信里面去搜索和使用这个小程序了。



## 3. 微信登录

### 3.1 导入小程序代码

开发微信小程序，本质上是属于前端的开发，我们的重点其实还是后端代码开发。所以，小程序的代码已经提供好了，直接导入到微信开发者工具当中，直接来使用就可以了。

**1). 找到资料**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204205429798.png" alt="image-20221204205429798" style="zoom: 67%;" /> 



**2). 导入代码**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204205631809.png" alt="image-20221204205631809" style="zoom:50%;" /> 

AppID：使用自己的AppID

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204210011364.png" alt="image-20221204210011364" style="zoom:50%;" /> 



**3). 查看项目结构**

主体的文件:app.js app.json app.wxss
项目的页面比较多，主要存放在pages目录。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204210739195.png" alt="image-20221204210739195" style="zoom:50%;" /> 



**4). 修改配置**

因为小程序要请求后端服务，需要修改为自己后端服务的ip地址和端口号(默认不需要修改)

common-->vendor.js-->搜索(ctrl+f)-->baseUri

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204211239035.png" alt="image-20221204211239035" style="zoom:50%;" /> 



### 3.2 微信登录流程⭐

微信登录：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html

**流程图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204211800753.png" alt="image-20221204211800753" style="zoom:50%;" /> 



**步骤分析：**

1. 小程序端，调用wx.login()获取code，就是授权码。
2. 小程序端，调用wx.request()发送请求并携带code，请求开发者服务器(自己编写的后端服务)。
3. 开发者服务端，通过HttpClient向微信接口服务发送请求，并携带appId+appsecret+code三个参数。
4. 开发者服务端，接收微信接口服务返回的数据，session_key+opendId等。opendId是微信用户的唯一标识。
5. 开发者服务端，自定义登录态，生成令牌(token)和openid等数据返回给小程序端，方便后绪请求身份校验。
6. 小程序端，收到自定义登录态，存储storage。
7. 小程序端，后绪通过wx.request()发起业务请求时，携带token。
8. 开发者服务端，收到请求后，通过携带的token，解析当前登录用户的id。
9. 开发者服务端，身份校验通过后，继续相关的业务逻辑处理，最终返回业务数据。



接下来，我们使用Postman进行测试。

**说明：**

1. 调用 [wx.login()](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html) 获取 **临时登录凭证code** ，并回传到开发者服务器。
2. 调用 [auth.code2Session](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html) 接口，换取 **用户唯一标识 OpenID** 、 用户在微信开放平台帐号下的**唯一标识UnionID**（若当前小程序已绑定到微信开放平台帐号） 和 **会话密钥 session_key**。

之后开发者服务器可以根据用户标识来生成自定义登录态，用于后续业务逻辑中前后端交互时识别用户身份。

**实现步骤：**

**1). 获取授权码**

点击确定按钮，获取授权码，每个授权码只能使用一次，每次测试，需重新获取。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204222008130.png" alt="image-20221204222008130" style="zoom:50%;" /> 



**2). 明确请求接口**

请求方式、请求路径、请求参数

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204222434054.png" alt="image-20221204222434054" style="zoom:50%;" /> 



**3). 发送请求**

获取session_key和openid

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204223956568.png" alt="image-20221204223956568" style="zoom:50%;" /> 

若出现code been used错误提示，说明授权码已被使用过，请重新获取

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221204224130409.png" alt="image-20221204224130409" style="zoom:50%;" /> 

 

### 3.3 需求分析和设计

#### 3.3.1 产品原型

用户进入到小程序的时候，微信授权登录之后才能点餐。需要获取当前微信用户的相关信息，比如昵称、头像等，这样才能够进入到小程序进行下单操作。是基于微信登录来实现小程序的登录功能，没有采用传统账户密码登录的方式。若第一次使用小程序来点餐，就是一个新用户，需要把这个新的用户保存到数据库当中完成自动注册。

**登录功能原型图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205173711304.png" alt="image-20221205173711304" style="zoom:50%;" /> 



**业务规则：**

- 基于微信登录实现小程序的登录功能
- 如果是新用户需要自动完成注册



#### 3.3.2 接口设计

通过微信登录的流程，如果要完成微信登录的话，最终就要获得微信用户的openid。在小程序端获取授权码后，向后端服务发送请求，并携带授权码，这样后端服务在收到授权码后，就可以去请求微信接口服务。最终，后端向小程序返回openid和token等数据。

基于上述的登录流程，就可以设计出该接口的**请求参数**和**返回数据**。

<img src="C:/Users/86157/Downloads/讲义/day06/assets/image-20221205175429394.png" alt="image-20221205175429394" style="zoom:50%;" /> <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205175441256.png" alt="image-20221205175441256" style="zoom:50%;" />

**说明：**请求路径/user/user/login,第一个user代表用户端，第二个user代表用户模块。



#### 3.3.3 表设计

当用户第一次使用小程序时，会完成自动注册，把用户信息存储到**user**表中。

| **字段名**  | **数据类型** | **说明**           | **备注** |
| ----------- | ------------ | ------------------ | -------- |
| id          | bigint       | 主键               | 自增     |
| openid      | varchar(45)  | 微信用户的唯一标识 |          |
| name        | varchar(32)  | 用户姓名           |          |
| phone       | varchar(11)  | 手机号             |          |
| sex         | varchar(2)   | 性别               |          |
| id_number   | varchar(18)  | 身份证号           |          |
| avatar      | varchar(500) | 微信用户头像路径   |          |
| create_time | datetime     | 注册时间           |          |

**说明：**手机号字段比较特殊，个人身份注册的小程序没有权限获取到微信用户的手机号。如果是以企业的资质
注册的小程序就能够拿到微信用户的手机号。



### 3.4 代码开发

#### 3.4.1 定义相关配置

**配置微信登录所需配置项：**

application-dev.yml

```yaml
sky:
  wechat:
    appid: xxxxx
    secret: xxxxx
```

application.yml

```yaml
sky:
  wechat:
    appid: ${sky.wechat.appid}
    secret: ${sky.wechat.secret}
```

**配置为微信用户生成jwt令牌时使用的配置项：**

application.yml

```yaml
sky:
  jwt:
    # 设置jwt签名加密时使用的秘钥
    admin-secret-key: itcast
    # 设置jwt过期时间
    admin-ttl: 7200000
    # 设置前端传递过来的令牌名称
    admin-token-name: token
    user-secret-key: itheima
    user-ttl: 7200000
    user-token-name: authentication
```



#### 3.4.2 DTO设计

**根据传入参数设计DTO类：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205183625049.png" alt="image-20221205183625049" style="zoom:50%;" /> 

在sky-pojo模块，UserLoginDTO.java已定义

```java
package com.sky.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * C端用户登录
 */
@Data
public class UserLoginDTO implements Serializable {

    private String code;

}
```



#### 3.4.3 VO设计

**根据返回数据设计VO类：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205183923272.png" alt="image-20221205183923272" style="zoom:50%;" /> 

在sky-pojo模块，UserLoginVO.java已定义

```java
package com.sky.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserLoginVO implements Serializable {

    private Long id;
    private String openid;
    private String token;

}
```



#### 3.4.4 Controller层

**根据接口定义创建UserController的login方法：**

```java
package com.sky.controller.user;

import com.sky.constant.JwtClaimsConstant;
import com.sky.dto.UserLoginDTO;
import com.sky.entity.User;
import com.sky.properties.JwtProperties;
import com.sky.result.Result;
import com.sky.service.UserService;
import com.sky.utils.JwtUtil;
import com.sky.vo.UserLoginVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/user/user")
@Api(tags = "C端用户相关接口")
@Slf4j
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private JwtProperties jwtProperties;

    /**
     * 微信登录
     * @param userLoginDTO
     * @return
     */
    @PostMapping("/login")
    @ApiOperation("微信登录")
    public Result<UserLoginVO> login(@RequestBody UserLoginDTO userLoginDTO){
        log.info("微信用户登录：{}",userLoginDTO.getCode());

        //微信登录
        User user = userService.wxLogin(userLoginDTO);//后绪步骤实现

        //为微信用户生成jwt令牌
        Map<String, Object> claims = new HashMap<>();
        claims.put(JwtClaimsConstant.USER_ID,user.getId());
        String token = JwtUtil.createJWT(jwtProperties.getUserSecretKey(), jwtProperties.getUserTtl(), claims);

        UserLoginVO userLoginVO = UserLoginVO.builder()
                .id(user.getId())
                .openid(user.getOpenid())
                .token(token)
                .build();
        return Result.success(userLoginVO);
    }
}
```

其中，JwtClaimsConstant.USER_ID常量已定义。



#### 3.4.5 Service层接口

**创建UserService接口：**

```java
package com.sky.service;

import com.sky.dto.UserLoginDTO;
import com.sky.entity.User;

public interface UserService {

    /**
     * 微信登录
     * @param userLoginDTO
     * @return
     */
    User wxLogin(UserLoginDTO userLoginDTO);
}
```



#### 3.4.6 Service层实现类

**创建UserServiceImpl实现类：**实现获取微信用户的openid和微信登录功能

```java
package com.sky.service.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.sky.constant.MessageConstant;
import com.sky.dto.UserLoginDTO;
import com.sky.entity.User;
import com.sky.exception.LoginFailedException;
import com.sky.mapper.UserMapper;
import com.sky.properties.WeChatProperties;
import com.sky.service.UserService;
import com.sky.utils.HttpClientUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    //微信服务接口地址
    public static final String WX_LOGIN = "https://api.weixin.qq.com/sns/jscode2session";

    @Autowired
    private WeChatProperties weChatProperties;
    @Autowired
    private UserMapper userMapper;

    /**
     * 微信登录
     * @param userLoginDTO
     * @return
     */
    public User wxLogin(UserLoginDTO userLoginDTO) {
        String openid = getOpenid(userLoginDTO.getCode());

        //判断openid是否为空，如果为空表示登录失败，抛出业务异常
        if(openid == null){
            throw new LoginFailedException(MessageConstant.LOGIN_FAILED);
        }

        //判断当前用户是否为新用户
        User user = userMapper.getByOpenid(openid);

        //如果是新用户，自动完成注册
        if(user == null){
            user = User.builder()
                    .openid(openid)
                    .createTime(LocalDateTime.now())
                    .build();
            userMapper.insert(user);//后绪步骤实现
        }

        //返回这个用户对象
        return user;
    }

    /**
     * 调用微信接口服务，获取微信用户的openid
     * @param code
     * @return
     */
    private String getOpenid(String code){
        //调用微信接口服务，获得当前微信用户的openid
        Map<String, String> map = new HashMap<>();
        map.put("appid",weChatProperties.getAppid());
        map.put("secret",weChatProperties.getSecret());
        map.put("js_code",code);
        map.put("grant_type","authorization_code");
        String json = HttpClientUtil.doGet(WX_LOGIN, map);

        JSONObject jsonObject = JSON.parseObject(json);
        String openid = jsonObject.getString("openid");
        return openid;
    }
}
```



#### 3.4.7 Mapper层

**创建UserMapper接口：**

```java
package com.sky.mapper;

import com.sky.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

    /**
     * 根据openid查询用户
     * @param openid
     * @return
     */
    @Select("select * from user where openid = #{openid}")
    User getByOpenid(String openid);

    /**
     * 插入数据
     * @param user
     */
    void insert(User user);
}
```

**创建UserMapper.xml映射文件：**

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.UserMapper">

    <insert id="insert" useGeneratedKeys="true" keyProperty="id">
        insert into user (openid, name, phone, sex, id_number, avatar, create_time)
        values (#{openid}, #{name}, #{phone}, #{sex}, #{idNumber}, #{avatar}, #{createTime})
    </insert>

</mapper>
```



#### 3.4.8 编写拦截器

**编写拦截器JwtTokenUserInterceptor：**统一拦截用户端发送的请求并进行jwt校验

```java
package com.sky.interceptor;

import com.sky.constant.JwtClaimsConstant;
import com.sky.context.BaseContext;
import com.sky.properties.JwtProperties;
import com.sky.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * jwt令牌校验的拦截器
 */
@Component
@Slf4j
public class JwtTokenUserInterceptor implements HandlerInterceptor {

    @Autowired
    private JwtProperties jwtProperties;

    /**
     * 校验jwt
     *
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //判断当前拦截到的是Controller的方法还是其他资源
        if (!(handler instanceof HandlerMethod)) {
            //当前拦截到的不是动态方法，直接放行
            return true;
        }

        //1、从请求头中获取令牌
        String token = request.getHeader(jwtProperties.getUserTokenName());

        //2、校验令牌
        try {
            log.info("jwt校验:{}", token);
            Claims claims = JwtUtil.parseJWT(jwtProperties.getUserSecretKey(), token);
            Long userId = Long.valueOf(claims.get(JwtClaimsConstant.USER_ID).toString());
            log.info("当前用户的id：", userId);
            BaseContext.setCurrentId(userId);
            //3、通过，放行
            return true;
        } catch (Exception ex) {
            //4、不通过，响应401状态码
            response.setStatus(401);
            return false;
        }
    }
}
```

**在WebMvcConfiguration配置类中注册拦截器：**

```java
	@Autowired
    private JwtTokenUserInterceptor jwtTokenUserInterceptor;
	/**
     * 注册自定义拦截器
     * @param registry
     */
    protected void addInterceptors(InterceptorRegistry registry) {
        log.info("开始注册自定义拦截器...");
        //.........

        registry.addInterceptor(jwtTokenUserInterceptor)
                .addPathPatterns("/user/**")
                .excludePathPatterns("/user/user/login")
                .excludePathPatterns("/user/shop/status");
    }
```



### 3.5 功能测试

重新编译小程序，进行登录，获取到openid和token数据

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205192506490.png" alt="image-20221205192506490" style="zoom:50%;" /> 

查看后台日志

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205192943394.png" alt="image-20221205192943394" style="zoom:67%;" />  

查看数据库user表，第一次登录，会自动注册

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205193018421.png" alt="image-20221205193018421" style="zoom: 67%;" />  



## 4. 导入商品浏览功能代码

### 4.1 需求分析和设计

#### 4.1.1 产品原型

用户登录成功后跳转到系统首页，在首页需要根据分类来展示菜品和套餐。如果菜品设置了口味信息，需要展示<img src="C:/Users/86157/Downloads/讲义/day06/assets/image-20210812205330291.png" alt="image-20210812205330291" style="zoom: 80%;" />按钮，否则显示<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20210812205346846.png" alt="image-20210812205346846" style="zoom:80%;" />按钮。

​         **菜品列表效果图**                                                   **菜品口味效果图**

<img src="C:/Users/86157/Downloads/讲义/day06/assets/image-20221205193821129.png" alt="image-20221205193821129" style="zoom: 50%;" />                               <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205193846867.png" alt="image-20221205193846867" style="zoom:50%;" /> 

​         **套餐列表效果图**                                                   **套餐详情效果图**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205193859016.png" alt="image-20221205193859016" style="zoom:50%;" />                               <img src="C:/Users/86157/Downloads/讲义/day06/assets/image-20221205193911476.png" alt="image-20221205193911476" style="zoom:50%;" /> 



#### 4.1.2 接口设计

根据上述原型图先**粗粒度**设计接口，共包含4个接口。

**接口设计：**

- 查询分类
- 根据分类id查询菜品
- 根据分类id查询套餐
- 根据套餐id查询包含的菜品



接下来**细粒度**分析每个接口，明确每个接口的请求方式、请求路径、传入参数和返回值。

**1). 查询分类**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205200235328.png" alt="image-20221205200235328" style="zoom:50%;" /> <img src="C:/Users/86157/Downloads/讲义/day06/assets/image-20221205200246588.png" alt="image-20221205200246588" style="zoom:50%;" />



**2). 根据分类id查询菜品**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205200319686.png" alt="image-20221205200319686" style="zoom:50%;" /> <img src="C:/Users/86157/Downloads/讲义/day06/assets/image-20221205200335214.png" alt="image-20221205200335214" style="zoom:50%;" />



**3). 根据分类id查询套餐**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205200415135.png" alt="image-20221205200415135" style="zoom:50%;" /> <img src="C:/Users/86157/Downloads/讲义/day06/assets/image-20221205200425607.png" alt="image-20221205200425607" style="zoom:50%;" />



**4). 根据套餐id查询包含的菜品**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205200537591.png" alt="image-20221205200537591" style="zoom:50%;" /> 



### 4.2 代码导入

导入资料中的商品浏览功能代码即可

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205201043358.png" alt="image-20221205201043358" style="zoom:50%;" /> 

可按照mapper-->service-->controller依次导入，这样代码不会显示相应的报错。

进入到sky-server模块中

#### 4.2.1 Mapper层

**在SetmealMapper.java中添加list和getDishItemBySetmealId两个方法**

```java
	/**
     * 动态条件查询套餐
     * @param setmeal
     * @return
     */
    List<Setmeal> list(Setmeal setmeal);

    /**
     * 根据套餐id查询菜品选项
     * @param setmealId
     * @return
     */
    @Select("select sd.name, sd.copies, d.image, d.description " +
            "from setmeal_dish sd left join dish d on sd.dish_id = d.id " +
            "where sd.setmeal_id = #{setmealId}")
    List<DishItemVO> getDishItemBySetmealId(Long setmealId);
```

**创建SetmealMapper.xml文件**

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.SetmealMapper">

    <select id="list" parameterType="Setmeal" resultType="Setmeal">
        select * from setmeal
        <where>
            <if test="name != null">
                and name like concat('%',#{name},'%')
            </if>
            <if test="categoryId != null">
                and category_id = #{categoryId}
            </if>
            <if test="status != null">
                and status = #{status}
            </if>
        </where>
    </select>
</mapper>
```



#### 4.2.2 Service层

**创建SetmealService.java**

```java
package com.sky.service;

import com.sky.dto.SetmealDTO;
import com.sky.dto.SetmealPageQueryDTO;
import com.sky.entity.Setmeal;
import com.sky.result.PageResult;
import com.sky.vo.DishItemVO;
import com.sky.vo.SetmealVO;
import java.util.List;

public interface SetmealService {

    /**
     * 条件查询
     * @param setmeal
     * @return
     */
    List<Setmeal> list(Setmeal setmeal);

    /**
     * 根据id查询菜品选项
     * @param id
     * @return
     */
    List<DishItemVO> getDishItemById(Long id);

}
```

**创建SetmealServiceImpl.java**

```java
package com.sky.service.impl;

import com.sky.entity.Setmeal;
import com.sky.mapper.DishMapper;
import com.sky.mapper.SetmealDishMapper;
import com.sky.mapper.SetmealMapper;
import com.sky.service.SetmealService;
import com.sky.vo.DishItemVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 套餐业务实现
 */
@Service
@Slf4j
public class SetmealServiceImpl implements SetmealService {

    @Autowired
    private SetmealMapper setmealMapper;
    @Autowired
    private SetmealDishMapper setmealDishMapper;
    @Autowired
    private DishMapper dishMapper;

    /**
     * 条件查询
     * @param setmeal
     * @return
     */
    public List<Setmeal> list(Setmeal setmeal) {
        List<Setmeal> list = setmealMapper.list(setmeal);
        return list;
    }

    /**
     * 根据id查询菜品选项
     * @param id
     * @return
     */
    public List<DishItemVO> getDishItemById(Long id) {
        return setmealMapper.getDishItemBySetmealId(id);
    }
}
```

**在DishService.java中添加listWithFlavor方法定义**

```java
	/**
     * 条件查询菜品和口味
     * @param dish
     * @return
     */
    List<DishVO> listWithFlavor(Dish dish);
```

**在DishServiceImpl.java中实现listWithFlavor方法**

```java
	/**
     * 条件查询菜品和口味
     * @param dish
     * @return
     */
    public List<DishVO> listWithFlavor(Dish dish) {
        List<Dish> dishList = dishMapper.list(dish);

        List<DishVO> dishVOList = new ArrayList<>();

        for (Dish d : dishList) {
            DishVO dishVO = new DishVO();
            BeanUtils.copyProperties(d,dishVO);

            //根据菜品id查询对应的口味
            List<DishFlavor> flavors = dishFlavorMapper.getByDishId(d.getId());

            dishVO.setFlavors(flavors);
            dishVOList.add(dishVO);
        }

        return dishVOList;
    }
```



#### 4.2.3 Controller层

**创建DishController.java**

```java
package com.sky.controller.user;

import com.sky.constant.StatusConstant;
import com.sky.entity.Dish;
import com.sky.result.Result;
import com.sky.service.DishService;
import com.sky.vo.DishVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController("userDishController")
@RequestMapping("/user/dish")
@Slf4j
@Api(tags = "C端-菜品浏览接口")
public class DishController {
    @Autowired
    private DishService dishService;

    /**
     * 根据分类id查询菜品
     *
     * @param categoryId
     * @return
     */
    @GetMapping("/list")
    @ApiOperation("根据分类id查询菜品")
    public Result<List<DishVO>> list(Long categoryId) {
        Dish dish = new Dish();
        dish.setCategoryId(categoryId);
        dish.setStatus(StatusConstant.ENABLE);//查询起售中的菜品

        List<DishVO> list = dishService.listWithFlavor(dish);

        return Result.success(list);
    }

}
```

**创建CategoryController.java**

```java
package com.sky.controller.user;

import com.sky.entity.Category;
import com.sky.result.Result;
import com.sky.service.CategoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController("userCategoryController")
@RequestMapping("/user/category")
@Api(tags = "C端-分类接口")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    /**
     * 查询分类
     * @param type
     * @return
     */
    @GetMapping("/list")
    @ApiOperation("查询分类")
    public Result<List<Category>> list(Integer type) {
        List<Category> list = categoryService.list(type);
        return Result.success(list);
    }
}
```

**创建SetmealController.java**

```java
package com.sky.controller.user;

import com.sky.constant.StatusConstant;
import com.sky.entity.Setmeal;
import com.sky.result.Result;
import com.sky.service.SetmealService;
import com.sky.vo.DishItemVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController("userSetmealController")
@RequestMapping("/user/setmeal")
@Api(tags = "C端-套餐浏览接口")
public class SetmealController {
    @Autowired
    private SetmealService setmealService;

    /**
     * 条件查询
     *
     * @param categoryId
     * @return
     */
    @GetMapping("/list")
    @ApiOperation("根据分类id查询套餐")
    public Result<List<Setmeal>> list(Long categoryId) {
        Setmeal setmeal = new Setmeal();
        setmeal.setCategoryId(categoryId);
        setmeal.setStatus(StatusConstant.ENABLE);

        List<Setmeal> list = setmealService.list(setmeal);
        return Result.success(list);
    }

    /**
     * 根据套餐id查询包含的菜品列表
     *
     * @param id
     * @return
     */
    @GetMapping("/dish/{id}")
    @ApiOperation("根据套餐id查询包含的菜品列表")
    public Result<List<DishItemVO>> dishList(@PathVariable("id") Long id) {
        List<DishItemVO> list = setmealService.getDishItemById(id);
        return Result.success(list);
    }
}
```



### 4.3 功能测试

重启服务器、重新编译小程序

微信登录进入首页

**菜品和套餐分类查询：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205205634465.png" alt="image-20221205205634465" style="zoom:50%;" /> 

**具体分类下的菜品查询：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205205935019.png" alt="image-20221205205935019" style="zoom:50%;" /> 

**菜品口味查询：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221205210121546.png" alt="image-20221205210121546" style="zoom:50%;" /> 



### 4.4 代码提交

# 苍穹外卖-day07

## 课程内容

- 缓存菜品
- 缓存套餐
- 添加购物车
- 查看购物车
- 清空购物车



功能实现：**缓存商品**、**购物车**

**效果图：**

<img src="C:/Users/86157/Downloads/讲义/day07/assets/image-20221208175444066.png" alt="image-20221208175444066" style="zoom:50%;" /> <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221208175454987.png" alt="image-20221208175454987" style="zoom:50%;" /><img src="C:/Users/86157/Downloads/讲义/day07/assets/image-20221208175533325.png" alt="image-20221208175533325" style="zoom:50%;" />



## 1. 缓存菜品

### 1.1 问题说明

用户端小程序展示的菜品数据都是通过查询数据库获得，如果用户端访问量比较大，数据库访问压力随之增大。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221208180228667.png" alt="image-20221208180228667" style="zoom:80%;" /> 

**结果：**系统响应慢、用户体验差



### 1.2 实现思路

通过Redis来缓存菜品数据，减少数据库查询操作。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221208180818572.png" alt="image-20221208180818572" style="zoom:80%;" /> 

**缓存逻辑分析：**

- 每个分类下的菜品保存一份缓存数据
- 数据库中菜品数据有变更时清理缓存数据

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221208181007639.png" alt="image-20221208181007639" style="zoom:67%;" /> 



### 1.3 代码开发

**修改用户端接口 DishController 的 list 方法，加入缓存处理逻辑：**

```java
	@Autowired
    private RedisTemplate redisTemplate;
	/**
     * 根据分类id查询菜品
     *
     * @param categoryId
     * @return
     */
    @GetMapping("/list")
    @ApiOperation("根据分类id查询菜品")
    public Result<List<DishVO>> list(Long categoryId) {

        //构造redis中的key，规则：dish_分类id
        String key = "dish_" + categoryId;

        //查询redis中是否存在菜品数据
        List<DishVO> list = (List<DishVO>) redisTemplate.opsForValue().get(key);
        if(list != null && list.size() > 0){
            //如果存在，直接返回，无须查询数据库
            return Result.success(list);
        }
		////////////////////////////////////////////////////////
        Dish dish = new Dish();
        dish.setCategoryId(categoryId);
        dish.setStatus(StatusConstant.ENABLE);//查询起售中的菜品

        //如果不存在，查询数据库，将查询到的数据放入redis中
        list = dishService.listWithFlavor(dish);
        ////////////////////////////////////////////////////////
        redisTemplate.opsForValue().set(key, list);

        return Result.success(list);
    }
```

为了保证**数据库**和**Redis**中的数据保持一致，修改**管理端接口 DishController** 的相关方法，加入清理缓存逻辑。

需要改造的方法：

- 新增菜品
- 修改菜品
- 批量删除菜品
- 起售、停售菜品

**抽取清理缓存的方法：**

在管理端DishController中添加

```java
	@Autowired
    private RedisTemplate redisTemplate;
	/**
     * 清理缓存数据
     * @param pattern
     */
    private void cleanCache(String pattern){
        Set keys = redisTemplate.keys(pattern);
        redisTemplate.delete(keys);
    }
```

**调用清理缓存的方法，保证数据一致性：**

**1). 新增菜品优化**

```java
	/**
     * 新增菜品
     *
     * @param dishDTO
     * @return
     */
    @PostMapping
    @ApiOperation("新增菜品")
    public Result save(@RequestBody DishDTO dishDTO) {
        log.info("新增菜品：{}", dishDTO);
        dishService.saveWithFlavor(dishDTO);

        //清理缓存数据
        String key = "dish_" + dishDTO.getCategoryId();
        cleanCache(key);
        return Result.success();
    }
```

**2). 菜品批量删除优化**

```java
	/**
     * 菜品批量删除
     *
     * @param ids
     * @return
     */
    @DeleteMapping
    @ApiOperation("菜品批量删除")
    public Result delete(@RequestParam List<Long> ids) {
        log.info("菜品批量删除：{}", ids);
        dishService.deleteBatch(ids);

        //将所有的菜品缓存数据清理掉，所有以dish_开头的key
        cleanCache("dish_*");

        return Result.success();
    }
```

**3). 修改菜品优化**

```java
	/**
     * 修改菜品
     *
     * @param dishDTO
     * @return
     */
    @PutMapping
    @ApiOperation("修改菜品")
    public Result update(@RequestBody DishDTO dishDTO) {
        log.info("修改菜品：{}", dishDTO);
        dishService.updateWithFlavor(dishDTO);

        //将所有的菜品缓存数据清理掉，所有以dish_开头的key
        cleanCache("dish_*");

        return Result.success();
    }
```

**4). 菜品起售停售优化**

```java
	/**
     * 菜品起售停售
     *
     * @param status
     * @param id
     * @return
     */
    @PostMapping("/status/{status}")
    @ApiOperation("菜品起售停售")
    public Result<String> startOrStop(@PathVariable Integer status, Long id) {
        dishService.startOrStop(status, id);

        //将所有的菜品缓存数据清理掉，所有以dish_开头的key
        cleanCache("dish_*");

        return Result.success();
    }
```



### 1.4 功能测试

可以通过如下方式进行测试：

- 查看控制台sql
- 前后端联调
- 查看Redis中的缓存数据

以**加入缓存**、**菜品修改**两个功能测试为例，通过前后端联调方式，查看控制台sql的打印和Redis中的缓存数据变化。



**1). 加入缓存**

当第一次查询某个分类的菜品时，会从数据为中进行查询，同时将查询的结果存储到Redis中，在后绪的访问，若查询相同分类的菜品时，直接从Redis缓存中查询，不再查询数据库。

**登录小程序：**选择蜀味牛蛙(id=17)

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210174656770.png" alt="image-20221210174656770" style="zoom:50%;" /> 

**查看控制台sql：**有查询语句，说明是从数据库中进行查询

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210174839028.png" alt="image-20221210174839028" style="zoom:50%;" /> 

**查看Redis中的缓存数据：**说明缓存成功

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210175055282.png" alt="image-20221210175055282" style="zoom:50%;" /> 

**再次访问：**选择蜀味牛蛙(id=17)

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210175438411.png" alt="image-20221210175438411" style="zoom:50%;" /> 

说明是从Redis中查询的数据。



**2). 菜品修改**

当在后台修改菜品数据时，为了保证Redis缓存中的数据和数据库中的数据时刻保持一致，当修改后，需要清空对应的缓存数据。用户再次访问时，还是先从数据库中查询，同时再把查询的结果存储到Redis中，这样，就能保证缓存和数据库的数据保持一致。

**进入后台：**修改蜀味牛蛙分类下的任意一个菜品，当前分类的菜品数据已在Redis中缓存

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210180624453.png" alt="image-20221210180624453" style="zoom:50%;" /> 

**修改：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210180900924.png" alt="image-20221210180900924" style="zoom:50%;" /> 

**查看Redis中的缓存数据：**说明修改时，已清空缓存

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210181142408.png" alt="image-20221210181142408" style="zoom:50%;" /> 

用户再次访问同一个菜品分类时，需要先查询数据库，再把结果同步到Redis中，保证了两者数据一致性。

其它功能测试步骤基本一致，自已测试即可。



### 1.5 代码提交



## 2. 缓存套餐

### 2.1 Spring Cache

#### 2.1.1 介绍

Spring Cache 是一个框架，实现了基于注解的缓存功能，只需要简单地加一个注解，就能实现缓存功能。

Spring Cache 提供了一层抽象，底层可以切换不同的缓存实现，例如：

- EHCache
- Caffeine
- Redis(常用)

**起步依赖：**

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-cache</artifactId>  		            		       	 <version>2.7.3</version> 
</dependency>
```



#### 2.1.2 常用注解

在SpringCache中提供了很多缓存操作的注解，常见的是以下的几个：

| **注解**       | **说明**                                                     |
| -------------- | ------------------------------------------------------------ |
| @EnableCaching | 开启缓存注解功能，通常加在启动类上                           |
| **@Cacheable** | 在方法执行前先查询缓存中是否有数据，如果有数据，则直接返回缓存数据；如果没有缓存数据，调用方法并将方法返回值放到缓存中 |
| @CachePut      | 将方法的返回值放到缓存中                                     |
| @CacheEvict    | 将一条或多条数据从缓存中删除                                 |

在spring boot项目中，使用缓存技术只需在项目中导入相关缓存技术的依赖包，并在启动类上使用@EnableCaching开启缓存支持即可。

例如，使用Redis作为缓存技术，只需要导入Spring data Redis的maven坐标即可。



#### 2.1.3 入门案例⭐⭐

**1). 环境准备**

**导入基础工程:**底层已使用Redis缓存实现

基础环境的代码，在我们今天的资料中已经准备好了， 大家只需要将这个工程导入进来就可以了。导入进来的工程结构如下： 

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210183942040.png" alt="image-20221210183942040" style="zoom:50%;" /> 

**数据库准备:**

创建名为spring_cache_demo数据库，将springcachedemo.sql脚本直接导入数据库中。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210184346304.png" alt="image-20221210184346304" style="zoom:80%;" /> 

**引导类上加@EnableCaching:**

```java
package com.itheima;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@Slf4j
@SpringBootApplication
@EnableCaching//开启缓存注解功能
public class CacheDemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(CacheDemoApplication.class,args);
        log.info("项目启动成功...");
    }
}
```



**2). @CachePut注解⭐**

**@CachePut 说明：** 

​	作用: **将方法返回值，放入缓存**

​	value: 缓存的名称, 每个缓存名称下面可以有很多key

​	key: 缓存的key  ----------> **支持Spring的表达式语言SPEL语法**



**在save方法上加注解@CachePut**

当前UserController的save方法是用来保存用户信息的，我们希望在该用户信息保存到数据库的同时，也往缓存中缓存一份数据，我们可以在save方法上加上注解 @CachePut，用法如下：

```java
	/**
	* CachePut：将方法返回值放入缓存
	* value：缓存的名称，每个缓存名称下面可以有多个key
	* key：缓存的key
	*/
	@PostMapping
    @CachePut(value = "userCache", key = "#user.id")//key的生成：userCache::1
    public User save(@RequestBody User user){
        userMapper.insert(user);
        return user;
    }
```

**说明：**key的写法如下 ⭐

#user.id : #user指的是方法形参的名称, id指的是user的id属性 , 也就是使用user的id属性作为key ;

#result.id : #result代表方法返回值，该表达式 代表以返回对象的id属性作为key ；

#p0.id：#p0指的是方法中的第一个参数，id指的是第一个参数的id属性,也就是使用第一个参数的id属性作为key ;

#a0.id：#a0指的是方法中的第一个参数，id指的是第一个参数的id属性,也就是使用第一个参数的id属性作为key ;

#root.args[0].id:#root.args[0]指的是方法中的第一个参数，id指的是第一个参数的id属性,也就是使用第一个参数

的id属性作为key ;

**启动服务,通过swagger接口文档测试，访问UserController的save()方法**

因为id是自增，所以不需要设置id属性

 <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210191702887.png" alt="image-20221210191702887" style="zoom:50%;" /> 

**查看user表中的数据**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210192325931.png" alt="image-20221210192325931" style="zoom: 67%;" /> 

**查看Redis中的数据**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210192418204.png" alt="image-20221210192418204" style="zoom:50%;" /> 



**3). @Cacheable注解**⭐（不能用result，因为查缓存时没有执行方法，不存在result返回值）

**@Cacheable 说明:**

​	作用: 在方法执行前，spring**先查看缓存**中是否有数据，如果有数据，则直接返回缓存数据；若没有数据，调用方法并将方法**返回值放到缓存中**

​	value: 缓存的名称，每个缓存名称下面可以有多个key

​	key: 缓存的key  ----------> 支持Spring的表达式语言SPEL语法



 **在getById上加注解@Cacheable**

```java
	/**
	* Cacheable：在方法执行前spring先查看缓存中是否有数据，如果有数据，则直接返回缓存数据；若没有数据，	  *调用方法并将方法返回值放到缓存中
	* value：缓存的名称，每个缓存名称下面可以有多个key
	* key：缓存的key
	*/
	@GetMapping
    @Cacheable(cacheNames = "userCache",key="#id")
    public User getById(Long id){
        User user = userMapper.getById(id);
        return user;
    }
```

**重启服务,通过swagger接口文档测试，访问UserController的getById()方法**

第一次访问，会请求我们controller的方法，查询数据库。后面再查询相同的id，就直接从Redis中查询数据，不用再查询数据库了，就说明缓存生效了。

提前在redis中手动删除掉id=1的用户数据

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210193834150.png" alt="image-20221210193834150" style="zoom:50%;" /> 

**查看控制台sql语句：**说明从数据库查询的用户数据

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210193948896.png" alt="image-20221210193948896" style="zoom: 67%;" /> 

**查看Redis中的缓存数据：**说明已成功缓存

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210194112334.png" alt="image-20221210194112334" style="zoom:50%;" /> 

再次查询相同id的数据时，直接从redis中直接获取，不再查询数据库。



**4). @CacheEvict注解⭐**

**@CacheEvict 说明：** 

​	作用: **清理指定缓存**

​	value: 缓存的名称，每个缓存名称下面可以有多个key

​	key: 缓存的key  ----------> 支持Spring的表达式语言SPEL语法



**在 delete 方法上加注解@CacheEvict**

```java
	@DeleteMapping
    @CacheEvict(cacheNames = "userCache",key = "#id")//删除某个key对应的缓存数据
    public void deleteById(Long id){
        userMapper.deleteById(id);
    }

	@DeleteMapping("/delAll")
    @CacheEvict(cacheNames = "userCache",allEntries = true)//删除userCache下所有的缓存数据
    public void deleteAll(){
        userMapper.deleteAll();
    }
```

### 2.2 实现思路

**实现步骤：**

1). 导入Spring Cache和Redis相关maven坐标

2). 在启动类上加入@EnableCaching注解，开启缓存注解功能

3). 在用户端接口SetmealController的 list 方法上加入@Cacheable注解

4). 在管理端接口SetmealController的 save、delete、update、startOrStop等方法上加入CacheEvict注解



### 2.3 代码开发

按照上述实现步骤：

**1). 导入Spring Cache和Redis相关maven坐标(已实现)**

```xml
<dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>

<dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
```



**2). 在启动类上加入@EnableCaching注解，开启缓存注解功能**

```java
package com.sky;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement //开启注解方式的事务管理
@Slf4j
@EnableCaching
public class SkyApplication {
    public static void main(String[] args) {
        SpringApplication.run(SkyApplication.class, args);
        log.info("server started");
    }
}
```



**3). 在用户端接口SetmealController的 list 方法上加入@Cacheable注解**

```java
	/**
     * 条件查询
     *
     * @param categoryId
     * @return
     */
    @GetMapping("/list")
    @ApiOperation("根据分类id查询套餐")
    @Cacheable(cacheNames = "setmealCache",key = "#categoryId") //key: setmealCache::100
    public Result<List<Setmeal>> list(Long categoryId) {
        Setmeal setmeal = new Setmeal();
        setmeal.setCategoryId(categoryId);
        setmeal.setStatus(StatusConstant.ENABLE);

        List<Setmeal> list = setmealService.list(setmeal);
        return Result.success(list);
    }
```



**4). 在管理端接口SetmealController的 save、delete、update、startOrStop等方法上加入CacheEvict注解**

```java
	/**
     * 新增套餐
     *
     * @param setmealDTO
     * @return
     */
    @PostMapping
    @ApiOperation("新增套餐")
    @CacheEvict(cacheNames = "setmealCache",key = "#setmealDTO.categoryId")//key: setmealCache::100
    public Result save(@RequestBody SetmealDTO setmealDTO) {
        setmealService.saveWithDish(setmealDTO);
        return Result.success();
    }
	/**
     * 批量删除套餐
     *
     * @param ids
     * @return
     */
    @DeleteMapping
    @ApiOperation("批量删除套餐")
    @CacheEvict(cacheNames = "setmealCache",allEntries = true)
    public Result delete(@RequestParam List<Long> ids) {
        setmealService.deleteBatch(ids);
        return Result.success();
    }
	/**
     * 修改套餐
     *
     * @param setmealDTO
     * @return
     */
    @PutMapping
    @ApiOperation("修改套餐")
    @CacheEvict(cacheNames = "setmealCache",allEntries = true)
    public Result update(@RequestBody SetmealDTO setmealDTO) {
        setmealService.update(setmealDTO);
        return Result.success();
    }

    /**
     * 套餐起售停售
     *
     * @param status
     * @param id
     * @return
     */
    @PostMapping("/status/{status}")
    @ApiOperation("套餐起售停售")
    @CacheEvict(cacheNames = "setmealCache",allEntries = true)
    public Result startOrStop(@PathVariable Integer status, Long id) {
        setmealService.startOrStop(status, id);
        return Result.success();
    }
```



### 2.4 功能测试

通过前后端联调方式来进行测试，同时观察redis中缓存的套餐数据。和**缓存菜品**功能测试基本一致，不再赘述。



### 2.5 代码提交

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210203035708.png" alt="image-20221210203035708" style="zoom:50%;" /> 

后续步骤和其它功能代码提交一致，不再赘述。



## 3. 添加购物车

### 3.1 需求分析和设计

#### 3.1.1 产品原型

用户可以将菜品或者套餐添加到购物车。对于菜品来说，如果设置了口味信息，则需要选择规格后才能加入购物车;对于套餐来说，可以直接点击<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20210813181916235.png" alt="image-20210813181916235" style="zoom: 67%;" />将当前套餐加入购物车。在购物车中可以修改菜品和套餐的数量，也可以清空购物车。

**效果图：**

 <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210203822817.png" alt="image-20221210203822817" style="zoom:50%;" /> 



#### 3.1.2 接口设计

通过上述原型图，设计出对应的添加购物车接口。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221208184342490.png" alt="image-20221208184342490" style="zoom:50%;" /> <img src="C:/Users/86157/Downloads/讲义/day07/assets/image-20221208184354291.png" alt="image-20221208184354291" style="zoom:50%;" />

**说明：**添加购物车时，有可能添加菜品，也有可能添加套餐。故传入参数要么是菜品id，要么是套餐id。



#### 3.1.3 表设计

用户的购物车数据，也是需要保存在数据库中的，购物车对应的数据表为shopping_cart表，具体表结构如下：

| **字段名**  | **数据类型**  | **说明**     | **备注** |
| ----------- | ------------- | ------------ | -------- |
| id          | bigint        | 主键         | 自增     |
| name        | varchar(32)   | 商品名称     | 冗余字段 |
| image       | varchar(255)  | 商品图片路径 | 冗余字段 |
| user_id     | bigint        | 用户id       | 逻辑外键 |
| dish_id     | bigint        | 菜品id       | 逻辑外键 |
| setmeal_id  | bigint        | 套餐id       | 逻辑外键 |
| dish_flavor | varchar(50)   | 菜品口味     |          |
| number      | int           | 商品数量     |          |
| amount      | decimal(10,2) | 商品单价     | 冗余字段 |
| create_time | datetime      | 创建时间     |          |

**说明：** 

- 购物车数据是关联用户的，在表结构中，我们需要记录，每一个用户的购物车数据是哪些
- 菜品列表展示出来的既有套餐，又有菜品，如果用户选择的是套餐，就保存套餐ID(setmeal_id)，如果用户选择的是菜品，就保存菜品ID(dish_id)
- 对同一个菜品/套餐，如果选择多份不需要添加多条记录，增加数量number即可



### 3.2 代码开发

#### 3.2.1 DTO设计

**根据添加购物车接口的参数设计DTO：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221208184938195.png" alt="image-20221208184938195" style="zoom:50%;" /> 

在sky-pojo模块，ShoppingCartDTO.java已定义

```java
package com.sky.dto;

import lombok.Data;
import java.io.Serializable;

@Data
public class ShoppingCartDTO implements Serializable {

    private Long dishId;
    private Long setmealId;
    private String dishFlavor;

}
```



#### 3.2.2 Controller层

**根据添加购物车接口创建ShoppingCartController：**

```java
package com.sky.controller.user;


import com.sky.dto.ShoppingCartDTO;
import com.sky.result.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 购物车
 */
@RestController
@RequestMapping("/user/shoppingCart")
@Slf4j
@Api(tags = "C端-购物车接口")
public class ShoppingCartController {

    @Autowired
    private ShoppingCartService shoppingCartService;

    /**
     * 添加购物车
     * @param shoppingCartDTO
     * @return
     */
    @PostMapping("/add")
    @ApiOperation("添加购物车")
    public Result<String> add(@RequestBody ShoppingCartDTO shoppingCartDTO){
        log.info("添加购物车：{}", shoppingCartDTO);
        shoppingCartService.addShoppingCart(shoppingCartDTO);//后绪步骤实现
        return Result.success();
    }
}
```



#### 3.2.3 Service层接口

**创建ShoppingCartService接口：**

```java
package com.sky.service;

import com.sky.dto.ShoppingCartDTO;
import com.sky.entity.ShoppingCart;
import java.util.List;

public interface ShoppingCartService {

    /**
     * 添加购物车
     * @param shoppingCartDTO
     */
    void addShoppingCart(ShoppingCartDTO shoppingCartDTO);
}
```



#### 3.2.4 Service层实现类

**创建ShoppingCartServiceImpl实现类，并实现add方法：**

```java
package com.sky.service.impl;


import com.sky.context.BaseContext;
import com.sky.dto.ShoppingCartDTO;
import com.sky.entity.Dish;
import com.sky.entity.Setmeal;
import com.sky.entity.ShoppingCart;
import com.sky.mapper.DishMapper;
import com.sky.mapper.SetmealMapper;
import com.sky.service.ShoppingCartService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {

    @Autowired
    private ShoppingCartMapper shoppingCartMapper;
    @Autowired
    private DishMapper dishMapper;
    @Autowired
    private SetmealMapper setmealMapper;
    
    /**
     * 添加购物车
     *
     * @param shoppingCartDTO
     */
    public void addShoppingCart(ShoppingCartDTO shoppingCartDTO) {
        ShoppingCart shoppingCart = new ShoppingCart();
        BeanUtils.copyProperties(shoppingCartDTO, shoppingCart);
        //只能查询自己的购物车数据
        shoppingCart.setUserId(BaseContext.getCurrentId());

        //判断当前商品是否在购物车中
        List<ShoppingCart> shoppingCartList = shoppingCartMapper.list(shoppingCart);

        if (shoppingCartList != null && shoppingCartList.size() == 1) {
            //如果已经存在，就更新数量，数量加1
            shoppingCart = shoppingCartList.get(0);
            shoppingCart.setNumber(shoppingCart.getNumber() + 1);
            shoppingCartMapper.updateNumberById(shoppingCart);
        } else {
            //如果不存在，插入数据，数量就是1

            //判断当前添加到购物车的是菜品还是套餐
            Long dishId = shoppingCartDTO.getDishId();
            if (dishId != null) {
                //添加到购物车的是菜品
                Dish dish = dishMapper.getById(dishId);
                shoppingCart.setName(dish.getName());
                shoppingCart.setImage(dish.getImage());
                shoppingCart.setAmount(dish.getPrice());
            } else {
                //添加到购物车的是套餐
                Setmeal setmeal = setmealMapper.getById(shoppingCartDTO.getSetmealId());
                shoppingCart.setName(setmeal.getName());
                shoppingCart.setImage(setmeal.getImage());
                shoppingCart.setAmount(setmeal.getPrice());
            }
            shoppingCart.setNumber(1);
            shoppingCart.setCreateTime(LocalDateTime.now());
            shoppingCartMapper.insert(shoppingCart);
        }
    }
}
```



#### 3.2.5 Mapper层

**创建ShoppingCartMapper接口:**

```java
package com.sky.mapper;

import com.sky.entity.ShoppingCart;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;
import java.util.List;

@Mapper
public interface ShoppingCartMapper {
    /**
     * 条件查询
     *
     * @param shoppingCart
     * @return
     */
    List<ShoppingCart> list(ShoppingCart shoppingCart);

    /**
     * 更新商品数量
     *
     * @param shoppingCart
     */
    @Update("update shopping_cart set number = #{number} where id = #{id}")
    void updateNumberById(ShoppingCart shoppingCart);

    /**
     * 插入购物车数据
     *
     * @param shoppingCart
     */
    @Insert("insert into shopping_cart (name, user_id, dish_id, setmeal_id, dish_flavor, number, amount, image, create_time) " +
            " values (#{name},#{userId},#{dishId},#{setmealId},#{dishFlavor},#{number},#{amount},#{image},#{createTime})")
    void insert(ShoppingCart shoppingCart);

}
```

**创建ShoppingCartMapper.xml：**

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.ShoppingCartMapper">
    <select id="list" parameterType="ShoppingCart" resultType="ShoppingCart">
        select * from shopping_cart
        <where>
            <if test="userId != null">
                and user_id = #{userId}
            </if>
            <if test="dishId != null">
                and dish_id = #{dishId}
            </if>
            <if test="setmealId != null">
                and setmeal_id = #{setmealId}
            </if>
            <if test="dishFlavor != null">
                and dish_flavor = #{dishFlavor}
            </if>
        </where>
        order by create_time desc
    </select>
</mapper>
```



### 3.3 功能测试

进入小程序，添加菜品

<img src="C:/Users/86157/Downloads/讲义/day07/assets/image-20221210210338094.png" alt="image-20221210210338094" style="zoom:50%;" /> <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210210409954.png" alt="image-20221210210409954" style="zoom:50%;" />

加入购物车，查询数据库

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210210643308.png" alt="image-20221210210643308" style="zoom:80%;" /> 

因为现在没有实现查看购物车功能，所以只能在表中进行查看。

在前后联调时，后台可通断点方式启动，查看运行的每一步。



### 3.4 代码提交

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210211145602.png" alt="image-20221210211145602" style="zoom:50%;" /> 

后续步骤和其它功能代码提交一致，不再赘述。



## 4. 查看购物车

### 4.1 需求分析和设计

#### 4.1.1 产品原型

当用户添加完菜品和套餐后，可进入到购物车中，查看购物中的菜品和套餐。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221208190038058.png" alt="image-20221208190038058" style="zoom:50%;" /> 



#### 4.1.2 接口设计

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221208190052467.png" alt="image-20221208190052467" style="zoom:50%;" /> <img src="C:/Users/86157/Downloads/讲义/day07/assets/image-20221208190102904.png" alt="image-20221208190102904" style="zoom:50%;" />



### 4.2 代码开发

#### 4.2.1 Controller层

**在ShoppingCartController中创建查看购物车的方法：**

```java
	/**
     * 查看购物车
     * @return
     */
    @GetMapping("/list")
    @ApiOperation("查看购物车")
    public Result<List<ShoppingCart>> list(){
        return Result.success(shoppingCartService.showShoppingCart());
    }
```



#### 4.2.2 Service层接口

**在ShoppingCartService接口中声明查看购物车的方法：**

```java
	/**
     * 查看购物车
     * @return
     */
    List<ShoppingCart> showShoppingCart();
```



#### 4.2.3 Service层实现类

**在ShoppingCartServiceImpl中实现查看购物车的方法：**

```java
	/**
     * 查看购物车
     * @return
     */
    public List<ShoppingCart> showShoppingCart() {
        return shoppingCartMapper.list(ShoppingCart.
                                       builder().
                                       userId(BaseContext.getCurrentId()).
                                       build());
    }
```



### 4.3 功能测试

当进入小程序时，就会发起查看购物车的请求

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210213347557.png" alt="image-20221210213347557" style="zoom:50%;" /> 

点击购物车图标

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210213438878.png" alt="image-20221210213438878" style="zoom:50%;" /> 

测试成功。



### 4.4 代码提交

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210213555667.png" alt="image-20221210213555667" style="zoom:50%;" /> 

后续步骤和其它功能代码提交一致，不再赘述。



## 5. 清空购物车

### 5.1 需求分析和设计

#### 5.1.1 产品原型

当点击清空按钮时，会把购物车中的数据全部清空。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210213703715.png" alt="image-20221210213703715" style="zoom:50%;" /> 



#### 5.1.2 接口设计

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221208191606894.png" alt="image-20221208191606894" style="zoom:50%;" /> 



### 5.2 代码开发

#### 5.2.1 Controller层

**在ShoppingCartController中创建清空购物车的方法：**

```java
	/**
     * 清空购物车商品
     * @return
     */
    @DeleteMapping("/clean")
    @ApiOperation("清空购物车商品")
    public Result<String> clean(){
        shoppingCartService.cleanShoppingCart();
        return Result.success();
    }
```



#### 5.2.2 Service层接口

**在ShoppingCartService接口中声明清空购物车的方法：**

```java
	/**
     * 清空购物车商品
     */
    void cleanShoppingCart();
```



#### 5.2.3 Service层实现类

**在ShoppingCartServiceImpl中实现清空购物车的方法：**

```java
	/**
     * 清空购物车商品
     */
    public void cleanShoppingCart() {
        shoppingCartMapper.deleteByUserId(BaseContext.getCurrentId());
    }
```



#### 5.2.4 Mapper层

**在ShoppingCartMapper接口中创建删除购物车数据的方法：**

```java
	/**
     * 根据用户id删除购物车数据
     *
     * @param userId
     */
    @Delete("delete from shopping_cart where user_id = #{userId}")
    void deleteByUserId(Long userId);
```



### 5.3 功能测试

进入到购物车页面

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210214710863.png" alt="image-20221210214710863" style="zoom:50%;" /> 

点击清空

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210214914092.png" alt="image-20221210214914092" style="zoom:50%;" /> 

查看数据库中的数据

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221210214950261.png" alt="image-20221210214950261" style="zoom:80%;" /> 

说明当前用户的购物车数据已全部删除。



### 5.4 代码提交



## 6.1删除购物车中一个商品

### 6.1 产品原型

![image-20220613153609795](http://stofu80ry.sabkt.gdipper.com/picture//image-20220613153609795.png)



### 6.2 接口设计

![image-20220610152629105](http://stofu80ry.sabkt.gdipper.com/picture//image-20220610152629105.png)

### 6.3 数据模型

shopping_cart表：

![image-20220610151810308](http://stofu80ry.sabkt.gdipper.com/picture//image-20220610151810308.png)



### 6.4 代码开发

#### 6.4.1 ShoppingCartController

~~~java
/**
     * 删除购物车中一个商品
     * @param shoppingCartDTO
     * @return
*/
@PostMapping("/sub")
@ApiOperation("删除购物车中一个商品")
public Result sub(@RequestBody ShoppingCartDTO shoppingCartDTO){
    log.info("删除购物车中一个商品，商品：{}", shoppingCartDTO);
    shoppingCartService.subShoppingCart(shoppingCartDTO);
    return Result.success();
}
~~~



#### 6.4.2 ShoppingCartService

~~~java
/**
     * 删除购物车中一个商品
     * @param shoppingCartDTO
*/
void subShoppingCart(ShoppingCartDTO shoppingCartDTO);
~~~



#### 6.4.3 ShoppingCartServiceImpl

~~~java
/**
     * 删除购物车中一个商品
     * @param shoppingCartDTO
*/
public void subShoppingCart(ShoppingCartDTO shoppingCartDTO) {
    ShoppingCart shoppingCart = new ShoppingCart();
    BeanUtils.copyProperties(shoppingCartDTO,shoppingCart);
    //设置查询条件，查询当前登录用户的购物车数据
    shoppingCart.setUserId(BaseContext.getCurrentId());

    List<ShoppingCart> list = shoppingCartMapper.list(shoppingCart);

    if(list != null && list.size() > 0){
        shoppingCart = list.get(0);

        Integer number = shoppingCart.getNumber();
        if(number == 1){
            //当前商品在购物车中的份数为1，直接删除当前记录
            shoppingCartMapper.deleteById(shoppingCart.getId());
        }else {
            //当前商品在购物车中的份数不为1，修改份数即可
            shoppingCart.setNumber(shoppingCart.getNumber() - 1);
            shoppingCartMapper.updateNumberById(shoppingCart);
        }
    }
}
~~~

#### 6.4.4 ShoppingCartMapper

~~~java
/**
     * 根据id删除购物车数据
     * @param id
*/
@Delete("delete from shopping_cart where id = #{id}")
void deleteById(Long id);
~~~































# 使用技术

swagger、ngnix、git、ThreadLocal、interceptor、ExceptionHandler、PageHelper、文件上传OSS、Mybatis、Redis、SpringCache、自定义注解AutoFill、AOP反射















