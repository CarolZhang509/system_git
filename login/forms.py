from django import  forms
from captcha.fields import CaptchaField

class LoginForm(forms.Form):
    email = forms.EmailField(label="邮箱", widget=forms.EmailInput(attrs={'class': 'form-control1'}))
    password = forms.CharField(label="密码", widget=forms.PasswordInput(attrs={'class': 'form-control1'}))
    captcha = CaptchaField(label='验证码')
