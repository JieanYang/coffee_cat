from django.urls import path, include

from django.views import generic
from rest_framework.schemas import get_schema_view
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from . import views

# temporary
from rest_framework import views as rest_views, serializers, status
from rest_framework.response import Response

class MessageSerializer(serializers.Serializer):
    message = serializers.CharField()

class EchoView(rest_views.APIView):
    def post(self, request, *args, **kwargs):
        serializer = MessageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
# temporary

app_name = 'User'
urlpatterns = [
	path('login/', views.login, name='login'),
	path('logout/', views.logout, name='results'),
	path('test/', views.test, name='test'),
	path('noauth/', views.noauth, name='noauth'),

	# path(r'$', generic.RedirectView.as_view(url='/api/', permanent=False)),
    # path(r'api/', get_schema_view()),
    # path(r'auth/', include('rest_framework.urls', namespace='rest_framework')),
    path(r'auth/token/obtain/', TokenObtainPairView.as_view()),
    path(r'auth/token/refresh/', TokenRefreshView.as_view()),
    path(r'echo/', EchoView.as_view())
]


