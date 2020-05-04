# Java数组

  * [一、数组的概念](#一数组的概念)
     * [1.1 数组的概念](#11-数组的概念)
     * [1.2 数组的创建](#12-数组的创建)
  * [二、数组的声明和赋值](#二数组的声明和赋值)
  * [三、数组的下标（索引）](#三数组的下标索引)
  * [四、数组的异常错误](#四数组的异常错误)
  * [五、数组的遍历](#五数组的遍历)
     * [5.1 数组的遍历方式](#51-数组的遍历方式)
     * [5.2 关于数组的默认值](#52-关于数组的默认值)
  * [六、数组的应用](#六数组的应用)
     * [6.1 数组的扩容](#61-数组的扩容)
     * [6.2 数组的复制方式](#62-数组的复制方式)
        * [6.2.1 地址的替换](#621-地址的替换)
        * [6.2.2 组成类型的参数](#622-组成类型的参数)
        * [6.2.3 数组类型的返回值](#623-数组类型的返回值)
     * [6.3 可变长参数](#63-可变长参数)
  * [七、数组的排序](#七数组的排序)
     * [7.1 简单的数组排序分类](#71-简单的数组排序分类)
     * [7.2 冒泡排序法](#72-冒泡排序法)
     * [7.3 选择排序法](#73-选择排序法)
     * [7.4 JDK中的排序](#74-jdk中的排序)
  * [八、关于二维数组](#八关于二维数组)
     * [8.1 二维数组的概念](#81-二维数组的概念)
     * [8.2 二维数组的赋值](#82-二维数组的赋值)
     * [8.3 二维数组的内存分配](#83-二维数组的内存分配)
     * [8.4 二维数组的访问](#84-二维数组的访问)
     * [8.5 二维数组的创建语法](#85-二维数组的创建语法)
     * [8.6 杨辉三角](#86-杨辉三角)
        * [8.6.1 什么是杨辉三角](#861-什么是杨辉三角)
        * [8.6.2 基础数组版实现“杨辉三角”](#862-基础数组版实现杨辉三角)
        * [8.6.3 高级数组版“杨辉三角”](#863-高级数组版杨辉三角)
        * [8.6.4 算法实现“杨辉三角”](#864-算法实现杨辉三角)

------

## 一、数组的概念

### 1.1 数组的概念

 - **概念：** 一组连续的存储空间，存储多个相同数据类型的值
 - **特点：** 
	* **1**、类型相同
	* **2**、长度固定



### 1.2 数组的创建
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503182938.png)
***
<a id="2"> </a>
## 二、数组的声明和赋值
| 声明赋值方式 | 具体声明赋值方法 |
|--|--|
| 先声明、再分配空间 |  数据类型[] 数组名; 数组名 = new 数据类型[长度];|
| 声明并分配空间 | 数据类型[] 数组名 = new 数据类型[长度]; |
| 声明并赋值（繁） | 数据类型[] 数组名 = new 数据类型[] {value1, value2, ...}; |
| 声明并赋值（简） | 数据类型[] 数组名 = {value1, value2, ...}; |
***
<a id="3"> </a>
## 三、数组的下标（索引）
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503183013.png)
 - 数组中的每个数据格被称为“数组元素”。
 - 对每个元素进行复制或取值的操作被称为“元素的访问”。
 - 访问元素时，需要使用“下标”（从0开始，依次+1，自动生成）。
 - 访问的语法：数组名[下标]; //例如 存：a[0] = 10; 取：a[0];
***
<a id="4"> </a>
## 四、数组的异常错误

 - 数组的使用：创建数组，依次赋值，依次取值
 - 有效下标范围：0~(数组长度-1)

<font color="red">**注意：**</font>**如果访问无效的下标，会导致数组下标越界，终端异常会出现Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException：6（数字说明是你访问的这个下标是无效的下标）**

![数组的异常错误](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200504095009.png)

***
<a id="5"> </a>
## 五、数组的遍历

### 5.1 数组的遍历方式

**遍历：** 从头到尾，逐一对数组的每个元素进行访问

```java
//遍历方式
public class Test {
	public static void main(String[] args) {
		int[] a = new int[2];
		a[0] = 1;
		1[1] = 2;
		for (int i = 0; i < a.length; i++) {//数组名.length可动态获得数组长度
			System.out.println(a[i]);//使用循环变量“i”充当下标，逐一访问数组中的每个元素
		}
	}
}
```


### 5.2 关于数组的默认值

在没有为数组元素赋值的情况下，依旧可以正确访问

| 数据类型| 该类型的数组默认值 |
|--|--|
| 整数 | 0 |
| 小数 | 0.0 |
| 字符 | \u000 |
| 布尔 | false |
| 其他 | null |
***
<a id="6"> </a>
## 六、数组的应用
### 6.1 数组的扩容

 - 创建数组时，必须显示指定长度，并在创建之后哦不可以更改长度
 - 扩容的思路：
	* 1、创建大于原数组长度的新数组 
	* 2、将原数组中的元素依次赋值到新数组中
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503183152.png)



### 6.2 数组的复制方式

 - 循环将原数组中所有元素逐一赋值给新数组
 - System.arraycopy(原数组, 原数组起始, 新数组, 新数组长度, 长度);
 - java.util.Arrays.copyOf(原数组, 新长度); //返回带有原值的新数组



#### 6.2.1 地址的替换

 - 数组作为引用类型之一，其变量中存储的是数组的地址
 - 完成元素赋值后，需将新数组地址，赋值给原变量进行替换
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503183310.png)



#### 6.2.2 组成类型的参数

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503183337.png)
<font color="red">**注意：**</font>方法调用时，将nums中的地址赋值给oneArray，此时二者只想同一个数组



#### 6.2.3 数组类型的返回值
创建新数组，长度为原数组的2倍，新数组中保持原有数据，返回新数组
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503183436.png)
<font color="red">**注意：**</font>创建新数组，长度为原数组的2倍，新数组中保留原有数据，返回新数组



### 6.3 可变长参数

 - **概念：** 可接收多个同类型实参，个数不限，使用方式与数组相同
 - **语法：** 数组类型...形参名 //必须定义在形参列表的最后，且只能有一个
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503183512.png)
***
<a id="7"> </a>
## 七、数组的排序

### 7.1 简单的数组排序分类

 - 冒泡排序法：相邻的两个数值比较大小，互换位置
 - 选择排序法：固定值与其他值依次比较大小，互换位置
 - JDK排序法：java.tuil.Arrays.sort(数组名); //JDK提供（默认升序）



### 7.2 冒泡排序法

> 冒泡排序（Bubble Sort），是一种计算机科学领域的较简单的排序算法。
> 它重复地走访过要排序的元素列，依次比较两个相邻的元素，如果顺序（如从大到小、首字母从Z到A）错误就把他们交换过来。走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素列已经排序完成。
> 这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端（升序或降序排列），就如同碳酸饮料中二氧化碳的气泡最终会上浮到顶端一样，故名“冒泡排序”。

```java
//冒泡排序法

public class ArrayBubbleSort {
	public static void main(String[] args) {
		//定义一个数组
		int[] array = new int[] {34, 65, 26, 12, 9, 14};
		for (int i = 0; i < array.length - 1; i++) {//外层循环控制的次数
			for (int j = 0; j < array.length - 1 - i; j++) {//内层循环控制元素互换次数
				//判断相邻两个元素的大小，如果前者比后者大，则执行换位
				if (array[j] > array[j + 1]) {
					int temp = array[j];
					array[j] = array[j + 1];
					array[j + 1] = temp;
				}
			}
		}
		for (int i = 0; i < array.length; i++) {//遍历数组元素
			System.out.print(array[i] + " ");
		}
	}
}
```



### 7.3 选择排序法

> 选择排序法是一种不稳定的排序算法。它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到全部待排序的数据元素排完。

```
//选择排序法

public class ArrayChooseSort {
	public static void main(String[] args) {
		int[] array = new int[] {23, 12, 56, 22, 99, 6};//定义一个数组
		for (int i = 0; i < array.length - 1; i++) {//外层循环控制第一个元素
			for (int j = i + 1; j < array.length; j++) {//内层循环控制第二个元素
				//判断每次循环的第一个元素比第二个元素的值大就互换
				if (array[i] > array[j]) {
					int temp = array[i];
					array[i] = array[j];
					array[j] = temp;
				}
			}
		}
		for (int i = 0; i < array.length; i++) {
			System.out.print(array[i] + " ");
		}
	}
}
```



### 7.4 JDK中的排序

> JDK排序是JDK中自带的一个保存在API中的方法。我们可以调用该方法实现排序

```java
import java.util.Arrays;
//JDK排序
//注意：默认JDK排序只能升序，升序后可以通过元素的倒置来实现降序

public class ArrayJDKSort {
	public static void main(String[] args) {
		int[] array = new int[] {23, 65, 23, 12, 34, 2, 1};
		Arrays.sort(array);//JDK排序方法
		print(array);
	}
	//遍历打印数组元素
	public static void print(int[] array) {
		for (int i = 0; i < array.length; i++) {
			System.out.print(array[i] + " ");
		}
	}
}
```



***
<a id="8"> </a>
## 八、关于二维数组

### 8.1 二维数组的概念

**概念：** 一维数组中的一维数组；数组总的元素还是数组
![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503184051.png)



### 8.2 二维数组的赋值

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503184116.png)



### 8.3 二维数组的内存分配

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503184147.png)



### 8.4 二维数组的访问

![在这里插入图片描述](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503184213.png)



### 8.5 二维数组的创建语法

| 声明赋值方式 | 具体声明赋值方法 |
|--|--|
| 先声明、再分配空间 | 数据类型[][] 数组名; 数组名 = new 数据类型[高维长度]\[低维长度]; |
| 声明并分配空间 | 数据类型[][] 数组名 = new 数据类型[高维长度]\[低维长度]; |
| 声明并赋值（繁） | 数据类型[][] 数组名 = new 数据类型\[高维长度] //不规则数组，自行new低维数组 |
| 声明并赋值（简） | 数据类型[] 数组名 = {{v1,v2,v3},{v4,v5},{v6}}; //显示初始化 |


### 8.6 杨辉三角

#### 8.6.1 什么是杨辉三角

> 杨辉三角，是二项式系数在三角形中的一种几何排列，中国南宋数学家杨辉1261年所著的《详解九章算法》一书中出现。
>
> 简单来说，每个数等于它上方两数之和，并且每行数字左右对称，由1开始逐渐变大。

![杨辉三角](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/20200503234735.png)

#### 8.6.2 基础数组版实现“杨辉三角”

```java
import java.util.Scanner;

public class ArrayYangHui {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("请输入要打印“杨辉三角”的行数：");
        int rows = sc.nextInt();
//        定义数组，定义n行n列的数组
        int[][] nums = new int[rows][rows];
//        每一行的第一列和最后一列都是1
        for (int i = 0; i < nums.length; i++) {
            nums[i][0] = 1;
            nums[i][i] = 1;
        }
//        从第三行开始上面数之和等于下面数的值，i控制行
        for (int i = 2; i < rows; i++) {
//            从第二列开始，j控制列
            for (int j = 1; j < rows; j++) {
//                每个数等于它上方两数之和（上一行的上一列+上一行的同一列）
                nums[i][j] = nums[i - 1][j - 1] + nums[i - 1][j];
            }
        }

//        打印输出杨辉三角
        for (int i = 0; i < rows; i++) {
//            并非每行中的每一列都打印，所以j的截止条件不是j<arr1[i].length，是j<=i
            for (int j = 0; j <= i; j++) {
                System.out.print(nums[i][j] + " ");
            }
            System.out.println();
        }
    }
}
```



#### 8.6.3 高级数组版“杨辉三角”

```java
import java.util.Scanner;

public class ArrayYangHui1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("请输入杨辉三角型的行数：");
        int n = sc.nextInt();
        int[][] nums = new int[n][];
        for (int i = 0; i < n; i++) {//行数 i=0 第一行  i=1  2 第二行 i=2  第3行
            //创建内层数组（二维数组中每一个值都是一维数组）
            nums[i] = new int[i + 1];//元素个数，根据行数增加元素的个数 nums[0]=new int [1]; nums[1]=new int [2];
            //遍历赋值
            for (int j = 0; j < nums[i].length; j++) {//列
                if (j == 0 || j == i) {//j == 0是左边全为1，j == i是右边全为1
                    nums[i][j] = 1;
                } else {
                    nums[i][j] = nums[i - 1][j - 1] + nums[i - 1][j];
                }
            }
        }
        //遍历：增强for循环，不懂得可以去百度，很简单的
        for (int[] num : nums) {
            for (int a : num) {
                System.out.print(a + " ");
            }
            System.out.println();
        }
    }
}
```



#### 8.6.4 算法实现“杨辉三角”

```java
import java.util.Scanner;

public class TestYangHui {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("请输入行数：");
        int rows = sc.nextInt();
        //控制行数
        for (int i = 1; i <= rows; i++) {
            //控制空格列数
            for (int j = 1; j <= rows - i; j++) {
                System.out.print(" ");
            }
            //控制数字列数
            int cols = 1;
            for (int k = 1; k <= i; k++) {
                System.out.print(cols + " ");
                cols = cols * (i - k) / k;//涉及算法
            }
            System.out.println();
        }
    }
}
```



***



> 上一章[【Java函数】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java函数.md)

> 下一章[【Java面向对象】](https://github.com/Ziphtracks/JavaLearningmanual/blob/master/docs/Java-Standard-Edition/Java面向对象.md)