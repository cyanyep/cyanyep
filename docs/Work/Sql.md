# 页面不响应

show processlist查看当前正在运行的所有连接

锁等待在data_lock_waits表查看

阻塞的SQL在events_statements_current表查看

# 使用#{}不用${}

`${}`通常用于字符串替换

`#{}`通常用于表示一个预编译语句中的参数，使用这种占位符时，数据库驱动会将参数安全地传递给SQL引擎