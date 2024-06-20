from django.shortcuts import render,redirect

# Create your views here.
# def intelligent(request):
#     return render(request, 'html/dash-IntelligentCenter.html')

# intelligent/views.py
from .models import WaterQualityPredict
import json

def intelligent(request):
    water_quality_data = WaterQualityPredict.objects.all()
    temp_data = []
    ph_data = []

    for data1 in water_quality_data:
        temp_data.append(data1.TEMP)
        ph_data.append(data1.PH)

    context = {
        'temp_data': json.dumps(temp_data),  # 使用json.dumps将数据转换为JSON字符串
        'ph_data': json.dumps(ph_data),
    }
    return render(request, 'html/dash-IntelligentCenter.html', context)

#不知道该改点什么
#再改
