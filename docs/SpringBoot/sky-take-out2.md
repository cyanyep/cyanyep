sky-take-out2

#  苍穹外卖-day08

## 课程内容

- 导入地址簿功能代码
- 用户下单
- 订单支付



功能实现：**用户下单**、**订单支付**

**用户下单效果图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214181140570.png" alt="image-20221214181140570" style="zoom:50%;" />     



**订单支付效果图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214181221426.png" alt="image-20221214181221426" style="zoom:50%;" /> 



## 1. 导入地址簿功能代码

### 1.1 需求分析和设计

#### 1.1.1 产品原型

地址簿，指的是消费者用户的地址信息，用户登录成功后可以维护自己的地址信息。同一个用户可以有多个地址信息，但是只能有一个**默认地址**。

**效果图：**

​      <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214183859446.png" alt="image-20221214183859446" style="zoom:50%;" /> 

对于地址簿管理，我们需要实现以下几个功能： 

- 查询地址列表
- 新增地址
- 修改地址
- 删除地址
- 设置默认地址
- 查询默认地址



#### 1.1.2 接口设计

根据上述原型图先**粗粒度**设计接口，共包含7个接口。

**接口设计：**

- 新增地址
- 查询登录用户所有地址
- 查询默认地址
- 根据id修改地址
- 根据id删除地址
- 根据id查询地址
- 设置默认地址

接下来**细粒度**分析每个接口，明确每个接口的请求方式、请求路径、传入参数和返回值。



**1). 新增地址**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214185000982.png" alt="image-20221214185000982" style="zoom:50%;" /> 



**2). 查询登录用户所有地址**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214185124296.png" alt="image-20221214185124296" style="zoom:50%;" /> 



**3). 查询默认地址**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214185209235.png" alt="image-20221214185209235" style="zoom:50%;" /> 



**4). 修改地址**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214185321203.png" alt="image-20221214185321203" style="zoom:50%;" /> 

**5). 根据id删除地址**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214185443519.png" alt="image-20221214185443519" style="zoom:50%;" /> 



**6). 根据id查询地址**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214185534450.png" alt="image-20221214185534450" style="zoom:50%;" /> 



**7). 设置默认地址**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214185631755.png" alt="image-20221214185631755" style="zoom:50%;" /> 





#### 1.1.3 表设计

用户的地址信息会存储在address_book表，即地址簿表中。具体表结构如下：

| **字段名**    | **数据类型** | **说明**     | **备注**       |
| ------------- | ------------ | ------------ | -------------- |
| id            | bigint       | 主键         | 自增           |
| user_id       | bigint       | 用户id       | 逻辑外键       |
| consignee     | varchar(50)  | 收货人       |                |
| sex           | varchar(2)   | 性别         |                |
| phone         | varchar(11)  | 手机号       |                |
| province_code | varchar(12)  | 省份编码     |                |
| province_name | varchar(32)  | 省份名称     |                |
| city_code     | varchar(12)  | 城市编码     |                |
| city_name     | varchar(32)  | 城市名称     |                |
| district_code | varchar(12)  | 区县编码     |                |
| district_name | varchar(32)  | 区县名称     |                |
| detail        | varchar(200) | 详细地址信息 | 具体到门牌号   |
| label         | varchar(100) | 标签         | 公司、家、学校 |
| is_default    | tinyint(1)   | 是否默认地址 | 1是 0否        |

这里面有一个字段is_default，实际上我们在设置默认地址时，只需要更新这个字段就可以了。



### 1.2 代码导入

对于这一类的单表的增删改查，我们已经写过很多了，基本的开发思路都是一样的，那么本小节的用户地址簿管理的增删改查功能，我们就不再一一实现了，基本的代码我们都已经提供了，直接导入进来，做一个测试即可。

导入课程资料中的地址簿模块功能代码：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214190135741.png" alt="image-20221214190135741" style="zoom:50%;" /> 

进入到sky-server模块中

#### 1.2.1 Mapper层

**创建AddressBookMapper.java**

```java
package com.sky.mapper;

import com.sky.entity.AddressBook;
import org.apache.ibatis.annotations.*;
import java.util.List;

@Mapper
public interface AddressBookMapper {

    /**
     * 条件查询
     * @param addressBook
     * @return
     */
    List<AddressBook> list(AddressBook addressBook);

    /**
     * 新增
     * @param addressBook
     */
    @Insert("insert into address_book" +
            "        (user_id, consignee, phone, sex, province_code, province_name, city_code, city_name, district_code," +
            "         district_name, detail, label, is_default)" +
            "        values (#{userId}, #{consignee}, #{phone}, #{sex}, #{provinceCode}, #{provinceName}, #{cityCode}, #{cityName}," +
            "                #{districtCode}, #{districtName}, #{detail}, #{label}, #{isDefault})")
    void insert(AddressBook addressBook);

    /**
     * 根据id查询
     * @param id
     * @return
     */
    @Select("select * from address_book where id = #{id}")
    AddressBook getById(Long id);

    /**
     * 根据id修改
     * @param addressBook
     */
    void update(AddressBook addressBook);

    /**
     * 根据 用户id修改 是否默认地址
     * @param addressBook
     */
    @Update("update address_book set is_default = #{isDefault} where user_id = #{userId}")
    void updateIsDefaultByUserId(AddressBook addressBook);

    /**
     * 根据id删除地址
     * @param id
     */
    @Delete("delete from address_book where id = #{id}")
    void deleteById(Long id);

}
```

**创建AddressBookMapper.xml**

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.AddressBookMapper">

    <select id="list" parameterType="AddressBook" resultType="AddressBook">
        select * from address_book
        <where>
            <if test="userId != null">
                and user_id = #{userId}
            </if>
            <if test="phone != null">
                and phone = #{phone}
            </if>
            <if test="isDefault != null">
                and is_default = #{isDefault}
            </if>
        </where>
    </select>

    <update id="update" parameterType="addressBook">
        update address_book
        <set>
            <if test="consignee != null">
                consignee = #{consignee},
            </if>
            <if test="sex != null">
                sex = #{sex},
            </if>
            <if test="phone != null">
                phone = #{phone},
            </if>
            <if test="detail != null">
                detail = #{detail},
            </if>
            <if test="label != null">
                label = #{label},
            </if>
            <if test="isDefault != null">
                is_default = #{isDefault},
            </if>
        </set>
        where id = #{id}
    </update>

</mapper>
```



#### 1.2.2 Service层

**创建AddressBookService.java**

```java
package com.sky.service;

import com.sky.entity.AddressBook;
import java.util.List;

public interface AddressBookService {

    List<AddressBook> list(AddressBook addressBook);

    void save(AddressBook addressBook);

    AddressBook getById(Long id);

    void update(AddressBook addressBook);

    void setDefault(AddressBook addressBook);

    void deleteById(Long id);

}
```

**创建AddressBookServiceImpl.java**

```java
package com.sky.service.impl;

import com.sky.context.BaseContext;
import com.sky.entity.AddressBook;
import com.sky.mapper.AddressBookMapper;
import com.sky.service.AddressBookService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@Slf4j
public class AddressBookServiceImpl implements AddressBookService {
    @Autowired
    private AddressBookMapper addressBookMapper;

    /**
     * 条件查询
     *
     * @param addressBook
     * @return
     */
    public List<AddressBook> list(AddressBook addressBook) {
        return addressBookMapper.list(addressBook);
    }

    /**
     * 新增地址
     *
     * @param addressBook
     */
    public void save(AddressBook addressBook) {
        addressBook.setUserId(BaseContext.getCurrentId());
        addressBook.setIsDefault(0);
        addressBookMapper.insert(addressBook);
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    public AddressBook getById(Long id) {
        AddressBook addressBook = addressBookMapper.getById(id);
        return addressBook;
    }

    /**
     * 根据id修改地址
     *
     * @param addressBook
     */
    public void update(AddressBook addressBook) {
        addressBookMapper.update(addressBook);
    }

    /**
     * 设置默认地址
     *
     * @param addressBook
     */
    @Transactional
    public void setDefault(AddressBook addressBook) {
        //1、将当前用户的所有地址修改为非默认地址 update address_book set is_default = ? where user_id = ?
        addressBook.setIsDefault(0);
        addressBook.setUserId(BaseContext.getCurrentId());
        addressBookMapper.updateIsDefaultByUserId(addressBook);

        //2、将当前地址改为默认地址 update address_book set is_default = ? where id = ?
        addressBook.setIsDefault(1);
        addressBookMapper.update(addressBook);
    }

    /**
     * 根据id删除地址
     *
     * @param id
     */
    public void deleteById(Long id) {
        addressBookMapper.deleteById(id);
    }

}
```



#### 1.2.3 Controller层

```java
package com.sky.controller.user;

import com.sky.context.BaseContext;
import com.sky.entity.AddressBook;
import com.sky.result.Result;
import com.sky.service.AddressBookService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/user/addressBook")
@Api(tags = "C端地址簿接口")
public class AddressBookController {

    @Autowired
    private AddressBookService addressBookService;

    /**
     * 查询当前登录用户的所有地址信息
     *
     * @return
     */
    @GetMapping("/list")
    @ApiOperation("查询当前登录用户的所有地址信息")
    public Result<List<AddressBook>> list() {
        AddressBook addressBook = new AddressBook();
        addressBook.setUserId(BaseContext.getCurrentId());
        List<AddressBook> list = addressBookService.list(addressBook);
        return Result.success(list);
    }

    /**
     * 新增地址
     *
     * @param addressBook
     * @return
     */
    @PostMapping
    @ApiOperation("新增地址")
    public Result save(@RequestBody AddressBook addressBook) {
        addressBookService.save(addressBook);
        return Result.success();
    }

    @GetMapping("/{id}")
    @ApiOperation("根据id查询地址")
    public Result<AddressBook> getById(@PathVariable Long id) {
        AddressBook addressBook = addressBookService.getById(id);
        return Result.success(addressBook);
    }

    /**
     * 根据id修改地址
     *
     * @param addressBook
     * @return
     */
    @PutMapping
    @ApiOperation("根据id修改地址")
    public Result update(@RequestBody AddressBook addressBook) {
        addressBookService.update(addressBook);
        return Result.success();
    }

    /**
     * 设置默认地址
     *
     * @param addressBook
     * @return
     */
    @PutMapping("/default")
    @ApiOperation("设置默认地址")
    public Result setDefault(@RequestBody AddressBook addressBook) {
        addressBookService.setDefault(addressBook);
        return Result.success();
    }

    /**
     * 根据id删除地址
     *
     * @param id
     * @return
     */
    @DeleteMapping
    @ApiOperation("根据id删除地址")
    public Result deleteById(Long id) {
        addressBookService.deleteById(id);
        return Result.success();
    }

    /**
     * 查询默认地址
     */
    @GetMapping("default")
    @ApiOperation("查询默认地址")
    public Result<AddressBook> getDefault() {
        //SQL:select * from address_book where user_id = ? and is_default = 1
        AddressBook addressBook = new AddressBook();
        addressBook.setIsDefault(1);
        addressBook.setUserId(BaseContext.getCurrentId());
        List<AddressBook> list = addressBookService.list(addressBook);

        if (list != null && list.size() == 1) {
            return Result.success(list.get(0));
        }

        return Result.error("没有查询到默认地址");
    }

}
```



### 1.3 功能测试

可以通过如下方式进行测试：

- 查看控制台sql和数据库中的数据变化
- Swagger接口文档测试
- 前后端联调

我们直接使用**前后端联调**测试：

启动后台服务，编译小程序

登录进入首页-->进入个人中心-->进入地址管理

> <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214192610374.png" alt="image-20221214192610374" style="zoom:50%;" /> 



**1). 新增收货地址**

**添加两条收货地址：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214193135164.png" alt="image-20221214193135164" style="zoom:50%;" /> 



**查看收货地址：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214193437578.png" alt="image-20221214193437578" style="zoom:50%;" /> 



**查看数据库：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214193552879.png" alt="image-20221214193552879" style="zoom:80%;" /> 



**2). 设置默认收货地址**

**设置默认地址：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214193714137.png" alt="image-20221214193714137" style="zoom:50%;" /> 

**查看数据库：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214193829043.png" alt="image-20221214193829043" style="zoom:80%;" /> 



**3). 删除收货地址**

**进行编辑：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214194051783.png" alt="image-20221214194051783" style="zoom:50%;" /> 

**删除地址：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214194227711.png" alt="image-20221214194227711" style="zoom:50%;" />

**查看数据库：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214194251343.png" alt="image-20221214194251343" style="zoom:80%;" /> 



### 1.4 代码提交

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214204411614.png" alt="image-20221214204411614" style="zoom:50%;" /> 

后续步骤和其它功能代码提交一致，不再赘述。



## 2. 用户下单

### 2.1 需求分析和设计

#### 2.1.1 产品原型

**用户下单业务说明：**
在电商系统中，用户是通过下单的方式通知商家，用户已经购买了商品，需要商家进行备货和发货。
用户下单后会产生订单相关数据，订单数据需要能够体现如下信息：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214195633802.png" alt="image-20221214195633802" style="zoom:50%;" /> 

用户将菜品或者套餐加入购物车后，可以点击购物车中的 "去结算" 按钮，页面跳转到订单确认页面，点击 "去支付" 按钮则完成下单操作。

**用户点餐业务流程(效果图)：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214195913467.png" alt="image-20221214195913467" style="zoom:80%;" /> 





#### 2.1.2 接口设计

**接口分析：**

 <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214200959943.png" alt="image-20221214200959943" style="zoom:50%;" /> 



**接口设计：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214201211364.png" alt="image-20221214201211364" style="zoom:50%;" />



#### 2.1.3 表设计

用户下单业务对应的数据表为orders表和order_detail表(一对多关系,一个订单关联多个订单明细)：

| 表名         | 含义       | 说明                                                         |
| ------------ | ---------- | ------------------------------------------------------------ |
| orders       | 订单表     | 主要存储订单的基本信息(如: 订单号、状态、金额、支付方式、下单用户、收件地址等) |
| order_detail | 订单明细表 | 主要存储订单详情信息(如: 该订单关联的套餐及菜品的信息)       |

具体的表结构如下: 

**1). orders订单表**

| **字段名**              | **数据类型**  | **说明**     | **备注**                                        |
| ----------------------- | ------------- | ------------ | ----------------------------------------------- |
| id                      | bigint        | 主键         | 自增                                            |
| number                  | varchar(50)   | 订单号       |                                                 |
| status                  | int           | 订单状态     | 1待付款 2待接单 3已接单 4派送中 5已完成 6已取消 |
| user_id                 | bigint        | 用户id       | 逻辑外键                                        |
| address_book_id         | bigint        | 地址id       | 逻辑外键                                        |
| order_time              | datetime      | 下单时间     |                                                 |
| checkout_time           | datetime      | 付款时间     |                                                 |
| pay_method              | int           | 支付方式     | 1微信支付 2支付宝支付                           |
| pay_status              | tinyint       | 支付状态     | 0未支付 1已支付 2退款                           |
| amount                  | decimal(10,2) | 订单金额     |                                                 |
| remark                  | varchar(100)  | 备注信息     |                                                 |
| phone                   | varchar(11)   | 手机号       | 冗余字段                                        |
| address                 | varchar(255)  | 详细地址信息 | 冗余字段                                        |
| consignee               | varchar(32)   | 收货人       | 冗余字段                                        |
| cancel_reason           | varchar(255)  | 订单取消原因 |                                                 |
| rejection_reason        | varchar(255)  | 拒单原因     |                                                 |
| cancel_time             | datetime      | 订单取消时间 |                                                 |
| estimated_delivery_time | datetime      | 预计送达时间 |                                                 |
| delivery_status         | tinyint       | 配送状态     | 1立即送出 0选择具体时间                         |
| delivery_time           | datetime      | 送达时间     |                                                 |
| pack_amount             | int           | 打包费       |                                                 |
| tableware_number        | int           | 餐具数量     |                                                 |
| tableware_status        | tinyint       | 餐具数量状态 | 1按餐量提供 0选择具体数量                       |



**2). order_detail订单明细表**

| **字段名**  | **数据类型**  | **说明**     | **备注** |
| ----------- | ------------- | ------------ | -------- |
| id          | bigint        | 主键         | 自增     |
| name        | varchar(32)   | 商品名称     | 冗余字段 |
| image       | varchar(255)  | 商品图片路径 | 冗余字段 |
| order_id    | bigint        | 订单id       | 逻辑外键 |
| dish_id     | bigint        | 菜品id       | 逻辑外键 |
| setmeal_id  | bigint        | 套餐id       | 逻辑外键 |
| dish_flavor | varchar(50)   | 菜品口味     |          |
| number      | int           | 商品数量     |          |
| amount      | decimal(10,2) | 商品单价     |          |

**说明：**用户提交订单时，需要往订单表orders中插入一条记录，并且需要往order_detail中插入一条或多条记录。



### 2.2 代码开发

#### 2.2.1 DTO设计

**根据用户下单接口的参数设计DTO：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214203913803.png" alt="image-20221214203913803" style="zoom:50%;" /> 

在sky-pojo模块，OrdersSubmitDTO.java已定义

```java
package com.sky.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class OrdersSubmitDTO implements Serializable {
    //地址簿id
    private Long addressBookId;
    //付款方式
    private int payMethod;
    //备注
    private String remark;
    //预计送达时间
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime estimatedDeliveryTime;
    //配送状态  1立即送出  0选择具体时间
    private Integer deliveryStatus;
    //餐具数量
    private Integer tablewareNumber;
    //餐具数量状态  1按餐量提供  0选择具体数量
    private Integer tablewareStatus;
    //打包费
    private Integer packAmount;
    //总金额
    private BigDecimal amount;
}
```



#### 2.2.2 VO设计

**根据用户下单接口的返回结果设计VO：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214204113316.png" alt="image-20221214204113316" style="zoom:50%;" /> 

在sky-pojo模块，OrderSubmitVO.java已定义

```java
package com.sky.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderSubmitVO implements Serializable {
    //订单id
    private Long id;
    //订单号
    private String orderNumber;
    //订单金额
    private BigDecimal orderAmount;
    //下单时间
    private LocalDateTime orderTime;
}
```



#### 2.2.3 Controller层

**创建OrderController并提供用户下单方法：**

```java
package com.sky.controller.user;

import com.sky.dto.OrdersPaymentDTO;
import com.sky.dto.OrdersSubmitDTO;
import com.sky.result.PageResult;
import com.sky.result.Result;
import com.sky.service.OrderService;
import com.sky.vo.OrderPaymentVO;
import com.sky.vo.OrderSubmitVO;
import com.sky.vo.OrderVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * 订单
 */
@RestController("userOrderController")
@RequestMapping("/user/order")
@Slf4j
@Api(tags = "C端-订单接口")
public class OrderController {

