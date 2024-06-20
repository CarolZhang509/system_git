from django.urls import path
from .views import chat_api

urlpatterns = [
    path("send-message/", chat_api, name='send-message'),
]
