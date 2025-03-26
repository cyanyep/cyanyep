Spring全家桶

# Spring

# 为什么推荐使用构造函数注入

依赖注入的三种方式

1. 使用`@Autowired`注解：将`@Autowired`注解直接标记在字段上，Spring会自动注入依赖。
2. Setter注入：使用`@Autowired`注解标记Setter方法，Spring会自动调用Setter方法注入依赖。
3. 构造函数注入：如果有构造函数，Spring会自动调用构造函数并注入所需的依赖。

为什么推荐使用构造函数注入？

1. 不可变性（Immutability）

   - 构造函数注入允许将依赖字段声明为`final`，确保依赖在对象创建后不可变。

2. 确保依赖项不为null

   构造函数注入强制要求在创建对象时提供所有依赖，如果依赖项不存在，编译器会报错

3. 避免循环依赖

   构造函数注入可以帮助发现循环依赖问题，因为Spring在启动时会检查构造函数注入的循环依赖。可以通过 `@Lazy`解决

4. 符合单一职责原则

   构造函数注入强制要求类的依赖在构造函数中明确声明，有助于遵循单一职责原则（SRP）。

使用构造函数时，当一个类只有一个构造函数时，Spring 会自动选择它进行注入，无需额外注解。如果有多个构造函数，需要使用 `@Autowired` 或 `@Primary` 明确指定。

如果需要添加注入的依赖，还需要修改构造函数，这时可以使用lombok工具的RequiredArgsConstructor，会自动注入被final修饰的字段





# Spring通知有哪些类型？

# 解释基于XML Schema方式的切面实现

# 解释基于注解的切面实现

# Spring AOP的动态代理

Spring AOP使用的动态代理，它基于动态代理来实现。默认地，如果使用接口的，用 JDK 提供的动态代理实现，如果没有接口，使用 CGLIB 实现。（面试题）：
/class com.sun.proxy.$Proxy19
是jdk代理所产生的一个动态代理类，当被代理的类实现了接口会默认使用jdk代理
实现了接口的bean不能用实现类的class对象来获取bean，只能通过其接口的class对象来获取bean（因为实现类不在IOC容器中，被代理拦截了，代理了实现类的代理放在IOC容器中，该代理和实现类实现了共同接口）或者实现类名字（需要用接口接收）

IUserService bean = ioc.getBean(IUserService.class):
IUserService bean = (IUserService) ioc.getBean("userServiceImpl")；

//class cn.tulingxueyuan.service.impl.UserServiceImplSSEnhancerBySpringCGLIBS8f281cf64

cgIib代理所所产生的一个动态代理类，当被代理的类**没有实现接口就会使用cglib代理**

# Spring事务的实现方式和实现原理

# Spring的事务传播行为

# spring的事务隔离？

# Spring框架的事务管理有哪些优点？



---

# SpringBoot



# PO、BO、DO、VO、DTO、DAO、POJO

1. PO（Persistent Object，持久化对象）

   - 定义：PO是与**数据库表直接映射**的对象，每个字段通常与数据库表的列一一对应。

   - 用途：通常用于ORM（对象关系映射）框架（如Hibernate、MyBatis）中，主要用于数据库操作（增删改查）。

   - 特点：一般不包含业务逻辑。

2. BO（Business Object，业务对象）	

   - 定义：BO是封装了业务逻辑的对象，通常用于业务逻辑层。

   - 用途：用于处理复杂的业务逻辑。

   - 特点：可能由多个DO或PO组合而成，包含业务逻辑和数据。

3. DO（Data Object / Domain Object，数据对象 / 领域对象）

   - 阿里巴巴的DO（Data Object）：

     - 定义：与数据库表直接映射的对象，与数据库表一一对应，类似于PO。

     - 特点：不包含业务逻辑。


   - DDD的DO（Domain Object）：

     - 定义：业务领域中的核心对象，类似于BO。

     - 用途：用于业务逻辑层。

     - 特点：可能由多个PO组成，包含业务逻辑和数据。

4. VO（View Object，视图对象）

   - 定义：用于**展示数据**的对象，通常用于**表现层**（如前端页面）。

   - 用途：通常用于返回给前端的数据封装。

   - 特点：字段可以根据展示需求定制，不一定与数据库表或领域对象完全一致。不包含业务逻辑。

5. DAO（Data Access Object，数据访问对象）

   - 定义：用于访问数据库的对象，通常封装了对数据库的操作。

   - 用途：提供对数据库的增删改查操作。

   - 特点：不包含业务逻辑。