    @Autowired
    private OrderService orderService;

    /**
     * 用户下单
     *
     * @param ordersSubmitDTO
     * @return
     */
    @PostMapping("/submit")
    @ApiOperation("用户下单")
    public Result<OrderSubmitVO> submit(@RequestBody OrdersSubmitDTO ordersSubmitDTO) {
        log.info("用户下单：{}", ordersSubmitDTO);
        OrderSubmitVO orderSubmitVO = orderService.submitOrder(ordersSubmitDTO);
        return Result.success(orderSubmitVO);
    } 

}
```



#### 2.2.4 Service层接口

**创建OrderService接口，并声明用户下单方法：**

```java
package com.sky.service;

import com.sky.dto.*;
import com.sky.vo.OrderSubmitVO;

public interface OrderService {

    /**
     * 用户下单
     * @param ordersSubmitDTO
     * @return
     */
    OrderSubmitVO submitOrder(OrdersSubmitDTO ordersSubmitDTO);
}
```



#### 2.2.5 Service层实现类

**创建OrderServiceImpl实现OrderService接口：**

```java
package com.sky.service.impl;

/**
 * 订单
 */
@Service
@Slf4j
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderMapper orderMapper;
    @Autowired
    private OrderDetailMapper orderDetailMapper;
    @Autowired
    private ShoppingCartMapper shoppingCartMapper;
    @Autowired
    private AddressBookMapper addressBookMapper;


    /**
     * 用户下单
     *
     * @param ordersSubmitDTO
     * @return
     */
    @Transactional
    public OrderSubmitVO submitOrder(OrdersSubmitDTO ordersSubmitDTO) {
        //异常情况的处理（收货地址为空、超出配送范围、购物车为空）
        AddressBook addressBook = addressBookMapper.getById(ordersSubmitDTO.getAddressBookId());
        if (addressBook == null) {
            throw new AddressBookBusinessException(MessageConstant.ADDRESS_BOOK_IS_NULL);
        }

        Long userId = BaseContext.getCurrentId();
        ShoppingCart shoppingCart = new ShoppingCart();
        shoppingCart.setUserId(userId);

        //查询当前用户的购物车数据
        List<ShoppingCart> shoppingCartList = shoppingCartMapper.list(shoppingCart);
        if (shoppingCartList == null || shoppingCartList.size() == 0) {
            throw new ShoppingCartBusinessException(MessageConstant.SHOPPING_CART_IS_NULL);
        }

        //构造订单数据
        Orders order = new Orders();
        BeanUtils.copyProperties(ordersSubmitDTO,order);
        order.setPhone(addressBook.getPhone());
        order.setAddress(addressBook.getDetail());
        order.setConsignee(addressBook.getConsignee());
        order.setNumber(String.valueOf(System.currentTimeMillis()));
        order.setUserId(userId);
        order.setStatus(Orders.PENDING_PAYMENT);
        order.setPayStatus(Orders.UN_PAID);
        order.setOrderTime(LocalDateTime.now());

        //向订单表插入1条数据
        orderMapper.insert(order);

        //订单明细数据
        List<OrderDetail> orderDetailList = new ArrayList<>();
        for (ShoppingCart cart : shoppingCartList) {
            OrderDetail orderDetail = new OrderDetail();
            BeanUtils.copyProperties(cart, orderDetail);
            orderDetail.setOrderId(order.getId());
            orderDetailList.add(orderDetail);
        }

        //向明细表插入n条数据
        orderDetailMapper.insertBatch(orderDetailList);

        //清理购物车中的数据
        shoppingCartMapper.deleteByUserId(userId);

        //封装返回结果
        OrderSubmitVO orderSubmitVO = OrderSubmitVO.builder()
                .id(order.getId())
                .orderNumber(order.getNumber())
                .orderAmount(order.getAmount())
                .orderTime(order.getOrderTime())
                .build();

        return orderSubmitVO;
    }
    
}
```



#### 2.2.6 Mapper层

**创建OrderMapper接口和对应的xml映射文件：**

OrderMapper.java

```java
package com.sky.mapper;

@Mapper
public interface OrderMapper {
    /**
     * 插入订单数据
     * @param order
     */
    void insert(Orders order);
}

```

OrderMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.OrderMapper">

    <insert id="insert" parameterType="Orders" useGeneratedKeys="true" keyProperty="id">
        insert into orders
        (number, status, user_id, address_book_id, order_time, checkout_time, pay_method, pay_status, amount, remark,
         phone, address, consignee, estimated_delivery_time, delivery_status, pack_amount, tableware_number,
         tableware_status)
        values (#{number}, #{status}, #{userId}, #{addressBookId}, #{orderTime}, #{checkoutTime}, #{payMethod},
                #{payStatus}, #{amount}, #{remark}, #{phone}, #{address}, #{consignee},
                #{estimatedDeliveryTime}, #{deliveryStatus}, #{packAmount}, #{tablewareNumber}, #{tablewareStatus})
    </insert>
</mapper>

```

**创建OrderDetailMapper接口和对应的xml映射文件：**

OrderDetailMapper.java

```java
package com.sky.mapper;

import com.sky.entity.OrderDetail;
import java.util.List;

@Mapper
public interface OrderDetailMapper {

    /**
     * 批量插入订单明细数据
     * @param orderDetails
     */
    void insertBatch(List<OrderDetail> orderDetails);

}
```

OrderDetailMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.OrderDetailMapper">

    <insert id="insertBatch" parameterType="list">
        insert into order_detail
        (name, order_id, dish_id, setmeal_id, dish_flavor, number, amount, image)
        values
        <foreach collection="orderDetails" item="od" separator=",">
            (#{od.name},#{od.orderId},#{od.dishId},#{od.setmealId},#{od.dishFlavor},
             #{od.number},#{od.amount},#{od.image})
        </foreach>
    </insert>

</mapper>
```



### 2.3 功能测试

登录小程序，完成下单操作

下单操作时，同时会删除购物车中的数据

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214214128415.png" alt="image-20221214214128415" style="zoom:50%;" /> 

**查看shopping_cart表：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214214642428.png" alt="image-20221214214642428" style="zoom: 80%;" /> 

**去结算-->去支付**

 <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214214852362.png" alt="image-20221214214852362" style="zoom:50%;" /> 



**查看orders表：**

![image-20221214215116451](http://stofu80ry.sabkt.gdipper.com/picture/image-20221214215116451.png)

**查看order_detail表：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214215250553.png" alt="image-20221214215250553" style="zoom:80%;" /> 

**同时，购物车表中数据删除：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214215428516.png" alt="image-20221214215428516" style="zoom:80%;" /> 



### 2.4 代码提交

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214215650664.png" alt="image-20221214215650664" style="zoom:50%;" /> 

后续步骤和其它功能代码提交一致，不再赘述。



## 3. 订单支付

### 3.1 微信支付介绍

前面的课程已经实现了用户下单，那接下来就是订单支付，就是完成付款功能。支付大家应该都不陌生了，在现实生活中经常购买商品并且使用支付功能来付款，在付款的时候可能使用比较多的就是微信支付和支付宝支付了。在苍穹外卖项目中，选择的就是**微信支付**这种支付方式。

要实现微信支付就需要注册微信支付的一个商户号，这个商户号是必须要有一家企业并且有正规的营业执照。只有具备了这些资质之后，才可以去注册商户号，才能开通支付权限。

个人不具备这种资质，所以我们在学习微信支付时，最重要的是了解微信支付的流程，并且能够阅读微信官方提供的接口文档，能够和第三方支付平台对接起来就可以了。

**微信支付产品：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214223302651.png" alt="image-20221214223302651" style="zoom:50%;" /> 

本项目选择**小程序支付**

参考：https://pay.weixin.qq.com/static/product/product_index.shtml



**微信支付接入流程：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214223509246.png" alt="image-20221214223509246" style="zoom:50%;" /> 



**微信小程序支付时序图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214223910840.png" alt="image-20221214223910840" style="zoom:50%;" /> 



**微信支付相关接口：**

**JSAPI下单：**商户系统调用该接口在微信支付服务后台生成预支付交易单(对应时序图的第5步)

![image-20221214224409174](http://stofu80ry.sabkt.gdipper.com/picture/image-20221214224409174.png)



**微信小程序调起支付：**通过JSAPI下单接口获取到发起支付的必要参数prepay_id，然后使用微信支付提供的小程序方法调起小程序支付(对应时序图的第10步)

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214224551220.png" alt="image-20221214224551220" style="zoom:50%;" /> 



### 3.2 微信支付准备工作

#### 3.2.1 如何保证数据安全？

完成微信支付有两个关键的步骤：

**第一个**就是需要在商户系统当中调用微信后台的一个下单接口，就是生成预支付交易单。

**第二个**就是支付成功之后微信后台会给推送消息。

这两个接口数据的安全性，要求其实是非常高的。

**解决：**微信提供的方式就是对数据进行加密、解密、签名多种方式。要完成数据加密解密，需要提前准备相应的一些文件，其实就是一些证书。

**获取微信支付平台证书、商户私钥文件：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221214234038395.png" alt="image-20221214234038395" style="zoom:50%;" /> 

在后绪程序开发过程中，就会使用到这两个文件，需要提前把这两个文件准备好。



#### 3.2.2 如何调用到商户系统？

微信后台会调用到商户系统给推送支付的结果，在这里我们就会遇到一个问题，就是微信后台怎么就能调用到我们这个商户系统呢？因为这个调用过程，其实本质上也是一个HTTP请求。

目前，商户系统它的ip地址就是当前自己电脑的ip地址，只是一个局域网内的ip地址，微信后台无法调用到。

**解决：**内网穿透。通过**cpolar软件**可以获得一个临时域名，而这个临时域名是一个公网ip，这样，微信后台就可以请求到商户系统了。

**cpolar软件的使用：**

**1). 下载与安装**

下载地址：https://dashboard.cpolar.com/get-started

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221215184407217.png" alt="image-20221215184407217" style="zoom:50%;" /> 

在资料中已提供，可无需下载。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221215184446260.png" alt="image-20221215184446260" style="zoom:80%;" /> 

安装过程中，一直下一步即可，不再演示。

**2). cpolar指定authtoken**

复制authtoken：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221215184746092.png" alt="image-20221215184746092" style="zoom:50%;" /> 

执行命令：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221215185152869.png" alt="image-20221215185152869" style="zoom:50%;" /> 



**3). 获取临时域名**

执行命令：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221215185749163.png" alt="image-20221215185749163" style="zoom:50%;" /> 

获取域名：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221215185833157.png" alt="image-20221215185833157" style="zoom:50%;" /> 



**4). 验证临时域名有效性**

**访问接口文档**

使用localhost:8080访问

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221215190440717.png" alt="image-20221215190440717" style="zoom:50%;" /> 

使用临时域名访问

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221215190525166.png" alt="image-20221215190525166" style="zoom:50%;" /> 

证明临时域名生效。



### 3.3 代码导入

导入资料中的微信支付功能代码即可

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221215192120424.png" alt="image-20221215192120424" style="zoom:50%;" /> 

#### 3.3.1 微信支付相关配置

application-dev.yml

```yaml
sky:
  wechat:
    appid: wxcd2e39f677fd30ba
    secret: 84fbfdf5ea288f0c432d829599083637
    mchid : 1561414331
    mchSerialNo: 4B3B3DC35414AD50B1B755BAF8DE9CC7CF407606
    privateKeyFilePath: D:\apiclient_key.pem
    apiV3Key: CZBK51236435wxpay435434323FFDuv3
    weChatPayCertFilePath: D:\wechatpay_166D96F876F45C7D07CE98952A96EC980368ACFC.pem
    notifyUrl: https://www.weixin.qq.com/wxpay/pay.php
    refundNotifyUrl: https://www.weixin.qq.com/wxpay/pay.php
```

application.yml

```yaml
sky:
  wechat:
    appid: ${sky.wechat.appid}
    secret: ${sky.wechat.secret}
    mchid : ${sky.wechat.mchid}
    mchSerialNo: ${sky.wechat.mchSerialNo}
    privateKeyFilePath: ${sky.wechat.privateKeyFilePath}
    apiV3Key: ${sky.wechat.apiV3Key}
    weChatPayCertFilePath: ${sky.wechat.weChatPayCertFilePath}
    notifyUrl: ${sky.wechat.notifyUrl}
    refundNotifyUrl: ${sky.wechat.refundNotifyUrl}

```

WeChatProperties.java：读取配置(已定义)

```java
package com.sky.properties;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "sky.wechat")
@Data
public class WeChatProperties {

    private String appid; //小程序的appid
    private String secret; //小程序的秘钥
    private String mchid; //商户号
    private String mchSerialNo; //商户API证书的证书序列号
    private String privateKeyFilePath; //商户私钥文件
    private String apiV3Key; //证书解密的密钥
    private String weChatPayCertFilePath; //平台证书
    private String notifyUrl; //支付成功的回调地址
    private String refundNotifyUrl; //退款成功的回调地址
}
```



#### 3.3.2 Mapper层

**在OrderMapper.java中添加getByNumberAndUserId和update两个方法**

```java
	/**
     * 根据订单号和用户id查询订单
     * @param orderNumber
     * @param userId
     */
    @Select("select * from orders where number = #{orderNumber} and user_id= #{userId}")
    Orders getByNumberAndUserId(String orderNumber, Long userId);

    /**
     * 修改订单信息
     * @param orders
     */
    void update(Orders orders);
```

**在OrderMapper.xml中添加**

```xml
<update id="update" parameterType="com.sky.entity.Orders">
        update orders
        <set>
            <if test="cancelReason != null and cancelReason!='' ">
                cancel_reason=#{cancelReason},
            </if>
            <if test="rejectionReason != null and rejectionReason!='' ">
                rejection_reason=#{rejectionReason},
            </if>
            <if test="cancelTime != null">
                cancel_time=#{cancelTime},
            </if>
            <if test="payStatus != null">
                pay_status=#{payStatus},
            </if>
            <if test="payMethod != null">
                pay_method=#{payMethod},
            </if>
            <if test="checkoutTime != null">
                checkout_time=#{checkoutTime},
            </if>
            <if test="status != null">
                status = #{status},
            </if>
            <if test="deliveryTime != null">
                delivery_time = #{deliveryTime}
            </if>
        </set>
        where id = #{id}
</update>
```



#### 3.3.3 Service层

**在OrderService.java中添加payment和paySuccess两个方法定义**

```java
	/**
     * 订单支付
     * @param ordersPaymentDTO
     * @return
     */
    OrderPaymentVO payment(OrdersPaymentDTO ordersPaymentDTO) throws Exception;

    /**
     * 支付成功，修改订单状态
     * @param outTradeNo
     */
    void paySuccess(String outTradeNo);
