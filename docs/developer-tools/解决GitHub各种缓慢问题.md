# 解决GitHub各种缓慢问题

------

> GitHub是一个国外服务器，对于我们中国用户访问国外服务器的话肯定是很缓慢的，甚至连GitHub网址都打不开，有的却是图片显示不出来。由于存在这一些问题，所以对于使用Windows系统的我需要通过修改host文件来加快访问GitHub的速度！

|              解决GitHub访问缓慢以及图片显示问题              |
| :----------------------------------------------------------: |
| **延`C:\Windows\System32\drivers\etc\host`路径打开并编辑host文件，并添加以下内容** |
| ![image-20200706213654926](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200706213656.png) |
|     **添加以上内容即可解决访问缓慢以及图片不显示等问题**     |

------

|                 解决push、pull等命令缓慢问题                 |
| :----------------------------------------------------------: |
| **修改本地Git目录`F:\Program Files\Git\etc\ssh\ssh_config`文件设置使用使用ssh来连接git 服务器** |
| ![image-20200706214252603](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200706214254.png) |
| **修改本地Git目录`F:\Program Files\Git\etc\ssh\sshd_config`文件内的useDNS** |
| ![image-20200706214549549](https://gitee.com/Ziphtracks/Figurebed/raw/master/img/1/20200706214551.png) |
|       **修改好后即可解决pull和push等命令操作缓慢问题**       |

