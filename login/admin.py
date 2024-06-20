# coding=utf-8
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import UserInfo
from django.utils.translation import gettext_lazy as _

class UserInfoAdmin(UserAdmin):
    model = UserInfo
    # 使用 email 作为主要的排序和识别字段
    ordering = ('email',)
    # 调整 list_display 以展示 UserInfo 模型的相关字段
    list_display = ('email', 'name', 'job', 'nationality', 'city', 'phone_number')
    # 使得搜索可以基于 email 和其他关键字段
    search_fields = ('email', 'name', 'job', 'nationality', 'city', 'phone_number')

    # 调整 fieldsets 以适应没有 username 的情况
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('name', 'job', 'nationality', 'city', 'birthday', 'address', 'phone_number', 'url')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )

    # 为添加新用户调整字段集，移除 username，包含 email 和其他必要字段
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'name', 'job', 'nationality', 'city', 'birthday', 'address', 'phone_number', 'url'),
        }),
    )


admin.site.site_header = '智慧海洋牧场管理后台'  # 设置header
admin.site.site_title = '智慧海洋牧场管理后台'   # 设置title
admin.site.index_title = '智慧海洋牧场管理后台'

admin.site.register(UserInfo, UserInfoAdmin)
# admin.site.index_template = 'admin/admin_custom.html'