```

**在OrderServiceImpl.java中实现payment和paySuccess两个方法**

```java
 	@Autowired
    private UserMapper userMapper;
	@Autowired
    private WeChatPayUtil weChatPayUtil;
    /**
     * 订单支付
     *
     * @param ordersPaymentDTO
     * @return
     */
    public OrderPaymentVO payment(OrdersPaymentDTO ordersPaymentDTO) throws Exception {
        // 当前登录用户id
        Long userId = BaseContext.getCurrentId();
        User user = userMapper.getById(userId);

        //调用微信支付接口，生成预支付交易单
        JSONObject jsonObject = weChatPayUtil.pay(
                ordersPaymentDTO.getOrderNumber(), //商户订单号
                new BigDecimal(0.01), //支付金额，单位 元
                "苍穹外卖订单", //商品描述
                user.getOpenid() //微信用户的openid
        );

        if (jsonObject.getString("code") != null && jsonObject.getString("code").equals("ORDERPAID")) {
            throw new OrderBusinessException("该订单已支付");
        }

        OrderPaymentVO vo = jsonObject.toJavaObject(OrderPaymentVO.class);
        vo.setPackageStr(jsonObject.getString("package"));

        return vo;
    }

    /**
     * 支付成功，修改订单状态
     *
     * @param outTradeNo
     */
    public void paySuccess(String outTradeNo) {
        // 当前登录用户id
        Long userId = BaseContext.getCurrentId();

        // 根据订单号查询当前用户的订单
        Orders ordersDB = orderMapper.getByNumberAndUserId(outTradeNo, userId);

        // 根据订单id更新订单的状态、支付方式、支付状态、结账时间
        Orders orders = Orders.builder()
                .id(ordersDB.getId())
                .status(Orders.TO_BE_CONFIRMED)
                .payStatus(Orders.PAID)
                .checkoutTime(LocalDateTime.now())
                .build();

        orderMapper.update(orders);
    }
```



#### 3.3.4 Controller层

**在OrderController.java中添加payment方法**

```java
 	/**
     * 订单支付
     *
     * @param ordersPaymentDTO
     * @return
     */
    @PutMapping("/payment")
    @ApiOperation("订单支付")
    public Result<OrderPaymentVO> payment(@RequestBody OrdersPaymentDTO ordersPaymentDTO) throws Exception {
        log.info("订单支付：{}", ordersPaymentDTO);
        OrderPaymentVO orderPaymentVO = orderService.payment(ordersPaymentDTO);
        log.info("生成预支付交易单：{}", orderPaymentVO);
        return Result.success(orderPaymentVO);
    }
```

PayNotifyController.java

```java
package com.sky.controller.notify;

import com.alibaba.druid.support.json.JSONUtils;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.sky.annotation.IgnoreToken;
import com.sky.properties.WeChatProperties;
import com.sky.service.OrderService;
import com.wechat.pay.contrib.apache.httpclient.util.AesUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.entity.ContentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;

/**
 * 支付回调相关接口
 */
