from django.shortcuts import render,redirect

# Create your views here.
def user_profile(request):
    return render(request, 'html/user-profile.html')

def user_settings(request):
    return render(request, 'html/user-account-settings.html')