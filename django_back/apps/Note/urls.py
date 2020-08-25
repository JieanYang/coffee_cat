from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('', views.note_list, name='allNotes'),
    path('<int:pk>/', views.note_detail, name='oneNote'),
]