@RestController
@RequestMapping("/notify")
@Slf4j
public class PayNotifyController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private WeChatProperties weChatProperties;

    /**
     * 支付成功回调
     *
     * @param request
     */
    @RequestMapping("/paySuccess")
    public void paySuccessNotify(HttpServletRequest request, HttpServletResponse response) throws Exception {
        //读取数据
        String body = readData(request);
        log.info("支付成功回调：{}", body);

        //数据解密
        String plainText = decryptData(body);
        log.info("解密后的文本：{}", plainText);

        JSONObject jsonObject = JSON.parseObject(plainText);
        String outTradeNo = jsonObject.getString("out_trade_no");//商户平台订单号
        String transactionId = jsonObject.getString("transaction_id");//微信支付交易号

        log.info("商户平台订单号：{}", outTradeNo);
        log.info("微信支付交易号：{}", transactionId);

        //业务处理，修改订单状态、来单提醒
        orderService.paySuccess(outTradeNo);

        //给微信响应
        responseToWeixin(response);
    }

    /**
     * 读取数据
     *
     * @param request
     * @return
     * @throws Exception
     */
    private String readData(HttpServletRequest request) throws Exception {
        BufferedReader reader = request.getReader();
        StringBuilder result = new StringBuilder();
        String line = null;
        while ((line = reader.readLine()) != null) {
            if (result.length() > 0) {
                result.append("\n");
            }
            result.append(line);
        }
        return result.toString();
    }

    /**
     * 数据解密
     *
     * @param body
     * @return
     * @throws Exception
     */
    private String decryptData(String body) throws Exception {
        JSONObject resultObject = JSON.parseObject(body);
        JSONObject resource = resultObject.getJSONObject("resource");
        String ciphertext = resource.getString("ciphertext");
        String nonce = resource.getString("nonce");
        String associatedData = resource.getString("associated_data");

        AesUtil aesUtil = new AesUtil(weChatProperties.getApiV3Key().getBytes(StandardCharsets.UTF_8));
        //密文解密
        String plainText = aesUtil.decryptToString(associatedData.getBytes(StandardCharsets.UTF_8),
                nonce.getBytes(StandardCharsets.UTF_8),
                ciphertext);

        return plainText;
    }

    /**
     * 给微信响应
     * @param response
     */
    private void responseToWeixin(HttpServletResponse response) throws Exception{
        response.setStatus(200);
        HashMap<Object, Object> map = new HashMap<>();
        map.put("code", "SUCCESS");
        map.put("message", "SUCCESS");
        response.setHeader("Content-type", ContentType.APPLICATION_JSON.toString());
        response.getOutputStream().write(JSONUtils.toJSONString(map).getBytes(StandardCharsets.UTF_8));
        response.flushBuffer();
    }
}
```



### 3.4 功能测试

测试过程中，可通过断点方式查看后台每一步执行情况。

**下单：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221215205122716.png" alt="image-20221215205122716" style="zoom: 80%;" /> 

**去支付：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221215205308701.png" alt="image-20221215205308701" style="zoom:80%;" /> 

**确认支付：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221215205434552.png" alt="image-20221215205434552" style="zoom:80%;" /> 

进行扫码支付即可。



### 3.5 代码提交

 

# 苍穹外卖-day09

## 用户端历史订单模块

## 1. 查询历史订单

### 1.1 需求分析和设计

产品原型：

![image-20221128092537535](http://stofu80ry.sabkt.gdipper.com/picture/image-20221128092537535.png)

业务规则

- 分页查询历史订单
- 可以根据订单状态查询
- 展示订单数据时，需要展示的数据包括：下单时间、订单状态、订单金额、订单明细（商品名称、图片）

接口设计：参见接口文档

![image-20221128103222657](http://stofu80ry.sabkt.gdipper.com/picture/image-20221128103222657.png)

### 1.2 代码实现

#### 1.2.1 user/OrderController

~~~java
    /**
     * 历史订单查询
     *
     * @param page
     * @param pageSize
     * @param status   订单状态 1待付款 2待接单 3已接单 4派送中 5已完成 6已取消
     * @return
     */
    @GetMapping("/historyOrders")
    @ApiOperation("历史订单查询")
    public Result<PageResult> page(int page, int pageSize, Integer status) {
        PageResult pageResult = orderService.pageQuery4User(page, pageSize, status);
        return Result.success(pageResult);
    }
~~~

#### 1.2.2 OrderService

~~~java
    /**
     * 用户端订单分页查询
     * @param page
     * @param pageSize
     * @param status
     * @return
     */
    PageResult pageQuery4User(int page, int pageSize, Integer status);
~~~

#### 1.2.3 OrderServiceImpl

~~~java
/**
     * 用户端订单分页查询
     *
     * @param pageNum
     * @param pageSize
     * @param status
     * @return
     */
    public PageResult pageQuery4User(int pageNum, int pageSize, Integer status) {
        // 设置分页
        PageHelper.startPage(pageNum, pageSize);

        OrdersPageQueryDTO ordersPageQueryDTO = new OrdersPageQueryDTO();
        ordersPageQueryDTO.setUserId(BaseContext.getCurrentId());
        ordersPageQueryDTO.setStatus(status);

        // 分页条件查询
        Page<Orders> page = orderMapper.pageQuery(ordersPageQueryDTO);

        List<OrderVO> list = new ArrayList();

        // 查询出订单明细，并封装入OrderVO进行响应
        if (page != null && page.getTotal() > 0) {
            for (Orders orders : page) {
                Long orderId = orders.getId();// 订单id

                // 查询订单明细
                List<OrderDetail> orderDetails = orderDetailMapper.getByOrderId(orderId);

                OrderVO orderVO = new OrderVO();
                BeanUtils.copyProperties(orders, orderVO);
                orderVO.setOrderDetailList(orderDetails);

                list.add(orderVO);
            }
        }
        return new PageResult(page.getTotal(), list);
    }
~~~

#### 1.2.4 OrderMapper

~~~java
    /**
     * 分页条件查询并按下单时间排序
     * @param ordersPageQueryDTO
     */
    Page<Orders> pageQuery(OrdersPageQueryDTO ordersPageQueryDTO);
~~~

#### 1.2.5 OrderMapper.xml

~~~xml
	<select id="pageQuery" resultType="Orders">
        select * from orders
        <where>
            <if test="number != null and number!=''">
                and number like concat('%',#{number},'%')
            </if>
            <if test="phone != null and phone!=''">
                and phone like concat('%',#{phone},'%')
            </if>
            <if test="userId != null">
                and user_id = #{userId}
            </if>
            <if test="status != null">
                and status = #{status}
            </if>
            <if test="beginTime != null">
                and order_time &gt;= #{beginTime}
            </if>
            <if test="endTime != null">
                and order_time &lt;= #{endTime}
            </if>
        </where>
        order by order_time desc
    </select>
~~~

#### 1.2.6 OrderDetailMapper

~~~java
    /**
     * 根据订单id查询订单明细
     * @param orderId
     * @return
     */
    @Select("select * from order_detail where order_id = #{orderId}")
    List<OrderDetail> getByOrderId(Long orderId);
~~~

### 1.3 功能测试

略

## 2. 查询订单详情

### 2.1 需求分析和设计

产品原型：

![image-20221128102144294](http://stofu80ry.sabkt.gdipper.com/picture/image-20221128102144294.png)



接口设计：参见接口文档

![image-20221128142142811](http://stofu80ry.sabkt.gdipper.com/picture/image-20221128142142811.png)

### 2.2 代码实现

#### 2.2.1 user/OrderController

~~~java
    /**
     * 查询订单详情
     *
     * @param id
     * @return
     */
    @GetMapping("/orderDetail/{id}")
    @ApiOperation("查询订单详情")
    public Result<OrderVO> details(@PathVariable("id") Long id) {
        OrderVO orderVO = orderService.details(id);
        return Result.success(orderVO);
    }
~~~

#### 2.2.2 OrderService

~~~java
    /**
     * 查询订单详情
     * @param id
     * @return
     */
    OrderVO details(Long id);
~~~

#### 2.2.3 OrderServiceImpl

~~~java
    /**
     * 查询订单详情
     *
     * @param id
     * @return
     */
    public OrderVO details(Long id) {
        // 根据id查询订单
        Orders orders = orderMapper.getById(id);

        // 查询该订单对应的菜品/套餐明细
        List<OrderDetail> orderDetailList = orderDetailMapper.getByOrderId(orders.getId());

        // 将该订单及其详情封装到OrderVO并返回
        OrderVO orderVO = new OrderVO();
        BeanUtils.copyProperties(orders, orderVO);
        orderVO.setOrderDetailList(orderDetailList);

        return orderVO;
    }
~~~

#### 2.2.4 OrderMapper

~~~java
    /**
     * 根据id查询订单
     * @param id
     */
    @Select("select * from orders where id=#{id}")
    Orders getById(Long id);
~~~

### 2.3 功能测试

略

## 3. 取消订单

### 3.1 需求分析和设计

产品原型：

![image-20221128145444268](http://stofu80ry.sabkt.gdipper.com/picture/image-20221128145444268.png)

业务规则：

- 待支付和待接单状态下，用户可直接取消订单
- 商家已接单状态下，用户取消订单需电话沟通商家
- 派送中状态下，用户取消订单需电话沟通商家
- 如果在待接单状态下取消订单，需要给用户退款
- 取消订单后需要将订单状态修改为“已取消”

接口设计：参见接口文档

![image-20221128164410852](http://stofu80ry.sabkt.gdipper.com/picture/image-20221128164410852.png)

### 3.2 代码实现

#### 3.2.1 user/OrderController

~~~java
    /**
     * 用户取消订单
     *
     * @return
     */
    @PutMapping("/cancel/{id}")
    @ApiOperation("取消订单")
    public Result cancel(@PathVariable("id") Long id) throws Exception {
        orderService.userCancelById(id);
        return Result.success();
    }
~~~

#### 3.2.2 OrderService

~~~java
    /**
     * 用户取消订单
     * @param id
     */
    void userCancelById(Long id) throws Exception;
~~~

#### 3.2.3 OrderServiceImpl

~~~java
	/**
     * 用户取消订单
     *
     * @param id
     */
    public void userCancelById(Long id) throws Exception {
        // 根据id查询订单
        Orders ordersDB = orderMapper.getById(id);

        // 校验订单是否存在
        if (ordersDB == null) {
            throw new OrderBusinessException(MessageConstant.ORDER_NOT_FOUND);
        }

        //订单状态 1待付款 2待接单 3已接单 4派送中 5已完成 6已取消
        if (ordersDB.getStatus() > 2) {
            throw new OrderBusinessException(MessageConstant.ORDER_STATUS_ERROR);
        }

        Orders orders = new Orders();
        orders.setId(ordersDB.getId());

        // 订单处于待接单状态下取消，需要进行退款
        if (ordersDB.getStatus().equals(Orders.TO_BE_CONFIRMED)) {
            //调用微信支付退款接口
            weChatPayUtil.refund(
                    ordersDB.getNumber(), //商户订单号
                    ordersDB.getNumber(), //商户退款单号
                    new BigDecimal(0.01),//退款金额，单位 元
                    new BigDecimal(0.01));//原订单金额

            //支付状态修改为 退款
            orders.setPayStatus(Orders.REFUND);
        }

        // 更新订单状态、取消原因、取消时间
        orders.setStatus(Orders.CANCELLED);
        orders.setCancelReason("用户取消");
        orders.setCancelTime(LocalDateTime.now());
        orderMapper.update(orders);
    }
~~~

### 3.3 功能测试

略

## 4. 再来一单

### 4.1 需求分析和设计

产品原型：

![image-20221128173238656](http://stofu80ry.sabkt.gdipper.com/picture/image-20221128173238656.png)

接口设计：参见接口文档

![image-20221128173350467](http://stofu80ry.sabkt.gdipper.com/picture/image-20221128173350467.png)

业务规则：

- 再来一单就是将原订单中的商品重新加入到购物车中



### 4.2 代码实现

#### 4.2.1 user/OrderController

~~~java
    /**
     * 再来一单
     *
     * @param id
     * @return
     */
    @PostMapping("/repetition/{id}")
    @ApiOperation("再来一单")
    public Result repetition(@PathVariable Long id) {
        orderService.repetition(id);
        return Result.success();
    }
~~~

#### 4.2.2 OrderService

~~~java
    /**
     * 再来一单
     *
     * @param id
     */
    void repetition(Long id);
~~~

#### 4.2.3 OrderServiceImpl

~~~java
	/**
     * 再来一单
     *
     * @param id
     */
    public void repetition(Long id) {
        // 查询当前用户id
        Long userId = BaseContext.getCurrentId();

        // 根据订单id查询当前订单详情
        List<OrderDetail> orderDetailList = orderDetailMapper.getByOrderId(id);

        // 将订单详情对象转换为购物车对象
        List<ShoppingCart> shoppingCartList = orderDetailList.stream().map(x -> {
            ShoppingCart shoppingCart = new ShoppingCart();

            // 将原订单详情里面的菜品信息重新复制到购物车对象中
            BeanUtils.copyProperties(x, shoppingCart, "id");
            shoppingCart.setUserId(userId);
            shoppingCart.setCreateTime(LocalDateTime.now());

            return shoppingCart;
        }).collect(Collectors.toList());

        // 将购物车对象批量添加到数据库
        shoppingCartMapper.insertBatch(shoppingCartList);
    }
~~~

#### 4.2.4 ShoppingCartMapper

~~~java
    /**
     * 批量插入购物车数据
     *
     * @param shoppingCartList
     */
    void insertBatch(List<ShoppingCart> shoppingCartList);
~~~

#### 4.2.5 ShoppingCartMapper.xml

~~~xml
<insert id="insertBatch" parameterType="list">
        insert into shopping_cart
        (name, image, user_id, dish_id, setmeal_id, dish_flavor, number, amount, create_time)
        values
        <foreach collection="shoppingCartList" item="sc" separator=",">
            (#{sc.name},#{sc.image},#{sc.userId},#{sc.dishId},#{sc.setmealId},#{sc.dishFlavor},#{sc.number},#{sc.amount},#{sc.createTime})
        </foreach>
</insert>
~~~

### 4.3 功能测试

略



## 商家端订单管理模块

## 1. 订单搜索

### 1.1 需求分析和设计

产品原型：

![image-20221129092023177](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129092023177.png)

![image-20221129114035570](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129114035570.png)

![image-20221129114054664](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129114054664.png)

![image-20221129114116492](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129114116492.png)

![image-20221129114132956](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129114132956.png)

![image-20221129114151055](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129114151055.png)



业务规则：

- 输入订单号/手机号进行搜索，支持模糊搜索
- 根据订单状态进行筛选
- 下单时间进行时间筛选
- 搜索内容为空，提示未找到相关订单
- 搜索结果页，展示包含搜索关键词的内容
- 分页展示搜索到的订单数据

接口设计：参见接口文档

![image-20221129092552620](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129092552620.png)



### 1.2 代码实现

#### 1.2.1 admin/OrderController

在admin包下创建OrderController

~~~java
/**
 * 订单管理
 */
@RestController("adminOrderController")
@RequestMapping("/admin/order")
@Slf4j
@Api(tags = "订单管理接口")
public class OrderController {

    @Autowired
    private OrderService orderService;

    /**
     * 订单搜索
     *
     * @param ordersPageQueryDTO
     * @return
     */
    @GetMapping("/conditionSearch")
    @ApiOperation("订单搜索")
    public Result<PageResult> conditionSearch(OrdersPageQueryDTO ordersPageQueryDTO) {
        PageResult pageResult = orderService.conditionSearch(ordersPageQueryDTO);
        return Result.success(pageResult);
    }
}
~~~

#### 1.2.2 OrderService

~~~java
    /**
     * 条件搜索订单
     * @param ordersPageQueryDTO
     * @return
     */
    PageResult conditionSearch(OrdersPageQueryDTO ordersPageQueryDTO);
~~~

#### 1.2.3 OrderServiceImpl

~~~java
    /**
     * 订单搜索
     *
     * @param ordersPageQueryDTO
     * @return
     */
    public PageResult conditionSearch(OrdersPageQueryDTO ordersPageQueryDTO) {
        PageHelper.startPage(ordersPageQueryDTO.getPage(), ordersPageQueryDTO.getPageSize());

        Page<Orders> page = orderMapper.pageQuery(ordersPageQueryDTO);

        // 部分订单状态，需要额外返回订单菜品信息，将Orders转化为OrderVO
        List<OrderVO> orderVOList = getOrderVOList(page);

        return new PageResult(page.getTotal(), orderVOList);
    }

    private List<OrderVO> getOrderVOList(Page<Orders> page) {
        // 需要返回订单菜品信息，自定义OrderVO响应结果
        List<OrderVO> orderVOList = new ArrayList<>();

        List<Orders> ordersList = page.getResult();
        if (!CollectionUtils.isEmpty(ordersList)) {
            for (Orders orders : ordersList) {
                // 将共同字段复制到OrderVO
                OrderVO orderVO = new OrderVO();
                BeanUtils.copyProperties(orders, orderVO);
                String orderDishes = getOrderDishesStr(orders);

                // 将订单菜品信息封装到orderVO中，并添加到orderVOList
                orderVO.setOrderDishes(orderDishes);
                orderVOList.add(orderVO);
            }
        }
        return orderVOList;
    }

    /**
     * 根据订单id获取菜品信息字符串
     *
     * @param orders
     * @return
     */
    private String getOrderDishesStr(Orders orders) {
        // 查询订单菜品详情信息（订单中的菜品和数量）
        List<OrderDetail> orderDetailList = orderDetailMapper.getByOrderId(orders.getId());

        // 将每一条订单菜品信息拼接为字符串（格式：宫保鸡丁*3；）
        List<String> orderDishList = orderDetailList.stream().map(x -> {
            String orderDish = x.getName() + "*" + x.getNumber() + ";";
            return orderDish;
        }).collect(Collectors.toList());

        // 将该订单对应的所有菜品信息拼接在一起
        return String.join("", orderDishList);
    }
~~~

### 1.3 功能测试

略

## 2. 各个状态的订单数量统计

### 2.1 需求分析和设计

产品原型：

![image-20221129095804419](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129095804419.png)



接口设计：参见接口文档

![image-20221129095912896](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129095912896.png)

### 2.2 代码实现

#### 2.2.1 admin/OrderController

~~~java
    /**
     * 各个状态的订单数量统计
     *
     * @return
     */
    @GetMapping("/statistics")
    @ApiOperation("各个状态的订单数量统计")
    public Result<OrderStatisticsVO> statistics() {
        OrderStatisticsVO orderStatisticsVO = orderService.statistics();
        return Result.success(orderStatisticsVO);
    }
~~~

#### 2.2.2 OrderService

~~~java
    /**
     * 各个状态的订单数量统计
     * @return
     */
    OrderStatisticsVO statistics();
~~~

#### 2.2.3 OrderServiceImpl

~~~java
    /**
     * 各个状态的订单数量统计
     *
     * @return
     */
    public OrderStatisticsVO statistics() {
        // 根据状态，分别查询出待接单、待派送、派送中的订单数量
        Integer toBeConfirmed = orderMapper.countStatus(Orders.TO_BE_CONFIRMED);
        Integer confirmed = orderMapper.countStatus(Orders.CONFIRMED);
        Integer deliveryInProgress = orderMapper.countStatus(Orders.DELIVERY_IN_PROGRESS);

        // 将查询出的数据封装到orderStatisticsVO中响应
        OrderStatisticsVO orderStatisticsVO = new OrderStatisticsVO();
        orderStatisticsVO.setToBeConfirmed(toBeConfirmed);
        orderStatisticsVO.setConfirmed(confirmed);
        orderStatisticsVO.setDeliveryInProgress(deliveryInProgress);
        return orderStatisticsVO;
    }
~~~

#### 2.2.4 OrderMapper

~~~java
        /**
         * 根据状态统计订单数量
         * @param status
         */
        @Select("select count(id) from orders where status = #{status}")
        Integer countStatus(Integer status);
~~~



### 2.3 功能测试

略

## 3. 查询订单详情

### 3.1 需求分析和设计

产品原型：

![image-20221129101712084](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129101712084.png)

业务规则：

- 订单详情页面需要展示订单基本信息（状态、订单号、下单时间、收货人、电话、收货地址、金额等）
- 订单详情页面需要展示订单明细数据（商品名称、数量、单价）

接口设计：参见接口文档

![image-20221129101035374](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129101035374.png)

### 3.2 代码实现

#### 3.2.1 admin/OrderController

~~~java
    /**
     * 订单详情
     *
     * @param id
     * @return
     */
    @GetMapping("/details/{id}")
    @ApiOperation("查询订单详情")
    public Result<OrderVO> details(@PathVariable("id") Long id) {
        OrderVO orderVO = orderService.details(id);
        return Result.success(orderVO);
    }
~~~

### 3.3 功能测试

略

## 4. 接单

### 4.1 需求分析和设计

产品原型：

![image-20221129105142623](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129105142623.png)

![image-20221129105116285](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129105116285.png)

业务规则：

- 商家接单其实就是将订单的状态修改为“已接单”

接口设计：参见接口文档

![image-20221129105313172](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129105313172.png)

### 4.2 代码实现

#### 4.2.1 admin/OrderController

~~~java
    /**
     * 接单
     *
     * @return
     */
    @PutMapping("/confirm")
    @ApiOperation("接单")
    public Result confirm(@RequestBody OrdersConfirmDTO ordersConfirmDTO) {
        orderService.confirm(ordersConfirmDTO);
        return Result.success();
    }
~~~

#### 4.2.2 OrderService

~~~java
    /**
     * 接单
     *
     * @param ordersConfirmDTO
     */
    void confirm(OrdersConfirmDTO ordersConfirmDTO);
~~~

#### 4.2.3 OrderServiceImpl

~~~java
    /**
     * 接单
     *
     * @param ordersConfirmDTO
     */
    public void confirm(OrdersConfirmDTO ordersConfirmDTO) {
        Orders orders = Orders.builder()
                .id(ordersConfirmDTO.getId())
                .status(Orders.CONFIRMED)
                .build();

        orderMapper.update(orders);
    }
~~~



### 4.3 功能测试

略

## 5. 拒单

### 5.1 需求分析和设计

产品原型：

![image-20221129110358976](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129110358976.png)

![image-20221129110428390](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129110428390.png)

业务规则：

- 商家拒单其实就是将订单状态修改为“已取消”
- 只有订单处于“待接单”状态时可以执行拒单操作
- 商家拒单时需要指定拒单原因
- 商家拒单时，如果用户已经完成了支付，需要为用户退款

接口设计：参见接口文档

![image-20221129110725031](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129110725031.png)

### 5.2 代码实现

#### 5.2.1 admin/OrderController

~~~java
    /**
     * 拒单
     *
     * @return
     */
    @PutMapping("/rejection")
    @ApiOperation("拒单")
    public Result rejection(@RequestBody OrdersRejectionDTO ordersRejectionDTO) throws Exception {
        orderService.rejection(ordersRejectionDTO);
        return Result.success();
    }
~~~

#### 5.2.2 OrderService

~~~java
    /**
     * 拒单
     *
     * @param ordersRejectionDTO
     */
    void rejection(OrdersRejectionDTO ordersRejectionDTO) throws Exception;
~~~

#### 5.2.3 OrderServiceImpl

~~~java
	/**
     * 拒单
     *
     * @param ordersRejectionDTO
     */
    public void rejection(OrdersRejectionDTO ordersRejectionDTO) throws Exception {
        // 根据id查询订单
        Orders ordersDB = orderMapper.getById(ordersRejectionDTO.getId());

        // 订单只有存在且状态为2（待接单）才可以拒单
        if (ordersDB == null || !ordersDB.getStatus().equals(Orders.TO_BE_CONFIRMED)) {
            throw new OrderBusinessException(MessageConstant.ORDER_STATUS_ERROR);
        }

        //支付状态
        Integer payStatus = ordersDB.getPayStatus();
        if (payStatus == Orders.PAID) {
            //用户已支付，需要退款
            String refund = weChatPayUtil.refund(
                    ordersDB.getNumber(),
                    ordersDB.getNumber(),
                    new BigDecimal(0.01),
                    new BigDecimal(0.01));
            log.info("申请退款：{}", refund);
        }

        // 拒单需要退款，根据订单id更新订单状态、拒单原因、取消时间
        Orders orders = new Orders();
        orders.setId(ordersDB.getId());
        orders.setStatus(Orders.CANCELLED);
        orders.setRejectionReason(ordersRejectionDTO.getRejectionReason());
        orders.setCancelTime(LocalDateTime.now());

        orderMapper.update(orders);
    }
~~~

### 5.3 功能测试

略

## 6. 取消订单

### 6.1 需求分析和设计

产品原型：

![image-20221129111402099](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129111402099.png)



业务规则：

- 取消订单其实就是将订单状态修改为“已取消”
- 商家取消订单时需要指定取消原因
- 商家取消订单时，如果用户已经完成了支付，需要为用户退款

接口设计：参见接口文档

![image-20221129112201836](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129112201836.png)

### 6.2 代码实现

#### 6.2.1 admin/OrderController

~~~java
    /**
     * 取消订单
     *
     * @return
     */
    @PutMapping("/cancel")
    @ApiOperation("取消订单")
    public Result cancel(@RequestBody OrdersCancelDTO ordersCancelDTO) throws Exception {
        orderService.cancel(ordersCancelDTO);
        return Result.success();
    }
~~~

#### 6.2.2 OrderService

~~~java
    /**
     * 商家取消订单
     *
     * @param ordersCancelDTO
     */
    void cancel(OrdersCancelDTO ordersCancelDTO) throws Exception;
~~~

#### 6.2.3 OrderServiceImpl

~~~java
	/**
     * 取消订单
     *
     * @param ordersCancelDTO
     */
    public void cancel(OrdersCancelDTO ordersCancelDTO) throws Exception {
        // 根据id查询订单
        Orders ordersDB = orderMapper.getById(ordersCancelDTO.getId());

        //支付状态
        Integer payStatus = ordersDB.getPayStatus();
        if (payStatus == 1) {
            //用户已支付，需要退款
            String refund = weChatPayUtil.refund(
                    ordersDB.getNumber(),
                    ordersDB.getNumber(),
                    new BigDecimal(0.01),
                    new BigDecimal(0.01));
            log.info("申请退款：{}", refund);
        }

        // 管理端取消订单需要退款，根据订单id更新订单状态、取消原因、取消时间
        Orders orders = new Orders();
        orders.setId(ordersCancelDTO.getId());
        orders.setStatus(Orders.CANCELLED);
        orders.setCancelReason(ordersCancelDTO.getCancelReason());
        orders.setCancelTime(LocalDateTime.now());
        orderMapper.update(orders);
    }
~~~

### 6.3 功能测试

略



## 7. 派送订单

### 7.1 需求分析和设计

产品原型：

![image-20221129113257201](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129113257201.png)



业务规则：

- 派送订单其实就是将订单状态修改为“派送中”
- 只有状态为“待派送”的订单可以执行派送订单操作

接口设计：参见接口文档

![image-20221129113449124](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129113449124.png)

### 7.2 代码实现

#### 7.2.1 admin/OrderController

~~~java
    /**
     * 派送订单
     *
     * @return
     */
    @PutMapping("/delivery/{id}")
    @ApiOperation("派送订单")
    public Result delivery(@PathVariable("id") Long id) {
        orderService.delivery(id);
        return Result.success();
    }
~~~

#### 7.2.2 OrderService

~~~java
    /**
     * 派送订单
     *
     * @param id
     */
    void delivery(Long id);
~~~

#### 7.2.3 OrderServiceImpl

~~~java
    /**
     * 派送订单
     *
     * @param id
     */
    public void delivery(Long id) {
        // 根据id查询订单
        Orders ordersDB = orderMapper.getById(id);

        // 校验订单是否存在，并且状态为3
        if (ordersDB == null || !ordersDB.getStatus().equals(Orders.CONFIRMED)) {
            throw new OrderBusinessException(MessageConstant.ORDER_STATUS_ERROR);
        }

        Orders orders = new Orders();
        orders.setId(ordersDB.getId());
        // 更新订单状态,状态转为派送中
        orders.setStatus(Orders.DELIVERY_IN_PROGRESS);

        orderMapper.update(orders);
    }
~~~

### 7.3 功能测试

略



## 8. 完成订单

### 8.1 需求分析和设计

产品原型：

![image-20221129112554051](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129112554051.png)



业务规则：

- 完成订单其实就是将订单状态修改为“已完成”
- 只有状态为“派送中”的订单可以执行订单完成操作

接口设计：参见接口文档

![image-20221129113622784](http://stofu80ry.sabkt.gdipper.com/picture/image-20221129113622784.png)

### 8.2 代码实现

#### 8.2.1 admin/OrderController

~~~java
    /**
     * 完成订单
     *
     * @return
     */
    @PutMapping("/complete/{id}")
    @ApiOperation("完成订单")
    public Result complete(@PathVariable("id") Long id) {
        orderService.complete(id);
        return Result.success();
    }
~~~

#### 8.2.2 OrderService

~~~java
    /**
     * 完成订单
     *
     * @param id
     */
    void complete(Long id);
~~~

#### 8.2.3 OrderServiceImpl

~~~java
    /**
     * 完成订单
     *
     * @param id
     */
    public void complete(Long id) {
        // 根据id查询订单
        Orders ordersDB = orderMapper.getById(id);

        // 校验订单是否存在，并且状态为4
        if (ordersDB == null || !ordersDB.getStatus().equals(Orders.DELIVERY_IN_PROGRESS)) {
            throw new OrderBusinessException(MessageConstant.ORDER_STATUS_ERROR);
        }

        Orders orders = new Orders();
        orders.setId(ordersDB.getId());
        // 更新订单状态,状态转为完成
        orders.setStatus(Orders.COMPLETED);
        orders.setDeliveryTime(LocalDateTime.now());

        orderMapper.update(orders);
    }
~~~

### 8.3 功能测试

略

# 校验收货地址是否超出配送范围

## 1. 环境准备

注册账号：https://passport.baidu.com/v2/?reg&tt=1671699340600&overseas=&gid=CF954C2-A3D2-417F-9FE6-B0F249ED7E33&tpl=pp&u=https%3A%2F%2Flbsyun.baidu.com%2Findex.php%3Ftitle%3D%E9%A6%96%E9%A1%B5

登录百度地图开放平台：https://lbsyun.baidu.com/

进入控制台，创建应用，获取AK：

![image-20221222170049729](http://stofu80ry.sabkt.gdipper.com/picture/image-20221222170049729.png)



![image-20221222170256927](http://stofu80ry.sabkt.gdipper.com/picture/image-20221222170256927.png)

相关接口:

https://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-geocoding

https://lbsyun.baidu.com/index.php?title=webapi/directionlite-v1



## 2. 代码开发

### 2.1 application.yml

配置外卖商家店铺地址和百度地图的AK：

![image-20221222170819582](http://stofu80ry.sabkt.gdipper.com/picture/image-20221222170819582.png)

### 2.2 OrderServiceImpl

改造OrderServiceImpl，注入上面的配置项：

~~~java
    @Value("${sky.shop.address}")
    private String shopAddress;

    @Value("${sky.baidu.ak}")
    private String ak;
~~~

在OrderServiceImpl中提供校验方法：

~~~java
/**
     * 检查客户的收货地址是否超出配送范围
     * @param address
     */
    private void checkOutOfRange(String address) {
        Map map = new HashMap();
        map.put("address",shopAddress);
        map.put("output","json");
        map.put("ak",ak);

        //获取店铺的经纬度坐标
        String shopCoordinate = HttpClientUtil.doGet("https://api.map.baidu.com/geocoding/v3", map);

        JSONObject jsonObject = JSON.parseObject(shopCoordinate);
        if(!jsonObject.getString("status").equals("0")){
            throw new OrderBusinessException("店铺地址解析失败");
        }

        //数据解析
        JSONObject location = jsonObject.getJSONObject("result").getJSONObject("location");
        String lat = location.getString("lat");
        String lng = location.getString("lng");
        //店铺经纬度坐标
        String shopLngLat = lat + "," + lng;

        map.put("address",address);
        //获取用户收货地址的经纬度坐标
        String userCoordinate = HttpClientUtil.doGet("https://api.map.baidu.com/geocoding/v3", map);

        jsonObject = JSON.parseObject(userCoordinate);
        if(!jsonObject.getString("status").equals("0")){
            throw new OrderBusinessException("收货地址解析失败");
        }

        //数据解析
        location = jsonObject.getJSONObject("result").getJSONObject("location");
        lat = location.getString("lat");
        lng = location.getString("lng");
        //用户收货地址经纬度坐标
        String userLngLat = lat + "," + lng;

        map.put("origin",shopLngLat);
        map.put("destination",userLngLat);
        map.put("steps_info","0");

        //路线规划
        String json = HttpClientUtil.doGet("https://api.map.baidu.com/directionlite/v1/driving", map);

        jsonObject = JSON.parseObject(json);
        if(!jsonObject.getString("status").equals("0")){
            throw new OrderBusinessException("配送路线规划失败");
        }

        //数据解析
        JSONObject result = jsonObject.getJSONObject("result");
        JSONArray jsonArray = (JSONArray) result.get("routes");
        Integer distance = (Integer) ((JSONObject) jsonArray.get(0)).get("distance");

        if(distance > 5000){
            //配送距离超过5000米
            throw new OrderBusinessException("超出配送范围");
        }
    }
~~~



# 苍穹外卖-day10

## 课程内容

- Spring Task
- 订单状态定时处理
- WebSocket
- 来单提醒
- 客户催单



功能实现：**订单状态定时处理**、**来单提醒**和**客户催单**

**订单状态定时处理：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218204021760.png" alt="image-20221218204021760" style="zoom:50%;" /> 



**来单提醒：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218204119663.png" alt="image-20221218204119663" style="zoom:50%;" /> 



**客户催单：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218204202847.png" alt="image-20221218204202847" style="zoom:50%;" /> 



## 1. Spring Task

### 1.1 介绍

**Spring Task** 是Spring框架提供的任务调度工具，可以按照约定的时间自动执行某个代码逻辑。

**定位：**定时任务框架

**作用：**定时自动执行某段Java代码



 <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218183054818.png" alt="image-20221218183054818" style="zoom:50%;" /> 为什么要在Java程序中使用Spring Task？

**应用场景：**

1). 信用卡每月还款提醒

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218183213088.png" alt="image-20221218183213088" style="zoom:50%;" /> 



2). 银行贷款每月还款提醒

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218183410430.png" alt="image-20221218183410430" style="zoom:50%;" /> 



3). 火车票售票系统处理未支付订单

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218183614351.png" alt="image-20221218183614351" style="zoom:50%;" /> 



4). 入职纪念日为用户发送通知

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218183655186.png" alt="image-20221218183655186" style="zoom:50%;" /> 



**强调：**只要是需要定时处理的场景都可以使用Spring Task



### 1.2 cron表达式

**cron表达式**其实就是一个字符串，通过cron表达式可以**定义任务触发的时间**

**构成规则：**分为6或7个域，由空格分隔开，每个域代表一个含义

每个域的含义分别为：秒、分钟、小时、日、月、周、年(可选)

**举例：**

2022年10月12日上午9点整 对应的cron表达式为：**0 0 9 12 10 ? 2022**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218184412491.png" alt="image-20221218184412491" style="zoom:50%;" /> 

**说明：**一般**日**和**周**的值不同时设置，其中一个设置，另一个用？表示。



**比如：**描述2月份的最后一天，最后一天具体是几号呢？可能是28号，也有可能是29号，所以就不能写具体数字。

为了描述这些信息，提供一些特殊的字符。这些具体的细节，我们就不用自己去手写，因为这个cron表达式，它其实有在线生成器。

cron表达式在线生成器：https://cron.qqe2.com/

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218184959888.png" alt="image-20221218184959888" style="zoom:50%;" /> 



可以直接在这个网站上面，只要根据自己的要求去生成corn表达式即可。所以一般就不用自己去编写这个表达式。

**通配符：**

\* 表示所有值； 

? 表示未说明的值，即不关心它为何值； 

\- 表示一个指定的范围； 

, 表示附加一个可能值； 

/ 符号前表示开始时间，符号后表示每次递增的值；

**cron表达式案例：**

*/5 * * * * ? 每隔5秒执行一次

0 */1 * * * ? 每隔1分钟执行一次

0 0 5-15 * * ? 每天5-15点整点触发

0 0/3 * * * ? 每三分钟触发一次

0 0-5 14 * * ? 在每天下午2点到下午2:05期间的每1分钟触发 

0 0/5 14 * * ? 在每天下午2点到下午2:55期间的每5分钟触发

0 0/5 14,18 * * ? 在每天下午2点到2:55期间和下午6点到6:55期间的每5分钟触发

0 0/30 9-17 * * ? 朝九晚五工作时间内每半小时

0 0 10,14,16 * * ? 每天上午10点，下午2点，4点 



### 1.3 入门案例

#### 1.3.1 Spring Task使用步骤

1). 导入maven坐标 spring-context（已存在）

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218193251182.png" alt="image-20221218193251182" style="zoom:50%;" /> 

2). 启动类添加注解 @EnableScheduling 开启任务调度

3). 自定义定时任务类



#### 1.3.2 代码开发

**编写定时任务类：**

进入sky-server模块中

```java
package com.sky.task;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * 自定义定时任务类
 */
