# coding=utf-8
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models


class CustomUserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)

        if extra_fields.get('is_staff'):
            raise ValueError('Regular user must have is_staff=False.')
        if extra_fields.get('is_superuser'):
            raise ValueError('Regular user must have is_superuser=False.')

        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if not extra_fields.get('is_staff'):
            raise ValueError('Superuser must have is_staff=True.')
        if not extra_fields.get('is_superuser'):
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

class UserInfo(AbstractUser):
    username = None  # Django 默认的 username 字段可以不使用
    name = models.CharField(max_length=100, null=True, blank=True, verbose_name='姓名')
    job = models.CharField(max_length=100, null=True, blank=True, verbose_name='职业')
    nationality = models.CharField(max_length=50, null=True, blank=True, verbose_name='国籍')
    city = models.CharField(max_length=50, null=True, blank=True, verbose_name='城市')
    birthday = models.DateField(null=True, blank=True, verbose_name='生日')
    address = models.CharField(max_length=255, null=True, blank=True, verbose_name='地址')
    email = models.EmailField(unique=True,verbose_name='邮箱')  # 确保邮箱唯一
    phone_number = models.CharField(max_length=20, null=True, blank=True, verbose_name='电话')
    url = models.URLField(blank=True, null=True, verbose_name='个人网站')
    c_time = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []  # 除 email 和 password 外，不强制要求其他字段

    objects = CustomUserManager()

    def __str__(self):
        return self.email
