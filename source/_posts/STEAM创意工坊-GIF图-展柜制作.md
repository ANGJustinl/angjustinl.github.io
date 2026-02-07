---
title: STEAM创意工坊 GIF图 展柜制作
author: ANGForever
date: 2022-04-02 16:02:07
tags: [Steam, 学习]
categories: [Steam]
mathjax: true
thumbnail: "https://i0.hdslb.com/bfs/article/watermark/15a82464aa3c42aa7a07386e84c104028602072e.png"
---

> 创意工坊代码
> 
> $J(&#39;[name=consumer_app_id]&#39;).val(480);$J(&#39;[name=file_type]&#39;).val(0);$J(&#39;[name=visibility]&#39;).val(0);

![效果如图](https://i0.hdslb.com/bfs/article/watermark/15a82464aa3c42aa7a07386e84c104028602072e.png)
<div style="text-align: center; font-size: 0.8em; color: #999;">效果如图</div>

写在这里的是我个人制作的步骤，尽可能的会便捷一些

---

#### 全过程需开启加速器加速steam或本地反代

## 1.首先你需要一张合适大小横向视频或GIF图

视频转换GIF网站 https://ezgif.com/

或者用ps或其他视频工具导出为GIF

## 2.调整图片

调整图片网站：https://ezgif.com/

- 缩放图片 ：（宽高可任意,后面steam有自己的拉伸,我是宽640,高360,为保证加载同步尽量大小在2MB左右）
- 裁剪图片：五份每份宽度相同（如按照我的大小则每份宽128px，高360px） 每一张大小需小于8MB

### [最重要的一步]调整图片的16进制编码（防止显示时存在黑边）：

网站：https://hexed.it/

#### 将GIF格式的结尾`3B`改为`21`

- 为防止格式化问题，建议在编辑器中以十六进制模式直接修改，不要用文本编辑器打开保存。
- 操作步骤：在 hexed.it 打开 GIF 文件，找到文件末尾的 `3B` 字节，将其改为 `21`，然后保存文件。
- 这样可以避免部分平台或工具自动格式化或损坏 GIF 文件结构。

![改前](https://i0.hdslb.com/bfs/article/watermark/aafac5849758df3b446b3d8e47931cb43cbf09e1.png)
<div style="text-align: center; font-size: 0.8em; color: #999;">改前</div>

![改后](https://i0.hdslb.com/bfs/article/watermark/6a9f99cbb7682c75f063ce111e29bc19ce770291.png)
<div style="text-align: center; font-size: 0.8em; color: #999;">改后</div>

## 3.上传图片

网站：https://steamcommunity.com/sharedfiles/edititem/767/3/

选择图片后按 F12 - 控制台 - 输入代码 - 回车键

> $J(&#39;[name=consumer_app_id]&#39;).val(480);$J(&#39;[name=file_type]&#39;).val(0);$J(&#39;[name=visibility]&#39;).val(0);

![输出结果填完点保存即可](https://i0.hdslb.com/bfs/article/watermark/3f4a554fe2a2eaea805faf653427762d1bde67f1.png)
<div style="text-align: center; font-size: 0.8em; color: #999;">输出结果填完点保存即可</div>

![放一下我的主页~](https://i0.hdslb.com/bfs/article/watermark/7f0846269488b13294b273c7eaf9f27f93479017.jpg@1256w_3560h_!web-article-pic.avif)
<div style="text-align: center; font-size: 0.8em; color: #999;">放一下我的主页~</div>