@Component
@Slf4j
public class MyTask {

    /**
     * 定时任务 每隔5秒触发一次
     */
    @Scheduled(cron = "0/5 * * * * ?")
    public void executeTask(){
        log.info("定时任务开始执行：{}",new Date());
    }
}
```

**开启任务调度：**

启动类添加注解 @EnableScheduling

```java
package com.sky;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement //开启注解方式的事务管理
@Slf4j
@EnableCaching
@EnableScheduling
public class SkyApplication {
    public static void main(String[] args) {
        SpringApplication.run(SkyApplication.class, args);
        log.info("server started");
    }
}
```



#### 1.3.3 功能测试

启动服务，查看日志

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218194511420.png" alt="image-20221218194511420" style="zoom:80%;" /> 

每隔5秒执行一次。



## 2.订单状态定时处理

### 2.1 需求分析

用户下单后可能存在的情况：

- 下单后未支付，订单一直处于**“待支付”**状态
- 用户收货后管理端未点击完成按钮，订单一直处于**“派送中”**状态

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218194939516.png" alt="image-20221218194939516" style="zoom:50%;" />                  

支付超时的订单如何处理？                                                       派送中的订单一直不点击完成如何处理？



对于上面两种情况需要通过**定时任务**来修改订单状态，具体逻辑为：

- 通过定时任务每分钟检查一次是否存在支付超时订单（下单后超过15分钟仍未支付则判定为支付超时订单），如果存在则修改订单状态为“已取消”
- 通过定时任务每天凌晨1点检查一次是否存在“派送中”的订单，如果存在则修改订单状态为“已完成”



### 2.2 代码开发

**1). 自定义定时任务类OrderTask（待完善）：**

```java
package com.sky.task;

/**
 * 自定义定时任务，实现订单状态定时处理
 */
@Component
@Slf4j
public class OrderTask {

    @Autowired
    private OrderMapper orderMapper;

    /**
     * 处理支付超时订单
     */
    @Scheduled(cron = "0 * * * * ?")
    public void processTimeoutOrder(){
        log.info("处理支付超时订单：{}", new Date());
    }

    /**
     * 处理“派送中”状态的订单
     */
    @Scheduled(cron = "0 0 1 * * ?")
    public void processDeliveryOrder(){
        log.info("处理派送中订单：{}", new Date());
    }

}
```



**2). 在OrderMapper接口中扩展方法:**

```java
	/**
     * 根据状态和下单时间查询订单
     * @param status
     * @param orderTime
     */
    @Select("select * from orders where status = #{status} and order_time < #{orderTime}")
    List<Orders> getByStatusAndOrdertimeLT(Integer status, LocalDateTime orderTime);
```



**3). 完善定时任务类的processTimeoutOrder方法：**

```java
	/**
     * 处理支付超时订单
     */
    @Scheduled(cron = "0 * * * * ?")
    public void processTimeoutOrder(){
        log.info("处理支付超时订单：{}", new Date());

        LocalDateTime time = LocalDateTime.now().plusMinutes(-15);

        // select * from orders where status = 1 and order_time < 当前时间-15分钟
        List<Orders> ordersList = orderMapper.getByStatusAndOrdertimeLT(Orders.PENDING_PAYMENT, time);
        if(ordersList != null && ordersList.size() > 0){
            ordersList.forEach(order -> {
                order.setStatus(Orders.CANCELLED);
                order.setCancelReason("支付超时，自动取消");
                order.setCancelTime(LocalDateTime.now());
                orderMapper.update(order);
            });
        }
    }
```



**4). 完善定时任务类的processDeliveryOrder方法：**

```java
	/**
     * 处理“派送中”状态的订单
     */
    @Scheduled(cron = "0 0 1 * * ?")
    public void processDeliveryOrder(){
        log.info("处理派送中订单：{}", new Date());
        // select * from orders where status = 4 and order_time < 当前时间-1小时
        LocalDateTime time = LocalDateTime.now().plusMinutes(-60);
        List<Orders> ordersList = orderMapper.getByStatusAndOrdertimeLT(Orders.DELIVERY_IN_PROGRESS, time);

        if(ordersList != null && ordersList.size() > 0){
            ordersList.forEach(order -> {
                order.setStatus(Orders.COMPLETED);
                orderMapper.update(order);
            });
        }
    }
```



### 2.3 功能测试

可以通过如下方式进行测试：

- 查看控制台sql
- 查看数据库中数据变化



**支付超时的订单测试：**

**1). 查看订单表**

有一条订单，状态为1。订单状态 1待付款 2待接单 3已接单 4派送中 5已完成 6已取消

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218202334773.png" alt="image-20221218202334773" style="zoom:50%;" /> 



**2). 开启定时任务**

启动服务，观察控制台日志。处理支付超时订单任务每隔1分钟执行一次。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218203045089.png" alt="image-20221218203045089" style="zoom:50%;" /> 



**3). 再次查看订单表**

状态已更改为6，已取消。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221218203146535.png" alt="image-20221218203146535" style="zoom:80%;" /> 

证明定时任务已生效。

**处理“派送中”状态的订单任务**测试自已完成，测试步骤和上述一致。可适当修改cron表达式，改变任务执行频率，方便测试。



## 3. WebSocket

### 3.1 介绍

WebSocket 是基于 TCP 的一种新的**网络协议**。它实现了浏览器与服务器全双工通信——浏览器和服务器只需要完成一次握手，两者之间就可以创建**持久性**的连接， 并进行**双向**数据传输。

**HTTP协议和WebSocket协议对比：**

- HTTP是**短连接**
- WebSocket是**长连接**
- HTTP通信是**单向**的，基于请求响应模式
- WebSocket支持**双向**通信
- HTTP和WebSocket底层都是TCP连接

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222184340172.png" alt="image-20221222184340172" style="zoom:50%;" />           

**思考：**既然WebSocket支持双向通信，功能看似比HTTP强大，那么我们是不是可以基于WebSocket开发所有的业务功能？

**WebSocket缺点：**

服务器长期维护长连接需要一定的成本
各个浏览器支持程度不一
WebSocket 是长连接，受网络限制比较大，需要处理好重连

**结论：**WebSocket并不能完全取代HTTP，它只适合在特定的场景下使用



**WebSocket应用场景：**

1). 视频弹幕

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222184616570.png" alt="image-20221222184616570" style="zoom:50%;" />v



2). 网页聊天

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222184641675.png" alt="image-20221222184641675" style="zoom:50%;" /> 



3). 体育实况更新

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222184714092.png" alt="image-20221222184714092" style="zoom:50%;" /> 



4). 股票基金报价实时更新

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222184742094.png" alt="image-20221222184742094" style="zoom:50%;" /> 



### 3.2 入门案例

#### 3.2.1 案例分析

**需求：**实现浏览器与服务器全双工通信。浏览器既可以向服务器发送消息，服务器也可主动向浏览器推送消息。

**效果展示：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222190401414.png" alt="image-20221222190401414" style="zoom:50%;" /> 

**实现步骤：**

1). 直接使用websocket.html页面作为WebSocket客户端

2). 导入WebSocket的maven坐标

3). 导入WebSocket服务端组件WebSocketServer，用于和客户端通信

4). 导入配置类WebSocketConfiguration，注册WebSocket的服务端组件

5). 导入定时任务类WebSocketTask，定时向客户端推送数据



#### 3.2.2 代码开发

1). 定义websocket.html页面(资料中已提供)

```html
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>WebSocket Demo</title>
</head>
<body>
    <input id="text" type="text" />
    <button onclick="send()">发送消息</button>
    <button onclick="closeWebSocket()">关闭连接</button>
    <div id="message">
    </div>
</body>
<script type="text/javascript">
    var websocket = null;
    var clientId = Math.random().toString(36).substr(2);

    //判断当前浏览器是否支持WebSocket
    if('WebSocket' in window){
        //连接WebSocket节点
        websocket = new WebSocket("ws://localhost:8080/ws/"+clientId);
    }
    else{
        alert('Not support websocket')
    }

    //连接发生错误的回调方法
    websocket.onerror = function(){
        setMessageInnerHTML("error");
    };

    //连接成功建立的回调方法
    websocket.onopen = function(){
        setMessageInnerHTML("连接成功");
    }

    //接收到消息的回调方法
    websocket.onmessage = function(event){
        setMessageInnerHTML(event.data);
    }

    //连接关闭的回调方法
    websocket.onclose = function(){
        setMessageInnerHTML("close");
    }

    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function(){
        websocket.close();
    }

    //将消息显示在网页上
    function setMessageInnerHTML(innerHTML){
        document.getElementById('message').innerHTML += innerHTML + '<br/>';
    }

    //发送消息
    function send(){
        var message = document.getElementById('text').value;
        websocket.send(message);
    }
	
	//关闭连接
    function closeWebSocket() {
        websocket.close();
    }
</script>
</html>
```



2). 导入maven坐标

在sky-server模块pom.xml中已定义

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-websocket</artifactId>
</dependency>
```



3). 定义WebSocket服务端组件(资料中已提供)

直接导入到sky-server模块即可

```java
package com.sky.websocket;

import org.springframework.stereotype.Component;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

/**
 * WebSocket服务
 */
@Component
@ServerEndpoint("/ws/{sid}")
public class WebSocketServer {

    //存放会话对象
    private static Map<String, Session> sessionMap = new HashMap();

    /**
     * 连接建立成功调用的方法
     */
    @OnOpen
    public void onOpen(Session session, @PathParam("sid") String sid) {
        System.out.println("客户端：" + sid + "建立连接");
        sessionMap.put(sid, session);
    }

    /**
     * 收到客户端消息后调用的方法
     *
     * @param message 客户端发送过来的消息
     */
    @OnMessage
    public void onMessage(String message, @PathParam("sid") String sid) {
        System.out.println("收到来自客户端：" + sid + "的信息:" + message);
    }

    /**
     * 连接关闭调用的方法
     *
     * @param sid
     */
    @OnClose
    public void onClose(@PathParam("sid") String sid) {
        System.out.println("连接断开:" + sid);
        sessionMap.remove(sid);
    }

    /**
     * 群发
     *
     * @param message
     */
    public void sendToAllClient(String message) {
        Collection<Session> sessions = sessionMap.values();
        for (Session session : sessions) {
            try {
                //服务器向客户端发送消息
                session.getBasicRemote().sendText(message);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

}
```



4). 定义配置类，注册WebSocket的服务端组件(从资料中直接导入即可)

```java
package com.sky.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

/**
 * WebSocket配置类，用于注册WebSocket的Bean
 */
@Configuration
public class WebSocketConfiguration {

    @Bean
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }

}
```



5). 定义定时任务类，定时向客户端推送数据(从资料中直接导入即可)

```java
package com.sky.task;

import com.sky.websocket.WebSocketServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Component
public class WebSocketTask {
    @Autowired
    private WebSocketServer webSocketServer;

    /**
     * 通过WebSocket每隔5秒向客户端发送消息
     */
    @Scheduled(cron = "0/5 * * * * ?")
    public void sendMessageToClient() {
        webSocketServer.sendToAllClient("这是来自服务端的消息：" + DateTimeFormatter.ofPattern("HH:mm:ss").format(LocalDateTime.now()));
    }
}
```



#### 3.2.3 功能测试

启动服务，打开websocket.html页面

**浏览器向服务器发送数据：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222192759049.png" alt="image-20221222192759049" style="zoom:50%;" /> 



**服务器向浏览器间隔5秒推送数据：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222192926954.png" alt="image-20221222192926954" style="zoom:50%;" /> 



## 4. 来单提醒

### 4.1 需求分析和设计

用户下单并且支付成功后，需要第一时间通知外卖商家。通知的形式有如下两种：

