from django.urls import path, include
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
from rest_framework import routers
from . import views

app_name = 'UserGroup'
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
urlpatterns = router.urls

# path(r'auth/token/obtain/', TokenObtainPairView.as_view()),
# path(r'auth/token/refresh/', TokenRefreshView.as_view()),
# path(r'echo/', views.EchoView.as_view())