6. DTO（Data Transfer Object，数据传输对象）

   - 定义：用于在**不同层之间传输数据的对象**，通常用于服务层与表现层之间的数据传输。

   - 用途：常用于微服务之间的数据传输、远程调用（如RPC）或前后端交互。

   - 特点：不包含业务逻辑，仅用于数据传输。字段可以根据需要定制，不一定与数据库表或领域对象完全一致。

7. POJO（Plain Old Java Object，普通Java对象）

   - 定义：一个普通的Java对象，不依赖于任何框架或接口。
     - 用途：通常用于表示简单的数据对象。


   - 特点：不继承特定的类或实现特定的接口，灵活且通用。



## 怎么组织上面这些对象的转换，有没有遇到什么挑战

1. 手动转换

   - 定义：通过手动编写代码实现对象之间的字段赋值。

   - 优点：灵活性高，完全可控。
   - 缺点：当对象字段较多时，手动编写转换代码会变得繁琐且容易出错。

2. 使用工具类（如 Apache Commons BeanUtils）

   - 利用反射机制自动完成对象属性的拷贝。    BeanUtils.copyProperties(userVo, userBo);
     - 优点：简单快捷，适合字段名称一致的情况。
     - 缺点：性能较低，无法处理复杂字段映射（如类型转换）。

3. 使用映射框架⭐

   - 定义：通过映射框架（如MapStruct、ModelMapper、Dozer）自动完成对象之间的转换。

   - **MapStruct**

     - 基于注解的代码生成工具

       ```java
       @Mapper
       public interface UserMapper {
           UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);
       
           @Mapping(source = "name", target = "userName")
           @Mapping(source = "email", target = "userEmail")
           UserVo toVo(UserBo userBo);
       }
       
       // 使用
       UserVo userVo = UserMapper.INSTANCE.toVo(userBo);
       ```

     - 优点：
       - 性能高（生成的是静态代码，无反射开销）。
       - 支持复杂字段映射和类型转换。
       - 提高代码的可读性和可维护性。

     - 缺点：需要引入额外的依赖。

   - **ModelMapper** 

     - ModelMapper 是一个智能对象映射库，能够自动推断字段映射关系。

     - ```java
       ModelMapper modelMapper = new ModelMapper();
       UserVo userVo = modelMapper.map(userBo, UserVo.class);
       ```

     - 优点：简单易用，支持复杂映射。

     - 缺点：性能略低于 MapStruct，可能需要额外配置。

4. 使用Builder工厂模式

   - 定义：通过Builder模式逐步构建目标对象。
   - 优点：
     - 支持复杂的对象构建逻辑。
     - 代码可读性高，适合字段较多的情况。
   - 缺点：需要为每个对象编写Builder类。

挑战

- 最大的挑战是在复杂业务场景下，各种对象之间的转换关系变得非常复杂。比如一个VO可能需要组合多个DO的数据，或者需要进行一些业务计算才能得到。

- 还有一个挑战是性能问题，特别是在高并发场景下，频繁的对象转换会带来一定的性能开销。我们曾经遇到过因为对象转换导致的性能瓶颈。
- 为了解决这些问题，我们采取了几种策略：
  - 一是优化对象设计，减少不必要的转换；
  - 二是使用缓存机制；
  - 三是在某些关键路径上使用更轻量级的转换方式，比如直接使用Map而不是完整的对象。

# 为什么pojo类布尔类型不要用is开头

- Java Bean规范要求getter和setter方法遵循特定的命名规则：

  - 对于布尔类型的字段，getter方法以is或get开头。

  - setter方法必须以set开头。
  - 比如isActive的getter方法是isActive()，setter方法是setActive()

- 如果布尔字段以`is`开头，可能会导致字段名与getter方法名看起来过于相似，容易引起混淆。

- 而且许多序列化框架（如Jackson、Gson、Fastjson等）和工具（如Spring、Hibernate等）依赖于Java Bean规范来访问属性。

  - 比如Jackson、Fastjson序列化时会使用Java Bean规范根据getter方法把字段解析为active而不是isActive
  - 而Gson默认不依赖Java Bean规范，会直接基于字段名序列化为isActive
  - 这时如果我们用Fastjson序列化用Gson反序列化就会出错

# @Component和@Bean的区别

用途：

- @Component适用于标注一个普通类
- @Bean注解是在配置类的方法上声明和配置一个定制化的Bean对象

使用方式：

- @Component是一个类级别的注解，Spring通过@ComponentScan注解扫描修饰了@Component注解的类并注册到SpringIOC容器中为Bean

- @Bean是方法级别的注解，在带有@Configuration注解的配置类中手动声明和配置Bean

控制权：

