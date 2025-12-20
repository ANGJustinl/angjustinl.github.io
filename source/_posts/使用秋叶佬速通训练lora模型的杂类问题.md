---
title: 使用秋叶佬速通训练lora模型的杂类问题
date: 2023-04-02 16:02:07
tags: [Stable diffusion, AI, AIGC, 学习]
categories: [AI, Stable diffusion]
mathjax: true
thumbnail: "https://pic4.zhimg.com/80/v2-de137f467878e292ce19613d5b8c1c93_720w.webp"
---


![使用秋叶佬速通训练lora模型的杂类问题](https://pic4.zhimg.com/80/v2-de137f467878e292ce19613d5b8c1c93_720w.webp)

## 使用秋叶佬速通训练lora模型的杂类问题

##### [](#训练整合包来自https-www-bilibili-com-video-BV1fs4y1x7p2 "训练整合包来自https://www.bilibili.com/video/BV1fs4y1x7p2/")训练整合包来自[https://www.bilibili.com/video/BV1fs4y1x7p2/](https://www.bilibili.com/video/BV1fs4y1x7p2/)

###### [](#1-xformers模型问题-ModuleNotFoundError-No-module-named-‘xformers’ "1. xformers模型问题 ModuleNotFoundError: No module named ‘xformers’")1\. xformers模型问题 ModuleNotFoundError: No module named ‘xformers’

秋叶佬的整合包默认使用虚拟环境  
![就这个install.ps1](./images/pasted-1.png)  
但是在安装 \[第13行\] 的xformers时由于用pip安装了来自github的wheel，所以可能会出现


> ERROR: Could not install packages due to an OSError: HTTPSConnectionPool(host=’github.com’, port=443): Max retries exceeded with url: /C43H66N12O12S2/stable-diffusion-webui/releases/download/f/xformers-0.0.14.dev0-cp310-cp310-win\_amd64.whl (Caused by SSLError(SSLCertVerificationError(1, ‘\[SSL: CERTIFICATE\_VERIFY\_FAILED\] certificate verify fail

解决方法：  
在pip命令后加 \[c1\] –trusted-host github.com

如  
```bash
pip install -U -I --no-deps https://github.com/C43H66N12O12S2/stable-diffusion-webui/releases/download/f/xformers-0.0.14.dev0-cp310-cp310-win_amd64.whl --trusted-host github.com
```

![然后发现好慢！](./images/pasted-2.png)  
是这样的

> pip.\_vendor.urllib3.exceptions.ReadTimeoutError: HTTPSConnectionPool(host=’objects.githubusercontent.com’, port=443): Read timed out.

下载超时了…

我是自己用代理站下载然后 本地安装 的

###### [](#2-ValueError-check-hostname-requires-server-hostname "2. ValueError: check_hostname requires server_hostname")2\. ValueError: check\_hostname requires server\_hostname

这个是我自己纯纯nt没关代理
![](./images/pasted-0.png)  

参考：c1.[https://blog.csdn.net/m0\_51963375/article/details/129028343](https://blog.csdn.net/m0_51963375/article/details/129028343))))