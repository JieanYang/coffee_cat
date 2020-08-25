from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('', views.NoteList.as_view(), name='allNotes'),
    path('<int:pk>/', views.NoteDetail.as_view(), name='oneNote'),
]

urlpatterns = format_suffix_patterns(urlpatterns)