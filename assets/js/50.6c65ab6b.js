(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{494:function(_,s,v){"use strict";v.r(s);var a=v(2),r=Object(a.a)({},(function(){var _=this,s=_._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"redis使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis使用场景"}},[_._v("#")]),_._v(" redis使用场景")]),_._v(" "),s("ol",[s("li",[_._v("缓存 （穿透、击穿、雪崩）、双写一致、持久化、数据过期策略、数据淘汰策略")]),_._v(" "),s("li",[_._v("分布式锁 （setnx、redisson）")]),_._v(" "),s("li",[_._v("计数器")]),_._v(" "),s("li",[_._v("保存token （数据类型选择：string）")]),_._v(" "),s("li",[_._v("消息队列 （数据类型选择：list）")]),_._v(" "),s("li",[_._v("延迟队列 （数据类型选择：zset）")])]),_._v(" "),s("h1",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[_._v("#")])]),_._v(" "),s("h1",{attrs:{id:"_1-什么是缓存穿透-怎么解决-null、布隆、降级保底"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是缓存穿透-怎么解决-null、布隆、降级保底"}},[_._v("#")]),_._v(" 1. 什么是缓存穿透，怎么解决（null、布隆、降级保底）")]),_._v(" "),s("p",[_._v("缓存穿透是指查询一个一定不存在的数据，由于存储层查不到数据因此不写入缓存，这将导致这个不存在的数据每次请求都要到 DB 去查询，可能导致 DB 挂掉。这种情况大概率是遭到了攻击。")]),_._v(" "),s("p",[_._v("解决方案")]),_._v(" "),s("ol",[s("li",[s("p",[_._v("缓存空数据，查询返回的数据为空，仍然将空数据进行缓存")]),_._v(" "),s("p",[_._v("优点：简单")]),_._v(" "),s("p",[_._v("缺点：消耗内存，可能会发生不一致问题")])]),_._v(" "),s("li",[s("p",[_._v("我们通常都会用布隆过滤器来解决它。（需要缓存预热时，预热布隆过滤器）")]),_._v(" "),s("p",[_._v("优点：占用内存较少，不用缓存多余key")]),_._v(" "),s("p",[_._v("缺点：实现复杂，存在误判（但不会漏判），不能删除")])])]),_._v(" "),s("h1",{attrs:{id:"_2-什么是布隆过滤器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是布隆过滤器"}},[_._v("#")]),_._v(" 2. 什么是布隆过滤器")]),_._v(" "),s("p",[_._v("布隆过滤器主要是用于检索一个元素是否在一个集合中。我们当时使用的是Redisson实现的布隆过滤器。")]),_._v(" "),s("p",[_._v("它的底层原理是，先初始化一个比较大的数组，里面存放的是二进制0或1。一开始都是0，当一个key来了之后，经过3次hash计算，模数组长度找到数据的下标，然后把数组中原来的0改为1。这样，三个数组的位置就能标明一个key的存在。查找的过程也是一样的。当然，布隆过滤器有可能会产生一定的误判，我们一般可以设置这个误判率，大概不会超过5%。其实这个误判是必然存在的，要不就得增加数组的长度。5%以内的误判率一般的项目也能接受，不至于高并发下压倒数据库。")]),_._v(" "),s("h1",{attrs:{id:"_3-什么是缓存击穿-怎么解决-锁、逻辑过期、降级保底"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么是缓存击穿-怎么解决-锁、逻辑过期、降级保底"}},[_._v("#")]),_._v(" 3. 什么是缓存击穿，怎么解决（锁、逻辑过期、降级保底）")]),_._v(" "),s("p",[_._v("缓存击穿的意思是，对于设置了过期时间的key，缓存在某个时间点过期的时候，恰好这个时间点对这个Key有大量的并发请求过来。这些请求发现缓存过期，一般都会从后端 DB 加载数据并回设到缓存，这个时候大并发的请求可能会瞬间把 DB 压垮。")]),_._v(" "),s("p",[_._v("解决方案有两种方式：")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("第一，可以使用互斥锁：当缓存失效时，不立即去load db，先使用如 Redis 的 "),s("code",[_._v("SETNX")]),_._v(" 去设置一个互斥锁。只有获得互斥锁的进程，才能进行 load db的操作并回设缓存，获取失败的重试get缓存和互斥锁的方法。")])]),_._v(" "),s("li",[s("p",[_._v("第二种方案是设置当前key逻辑过期，大概思路如下：")]),_._v(" "),s("ol",[s("li",[s("p",[_._v("在设置key的时候，设置一个过期时间字段一块存入缓存中，不给当前key设置过期时间；")])]),_._v(" "),s("li",[s("p",[_._v("当查询的时候，从redis取出数据后判断时间是否过期；")])]),_._v(" "),s("li",[s("p",[_._v("如果过期，则开通另外一个线程进行数据同步，当前线程正常返回数据，这个数据可能不是最新的。")])])])]),_._v(" "),s("li",[s("p",[_._v("当然，两种方案各有利弊：")]),_._v(" "),s("ul",[s("li",[_._v("如果选择数据的强一致性，建议使用分布式锁的方案，但性能上可能没那么高，且有可能产生死锁的问题。")]),_._v(" "),s("li",[_._v("如果选择key的逻辑删除，则优先考虑高可用性，性能比较高，但数据同步这块做不到强一致。")])])])]),_._v(" "),s("h1",{attrs:{id:"_4-什么是缓存雪崩-怎么解决-随机过期时间、降级保底"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-什么是缓存雪崩-怎么解决-随机过期时间、降级保底"}},[_._v("#")]),_._v(" 4. 什么是缓存雪崩，怎么解决（随机过期时间、降级保底）")]),_._v(" "),s("p",[_._v("缓存雪崩意思是，设置缓存时采用了相同的过期时间，导致缓存在某一时刻同时失效或者redis服务宕机，请求全部转发到DB，DB瞬时压力过重而雪崩。")]),_._v(" "),s("p",[_._v("与缓存击穿的区别是：雪崩是很多key，而击穿是某一个key缓存。")]),_._v(" "),s("p",[_._v("解决方案主要是，")]),_._v(" "),s("ol",[s("li",[_._v("可以将缓存失效时间分散开。比如，可以在原有的失效时间基础上增加一个随机值，比如1-5分钟随机。这样，每一个缓存的过期时间的重复率就会降低，就很难引发集体失效的事件。")]),_._v(" "),s("li",[_._v("redis集群提高服务的可用性，（哨兵、集群）")]),_._v(" "),s("li",[s("strong",[_._v("添加降级限流策略（nginx或spring cloud gateway）")]),_._v("（降级可用做系统的保底策略，适用于穿透、击穿、雪崩）")]),_._v(" "),s("li",[_._v("添加多级缓存（guava、caffeine）")])]),_._v(" "),s("h1",{attrs:{id:"reids双写一致问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reids双写一致问题"}},[_._v("#")]),_._v(" reids双写一致问题")]),_._v(" "),s("p",[_._v("方法：")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("延迟双删（有脏数据）")])]),_._v(" "),s("li",[s("p",[_._v("读写锁（数据强一致）")])]),_._v(" "),s("li",[s("p",[_._v("异步通知")])])]),_._v(" "),s("h2",{attrs:{id:"_5-redis作为缓存-如何保证redis与mysql数据的同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-redis作为缓存-如何保证redis与mysql数据的同步"}},[_._v("#")]),_._v(" 5. redis作为缓存，如何保证redis与mysql数据的同步")]),_._v(" "),s("p",[_._v("嗯！就说我最近做的这个项目，里面有xxxx（根据自己的简历上写）的功能，需要让数据库与redis"),s("strong",[_._v("高度保持一致")]),_._v("，因为要求时效性比较高。")]),_._v(" "),s("p",[_._v("我们当时采用的"),s("strong",[_._v("读写锁")]),_._v("保证的强一致性。我们使用的是"),s("strong",[_._v("Redisson实现的读写锁")]),_._v("（保持高度一致）。")]),_._v(" "),s("ul",[s("li",[_._v("在读的时候添加共享锁，可以保证读读不互斥、读写互斥。")]),_._v(" "),s("li",[_._v("当我们更新数据的时候，添加排他锁。它是读写、读读都互斥，这样就能保证在写数据的同时，是不会让其他线程读数据的，避免了脏数据。")]),_._v(" "),s("li",[_._v("这里面需要注意的是，读方法和写方法上需要使用同一把锁才行。")])]),_._v(" "),s("h2",{attrs:{id:"_6-那这个排他锁是如何保证读写、读读互斥的呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-那这个排他锁是如何保证读写、读读互斥的呢"}},[_._v("#")]),_._v(" 6. 那这个排他锁是如何保证读写、读读互斥的呢？")]),_._v(" "),s("p",[_._v("其实排他锁底层使用的也是"),s("code",[_._v("SETNX")]),_._v("，它保证了同时只能有一个线程操作锁住的方法。")]),_._v(" "),s("h2",{attrs:{id:"_7-你听说过延时双删吗-为什么不用它呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-你听说过延时双删吗-为什么不用它呢"}},[_._v("#")]),_._v(" 7. 你听说过延时双删吗？为什么不用它呢？")]),_._v(" "),s("p",[_._v("延迟双删，如果是写操作，我们先把缓存中的数据删除，然后更新数据库，最后再延时删除缓存中的数据。其中，这个延时多久不太好确定(如果数据库是主从模式，数据库同步时间不确定)。在延时的过程中，可能会出现脏数据，并不能保证强一致性，所以没有采用它。")]),_._v(" "),s("h2",{attrs:{id:"_8-redis作为缓存-如何保证redis与mysql数据的同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-redis作为缓存-如何保证redis与mysql数据的同步"}},[_._v("#")]),_._v(" 8. redis作为缓存，如何保证redis与mysql数据的同步")]),_._v(" "),s("p",[_._v("嗯！就说我最近做的这个项目，里面有xxxx（根据自己的简历上写）的功能。数据同步可以有一定的延时（这符合大部分业务需求）。")]),_._v(" "),s("ol",[s("li",[_._v("我们当时采用的阿里的Canal组件实现数据同步：不需要更改业务代码，只需部署一个Canal服务。Canal服务把自己伪装成mysql的一个从节点。当mysql数据更新以后，Canal会读取binlog数据，然后再通过Canal的客户端获取到数据，并更新缓存即可。")]),_._v(" "),s("li",[_._v("使用消息队列，在将修改的数据写入数据库后会发送消息给消息队列，在缓存服务中监听消息并更新缓存，由于MQ的可靠性，能保证最终的一致性")])]),_._v(" "),s("h1",{attrs:{id:"_9-redis的数据持久化策略有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-redis的数据持久化策略有哪些"}},[_._v("#")]),_._v(" 9. Redis的数据持久化策略有哪些")]),_._v(" "),s("p",[_._v("在Redis中提供了两种数据持久化的方式：1) RDB；2) AOF。")]),_._v(" "),s("h2",{attrs:{id:"_10-这两种持久化方式有什么区别呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-这两种持久化方式有什么区别呢"}},[_._v("#")]),_._v(" 10. "),s("strong",[_._v("这两种持久化方式有什么区别呢？")])]),_._v(" "),s("p",[_._v("RDB全称Redis Database Backup file(Redis数据备份文件)，也被叫做Redis数据快照。它是把redis内存存储的数据写到磁盘上。当redis实例宕机恢复数据的时候，可以从RDB的快照文件中恢复数据。")]),_._v(" "),s("ul",[s("li",[_._v("可以手动执行命令save、bgsave或者，设置触发机制，")]),_._v(" "),s("li",[_._v("可以在redis.conf文件中设置为多少秒内修改一次就执行一次bgsave)")])]),_._v(" "),s("p",[_._v("AOF(Append Only File)的含义是追加文件。当redis执行写命令的时候，都会存储到这个文件中。当redis实例宕机恢复数据的时候，会从这个文件中再次执行一遍命令来恢复数据。")]),_._v(" "),s("ul",[s("li",[_._v("redis.conf中可以设置appendonly是否开启AOF功能，默认是no，")]),_._v(" "),s("li",[_._v("AOF中的命令可能会重复操作同一个key，导致AOF文件很大，")]),_._v(" "),s("li",[_._v("可以通过命令"),s("code",[_._v("bgrewriteaof")]),_._v("对AOF文件重写\n"),s("ul",[s("li",[_._v("也可以配置文件auto-aof-rewrite-percentage 增长超过多少百分比触发")]),_._v(" "),s("li",[_._v("auto-aof-rewrite-min-size 文件体积超过多少时触发")])])])]),_._v(" "),s("p",[_._v("容忍数分钟数据丢失：RDB")]),_._v(" "),s("p",[_._v("数据安全性要求高：AOF + [RDB] (通常两者结合使用)")]),_._v(" "),s("h2",{attrs:{id:"_11-这两种方式-哪种恢复的比较快呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-这两种方式-哪种恢复的比较快呢"}},[_._v("#")]),_._v(" 11. 这两种方式，哪种恢复的比较快呢？")]),_._v(" "),s("p",[_._v("RDB因为是二进制文件，保存时体积也比较小，所以它恢复得比较快。但它有可能会丢数据。")]),_._v(" "),s("p",[_._v("我们通常在项目中也会使用AOF来恢复数据。虽然AOF恢复的速度慢一些，但它丢数据的风险要小很多。")]),_._v(" "),s("p",[_._v("在AOF文件中可以设置刷盘策略。")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("AOF命令记录的频率配置项：")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("always：每一次命令都会记录")])]),_._v(" "),s("li",[s("p",[_._v("everysec：每一秒记录一次")])]),_._v(" "),s("li",[s("p",[_._v("no：由操作系统控制")])])])])]),_._v(" "),s("p",[_._v("我们当时设置的就是每秒批量写入一次命令。")]),_._v(" "),s("h2",{attrs:{id:"rdb的执行原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdb的执行原理"}},[_._v("#")]),_._v(" RDB的执行原理")]),_._v(" "),s("p",[_._v("bgsave开始时会fork主进程得到子进程，子进程共享主进程的内存数据，从而读取内存数据并写入RDB文件。")]),_._v(" "),s("p",[_._v("fork采用的是copy-on-write技术：")]),_._v(" "),s("ul",[s("li",[_._v("fork时会把共享的内存标记为")]),_._v(" "),s("li",[_._v("read-only当主进程执行读操作时，访问共享内存；")]),_._v(" "),s("li",[_._v("当主进程执行写操作时，则会拷贝一份数据，执行写操作。")])]),_._v(" "),s("h1",{attrs:{id:"_12-redis的数据过期策略有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-redis的数据过期策略有哪些"}},[_._v("#")]),_._v(" 12. Redis的数据过期策略有哪些")]),_._v(" "),s("p",[_._v("在redis中提供了两种数据过期删除策略。")]),_._v(" "),s("ul",[s("li",[_._v("第一种是惰性删除。在设置该key过期时间后，我们不去管它。当需要该key时，我们检查其是否过期。如果过期，我们就删掉它；反之，返回该key。")]),_._v(" "),s("li",[_._v("第二种是定期删除。就是说，每隔一段时间，我们就对一些key进行检查，并删除里面过期的key。")])]),_._v(" "),s("p",[_._v("定期清理的两种模式是：")]),_._v(" "),s("ul",[s("li",[_._v("SLOW模式，是定时任务，执行频率默认为10hz，每次不超过25ms，可以通过修改配置文件redis.conf的hz选项来调整这个次数；")]),_._v(" "),s("li",[_._v("FAST模式，执行频率不固定，每次事件循环会尝试执行，但两次间隔不低于2ms，每次耗时不超过1ms。")])]),_._v(" "),s("p",[_._v("Redis的过期删除策略是：惰性删除 + 定期删除两种策略配合使用。")]),_._v(" "),s("h1",{attrs:{id:"redis分布式锁如何实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis分布式锁如何实现"}},[_._v("#")]),_._v(" Redis分布式锁如何实现")]),_._v(" "),s("h1",{attrs:{id:"redis实现分布式锁如何合理的控制锁的有效时长"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis实现分布式锁如何合理的控制锁的有效时长"}},[_._v("#")]),_._v(" Redis实现分布式锁如何合理的控制锁的有效时长")]),_._v(" "),s("h1",{attrs:{id:"redis的数据淘汰策略有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis的数据淘汰策略有哪些"}},[_._v("#")]),_._v(" Redis的数据淘汰策略有哪些")]),_._v(" "),s("h1",{attrs:{id:"redis集群有哪些方案-知道嘛"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis集群有哪些方案-知道嘛"}},[_._v("#")]),_._v(" Redis集群有哪些方案，知道嘛")]),_._v(" "),s("p",[_._v("主从复制、哨兵、cluster分片")]),_._v(" "),s("h1",{attrs:{id:"什么是redis主从同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是redis主从同步"}},[_._v("#")]),_._v(" 什么是Redis主从同步")]),_._v(" "),s("h1",{attrs:{id:"你们使用redis是单点还是集群-哪种集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你们使用redis是单点还是集群-哪种集群"}},[_._v("#")]),_._v(" 你们使用Redis是单点还是集群？哪种集群")]),_._v(" "),s("h1",{attrs:{id:"redis分片集群中数据是怎么存储和读取的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis分片集群中数据是怎么存储和读取的"}},[_._v("#")]),_._v(" Redis分片集群中数据是怎么存储和读取的")]),_._v(" "),s("h1",{attrs:{id:"redis集群脑裂"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis集群脑裂"}},[_._v("#")]),_._v(" redis集群脑裂")]),_._v(" "),s("h1",{attrs:{id:"怎么保证redis的高并发高可用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么保证redis的高并发高可用"}},[_._v("#")]),_._v(" 怎么保证redis的高并发高可用")]),_._v(" "),s("h1",{attrs:{id:"你们用过redis的事务吗-事务的命令有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你们用过redis的事务吗-事务的命令有哪些"}},[_._v("#")]),_._v(" 你们用过Redis的事务吗？事务的命令有哪些")]),_._v(" "),s("h1",{attrs:{id:"redis是单线程的-但是为什么还那么快"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis是单线程的-但是为什么还那么快"}},[_._v("#")]),_._v(" Redis是单线程的，但是为什么还那么快？")]),_._v(" "),s("h1",{attrs:{id:"谈谈对redis的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#谈谈对redis的理解"}},[_._v("#")]),_._v(" 谈谈对redis的理解")])])}),[],!1,null,null,null);s.default=r.exports}}]);