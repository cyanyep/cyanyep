(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{416:function(_,v,t){"use strict";t.r(v);var a=t(0),s=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"_1-如何定位慢查询"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何定位慢查询"}},[_._v("#")]),_._v(" 1. 如何定位慢查询")]),_._v(" "),v("p",[_._v("我们当时在做压力测试时发现有些接口响应时间非常慢，超过了2秒。因为我们的系统部署了运维监控系统Skywalking，在它的报表展示中可以看到哪个接口慢，并且能分析出接口中哪部分耗时较多，包括具体的SQL执行时间，这样就能定位到出现问题的SQL。")]),_._v(" "),v("p",[_._v("如果没有这种监控系统，MySQL本身也提供了慢查询日志功能。可以在MySQL的系统配置文件中开启慢查询日志，并设置SQL执行时间超过多少就记录到日志文件，比如我们之前项目设置的是2秒，超过这个时间的SQL就会记录在日志文件中，我们就可以在那里找到执行慢的SQL。不过不建议在生产环境使用，因为开启慢日志功能会损耗MySQL的性能")]),_._v(" "),v("h2",{attrs:{id:"_2-那这个sql语句执行很慢-如何分析呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-那这个sql语句执行很慢-如何分析呢"}},[_._v("#")]),_._v(" 2. 那这个SQL语句执行很慢，如何分析呢？")]),_._v(" "),v("p",[_._v("聚合查询——新增一个临时表去解决")]),_._v(" "),v("p",[_._v("多表查询——优化sql语句结构")]),_._v(" "),v("p",[_._v("表数据量过大——添加索引")]),_._v(" "),v("p",[_._v("深度分页查询——覆盖索引+子查询")]),_._v(" "),v("p",[_._v("如果一条SQL执行很慢，我们通常会使用MySQL的"),v("code",[_._v("EXPLAIN")]),_._v("命令来分析这条SQL的执行情况。通过"),v("code",[_._v("key")]),_._v("和"),v("code",[_._v("key_len")]),_._v("可以检查是否命中了索引，如果已经添加了索引，也可以判断索引是否有效。通过"),v("code",[_._v("type")]),_._v("字段可以查看SQL是否有优化空间，比如是否存在全索引扫描或全表扫描。通过"),v("code",[_._v("extra")]),_._v("建议可以判断是否出现回表情况，如果出现，可以尝试添加索引或修改返回字段来优化。")]),_._v(" "),v("h2",{attrs:{id:"_3-了解过索引吗-什么是索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-了解过索引吗-什么是索引"}},[_._v("#")]),_._v(" 3. 了解过索引吗？（什么是索引）")]),_._v(" "),v("p",[_._v("索引在项目中非常常见，它是一种帮助MySQL高效获取数据的数据结构，主要用来提高数据检索效率，降低数据库的I/O成本。同时，索引列可以对数据进行排序，降低数据排序的成本，也能减少CPU的消耗。")]),_._v(" "),v("h2",{attrs:{id:"_4-索引的底层数据结构了解过吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-索引的底层数据结构了解过吗"}},[_._v("#")]),_._v(" 4. 索引的底层数据结构了解过吗**？**")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：MySQL的默认存储引擎InnoDB使用的是B+树作为索引的存储结构。选择B+树的原因包括：节点可以有更多子节点，路径更短；磁盘读写代价更低，非叶子节点只存储键值和指针，叶子节点存储数据；B+树适合范围查询和扫描，因为叶子节点形成了一个双向链表。")]),_._v(" "),v("h2",{attrs:{id:"_5-b树和b-树的区别是什么呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-b树和b-树的区别是什么呢"}},[_._v("#")]),_._v(" 5. B树和B+树的区别是什么呢？")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：B树和B+树的主要区别在于：")]),_._v(" "),v("ol",[v("li",[_._v("B树的非叶子节点和叶子节点都存放数据，而B+树的所有数据只出现在叶子节点，这使得B+树在查询时效率更稳定。")]),_._v(" "),v("li",[_._v("B+树在进行范围查询时效率更高，因为所有数据都在叶子节点，并且叶子节点之间形成了双向链表。")])]),_._v(" "),v("h2",{attrs:{id:"_6-什么是聚簇索引什么是非聚簇索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-什么是聚簇索引什么是非聚簇索引"}},[_._v("#")]),_._v(" 6. 什么是聚簇索引什么是非聚簇索引**？**")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：聚簇索引是指数据与索引放在一起，B+树的叶子节点保存了整行数据，通常只有一个聚簇索引，一般是由主键构成。")]),_._v(" "),v("p",[_._v("非聚簇索引则是数据与索引分开存储，B+树的叶子节点保存的是主键值，可以有多个非聚簇索引，通常我们自定义的索引都是非聚簇索引。")]),_._v(" "),v("h2",{attrs:{id:"_7-知道什么是回表查询吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-知道什么是回表查询吗"}},[_._v("#")]),_._v(" 7. 知道什么是回表查询吗？")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：回表查询是指通过二级索引找到对应的主键值，然后再通过主键值查询聚簇索引中对应的整行数据的过程。")]),_._v(" "),v("h2",{attrs:{id:"_8-知道什么叫覆盖索引吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-知道什么叫覆盖索引吗"}},[_._v("#")]),_._v(" 8. 知道什么叫覆盖索引吗？")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：覆盖索引是指在SELECT查询中，返回的列全部能在索引中找到，避免了回表查询，提高了性能。使用覆盖索引可以减少对主键索引的查询次数，提高查询效率。")]),_._v(" "),v("h2",{attrs:{id:"_9-mysql超大分页怎么处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-mysql超大分页怎么处理"}},[_._v("#")]),_._v(" 9. MySQL超大分页怎么处理**？**")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：超大分页通常发生在数据量大的情况下，使用"),v("code",[_._v("LIMIT")]),_._v("分页查询且需要排序时效率较低。可以通过覆盖索引和子查询来解决。首先查询数据的ID字段进行分页，然后根据ID列表用子查询来过滤只查询这些ID的数据，因为查询ID时使用的是覆盖索引，所以效率可以提升。")]),_._v(" "),v("h2",{attrs:{id:"_10-索引创建原则有哪些"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-索引创建原则有哪些"}},[_._v("#")]),_._v(" 10. 索引创建原则有哪些？")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：创建索引的原则包括：")]),_._v(" "),v("ul",[v("li",[_._v("表中的数据量超过10万以上时考虑创建索引。")]),_._v(" "),v("li",[_._v("选择查询频繁的字段作为索引，如查询条件、排序字段或分组字段。")]),_._v(" "),v("li",[_._v("尽量使用复合索引，覆盖SQL的返回值。")]),_._v(" "),v("li",[_._v("如果字段区分度不高，可以将其放在组合索引的后面。")]),_._v(" "),v("li",[_._v("对于内容较长的字段，考虑使用前缀索引。")]),_._v(" "),v("li",[_._v("控制索引数量，因为索引虽然可以提高查询速度，但也会影响插入、更新的速度。")])]),_._v(" "),v("h2",{attrs:{id:"_11-什么情况下索引会失效"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-什么情况下索引会失效"}},[_._v("#")]),_._v(" 11. 什么情况下索引会失效？")]),_._v(" "),v("p",[_._v("索引可能在以下情况下失效：")]),_._v(" "),v("ul",[v("li",[_._v("没有遵循最左匹配原则。")]),_._v(" "),v("li",[_._v("使用了模糊查询且"),v("code",[_._v("%")]),_._v("号在前面。")]),_._v(" "),v("li",[_._v("在索引字段上进行了运算或类型转换。")]),_._v(" "),v("li",[_._v("使用了复合索引但在中间使用了范围查询，导致右边的条件索引失效。")])]),_._v(" "),v("h2",{attrs:{id:"_12-sql的优化经验有哪些"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12-sql的优化经验有哪些"}},[_._v("#")]),_._v(" 12. SQL的优化经验有哪些？")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：SQL优化可以从以下几个方面考虑：")]),_._v(" "),v("ul",[v("li",[_._v("建表时选择合适的字段类型。")]),_._v(" "),v("li",[_._v("使用索引，遵循创建索引的原则。")]),_._v(" "),v("li",[_._v("编写高效的SQL语句，比如避免使用"),v("code",[_._v("SELECT *")]),_._v("，尽量使用"),v("code",[_._v("UNION ALL")]),_._v("代替"),v("code",[_._v("UNION")]),_._v("，以及在表关联时使用"),v("code",[_._v("INNER JOIN")]),_._v("。")]),_._v(" "),v("li",[_._v("采用主从复制和读写分离提高性能。")]),_._v(" "),v("li",[_._v("在数据量大时考虑分库分表。")])]),_._v(" "),v("h2",{attrs:{id:"_13-创建表的时候-你们是如何优化的呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_13-创建表的时候-你们是如何优化的呢"}},[_._v("#")]),_._v(" 13. 创建表的时候，你们是如何优化的呢？")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：创建表时，我们主要参考《嵩山版》开发手册，选择字段类型时结合字段内容，比如数值类型选择"),v("code",[_._v("TINYINT")]),_._v("、"),v("code",[_._v("INT")]),_._v("、"),v("code",[_._v("BIGINT")]),_._v("等，字符串类型选择"),v("code",[_._v("CHAR")]),_._v("、"),v("code",[_._v("VARCHAR")]),_._v("或"),v("code",[_._v("TEXT")]),_._v("。")]),_._v(" "),v("h2",{attrs:{id:"_14-在使用索引的时候-是如何优化呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_14-在使用索引的时候-是如何优化呢"}},[_._v("#")]),_._v(" 14. 在使用索引的时候，是如何优化呢？")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：在使用索引时，我们遵循索引创建原则，确保索引字段是查询频繁的，使用复合索引覆盖SQL返回值，避免在索引字段上进行运算或类型转换，以及控制索引数量。")]),_._v(" "),v("h2",{attrs:{id:"_15-你平时对sql语句做了哪些优化呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_15-你平时对sql语句做了哪些优化呢"}},[_._v("#")]),_._v(" 15. 你平时对SQL语句做了哪些优化呢？")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：我对SQL语句的优化包括指明字段名称而不是使用"),v("code",[_._v("SELECT *")]),_._v("，避免造成索引失效的写法，聚合查询时使用"),v("code",[_._v("UNION ALL")]),_._v("代替"),v("code",[_._v("UNION")]),_._v("，表关联时优先使用"),v("code",[_._v("INNER JOIN")]),_._v("，以及在必须使用"),v("code",[_._v("LEFT JOIN")]),_._v("或"),v("code",[_._v("RIGHT JOIN")]),_._v("时，确保小表作为驱动表。")]),_._v(" "),v("h2",{attrs:{id:"_16-事务的特性是什么-可以详细说一下吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_16-事务的特性是什么-可以详细说一下吗"}},[_._v("#")]),_._v(" 16. 事务的特性是什么？可以详细说一下吗？")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：事务的特性是ACID，即原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）。例如，A向B转账500元，这个操作要么都成功，要么都失败，体现了原子性。转账过程中数据要保持一致，A扣除了500元，B必须增加500元。隔离性体现在A向B转账时，不受其他事务干扰。持久性体现在事务提交后，数据要被持久化存储。")]),_._v(" "),v("h2",{attrs:{id:"_17-并发事务带来哪些问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_17-并发事务带来哪些问题"}},[_._v("#")]),_._v(" 17. 并发事务带来哪些问题？")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：并发事务可能导致脏读、不可重复读和幻读。脏读是指一个事务读到了另一个事务未提交的“脏数据”。不可重复读是指在一个事务内多次读取同一数据，由于其他事务的修改导致数据不一致。幻读是指一个事务读取到了其他事务插入的“幻行”。")]),_._v(" "),v("h2",{attrs:{id:"_18-怎么解决这些问题呢-mysql的默认隔离级别是"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_18-怎么解决这些问题呢-mysql的默认隔离级别是"}},[_._v("#")]),_._v(" 18. 怎么解决这些问题呢？MySQL的默认隔离级别是？")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：解决这些问题的方法是使用事务隔离。MySQL支持四种隔离级别：")]),_._v(" "),v("ol",[v("li",[_._v("未提交读（READ UNCOMMITTED）：解决不了所有问题。")]),_._v(" "),v("li",[_._v("读已提交（READ COMMITTED）：能解决脏读，但不能解决不可重复读和幻读。")]),_._v(" "),v("li",[_._v("可重复读（REPEATABLE READ）：能解决脏读和不可重复读，但不能解决幻读，这也是MySQL的默认隔离级别。")]),_._v(" "),v("li",[_._v("串行化（SERIALIZABLE）：可以解决所有问题，但性能较低。")])]),_._v(" "),v("h2",{attrs:{id:"_19-undo-log和redo-log的区别是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_19-undo-log和redo-log的区别是什么"}},[_._v("#")]),_._v(" 19. "),v("code",[_._v("undo log")]),_._v("和"),v("code",[_._v("redo log")]),_._v("的区别是什么？")]),_._v(" "),v("p",[v("strong",[_._v("候选人：")]),v("code",[_._v("redo log")]),_._v("记录的是数据页的物理变化，用于服务宕机后的恢复，保证事务的持久性。而"),v("code",[_._v("undo log")]),_._v("记录的是逻辑日志，用于事务回滚时恢复原始数据，保证事务的原子性和一致性。")]),_._v(" "),v("h2",{attrs:{id:"_20-事务中的隔离性是如何保证的呢-你解释一下mvcc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_20-事务中的隔离性是如何保证的呢-你解释一下mvcc"}},[_._v("#")]),_._v(" 20. 事务中的隔离性是如何保证的呢？（你解释一下MVCC）")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：事务的隔离性通过锁和多版本并发控制（MVCC）来保证。MVCC通过维护数据的多个版本来避免读写冲突。底层实现包括隐藏字段、"),v("code",[_._v("undo log")]),_._v("和"),v("code",[_._v("read view")]),_._v("。隐藏字段包括"),v("code",[_._v("trx_id")]),_._v("和"),v("code",[_._v("roll_pointer")]),_._v("。"),v("code",[_._v("undo log")]),_._v("记录了不同版本的数据，通过"),v("code",[_._v("roll_pointer")]),_._v("形成版本链。"),v("code",[_._v("read view")]),_._v("定义了不同隔离级别下的快照读，决定了事务访问哪个版本的数据。")]),_._v(" "),v("h2",{attrs:{id:"_21-mysql主从同步原理是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_21-mysql主从同步原理是什么"}},[_._v("#")]),_._v(" 21. MySQL主从同步原理是什么？")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：MySQL主从复制的核心是二进制日志（Binlog）。步骤如下：")]),_._v(" "),v("ol",[v("li",[_._v("主库在事务提交时记录数据变更到Binlog。")]),_._v(" "),v("li",[_._v("从库读取主库的Binlog并写入中继日志（Relay Log）。")]),_._v(" "),v("li",[_._v("从库重做中继日志中的事件，反映到自己的数据中。")])]),_._v(" "),v("h2",{attrs:{id:"_22-你们项目用过mysql的分库分表吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_22-你们项目用过mysql的分库分表吗"}},[_._v("#")]),_._v(" 22. 你们项目用过MySQL的分库分表吗？")]),_._v(" "),v("p",[_._v("我们采用微服务架构，每个微服务对应一个数据库，是根据业务进行拆分的，这个其实就是垂直拆分。")]),_._v(" "),v("h2",{attrs:{id:"_23-那你之前使用过水平分库吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_23-那你之前使用过水平分库吗"}},[_._v("#")]),_._v(" 23. 那你之前使用过水平分库吗？")]),_._v(" "),v("p",[v("strong",[_._v("候选人")]),_._v("：使用过。当时业务发展迅速，某个表数据量超过1000万，单库优化后性能仍然很慢，因此采用了水平分库。我们首先部署了3台服务器和3个数据库，使用mycat进行数据分片。旧数据也按照ID取模规则迁移到了各个数据库中，这样各个数据库可以分摊存储和读取压力，解决了性能问题。")]),_._v(" "),v("h2",{attrs:{id:"为什么update一定要用索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么update一定要用索引"}},[_._v("#")]),_._v(" 为什么update一定要用索引")]),_._v(" "),v("p",[_._v("因为使用索引进行update时只会对这个索引项加锁。")]),_._v(" "),v("p",[_._v("使用没有索引的条件update时，不知道对哪一个索引加锁，导致对主键索引的每一结点进行加锁，行锁退化成了表锁")]),_._v(" "),v("h1",{attrs:{id:"count-1-和count-和count-字段-的执行速度区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#count-1-和count-和count-字段-的执行速度区别"}},[_._v("#")]),_._v(" count(1)和count(*)和count(字段)的执行速度区别")]),_._v(" "),v("h1",{attrs:{id:"索引的类型有什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引的类型有什么"}},[_._v("#")]),_._v(" 索引的类型有什么")]),_._v(" "),v("h1",{attrs:{id:"mysql的锁有什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql的锁有什么"}},[_._v("#")]),_._v(" MySQL的锁有什么")]),_._v(" "),v("p",[_._v("全局锁：用于数据库备份")]),_._v(" "),v("h1",{attrs:{id:"mysql数据库的备份"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql数据库的备份"}},[_._v("#")]),_._v(" MySQL数据库的备份")]),_._v(" "),v("p",[_._v("数据库备份需要对数据库加全局锁")]),_._v(" "),v("p",[v("code",[_._v("flush tables with read lock")])]),_._v(" "),v("ol",[v("li",[v("p",[_._v("mysqldump（MySQL自带的工具）")]),_._v(" "),v("p",[_._v("适用于小数据库")]),_._v(" "),v("p",[_._v("`mysqldump -u username -p database_name table1 table2 > tables_backup.sql#备份多个表``")]),_._v(" "),v("p",[_._v("``mysqldump -u username -p database_name < tables_backup.sql#恢复备份`")])]),_._v(" "),v("li",[v("p",[_._v("二进制日志文件进行增量备份")]),_._v(" "),v("p",[_._v("可以配合mysqldump使用")])]),_._v(" "),v("li",[v("p",[_._v("对于大型数据库使用xtrabackup")])])]),_._v(" "),v("h1",{attrs:{id:"mysql导入大数据量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql导入大数据量"}},[_._v("#")]),_._v(" MySQL导入大数据量")]),_._v(" "),v("ol",[v("li",[_._v("如果数据使用的是文本文件(如，CSV、TSV)存储，可以使用load data [infile]")]),_._v(" "),v("li",[_._v("如果使用的是sql文件，可以先使用一些脚本或工具将多个insert语句合并为一条，将数据分批次插入，一次不超过一千个数据（buffer pool限制），从而减少客户端与数据库的通信次数")]),_._v(" "),v("li",[_._v("在插入时可以暂时关闭索引和外键检查，插入完毕后再开启并，如果必要，重建索引。")]),_._v(" "),v("li",[_._v("为了保证执行过程对异常处理，可以创建一张临时的任务表，包含任务id，数据范围，任务状态等字段，每次插入数据前记录任务信息。如果插入出现异常就可以进行回滚或重试")])]),_._v(" "),v("h1",{attrs:{id:"导入100万数据导致数据库死锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#导入100万数据导致数据库死锁"}},[_._v("#")]),_._v(" 导入100万数据导致数据库死锁")]),_._v(" "),v("p",[_._v("是因为插入的数据违反了唯一性约束")]),_._v(" "),v("p",[_._v("当插入的数据违反了唯一性，会导致排他锁退化为共享锁，因为要保证其他线程能访问到数据，如果有两个线程都进行插入违反唯一性，都会持有共享锁，并等待意向排他锁，因为意向排他锁和共享锁是冲突的，导致死锁")]),_._v(" "),v("h1",{attrs:{id:"bin-log与undo-log的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bin-log与undo-log的区别"}},[_._v("#")]),_._v(" bin log与undo log的区别")]),_._v(" "),v("h1",{attrs:{id:"深分页慢-怎么优化-limit-500000-10和limit-10的比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#深分页慢-怎么优化-limit-500000-10和limit-10的比较"}},[_._v("#")]),_._v(" 深分页慢，怎么优化/limit 500000 10和limit 10的比较")]),_._v(" "),v("p",[_._v("深分页慢是因为需要先扫描并跳过前 500,000 条记录，然后再返回接下来的 10 条数据，而limit10只需要直接返回前10条数据")]),_._v(" "),v("p",[_._v("优化方法")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("如果查询涉及到索引，")]),_._v(" "),v("ul",[v("li",[_._v("如果是没有查询条件的，可以使用延迟关联，通过索引获取对应的10条数据的主键后，通过主键关联回表查询数据，")]),_._v(" "),v("li",[_._v("如果是有查询条件的，可以先通过覆盖索引筛选符合条件的第50000条数据后的10条数据，如果还需要其他字段，再通过子查询查找，这样可以避免查询语句回表查询到其他字段后，再进行分页，提高性能")])])]),_._v(" "),v("li",[v("p",[_._v("基于游标的分页：对于有序数据，可以记住上一次查询的最后一个记录的主键值，然后在下一次查询时直接从该位置开始查找。不过这种方法不能跨页查询，且主键必须是有序的")])]),_._v(" "),v("li",[v("p",[_._v("可以通过分库分表，将表水平拆分，这样查询只需要查询相关的表就行，但是需要解决分布式事务、全局唯一ID、跨库查询等问题")])]),_._v(" "),v("li",[v("p",[_._v("引入搜索引擎可以提供更强大的搜索和分页能力，特别是在处理复杂查询和大数据量时。不过这会增加系统架构的复杂度，")])]),_._v(" "),v("li",[v("p",[_._v("可以从业务层优化，一般不会跨过500000条数据来查询10条，所以可以通过设置查询的最大页数来限制深分页，比如淘宝、京东商品最多翻到100页")])])]),_._v(" "),v("h1",{attrs:{id:"mysql线上修改大表结构有哪些风险"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql线上修改大表结构有哪些风险"}},[_._v("#")]),_._v(" MySQL线上修改大表结构有哪些风险")]),_._v(" "),v("p",[_._v("在线修改大表的表结构执行时间")]),_._v(" "),v("p",[_._v("可以使用工具online-schema-change，可以在不影响表的正常读写的情况下执行DDL操作")]),_._v(" "),v("h1",{attrs:{id:"mysql不建议使用null作为默认值"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql不建议使用null作为默认值"}},[_._v("#")]),_._v(" MySQL不建议使用NULL作为默认值")]),_._v(" "),v("p",[_._v("SQL语言采用的是三值逻辑，除了真和假，还有第三个值"),v("code",[_._v("UNKNOWN")]),_._v("（不确定）。")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("查询复杂性增加")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("使用NULL会增加查询的复杂性，因为NULL不能通过常规的比较运算符（如"),v("code",[_._v("=")]),_._v("、"),v("code",[_._v("<")]),_._v("、"),v("code",[_._v(">")]),_._v("）进行比较，必须使用"),v("code",[_._v("IS NULL")]),_._v("或"),v("code",[_._v("IS NOT NULL")]),_._v("来判断。否则，"),v("code",[_._v("NULL")]),_._v("参与逻辑运算时会返回"),v("code",[_._v("UNKNOWN")]),_._v("，导致查询结果与预期不一致。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("索引稀疏性问题")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("虽然MySQL的B+树索引可以包含NULL值，但在某些情况下（如唯一索引），NULL值可能会导致意外的行为。此外，查询优化器可能无法充分利用包含NULL值的索引，导致查询性能下降。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("违反业务逻辑和约束")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("NULL值可能违反业务逻辑和数据库约束。例如，如果某个列在业务逻辑上不能为空，但允许NULL值，可能会导致数据不一致。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("聚合函数的影响")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("NULL值会影响聚合函数的结果。例如，"),v("code",[_._v("COUNT(column)")]),_._v("会忽略NULL值，只计算非NULL值，这可能导致统计结果与预期不符。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("存储和性能开销")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("虽然NULL值本身不占用存储空间，但MySQL需要额外的位来标记哪些值是NULL，这会增加一些存储和性能开销。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("替代方案")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("为了避免使用NULL，可以为列设置一个有意义的默认值（如空字符串"),v("code",[_._v("''")]),_._v("、"),v("code",[_._v("0")]),_._v("或特定占位符），或者使用"),v("code",[_._v("NOT NULL")]),_._v("约束，以确保数据的完整性和一致性。")])])])]),_._v(" "),v("h1",{attrs:{id:"为什么mysql推荐使用自增id"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么mysql推荐使用自增id"}},[_._v("#")]),_._v(" 为什么mysql推荐使用自增id")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("自增 ID 是连续递增的整数，在插入新记录时，MySQL 可以直接将新记录追加到表的末尾（B+树的叶子节点），不会为计算新行的位置而做出额外的消耗，也不需要重新排序或调整索引结构。只有当达到页面的最大填充因子时(innodb默认的最大填充因子是页大小的15/16,会留出1/16的空间留作以后的  修改)：将下一条记录写入新的页中，一旦数据按照这种顺序的方式加载，主键页就会近乎于顺序的记录填满，提升了页面的最大填充率，不会有页的浪费，减少了页分裂和碎片的产生")])]),_._v(" "),v("li",[v("p",[_._v("因为uuid相对顺序的自增id来说是毫无规律可言的，每次插入都需要为新行寻找新的合适的位置，导致 B+ 树需要重新平衡，影响插入性能。")])])]),_._v(" "),v("p",[_._v("而插入数据的毫无顺序会导致数据分布散乱，将会导致以下的问题：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("写入的目标页很可能已经刷新到磁盘上并且从缓存上移除，或者还没有被加载到缓存中，innodb在插入之前不得不先找到并从磁盘读取目标页到内存中，这将导致大量的随机IO")])]),_._v(" "),v("li",[v("p",[_._v("因为写入是乱序的,innodb不得不频繁的做页分裂操作,以便为新的行分配空间,页分裂导致移动大量的数据，一次插入最少需要修改三个页以上")])]),_._v(" "),v("li",[v("p",[_._v("由于频繁的页分裂，页会变得稀疏并被不规则的填充，最终会导致数据会有碎片")])])]),_._v(" "),v("p",[_._v("结论：使用innodb应该尽可能的按主键的自增顺序插入，")]),_._v(" "),v("ul",[v("li",[_._v("尽管自增ID有诸多优点，但在某些场景下可能存在局限性：")])]),_._v(" "),v("ol",[v("li",[_._v("可预测性：\n"),v("ul",[v("li",[_._v("自增ID是连续的，容易被猜测，可能存在安全风险（如数据爬取或恶意攻击）。")]),_._v(" "),v("li",[_._v("可以通过一些技术手段（如ID加密、哈希等）来增强安全性。")])])]),_._v(" "),v("li",[_._v("分布式系统的挑战：\n"),v("ul",[v("li",[_._v("在分布式系统中，自增ID需要额外的逻辑来保证全局唯一性（如使用Snowflake算法或数据库分段自增）。")])])]),_._v(" "),v("li",[_._v("对于高并发的负载，innodb在按主键进行插入的时候会造成明显的锁争用，主键的上界会成为争抢的热点，因为所有的插入都发生在这里，并发插入会导致间隙锁竞争")])]),_._v(" "),v("h1",{attrs:{id:"数据量达到多少的时候要开始分库分表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据量达到多少的时候要开始分库分表"}},[_._v("#")]),_._v(" 数据量达到多少的时候要开始分库分表？")]),_._v(" "),v("p",[_._v("何时进行分库分表的依据")]),_._v(" "),v("ul",[v("li",[_._v("数据存储方式")]),_._v(" "),v("li",[_._v("检索方式")])]),_._v(" "),v("p",[_._v("InnoDB使用B+树索引结构，其性能与树高度直接相关，每次树高增加意味着多一次磁盘I/O")]),_._v(" "),v("p",[_._v("innoDB的索引树建议控制在三层，超过三层就要考虑分库分表，")]),_._v(" "),v("p",[_._v("而三层可以存储多少条数据呢")]),_._v(" "),v("ul",[v("li",[_._v("innoDB的数据是存储在页中的，一个页是16KB")]),_._v(" "),v("li",[_._v("假设非叶子结点存储的目录项（索引键值（8字节的BIGINT）+ 子页指针（6字节））为14byte，行数据为1KB，")]),_._v(" "),v("li",[_._v("第一层的非叶子结点就可以存储16KB/14B = 1170个指向第二层子节点的目录项。")]),_._v(" "),v("li",[_._v("所以第二层有1170个非叶子结点，且每个节点也可以存储1170个目录项，")]),_._v(" "),v("li",[_._v("第三层就可以有1170*1170个结点，每个结点可以存储16KB/1KB = 16 条行数据。")]),_._v(" "),v("li",[_._v("所以第三层可以存储总共1170* 1170* 16 = 2000多万条行数据")])]),_._v(" "),v("p",[_._v("实际容量应考虑行格式、碎片率等因素，建议按理论值的70%作为预警线")]),_._v(" "),v("p",[_._v("高频访问的表应适当降低阈值（如按50%计算）")])])}),[],!1,null,null,null);v.default=s.exports}}]);