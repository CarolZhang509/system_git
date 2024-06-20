# coding=utf-8
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from login.models import UserInfo
from .forms import LoginForm


# 处理登陆请求，对应的html文件为auth-cover-signin.html
# 通过唯一的用户名，使用Django的ORM去数据库中查询用户数据
# 如果有匹配项，则进行密码对比，如果没有匹配项，说明用户名不存在。如果密码对比错误，说明密码不正确。
# def signin_view(request):
#     if request.method == 'POST':
#         form = LoginForm(request.POST)  # 使用POST数据初始化表单
#         email = request.POST.get('email', None)
#         password = request.POST.get('password', None)
#         if not email or not password:
#             # 如果邮件或密码未填写，返回错误信息
#             return render(request, 'html/login/auth-cover-signin.html', {
#                 "message": "所有字段都必须填写！"
#             })
#
#         # 使用strip()方法去除可能的首尾空格
#         email = email.strip()
#         user = authenticate(request, username=email, password=password)
#         if user is not None:
#             login(request, user)
#             if user.is_superuser:
#                 return redirect('admin:index')  # 如果是管理员，重定向到管理员控制面板
#             return redirect('index/')  # 对于普通用户，重定向到用户信息页面
#         else:
#             # 如果认证失败，返回错误信息
#             return render(request, 'html/login/auth-cover-signin.html', {
#                 "message": "用户名或密码不正确！"
#             })
#     # 对于请求，只显示登录表单
#     return render(request, 'html/login/auth-cover-signin.html')

def signin_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)  # 使用POST数据初始化表单
        if form.is_valid():  # 验证表单数据，包括验证码
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            user = authenticate(request, username=email, password=password)
            if user is not None:
                login(request, user)
                if user.is_superuser:
                    return redirect('admin:index')  # 如果是管理员，重定向到管理员控制面板
                return redirect('index/')  # 对于普通用户，重定向到用户信息页面
            else:
                # 如果认证失败，返回错误信息
                return render(request, 'html/login/auth-cover-signin.html', {
                    "form": form,
                    "message": "用户名或密码不正确！"
                })
        else:
            # 如果表单验证失败（包括验证码错误）
            return render(request, 'html/login/auth-cover-signin.html', {
                "form": form,
                "message": "表单数据有误，请检查输入。"
            })

    else:
        form = LoginForm()  # 对于GET请求，创建一个空的表单实例
        return render(request, 'html/login/auth-cover-signin.html', {"form": form})


def signup_view(request):
    if request.method == 'POST':
        # 获取必填字段
        email = request.POST.get('email')
        password = request.POST.get('password')
        name = request.POST.get('name')
        job = request.POST.get('job')

        # 获取可选字段，并检查它们是否为空，如果为空则不包括在参数中
        optional_fields = {
            'nationality': request.POST.get('nationality') if request.POST.get('nationality') else None,
            'city': request.POST.get('city') if request.POST.get('city') else None,
            'birthday': request.POST.get('birthday') if request.POST.get('birthday') else None,
            'address': request.POST.get('address') if request.POST.get('address') else None,
            'phone_number': request.POST.get('phone_number') if request.POST.get('phone_number') else None,
            'url': request.POST.get('url') if request.POST.get('url') else None
        }

        # 清理字典，移除值为None的键
        cleaned_fields = {k: v for k, v in optional_fields.items() if v is not None}

        try:
            # 创建用户
            user = UserInfo.objects.create_user(
                email=email, password=password, name=name, job=job, **cleaned_fields
            )
            login(request, user)  # 登录新用户
            # 重定向到主页或显示成功页面
            return redirect('index')
        except Exception as e:
            print("Error during user creation:", str(e))
            return render(request, 'html/login/auth-cover-signup.html', {
                "message": "注册失败！" + str(e)
            })

    # 如果不是POST请求，返回注册表单页面
    return render(request, 'html/login/auth-cover-signup.html')


def password_reset_view(request):
    return render(request, 'html/login/auth-cover-password-reset.html')

def lockscreen_view(request):
    return render(request, 'html/login/auth-cover-lockscreen.html')

def two_step_verification_view(request):
    return render(request, 'html/login/auth-cover-two-step-verification.html')
