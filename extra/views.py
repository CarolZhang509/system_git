from django.shortcuts import render, redirect

from django.http import JsonResponse
from .forms import InputForm
from .bunny import conduct_inference
from PIL import Image

def call_model(text, image):
    return conduct_inference(text, image)


def chat_api(request):
    if request.method == 'POST':
        print("request.POST:", request.POST)
        print("request.FILES:", request.FILES)  # 添加这行来检查文件数据
        form = InputForm(request.POST, request.FILES)
        if form.is_valid():
            text_input = form.cleaned_data['text_input']
            image_input = form.cleaned_data.get('file')
            image=None

            print("text_input", text_input)
            print("file", image_input)
            if image_input is not None:
                # 将 PIL Image 转换为模型可接受的格式
                image = Image.open(image_input)
            # 调用模型处理函数
            response = call_model(text_input, image)
            # response="模拟输出"
            print("response:", response)

            return JsonResponse({'response': response})
        else:
            return JsonResponse({'error': form.errors}, status=400)
    else:
        return JsonResponse({'error': 'Only POST method is allowed'}, status=405)


def calendar(request):
    return render(request, 'html/app-calendar.html')


def chat(request):
    return render(request, 'html/app-chat.html')


def todoList(request):
    return render(request, 'html/app-todoList.html')
