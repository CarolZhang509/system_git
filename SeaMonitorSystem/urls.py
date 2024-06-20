# coding=utf-8
"""SeaMonitorSystem URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import include
from django.contrib import admin
from django.urls import path, include
from login import views as login_views
from maininfo import views as maininfo_views
from userpage import views as userpage_views
from intelligent import views as intelligent_views
from underwater import views as underwater_views
from datacenter import views as datacenter_views
from extra import views as apps_views
from allcharts import views as allcharts_views

urlpatterns = [
    path('captcha/', include('captcha.urls')),  # 验证码相关URL
    path("", login_views.signin_view, name="signin"),  # 使用 signin_view 处理根 URL
    path("signup/", login_views.signup_view, name="signup"),
    path("password_reset/", login_views.password_reset_view, name="password_reset"),
    path("lockscreen/", login_views.lockscreen_view, name="lockscreen"),
    path("two_step_verification/", login_views.two_step_verification_view, name="two_step_verification"),

    # 主要信息界面的url路由
    path("index/", maininfo_views.index, name="index"),

    # 智能分析界面的url路由
    path("intelligent/", intelligent_views.intelligent, name="intelligent"),

    # 水下系统界面的url路由
    path("underwater/", underwater_views.underwater, name="underwater"),

    # 数据中心界面的url路由
    path("datacenter/", datacenter_views.datacenter, name="datacenter"),

    # 图表展示界面的url路由
    path("allcharts/", allcharts_views.allcharts, name="allcharts"),

    # 三个应用的url路由
    path("chat/", apps_views.chat, name="chat"),
    path("calendar/", apps_views.calendar, name="calendar"),
    path("todolist/", apps_views.todoList, name="todolist"),

    # 用户信息与设置界面的url路由
    path("user_profile/", userpage_views.user_profile, name="user_profile"),
    path("user_account_settings/", userpage_views.user_settings, name="user_settings"),

    # 确保管理员URL配置正确
    path("admin/", admin.site.urls),

    # 额外功能的url
    path('extra/', include('extra.urls')),

]
