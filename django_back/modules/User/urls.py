from django.urls import path

from . import views

app_name = 'User'
urlpatterns = [
	path('login/', views.login, name='login'),
	path('logout/', views.logout, name='results'),
	path('test/', views.test, name='test'),
	path('noauth/', views.noauth, name='noauth'),
]