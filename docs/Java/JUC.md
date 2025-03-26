JUC

https://www.kuangstudy.com/bbs/1369491507349880833

程序、进程、线程

程序：指令和数据的集合

进程：一个程序的运行，是CPU执行的最小单位，包含多个线程

线程：是系统资源分配的最小单位

# 检查死锁工具⭐⭐

jconsoleu或者jps定位进程id，再用jstack定位死锁

# 什么是JUC

![在这里插入图片描述](http://stofu80ry.sabkt.gdipper.com/picture/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2pva2VyZGoyMzM=,size_16,color_FFFFFF,t_70#pic_center-1740645565963-29.png)
java.util 工具包、包、分类

**业务：普通的线程代码 Thread**
**Runnable**： 没有返回值、效率比Callable 相对较低！

**Java 真的可以开启线程吗？** 开不了，底层是native调用C++实现的



```
 public static void main(String[] args) {        // 获取cpu的核数        // CPU 密集型，IO密集型         System.out.println(Runtime.getRuntime().availableProcessors());//12    }
```

并发编程的本质：**充分利用CPU的资源**


# 线程有几个状态

```java
public enum State {
        // 新生
        NEW,
        //运行
        RUNNABLE,
        //阻塞
        BLOCKED, 
        //等待，死死地等 
        WAITING, 
        //// 超时等待 
        TIMED_WAITING,
         // 终止 
        TERMINATED;
    }
```





# Thread、Runnable、Callable

- Thread

  - ```
    new Thread().start();
    ```

- Runnable

  - **将线程和代码分开Thread是线程，Runnable是代码**

  ```java
  Runnable r = new Runnable{
      @Override
      public void run(){
         ... 
      }
  }
  new Thread(r,"thread1").start();
  new Thread(r,"thraed2").start();
  ```

  - new Thread(()->{}).start();

  ## Callable

  1、可以有返回值
  2、可以抛出异常

  3、方法不同，run() / call()

  怎么开启callable

  futureTask能接收Callable类型的参数，用来处理有返回类型的情况

  ```java
  Class CallableTest implement Callable<Boolean>{
  	@Override
  	public Boolean run(){
  		...
  	}
      public void main(String[] args) throws ExecutionException, InterruptionException(){
          CallableTest c1 = new CallableTest();
          CallableTest c2 = new CallableTest();
          CallableTest c3 = new CallableTest();
          // 1
  		//创建执行服务
          ExecutionService es = Executors.newFixedThreadPool(3);
          
          Future<Boolean> f1 = es.submit(c1);
         	Future<Boolean> f2 = es.submit(c2);
          Future<Boolean> f3 = es.submit(c3);
          
  
          try {
              // 获取任务执行的结果，如果任务没有完成则会阻塞等待
          boolean rs1 = f1.get();
          boolean rs2 = f2.get();
          boolean rs3 = f3.get();
          } catch (InterruptedException | ExecutionException e) {
              e.printStackTrace();
          }
          
  		// 2
          // 使用 Callable 创建 FutureTask 实例
          FutureTask<Integer> futureTask = new FutureTask<>(c1);
  
          // 创建并启动线程来执行 FutureTask
          Thread thread = new Thread(futureTask);
          thread.start();
  
          try {
              // 获取任务执行的结果，如果任务没有完成则会阻塞等待
          boolean rs1 = futureTask.get();
          } catch (InterruptedException | ExecutionException e) {
              e.printStackTrace();
          }
          
          //---
          es.shutdownNow();
      }
  }
  ```

  **细节：**
  1、有缓存
  2、结果可能需要等待，会阻塞！


# 线程常见方法 

- Thread

  - start

  - run
  - sleep，可以用于死循环，防止占用cpu资源过高
  - yiled
  - join
  - stop不推荐使用，如果这是线程锁住了共享资源，被杀死后没有机会释放锁，其他线程将永远无法获取锁
  - interrupted
    - isInterrupted 判断是否被打断，不会清除标记
    - interrupted 判断是否被打断，会清除标记
  - 不推荐使用，
    - stop
    - suspend
    - resume

- Object

  - wait会释放锁，而sleep不会
  - wait(long) 指定毫秒数
  - notify()唤醒一个等待的线程
  - notifyAll()唤醒所有wait的线程，优先级高的先调度

- LockSupport

  - park 可以让线程阻塞，使用interrupt或者unpark可以唤醒

  - ```
    // 中断 parkedThread
    parkedThread.interrupt();
    
    // 或者可以使用 unpark 方法唤醒线程
    // LockSupport.unpark(parkedThread);
    ```

  

# 线程运行状态查询

https://www.bilibili.com/list/watchlater?bvid=BV16J411h7Rd&oid=81461839&p=18

# Lock锁（重点）

## Synchronized

```java
public class SaleTicketDemo01 {
    public static void main(String[] args) {
        //并发；多线程操作同一个资源类，把资源类丢入线程
        Ticket ticket = new Ticket();
        //函数式接口，jdk1.8 Lambda：表达式（参数）->(代码}
        new Thread(()->{
            for (int i = 0; i < 60; i++) {
                ticket.sale();
            }
        },"A").start();
        new Thread(()->{
            for (int i = 0; i < 60; i++) {
                ticket.sale();
            }
        },"B").start();
        new Thread(()->{
            for (int i = 0; i < 60; i++) {
                ticket.sale();
            }
        },"C").start();
    }
}
class Ticket{
    //属性方法
    private int number=50;
    public synchronized void sale(){
        if(number>0){
            System.out.println(Thread.currentThread().getName()+"卖出了第："+(number--)+"票，剩余："+number);
        }
    }
}
```

### 管程monitor

![image-20250304215941645](http://stofu80ry.sabkt.gdipper.com/picture/image-20250304215941645.png)

- **创建锁记录(Lock Record)对象，每个线程都的栈桢都会包含一个锁记录的结构，内部可以存储锁定对象的Mark Word**

![image-20250304215754265](http://stofu80ry.sabkt.gdipper.com/picture/image-20250304215754265.png)

### 轻量级锁和重量级锁

### 锁膨胀

如果在尝试加轻量级锁的过程中，CAS 操作无法成功，这时一种情况就是有其它线程为此对象加上了轻量级锁（有 竞争），这时需要进行锁膨胀，将轻量级锁变为重量级锁。

![image-20250304232336901](http://stofu80ry.sabkt.gdipper.com/picture/image-20250304232336901.png)

对象头与栈帧中的锁记录交换/monitor

### 自旋优化

重量级锁竞争的时候，还可以使用自旋来进行优化，如果当前线程自旋成功（即这时候持锁线程已经退出了同步 块，释放了锁），这时当前线程就可以避免阻塞。 自旋重试成功的情况

### 偏向锁

撤销 - 调用对象 hashCode

撤销 - 其它线程使用对象

撤销 - 调用 wait/notify

#### 批量重定向

#### 批量撤销

### 锁粗化

锁粗化就是，对相同对象多次加锁，导致线程发生多次重入，可以使用锁粗化方式来优化，这不同于之前讲的细分锁的粒度。

当多个方法重复调用锁synchronized ，比如在for 循环中，就可以相当于在synchronized中进行for循环，进行粗化，锁的粒度变大



### 锁消除

### wait、notify(必须获得锁对象synchronized才能调用)

- Owner 线程发现条件不满足，调用 wait 方法，即可进入 WaitSet 变为 WAITING 状态 

- BLOCKED 和 WAITING 的线程都处于阻塞状态，不占用 CPU 时间片 

- BLOCKED 线程会在 Owner 线程释放锁时唤醒 

- WAITING 线程会在 Owner 线程调用 notify 或 notifyAll 时唤醒，但唤醒后并不意味者立刻获得锁，**仍需进入 EntryList 重新竞争**

### wait/sleep 区别⭐

**1、来自不同的类**
wait => Object
sleep => Thread
**2、关于锁的释放**
wait 会释放锁，sleep 睡觉了，抱着锁睡觉，不会释放
**3、使用的范围是不同的**
wait：必须在同步代码块中synchronized
sleep：可以再任何地方睡
**4、是否需要捕获异常**
wait 不需要捕获异常
sleep 必须要捕获异常

sleep不能被唤醒，需要用wait

**但是notify随机唤醒会导致虚假唤醒**

### 防止虚假唤醒⭐

**if 改为 while 判断**

```java
/**
 * 线程之间的週信题：生产者和消赏者问题！等待唤，知唤
 * 线程交替执行 A B操作问一个变量num=0
 * A num+1
 * B num-1
 */
public class A {
    public static void main(String[] args) {
        Data data = new Data();
        new Thread(()->{
            for (int i = 0; i < 10; i++) {
                try {
                    data.increment();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        },"A").start();
        new Thread(()->{
            for (int i = 0; i < 10; i++) {
                try {
                    data.decrement();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        },"B").start();
        new Thread(()->{
            for (int i = 0; i < 10; i++) {
                try {
                    data.decrement();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        },"C").start();
        new Thread(()->{
            for (int i = 0; i < 10; i++) {
                try {
                    data.decrement();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        },"D").start();
    }
}
class Data{ //资源类
    private int number=0;
    public synchronized void increment() throws InterruptedException {
        while(number!=0){
            //等待
            this.wait();
        }
        number++;
        System.out.println(Thread.currentThread().getName()+"=>"+number);
        //通知其他线程 +1完毕
        this.notifyAll();
    }
    public synchronized void decrement() throws InterruptedException {
        while(number==0){
            //等待
            this.wait();
        }
        number--;
        System.out.println(Thread.currentThread().getName()+"=>"+number);
        //通知其他线程 -1完毕
        this.notifyAll();
    }
}
```

### 死锁、活锁

死锁：互相持有对方的资源不释放导致

活锁：互相修改对方的结束条件导致不结束

## Lock 接口

**公平锁**：十分公平：可以先来后到
**非公平锁**：十分不公平：可以插队 （默认）

## Synchronized 和 Lock 区别⭐

1、Synchronized 内置的Java关键字， Lock 是一个Java类

2、Synchronized 无法判断获取锁的状态，Lock 可以判断是否获取到了锁

3、Synchronized 会自动释放锁，lock 必须要手动释放锁！如果不释放锁，死锁

4、Synchronized 线程 1（获得锁，阻塞）、线程2（等待，傻傻的等）；Lock锁就不一定会等待下 去；

5、Synchronized 可重入锁，**不可以中断的**，非公平；Lock ，可重入锁，可以 判断锁，非公平（可以 自己设置）；

6、Synchronized 适合锁少量的代码同步问题，Lock 适合锁大量的同步代码！

## synchronized和lock的区别

1. synchronized是java关键字，lock是java类
2. synchronized自动获取和释放锁，lock需要手动获取和释放
3. synchronized是获取锁失败会一直等待的，lock不一定会一直等待
4. synchronized无法判断锁的状态，lock可以判断是否获取到锁
5. synchronized是可以重入的，不可中断，非公平，lock可重入，**可以判断锁的状态就进行中断**，可以指定为公平锁
6. synchronized适合少量代码同步问题，lock适合大量的代码同步问题

reentrantlock可以设置条件变量，synchronized需要用notifyAll

# 锁是什么，如何判断锁的是谁⭐



# 保护性暂停

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20250305113732729.png" alt="image-20250305113732729" style="zoom:50%;" />

- **等待剩余时间**

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20250305113916756.png" alt="image-20250305113916756" style="zoom: 50%;" />

<img src="http://stofu80ry.sabkt.gdipper.com/picture/image-20250305114002218.png" alt="image-20250305114002218" style="zoom:50%;" />

# 面试：单例模式、排序算法、生产者和消费者、死锁⭐⭐







## 生产者和消费者问题

### Synchronized 

> 生产者和消费者问题 Synchronized 版

```java
/**
 * 线程之间的週信题：生产者和消赏者问题！等待唤，知唤 * 线程交替执行 A B操作问一个变量num=0 * A num+1 * B num-1
 */
public class A {
    public static void main(String[] args) {
        Data data = new Data();
        new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                try {
                    data.increment();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "A").start();
        new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                try {
                    data.decrement();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "B").start();
    }
}

class Data { //资源类    
    private int number = 0;

    public synchronized void increment() throws InterruptedException {
        if (number != 0) {            //等待            
            this.wait();
        }
        number++;
        System.out.println(Thread.currentThread().getName() + "=>" + number);        //通知其他线程 +1完毕        
        this.notifyAll();
    }

    public synchronized void decrement() throws InterruptedException {
        if (number == 0) {            //等待            
            this.wait();
        }
        number--;
        System.out.println(Thread.currentThread().getName() + "=>" + number);        //通知其他线程 -1完毕        
        this.notifyAll();
    }
}
```

> 问题存在，A B C D 4 个线程！ 虚假唤醒

![在这里插入图片描述](http://stofu80ry.sabkt.gdipper.com/picture/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2pva2VyZGoyMzM=,size_16,color_FFFFFF,t_70#pic_center-1740647008202-71.png)



### JUC

> ### JUC版的生产者和消费者问题

![在这里插入图片描述](http://stofu80ry.sabkt.gdipper.com/picture/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2pva2VyZGoyMzM=,size_16,color_FFFFFF,t_70#pic_center-1740647008202-72.png)
通过Lock 找到 Condition

代码实现：

```java
/**
 * 线程之间的週信题：生产者和消赏者问题！等待唤，知唤
 * 线程交替执行 A B操作问一个变量num=0
 * A num+1
 * B num-1
 */
public class B {
    public static void main(String[] args) {
        Data2 data = new Data2();
        new Thread(()->{
            for (int i = 0; i < 10; i++) {
                try {
                    data.increment();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        },"A").start();
        new Thread(()->{
            for (int i = 0; i < 10; i++) {
                try {
                    data.decrement();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        },"B").start();
        new Thread(()->{
            for (int i = 0; i < 10; i++) {
                try {
                    data.decrement();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        },"C").start();
        new Thread(()->{
            for (int i = 0; i < 10; i++) {
                try {
                    data.decrement();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        },"D").start();
    }
}
class Data2{ //资源类
    private int number=0;
    Lock lock=new ReentrantLock();
    Condition condition = lock.newCondition();
    public  void increment() throws InterruptedException {
       try {
           lock.lock();
           while(number!=0){
               //等待
               condition.await();
           }
           number++;
           System.out.println(Thread.currentThread().getName()+"=>"+number);
           //通知其他线程 +1完毕
           //唤醒全部
           condition.signalAll();
       }catch (Exception e){
            e.printStackTrace();
       }finally {
           lock.unlock();
       }
    }
    public  void decrement() throws InterruptedException {
      try {
          lock.lock();
          while(number==0){
              //等待
              condition.await();
          }
          number--;
          System.out.println(Thread.currentThread().getName()+"=>"+number);
          //通知其他线程 -1完毕
          //唤醒全部
          condition.signalAll();
      }catch (Exception e){
          e.printStackTrace();
      }finally {
            lock.unlock();
      }
    }
}
```

任何一个新的技术，绝对不是仅仅只是覆盖了原来的技术，优势和补充！

#### Condition ⭐

> Condition 精准的通知和唤醒线程

```java
/**
 * 线程之间的週信题：生产者和消赏者问题！等待唤，知唤
 * 线程交替执行 A B操作问一个变量num=0
 * A num+1
 * B num-1
 * A 执行完 调用B  B执行完调用C C执行完调用A
 */
public class C {
    public static void main(String[] args) {
        Data3 data = new Data3();
        new Thread(()->{
            for (int i = 0; i < 10; i++) {
                try {
                    data.printA();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        },"A").start();
        new Thread(()->{
            for (int i = 0; i < 10; i++) {
                try {
                    data.printB();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        },"B").start();
        new Thread(()->{
            for (int i = 0; i < 10; i++) {
                try {
                    data.printC();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        },"C").start();
    }
}
class Data3{ //资源类
    private int number=1; //1A 2B 3C
    Lock lock=new ReentrantLock();
    Condition condition1 = lock.newCondition();
    Condition condition2 = lock.newCondition();
    Condition condition3 = lock.newCondition();
    public void printA(){
        lock.lock();
        try {
            while (number!=1){
                //等待
                condition1.await();
                System.out.println(Thread.currentThread().getName()+"AAAAAA");
            }
            //唤醒指定的方法 B
            number=2;
            condition2.signal();
        }catch (Exception e){
        }finally {
            lock.unlock();
        }
    }
    public void printB(){
        lock.lock();
        try {
            while (number!=2){
                //等待
                condition2.await();
                System.out.println(Thread.currentThread().getName()+"BBBBBB");
            }
            //唤醒指定的方法 B
            number=3;
            condition3.signal();
        }catch (Exception e){
        }finally {
            lock.unlock();//释放锁
        }
    }
    public void printC(){
        lock.lock();
        try {
            while (number!=3){
                //等待
                condition3.await();
                System.out.println(Thread.currentThread().getName()+"CCCCCC");
            }
            //唤醒指定的方法 B
            number=1;
            condition1.signal();
        }catch (Exception e){
        }finally {
            lock.unlock();//释放锁
        }
    }
}
```





## 8锁现象

- #### 场景1：同一个对象的静态同步方法和实例同步方法

静态同步方法使用的是类锁（`EightLocksExample.class`），而实例同步方法使用的是对象锁（`example`）。

这两个方法不会互相阻塞，可以并发执行。

- #### 场景2：不同对象的静态同步方法和实例同步方法

不会互相阻塞，可以并发执行

- #### 场景3：同一个对象的两个静态同步方法

使用的是同一个类锁（`EightLocksExample.class`），因此第二个线程必须等待第一个线程释放锁后才能继续执行。

- #### 场景4：不同对象的两个静态同步方法

使用的是同一个类锁（`EightLocksExample.class`）

- #### 场景5：同一个对象的两个实例同步方法

使用的是同一个对象锁（`example`）

- #### 场景6：不同对象的两个实例同步方法

使用的是不同的对象锁（`example1` 和 `example2`）

- #### 场景7：同一个对象的静态同步方法和实例同步方法，但其中一个方法加了额外的类锁同步块

```java
EightLocksExample example = new EightLocksExample();
new Thread(() -> {
    example.staticMethod();
}, "Thread-1").start();
new Thread(() -> {
    synchronized (EightLocksExample.class) { // 使用类锁
        example.instanceMethod();
    }
}, "Thread-2").start();
```

等待

- #### 场景8：不同对象的静态同步方法和实例同步方法，但其中一个方法加了额外的对象锁同步块??

```java
EightLocksExample example1 = new EightLocksExample();
EightLocksExample example2 = new EightLocksExample();
new Thread(() -> example1.staticMethod(), "Thread-1").start();
new Thread(() -> {
    synchronized (example2) { // 使用另一个对象的锁
        example2.instanceMethod();
    }
}, "Thread-2").start();
```

不会互相阻塞，可以并发执行。



1. **静态同步方法（static）使用类锁**，即 **`ClassName.class`**，所有调用该静态同步方法的线程都会竞争同一个类锁。
2. **实例同步方法使用对象锁**，即 **`this`**，所有调用该实例同步方法的线程会竞争同一个对象实例的锁。
3. **不同对象的实例同步方法不会互相阻塞**，因为它们使用的是**不同的对象锁**。
4. **同一对象的多个同步方法（无论是静态还是实例）会互相阻塞**，因为它们使用的是**同一个锁**（类锁或对象锁）。
5. **可以通过显式地使用同步块来控制锁的粒度**，从而更灵活地管理线程间的同步关系。



```java
/** *
 * 8锁，就是关于锁的8个问题
 *1、标准情况下，两个线程先打印 发短信还是 打电话？ 1/发短信  2/打电话 * /
 *1、sendSms延迟4秒，两个线程先打印 发短信还是 打电话？ 1/发短信  2/打电话 */
public class Test1 {
    public static void main(String[] args) {
        phone phone = new phone();
        //锁的存在
        new Thread(()->{
           phone.sendSms();
        },"A").start();
        try {
            TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        new Thread(()->{
            phone.call();
        },"B").start();
    }
}
class phone{
    // synchronized 锁的对象是方法的调用者！、
    // 两个方法用的是同一个锁，谁先拿到谁执行！
    public synchronized void sendSms(){
        try {
            TimeUnit.SECONDS.sleep(4);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("sendSms");
    }
    public synchronized void call(){
        System.out.println("call");
    }
}
```

```java
/** *
 * 8锁，就是关于锁的8个问题
 * 3、 增加了一个普通方法后！先执行发短信还是Hello？ 普通方法 *
 * 4、 两个对象，两个同步方法， 发短信还是 打电话？ // 打电话
 */
public class Test2 {
    public static void main(String[] args) {
        //两个不同的对象 两把锁
        phone2 phone = new phone2();
        phone2 phone2 = new phone2();
        //锁的存在 
        new Thread(()->{
           phone.sendSms();
        },"A").start();
        try {
            TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        new Thread(()->{
            phone2.call();
        },"B").start();
     /*   new Thread(()->{
            phone2.hello();
        },"C").start();*/
    }
}
class phone2{
    // synchronized 锁的对象是方法的调用者！、
    // 两个方法用的是同一个锁，谁先拿到谁执行！
    public synchronized void sendSms(){
        try {
            TimeUnit.SECONDS.sleep(4);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("sendSms");
    }
    public synchronized void call(){
        System.out.println("call");
    }
    // 这里没有锁！不是同步方法，不受锁的影响
    public void hello(){
        System.out.println("hello");
    }
}
```

```java
/** *
 * 8锁，就是关于锁的8个问题
 */
public class Test3 {
    public static void main(String[] args) {
        //static 类一加载就有了  所以锁定的是class
        phone3 phone3 = new phone3();
        //锁的存在 
        new Thread(()->{
           phone3.sendSms();
        },"A").start();
        try {
            TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        new Thread(()->{
            phone3.call();
        },"B").start();
    }
}
class phone3{
    // synchronized 锁的对象是方法的调用者！、
    // 两个方法用的是同一个锁，谁先拿到谁执行！
    //static 类一加载就有了  所以锁定的是class
    public static synchronized void sendSms(){
        try {
            TimeUnit.SECONDS.sleep(4);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("sendSms");
    }
    public static synchronized void call(){
        System.out.println("call");
    }
}
```

```java
/** *
 * 8锁，就是关于锁的8个问题
 */
public class Test4 {
    public static void main(String[] args) {
        //static 类一加载就有了  所以锁定的是class
        phone4 phone4 = new phone4();
        //锁的存在 
        new Thread(()->{
           phone4.sendSms();
        },"A").start();
        try {
            TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        new Thread(()->{
            phone4.call();
        },"B").start();
    }
}
class phone4{
    //静态的同步方法
    public static synchronized void sendSms(){
        try {
            TimeUnit.SECONDS.sleep(4);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("sendSms");
    }
    public synchronized void call(){
        System.out.println("call");
    }
}
```





# 线程安全分析

成员变量和静态变量是否线程安全？

- 如果它们没有共享，则线程安全
- 如果它们被共享了，根据它们的状态是否能够改变，又分两种情况
  - ·如果只有读操作，则线程安全
  - 如果有读写操作，则这段代码是临界区，需要考虑线程安全

局部变量是否线程安全？

- 局部变量是线程安全的
- 但**局部变量引用**的对象则未必
  - 如果该对象没有**逃离**方法的作用访问，它是线程安全的
  - 如果该对象**逃离**方法的作用范围，需要考虑线程安全
    - 被子类继承后给其他线程调用，可以用final/private修饰解决
    - 将局部变量传递出去做共享对象，X

成员变量在堆中，局部变量每个线程有一个局部变量表



# 常见的线程安全类

- String
- Integer
- StringBuffer，StringBuilder效率高但不安全
- Random
- Vector
- Hashtable
- java.util.concurrent的类

# 集合类不安全

## ConcurrentModificationException⭐

## List 不安全

并发下的List

```java
public class ListUnSafe {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        for (int i = 1; i <=10; i++) {
            new Thread(()->{
                list.add(UUID.randomUUID().toString().substring(0,5));
                System.out.println(list);
            },String.valueOf(i)).start();
        }
    }
}
```

运行报错



ArrayList的add底层代码 和 Vector的add底层代码

**区别：就加了个synchronized**
那JDK为什么不在ArrayList的add加上synchronized呢

并且Vector的出现比ArrayList要早
为了考虑**效率**问题所以去掉了synchronized



### 解决方案

1. 使用Vector
2. 使用Collections下的synchronizedList方法
3. 使用JUC下的CopyOnWriteArrayList方法

```java
public class ListUnSafe {
    public static void main(String[] args) {
        //List<String> list = new Vector<>();
        //List<String> list=Collections.synchronizedList(new ArrayList<>());
        List<String> list= new CopyOnWriteArrayList<>();
        /**
         * 解决方案：
         * 1.List<String> list = new Vector<>();
         * 2.List<String> list=Collections.synchronizedList(new ArrayList<>());
         *
         * Copywrite写入阿复制 COW 计算初程序设领域的一种优化策略
         * 多个线程调用的时候，List读取的时候，固定的，写入（覆盖）
         * 在写入的时候避免盖，造成数据问题
         * 3.List<String> list= new CopyOnWriteArrayList<>();
         *
         * CopyOnWriteArrayList比Vector厉害在哪里 看源码
         */
        for (int i = 1; i <=10; i++) {
            new Thread(()->{
                list.add(UUID.randomUUID().toString().substring(0,5));
                System.out.println(list);
            },String.valueOf(i)).start();
        }
    }
}
```

Vector的add方法

CopyOnWriteArrayList的add方法
![在这里插入图片描述](http://stofu80ry.sabkt.gdipper.com/picture/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2pva2VyZGoyMzM=,size_16,color_FFFFFF,t_70#pic_center-1740645844903-38.png)

> CopyOnWriteArrayList比Vector厉害在哪里？⭐

- Vector是增删改查方法都加了synchronized保证同步，但是每个方法执行的时候都要去获得锁，性能就会大大下降
- 而CopyOnWriteArrayList 只是在增删改上加锁，但是读不加锁，在读方面的性能就好于Vector，CopyOnWriteArrayList支持读多写少的并发情况，读写分离，写时复制出一个新的数组，完成插入、修改或者移除操作后将新数组赋值给array

## Set不安全

多条线程执行set添加方法

```
public class SetUnSafe {    public static void main(String[] args) {        Set<String> set = new HashSet<>();        for (int i = 1; i <=30; i++) {            new Thread(()->{                set.add(UUID.randomUUID().toString().substring(0,5));                System.out.println(set);            },String.valueOf(i)).start();        }    }}
```


报错，线程不安全

### 解决方案

1. 使用Collections下的Collections.synchronizedSet(new HashSet<>());方法创建Set集合
2. 使用JUC下的CopyOnWriteArraySet方法

```java
public class SetUnSafe {
    public static void main(String[] args) {
       // Set<String> set = new HashSet<>();
        //Set<String> set=Collections.synchronizedSet(new HashSet<>());
        /**
         * 解决方案
         * 1. Set<String> set=Collections.synchronizedSet(new HashSet<>());
         * 2. Set<String> set=new CopyOnWriteArraySet<>();
         *
         */
        Set<String> set=new CopyOnWriteArraySet<>();
        for (int i = 1; i <=30; i++) {
            new Thread(()->{
                set.add(UUID.randomUUID().toString().substring(0,5));
                System.out.println(set);
            },String.valueOf(i)).start();
        }
    }
}
```

### HashSet底层是什么？

HashSet底层就是HashMap的底层实现原理，就只是加了个key不能被重复

```java
public HashSet() {
        map = new HashMap<>();
    }
// add set本质就是 map key是无法重复的！
public boolean add(E e) {
        return map.put(e, PRESENT)==null;
    }
private static final Object PRESENT = new Object();//不变的值

```

## HashMap不安全

![在这里插入图片描述](http://stofu80ry.sabkt.gdipper.com/picture/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2pva2VyZGoyMzM=,size_16,color_FFFFFF,t_70#pic_center-1740645844903-40.png)
并发异常测试

```java
public class MapUnSafe {
    public static void main(String[] args) {
        //map是这伴用的吗？不是，工作中不用 Hashmap
        //就认等价于什么？ new HashMap<>(16,0.75)
        Map<String, String> map = new HashMap<>();
        for (int i = 1; i <=10; i++) {
            new Thread(()->{
                map.put(Thread.currentThread().getName(),UUID.randomUUID().toString().substring(0,5));
                System.out.println(map);
            },String.valueOf(i)).start();
        }
    }
}
```

### 解决方案

1. 使用Collections下的Collections.**synchronizedMap**(new HashMap<>());方法处理并发
2. JUC下的**ConcurrentHashMap**方法

```java
public class MapUnSafe {
    public static void main(String[] args) {
        //map是这伴用的吗？不是，工作中不用 Hashmap
        //就认等价于什么？ new HashMap<>(16,0.75)
        // Map<String, String> map = new HashMap<>();
        //Map<String, String> map = Collections.synchronizedMap(new HashMap<>());
        /**
         * 解决方案
         * 1. Map<String, String> map = Collections.synchronizedMap(new HashMap<>());
         * 2. Map<String, String> map = new ConcurrentHashMap<>();
         */
        Map<String, String> map = new ConcurrentHashMap<>();
        for (int i = 1; i <=10; i++) {
            new Thread(()->{
                map.put(Thread.currentThread().getName(),UUID.randomUUID().toString().substring(0,5));
                System.out.println(map);
            },String.valueOf(i)).start();
        }
    }
}
```

# 常用的辅助类(必会)

## CountDownLatch

```java
public class CountDownLatchDemo {
    public static void main(String[] args) throws InterruptedException {
        // 总数是6，必须要执行任务的时候，再使用！
        CountDownLatch countDownLatch = new CountDownLatch(6);
        for (int i = 1; i <=6; i++) {
            new Thread(()->{
                System.out.println(Thread.currentThread().getName()+" Go out");
                countDownLatch.countDown();// 数量-1
            },String.valueOf(i)).start();
        }
        countDownLatch.await(); // 等待计数器归零，然后再向下执行
        System.out.println("Close Door");
        }
}
```

原理：
countDownLatch.countDown(); // 数量-1

countDownLatch.await(); // 等待计数器归零，然后再向下执行
每次有线程调用 countDown() 数量-1，假设计数器变为0，countDownLatch.await() 就会被唤醒，继续 执行！

## CyclicBarrier

加法计数器

```java
public class CyclicBarrierDemo {
    public static void main(String[] args) {
        /**
         * 集齐7颗龙珠召唤神龙
         */
        CyclicBarrier cyclicBarrier = new CyclicBarrier(7, () -> {
            System.out.println("召唤神龙成功");
        });
        for (int i = 1; i <=7; i++) {
            final int temp=i;
            new Thread(()->{
                System.out.println(Thread.currentThread().getName()+"收集了"+temp+"个龙珠");
                try {
                    cyclicBarrier.await();//等待
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } catch (BrokenBarrierException e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }
}
```

## Semaphore

Semaphore：信号量

```java
public class SemaphoreDemo {
    public static void main(String[] args) {
        // 限流
        Semaphore semaphore = new Semaphore(3);
        for (int i = 1; i <=6; i++) {
            new Thread(()->{
                //acquire()得到
                try {
                    semaphore.acquire();
                    System.out.println(Thread.currentThread().getName()+"得到车位");
                    TimeUnit.SECONDS.sleep(2);
                    System.out.println(Thread.currentThread().getName()+"离开车位");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }finally {
                    semaphore.release(); // release() 释放
                }
            },String.valueOf(i)).start();
        }
    }
}
```

原理：

- semaphore.acquire() 获得，假设如果已经满了，等待，等待被释放为止！
- semaphore.release(); 释放，会将当前的信号量释放 + 1，然后唤醒等待的线程！

作用： 多个共享资源互斥的使用！并发限流，控制大的线程数！

# 读写锁

## ReadWriteLock

```java
/**独占锁（写锁）
 * 一次只能被一个线程占有
 * 共享锁（读锁） 多个线程可以同时占有
 * 
 * ReadWriteLock
 * 读-读  可以共存！
 * 读-写  不能共存！
 * 写-写  不能共存！
 */
public class ReadWriteLockDemo {
    public static void main(String[] args) {
        MyCacheLock myCache = new MyCacheLock();
        for (int i = 1; i <= 5; i++) {
            int temp=i;
            new Thread(()->{
                myCache.put(temp+"",temp+"");
            },String.valueOf(i)).start();
        }
        for (int i = 1; i <= 5; i++) {
            int temp=i;
            new Thread(()->{
                myCache.get(temp+"");
            },String.valueOf(i)).start();
        }
    }
}
//加锁
class MyCacheLock{
    private volatile Map<String,Object> map= new HashMap<>();
    //读写锁：
    private ReadWriteLock readWriteLock= new ReentrantReadWriteLock();
    //存 写入的时候 只能有一个线程写入
    public void put(String key,Object value){
        readWriteLock.writeLock().lock();
        try {
            System.out.println(Thread.currentThread().getName()+"写入"+key);
            map.put(key,value);
            System.out.println(Thread.currentThread().getName()+"写入ok");
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            readWriteLock.writeLock().unlock();
        }
    }
    //读的时候允许多个线程
    public void get(String key){
        readWriteLock.readLock().lock();
        try {
            System.out.println(Thread.currentThread().getName()+"读取"+key);
            map.get(key);
            System.out.println(Thread.currentThread().getName()+"读取ok");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            readWriteLock.readLock().unlock();
        }
    }
}
//自定义缓存  没有加锁
class MyCache{
   private volatile Map<String,Object> map= new HashMap<>();
   public void put(String key,Object value){
        System.out.println(Thread.currentThread().getName()+"写入"+key);
        map.put(key,value);
        System.out.println(Thread.currentThread().getName()+"写入ok");
   }
    public void get(String key){
        System.out.println(Thread.currentThread().getName()+"读取"+key);
        map.get(key);
        System.out.println(Thread.currentThread().getName()+"读取ok");
    }
}
```

# 阻塞队列

什么情况下我们会使用 阻塞队列：多线程并发处理，线程池！
学会使用队列
添加、移除

## BlockingQueue

四组API⭐

| 方法         | 抛出异常  | 有返回值，不抛出异常 | 阻塞等待 | 超时等待  |
| ------------ | --------- | -------------------- | -------- | --------- |
| 添加         | add()     | offer()              | put()    | offer(,,) |
| 移除         | remove()  | poll()               | take()   | poll(,)   |
| 检测队首元素 | element() | peek()               | -        | -         |

### 会抛出异常

```java
public class Test {
      /**
     * 抛出异常
     */
    public void test1(){
        //队列的大小
        ArrayBlockingQueue arrayBlockingQueue = new ArrayBlockingQueue<>(3);
        System.out.println(arrayBlockingQueue.add("a"));
        System.out.println(arrayBlockingQueue.add("b"));
        System.out.println(arrayBlockingQueue.add("c"));
        /**
         * IllegalStateException抛出异常
         *  System.out.println(arrayBlockingQueue.add("d"));
         */
        System.out.println(arrayBlockingQueue.remove());
        System.out.println(arrayBlockingQueue.remove());
        System.out.println(arrayBlockingQueue.remove());
        /**队列大小只有3
         * NoSuchElementException抛出异常
         * System.out.println(arrayBlockingQueue.remove());
         */
    }
}
```

### 有返回值 不会抛出异常

```java
    /**
     * 有返回值 不会抛出异常
     */
    public void test2(){
        //队列的大小
        ArrayBlockingQueue arrayBlockingQueue = new ArrayBlockingQueue<>(3);
        System.out.println(arrayBlockingQueue.offer("a"));
        System.out.println(arrayBlockingQueue.offer("b"));
        System.out.println(arrayBlockingQueue.offer("c"));
        System.out.println(arrayBlockingQueue.offer("d"));
        System.out.println(arrayBlockingQueue.poll());
        System.out.println(arrayBlockingQueue.poll());
        System.out.println(arrayBlockingQueue.poll());
        System.out.println(arrayBlockingQueue.poll());
    }
```

### 检测队首元素

```java

        System.out.println("队首是"+arrayBlockingQueue.element());//检测队首元素 会抛出异常
        System.out.println("队首是"+arrayBlockingQueue.peek());//检测队首元素 不会抛出异常
```

### 等待 阻塞

```java
/**
     * 等待 阻塞
     *
     */
    public void test4() throws InterruptedException {
        ArrayBlockingQueue arrayBlockingQueue = new ArrayBlockingQueue<>(3);
        arrayBlockingQueue.put("a");
        arrayBlockingQueue.put("b");
        arrayBlockingQueue.put("c");
        //队列没有位置 d 会一值等待
        //arrayBlockingQueue.put("d");
        System.out.println(arrayBlockingQueue.take());
        System.out.println(arrayBlockingQueue.take());
        System.out.println(arrayBlockingQueue.take());
        // 没有元素 会一直等待
        System.out.println(arrayBlockingQueue.take());
    }
```

### 超时等待 自动退出

```java
/**
     * 超时等待
     *
     */
    public void test5() throws InterruptedException {
        ArrayBlockingQueue arrayBlockingQueue = new ArrayBlockingQueue<>(3);
        System.out.println(arrayBlockingQueue.offer("a"));
        System.out.println(arrayBlockingQueue.offer("b"));
        System.out.println(arrayBlockingQueue.offer("c"));
        System.out.println(arrayBlockingQueue.offer("d",2, TimeUnit.SECONDS));//等待超过两秒后 就退出
        System.out.println(arrayBlockingQueue.poll());
        System.out.println(arrayBlockingQueue.poll());
        System.out.println(arrayBlockingQueue.poll());
        System.out.println(arrayBlockingQueue.poll(2,TimeUnit.SECONDS));//等待超过两秒后 就退出
    }
```



## SynchronizedQueue

没有容量，
进去一个元素，必须等待取出来之后，才能再往里面放一个元素！
put、take

```java
/**
 * 同步队列 
 * 和其他的BlockingQueue 不一样， SynchronousQueue 不存储元素 
 * put了一个元素，必须从里面先take取出来，否则不能在put进去值！ 
 */
public class SynchronousQueueDemo {
    public static void main(String[] args) {
        BlockingQueue<String> blockingQueue = new SynchronousQueue<>(); // 同步队列
        new Thread(()->{
            try {
                System.out.println(Thread.currentThread().getName() + "put 1");
                blockingQueue.put("1");
                System.out.println(Thread.currentThread().getName() + "put 2");
                blockingQueue.put("2");
                System.out.println(Thread.currentThread().getName() + "put 3");
                blockingQueue.put("3");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        },"T1").start();
        new Thread(()->{
            try {
                TimeUnit.SECONDS.sleep(3);
                System.out.println(Thread.currentThread().getName()+"=>"+blockingQueue.take());
                TimeUnit.SECONDS.sleep(3);
                System.out.println(Thread.currentThread().getName()+"=>"+blockingQueue.take());
                TimeUnit.SECONDS.sleep(3);
                System.out.println(Thread.currentThread().getName()+"=>"+blockingQueue.take());
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        },"T2").start();
    }
}
```



# 线程池

> 池化技术

程序的运行，本质：占用系统的资源！ 优化资源的使用！=>池化技术
线程池、连接池、内存池、对象池///….. 创建、销毁。十分浪费资源
池化技术：事先准备好一些资源，有人要用，就来我这里拿，用完之后还给我。

**线程池的好处:**
1、降低资源的消耗
2、提高响应的速度
3、方便管理。

==线程复用、可以控制最大并发数、管理线程==



`ExecutorService` 提供了两种主要方法来提交任务：`submit()` 和 `execute()`。

## execute

`execute(Runnable command)`

- **功能**：用于执行一个没有返回值的任务。
- **参数**：接受一个 `Runnable` 对象。
- **返回值**：无（`void`）。
- **异常处理**：任何未捕获的异常都会导致线程终止，并且无法通过调用方法直接获取这些异常信息。

## submit

`submit(Callable<V> task)` 或 `submit(Runnable task, V result)`

- **功能**：用于执行一个**可以返回结果或抛出异常**的任务。
- **参数**：可以接受一个 `Callable` 或带有结果参数的 `Runnable`。
- **返回值**：返回一个 `Future<V>` 对象，可以**通过这个对象获取任务的结果**、检查任务状态或取消任务。
- **异常处理**：如果任务抛出了异常，可以通过 `Future.get()` 方法捕获并处理这些异常。



## 三个方法

**不要**使用Executor的三个方法SingleThreadExecutor、FixThreadExecutor、CachedThreadExecutor底层都是调用ThreadPoolExecutor

直接使用new ThreadPoolExecutor(七个参数)

```java
public class Demo1 {
    public static void main(String[] args) {
       // ExecutorService ThreadPool = Executors.newSingleThreadExecutor();//单个线程
       // ExecutorService ThreadPool = Executors.newFixedThreadPool(5);// 创建一 个固定的线程池的大小
        ExecutorService ThreadPool = Executors.newCachedThreadPool();// 可伸缩 的，遇强则强，遇弱则弱
        try {
           for (int i = 0; i < 10; i++) {
               ThreadPool.execute(()->{//使用了线程池之后，使用线程池来创建线程
                   System.out.println(Thread.currentThread().getName());
               });
           }
       }catch (Exception e){
           e.printStackTrace();
       }finally {
           // 线程池用完，程序结束，关闭线程池
           ThreadPool.shutdown();
       }
    }
}
```

本质调用的是ThreadPoolExecutor

```java
 public ThreadPoolExecutor(int corePoolSize,//核心线程池大小
                              int maximumPoolSize,//最大核心线程池大小
                              long keepAliveTime,//超时了没有人调用就会释放
                              TimeUnit unit,//超时单位
                              BlockingQueue<Runnable> workQueue,//拒绝策略
                              ThreadFactory threadFactory//线程工厂,创建线程的) {
        this(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue,
             threadFactory, defaultHandler);
    }
```



## 七大参数

corePoolSize：核心线程数。

maximumPoolSize：最大线程数。

keepAliveTime：空闲线程存活时间。

TimeUnit：时间单位。

BlockingQueue：线程池任务队列。

ThreadFactory：创建线程的工厂。

RejectedExecutionHandler：拒绝策略。



> 手动创建一个线程池

默认拒绝策略

```java
public class Demo1 {
    public static void main(String[] args) {
       // ExecutorService ThreadPool = Executors.newSingleThreadExecutor();//单个线程
       //ExecutorService ThreadPool = Executors.newFixedThreadPool(5);// 创建一 个固定的线程池的大小
      //ExecutorService ThreadPool = Executors.newCachedThreadPool();// 可伸缩 的，遇强则强，遇弱则弱
        ThreadPoolExecutor ThreadPool = new ThreadPoolExecutor(
                2,//核心线程池大小
                5,//最大核心线程池大小
                3,//超时了没有人调用就会释放
                TimeUnit.SECONDS,//超时单位
                new LinkedBlockingQueue<>(3),
                Executors.defaultThreadFactory(),//线程工厂,创建线程的
                new ThreadPoolExecutor.AbortPolicy()//默认的拒绝策略
        );
        /**
         * RejectedExecutionException 拒绝策略异常
         */
        try {
           for (int i = 1; i <=8; i++) {
               ThreadPool.execute(()->{//使用了线程池之后，使用线程池来创建线程
                   System.out.println(Thread.currentThread().getName());
               });
           }
       }catch (Exception e){
           e.printStackTrace();
       }finally {
           // 线程池用完，程序结束，关闭线程池
           ThreadPool.shutdown();
       }
    }
}
```



## 四种拒绝策略

‌**AbortPolicy**‌：这是线程池的默认拒绝策略。当任务无法被线程池执行时，会抛出RejectedExecutionException异常。

‌**CallerRunsPolicy**‌：当任务无法被线程池执行时，会直接在调用者线程中运行这个任务。如果调用者线程正在执行一个任务，则会创建一个新线程来执行被拒绝的任务。

‌**DiscardPolicy**‌：当任务无法被线程池执行时，任务将被丢弃，不抛出异常，也不执行任务。

‌**DiscardOldestPolicy**‌：当任务无法被线程池执行时，线程池会丢弃队列中最旧的任务，然后尝试再次提交当前任务。

```java
/** new ThreadPoolExecutor.AbortPolicy() // 银行满了，还有人进来，不处理这个人的，抛出异 常
 *  new ThreadPoolExecutor.CallerRunsPolicy() // 哪来的去哪里！
 *  new ThreadPoolExecutor.DiscardPolicy() //队列满了，丢掉任务，不会抛出异常！ 
 *  new ThreadPoolExecutor.DiscardOldestPolicy() //队列满了，尝试去和早的竞争，也不会 抛出异常！ 
 * */
```

# 四大函数式接口（必需掌握）⭐

新时代的程序员：lambda表达式、链式编程、函数式接口、Stream流式计算

> 函数式接口： 只有一个方法的接口



```java
@FunctionalInterface 
public interface Runnable {    
public abstract void run(); 
} 
// 泛型、枚举、反射 
// lambda表达式、链式编程、函数式接口、Stream流式计算
 // 超级多FunctionalInterface 
 // 简化编程模型，在新版本的框架底层大量应用！ 
 // foreach(消费者类的函数式接口)
```

## Function函数式接口

```java
/**
 * 函数型接口
 */
public class Demo01 {
    public static void main(String[] args) {
      /* Function<String,String> function = new Function<String, String>() {
            @Override
            public String apply(String s) {
                return null;
            }
        };*/
       //lamda表达式
        Function<String,String> function = (str)->{return str;};
        System.out.println(function.apply("asd"));
    }
}
```



## 断定型接口

有一个输入参数，返回值只能是 布尔值！

```java
public class Demo2 {
    public static void main(String[] args) {
        /*Predicate<String> predicate = new Predicate<String>() {
            // 判断字符串是否为空
            @Override
            public boolean test(String s) {
                return s.isEmpty();
            }
        };*/
        Predicate<String> predicate = (str)->{return str.isEmpty(); };
        System.out.println(predicate.test(""));
    }
}
```

## Consumer 消费型接口

```java
/**
 * Consumer 消费型接口: 只有输入，没有返回值
 */
public class Demo3 {
    public static void main(String[] args) {
       /* Consumer<String> consumer = new Consumer<String>() {
            @Override
            public void accept(String o) {
                System.out.println(o);
            }
        };*/
        Consumer<String> consumer = (str)->{System.out.println(str);};
        consumer.accept("sss");
    }
}
```

## Supplier 供给型接口

```java
/**
 * Supplier  供给型接口
 */
public class Demo4 {
    public static void main(String[] args) {
       /* Supplier<Integer> supplier = new Supplier<Integer>() {
            @Override
            public Integer get() {
                return 1024;
            }
        };*/
        Supplier supplier = ()->{ return 1024; };
        System.out.println(supplier.get());
    }
}
```

# Stream流式计算⭐

> 什么是Stream流式计算

大数据：存储 + 计算
集合、MySQL 本质就是存储东西的；
计算都应该交给流来操作！

```java
/**
 * 题目要求：一分钟内完成此题，只能用一行代码实现！
 * 现在有5个用户！筛选：
 * 1、ID 必须是偶数
 * 2、年龄必须大于23岁
 * 3、用户名转为大写字母
 * 4、用户名字母倒着排序
 * 5、只输出一个用户！
 **/
public class StreamPage {
    public static void main(String[] args) {
        User user1 = new User(1,"张三",21);
        User user2 = new User(2,"李四",25);
        User user3 = new User(3,"王五",22);
        User user4 = new User(4,"赵六",23);
        User user5 = new User(5,"孙七",24);
        // 集合就是存储
        List<User> list= Arrays.asList(user1,user2,user3,user4,user5);
        // 计算交给Stream流
        // lambda表达式、链式编程、函数式接口、Stream流式计算
        list.stream()
                .filter(user -> {return user.getId()%2==0;})//1、ID 必须是偶数
                .filter(user -> {return user.getAge()>23;})//2、年龄必须大于23岁
                .map(user -> {return user.getName().toUpperCase();})//3、用户名转为大写字母
                .sorted((u1,u2)->{return u2.compareTo(u1);})//4、用户名字母倒着排序
                .limit(1)//5、只输出一个用户！
                .forEach(System.out::println);
    }
}
@Data
@AllArgsConstructor
class User{
    private int Id;
    private String name;
    private int age;
}
```



# ForkJoin

Java 7 引入的一种并行编程框架，旨在通过分治法（Divide and Conquer）来高效地执行任务。	

ForkJoin 框架的核心类

- ForkJoinPool

- ForkJoinTask，
  - 常用的两种任务类型
  - `RecursiveTask<V>`
    - 返回结果的任务。
  - `RecursiveAction`
    - 不返回结果的任务。

- **fork() 和 join()**
  - 启动子任务和等待子任务完成。
  - **fork()**：安排一个新的任务异步执行。
  - **join()**：等待子任务完成并获取其结果（对于 `RecursiveTask`）或只是等待完成（对于 `RecursiveAction`）。

```java
/**
 *  求和计算的任务！
 *  3000   6000（ForkJoin）  9000（Stream并行流）
 * 如何使用 forkjoin
 * 1、forkjoinPool 通过它来执行
 * 2、计算任务 forkjoinPool.execute(ForkJoinTask task)
 * 3. 计算类要继承 ForkJoinTask
 * */
public class ForkJoinDemo  extends RecursiveTask<Long> {
    private Long start;  // 1
    private Long end;    // 1990900000
    // 临界值
    private Long temp = 10000L;
    public ForkJoinDemo(Long start, Long end) {
        this.start = start;
        this.end = end;
    }
    /**
     * 计算方法
     * @return
     */
    @Override
    protected Long compute() {
        if((end-start)<temp){
            Long sum=0L;
            for (Long i = start; i < end; i++) {
                sum+=i;
            }
            return sum;
        }else { // forkjoin 递归
            long middle = (start + end) / 2; // 中间值
            ForkJoinDemo task1 = new ForkJoinDemo(start, middle);
            task1.fork(); // 拆分任务，把任务压入线程队列
            ForkJoinDemo task2 = new ForkJoinDemo(middle+1, end);
            task2.fork(); // 拆分任务，把任务压入线程队列
            return task1.join() + task2.join();
        }
    }
}
```



# Future

## CompletableFuture

### runAsync

用于执行不返回结果的任务，

```java
public static CompletableFuture<Void> runAsync(Runnable runnable)
public static CompletableFuture<Void> runAsync(Runnable runnable, Executor executor)
```

### SupplyAsync

执行返回结果的任务，

```java
public static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier)
public static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier, Executor executor)
```

```java
/**
 * 异步调用： CompletableFuture
 * 异步执行
 * 成功回调
 * 失败回调
 * */
public class FutureDemo {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        //发送一个请求
        // 没有返回值的 runAsync 异步回调
       /* CompletableFuture<Void> completableFuture = CompletableFuture.runAsync(() -> {
            try {
                TimeUnit.SECONDS.sleep(2);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(Thread.currentThread().getName()+"runAsync=>void");
        });
        System.out.println("1111");
        completableFuture.get();//获取阻塞执行结果*/
        // 有返回值的 supplyAsync 异步回调
        // ajax，成功和失败的回调
        // 返回的是错误信息；
        CompletableFuture<Integer> completableFuture = CompletableFuture.supplyAsync(()->{
            System.out.println(Thread.currentThread().getName()+"supplyAsync=>Integer");
            int i = 10/0;
            return 200;
        });
        System.out.println(completableFuture.whenComplete((t, u) -> {
            System.out.println("t=>" + t); // 正常的返回结果            
            System.out.println("u=>" + u); // 错误信息： java.util.concurrent.CompletionException: java.lang.ArithmeticException: / by zero
            }).exceptionally((e) -> {
                System.out.println(e.getMessage());
                return 505; // 可以获取到错误的返回结果
            }).get());
    }
}
```


- - -

# JMM⭐⭐

JAVA 内存模型（java memory model）。

因为在不同的硬件生产商和不同的操作系统下，内存的访问逻辑有一定的差异，结果就是当你的代码在某个系统环境下运行良好，并且线程安全，但是换了个系统就出现各种问题。

Java内存模型，就是为了屏蔽系统和硬件的差异，让一套代码在不同平台下能到达相同的访问结果。

JVM在设计时候考虑到，如果JAVA线程每次读取和写入变量都直接操作主内存，对性能影响比较大，所以每条线程拥有各自的工作内存，工作内存中的变量是主内存中的一份拷贝，线程对变量的读取和写入，直接在工作内存中操作，而不能直接去操作主内存中的变量。但是这样就会出现一个问题，当一个线程修改了自己工作内存中变量，对其他线程是不可见的，会导致线程不安全的问题。因为JMM制定了一套标准来保证开发者在编写多线程程序的时候，能够控制什么时候内存会被同步给其他线程。

JMM ： Java内存模型，不存在的东西，概念！约定！

**关于JMM的一些同步的约定：**
1、线程解锁前，必须把共享变量立刻刷回主存。
2、线程加锁前，必须读取主存中的新值到工作内存中！
3、加锁和解锁是同一把锁

线程 工作内存 、主内存

8种操作：

## 内存交互操作

**内存交互操作有8种，虚拟机实现必须保证每一个操作都是原子的，不可在分的（对于double和long类 型的变量来说，load、store、read和write操作在某些平台上允许例外）**

- - lock   （锁定）：作用于主内存的变量，把一个变量标识为线程独占状态
  - unlock （解锁）：作用于主内存的变量，它把一个处于锁定状态的变量释放出来，释放后的变量才可以被其他线程锁定
  - read  （读取）：作用于主内存变量，它把一个变量的值从主内存传输到线程的工作内存中，以便随后的load动作使用
  - load   （载入）：作用于工作内存的变量，它把read操作从主存中变量放入工作内存中
  - use   （使用）：作用于工作内存中的变量，它把工作内存中的变量传输给执行引擎，每当虚拟机遇到一个需要使用到变量的值，就会使用到这个指令
  - assign （赋值）：作用于工作内存中的变量，它把一个从执行引擎中接受到的值放入工作内存的变量副本中
  - store  （存储）：作用于主内存中的变量，它把一个从工作内存中一个变量的值传送到主内存中，以便后续的write使用
  - write 　（写入）：作用于主内存中的变量，它把store操作从工作内存中得到的变量的值放入主内存的变量中

**JMM对这八种指令的使用，制定了如下规则：**

- - 不允许read和load、store和write操作之一单独出现。即使用了read必须load，使用了store必须write
  - 不允许线程丢弃他最近的assign操作，即工作变量的数据改变了之后，必须告知主存
  - 不允许一个线程将没有assign的数据从工作内存同步回主内存
  - 一个新的变量必须在主内存中诞生，不允许工作内存直接使用一个未被初始化的变量。就是怼变量实施use、store操作之前，必须经过assign和load操作
  - 一个变量同一时间只有一个线程能对其进行lock。多次lock后，必须执行相同次数的unlock才能解锁
  - 如果对一个变量进行lock操作，会清空所有工作内存中此变量的值，在执行引擎使用这个变量前，必须重新load或assign操作初始化变量的值
  - 如果一个变量没有被lock，就不能对其进行unlock操作。也不能unlock一个被其他线程锁住的变量
  - 对一个变量进行unlock操作之前，必须把此变量同步回主内存

# Volatile&synchronized⭐

- volatile是java虚拟机提供的轻量级同步机制

  - 保证可见性


    - **不保证原子性**



    - 禁止指令重排

- synchronized

  - 保证可见性


    - **保证原子性**


    - 禁止指令重排


- 不使用synchronized和lock怎么保证原子性
  - atomicInteger
    - getAndIncrement()
    - 底层与操作系统有关，直接修改内存的值

## 保证可见性

### synchronized

synchronized也可以保证可见性

```java
public class JMMDemo {
    // 不加 volatile 程序就会死循环！
    // 加 volatile 可以保证可见性
    private volatile static int num = 0;
    public static void main(String[] args) {
        new Thread(() -> { // 线程 1 对主内存的变化不知道的
            while (num == 0) {
            }
        }).start();
        try {
            TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        num = 1;
        System.out.println(num);
    }
}
```

## 不保证原子性

原子性 : 不可分割
线程A在执行任务的时候，不能被打扰的，也不能被分割。要么同时成功，要么同时失败

```java
public class VDemo02 {
    private volatile static int num = 0;
    public static void add(){
        num++;
    }
    public static void main(String[] args) {
        //理论上num结果应该为 2 万
        for (int i = 1; i <= 20; i++) {
            new Thread(()->{
                for (int j = 0; j < 1000; j++) {
                    add();
                }
            }).start();
        }
        while (Thread.activeCount() > 2) {
            Thread.yield();
        }
        System.out.println(Thread.currentThread().getName() + "" + num);
    }
}
```

如果不加 lock 和 synchronized ，怎么样保证原子性

使用原子类，解决 原子性问题

```java
public class VDemo02 {
    // 原子类的 Integer
    private volatile static AtomicInteger num = new AtomicInteger();
    public static void add(){
//        num++;
        num.getAndIncrement(); // AtomicInteger + 1 方法， CAS 
    }
    public static void main(String[] args) {
        //理论上num结果应该为 2 万
        for (int i = 1; i <= 20; i++) {
            new Thread(()->{
                for (int j = 0; j < 1000; j++) {
                    add();
                }
            }).start();
        }
        while (Thread.activeCount() > 2) {
            Thread.yield();
        }
        System.out.println(Thread.currentThread().getName() + "" + num);
    }
}
```

## 指令重排

什么是 指令重排：你写的程序，**计算机并不是按照你写的那样去执行的。**
源代码—>编译器优化的重排—> 指令并行也可能会重排—> 内存系统也会重排—-> 执行
**处理器在进行指令重排的时候，考虑：数据之间的依赖性！**

**volatile可以避免指令重排：**
内存屏障。CPU指令。作用：
1、保证特定的操作的执行顺序！
2、可以保证某些变量的内存可见性 （利用这些特性volatile实现了可见性）

**Volatile 是可以保持 可见性。不能保证原子性，由于内存屏障，可以保证避免指令重排的现象产生**

### 内存屏障

内存屏障主要分为以下几类：

1. **LoadLoad 屏障**：
   - 确保在此屏障之前的读操作（Load）先于在此屏障之后的读操作完成。
   - 语法示例：`LoadLoad`
2. **StoreStore 屏障**：
   - 确保在此屏障之前的写操作（Store）先于在此屏障之后的写操作完成。
   - 语法示例：`StoreStore`
3. **LoadStore 屏障**：
   - 确保在此屏障之前的读操作（Load）先于在此屏障之后的写操作（Store）完成。
   - 语法示例：`LoadStore`
4. **StoreLoad 屏障**：
   - 确保在此屏障之前的写操作（Store）先于在此屏障之后的读操作（Load）完成。
   - 这是最常用的屏障类型之一，因为它不仅防止了写操作和读操作之间的重排序，还确保了写操作对其他线程的可见性。
   - 语法示例：`StoreLoad`

### `volatile` 

在写入 `volatile` 变量时，JVM会在写操作之前插入一个 `StoreStore` 屏障，并在写操作之后插入一个 `StoreLoad` 屏障。

在读取 `volatile` 变量时，JVM会在读操作之前插入一个 `LoadLoad` 屏障，并在读操作之后插入一个 `LoadStore` 屏障。

写屏障(sfence)

保证在该屏障之前的，对共享变量的改动，都同步到主存当中

```java
public void actor2(I_Result r){
    num 2;
    ready = true;//ready是volatile赋值带写屏暗
    //写屏障
}
```

而读屏障(lfence) 保证在该屏障之后，对共享变量的读取，加载的是主存中最新数据

```java
public void actor1(I_Result r){
    //读屏障
    //ready是volati1e读取值带读屏障
    if(ready){
    	r.r1 = num + num;
    }
    else{
    	r.r1=1;
    }
}
```



### `synchronized` 

进入 `synchronized` 块时，JVM会插入一个 `MonitorEnter` 指令，相当于一个内存屏障。

退出 `synchronized` 块时，JVM会插入一个 `MonitorExit` 指令，也相当于一个内存屏障。

# 彻底玩转单例模式⭐⭐

饿汉式 DCL懒汉式，深究！

## 饿汉式

```java
public class Hungry {
    private byte[] data1 = new byte[1024*1024];
    private byte[] data2 = new byte[1024*1024];
    private byte[] data3 = new byte[1024*1024];
    private byte[] data4 = new byte[1024*1024];
    private Hungry(){
    }
    private final static Hungry HUNGRY = new Hungry();
    public static Hungry getInstance(){
        return HUNGRY;
    }
}
```

```java
// 问题1：为什么加 final
// 问题2：如果实现了序列化接口, 还要做什么来防止反序列化破坏单例
public final class Singleton implements Serializable {
    // 问题3：为什么设置为私有? 是否能防止反射创建新的实例?
    private Singleton() {}
    // 问题4：这样初始化是否能保证单例对象创建时的线程安全?
    private static final Singleton INSTANCE = new Singleton();
    // 问题5：为什么提供静态方法而不是直接将 INSTANCE 设置为 public, 说出你知道的理由
    public static Singleton getInstance() {
    	return INSTANCE;
    }
    public Object readResolve() {
    	return INSTANCE;
	}
}
```



## DCL 懒汉式

```java
public class LazyMan {
    private static boolean joker = false;
    private LazyMan(){
        synchronized (LazyMan.class){
            if (joker == false){
                joker = true;
            }else {
                throw new RuntimeException("不要试图使用反射破坏异常");
            }
        }
    }
    private volatile static LazyMan lazyMan;
    // 双重检测锁模式的 懒汉式单例  DCL懒汉式
    public static LazyMan getInstance(){
        if (lazyMan==null){
            synchronized (LazyMan.class){
                if (lazyMan==null){
                    lazyMan = new LazyMan(); // 不是一个原子性操作
                     }
                }
            }
                return lazyMan;
        }
    // 反射！
    public static void main(String[] args) throws NoSuchFieldException, NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        //        LazyMan instance = LazyMan.getInstance();
        Field joker = LazyMan.class.getDeclaredField("joker");
        joker.setAccessible(true);
        Constructor<LazyMan> declaredConstructor = LazyMan.class.getDeclaredConstructor(null);
        declaredConstructor.setAccessible(true);
        LazyMan instance = declaredConstructor.newInstance();
        joker.set(instance,false);
        LazyMan instance2 = declaredConstructor.newInstance();
        System.out.println(instance);
        System.out.println(instance2);
    }
}
```

## DCL 需要volatile

防止构造函数在赋值后执行，写屏障在赋值后，构造函数就不能被重排序到写屏障后

## 静态内部类

```java
public class Holder {
    public Holder() {
    }
    public static Holder getInstace(){
        return InnerClass.HOLDER;
    }
    public static class InnerClass{   
        private static final Holder HOLDER = new Holder(); 
    }
}
```

单例不安全，可以反射

## 枚举

```java
public enum EnumSingle {
    INSTANCE;
    public EnumSingle getInstance(){
        return INSTANCE;
    }
}
class Test {
    public static void main(String[] args) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, InvocationTargetException {
        EnumSingle instance1 = EnumSingle.INSTANCE;
        Constructor<EnumSingle> declaredConstructor = EnumSingle.class.getDeclaredConstructor(String.class, int.class);
        declaredConstructor.setAccessible(true);
        EnumSingle instance2 = declaredConstructor.newInstance();
        System.out.println(instance1);
        System.out.println(instance2);
    }
}
```

# 深入理解CAS⭐⭐

CAS需要配合volatile使用

## 什么是 CAS

大厂你必须要深入研究底层！有所突破！ **修内功，操作系统，计算机网络原理**

```java
public class CASDemo {
    // CAS  compareAndSet : 比较并交换！
    public static void main(String[] args) {
        AtomicInteger atomicInteger = new AtomicInteger(2020);
        //！！！这里不能使用2020，因为2020会装箱和get得到的对象不相同，导致判断为false
        // 期望、更新
        // public final boolean compareAndSet(int expect, int update)
        // 如果我期望的值达到了，那么就更新，否则，就不更新, CAS 是CPU的并发原语！
        System.out.println(atomicInteger.compareAndSet(2020, 2021));
        System.out.println(atomicInteger.get());
        atomicInteger.getAndIncrement();
        System.out.println(atomicInteger.compareAndSet(2020, 2021));
        System.out.println(atomicInteger.get());
    }
}
```

## Unsafe 类

![在这里插入图片描述](http://stofu80ry.sabkt.gdipper.com/picture/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2pva2VyZGoyMzM=,size_16,color_FFFFFF,t_70#pic_center-1740641917952-4.png)
![在这里插入图片描述](http://stofu80ry.sabkt.gdipper.com/picture/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2pva2VyZGoyMzM=,size_16,color_FFFFFF,t_70#pic_center-1740641917953-5.png)
CAS ： 比较当前工作内存中的值和主内存中的值，如果这个值是期望的，那么则执行操作！如果不是就 一直循环！
**缺点：**
1、 循环会耗时
2、一次性只能保证一个共享变量的原子性
3、ABA问题

> CAS ： ABA 问题（狸猫换太子）
> ![在这里插入图片描述](http://stofu80ry.sabkt.gdipper.com/picture/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2pva2VyZGoyMzM=,size_16,color_FFFFFF,t_70#pic_center-1740641917953-6.png)

```java
public class CASDemo {
    // CAS  compareAndSet : 比较并交换！
    public static void main(String[] args) {
        AtomicInteger atomicInteger = new AtomicInteger(2020);
        // 期望、更新
        // public final boolean compareAndSet(int expect, int update)
        // 如果我期望的值达到了，那么就更新，否则，就不更新, CAS 是CPU的并发原语！
        // ============== 捣乱的线程 ==================
        System.out.println(atomicInteger.compareAndSet(2020, 2021));
        System.out.println(atomicInteger.get());
        System.out.println(atomicInteger.compareAndSet(2021, 2020));
        System.out.println(atomicInteger.get());
        // ============== 期望的线程 ==================
        System.out.println(atomicInteger.compareAndSet(2020, 6666));
        System.out.println(atomicInteger.get());
    }
}
```

# 各种锁的理解⭐⭐

## 公平锁、非公平锁

公平锁： 非常公平， 不能够插队，必须先来后到！ 非公平锁：非常不公平，可以插队 （默认都是非公平）

```java
public ReentrantLock() {    
    sync = new NonfairSync();
 }
public ReentrantLock(boolean fair) { 
   sync = fair ? new FairSync() : new NonfairSync(); 
   }
```

## 可重入锁

可重入锁（递归锁）
![在这里插入图片描述](http://stofu80ry.sabkt.gdipper.com/picture/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2pva2VyZGoyMzM=,size_16,color_FFFFFF,t_70#pic_center-1740641917953-7.png)

### Synchronized版

```java
public class Demo01 {
    public static void main(String[] args) {
        Phone phone = new Phone();
        new Thread(()->{
            phone.sms();
            },"A").start();
        new Thread(()->{
            phone.sms();
            },"B").start();
    }
}
class Phone{
    public synchronized void sms(){
        System.out.println(Thread.currentThread().getName() + "sms");
        call(); // 这里也有锁
    }
        public synchronized void call(){
        System.out.println(Thread.currentThread().getName() + "call");
    }
}
```

### Lock 版

```java
public class Demo02 {
    public static void main(String[] args) {
        Phone2 phone = new Phone2();
        new Thread(()->{
            phone.sms();
            },"A").start();
        new Thread(()->{
            phone.sms();
            },"B").start();
    }
}
class Phone2{
    Lock lock = new ReentrantLock();
    public void sms(){
        lock.lock(); // 细节问题：lock.lock(); lock.unlock(); // lock 锁必须配对，否 则就会死在里面
        try {
            System.out.println(Thread.currentThread().getName() + "sms");
            call(); // 这里也有锁
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            lock.unlock();
        }
    }
    public void call() {
        lock.lock();
        try {
            System.out.println(Thread.currentThread().getName() + "call");
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            lock.unlock();
        }
    }
}
```

## 自旋锁

spinlock
自定义一个锁测试

![在这里插入图片描述](http://stofu80ry.sabkt.gdipper.com/picture/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2pva2VyZGoyMzM=,size_16,color_FFFFFF,t_70#pic_center-1740641917953-8.png)
测试

```java
public class TestSpinLock {
    public static void main(String[] args) throws InterruptedException {
        //        ReentrantLock reentrantLock = new ReentrantLock();
        //        reentrantLock.lock();
        //        reentrantLock.unlock();
        // 底层使用的自旋锁CAS
        SpinlockDemo lock = new SpinlockDemo();
        new Thread(()-> {
            lock.myLock();
            try {
                TimeUnit.SECONDS.sleep(5);
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                lock.myUnLock();
            }
        },"T1").start();
        TimeUnit.SECONDS.sleep(1);
        new Thread(()-> {
            lock.myLock();
            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                lock.myUnLock();
            }
        },"T2").start();
    }
}
```

![在这里插入图片描述](http://stofu80ry.sabkt.gdipper.com/picture/2020081715560346.png)

## 死锁⭐

死锁是什么
![在这里插入图片描述](http://stofu80ry.sabkt.gdipper.com/picture/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2pva2VyZGoyMzM=,size_16,color_FFFFFF,t_70#pic_center-1740641917953-9.png)
死锁测试，怎么排除死锁：

```java
public class DeadLockDemo {
    public static void main(String[] args) {
        String lockA = "lockA";
        String lockB = "lockB";
        new Thread(new MyThread(lockA, lockB), "T1").start();
        new Thread(new MyThread(lockB, lockA), "T2").start();
    }
}
class MyThread implements Runnable{
    private String lockA;
    private String lockB;
    public MyThread(String lockA, String lockB) {
        this.lockA = lockA;
        this.lockB = lockB;
    }
    @Override
    public void run() {
        synchronized (lockA){
            System.out.println(Thread.currentThread().getName() + "lock:"+lockA+"=>get"+lockB);
            try {
                TimeUnit.SECONDS.sleep(2);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            synchronized (lockB){
                System.out.println(Thread.currentThread().getName() + "lock:"+lockB+"=>get"+lockA);
            }
        }
    }
}
```



> 解决问题⭐

1、使用 jps -l 定位进程号
cmd 窗口 输入 jps -l
![在这里插入图片描述](http://stofu80ry.sabkt.gdipper.com/picture/20200817160017457.png)
2、使用 jstack 进程号 找到死锁问题
![在这里插入图片描述](http://stofu80ry.sabkt.gdipper.com/picture/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2pva2VyZGoyMzM=,size_16,color_FFFFFF,t_70#pic_center-1740642325649-24.png)
