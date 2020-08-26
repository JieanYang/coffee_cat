from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register(r'groups', views.GroupViewSet)

app_name = 'User'
urlpatterns = [
    path(r'', include(router.urls)),
    path(r'users/', views.UserList.as_view()),
    path(r'users/<int:pk>/', views.UserDetail.as_view()),

    path(r'auth/token/obtain/', TokenObtainPairView.as_view()),
    path(r'auth/token/refresh/', TokenRefreshView.as_view()),
    path(r'echo/', views.EchoView.as_view())
]
