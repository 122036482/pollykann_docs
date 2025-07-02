---
title: android手机如何导入视频和字幕到小鹦看看（pollykann）？
---

# android手机如何导入视频和字幕到小鹦看看（pollykann）？

:::warning
Android版才有此功能，苹果版暂时没有！
:::

[小鹦看看](https://www.pollykann.com)（英文名：pollykann，可以在各大应用市场下载），是一款通过电影、演讲等视频和字幕内容学习英语的工具，学习方法独树一帜，通过精听、跟读等方式学习资源里面的地道英语，更加有趣高效。

除了内部已有的线上学习资源之外，大家还可以将手机和电脑上面本地的视频和字幕文件导入到小鹦看看进行学习。下面我们一步一步来教大家如何操作。



首先我们要了解android的文件存储机制。android10之后，android将每个应用的文件进行沙箱化，也就是每个应用只能读写自己沙箱内部的文件。在不获取存储权限的情况下，无法读取其他应用沙箱内生成的文件，也无法读取sd卡里面的其他文件。即使获取了存储权限，也只能读取系统公共目录下面的音频、视频、图片等媒体文件。应用卸载，应用内部沙箱内的所有文件也都会一起删除，节省系统的存储空间。

小鹦看看使用时不需要申请存储权限，所以也是完全按照文件沙箱化进行开发设计的。所以要读取本地的文件，就必须将这些文件，拷贝的应用内部的沙箱里面。小鹦看看沙箱的路径是“存储卡/Android/data/com.pollykann/files”目录，本地资源扫描路径是“存储卡/Android/data/com.pollykann/files/LocalResources”目录。所以大家要将视频和字幕导入到小鹦看看，只需要将视频和字幕拷贝到“存储卡/Android/data/com.pollykann/files/LocalResources”目录即可。

下面是将文件拷贝到“ **存储卡/Android/data/com.pollykann/files/LocalResources** ”目录的几种方法：


## 一、通过app操作，选择手机存储卡里面的视频和字幕导入

操作视频：

<VideoPlay url="https://s.pollykann.com/d1/0a0367a951f9978e68f33efa536dd7f8.mp4" description="操作视频教程"/> 


## 1、切换到“文件”切换卡，点击右上角的“+”按钮

<ImageCard imageSrc="https://pica.zhimg.com/v2-ab4480cfba72d2f7e566da1e908e946a_1440w.jpg" description="旧版本切换卡名称是“本地”，新版本已改为“文件”"/> 


## 2、选择“选择文件导入（长按可多选）”

<ImageCard imageSrc="https://picx.zhimg.com/v2-c1e2be8ccee6d0e3babe95c60cdd0871_1440w.jpg" description=""/> 

## 3、默认会进入存储卡的根目录，进入存放资源的文件夹，选择对应的文件导入

如果要选择多个文件同时导入，可以长按多选。

<ImageCard imageSrc="https://pic2.zhimg.com/v2-68b97fdc4c269bb573fb7e2f520e7f07_1440w.jpg" description=""/> 

<ImageCard imageSrc="https://picx.zhimg.com/v2-3a801efb77d705f0fff65c49b25e6b1f_1440w.jpg" description=""/> 


## 4、导入成功，会显示成功导入的文件，点击文件即可查看

<ImageCard imageSrc="https://pic2.zhimg.com/v2-d94c3410b529da3044fe93b02aaf257b_1440w.jpg" description=""/> 

最好保证，视频和字幕的文件名完全一致，这样点击播放视频，才能自动显示字幕！！！

如果文件名太长，建议手动修改短一点，避免因为特殊字符导致匹配失败。导入之后，可以左划文件-->重命名，进行修改名称。

## 二、通过windows电脑导入

## 1、手机通过usb连接windows

下拉状态栏，修改“USB连接方式”为“文件传输”

## 2、进入目录拷贝

进入windows的资源管理器，找到手机对应的设备，进入/Android/data/com.pollykann/files/LocalResources目录，将windows电脑中的视频和字幕文件拷贝到此目录即可

<ImageCard imageSrc="https://pic2.zhimg.com/v2-769c864cc5644cae8f4ac4a06e5d72b1_1440w.jpg" description=""/> 

## 3、进入app查看

进入小鹦看看的列表--本地资源界面查看，拷贝的文件是否已显示在列表。

如果没显示，可以退出app重新进入试试。

最好保证，视频和字幕的文件名完全一致，这样点击播放视频，才能自动显示字幕！！！

如果文件名太长，建议手动修改短一点，避免因为特殊字符导致匹配失败。导入之后，可以左划文件-->重命名，进行修改名称。

## 三、通过苹果电脑导入

## 1、苹果电脑安装“Android File Transfer”的应用

## 2、手机通过usb连接mac

连接成功后，Android File Transfer将自动打开。 如果没有自动打开，点击打开。

## 3、进入目录拷贝

Android File Transfer中进入/Android/data/com.pollykann/files/LocalResources目录，将mac电脑中的视频和字幕文件拖拽到此目录即可

## 4、进入app查看

进入小鹦看看的列表--本地资源界面查看，拷贝的文件是否已显示在列表。

如果没显示，可以退出app重新进入试试。

最好保证，视频和字幕的文件名完全一致，这样点击播放视频，才能自动显示字幕！！！

如果文件名太长，建议手动修改短一点，避免因为特殊字符导致匹配失败。导入之后，可以左划文件-->重命名，进行修改名称。

:::tip
如果想通过播放纯音频资源的方式学习英语，可以下载“[英语听听（tinglee）](https://play.google.com/store/apps/details?id=com.tinglee)”体验。
:::