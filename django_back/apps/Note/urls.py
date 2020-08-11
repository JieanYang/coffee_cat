from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_all_notes, name='allNotes'),
    path('<int:note_id>/', views.get_note_by_id, name='oneNote'),
]