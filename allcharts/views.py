from django.shortcuts import render,redirect

# Create your views here.
def allcharts(request):
    return render(request, 'html/dash-charts-apex.html')
