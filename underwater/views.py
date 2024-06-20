from django.shortcuts import render,redirect

# Create your views here.
def underwater(request):
    return render(request, 'html/dash-UnderwaterSystem.html')