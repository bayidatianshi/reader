## 常见的三种加密 ##
相关连接：

https://www.cnblogs.com/shoshana-kong/p/10934550.html

http://www.360doc.com/content/15/0330/11/2664229_459254106.shtml

http://www.ruanyifeng.com/blog/2013/07/rsa_algorithm_part_two.html

https://blog.csdn.net/qq_41259576/article/details/91356419

### 不可逆加密之MD5 ###

### 对称加密 ###

### 非对称加密 ###

## 前端RSA加密 ##
0. [作为演示，可以使用在线生成的RSA公钥和私钥](http://tools.jb51.net/password/rsa_encode)
1. 安装jsencrypt
```markup
npm install jsencrypt
```
2. 引入
```javascript
import JSEncrypt from 'jsencrypt'
```
3.使用
```javascript
// 公钥加密（传输加密后的数据，防止密码明文传输）
let pubKey = `-----BEGIN PUBLIC KEY-----
XXX
-----END PUBLIC KEY-----`; // 公钥从后端获取或者前端配置读取
let encryptor = new JSEncrypt(); // 创建加密对象实例
encryptor.setPublicKey(pubKey); // 设置公钥
let rsaPassWord = encryptor.encrypt('要加密的内容'); // 对内容进行加密

// 私钥解密（通常是后端处理，这里只做前端解密的演示）
let priKey  = `-----BEGIN RSA PRIVATE KEY-----
XXX
-----END RSA PRIVATE KEY----`; // 私钥不能保存在前端，容易泄露 
let decrypt = new JSEncrypt(); // 创建解密对象实例
decrypt.setPrivateKey(priKey); // 设置秘钥
let uncrypted = decrypt.decrypt(rsaPassWord); // 解密之前拿公钥加密的内容
```