from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from . import views



app_name = 'User'
urlpatterns = [
    path(r'auth/token/obtain/', TokenObtainPairView.as_view()),
    path(r'auth/token/refresh/', TokenRefreshView.as_view()),
    path(r'echo/', views.EchoView.as_view())
]
