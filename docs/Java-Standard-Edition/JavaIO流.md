# JavaIO流

* [一、流的概念](#一流的概念)
   * [1.1 什么是流](#11-什么是流)
* [二、流的分类](#二流的分类)
   * [2.1 流的分类](#21-流的分类)
* [三、字节流](#三字节流)
   * [3.1 字节流](#31-字节流)
   * [3.2 字节节点流](#32-字节节点流)
   * [3.3 字节过滤流](#33-字节过滤流)
   * [3.4 字节过滤流中的对象流](#34-字节过滤流中的对象流)
      * [3.4.1 对象序列化](#341-对象序列化)
* [四、编码方式](#四编码方式)
   * [4.1 编码分类](#41-编码分类)
   * [4.2 编码和解码转换](#42-编码和解码转换)
* [五、字符流](#五字符流)
   * [5.1 字符流](#51-字符流)
   * [5.2 字符节点流](#52-字符节点流)
   * [5.3 字符过滤流](#53-字符过滤流)
   * [5.4 字符节点流中的桥转换流](#54-字符节点流中的桥转换流)
* [六、File类](#六file类)
   * [6.1 File类](#61-file类)
   * [6.2 FileFilter接口](#62-filefilter接口)

------

## 一、流的概念
### 1.1 什么是流

 - **概念：** 内存与存储设备之间传输数据的通道
 - **比如：** 水借助管道传输；数据借助流传输
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503212333.png)
***
<a id="2"> </a>
## 二、流的分类
### 2.1 流的分类
 - **按方向<font color="red">【重点】</font>**
	* **输入流：** 将<存储设备>中的内容读入到<内存>中
	* **输出流：** 将<内存>中的内容写入到<存储设备>中
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200315210009578.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE3MDIyMQ==,size_16,color_FFFFFF,t_70)
 - **按单位**
	* **字节流：** 以字节为单位，可以读写所有数据
	* **字符流：** 以字符为单位，可以读写文本数据
 - **按功能**
	* **节点流：** 具有实际传输数据的读写功能
	* **过滤流：** 在节点流的基础上增强功能

| 流 | 分类和功能 |
|--|--|
| ObjectInputStream |  字节流、读八种基本类型、读对象、缓冲|
|ObjectOutputStream	|字节流、写八种基本类型、写对象、缓冲	|
|	BufferedInputStream|字节流、缓冲	|
|BufferedOutputStream	|字节流、缓冲|
|DataInputStream	|	字节流、读八种基本类型|
|	DataOutputStream|	字节流、写八种基本类型|
|PrintWriter	|	字符流、写八种基本类型、字符串并换行、缓冲功能、写对象|
|	PrintStream|	字节流、写八种基本类型、字符串并换行、缓冲功能、写对象|
|BufferedReader	|	字符流、缓冲、读入一行文本|

***
<a id="3"> </a>
## 三、字节流

### 3.1 字节流

 - **字节流的父类（抽象类）**
	* **InputStream：** 字节输入流
		+ public int read() {}
		+ public int read(byte[] b) {}
		+ public int read(byte[] b, int off, int len) {}
	* **OutputStream：** 字节输出流
		+ public void write() {}
		+ public int write(byte[] b) {}
		+ public int write(byte[] b, int off, int len) {}



### 3.2 字节节点流

 - **FileOutputStream：**
	* public void write(byte[] b) //一次写多个字节，将b数组中所有字节，写入输出流
```java
import java.io.FileOutputStream;
import java.io.IOException;
/**
 *1.输出字节流  OutputStream
 *2.输出字节节点流  具有实际传输数据的功能   (文件路径，boolean append)  true代表追加，不覆盖
 *3.IOException异常是FileNotFoundException异常的父类，所以只需要抛出父类异常即可
 *特别注意：FileOutputStream是不会自动创建文件夹以及多级文件夹的，它只会给你创建文件，而你是需要提供路径的，假如不提供路径默认创建在根目录下！
 */
public class TestOutputStream {
    public static void main(String[] args) throws IOException {
        /**
         * 注意：路径正确但是文件（.txt）不存在，则会自动创建一个！
         * 传入的参数是绝对路径，那你的电脑必须有路径存在，否则报错！
         * Exception in thread "main" java.io.FileNotFoundException: D:\hello\temp.txt (系统找不到指定的路径。)
         */
//        FileOutputStream fileOutputStream = new FileOutputStream("D:\\hello\\temp.txt");

		//默认创建在根目录下
//		FileOutputStream fileOutputStream = new FileOutputStream("world.txt");

        //表示可以追加
        FileOutputStream fileOutputStream = new FileOutputStream("D:\\hello\\temp.txt", true);
        fileOutputStream.write(65);//此时会在文件中出现AA

        /**
         * 注意：Files文件是自己创建，text文件可以自动生成！
         * 传入的参数是相对路径与上一种形势等价，相对在当前项目路径下，寻找该路径和文件
         * 如果没有找到的话，它会在你项目的根目录下创建temp.txt
         */
        FileOutputStream fileOutputStream1 = new FileOutputStream("Files\\temp.txt");
        fileOutputStream1.write(65);
        fileOutputStream1.write('B');//直接写入字符B
        String s = "你好";
        byte[] bytes = s.getBytes();//获取字节存入字节数组中
        System.out.println(s.length());//查找出两个长度：2
        System.out.println(bytes[0] + "\t" + bytes[1]);//查找出两个字节数：-28、-67
        fileOutputStream1.write(bytes);//直接写入bytes字节数组，这时候在文件中就可以看到：你好

        byte[] bytes1 = new byte[] {65, 66, 67, 68, 'E'};//如果我们想写入多个字节，就可以用数组去写入了
        fileOutputStream1.write(bytes1);//直接写入整个字节数组的所有字节
        /**
         * 第一个参数：写入的字节数组
         * 第二个参数：起始下标，从哪个下标的字节开始写入
         * 第三个参数：长度，从起始下标开始写入几个下标长度的字节
         */
        fileOutputStream1.write(bytes1, 1, 3);//我这里写入的是66、67、68，ASCII编码对应的BCD
    }
}
```
我把我写出来的文件以截图的形式贴出来！



![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503212450.png)

 - **FileInputStream：**
	* public int read(byte[] b) //从流中读取多个字节，将读到的内容存入b数组，返回实际读到的字节数；如果达到文件的尾部，则返回-1
```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class TestFileInputStream {
    public static void main(String[] args) throws IOException {
        FileOutputStream fileOutputStream = new FileOutputStream("Files\\target.txt");
        //写入一个A
        fileOutputStream.write('A');

        FileInputStream fileInputStream = new FileInputStream("Files\\target.txt");
        //读出一个A，如果不做强转的话，会出现打印的字节数65
        System.out.println((char) fileInputStream.read());//A

        //这里我们在文件中多写入几个值
        fileOutputStream.write('B');
        fileOutputStream.write('C');
        fileOutputStream.write('D');
        fileOutputStream.write('E');

        /*
        //用普通的方法读只能一个一个的读，这里写一个死循环读一下试试
        while (true) {
            int n = fileInputStream.read();//一次读一个字节
            if (n == -1) {//在有效字节读完后，读到无效字节或者空会返回-1，也就是文件的末尾
                break;//停止读的操作
            }
            System.out.print((char) n + " ");//B C D E （因为上边读出了第一个字节A下一次从第二个开始读）
        }
        */

        //如果我们用数组存储字节来读文件怎么样呢？
        byte[] bytes = new byte[4];//该数组作为读时的存储，数组长度为4
        while (true) {
            int count = fileInputStream.read(bytes);//每次读出数组中有效字节数
            if (count == -1) {//停止读的条件
                break;
            }
            /**
             * 读多少个打印多少个
             * 假如读数组长度的haul会出现小问题
             * 我们从文件中读出是按数组长度一组组的读出来的
             * 假如最后一个字节是数组长度中的第一个，而后面的三个就会被上面一个数组打印出来的结果的缓冲区影响
             * 从而多读出了3个上一次读出数组的缓冲区数字，不信你可以去试试，毕竟实践出真知嘛！
             */
            for (int i = 0; i < count; i++) {//读有效个数，也就是从count
                System.out.print((char) bytes[i] + " ");//B C D E（因为上一个读操作会对这一次的读操作产生影响，所以我就把上一个操作注掉了！）
            }
        }
    }
}
```


### 3.3 字节过滤流

 - **缓冲区：** BufferedOutputStream/BufferInputStream
	* 提高IO效率，减少访问磁盘的次数
	* 数据存储在缓冲区中，flush是将缓存区的内容写入文件中，也可以直接close
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200315211340678.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE3MDIyMQ==,size_16,color_FFFFFF,t_70)

```java
import java.io.*;

public class TestBufferedOutput {
    public static void main(String[] args) throws IOException {
        //有参构造需要一个字节流输出节点流
        //先创建一个输出节点流
        FileOutputStream fileOutputStream = new FileOutputStream("Files\\buff.txt");
        //增强节点流（类似用增强的工具做了包装）
        BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(fileOutputStream);
        //过滤流的write方法，是先写入到缓冲区数组里！
        bufferedOutputStream.write('A');
        bufferedOutputStream.write('B');
        bufferedOutputStream.write('C');
        bufferedOutputStream.write('D');
        bufferedOutputStream.write('E');

        //刷新缓冲区（将缓冲区的数组，一次性写入到文件中，并清空当前缓冲区）
        //如果不刷新的话，我们的文件中将会是空的！
        bufferedOutputStream.flush();

        bufferedOutputStream.write('F');
        bufferedOutputStream.write('G');

        bufferedOutputStream.flush();

        //级联的执行了flush()释放资源的同时
        //将缓冲区的数据刷新了，也就是将缓冲区的数据一次性写入到文件里
        //就省略使用了flush()方法去刷新缓冲区了（更方便）
        bufferedOutputStream.close();

        FileInputStream fileInputStream = new FileInputStream("Files\\buff.txt");
        //增强节点流（方法和上限的输出流一致，这个是输入流，这里我就不再写一遍了）
        BufferedInputStream bufferedInputStream = new BufferedInputStream(fileInputStream);

        byte[] bytes = new byte[100];
        fileInputStream.read(bytes);
        for (int i = 0; i < bytes.length; i++) {
            System.out.print((char) bytes[i] + " ");//A B C D E F G（其实还多打印了很多多余长度的空格）
        }
    }
}
```



### 3.4 字节过滤流中的对象流

 - **对象流：** ObjectOutputStream/ObjectInputStream
	* 增强了缓冲区功能
	* 增强了读写8种基本数据类型和字符串功能
	* **增强了读写对象的功能：**
		+ readObject() 从流中读取一个对象
		+ writeObject(Object obj) 从流中写入一个对象

<font color="red">**注意：**</font>使用流传输对象的过程称为序列化、反序列化



#### 3.4.1 对象序列化

 - **对象序列化的细节：**
	* 必须实现Serializable接口
	* 必须保证其所有属性均可序列化
	* transient修饰为临时属性，不参会序列化
	* **读取到文件尾部的标志：** java.io.EOFException
```java
import java.io.*;
//注意：static 依旧是属于类的，会影响序列化（因为static是全局公用一个，随着修改而修改，则读的时候会出现全都是最后一个对象的信息！）
public class TestObjectStream {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        OutputStream outputStream = new FileOutputStream("Files\\obj.txt");
        ObjectOutputStream objectOutputStream = new ObjectOutputStream(outputStream);
        Student student = new Student("Ziph", 18, "男", 100D, new Address("河北", "100000"));
        Student student1 = new Student("Join", 22, "男", 88D, new Address("上海", "100000"));
        objectOutputStream.writeObject(student);//写入对象信息
        objectOutputStream.writeObject(student1);
        objectOutputStream.flush();//刷新缓冲区

        InputStream inputStream = new FileInputStream("Files\\obj.txt");
        ObjectInputStream objectInputStream = new ObjectInputStream(inputStream);

//        Object object = objectInputStream.readObject();//读写入文件中的对象信息
//        Student s = (Student) object;//将Object对象强转为学生对象
        //注意：没有序列化的地址信息为null
        //这是读一个Student对象信息
//        System.out.println(object);//读出：Student{name='Ziph', age=18, sex='男', score=100.0, address=null}

        //利用循环读所有Student对象信息
        while (true) {
            try {
                Object obj = objectInputStream.readObject();
                System.out.println(obj.toString());
            } catch (Exception e) {
                //到达文件末尾，获得EOFException异常就停止
                break;//自定义处理异常
            }
        }
        /**
         *打印结果为：Student{name='Ziph', age=18, sex='男', score=100.0, address=null}
         *Student{name='Join', age=22, sex='男', score=88.0, address=null}
         */
    }
}

//对象自身要支持序列化
//属性也要支持序列化
class Student implements Serializable {
    String name;        //姓名
    Integer age;        //年龄
    String sex;         //性别
    Double score;       //分数
    //修饰的属性不参与序列化
    //注意：数组，基本数据类型可以序列化
    //引用数据类型的数组，数组中的类型要支持序列化
    transient Address address;    //地址信息

    public Student(String name, Integer age, String sex, Double score, Address address) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.score = score;
        this.address = address;
    }

    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", sex='" + sex + '\'' +
                ", score=" + score +
                ", address=" + address +
                '}';
    }
}

class Address implements Serializable {
    String position;
    String zipCode;

    public Address(String position, String zipCode) {
        this.position = position;
        this.zipCode = zipCode;
    }

    public String toString() {
        return "Address{" +
                "position='" + position + '\'' +
                ", zipCode='" + zipCode + '\'' +
                '}';
    }
}
```

***
<a id="4"> </a>
## 四、编码方式

### 4.1 编码分类

|字符编码| 字符编码介绍 |
|--|--|
| ISO-8856-1 | 收录ASCII外，还包括西欧、希腊语、泰语、阿拉伯语、希伯来语对应的文字符号 |
|	UTF-8|	针对Unicode的可变长度字符编码|
|	GB2312|	简体中文|
|	GBK|	简体中文、扩充|
|	BIG5|	台湾，繁体中文|
|	<font color="red">**注意：**</font>|	当编码方式和解码方式不一致时，会出现乱码|



### 4.2 编码和解码转换

```java
import java.io.UnsupportedEncodingException;

public class TestEncoding {
    public static void main(String[] args) throws UnsupportedEncodingException {
        /**
         * 注意：假如传入字符集参数的位置，你不传入的话，默认你的开发环境编码！
         */
        String str = "你好，先生！";//文本内容
        //编码    文本-->二进制
        byte[] bytes = str.getBytes("UTF-8");//获得字符串的二进制表现形式
        for (int i = 0; i < bytes.length; i++) {
            System.out.print(bytes[i] + " ");//-28 -67 -96 -27 -91 -67 -17 -68 -116 -27 -123 -120 -25 -108 -97 -17 -68 -127
        }
        //解码    二进制-->文本
        String str1 = new String(bytes, "BIG5");
        System.out.println(str1);//雿�憟踝�����嚗�

        //如果想再把它转回去那是不可能的看一下操作和打印结果
        byte[] bytes1 = str1.getBytes("BIG5");
        String str2 = new String(bytes1, "UTF-8");
        System.out.println(str2);//�?好�?????�?（?的话就是在UTF-8的编码中没有对应BIG5的编码）

        //正确做法：需要编码和解码一致
        String s = "哈喽！Ziph！";
        //编码    字符集是一致的
        byte[] b = s.getBytes("UTF-8");
        //解码    字符集是一致的
        String ss = new String(b, "UTF-8");
        System.out.println(ss);//哈喽！Ziph！
    }
}
```

***
<a id="5"> </a>
## 五、字符流
### 5.1 字符流

 - **字符流的父类（抽象类）**
	* **Reader：** 字符输入流
		+ public int read() {}
		+ public int read(char c) {}
		+ public int read(char c, int off, int len) {}
	* **Writer：** 字符输出流
		+ public void write(int n) {}
		+ public void write(String str) {}
		+ public void write(char[] c) {}



### 5.2 字符节点流

 - **FileWriter：**
	* public void write(String str) //一次写多个字符，将b数组的所有字符，写入输出流
 - **FileReader：**
	* public int read(char[] c) //从流中读取多个字符，将读到内存存入c数组，返回实际读到的字符数；如果达到文件的尾部，则返回-1

```java
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class TestWriter {
    public static void main(String[] args) throws IOException {
        FileWriter fileWriter = new FileWriter("Files\\chars.txt");

        fileWriter.write("哈喽！Ziph！");
        char[] chars = new char[] {'见', '到', '你', '很', '高', '兴'};
        fileWriter.write(chars);
        fileWriter.flush();//文件中写入的结果：哈喽！Ziph！见到你很高兴

        FileReader fileReader = new FileReader("Files\\chars.txt");
        //数组打印
        char[] cache = new char[3];//每次读3个字符
        while (true) {
            int n = fileReader.read(cache);
            if (n == -1) {
                break;
            }
            for (int i = 0; i < n; i++) {
                System.out.print(cache[i]);//打印结果即是：三个字符一换行的形式打印到结尾
            }
            System.out.println();
        }
        //普通打印（如果读的话两个选一个，另一个得注释掉！）
        while (true) {
            int n1 = fileReader.read();
            if (n1 == -1) {
                break;
            }
            for (int i = 0; i < n1; i++) {
                System.out.print(n1);
            }
        }
    }
}
```



### 5.3 字符过滤流

 - **缓冲流：** BufferedWriter/BufferedReader
	* 支持输入换行符
	* 可一次写一行、读一行
 - **PrintWrite：**
 - 封装了print() / println() 方法，支持写入后换行

```java
import java.io.*;

public class TestBuffered {
    public static void main(String[] args) throws IOException {
        FileWriter fileWriter = new FileWriter("Files\\buf.txt");

        /**
         * 注意：写入文本时，输入\n换行，在原生的记事本中是不识别此操作的！（高级记事本可以）
         * 由此我们需要借助特殊的换行处理进行换行
         * 如下：
         */
        //newLine操作的换行形式，不方便
        /*
        BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);//过滤流
//        bufferedWriter.write("Hello!\n");
        bufferedWriter.write("Hello!");
        bufferedWriter.newLine();//根据平台提供换行符
        bufferedWriter.write("World!");
        bufferedWriter.close();//文件中写入的是Hello！（换行）World！
         */

        //这种方式更方便（常用）
        PrintWriter printWriter = new PrintWriter(fileWriter);
        printWriter.println("哈哈哈！");
        printWriter.println("嘻嘻嘻！");
        printWriter.close();//此时文本写入的内容即：哈哈哈！（换行）嘻嘻嘻！

        //字符输入过滤流读操作
        FileReader fileReader = new FileReader("Files\\buf.txt");
        BufferedReader bufferedReader = new BufferedReader(fileReader);
//        BufferedReader.readLine();    //文件末尾返回的是null
        while (true) {
            String str = bufferedReader.readLine();
            if (str == null) {
                break;
            }
            System.out.println(str);//控制台打印结果即是：哈哈哈！（换行）嘻嘻嘻！
        }
    }
}
```



### 5.4 字符节点流中的桥转换流

 - **桥转换流：** InputStreamReader/OutputStreamWriter
	* 可将字节流转换为字符流
	* 可设置字符的编码格式

**使用步骤**

 1. 创建节点流
 2. [创建过滤流 设置字符编码集]
 3. 封装过滤流
 4. 读写数据
 5. 关闭流

```java
import java.io.*;

/**
 * 注意：
 * 编码和解码的编码类型必须保持一致！
 * 看似很复杂，实际就是增加了功能，多了两层包装而已，关闭流的时候关闭外层即可！
 */
public class TestConvertStream {
    public static void main(String[] args) throws IOException {
        //1.字节输出流
        OutputStream outputStream = new FileOutputStream("Files\\convert.txt");
        
        //2.增加编码的类型功能——转换为字符输出流
        OutputStreamWriter outputStreamWriter = new OutputStreamWriter(outputStream, "UTF-8");
        
        //3.增加换行功能——包装字符过滤流
        PrintWriter printWriter = new PrintWriter(outputStreamWriter);
        
        //4.在文件内写入内容
        printWriter.println("hello！你好呀！");
        printWriter.println("见到你很高兴");
        printWriter.println("最近记得戴口罩！");
        
        //5.刷新并关闭流
        printWriter.close();
        /**
         * 文件写入后的内容：
         * hello！你好呀！
         * 见到你很高兴
         * 最近记得戴口罩！
         */

        //1.字节输入流
        InputStream inputStream = new FileInputStream("Files\\convert.txt");
        
        //2.解码——转换为字符输入流
        InputStreamReader inputStreamReader = new InputStreamReader(inputStream, "UTF-8");
        
        //3.包装字符过滤流
        BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
        
        //4.打印文件内信息
        while (true) {
            String s = bufferedReader.readLine();
            if (s == null) {
                break;
            }
            System.out.println(s);
        }
        
        //5.刷新并关闭流
        bufferedReader.close();
        /**
         * 打印结果：
         * hello！你好呀！
         * 见到你很高兴
         * 最近记得戴口罩！
         */
    }
}
```

***
<a id="6"> </a>
## 六、File类
### 6.1 File类

 - **概念：** 代表物理盘符中的一个文件或者文件夹
 - **方法：**
	* createNewFile() //创建一个新文件
	* Mkdir() //创建一个新目录
	* Delete() //删除文件或空目录
	* Exists() //判断File对象代表的文件类型文件是否存在
	* getName() //取得名字
	* getParent() //获取文件/目录所在的目录
	* isDirectory() //是否是目录
	* isFile() //是否是文件
	* length() //获取文件的长度
	* listFiles() //列出目录中的所有内容
	* renameTo() //修改文件名为

```java
import java.io.File;
import java.io.IOException;

/**
 * 因为有些方法之间互相影响，所以就没有注释掉！
 * 自己测试的时候记得注意互相影响的方法！
 */
public class TestFiles {
    public static void main(String[] args) throws IOException {
        File file = new File("Files\\test\\target.txt");
//        File file = new File("Files\\test\\newFile");

        System.out.println(file.canExecute());//所有可以打开的文件或文件夹
        System.out.println(file.canWrite());//能不能修改文件
        System.out.println(file.canRead());//能不能执行文件
        System.out.println(file.createNewFile());//文件不存在则新建一个文件
        System.out.println(file.delete());//如果文件存在，则删除，返回true
        file.deleteOnExit();//JVM终止时，执行删除删除文件
        System.out.println(file.exists());//测试此抽象路径名表示的文件或目录是否存在
        System.out.println(file.getAbsolutePath());//获得绝对路径
        System.out.println(file.getPath());//获得相对路径
        System.out.println(file.getName());//获得文件名（文件名.后缀）
        System.out.println(file.getFreeSpace() / 1024 / 1024 / 1024);//获得磁盘空闲空间容量
        System.out.println(file.getTotalSpace() / 1024 / 1024 / 1024);//获得磁盘总空间容量
        System.out.println(file.getParent());//指定文件的上一级目录
        System.out.println(file.isDirectory());//判断是否为文件夹
        System.out.println(file.isFile());//判断是否为文件
        System.out.println(file.isHidden());//判断是否为隐藏文件
        System.out.println((System.currentTimeMillis() - file.lastModified()) / 1000 / 60);//获取文件最后一次修改时间
        System.out.println(file.length());//文件内容的字节
        file.mkdirs();//创建一个新目录
    }
}
```



### 6.2 FileFilter接口

 - public interface FileFilter
	* boolean accept(File pathname)
 - 当调用File类中listFiles()方法时，支持传入FileFilter接口接口实现类，对获取文件进行过滤，只有满足条件的才可出现在listFiles() 的返回值中

```java
import java.io.File;
import java.io.FileFilter;

//
public class TestListFile {
    public static void main(String[] args) {
        File file = new File("D:\\Code");
//        String[] fileNames = file.list();//获取文件夹中的所有文件（包括文件夹的名字）
//        for (String name : fileNames) {
//            System.out.println(name);
//        }
        File[] files = file.listFiles(new MyFilter());//获取文件夹中的所有文件（包括文件夹）的对象
        System.out.println(files.length);
        for (File f : files) {
            System.out.println(f.getName());
        }
    }
}

class MyFilter implements FileFilter {
    public boolean accept(File file) {
        if (file.isFile()) {
            //找到该文件所有.class后缀的文件，过滤其他文件
            if (file.getName().endsWith(".class")) {//true保存、false就过滤文件
                return true;//保存文件
            }
        }
        return false;//过滤
    }
}
```

***



> 上一章[【Java多线程】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java多线程.md)

> 下一章[【Java网络编程】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java网络编程.md)