- 语音播报  <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222194413901.png" alt="image-20221222194413901" style="zoom:50%;" />
- 弹出提示框

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222194450142.png" alt="image-20221222194450142" style="zoom:50%;" /> 



**设计思路：**

- 通过WebSocket实现管理端页面和服务端保持长连接状态
- 当客户支付后，调用WebSocket的相关API实现服务端向客户端推送消息
- 客户端浏览器解析服务端推送的消息，判断是来单提醒还是客户催单，进行相应的消息提示和语音播报
- 约定服务端发送给客户端浏览器的数据格式为JSON，字段包括：type，orderId，content
  - type 为消息类型，1为来单提醒 2为客户催单
  - orderId 为订单id
  - content 为消息内容



### 4.2 代码开发

**在OrderServiceImpl中注入WebSocketServer对象，修改paySuccess方法，加入如下代码：**

```java
	@Autowired
    private WebSocketServer webSocketServer;
	/**
     * 支付成功，修改订单状态
     *
     * @param outTradeNo
     */
    public void paySuccess(String outTradeNo) {
        // 当前登录用户id
        Long userId = BaseContext.getCurrentId();

        // 根据订单号查询当前用户的订单
        Orders ordersDB = orderMapper.getByNumberAndUserId(outTradeNo, userId);

        // 根据订单id更新订单的状态、支付方式、支付状态、结账时间
        Orders orders = Orders.builder()
                .id(ordersDB.getId())
                .status(Orders.TO_BE_CONFIRMED)
                .payStatus(Orders.PAID)
                .checkoutTime(LocalDateTime.now())
                .build();

        orderMapper.update(orders);
		//////////////////////////////////////////////
        Map map = new HashMap();
        map.put("type", 1);//消息类型，1表示来单提醒
        map.put("orderId", orders.getId());
        map.put("content", "订单号：" + outTradeNo);

        //通过WebSocket实现来单提醒，向客户端浏览器推送消息
        webSocketServer.sendToAllClient(JSON.toJSONString(map));
        ///////////////////////////////////////////////////
    }
```



### 4.3 功能测试

可以通过如下方式进行测试：

- 查看浏览器调试工具数据交互过程
- 前后端联调

**1). 登录管理端后台**

登录成功后，浏览器与服务器建立长连接

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222200842731.png" alt="image-20221222200842731" style="zoom:50%;" /> 

查看控制台日志

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222200941497.png" alt="image-20221222200941497" style="zoom:50%;" /> 



**2). 小程序端下单支付**

修改回调地址，利用内网穿透获取域名

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222201350616.png" alt="image-20221222201350616" style="zoom:50%;" /> 



下单支付

 <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222201826173.png" alt="image-20221222201826173" style="zoom:50%;" /> 



**3). 查看来单提醒**

支付成功后，后台收到来单提醒，并有语音播报

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222202310953.png" alt="image-20221222202310953" style="zoom:50%;" /> 



### 4.4 代码提交



## 5. 客户催单

### 5.1 需求分析和设计

用户在小程序中点击催单按钮后，需要第一时间通知外卖商家。通知的形式有如下两种：

- 语音播报 <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222203301218.png" alt="image-20221222203301218" style="zoom:50%;" />
- 弹出提示框

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222203345829.png" alt="image-20221222203345829" style="zoom:50%;" /> 



**设计思路：**

- 通过WebSocket实现管理端页面和服务端保持长连接状态
- 当用户点击催单按钮后，调用WebSocket的相关API实现服务端向客户端推送消息
- 客户端浏览器解析服务端推送的消息，判断是来单提醒还是客户催单，进行相应的消息提示和语音播报
  约定服务端发送给客户端浏览器的数据格式为JSON，字段包括：type，orderId，content
  - type 为消息类型，1为来单提醒 2为客户催单
  - orderId 为订单id
  - content 为消息内容



当用户点击催单按钮时，向服务端发送请求。

**接口设计(催单)：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222204434174.png" alt="image-20221222204434174" style="zoom:50%;" />



### 5.2 代码开发

#### 5.2.1 Controller层

**根据用户催单的接口定义，在user/OrderController中创建催单方法：**

```java
	/**
     * 用户催单
     *
     * @param id
     * @return
     */
    @GetMapping("/reminder/{id}")
    @ApiOperation("用户催单")
    public Result reminder(@PathVariable("id") Long id) {
        orderService.reminder(id);
        return Result.success();
    }
```



#### 5.2.2 Service层接口

**在OrderService接口中声明reminder方法：**

```java
	/**
     * 用户催单
     * @param id
     */
    void reminder(Long id);
```



#### 5.2.3 Service层实现类

**在OrderServiceImpl中实现reminder方法：**

```java
	/**
     * 用户催单
     *
     * @param id
     */
    public void reminder(Long id) {
        // 查询订单是否存在
        Orders orders = orderMapper.getById(id);
        if (orders == null) {
            throw new OrderBusinessException(MessageConstant.ORDER_NOT_FOUND);
        }

        //基于WebSocket实现催单
        Map map = new HashMap();
        map.put("type", 2);//2代表用户催单
        map.put("orderId", id);
        map.put("content", "订单号：" + orders.getNumber());
        webSocketServer.sendToAllClient(JSON.toJSONString(map));
    }
```



5.2.4 Mapper层

**在OrderMapper中添加getById：**

```java
	/**
     * 根据id查询订单
     * @param id
     */
    @Select("select * from orders where id=#{id}")
    Orders getById(Long id);
```



### 5.3 功能测试

可以通过如下方式进行测试：

- 查看浏览器调试工具数据交互过程
- 前后端联调

**1). 登录管理端后台**

登录成功后，浏览器与服务器建立长连接

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222200842731.png" alt="image-20221222200842731" style="zoom:50%;" /> 

查看控制台日志

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222200941497.png" alt="image-20221222200941497" style="zoom:50%;" /> 



**2). 用户进行催单**

用户可在订单列表或者订单详情，进行催单

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222210932942.png" alt="image-20221222210932942" style="zoom:50%;" /> 



**3). 查看催单提醒**

既有催单弹窗，同时语音播报

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20221222211238000.png" alt="image-20221222211238000" style="zoom:50%;" /> 



### 5.4 代码提交

# 苍穹外卖-day11

## 课程内容

- Apache ECharts
- 营业额统计
- 用户统计
- 订单统计
- 销量排名Top10



功能实现：**数据统计**

**数据统计效果图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230101152725417.png" alt="image-20230101152725417" style="zoom:80%;" /> 



## 1. Apache ECharts

### 1.1 介绍

Apache ECharts 是一款基于 Javascript 的数据可视化图表库，提供直观，生动，可交互，可个性化定制的数据可视化图表。
官网地址：https://echarts.apache.org/zh/index.html

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230101153041348.png" alt="image-20230101153041348" style="zoom:50%;" /> 



**常见效果展示：**

1). 柱形图

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230101153748714.png" alt="image-20230101153748714" style="zoom:50%;" /> 



2). 饼形图

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230101153230868.png" alt="image-20230101153230868" style="zoom:50%;" /> 



3). 折线图

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230101153824086.png" alt="image-20230101153824086" style="zoom:50%;" /> 



**总结：**不管是哪种形式的图形，最本质的东西实际上是数据，它其实是对数据的一种可视化展示。



### 1.2 入门案例

Apache Echarts官方提供的快速入门：https://echarts.apache.org/handbook/zh/get-started/

**效果展示：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230101155524477.png" alt="image-20230101155524477" style="zoom:50%;" /> 



**实现步骤：**

1). 引入echarts.js 文件(当天资料已提供)

2). 为 ECharts 准备一个设置宽高的 DOM

3). 初始化echarts实例

4). 指定图表的配置项和数据

5). 使用指定的配置项和数据显示图表



**代码开发：**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>ECharts</title>
    <!-- 引入刚刚下载的 ECharts 文件 -->
    <script src="echarts.js"></script>
  </head>
  <body>
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/javascript">
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    </script>
  </body>
</html>
```



**测试：**(当天资料中已提供)

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230101160244104.png" alt="image-20230101160244104" style="zoom:50%;" /> 

使用浏览器方式打开即可。



**总结：**使用Echarts，重点在于研究当前图表所需的数据格式。通常是需要后端提供符合格式要求的动态数据，然后响应给前端来展示图表。



## 2. 营业额统计

### 2.1 需求分析和设计

#### 2.1.1 产品原型

营业额统计是基于折现图来展现，并且按照天来展示的。实际上，就是某一个时间范围之内的每一天的营业额。同时，不管光标放在哪个点上，那么它就会把具体的数值展示出来。并且还需要注意日期并不是固定写死的，是由上边时间选择器来决定。比如选择是近7天、或者是近30日，或者是本周，就会把相应这个时间段之内的每一天日期通过横坐标展示。

**原型图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230101160747433.png" alt="image-20230101160747433" style="zoom:50%;" /> 



**业务规则：**

- 营业额指订单状态为已完成的订单金额合计
- 基于可视化报表的折线图展示营业额数据，X轴为日期，Y轴为营业额
- 根据时间选择区间，展示每天的营业额数据



#### 2.1.2 接口设计

通过上述原型图，设计出对应的接口。



<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230101160801758.png" alt="image-20230101160801758" style="zoom:50%;" /> 



**注意：**具体返回数据一般由前端来决定，前端展示图表，具体折现图对应数据是什么格式，是有固定的要求的。
所以说，后端需要去适应前端，它需要什么格式的数据，我们就给它返回什么格式的数据。



### 2.2 代码开发

#### 2.2.1 VO设计

**根据接口定义设计对应的VO：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230101164058056.png" alt="image-20230101164058056" style="zoom:50%;" /> 

在sky-pojo模块，TurnoverReportVO.java已定义

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
public class TurnoverReportVO implements Serializable {

    //日期，以逗号分隔，例如：2022-10-01,2022-10-02,2022-10-03
    private String dateList;

    //营业额，以逗号分隔，例如：406.0,1520.0,75.0
    private String turnoverList;

}
```



#### 2.2.2 Controller层

**根据接口定义创建ReportController：**

```java
package com.sky.controller.admin;

import com.sky.result.Result;
import com.sky.service.ReportService;
import com.sky.vo.TurnoverReportVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.time.LocalDate;

/**
 * 报表
 */
@RestController
@RequestMapping("/admin/report")
@Slf4j
@Api(tags = "统计报表相关接口")
public class ReportController {

    @Autowired
    private ReportService reportService;

    /**
     * 营业额数据统计
     *
     * @param begin
     * @param end
     * @return
     */
    @GetMapping("/turnoverStatistics")
    @ApiOperation("营业额数据统计")
    public Result<TurnoverReportVO> turnoverStatistics(
            @DateTimeFormat(pattern = "yyyy-MM-dd")
                    LocalDate begin,
            @DateTimeFormat(pattern = "yyyy-MM-dd")
                    LocalDate end) {
        return Result.success(reportService.getTurnover(begin, end));
    }

}
```



#### 2.2.3 Service层接口

**创建ReportService接口，声明getTurnover方法：**

```java
package com.sky.service;

import com.sky.vo.TurnoverReportVO;
import java.time.LocalDate;

public interface ReportService {

    /**
     * 根据时间区间统计营业额
     * @param beginTime
     * @param endTime
     * @return
     */
    TurnoverReportVO getTurnover(LocalDate beginTime, LocalDate endTime);
}
```



#### 2.2.4 Service层实现类

**创建ReportServiceImpl实现类，实现getTurnover方法:**

```java
package com.sky.service.impl;

import com.sky.entity.Orders;
import com.sky.mapper.OrderMapper;
import com.sky.service.ReportService;
import com.sky.vo.TurnoverReportVO;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class ReportServiceImpl implements ReportService {

    @Autowired
    private OrderMapper orderMapper;

    /**
     * 根据时间区间统计营业额
     * @param begin
     * @param end
     * @return
     */
    public TurnoverReportVO getTurnover(LocalDate begin, LocalDate end) {
        List<LocalDate> dateList = new ArrayList<>();
        dateList.add(begin);

        while (!begin.equals(end)){
            begin = begin.plusDays(1);//日期计算，获得指定日期后1天的日期
            dateList.add(begin);
        }
        
       List<Double> turnoverList = new ArrayList<>();
        for (LocalDate date : dateList) {
            LocalDateTime beginTime = LocalDateTime.of(date, LocalTime.MIN);
            LocalDateTime endTime = LocalDateTime.of(date, LocalTime.MAX);
            Map map = new HashMap();
        	map.put("status", Orders.COMPLETED);
        	map.put("begin",beginTime);
        	map.put("end", endTime);
            Double turnover = orderMapper.sumByMap(map); 
            turnover = turnover == null ? 0.0 : turnover;
            turnoverList.add(turnover);
        }

        //数据封装
        return TurnoverReportVO.builder()
                .dateList(StringUtils.join(dateList,","))
                .turnoverList(StringUtils.join(turnoverList,","))
                .build();
    }
}
```



#### 2.2.5 Mapper层

**在OrderMapper接口声明sumByMap方法：**

```java
	/**
     * 根据动态条件统计营业额
     * @param map
     */
    Double sumByMap(Map map);
```

**在OrderMapper.xml文件中编写动态SQL：**

```xml
<select id="sumByMap" resultType="java.lang.Double">
        select sum(amount) from orders
        <where>
            <if test="status != null">
                and status = #{status}
            </if>
            <if test="begin != null">
                and order_time &gt;= #{begin}
            </if>
            <if test="end != null">
                and order_time &lt;= #{end}
            </if>
        </where>
</select>
```



### 2.3 功能测试

可以通过如下方式进行测试：

- 接口文档测试
- 前后端联调测试

启动服务器，启动nginx，直接采用前后端联调测试。

进入数据统计模块

**1). 查看近7日营业额统计**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230101172807757.png" alt="image-20230101172807757" style="zoom:50%;" /> 

进入开发者模式，查看返回数据

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230101173031357.png" alt="image-20230101173031357" style="zoom:80%;" /> 



**2). 查看近30日营业额统计**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230101173201667.png" alt="image-20230101173201667" style="zoom:50%;" /> 

进入开发者模式，查看返回数据

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230101173304127.png" alt="image-20230101173304127" style="zoom:80%;" /> 

也可通过断点方式启动，查看每步执行情况。



### 2.4 代码提交





## 3. 用户统计

### 3.1 需求分析和设计

#### 3.1.1 产品原型

所谓用户统计，实际上统计的是用户的数量。通过折线图来展示，上面这根蓝色线代表的是用户总量，下边这根绿色线代表的是新增用户数量，是具体到每一天。所以说用户统计主要统计**两个数据**，一个是**总的用户数量**，另外一个是**新增用户数量**。

**原型图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230102213727736.png" alt="image-20230102213727736" style="zoom:50%;" /> 

**业务规则：**

- 基于可视化报表的折线图展示用户数据，X轴为日期，Y轴为用户数
- 根据时间选择区间，展示每天的用户总量和新增用户量数据



#### 3.1.2 接口设计

根据上述原型图设计接口。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230102213809414.png" alt="image-20230102213809414" style="zoom:50%;" /> 



### 3.2 代码开发

#### 3.2.1 VO设计

**根据用户统计接口的返回结果设计VO：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230102211004237.png" alt="image-20230102211004237" style="zoom:50%;" /> 

在sky-pojo模块，UserReportVO.java已定义

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
public class UserReportVO implements Serializable {

    //日期，以逗号分隔，例如：2022-10-01,2022-10-02,2022-10-03
    private String dateList;

    //用户总量，以逗号分隔，例如：200,210,220
    private String totalUserList;

    //新增用户，以逗号分隔，例如：20,21,10
    private String newUserList;

}
```



#### 3.2.2 Controller层

**根据接口定义，在ReportController中创建userStatistics方法：**

```java
/**
     * 用户数据统计
     * @param begin
     * @param end
     * @return
     */
    @GetMapping("/userStatistics")
    @ApiOperation("用户数据统计")
    public Result<UserReportVO> userStatistics(
            @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate begin,
            @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate end){

        return Result.success(reportService.getUserStatistics(begin,end));            
}
```



#### 3.2.3 Service层接口

**在ReportService接口中声明getUserStatistics方法：**

```java
	/**
     * 根据时间区间统计用户数量
     * @param begin
     * @param end
     * @return
     */
    UserReportVO getUserStatistics(LocalDate begin, LocalDate end);
```



#### 3.2.4 Service层实现类

**在ReportServiceImpl实现类中实现getUserStatistics方法：**

```java
	@Override
    public UserReportVO getUserStatistics(LocalDate begin, LocalDate end) {
        List<LocalDate> dateList = new ArrayList<>();
        dateList.add(begin);

        while (!begin.equals(end)){
            begin = begin.plusDays(1);
            dateList.add(begin);
        }
        List<Integer> newUserList = new ArrayList<>(); //新增用户数
        List<Integer> totalUserList = new ArrayList<>(); //总用户数

        for (LocalDate date : dateList) {
            LocalDateTime beginTime = LocalDateTime.of(date, LocalTime.MIN);
            LocalDateTime endTime = LocalDateTime.of(date, LocalTime.MAX);
            //新增用户数量 select count(id) from user where create_time > ? and create_time < ?
            Integer newUser = getUserCount(beginTime, endTime);
            //总用户数量 select count(id) from user where  create_time < ?
            Integer totalUser = getUserCount(null, endTime);

            newUserList.add(newUser);
            totalUserList.add(totalUser);
        }

        return UserReportVO.builder()
                .dateList(StringUtils.join(dateList,","))
                .newUserList(StringUtils.join(newUserList,","))
                .totalUserList(StringUtils.join(totalUserList,","))
                .build();
    }
