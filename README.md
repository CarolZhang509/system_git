### 软件工程大作业
最好在浏览器无痕模式下打开网站。
##### 创建虚拟环境
在项目的根目录下执行，注意先要修改yml文件中的prefix路径为自己本地的路径
```bash
conda env create -f environment.yml
```
```yml
# 修改路径，或者省略prefix行，让Conda自动选择一个安装路径。
prefix: /Users/liuvivian/anaconda3/envs/system
```
##### 数据库迁移
先修改`SeaMonitorSystem/settings.py`中的数据库配置
```python
# 把NAME和PASSWORD改为自己的数据库名和密码
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'SeaSystem',
        'USER': 'root',
        'PASSWORD': '123456',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}
```
找到`SeaSystem.sql`文件，导入到数据库中，

然后在根目录下执行以下命令
```bash
python manage.py makemigrations
python manage.py migrate
```

##### 运行项目
在项目的根目录下执行
```bash
python manage.py runserver
```
然后在浏览器中输入 `http://127.0.0.1:8000/` 即可访问

(如果想跳过登陆界面可以直接输入 `http://127.0.0.1:8000/index/` )

PS:

目前的管理员账户只有
```
Email:3210297430@qq.com
Password:123456
```
里面Django自带的admin后台，如果自己需要注册自己的，可以用
```bash
python manage.py createsuperuser
```
按照提示输入所有的信息就可以
