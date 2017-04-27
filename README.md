# XSS

## 学习笔记

[XSS攻击学习笔记]();

## 项目的初始化与运行

+ 初始化本地开发目录

```
express -e ./
```

+ 安装依赖

```
npm install
```

+ 启动服务

```
npm start
```

命令号出现如下提示，则表示成功启动。或者浏览器直接访问`localhost:3000`

```
xss@0.0.0 start /Users/liujinhuan647/Documents/Study/xss
node ./bin/www
```

## 不足之处

+ 项目中的domParse.js和encode.js是从网上找到的。而非npm安装。