```

**在ReportServiceImpl实现类中创建私有方法getUserCount：**

```java
	/**
     * 根据时间区间统计用户数量
     * @param beginTime
     * @param endTime
     * @return
     */
    private Integer getUserCount(LocalDateTime beginTime, LocalDateTime endTime) {
        Map map = new HashMap();
        map.put("begin",beginTime);
        map.put("end", endTime);
        return userMapper.countByMap(map);
    }
```



#### 3.2.5 Mapper层

**在UserMapper接口中声明countByMap方法：**

```java
	/**
     * 根据动态条件统计用户数量
     * @param map
     * @return
     */
    Integer countByMap(Map map);
```

**在UserMapper.xml文件中编写动态SQL：**

```java
<select id="countByMap" resultType="java.lang.Integer">
        select count(id) from user
        <where>
            <if test="begin != null">
                and create_time &gt;= #{begin}
            </if>
            <if test="end != null">
                and create_time &lt;= #{end}
            </if>
        </where>
</select>
```



### 3.3 功能测试

可以通过如下方式进行测试：

- 接口文档测试
- 前后端联调测试

进入数据统计模块

**1). 查看近7日用户统计**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107191339668.png" alt="image-20230107191339668" style="zoom:50%;" /> 

进入开发者模式，查看返回数据

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107191532175.png" alt="image-20230107191532175" style="zoom:50%;" /> 



**2). 查看近30日用户统计**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107191613369.png" alt="image-20230107191613369" style="zoom:50%;" /> 

进入开发者模式，查看返回数据

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107191707568.png" alt="image-20230107191707568" style="zoom:50%;" /> 

也可通过断点方式启动，查看每步执行情况。



### 3.4 代码提交





## 4. 订单统计

### 4.1 需求分析和设计

#### 4.1.1 产品原型

订单统计通过一个折现图来展现，折线图上有两根线，这根蓝色的线代表的是订单总数，而下边这根绿色的线代表的是有效订单数，指的就是状态是已完成的订单就属于有效订单，分别反映的是每一天的数据。上面还有3个数字，分别是订单总数、有效订单、订单完成率，它指的是整个时间区间之内总的数据。

**原型图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107192859270.png" alt="image-20230107192859270" style="zoom:50%;" /> 

**业务规则：**

- 有效订单指状态为 “已完成” 的订单
- 基于可视化报表的折线图展示订单数据，X轴为日期，Y轴为订单数量
- 根据时间选择区间，展示每天的订单总数和有效订单数
- 展示所选时间区间内的有效订单数、总订单数、订单完成率，订单完成率 = 有效订单数 / 总订单数 * 100%



#### 4.1.2 接口设计

根据上述原型图设计接口。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107192942872.png" alt="image-20230107192942872" style="zoom:50%;" /> 



### 4.2 代码开发

#### 4.2.1 VO设计

**根据订单统计接口的返回结果设计VO：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107195325915.png" alt="image-20230107195325915" style="zoom:50%;" /> 

在sky-pojo模块，OrderReportVO.java已定义

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
public class OrderReportVO implements Serializable {

    //日期，以逗号分隔，例如：2022-10-01,2022-10-02,2022-10-03
    private String dateList;

    //每日订单数，以逗号分隔，例如：260,210,215
    private String orderCountList;

    //每日有效订单数，以逗号分隔，例如：20,21,10
    private String validOrderCountList;

    //订单总数
    private Integer totalOrderCount;

    //有效订单数
    private Integer validOrderCount;

    //订单完成率
    private Double orderCompletionRate;

}
```



#### 4.2.2 Controller层

**在ReportController中根据订单统计接口创建orderStatistics方法：**

```java
/**
     * 订单数据统计
     * @param begin
     * @param end
     * @return
     */
    @GetMapping("/ordersStatistics")
    @ApiOperation("用户数据统计")
    public Result<OrderReportVO> orderStatistics(
            @DateTimeFormat(pattern = "yyyy-MM-dd")
                    LocalDate begin,
            @DateTimeFormat(pattern = "yyyy-MM-dd")
                    LocalDate end){

        return Result.success(reportService.getOrderStatistics(begin,end));
    }
```



#### 4.2.3 Service层接口

**在ReportService接口中声明getOrderStatistics方法：**

```java
/**
* 根据时间区间统计订单数量
* @param begin 
* @param end
* @return 
*/
OrderReportVO getOrderStatistics(LocalDate begin, LocalDate end);
```



#### 4.2.4 Service层实现类

**在ReportServiceImpl实现类中实现getOrderStatistics方法：**

```java
/**
* 根据时间区间统计订单数量
* @param begin 
* @param end
* @return 
*/
public OrderReportVO getOrderStatistics(LocalDate begin, LocalDate end){
	List<LocalDate> dateList = new ArrayList<>();
    dateList.add(begin);

    while (!begin.equals(end)){
          begin = begin.plusDays(1);
          dateList.add(begin);
     }
    //每天订单总数集合
     List<Integer> orderCountList = new ArrayList<>();
    //每天有效订单数集合
    List<Integer> validOrderCountList = new ArrayList<>();
    for (LocalDate date : dateList) {
         LocalDateTime beginTime = LocalDateTime.of(date, LocalTime.MIN);
         LocalDateTime endTime = LocalDateTime.of(date, LocalTime.MAX);
   //查询每天的总订单数 select count(id) from orders where order_time > ? and order_time < ?
         Integer orderCount = getOrderCount(beginTime, endTime, null);

  //查询每天的有效订单数 select count(id) from orders where order_time > ? and order_time < ? and status = ?
         Integer validOrderCount = getOrderCount(beginTime, endTime, Orders.COMPLETED);

         orderCountList.add(orderCount);
         validOrderCountList.add(validOrderCount);
        }

    //时间区间内的总订单数
    Integer totalOrderCount = orderCountList.stream().reduce(Integer::sum).get();
    //时间区间内的总有效订单数
    Integer validOrderCount = validOrderCountList.stream().reduce(Integer::sum).get();
    //订单完成率
    Double orderCompletionRate = 0.0;
    if(totalOrderCount != 0){
         orderCompletionRate = validOrderCount.doubleValue() / totalOrderCount;
     }
    return OrderReportVO.builder()
                .dateList(StringUtils.join(dateList, ","))
                .orderCountList(StringUtils.join(orderCountList, ","))
                .validOrderCountList(StringUtils.join(validOrderCountList, ","))
                .totalOrderCount(totalOrderCount)
                .validOrderCount(validOrderCount)
                .orderCompletionRate(orderCompletionRate)
                .build();
    
}
```

**在ReportServiceImpl实现类中提供私有方法getOrderCount：**

```java
/**
* 根据时间区间统计指定状态的订单数量
* @param beginTime
* @param endTime
* @param status
* @return
*/
private Integer getOrderCount(LocalDateTime beginTime, LocalDateTime endTime, Integer status) {
	Map map = new HashMap();
	map.put("status", status);
	map.put("begin",beginTime);
	map.put("end", endTime);
	return orderMapper.countByMap(map);
}
```



#### 4.2.5 Mapper层

**在OrderMapper接口中声明countByMap方法：**

```java
/**
*根据动态条件统计订单数量
* @param map
*/
Integer countByMap(Map map);
```

**在OrderMapper.xml文件中编写动态SQL：**

```java
<select id="countByMap" resultType="java.lang.Integer">
        select count(id) from orders
        <where>
            <if test="status != null">
                and status = #{status}
            </if>
            <if test="begin != null">
                and order_time &gt;= #{begin}
            </if>
            <if test="end != null">
                and order_time &lt;= #{end}
            </if>
        </where>
</select>
```



### 4.3 功能测试

可以通过如下方式进行测试：

- 接口文档测试
- 前后端联调

重启服务，直接采用前后端联调测试。

进入数据统计模块

**1). 查看近7日订单统计**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107202854533.png" alt="image-20230107202854533" style="zoom:50%;" /> 

进入开发者模式，查看返回数据

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107202953128.png" alt="image-20230107202953128" style="zoom:50%;" /> 



**2). 查看近30日订单统计**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107203025165.png" alt="image-20230107203025165" style="zoom:50%;" /> 

进入开发者模式，查看返回数据

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107203127308.png" alt="image-20230107203127308" style="zoom:50%;" /> 

也可通过断点方式启动，查看每步执行情况。



### 4.4 代码提交



## 5. 销量排名Top10

### 5.1 需求分析和设计

#### 5.1.1 产品原型

所谓销量排名，销量指的是商品销售的数量。项目当中的商品主要包含两类：一个是**套餐**，一个是**菜品**，所以销量排名其实指的就是菜品和套餐销售的数量排名。通过柱形图来展示销量排名，这些销量是按照降序来排列，并且只需要统计销量排名前十的商品。

**原型图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107203622747.png" alt="image-20230107203622747" style="zoom:50%;" /> 

**业务规则：**

- 根据时间选择区间，展示销量前10的商品（包括菜品和套餐）
- 基于可视化报表的柱状图降序展示商品销量
- 此处的销量为商品销售的份数



#### 5.1.2 接口设计

根据上述原型图设计接口。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107203730681.png" alt="image-20230107203730681" style="zoom:50%;" /> 



### 5.2 代码开发

#### 5.2.1 VO设计

**根据销量排名接口的返回结果设计VO：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107204028895.png" alt="image-20230107204028895" style="zoom:50%;" /> 

在sky-pojo模块，SalesTop10ReportVO.java已定义

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
public class SalesTop10ReportVO implements Serializable {

    //商品名称列表，以逗号分隔，例如：鱼香肉丝,宫保鸡丁,水煮鱼
    private String nameList;

    //销量列表，以逗号分隔，例如：260,215,200
    private String numberList;

}
```



#### 5.2.2 Controller层

**在ReportController中根据销量排名接口创建top10方法：**

```java
/**
* 销量排名统计
* @param begin
* @param end
* @return
*/
@GetMapping("/top10")
@ApiOperation("销量排名统计")
public Result<SalesTop10ReportVO> top10(
    @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate begin,
    @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate end){
	return Result.success(reportService.getSalesTop10(begin,end));
}
```



#### 5.2.3 Service层接口

**在ReportService接口中声明getSalesTop10方法：**

```java
/**
* 查询指定时间区间内的销量排名top10 
* @param begin
* @param end
* @return
*/
SalesTop10ReportVO getSalesTop10(LocalDate begin, LocalDate end);
```



#### 5.2.4 Service层实现类

**在ReportServiceImpl实现类中实现getSalesTop10方法：**

```java
/**
     * 查询指定时间区间内的销量排名top10
     * @param begin
     * @param end
     * @return
     * */
    public SalesTop10ReportVO getSalesTop10(LocalDate begin, LocalDate end){
        LocalDateTime beginTime = LocalDateTime.of(begin, LocalTime.MIN);
        LocalDateTime endTime = LocalDateTime.of(end, LocalTime.MAX);
        List<GoodsSalesDTO> goodsSalesDTOList = orderMapper.getSalesTop10(beginTime, endTime);

        String nameList = StringUtils.join(goodsSalesDTOList.stream().map(GoodsSalesDTO::getName).collect(Collectors.toList()),",");
        String numberList = StringUtils.join(goodsSalesDTOList.stream().map(GoodsSalesDTO::getNumber).collect(Collectors.toList()),",");

        return SalesTop10ReportVO.builder()
                .nameList(nameList)
                .numberList(numberList)
                .build();
    }
```



#### 5.2.5 Mapper层

**在OrderMapper接口中声明getSalesTop10方法：**

```java
/**
* 查询商品销量排名
* @param begin
* @param end
*/
List<GoodsSalesDTO> getSalesTop10(LocalDateTime begin, LocalDateTime end);
```

**在OrderMapper.xml文件中编写动态SQL：**

```xml
<select id="getSalesTop10" resultType="com.sky.dto.GoodsSalesDTO">
        select od.name name,sum(od.number) number from order_detail od ,orders o
        where od.order_id = o.id
            and o.status = 5
            <if test="begin != null">
                and order_time &gt;= #{begin}
            </if>
            <if test="end != null">
                and order_time &lt;= #{end}
            </if>
        group by name
        order by number desc
        limit 0, 10
</select>
```



### 5.3 功能测试

可以通过如下方式进行测试：

- 接口文档测试
- 前后端联调

重启服务，直接采用前后端联调测试。

**查看近30日销量排名Top10统计**

若查询的某一段时间没有销量数据，则显示不出效果。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107210518821.png" alt="image-20230107210518821" style="zoom:50%;" /> 

进入开发者模式，查看返回数据

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230107210711326.png" alt="image-20230107210711326" style="zoom:50%;" /> 

也可通过断点方式启动，查看每步执行情况。



### 5.4 代码提交

# 苍穹外卖-day12

## 课程内容

- 工作台
- Apache POI
- 导出运营数据Excel报表



功能实现：**工作台**、**数据导出**

**工作台效果图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230130190031553.png" alt="image-20230130190031553" style="zoom: 50%;" />  



**数据导出效果图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230130190124725.png" alt="image-20230130190124725" style="zoom: 50%;" />   

在数据统计页面点击**数据导出**：生成Excel报表

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230130190243865.png" alt="image-20230130190243865" style="zoom: 50%;" />    



## 1. 工作台

### 1.1 需求分析和设计

#### 1.1.1 产品原型

工作台是系统运营的数据看板，并提供快捷操作入口，可以有效提高商家的工作效率。

**工作台展示的数据：**

- 今日数据
- 订单管理
- 菜品总览
- 套餐总览
- 订单信息



**原型图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230130191051003.png" alt="image-20230130191051003" style="zoom:50%;" /> 



**名词解释：**

- 营业额：已完成订单的总金额
- 有效订单：已完成订单的数量
- 订单完成率：有效订单数 / 总订单数 * 100%
- 平均客单价：营业额 / 有效订单数
- 新增用户：新增用户的数量



#### 1.1.2 接口设计

通过上述原型图分析，共包含6个接口。

**接口设计：**

- 今日数据接口
- 订单管理接口
- 菜品总览接口
- 套餐总览接口
- 订单搜索（已完成）
- 各个状态的订单数量统计（已完成）



**1). 今日数据的接口设计**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230130191837090.png" alt="image-20230130191837090" style="zoom:50%;" />

**2). 订单管理的接口设计**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230130192105373.png" alt="image-20230130192105373" style="zoom:50%;" /> 



**3). 菜品总览的接口设计**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230130192225168.png" alt="image-20230130192225168" style="zoom:50%;" /> 



**4). 套餐总览的接口设计**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230130195425389.png" alt="image-20230130195425389" style="zoom:50%;" /> 



### 1.2 代码导入

直接导入课程资料中的工作台模块功能代码即可：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230130195535421.png" alt="image-20230130195535421" style="zoom:50%;" /> 

#### 1.2.1 Controller层

**添加WorkSpaceController.java**

```java
package com.sky.controller.admin;

import com.sky.result.Result;
import com.sky.service.WorkspaceService;
import com.sky.vo.BusinessDataVO;
import com.sky.vo.DishOverViewVO;
import com.sky.vo.OrderOverViewVO;
import com.sky.vo.SetmealOverViewVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.time.LocalDateTime;
import java.time.LocalTime;

/**
 * 工作台
 */
@RestController
@RequestMapping("/admin/workspace")
@Slf4j
@Api(tags = "工作台相关接口")
public class WorkSpaceController {

    @Autowired
    private WorkspaceService workspaceService;

    /**
     * 工作台今日数据查询
     * @return
     */
    @GetMapping("/businessData")
    @ApiOperation("工作台今日数据查询")
    public Result<BusinessDataVO> businessData(){
        //获得当天的开始时间
        LocalDateTime begin = LocalDateTime.now().with(LocalTime.MIN);
        //获得当天的结束时间
        LocalDateTime end = LocalDateTime.now().with(LocalTime.MAX);

        BusinessDataVO businessDataVO = workspaceService.getBusinessData(begin, end);
        return Result.success(businessDataVO);
    }

    /**
     * 查询订单管理数据
     * @return
     */
    @GetMapping("/overviewOrders")
    @ApiOperation("查询订单管理数据")
    public Result<OrderOverViewVO> orderOverView(){
        return Result.success(workspaceService.getOrderOverView());
    }

    /**
     * 查询菜品总览
     * @return
     */
    @GetMapping("/overviewDishes")
    @ApiOperation("查询菜品总览")
    public Result<DishOverViewVO> dishOverView(){
        return Result.success(workspaceService.getDishOverView());
    }

    /**
     * 查询套餐总览
     * @return
     */
    @GetMapping("/overviewSetmeals")
    @ApiOperation("查询套餐总览")
    public Result<SetmealOverViewVO> setmealOverView(){
        return Result.success(workspaceService.getSetmealOverView());
    }
}
```



#### 1.2.2 Service层接口

**添加WorkspaceService.java**

```java
package com.sky.service;

