## git ##

廖雪峰git教程：https://www.liaoxuefeng.com/wiki/896043488029600

### 安装 ###

MAC

- 安装homebrew  
	/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

- 使用homebrew安装git  
	brew install git

windows

- 官网下载，默认选项安装  
	https://git-scm.com/downloads

- 配置  
	开始菜单里找到“Git”->“Git Bash”  
	git config --global user.name "Your Name"  
	git config --global user.email "email@example.com"

### 基础用法 ###

- 问题：
  - WINDOWS下会出现`LF will be replaced by CRLF` 的 警告：配置`git config --global core.autocrlf true`，[参考](https://www.jianshu.com/p/450cd21b36a4)

- 调出命令行  
	项目根目录右键
	git bash here

- 创建版本库  
	git init

- 添加文件  
	新建readme.md文件  
	git add readme.md（批量添加：git add .）

- 删除文件  
	删除目标文件  
	git add .

- 提交文件（增删改后都要提交）  
	git commit -m "message"

- 查看仓库当前状态  
	git status

- 查看文件与仓库版本的差异  
	git diff readme.md 

- 查看仓库日志  
	git log（单行显示：git log --pretty=oneline）

- 版本回退  
	git reset --hard HEAD~n（n表示要回退的次数，取1就是回退到上一个版本）

- 版本跳转  
	git reset --hard 版本号（版本号可以通过git reflog查看）

### 分支管理 ###

- 新建分支  
	git branch dev

- 查看当前分支（默认分支为master）  
	git branch

- 跳转到dev分支  
	git checkout dev

- 跳转回主分支  
	git checkout master

- 将dev分支的修改合并到master分支  
	git merge dev

- 删除分支  
	git branch -d dev

### 标签管理 ###

略

### 自定义git ###

编写.gitignore忽略特殊文件

- 套用模板
- 按照规则自定义

配置别名

搭建git服务器

### 远程仓库 ###

github

- 获取SSH加密传输密钥（选项使用默认值即可）  
	ssh-keygen -t rsa -C "youremail@example.com"

- 绑定密钥到github（允许添加多个Key，只要把每台电脑的Key都添加到GitHub）  
	在C:\Users\jack\.ssh找到上述命令生成id_rsa.pub公钥，复制里面的内容  
	登陆GitHub，打开“Account settings”，“SSH Keys”页面，点“Add SSH Key”，填上任意Title  
	在Key文本框里粘贴id_rsa.pub文件的内容，点“Add Key”

- 先有本地库，再关联远程库  
	git remote add origin git@github.com:GITHUB账号名/GITHUB仓库项目名.git

- 先有远程库，再克隆到本地库  
	git clone git@github.com:GITHUB账号名/GITHUB仓库项目名.git
	
- 提交到远程库  
	git push -u origin master（第一次带上-u参数将本地master与远程master连接起来）  
	git push origin master（第二次以及之后可以不带-u，还可以简写为git push）  
	git push origin dev（如果没有该分支会自动创建）

- 抓取远程库  
	git pull origin master  
	git pull origin dev

- 冲突  
	本地库的文件A修改了但未提交到远程库，同时其他人把远程库的文件A修改了，然后提交本地库的文件A就会发生冲突  
	解决：在提交之前先pull最新版的远程库，如果有冲突就合并冲突的代码，然后再提交。

- 只下载某个文件夹  
	网页上只能下载整个下项目，如果只想要下载某个文件夹，可以  
	拷贝浏览器里的网址 https://github.com/XXX/xxxxx/tree/master/folder1/folder2  
	把上述语句里的tree/master换成trunk  
	借用SVN，右键SVN Checkout到指定文件夹，输入转换后的地址，点击OK即可
	

- 更多功能：issue、

- 使用**github desktop**可以不用写命令行，更加直观方便


gitee

- 注册登录
- 设置-SSH公钥-标题自定义，填写C:\Users\jack\.ssh\id_rsa.pub的内容
- 先有远程库，再克隆到本地库  
	git clone git@gitee.com:gitee账号名/gitee仓库项目名.git
	

### TortoiseGit ###
- 代替命令行操作
- 文本对比
- 冲突处理