- @Component注解修饰的类是由Spring框架来创建和初始化的
- @Bean注解允许开发人员手动控制Bean的创建和配置过程



# @Bean 在 @Component 和 @Configuration 中的区别

- **`@Bean` 在 `@Component` 中**`
  - `@Bean` 方法会被当作普通的工厂方法调用，每次调用都会返回一个新的实例。
  - 不支持 `@Bean` 方法之间的依赖注入（通过方法调用）。
- **`@Bean` 在 `@Configuration` 中**
  - `@Bean` 方法会被 Spring 代理，确保	每次调用返回的是同一个实例（单例）。
  - 支持 `@Bean` 方法之间的依赖注入（通过方法调用）。

# SpringBoot如何解决跨域问题

跨域问题源于浏览器的同源策略（Same-Origin Policy）。如果前端页面和后端服务的协议、域名或端口不同，则浏览器会阻止跨域请求。	

Spring Boot 解决跨域问题的方式

1.  使用 `@CrossOrigin` 注解

   - 它可以作用于控制器类或方法级别。
   - 主要参数
     -  `origins` 指定允许访问资源的来源（即域名），默认值：`"*"`，意味着允许所有来源。
     - `allowedHeaders`  定义哪些请求头可以通过跨域请求发送到服务器。使用`*`表示允许所有头部。
     - `exposedHeaders` 指定哪些响应头可以通过跨域请求暴露给前端应用。
     - `methods` 指定允许的HTTP方法（GET, POST, PUT, DELETE等）。使用`*`表示允许所有方法。
     - `allowCredentials` 指示是否支持用户凭证（Cookies、HTTP认证信息等）包含在跨域请求中。设置为`true`时，必须同时指定`origins`不能为`"*"`（因为出于安全考虑，浏览器不允许这样配置）。

2.  全局跨域配置

   - 实现 `WebMvcConfigurer` 接口，可以在全局范围内配置跨域规则。

   - ```java
     @Configuration
     public class WebConfig implements WebMvcConfigurer {
     
         @Override
         public void addCorsMappings(CorsRegistry registry) {
             registry.addMapping("/api/**") // 指定允许跨域的路径
                     .allowedOrigins("http://localhost:3000") // 允许的来源
                     .allowedMethods("GET", "POST", "PUT", "DELETE") // 允许的 HTTP 方法
                     .allowedHeaders("*") // 允许的请求头
                     .allowCredentials(true) // 是否允许发送 Cookie
                     .maxAge(3600); // 预检请求的缓存时间（秒）
         }
     }
     ```

     

3. 使用过滤器（Filter）

   - 通过自定义过滤器，可以拦截所有请求并手动添加 CORS 相关的响应头。

   - ```java
     @Configuration
     public class CorsConfig {
     
         @Bean
         public CorsFilter corsFilter() {
             UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
             CorsConfiguration config = new CorsConfiguration();
     
             config.setAllowCredentials(true); // 允许携带凭证
             config.addAllowedOrigin("http://localhost:3000"); // 允许的源
             config.addAllowedHeader("*"); // 允许的请求头
             config.addAllowedMethod("*"); // 允许的HTTP方法
             source.registerCorsConfiguration("/**", config); // 对所有路径生效
     
             return new CorsFilter(source);
         }
     }
     ```

4. 使用 Nginx 或反向代理

   - 在生产环境中，可以通过 Nginx 或其他反向代理服务器解决跨域问题。

   - ```nginx
     server {
         listen 80;
         server_name example.com;
     
         location /api/ {
             proxy_pass http://localhost:8080; # 转发到后端服务
             add_header Access-Control-Allow-Origin "http://localhost:3000";
             add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE";
             add_header Access-Control-Allow-Headers "*";
             add_header Access-Control-Allow-Credentials "true";
         }
     }
     ```

   - 优点
     - 将跨域逻辑从应用层移至网关层，减轻后端负担。
     - 更适合微服务架构中的跨域需求。



# 如何给bean指定名称

| 方法                   | 示例代码                       | 适用场景                         |
| ---------------------- | ------------------------------ | -------------------------------- |
| `@Component("name")`   | `@Component("myBean")`         | 自动扫描组件时指定名称           |
| `@Bean(name = "name")` | `@Bean(name = "customBean")`   | 在配置类中手动定义Bean时指定名称 |
| `@Qualifier("name")`   | `@Qualifier("primaryService")` | 解决多Bean冲突时指定限定符       |
| XML `<bean id="name">` | `<bean id="myBean">`           | 使用XML配置时指定名称            |
| `@Named("name")`       | `@Named("customName")`         | 使用JSR-330标准时指定名称        |