import com.sky.vo.BusinessDataVO;
import com.sky.vo.DishOverViewVO;
import com.sky.vo.OrderOverViewVO;
import com.sky.vo.SetmealOverViewVO;
import java.time.LocalDateTime;

public interface WorkspaceService {

    /**
     * 根据时间段统计营业数据
     * @param begin
     * @param end
     * @return
     */
    BusinessDataVO getBusinessData(LocalDateTime begin, LocalDateTime end);

    /**
     * 查询订单管理数据
     * @return
     */
    OrderOverViewVO getOrderOverView();

    /**
     * 查询菜品总览
     * @return
     */
    DishOverViewVO getDishOverView();

    /**
     * 查询套餐总览
     * @return
     */
    SetmealOverViewVO getSetmealOverView();

}
```



#### 1.2.3 Service层实现类

**添加WorkspaceServiceImpl.java**

```java
package com.sky.service.impl;

import com.sky.constant.StatusConstant;
import com.sky.entity.Orders;
import com.sky.mapper.DishMapper;
import com.sky.mapper.OrderMapper;
import com.sky.mapper.SetmealMapper;
import com.sky.mapper.UserMapper;
import com.sky.service.WorkspaceService;
import com.sky.vo.BusinessDataVO;
import com.sky.vo.DishOverViewVO;
import com.sky.vo.OrderOverViewVO;
import com.sky.vo.SetmealOverViewVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.Map;

@Service
@Slf4j
public class WorkspaceServiceImpl implements WorkspaceService {

    @Autowired
    private OrderMapper orderMapper;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private DishMapper dishMapper;
    @Autowired
    private SetmealMapper setmealMapper;

    /**
     * 根据时间段统计营业数据
     * @param begin
     * @param end
     * @return
     */
    public BusinessDataVO getBusinessData(LocalDateTime begin, LocalDateTime end) {
        /**
         * 营业额：当日已完成订单的总金额
         * 有效订单：当日已完成订单的数量
         * 订单完成率：有效订单数 / 总订单数
         * 平均客单价：营业额 / 有效订单数
         * 新增用户：当日新增用户的数量
         */

        Map map = new HashMap();
        map.put("begin",begin);
        map.put("end",end);

        //查询总订单数
        Integer totalOrderCount = orderMapper.countByMap(map);

        map.put("status", Orders.COMPLETED);
        //营业额
        Double turnover = orderMapper.sumByMap(map);
        turnover = turnover == null? 0.0 : turnover;

        //有效订单数
        Integer validOrderCount = orderMapper.countByMap(map);

        Double unitPrice = 0.0;

        Double orderCompletionRate = 0.0;
        if(totalOrderCount != 0 && validOrderCount != 0){
            //订单完成率
            orderCompletionRate = validOrderCount.doubleValue() / totalOrderCount;
            //平均客单价
            unitPrice = turnover / validOrderCount;
        }

        //新增用户数
        Integer newUsers = userMapper.countByMap(map);

        return BusinessDataVO.builder()
                .turnover(turnover)
                .validOrderCount(validOrderCount)
                .orderCompletionRate(orderCompletionRate)
                .unitPrice(unitPrice)
                .newUsers(newUsers)
                .build();
    }


    /**
     * 查询订单管理数据
     *
     * @return
     */
    public OrderOverViewVO getOrderOverView() {
        Map map = new HashMap();
        map.put("begin", LocalDateTime.now().with(LocalTime.MIN));
        map.put("status", Orders.TO_BE_CONFIRMED);

        //待接单
        Integer waitingOrders = orderMapper.countByMap(map);

        //待派送
        map.put("status", Orders.CONFIRMED);
        Integer deliveredOrders = orderMapper.countByMap(map);

        //已完成
        map.put("status", Orders.COMPLETED);
        Integer completedOrders = orderMapper.countByMap(map);

        //已取消
        map.put("status", Orders.CANCELLED);
        Integer cancelledOrders = orderMapper.countByMap(map);

        //全部订单
        map.put("status", null);
        Integer allOrders = orderMapper.countByMap(map);

        return OrderOverViewVO.builder()
                .waitingOrders(waitingOrders)
                .deliveredOrders(deliveredOrders)
                .completedOrders(completedOrders)
                .cancelledOrders(cancelledOrders)
                .allOrders(allOrders)
                .build();
    }

    /**
     * 查询菜品总览
     *
     * @return
     */
    public DishOverViewVO getDishOverView() {
        Map map = new HashMap();
        map.put("status", StatusConstant.ENABLE);
        Integer sold = dishMapper.countByMap(map);

        map.put("status", StatusConstant.DISABLE);
        Integer discontinued = dishMapper.countByMap(map);

        return DishOverViewVO.builder()
                .sold(sold)
                .discontinued(discontinued)
                .build();
    }

    /**
     * 查询套餐总览
     *
     * @return
     */
    public SetmealOverViewVO getSetmealOverView() {
        Map map = new HashMap();
        map.put("status", StatusConstant.ENABLE);
        Integer sold = setmealMapper.countByMap(map);

        map.put("status", StatusConstant.DISABLE);
        Integer discontinued = setmealMapper.countByMap(map);

        return SetmealOverViewVO.builder()
                .sold(sold)
                .discontinued(discontinued)
                .build();
    }
}
```



#### 1.2.4 Mapper层

**在SetmealMapper中添加countByMap方法定义**

```java
	/**
     * 根据条件统计套餐数量
     * @param map
     * @return
     */
    Integer countByMap(Map map);
```

**在SetmealMapper.xml中添加对应SQL实现**

```xml
<select id="countByMap" resultType="java.lang.Integer">
        select count(id) from setmeal
        <where>
            <if test="status != null">
                and status = #{status}
            </if>
            <if test="categoryId != null">
                and category_id = #{categoryId}
            </if>
        </where>
</select>
```



**在DishMapper中添加countByMap方法定义**

```java
	/**
     * 根据条件统计菜品数量
     * @param map
     * @return
     */
    Integer countByMap(Map map);
```

**在DishMapper.xml中添加对应SQL实现**

```xml
<select id="countByMap" resultType="java.lang.Integer">
        select count(id) from dish
        <where>
            <if test="status != null">
                and status = #{status}
            </if>
            <if test="categoryId != null">
                and category_id = #{categoryId}
            </if>
        </where>
</select>
```



### 1.3 功能测试

可以通过如下方式进行测试：

- 通过接口文档测试
- 前后端联调测试

接下来我们使用上述两种方式分别测试。

#### 1.3.1 接口文档测试

**启动服务**，访问http://localhost:8080/doc.html，进入工作台相关接口

**注意：**使用admin用户登录重新获取token，在全局参数设置中添加，防止token失效。

**1). 今日数据查询**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131103600918.png" alt="image-20230131103600918" style="zoom:50%;" /> 



**2). 菜品总览查询**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131103714898.png" alt="image-20230131103714898" style="zoom:50%;" /> 



**3). 订单管理数据查询**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131103808342.png" alt="image-20230131103808342" style="zoom:50%;" /> 



**4). 套餐总览查询**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131103903802.png" alt="image-20230131103903802" style="zoom:50%;" /> 



#### 1.3.2 前后端联调测试

**启动nginx**,访问 http://localhost，进入工作台

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131104243713.png" alt="image-20230131104243713" style="zoom:50%;" /> 

进入开发者模式，分别查看今日数据、订单管理、菜品总览、套餐总览

**1). 今日数据查询**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131104849876.png" alt="image-20230131104849876" style="zoom:50%;" /> 



**2). 订单管理数据查询**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131104939694.png" alt="image-20230131104939694" style="zoom:50%;" /> 



**3). 菜品总览查询**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131105023109.png" alt="image-20230131105023109" style="zoom:50%;" /> 



**4). 套餐总览查询**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131105123610.png" alt="image-20230131105123610" style="zoom:50%;" /> 



### 1.4 代码提交





## 2. Apache POI

### 2.1 介绍

Apache POI 是一个处理Miscrosoft Office各种文件格式的开源项目。简单来说就是，我们可以使用 POI 在 Java 程序中对Miscrosoft Office各种文件进行读写操作。
一般情况下，POI 都是用于操作 Excel 文件。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131110631081.png" alt="image-20230131110631081" style="zoom:50%;" /> 

**Apache POI 的应用场景：**

- 银行网银系统导出交易明细

  <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131110810568.png" alt="image-20230131110810568" style="zoom:50%;" /> 

- 各种业务系统导出Excel报表

  <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131110839959.png" alt="image-20230131110839959" style="zoom:50%;" /> 

- 批量导入业务数据

  <img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131110856903.png" alt="image-20230131110856903" style="zoom:50%;" /> 



### 2.2 入门案例

Apache POI既可以将数据写入Excel文件，也可以读取Excel文件中的数据，接下来分别进行实现。

**Apache POI的maven坐标：**(项目中已导入)

```xml
<dependency>
    <groupId>org.apache.poi</groupId>
    <artifactId>poi</artifactId>
    <version>3.16</version>
</dependency>
<dependency>
    <groupId>org.apache.poi</groupId>
    <artifactId>poi-ooxml</artifactId>
    <version>3.16</version>
</dependency>
```



#### 2.2.1 将数据写入Excel文件

**1). 代码开发**

```java
package com.sky.test;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

public class POITest {

    /**
     * 基于POI向Excel文件写入数据
     * @throws Exception
     */
    public static void write() throws Exception{
        //在内存中创建一个Excel文件对象
        XSSFWorkbook excel = new XSSFWorkbook();
        //创建Sheet页
        XSSFSheet sheet = excel.createSheet("itcast");

        //在Sheet页中创建行，0表示第1行
        XSSFRow row1 = sheet.createRow(0);
        //创建单元格并在单元格中设置值，单元格编号也是从0开始，1表示第2个单元格
        row1.createCell(1).setCellValue("姓名");
        row1.createCell(2).setCellValue("城市");

        XSSFRow row2 = sheet.createRow(1);
        row2.createCell(1).setCellValue("张三");
        row2.createCell(2).setCellValue("北京");

        XSSFRow row3 = sheet.createRow(2);
        row3.createCell(1).setCellValue("李四");
        row3.createCell(2).setCellValue("上海");

        FileOutputStream out = new FileOutputStream(new File("D:\\itcast.xlsx"));
        //通过输出流将内存中的Excel文件写入到磁盘上
        excel.write(out);

        //关闭资源
        out.flush();
        out.close();
        excel.close();
    }
    public static void main(String[] args) throws Exception {
        write();
    }
}
```

**2). 实现效果**

在D盘中生成itcast.xlsx文件，创建名称为itcast的Sheet页，同时将内容成功写入。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131112905034.png" alt="image-20230131112905034" style="zoom:50%;" /> 



#### 2.2.2 读取Excel文件中的数据

**1). 代码开发**

```java
package com.sky.test;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

public class POITest {
    /**
     * 基于POI读取Excel文件
     * @throws Exception
     */
    public static void read() throws Exception{
        FileInputStream in = new FileInputStream(new File("D:\\itcast.xlsx"));
        //通过输入流读取指定的Excel文件
        XSSFWorkbook excel = new XSSFWorkbook(in);
        //获取Excel文件的第1个Sheet页
        XSSFSheet sheet = excel.getSheetAt(0);

        //获取Sheet页中的最后一行的行号
        int lastRowNum = sheet.getLastRowNum();

        for (int i = 0; i <= lastRowNum; i++) {
            //获取Sheet页中的行
            XSSFRow titleRow = sheet.getRow(i);
            //获取行的第2个单元格
            XSSFCell cell1 = titleRow.getCell(1);
            //获取单元格中的文本内容
            String cellValue1 = cell1.getStringCellValue();
            //获取行的第3个单元格
            XSSFCell cell2 = titleRow.getCell(2);
            //获取单元格中的文本内容
            String cellValue2 = cell2.getStringCellValue();

            System.out.println(cellValue1 + " " +cellValue2);
        }

        //关闭资源
        in.close();
        excel.close();
    }

    public static void main(String[] args) throws Exception {
        read();
    }
}

```



**2). 实现效果**

将itcast.xlsx文件中的数据进行读取

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131113255962.png" alt="image-20230131113255962" style="zoom:50%;" /> 



## 3. 导出运营数据Excel报表

### 3.1 需求分析和设计

#### 3.1.1 产品原型

在数据统计页面，有一个数据导出的按钮，点击该按钮时，其实就会下载一个文件。这个文件实际上是一个Excel形式的文件，文件中主要包含最近30日运营相关的数据。表格的形式已经固定，主要由概览数据和明细数据两部分组成。真正导出这个报表之后，相对应的数字就会填充在表格中，就可以进行存档。

**原型图：**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131151132672.png" alt="image-20230131151132672" style="zoom:50%;" /> 

导出的Excel报表格式：

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230130201026785.png" alt="image-20230130201026785" style="zoom: 67%;" />  



**业务规则：**

- 导出Excel形式的报表文件
- 导出最近30天的运营数据



#### 3.1.2 接口设计

通过上述原型图设计对应的接口。

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230130201109280.png" alt="image-20230130201109280" style="zoom:50%;" /> 

**注意：**

- 当前接口没有传递参数，因为导出的是最近30天的运营数据，后端计算即可，所以不需要任何参数

- 当前接口没有返回数据，因为报表导出功能本质上是文件下载，服务端会通过输出流将Excel文件下载到客户端浏览器



### 3.2 代码开发

#### 3.2.1 实现步骤

1). 设计Excel模板文件

2). 查询近30天的运营数据

3). 将查询到的运营数据写入模板文件

4). 通过输出流将Excel文件下载到客户端浏览器

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131152610559.png" alt="image-20230131152610559" style="zoom:50%;" /> 

#### 3.2.2 Controller层

**根据接口定义，在ReportController中创建export方法：**

```java
	/**
     * 导出运营数据报表
     * @param response
     */
    @GetMapping("/export")
    @ApiOperation("导出运营数据报表")
    public void export(HttpServletResponse response){
        reportService.exportBusinessData(response);
    }
```



#### 3.2.3 Service层接口

**在ReportService接口中声明导出运营数据报表的方法：**

```java
	/**
     * 导出近30天的运营数据报表
     * @param response
     **/
    void exportBusinessData(HttpServletResponse response);
```



#### 3.2.4 Service层实现类

**在ReportServiceImpl实现类中实现导出运营数据报表的方法:**

提前将资料中的**运营数据报表模板.xlsx**拷贝到项目的resources/template目录中

```java
    /**导出近30天的运营数据报表
     * @param response
     **/
    public void exportBusinessData(HttpServletResponse response) {
        LocalDate begin = LocalDate.now().minusDays(30);
        LocalDate end = LocalDate.now().minusDays(1);
        //查询概览运营数据，提供给Excel模板文件
        BusinessDataVO businessData = workspaceService.getBusinessData(LocalDateTime.of(begin,LocalTime.MIN), LocalDateTime.of(end, LocalTime.MAX));
        InputStream inputStream = this.getClass().getClassLoader().getResourceAsStream("template/运营数据报表模板.xlsx");
        try {
            //基于提供好的模板文件创建一个新的Excel表格对象
            XSSFWorkbook excel = new XSSFWorkbook(inputStream);
            //获得Excel文件中的一个Sheet页
            XSSFSheet sheet = excel.getSheet("Sheet1");

            sheet.getRow(1).getCell(1).setCellValue(begin + "至" + end);
            //获得第4行
            XSSFRow row = sheet.getRow(3);
            //获取单元格
            row.getCell(2).setCellValue(businessData.getTurnover());
            row.getCell(4).setCellValue(businessData.getOrderCompletionRate());
            row.getCell(6).setCellValue(businessData.getNewUsers());
            row = sheet.getRow(4);
            row.getCell(2).setCellValue(businessData.getValidOrderCount());
            row.getCell(4).setCellValue(businessData.getUnitPrice());
            for (int i = 0; i < 30; i++) {
                LocalDate date = begin.plusDays(i);
               //准备明细数据
                businessData = workspaceService.getBusinessData(LocalDateTime.of(date,LocalTime.MIN), LocalDateTime.of(date, LocalTime.MAX));
                row = sheet.getRow(7 + i);
                row.getCell(1).setCellValue(date.toString());
                row.getCell(2).setCellValue(businessData.getTurnover());
                row.getCell(3).setCellValue(businessData.getValidOrderCount());
                row.getCell(4).setCellValue(businessData.getOrderCompletionRate());
                row.getCell(5).setCellValue(businessData.getUnitPrice());
                row.getCell(6).setCellValue(businessData.getNewUsers());
            }
            //通过输出流将文件下载到客户端浏览器中
            ServletOutputStream out = response.getOutputStream();
            excel.write(out);
            //关闭资源
            out.flush();
            out.close();
            excel.close();

        }catch (IOException e){
            e.printStackTrace();
        }
    }
```



### 3.3 功能测试

直接使用前后端联调测试。

**进入数据统计**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131155111294.png" alt="image-20230131155111294" style="zoom:50%;" /> 

**点击数据导出**：Excel报表下载成功

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20230131160647328.png" alt="image-20230131160647328" style="zoom:50%;" /> 



### 3.4 代码提交



