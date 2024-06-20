from django.apps import AppConfig
from django.db import models


class LoginConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "login"

    verbose_name = '登陆管理'

