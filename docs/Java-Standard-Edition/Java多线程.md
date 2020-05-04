# Java多线程

  * [一、什么是线程](#一什么是线程)
     * [1.1 什么是进程](#11-什么是进程)
     * [1.2 什么是线程](#12-什么是线程)
  * [二、线程的组成](#二线程的组成)
     * [2.1 线程的组成](#21-线程的组成)
     * [2.2 创建线程的第一种方式（入门）](#22-创建线程的第一种方式入门)
     * [2.3 创建线程的第二种方式（入门）](#23-创建线程的第二种方式入门)
  * [三、线程的状态](#三线程的状态)
     * [3.1 线程的基本状态](#31-线程的基本状态)
     * [3.2 常见方法（sleep、yield、join）](#32-常见方法sleepyieldjoin)
     * [3.3 线程的状态（等待）](#33-线程的状态等待)
  * [四、线程安全](#四线程安全)
     * [4.1 线程安全问题](#41-线程安全问题)
     * [4.2 解决线程安全问题的方法](#42-解决线程安全问题的方法)
        * [4.2.1 同步方式（1）：同步代码块](#421-同步方式1同步代码块)
        * [4.2.2 线程的状态（阻塞）](#422-线程的状态阻塞)
        * [4.2.3 同步方式（2）：同步代码块](#423-同步方式2同步代码块)
  * [五、经典问题（死锁、生产者与消费者）](#五经典问题死锁生产者与消费者)
  * [六、线程通信（wait、notify）](#六线程通信waitnotify)
  * [七、线程池](#七线程池)
     * [7.1 线程池概念](#71-线程池概念)
     * [7.2 线程池原理](#72-线程池原理)
     * [7.3 获取线程池](#73-获取线程池)
     * [7.4 Callable接口](#74-callable接口)
     * [7.5 Future接口](#75-future接口)
        * [7.5.1 线程的同步](#751-线程的同步)
        * [7.5.2 线程的异步](#752-线程的异步)
     * [7.6 Lock接口](#76-lock接口)
     * [7.7 重入锁](#77-重入锁)
     * [7.8 读写锁](#78-读写锁)
  * [八、线程安全的集合](#八线程安全的集合)
     * [8.1 Collection体系集合](#81-collection体系集合)
     * [8.1 Collection中的工具方法](#81-collection中的工具方法)
     * [8.2 CopyOnWriteArrayList](#82-copyonwritearraylist)
     * [8.3 CopyOnWriteArraySet](#83-copyonwritearrayset)
     * [8.4 ConcurrentHashMap](#84-concurrenthashmap)
     * [8.5 Queue接口（队列）](#85-queue接口队列)
     * [8.6 ConcurrentLinkedQueue](#86-concurrentlinkedqueue)
     * [8.7 BlockingQueue接口（阻塞）](#87-blockingqueue接口阻塞)
        * [8.7.1 阻塞队列](#871-阻塞队列)
     * [8.8 集合接口总结](#88-集合接口总结)

------

## 一、什么是线程
### 1.1 什么是进程
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200504094318.png)



### 1.2 什么是线程

 - 线程，又称轻量级进程（Light Weight Process）
 - 程序中的一个顺序控制流程，同时也是CPU的基本调度单位
 - **比如：**
	* 迅雷是一个进程，当中的多个下载任务就是多个线程
	* Java虚拟机是一个进程，当中默认包含主线程（Main函数），可通过代码创建多个独立线程，与Main并发执行
***
<a id="2"> </a>
## 二、线程的组成

### 2.1 线程的组成

 - **任何一个线程都具有基本的组成部分：**
	* **CPU时间片：** 操作系统（OS）会为每个线程分配时间
	* **运行数据：**
		+ **堆空间：** 存储线程需使用的对象，多个线程可以共享堆中的对象
		+ **栈空间：** 存储线程需使用的局部变量，每个线程都拥有独立的栈
	* **线程的逻辑代码**



### 2.2 创建线程的第一种方式（入门）

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503211127.png)



### 2.3 创建线程的第二种方式（入门）

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503211139.png)
***
<a id="3"> </a>
## 三、线程的状态
### 3.1 线程的基本状态
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200311174212105.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE3MDIyMQ==,size_16,color_FFFFFF,t_70)



### 3.2 常见方法（sleep、yield、join）

 - **休眠：**
	* public static void sleep(long millis)
	* 当前线程主动休眠millis毫秒（<font color="red">**注意：**</font>1000毫秒=1秒）
```java
//public static void sleep
public class TestSleep {
	public static void main(String[] args) throws InterruptedException {
		MyThread t1 = new MyThread();
		t1.start();

		MyRunnable task = new MyRunnable();
		Thread t2 = new Thread(task);
		t2.start();

		// main线程
		for (int i = 1; i <= 20; i++) {// 线程任务
			System.out.println(Thread.currentThread().getName() + " - " + i);
			if (i == 10) {// 指定一下休眠条件
				// 通知完t1后，main线程休眠2秒
				Thread.sleep(2000);// 有限期等待。等待时间由参数的毫秒值决定
			}
		}
	}
}

class MyThread extends Thread {// 线程类
	public void run() {
		for (int i = 1; i <= 20; i++) {// 线程任务
			// 获得当前线程的线程名称
			System.out.println(Thread.currentThread().getName() + " - " + i);
		}
	}
}

class MyRunnable implements Runnable {
	public void run() {
		for (int i = 1; i <= 20; i++) {// 线程任务
			// 获取当前线程的线程名称
			if (i % 2 == 0) {
				System.out.println("线程2得到了偶数！休眠了！");
			}
			try {
				Thread.sleep(1000);// 如果写在run方法里，那么只能通过tryCatch处理异常。遵循异常方法的覆盖原则
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			System.out.println(Thread.currentThread().getName() + " - " + i);
		}
	}
}
```
 - **放弃：**
	* public static void yield()
	* 当前线程主动放弃时间片，回到就绪状态，竞争下一次时间片
```java
//public static void yield()
public class TestYield {
	public static void main(String[] args) {
		Thread t1 = new Thread(new Task());
		t1.start();

		//main线程
		for (int i = 1; i <= 20; i++) {//线程任务
			System.out.println(Thread.currentThread().getName() + " - " + i);
			if (i % 10 == 0) {//放弃的条件（特定时候放弃时间片）
				System.out.println("main主动放弃了！");
				Thread.yield();//放弃！主动放弃当前持有的时间片，回到就绪状态，进入下一次时间片的竞争！
			}
		}
	}
}

class Task implements Runnable {//线程类
	public void run() {//线程任务
		for (int i = 1; i <= 20; i++) {
			System.out.println(Thread.currentThread().getName() + " - " + i);
		}
	}
}
```

 - **结合：**
	* public final void join()
	* 允许其他线程加入到当前线程中，等待加入的线程执行完毕后，此线程再去竞争时间片执行
```java
//public final void join()
public class TestJoin {
	public static void main(String[] args) throws InterruptedException {
		Thread t0 = new Thread(new Task());
		t0.start();

		for (int i = 1; i <= 10; i++) {//打印10个数字
			System.out.println(Thread.currentThread().getName() + " - " + i);//打印线程名字和数字
			if (i == 5) {//将t0加入到main线程执行流程中，等待t1线程执行结束后！main再进行竞争时间片！
				t0.join();//无限期等待！等待条件为调用join方法的线程执行完毕后！再进入就绪状态，竞争时间片！
			}
		}
	}
}

class Task implements Runnable {//线程实现类——Thread-0
	public void run() {//线程任务
		for (int i = 1; i <= 10; i++) {//打印10个数字
			System.out.println(Thread.currentThread().getName() + " - " + i);//打印线程名字和数字
		}
	}
}
```



### 3.3 线程的状态（等待）

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503211237.png)
***
<a id="4"> </a>
## 四、线程安全
### 4.1 线程安全问题
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503211311.png)



### 4.2 解决线程安全问题的方法

#### 4.2.1 同步方式（1）：同步代码块

```java
	synchronized(临界资源对象) {//对临界资源对象加锁
		//代码（原子操作）
	}
```

 - <font color="red">**注意：**</font>
	* 每个对象都有一个互斥锁标记，用来分给线程的
	* 只有拥有对象互斥锁标记的线程，才能进入对该对象加锁的同步代码块
	* 线程退出同步代码块时，会释放相应的互斥锁标记

#### 4.2.2 线程的状态（阻塞）

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503211408.png)

#### 4.2.3 同步方式（2）：同步代码块

```java
	synchronized 返回值类型 方法名称(形参列表0) {//对当前对象（this）加锁
		//代码（原子操作）
	}
```

 - <font color="red">**注意：**</font>
	* 只有在调用包含同步代码块的方法，或者同步方法时，才需要对象的锁标记
	* 如需用不包含同步代码快的方法，或普通方法时，则不需要锁标记，可直接调用
 - **已知JDK中线程安全的类：**
	* StringBuffer
	* Vector
	* Hashtable
	* 以上类中的公开方法，均为synchonized修饰的同步方法
***
4.3 synchronized实例

```java
/**
 * 问题：两个线程同时访问临界资源时，出现的问题
 * 实例问题：妻子、丈夫携主、副卡在同一个银行账户中取钱（两个线程访问临界资源对象）
 *
 * 妻子正在读卡...
 * 验证成功！
 * 丈夫正在读卡...
 * 验证成功！
 * 妻子取款成功！卡内余额为：0.0元
 * 丈夫取款成功！卡内余额为：-200.0元
 *
 * 解决：为临界资源的原子操作加同步代码块（锁）synchronized
 * 1.为取款方法加锁，因为取款就是原子操作，从插卡验证，到取款成功的一系列步骤，不可缺少或打乱
 * 2.在取款方法内部加同步代码块，锁住的this即是当前账户的实例对象
 * 3.为所有取出钞票的那一步原子操作加锁，包括妻子和丈夫
 *
 * 思路：如果丈夫先拿到锁，他就会先取钱，后台将取出钱后的余额修改数据，而妻子再取钱的时候，余额不足
 *      抢到锁之后妻子在等锁，即是阻塞状态
 *
 * 注意：锁是随机的被线程抢到的！
 *
 * //什么场景下加锁？什么场景下不加锁？
 * //写（增、删、改） 操作---> 加锁！
 * //读操作 不加锁
 */

public class TestSynchronized {
    public static void main(String[] args) {
        //临界资源：同一张银行卡
        //临界资源对象只有一把锁！
        Account account = new Account("0001", "123456", 2000);
        //给定任务后，第二个参数是对线程自定义命名
        Thread husband = new Thread(new Husband(account), "丈夫");
        Thread wife = new Thread(new Wife(account), "妻子");
        husband.start();
        wife.start();
    }
}

//银行账户
class Account {
    String cardNo;              //卡号
    String passWord;            //密码
    double balance;             //余额

    public Account(String cardNo, String passWord, double balance) {
        this.cardNo = cardNo;
        this.passWord = passWord;
        this.balance = balance;
    }

    //取款(原子操作，从插卡验证，到取款成功的一系列步骤，不可缺少或打乱)
    public synchronized void withdrawal(String cardNo, String passWord, double money) {
//    public void withdrawal(String cardNo, String passWord, double money) {
//        this === 当前类的实例对象
//        synchronized (this) {
            System.out.println(Thread.currentThread().getName() + "正在读卡...");
            //(原子操作，从插卡验证，到取款成功的一系列步骤，不可缺少或打乱)
            if (this.cardNo.equals(cardNo) && this.passWord.equals(passWord)) {
                System.out.println("验证成功！");
                if (money <= this.balance) {
                    //模拟现实世界，ATM正在数钞...
                    try {
                        Thread.sleep(1000);//休眠1秒，数钞票...
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    this.balance -= money;//取出
                    System.out.println(Thread.currentThread().getName() + "取款成功！卡内余额为：" + this.balance + "元");
                } else {
                    System.out.println(Thread.currentThread().getName() + "卡内余额不足！");
                }
            } else {
                System.out.println("卡号或密码不正确！");
            }
//        }
    }
}

//丈夫手持银行卡偷偷的取200元零花钱
class Husband implements Runnable {
    Account account;

    public Husband(Account account) {
        this.account = account;
    }

    //线程任务
    public void run() {
//        synchronized (account) {
            this.account.withdrawal("0001", "123456", 200);//原子操作
//        }
    }
}

//妻子手持银行卡取2000元买包包
class Wife implements Runnable {
    Account account;

    public Wife(Account account) {
        this.account = account;
    }

    //线程任务
    public void run() {
//        synchronized (account) {
            this.account.withdrawal("0001", "123456", 2000);//原子操作
//        }
    }
}
```
***
<a id="5"> </a>
## 五、经典问题（死锁、生产者与消费者）

 - **死锁：**
	* 当第一个线程拥有A对象锁标记，并等待B对象锁标记，同时第二个线程拥有B对象锁标记，并等待A对象标记时，产生死锁
	* 一个线程可以同时拥有多个对象的锁标记，当线程阻塞时，不会释放已经拥有的锁标记，由此可能造成死锁
 - **生产者、消费者：**
	* 若干个生产者在生产产品，这些产品将提供若干个消费者去消费，为了使生产者和消费者能并发执行，在两者之间设置一个能存储多个产品的缓冲区，生产者将生产的产品放入缓冲区中，消费者从缓冲区中取走产品进行消费，显然生产者和消费者之间必须保持同步，即不允许消费者到一个空的缓冲区中取产品，也不允许生产者向一个满的缓冲区中放入产品

**思路：** 从生产者、消费者角度出发，模拟生产者、消费者、商品、超市四者之间的关系，而其中的共享资源对象即是超市
```java
public class TestProductCustomer {
	public static void main(String[] args) {
		Shop shop = new Shop();// 共享资源对象

		Thread p = new Thread(new Product(shop), "生产者");
		Thread c = new Thread(new Customer(shop), "消费者");

		p.start();
		c.start();
	}
}

// 商品
class Goods {
	private int id;

	public Goods(int id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}

// 超市
class Shop {
	Goods goods;
	boolean flag;// 标识商品是否充足
	
	// 生产者调用的 存的方法
	public synchronized void saveGoods(Goods goods) throws InterruptedException {
		// 1.判断商品是否充足
		if (flag == true) {
			System.out.println("生产者：商品充足，等待库存卖完...");
			this.wait();// 商品充足，生产者不用生产，而等待消费者买完！进入等待状态
		}
		// 商品不充足！生产者生产商品，存到商场里
		System.out.println(Thread.currentThread().getName() + "生产并在商场里存放了" + goods.getId() + "件商品");
		this.goods = goods;
		flag = true;// 已经有商品了！可以让消费者购买了！
		// 消费者等待...
		this.notifyAll();// 将等待队列的消费者唤醒！前来购买商品
	}

	// 消费者调用的 取的方法
	public synchronized void buyGoods() throws InterruptedException {
		if (flag == false) {// 没有商品了！消费者就要等待！
			System.out.println("消费者：商品不充足了，等待商品上架...");
			this.wait();// 消费者进入等待队列！等待生产者生产商品后，唤醒！
		}
		// 正常购买商品
		System.out.println(Thread.currentThread().getName() + "购买了" + goods.getId() + "件商品");
		// 商品买完了！标识没货了！
		this.goods = null;
		flag = false;
		// 唤醒生产者去生产商品
		this.notifyAll();
	}
}

// 生产者
class Product implements Runnable {
	Shop shop;// 商场

	public Product(Shop shop) {
		this.shop = shop;
	}

	public void run() {
		// 通过循环，生产商品存放到Shop里
		for (int i = 1; i <= 30; i++) {
			try {
				// 生产者线程调用存商品的方法。传一个商品对象
				this.shop.saveGoods(new Goods(i));
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}

// 消费者
class Customer implements Runnable {
	Shop shop;// 商场

	public Customer(Shop shop) {
		this.shop = shop;
	}

	public void run() {// for循环模拟买商品
		for (int i = 1; i <= 30; i++) {
			try {
				this.shop.buyGoods();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}
```

***
<a id="6"> </a>
## 六、线程通信（wait、notify）

 - **等待：**
	* public final void wait()
	* public final void wait(long timeout)
	* 必须在对obj加锁的同步代码块中。在一个线程中，调用obj.wait()时，此线程会释放其拥有的所有锁标记。同时此线程阻塞在obj的等待队列中。释放锁，进入等待队列
 - **通知：**
	* public final void notify() //释放一个
		 public final void notifyAll()	//释放全部
	* 必须在对obj加锁的同步代码块中。从obj的Waiting中释放一个或全部线程。对自身没有任何影响
```java
//复杂：一个线程持有A对象的锁，需要B对象的锁， 另一个线程持有B、想要A
//简单：一个线程持有A对象的锁，另一个线程也想要！阻塞
//
//情况1：三个线程抢锁，其中一个线程或两个线程把所让给了其他线程（wait），
//		然后另外的线程就开始抢锁直至执行结束——死锁（没有notify唤醒）
//情况2：三个线程抢锁，其中一个线程或两个线程把所让给了其他线程（wait），
//		然后另外的线程就开始抢锁并其中的一个或者最后一个notify唤醒——有可能出现死锁（因为notify是随机唤醒）
//情况3：三个线程抢锁，其中一个线程或两个线程把所让给了其他线程（wait），
//		然后另外的线程就开始抢锁并其中的一个或者最后一个notifyAll唤醒——正常执行（因为notifyAll是唤醒全部等待的线程）
public class TestWaitNotify {
	public static void main(String[] args) throws InterruptedException {
		Object obj = new Object();

		MyThread t1 = new MyThread(obj);
		MyThread2 t2 = new MyThread2(obj);

		t1.start();
		t2.start();

		// 主线程通知完两个线程后，休眠。
		Thread.sleep(2000);
		synchronized (obj) {
			System.out.println(Thread.currentThread().getName() + "进入到同步代码块");
			// obj.wait();//主线程获得到了锁，也主动释放
			// 此时此刻等待队列里有两个线程
			// obj.notify();//在obj的等待队列中，随机唤醒一个拿锁执行代码
			obj.notifyAll();// 将obj的等待队列所有的线程都唤醒。
			System.out.println(Thread.currentThread().getName() + "退出了同步代码块");
		}
	}
}

class MyThread extends Thread {
	Object obj;

	public MyThread(Object obj) {
		this.obj = obj;
	}

	public void run() {
		synchronized (obj) {
			System.out.println(Thread.currentThread().getName() + "进入到同步代码块");
			// Thread-0先拿到了锁，让给其他线程先拿锁！
			try {
				obj.wait();// 主动释放当前持有的锁！并进入无限期等待！
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}

			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			System.out.println(Thread.currentThread().getName() + "退出了同步代码块");
		}
	}
}

class MyThread2 extends Thread {
	Object obj;

	public MyThread2(Object obj) {
		this.obj = obj;
	}

	public void run() {
		synchronized (obj) {
			System.out.println(Thread.currentThread().getName() + "进入到同步代码块");

			try {
				obj.wait();
			} catch (InterruptedException e1) {
				e1.printStackTrace();
			}
			// obj.notify();//在obj这个共享对象的等待队列中，唤醒一个正在等待拿锁的线程！
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			System.out.println(Thread.currentThread().getName() + "退出了同步代码块");
		}
	}
}
```

***
<a id="7"> </a>
## 七、线程池
### 7.1 线程池概念

 - **现有问题：**
	* 线程是宝贵的内存资源、单个线程约占1MB空间，过多分配易造成内存溢出
	* 频繁的创建及销毁线程会增加虚拟机回收频率、资源开销，造成程序性能下降
 - **线程池：**
	* 线程容器，可设定线程分配的数量上限
	* 将预先创建的线程对象存入池中，并重用线程池中的线程对象
	* 避免频繁的创建和销毁



### 7.2 线程池原理
将任务提交给线程池，由线程池分配线程、运行任务，并在当前任务结束后复用线程
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503211907.png)



### 7.3 获取线程池

 - **常用的线程池接口和类（所在包java.util.concurrent）：**
	* **Executor：** 线程池的顶级接口
	* **ExecutorService：** 线程池接口，可通过submit（Runnable task）提交任务代码
	* **Executors工厂类：** 通过此类可以获得一个线程池
	* 通过newFixedThreadPool(int nThreads) 获得固定数量的线程池。**参数：** 指定线程池中线程的数量
	* 通过newCachedThreadPool() 获取动态数量的线程池，如不够创建新的，没有上限



### 7.4 Callable接口

接口的定义
```java
public interface Callable<V> {
	public V call() throws Exception;
}
```

 - JDK5加入，与Runnable接口类似，实现之后代表一个线程任务
 - Callable具有泛型返回值、可以声明异常

<font color="purple">**Callable接口的使用**

```java
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class TestCallable {
	public static void main(String[] args) {
		ExecutorService es = Executors.newFixedThreadPool(3);
		MyTask task = new MyTask();
		es.submit(task);
	}
}

class MyTask implements Callable<Integer> {
	public Integer call() throws Exception {
		for (int i = 0; i <= 20; i++) {
			if (i == 30) {
				Thread.sleep(1000);
			}
			System.out.println(Thread.currentThread().getName() + "：" + i);
		}
		return null;
	}
}
```


### 7.5 Future接口

 - **概念：** 异步接收ExecutorService.submit() 所返回的状态结果，当中包含了call() 的返回值
 - **方法：** V get() 以阻塞形式等待Future中的异步处理结果（call()的返回值）



#### 7.5.1 线程的同步

 - **同步：**
	* 形容一次方法调用，同步一旦开始，调用者必须等待该方法返回，才能继续
 - <font color="red">**注意：**</font>单条执行路径
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503211920.png)



#### 7.5.2 线程的异步

 - **异步：**
	* 形容一次方法调用，异步一旦开始，像是一次消息传递，调用者告知之后立即返回。二者竞争时间片，并发执行
 - <font color="red">**注意：**</font>多条执行路径
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503211932.png)

<font color="purple">**Future接口的使用**

```java
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class TestFuture {
	public static void main(String[] args) throws InterruptedException, ExecutionException {
		ExecutorService es = Executors.newFixedThreadPool(2);
		
		MyCall1 mc1 = new MyCall1();
		MyCall2 mc2 = new MyCall2();
		//通过submit执行提交的任务，Future接受返回的结果
		Future<Integer> result1 = es.submit(mc1);
		Future<Integer> result2 = es.submit(mc2);
		//通过Future的get方法，获得线程执行完毕后的结果
		Integer value1 = result1.get();
		Integer value2 = result2.get();
		
		System.out.println(value1 + value2);
	}
}
//计算1~50的和
class MyCall1 implements Callable<Integer> {
	public Integer call() throws Exception {
		Integer sum = 0;
		for (int i = 1; i <= 50; i++) {
			sum += i;
		}
		return sum;
	}
}
//计算1~50的和
class MyCall2 implements Callable<Integer> {
	public Integer call() throws Exception {
		Integer sum = 0;
		for (int i = 1; i <= 50; i++) {
			sum += i;
		}
		return sum;
	}
}
```
<font color="purple">**newCachedThreadPool() 获取动态数量的线程池**

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class TestThreadPool {
	public static void main(String[] args) {
		// 线程池(引用) ---->Executors工具类(工厂类)
		// ExecutorService es = Executors.newFixedThreadPool(3);//手动限定线程池里的线程数量
		ExecutorService es = Executors.newCachedThreadPool();// 动态获取数量线程池
		// 1.创建任务对象
		MyTask1 task = new MyTask1();
		// 2.将任务提交到线程池，由线程池调度、执行
		es.submit(task);// Runnable类型的对象
		es.submit(task);
		es.submit(task);
	}
}

// 线程任务
class MyTask1 implements Runnable {
	public void run() {
		for (int i = 1; i <= 20; i++) {
			System.out.println(Thread.currentThread().getName() + "：" + i);
		}
	}
}
```


### 7.6 Lock接口

 - JDK5加入，与synchronized比较，显示定义，结构更灵活
 - 提供更多使用性方法，功能更强大、性能更优越
 - **常用方法：**
	* void lock() //获取锁，如锁被占用，则等待
	* boolean tryLock() //尝试获取锁（成功返回true。失败返回false，不阻塞）
	* void unlock() //释放锁

<font color="purple">**Lock接口的使用**

```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class TestLocks {
	public static void main(String[] args) {
		Test obj = new Test();

		Thread t1 = new Thread(new MyTask(obj));
		Thread t2 = new Thread(new MyTask2(obj));

		t1.start();
		t2.start();
	}
}

class Test {
	// 接口引用 实现类对象 创建一把锁
	Lock lock = new ReentrantLock();// Test里有一把锁的属性，就是Test自身的锁！
	// ReentrantLock rl = new ReentrantLock();
	// 第一、使用Lock，需要明确的写上锁和释放锁！
	// 第二、为了避免拿到锁的线程在运行期间出现异常，导致程序终止，没有释放锁！应用try{}finally{}来保证，无论正确执行与否，最终都会释放锁！

	public void method() {
		System.out.println(Thread.currentThread().getName() + "进入到上锁的方法里！");
		try {
			lock.lock();// 显示的写上 在此处获得锁
			// 模拟程序出错！
			// int a = 10/0;
			// method();不要出现无穷递归！容易内存溢出！导致锁一直没有释放！
			System.out.println(Thread.currentThread().getName() + "退出了上锁的方法里！");
		} finally {
			// 显示的写上，此处释放锁
			lock.unlock();
		}
	}
}

class MyTask implements Runnable {
	Test obj;// 共享资源对象

	public MyTask(Test obj) {
		this.obj = obj;
	}

	public void run() {
		obj.method();
	}
}

class MyTask2 implements Runnable {
	Test obj;// 共享资源对象

	public MyTask2(Test obj) {
		this.obj = obj;
	}

	public void run() {
		obj.method();
	}
}
```


### 7.7 重入锁

 - **ReenTrantLock：** Lock接口的实现类，与synchronized一样具有互斥锁功能
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503211951.png)



### 7.8 读写锁

 - **ReentrantReadWriteLock：**
	* 一种支持一写多读的同步锁，读写分离，可分别分配读锁、写锁
 - **互斥规则：**
	* **写-写：** 互斥，阻塞
	* **读-写：** 互斥，读阻塞写、写阻塞读
	* **读-读：** 不互斥、不阻塞
 - 在读操作远远高于写操作的环境中，可在保障线程安全的情况下，提高运行效率
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503212003.png)

**读写锁案例** 

```java
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class TestReadWriteLock {
    public static void main(String[] args) {
        Student student = new Student();//共享资源对象
        ExecutorService executorService = Executors.newFixedThreadPool(20);

        WriteTask writeTask = new WriteTask(student);//写线程任务
        ReadTask readTask = new ReadTask(student);//读线程任务
        //执行的两个赋值的线程任务
        Long start = System.currentTimeMillis();//开始时间（毫秒值）
        executorService.submit(writeTask);
        executorService.submit(writeTask);

        for (int i = 1; i <= 18; i++) {
            executorService.submit(readTask);
        }

        //停止线程池，但是不停止已提交的任务！等已提交任务都执行完毕！
        executorService.shutdown();

        //询问线程池，任务结束了吗？
        while (true) {
            System.out.println("任务结束了吗？");
            if (executorService.isTerminated() == true) {//证明线程池里的任务都执行完毕
                break;
            }
        }

        Long end = System.currentTimeMillis();//结束时间
        System.out.println(end - start);
    }
}

class Student {
    private int age;        //年龄
//    Lock lock = new ReentrantLock();//读和写的操作下，都锁住，性能过低！
    //有两把锁
    ReentrantReadWriteLock reentrantReadWriteLock = new ReentrantReadWriteLock();
    ReentrantReadWriteLock.WriteLock readLock = reentrantReadWriteLock.writeLock();//读锁
    ReentrantReadWriteLock.WriteLock writeLock = reentrantReadWriteLock.writeLock();//写锁
    //赋值——写操作
    public void setAge(int age) {
        writeLock.lock();
        try {
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            this.age = age;
        } finally {
            writeLock.unlock();
        }
    }
    //取值——读操作
    public int getAge() {
        readLock.lock();
        try {
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return this.age;
        } finally {
            readLock.unlock();
        }
    }
}

//写操作任务
class WriteTask implements Callable {
    Student student;

    public WriteTask(Student student) {
        this.student = student;
    }

    public Student call() throws Exception {
        student.setAge(100);
        return null;
    }
}

class ReadTask implements Callable {
    Student student;

    public ReadTask(Student student) {
        this.student = student;
    }

    public Student call() throws Exception {
        student.getAge();
        return null;
    }
}
```

***
<a id="8"> </a>
## 八、线程安全的集合

### 8.1 Collection体系集合

 - Collection体系集合下，除Vector以外的线程安全集合
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503211826.png)



### 8.1 Collection中的工具方法

 - Collection工具类中提供了多个可以获得线程安全集合的方法
	* public static < T > Collection< T > synchronizedCollection(Collection< T > c)
	* public static < T > List< T > synchronizedList(List< T > list)
	* public static < T > Set< T > synchronizedSet(Set< T > set)
	* public static < K,V > Map< K,V > synchronizedMap(Map< K,V > m)
	* public static < T > SortedSet< T > synchronizedSet(SortedSet< T > s)
	* public static < K,V > SortedMap< K,V > synchronizedSortedMap(SortedMap< K,V > m)
 - JDK1.2提供，接口统一、维护性高，但性能没有提升，均以synchronized实现
 - 与普通集合使用方式无异



### 8.2 CopyOnWriteArrayList

 - 线程安全的ArrayList，加强版读写分离
 - 写有锁，读无锁，读写之间不堵塞，优于读写锁
 - 写入时，先copy一个容器副本、再添加新元素，最后替代引用
 - 使用方式与ArrayList无异

```java
public class TestCopyOnWriteArrayList {
	public static void main(String[] args) {
		List<String> list = new CopyOnWriteArrayList<String>();
	}
}
```


### 8.3 CopyOnWriteArraySet

 - 线程安全的Set，底层使用CopyOnWriteArrayList实现
 - 唯一不同在于，使用addIfAbsent() 添加元素，会遍历数组
 - 如存在元素，则不添加（扔掉副本）

```java
public class TestCopyOnWriteArraySet {
	public static void main(String[] args) {
		Set<String> set = new CopyOnWriteArraySet<String>();
	}
}
```


### 8.4 ConcurrentHashMap

 - 初始容量默认为16段（Segment），使用分段锁设计
 - 不对整个Map加锁，而是为每个Segment加锁
 - 当多个对象存入同一个Segment时，才需要互斥
 - 最理想状态为16个对象分别存入16个Segment，并行数量16
 - 使用方式与HashMap无异
 - <font color="red">**注意：**</font>JDK1.7版本源码解释

```java
​```java
import java.util.HashMap;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.CopyOnWriteArraySet;

public class TestCopyOnWriteArrayList {
    public static void main(String[] args) {
        //写有锁，读无锁的集合
        CopyOnWriteArrayList<String> onWriteArrayList = new CopyOnWriteArrayList<String>();
        //写操作，有锁
        onWriteArrayList.add("A");//将底层数组做了一次复制，写的是新数组，完成复制后再将新数组替换成旧数组
        onWriteArrayList.add("B");//每次调用一次，底层方法扩容一次！

        //读操作，无锁
        onWriteArrayList.get(1);//读的是写操作完成之前的旧数组！写完之后才能读到新数组的新值

        for (int i = 0; i < onWriteArrayList.size(); i++) {
            System.out.println(onWriteArrayList.get(i));
        }

        //无序、无下标、不允许重复
        CopyOnWriteArraySet<String> onWriteArraySet = new CopyOnWriteArraySet<String>();
        //写操作，表面使用的是add方法，底层实际是使用的CopyOnWriteArrayList的addIfAbsent()来判断要插入的新值是否存在
        onWriteArraySet.add("A");
        onWriteArraySet.add("B");
        onWriteArraySet.add("C");
        for (String string : onWriteArraySet) {
            System.out.println(string);
        }

        HashMap<String, String> hashMap = new HashMap<String, String>();
        //分段锁设计 Segment JDK1.7做法
        //CAS交换算法和同步锁   同步锁锁的是表头对象，拿到锁的对象要先做节点遍历
        //查看有没有相同的key值，相同覆盖，不同则挂在最后一个节点的next上
        ConcurrentHashMap<String, String> concurrentHashMap = new ConcurrentHashMap<String, String>();
        concurrentHashMap.put("A", "哎");
        System.out.println(concurrentHashMap.keySet());
        System.out.println(concurrentHashMap.values());
    }
}
```

***


### 8.5 Queue接口（队列）

 - Collection的子接口，表示队列FIFO（First In First Out），意为先进先出
 - **常用方法：**
	* **抛出异常：**
		+ boolean add(E e) //顺序添加一个元素（到达上限后，再添加则会抛出异常
		+ E remove() //获得第一个元素并移除（如果队列没有元素时，则会抛出异常）
		+ E element() //获得第一个元素但不移除（如果队列没有元素时，则会抛出异常）
	 * **返回特殊值：** 推荐使用
		+ boolean offer(E e) //顺序添加一个元素（到达上限后则会返回false）
		+ E poll() //获得第一个元素并移除（如果队列没有元素时，则返回null）
		+ E keep() //获得第一个元素但不移除（如果队列没有元素时，则返回null）



### 8.6 ConcurrentLinkedQueue

 - 线程安全、可高效读写的队列，高并发下性能最好的队列
 - 无锁、CAS比较交换算法，修改的方法包含三个核心参数（V，E，N）
	* **V：** 要更新的变量
	* **E：** 预期值
	* **N：** 新值
 - 只有当V==E时，V=N；否则表示已被更新过，则取消当前操作

```java
public class TestConcurrentLinkedQueue {
	public static void main(String[] args) {
		Queue<String> queue = new ConcurrentLinkedQueue<String>();
		queue.offer("Hello");//插入
		queue.offer("World");//插入
		queue.poll();//删除Hello
		queue.peek();//删除World
	}
}
```


### 8.7 BlockingQueue接口（阻塞）

 - Queue的子接口，阻塞的队列，增加了两个线程状态为无限期等待的方法
 - **方法：**
	* void put(E e) //将指定元素插入此队列中，如果没有可用空间，则等待
	* E take() //获取并移除此队列头部元素，如果没有可用元素，则等待
 - 可用于解决生产者、消费者问题



#### 8.7.1 阻塞队列

 - **ArrayBlockingQueue：**
	* 数组结构实现，有界队列（手工固定上限）
```java
public class TestArrayBlockingQueue {
	public static void main(String[] args) {
		BlockingQueue<String> abq = new ArrayBlockingQueue<String>(10);
	}
}
```
 - **LinkedBlockingQueue:**
	* 链表结构实现，无界队列（默认上限Integer.MAX_VALUE）
```java
public class TestArrayBlockingQueue {
	public static void main(String[] args) {
		BlockingQueue<String> abq = new LinkedBlockingQueue<String>();
	}
}
```
***
<font color="purple">**队列接口的使用**</font>
```java
import java.util.LinkedList;
import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class TestQueue {
	public static void main(String[] args) {
		// 列表，尾部添加(指定下标)
		// 链表，头尾添加
		// 队列，FIFO
		// 如果要强制LinkedList只遵循队列的规则！
		// Queue<String> link = new LinkedList<String>(); //遵循队列规则的链表
		LinkedList<String> link = new LinkedList<String>();
		link.offer("A");
		link.offer("B");
		link.offer("C");

		// 用列表的方式打乱了FIFO队列的规则
		// link.add(0,"D");
		// 强制LinkedList后，不能调用带有下标的add方法

		System.out.println(link.peek());// 队列中的第一个元素！

		// 严格遵守了队列的规则，且是线程安全的，采用了CAS交换算法
		Queue<String> q = new ConcurrentLinkedQueue<String>();
		// 1.抛出异常的 2.返回结果的
		q.offer("A");
		q.offer("B");
		q.offer("C");

		q.poll();// 删除表头
		System.out.println(q.peek());// 获得表头

		// 手动固定队列上限
		BlockingQueue<String> bq = new ArrayBlockingQueue<String>(3);

		// 无界队列 最大有 Integer.MAX_VALUE
		BlockingQueue<String> lbq = new LinkedBlockingQueue<String>();
	}
}
```
***


### 8.8 集合接口总结

 - ExecutorService线程接口、Executors工厂
 - Callable线程任务、Future异步返回值
 - Lock、ReenTrantLock重入锁、ReentrantReadWriteLock读写锁
 - CopyOnWriteArrayList线程安全的ArrayList集合
 - CopyOnWriteArraySet线程安全的Set集合
 - ConcurrentHashMap线程安全的HashMap集合
 - ConcurrentLinkedQueue线程安全的Queue队列
 - ArrayBlockingQueue线程安全的Queue队列（生产者、消费者）
***



> 上一章[【Java异常】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java异常.md)

> 下一章[【JavaIO流】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/JavaIO流.md)