# redis基础

环境准备

- windows操作系统
- Mysql 5.7及以上版本
- VMware + CentOS7虚拟机
- JDK8
- IDEA开发工具

学习资料

[redis](https://pan.baidu.com/s/1189u6u4icQYHg_9_7ovWmA?from=init&pwd=eh11#list/path=%2F)



# 初始Redis

## NoSQL

|          | SQL关系型数据库      | NoSQL非关系型数据库                                          |
| -------- | -------------------- | ------------------------------------------------------------ |
| 数据结构 | 结构化（Structured） | 非结构化的<br />（键值类型（Redis）、文档类型（MongoDB）<br />、 列类型（HBase）、 Graph类型（Neo4j）） |
| 数据关联 | 关联的（Relational） | 无关联的                                                     |
| 查询方式 | SQL查询              | 非SQL                                                        |
| 事务特性 | ACID                 | BASE                                                         |

## 认识Redis

**Remote Dictionary Server**，远程词典服务器，是一个基于内存的键值型NoSQL数据库

- 特征：
  键值（key-value）型，value支持多种不同数据结构，功能丰富
  单线程，每个命令具备原子性
  低延迟，速度快（基于内存、IO多路复用、良好的编码）。
  支持数据持久化
  支持主从集群、分片集群
  支持多语言客户端

## Redis安装

[Redis安装说明](./Redis安装说明.md)

# Redis常见命令

## Redis数据结构介绍**

Redis是一个高性能的键值对（key-value）的数据库，key一般是String类型，不过value的类型多种多样：

### 基本类型

1. **String**：字符串类型，可以存储任何格式的文本数据。
   - 示例：`hello world`
2. **Hash**：哈希表类型，用于存储键值对集合。
   - 示例：`{name: "Jack", age: 21}`
3. **List**：列表类型，用于存储有序的字符串列表。
   - 示例：`[A -> B -> C -> C]`
4. **Set**：集合类型，用于存储无序且不重复的字符串集合。
   - 示例：`{A, B, C}`
5. **SortedSet**：有序集合类型，用于存储按分数排序的字符串集合。
   - 示例：`{A: 1, B: 2, C: 3}`

### 特殊类型

1. **GEO**：地理空间索引类型，用于存储地理位置信息。
   - 示例：`{A: (120.3, 30.5)}`
2. **BitMap**：位图类型，用于高效地存储和操作二进制位。
   - 示例：`0110110101110101011`
3. **HyperLog**：超对数日志类型，用于近似计算唯一元素的数量。
   - 示例：`0110110101110101011`

Redis为了方便我们学习，将操作不同数据类型的命令也做了分组，在官网（ [https://redis.io/commands ](https://redis.io/commands)）可以查看到不同的命令

或者通过**help @XXX**

![image-20250117180730695](http://stofu80ry.sabkt.gdipper.com/picture/image-20250117180730695.png)

## Redis通用命令

- 通用指令是部分数据类型的，都可以使用的指令，常见的有：
  - KEYS：查看符合模板的所有key，不建议在生产环境设备上使用，会消耗大量资源
  - DEL：删除一个指定的key
  - EXISTS：判断key是否存在
  - EXPIRE：给一个key设置有效期，有效期到期时该key会被自动删除
  - TTL	查看一个KEY的剩余有效期

​	通过help [command] 可以查看一个命令的具体用法



## String类型

String类型，也就是字符串类型，是Redis中最简单的存储类型。

其**value**是字符串，不过根据**字符串的格式**不同，又可以分为3类：

- string：普通字符串
- int：整数类型，可以做自增、自减操作
- float：浮点类型，可以做自增、自减操作

不管是哪种格式，底层都是**字节数组**形式存储，只不过是编码方式不同。字符串类型的最大空间不能超过512m.

### String的常见命令**

- SET：添加或者修改已经存在的一个String类型的键值对
- GET：根据key获取String类型的value
- MSET：批量添加多个String类型的键值对
- MGET：根据多个key获取多个String类型的value
- INCR：让一个整型的key自增1
- INCRBY:让一个整型的key自增并指定步长，例如：incrby num 2 让num值自增2
- INCRBYFLOAT：让一个浮点类型的数字自增并指定步长
- SETNX：添加一个String类型的键值对，前提是这个key不存在，否则不执行
- SETEX：添加一个String类型的键值对，并且指定有效期

### key的结构*

Redis的key允许有多个单词形成层级结构，多个单词之间用':'隔开，格式如下：

- 项目名:业务名:类型:id

这个格式并非固定，也可以根据自己的需求来删除或添加词条。

例如我们的项目名称叫 heima，有user和product两种不同类型的数据，我们可以这样定义key：

- user相关的key：heima:user:1
- uproduct相关的key：heima:product:1

如果Value是一个Java对象，例如一个User对象，则可以将对象序列化为JSON字符串后存储：

| **KEY**         | **VALUE**                                  |
| --------------- | ------------------------------------------ |
| heima:user:1    | {"id":1,  "name": "Jack", "age": 21}       |
| heima:product:1 | {"id":1,  "name": "小米11", "price": 4999} |



## Hash类型

Hash类型，也叫散列，其value是一个无序字典，类似于Java中的HashMap结构。

String结构是将对象序列化为JSON字符串后存储，当需要**修改对象某个字段时很不方便**：

Hash结构可以将对象中的每个字段独立存储，可以针对单个字段做CRUD：

<table style="border-collapse: collapse; margin: 0 auto; text-align: center;">
  <tr>
    <th rowspan="2">KEY</th>
    <th colspan="2">VALUE</th>
  </tr>
  <tr>
    <th>field</th>
    <th>value</th>
  </tr>
  <tr>
    <td rowspan="2" style="vertical-align: middle;">heima:user:1</td>
    <td>name</td>
    <td>Jack</td>
  </tr>
  <tr>
    <td>age</td>
    <td>21</td>
  </tr>
  <tr>
    <td rowspan="2" style="vertical-align: middle;">heima:user:2</td>
    <td>name</td>
    <td>Rose</td>
  </tr>
  <tr>
    <td>age</td>
    <td>18</td>
  </tr>
</table>


### Hash的常见命令**

- HSET key field value：添加或者修改hash类型key的field的值
- HGET key field：获取一个hash类型key的field的值
- HMSET：批量添加多个hash类型key的field的值
- HMGET：批量获取多个hash类型key的field的值
- HGETALL：获取一个hash类型的key中的所有的field和value
- HKEYS：获取一个hash类型的key中的所有的field
- HVALS：获取一个hash类型的key中的所有的value
- HINCRBY:让一个hash类型key的字段值自增并指定步长
- HSETNX：添加一个hash类型的key的field值，前提是这个field不存在，否则不执行



## List类型

Redis中的List类型与Java中的LinkedList类似，可以看做是一个**双向链表**结构。既可以支持正向检索和也可以支持反向检索。

特征也与LinkedList类似：

- **有序**
- **元素可以重复**
- **插入和删除快**
- **查询速度一般**

常用来存储一个**有序数据**，例如：朋友圈点赞列表，评论列表等。

### List的常见命令**

- LPUSH key  element ... ：向列表左侧插入一个或多个元素
- LPOP key：移除并返回列表左侧的第一个元素，没有则返回nil
- RPUSH key  element ... ：向列表右侧插入一个或多个元素
- RPOP key：移除并返回列表右侧的第一个元素
- LRANGE key star end：<font color=red>返回一段角标范围内的所有元素</font>
- BLPOP和BRPOP：与LPOP和RPOP类似，只不过在没有元素时等待指定时间，而不是直接返回nil



## Set类型

Redis的Set结构与Java中的HashSet类似，可以看做是一个value为null的**HashMap**(例如：{A, B, C})。因为也是一个hash表，因此具备与HashSet类似的特征：

- 无序
- 元素不可重复
- 查找快
- 支持交集、并集、差集等功能

### Set类型的常见命令**

- SADD key member ... ：向set中添加一个或多个元素
- SREM key member ... : 移除set中的指定元素
- SCARD key： 返回set中元素的个数
- SISMEMBER key member：判断一个元素是否存在于set中
- SMEMBERS：获取set中的所有元素
- SINTER key1 key2 ... ：求key1与key2的交集
- SDIFF key1 key2 ... ：求key1与key2的差集
- SUNION key1 key2 ..：求key1和key2的并集



## SortedSet类型

Redis的**SortedSet**是一个**可排序的set集合**，与Java中的TreeSet有些类似，但底层数据结构却差别很大。SortedSet中的**每一个元素都带有一个score属性**，可以基于score属性对元素排序，底层的实现是一个**跳表（SkipList）加 hash表**。

SortedSet具备下列特性：

- 可排序
- 元素不重复
- 查询速度快

因为SortedSet的可排序特性，经常被用来实现**排行榜**这样的功能。

### SortedSet的常见命令

- ZADD key score member：添加一个或多个元素到sorted set ，如果已经存在则更新其score值
- ZREM key member：删除sorted set中的一个指定元素
- ZSCORE key member : 获取sorted set中的指定元素的score值
- ZRANK key member：获取sorted set 中的指定元素的排名
- ZCARD key：获取sorted set中的元素个数
- ZCOUNT key min max：统计score值在给定范围内的所有元素的个数
- ZINCRBY key increment member：让sorted set中的指定元素自增，步长为指定的increment值
- ZRANGE key min max：按照score排序后，获取指定排名范围内的元素
- ZRANGEBYSCORE key min max：按照score排序后，获取指定score范围内的元素
- ZDIFF、ZINTER、ZUNION：求差集、交集、并集

注意：所有的排名默认都是升序，如果要降序则在命令的Z后面添加REV即可



# Redis的Java客户端

在Redis官网中提供了各种语言的客户端，地址：https://redis.io/clients



Redis 的 Java 客户端很多，常用的几种：

- Jedis（Java redis）
- Lettuce
- Spring Data Redis

Spring 对 Redis 客户端进行了整合，提供了 Spring Data Redis，在Spring Boot项目中还提供了对应的Starter，即 spring-boot-starter-data-redis。

我们重点学习**Spring Data Redis**。

![image-20250117192048977](http://stofu80ry.sabkt.gdipper.com/picture/image-20250117192048977.png)



## Jedis

Jedis的官网地址： https://github.com/redis/jedis，我们先来个快速入门：

1. 引入依赖：（可以直接复制官网）

```xml
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
    <version>5.2.0</version>
</dependency>
```



2. 建立连接

```java
private Jedis jedis;
@BeforeEach
public void setUp() {
    jedis = new Jedis("192.168.10.130", 6379);
    jedis.auth("123456");
    jedis.select(0);
}
```



3. 测试string

```java
@Test
void testString() {
    String result = jedis.set("name", "张三");
    System.out.println("result = " + result);
    String name = jedis.get("name");
    System.out.println("name = " + name);
}
```



4. 释放资源

```java
@AfterEach
public void tearDown() {
    if(jedis!=null)
    jedis.close();
}
```



## Jedis连接池

 **Jedis本身是线程不安全的**，并且频繁的创建和销毁连接会有性能损耗，因此我们推荐大家使用**Jedis连接池**代替Jedis的直连方式。

```java
public class JedisConnectionFactory {
    private static final JedisPool jedisPool;
    static {
        JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
        // 最大连接
        jedisPoolConfig.setMaxTotal(8);
        // 最大空闲连接
         jedisPoolConfig.setMaxIdle(8);
        // 最小空闲连接
         jedisPoolConfig.setMinIdle(0);
        // 设置最长等待时间， ms
        jedisPoolConfig.setMaxWaitMillis(1000);
        jedisPool = new JedisPool(jedisPoolConfig, 
                "192.168.10.130", 6379, 1000,"123456");
    }

    public static Jedis getJedis() {
        return jedisPool.getResource();
    }
}
```



## SpringDataRedis**(导入)

SpringData是Spring中数据操作的模块，包含对各种数据库的集成，其中对Redis的集成模块就叫做**SpringDataRedis**，官网地址：https://spring.io/projects/spring-data-redis

- 提供了对不同Redis客户端的整合（Lettuce和Jedis）

- 提供了RedisTemplate统一API来操作Redis

- 支持Redis的发布订阅模型

- 支持Redis哨兵和Redis集群

- 支持基于Lettuce的响应式编程

- 支持基于JDK、JSON、字符串、Spring对象的数据序列化及反序列化

- 支持基于Redis的JDKCollection实现



SpringDataRedis中提供了RedisTemplate工具类，其中封装了各种**对Redis的操作**。并且将不同数据类型的操作API封装到了不同的类型中：

| **API**                         | **返回值类型**  | **说明**              |
| ------------------------------- | --------------- | --------------------- |
| **redisTemplate**.opsForValue() | ValueOperations | 操作String类型数据    |
| **redisTemplate**.opsForHash()  | HashOperations  | 操作Hash类型数据      |
| **redisTemplate**.opsForList()  | ListOperations  | 操作List类型数据      |
| **redisTemplate**.opsForSet()   | SetOperations   | 操作Set类型数据       |
| **redisTemplate**.opsForZSet()  | ZSetOperations  | 操作SortedSet类型数据 |
| **redisTemplate**               |                 | 通用的命令            |



SpringBoot已经提供了对SpringDataRedis的支持，使用非常简单：

1. 引入依赖

```xml
<!--Redis依赖-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
<!--连接池依赖-->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-pool2</artifactId>
</dependency>
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>
```



2. 配置文件

```yml
spring:
  application:
    name: spring-data-reids
  data:
    redis:
      host: 192.168.10.130
      port: 6379
      password: 123456
      lettuce:
        pool:
          max-active: 8
          max-idle: 8
          min-idle: 0
          max-wait: 1000ms
```



3. 注入RedisTemplate

```java
@Autowired
private RedisTemplate redisTemplate;
```



4. 编写测试

```java
@Test
void testString() {
    redisTemplate.opsForValue().set("name", "cyan");
    Object name = redisTemplate.opsForValue().get("name1");
    System.out.println("name = " + name);
}
```



## SpringDataRedis的序列化方式*

RedisTemplate可以接收任意Object作为值写入Redis，只不过写入前会把Object序列化为字节形式，默认是采用**JDK序列化**，得到的结果是这样的：

key: \xAC\xED\x00\x05t\x00\x04name

value: \xAC\xED\x00\x05t\x00\x04cyan

缺点：

​	可读性差

​	内存占用较大



我们可以在RedisConfig配置类中**自定义RedisTemplate**的序列化方式，代码如下：

```java
@Bean
public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory)
        throws UnknownHostException {
    // 创建Template
    RedisTemplate<String, Object> redisTemplate=new RedisTemplate<>();
    // 设置连接工厂
    redisTemplate.setConnectionFactory(redisConnectionFactory);
    // 设置序列化工具
    GenericJackson2JsonRedisSerializer jsonRedisSerializer=

            new GenericJackson2JsonRedisSerializer();

    // key和 hashKey采用 string序列化
    redisTemplate.setKeySerializer(RedisSerializer.string());
    redisTemplate.setHashKeySerializer(RedisSerializer.string());

    // value和 hashValue采用 JSON序列化
    redisTemplate.setValueSerializer(jsonRedisSerializer);
    redisTemplate.setHashValueSerializer(jsonRedisSerializer);
    return redisTemplate;
}
```

运行时会报错是因为没有导入Jackson依赖（格式json数据），（SpringMVC会自动引入）

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
</dependency>
```



尽管JSON的序列化方式可以满足我们的需求，但依然存在一些问题，当value为对象时，如下：

```json
{
  "@class": "com.cyan.springdatareids.pojo.User",
  "name": "cyan",
  "age": 18
}
```

为了在反序列化时知道对象的类型，**JSON序列化器会将类的class类型写入json结果中**，存入Redis，会带来额外的内存开销。x



## StringRedisTemplate**

为了**节省内存空间**，我们并不会使用JSON序列化器来处理value，而是统一使用String序列化器，**要求只能存储String类型的key和value**。

当需要存储**Java对象**时，**手动完成对象的序列化和反序列化**。

![image-20250118234940165](http://stofu80ry.sabkt.gdipper.com/picture/image-20250118234940165.png)

Spring默认提供了一个**StringRedisTemplate**类，它的key和value的序列化方式默认就是String方式。省去了我们自定义RedisTemplate的过程：

手动序列化对象用**ObjectMapper**

```java
private static final ObjectMapper mapper = new ObjectMapper();
@Test
void testUser() throws JsonProcessingException {
    // 准备对象
    User user = new User("cyan", 18);
    // 手动序列化
    String json = mapper.writeValueAsString(user);
    // 写入一条数据到redis
    stringRedisTemplate.opsForValue().set("user:200", json);
    // 读取数据
    String jsonUser = stringRedisTemplate.opsForValue().get("user:200");
    // 反序列化
    User user1 = mapper.readValue(jsonUser, User.class);
    System.out.println("user1 = " + user1);
    
}
```

## RedisTemplate的两种序列化实践方案：

方案一：

1. 自定义RedisTemplate

2. 修改RedisTemplate的序列化器为GenericJackson2JsonRedisSerializer

方案二：

1. 使用StringRedisTemplate

2. 写入Redis时，手动把对象序列化为JSON

3. 读取Redis时，手动把读取到的JSON反序列化为对象

##  操作常见类型数据

**1). 操作字符串类型数据**

```java
	/**
     * 操作字符串类型的数据
     */
    @Test
    public void testString(){
        // set get setex setnx
        redisTemplate.opsForValue().set("name","小明");
        String city = (String) redisTemplate.opsForValue().get("name");
        System.out.println(city);
        redisTemplate.opsForValue().set("code","1234",3, TimeUnit.MINUTES);
        redisTemplate.opsForValue().setIfAbsent("lock","1");
        redisTemplate.opsForValue().setIfAbsent("lock","2");
    }
```



**2). 操作哈希类型数据**

```java
	/**
     * 操作哈希类型的数据
     */
    @Test
    public void testHash(){
        //hset hget hdel hkeys hvals
        HashOperations hashOperations = redisTemplate.opsForHash();

        hashOperations.put("100","name","tom");
        hashOperations.put("100","age","20");

        String name = (String) hashOperations.get("100", "name");
        System.out.println(name);

        Set keys = hashOperations.keys("100");
        System.out.println(keys);

        List values = hashOperations.values("100");
        System.out.println(values);

        hashOperations.delete("100","age");
    }
```



**3). 操作列表类型数据**

```java
	/**
     * 操作列表类型的数据
     */
    @Test
    public void testList(){
        //lpush lrange rpop llen
        ListOperations listOperations = redisTemplate.opsForList();

        listOperations.leftPushAll("mylist","a","b","c");
        listOperations.leftPush("mylist","d");

        List mylist = listOperations.range("mylist", 0, -1);
        System.out.println(mylist);

        listOperations.rightPop("mylist");

        Long size = listOperations.size("mylist");
        System.out.println(size);
    }
```



**4). 操作集合类型数据**

```java
	/**
     * 操作集合类型的数据
     */
    @Test
    public void testSet(){
        //sadd smembers scard sinter sunion srem
        SetOperations setOperations = redisTemplate.opsForSet();

        setOperations.add("set1","a","b","c","d");
        setOperations.add("set2","a","b","x","y");

        Set members = setOperations.members("set1");
        System.out.println(members);

        Long size = setOperations.size("set1");
        System.out.println(size);

        Set intersect = setOperations.intersect("set1", "set2");
        System.out.println(intersect);

        Set union = setOperations.union("set1", "set2");
        System.out.println(union);

        setOperations.remove("set1","a","b");
    }
```



**5). 操作有序集合类型数据**

```java
	/**
     * 操作有序集合类型的数据
     */
    @Test
    public void testZset(){
        //zadd zrange zincrby zrem
        ZSetOperations zSetOperations = redisTemplate.opsForZSet();

        zSetOperations.add("zset1","a",10);
        zSetOperations.add("zset1","b",12);
        zSetOperations.add("zset1","c",9);

        Set zset1 = zSetOperations.range("zset1", 0, -1);
        System.out.println(zset1);

        zSetOperations.incrementScore("zset1","c",10);

        zSetOperations.remove("zset1","a","b");
    }
```



**6). 通用命令操作**

```java
	/**
     * 通用命令操作
     */
    @Test
    public void testCommon(){
        //keys exists type del
        Set keys = redisTemplate.keys("*");
        System.out.println(keys);

        Boolean name = redisTemplate.hasKey("name");
        Boolean set1 = redisTemplate.hasKey("set1");

        for (Object key : keys) {
            DataType type = redisTemplate.type(key);
            System.out.println(type.name());
        }

        redisTemplate.delete("mylist");
    }
```

# 