from django.shortcuts import render,redirect

# Create your views here.
def datacenter(request):
    return render(request, 'html/dash-DataCenter.html')