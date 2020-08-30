"""django_back URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# from django.views import generic
from rest_framework.schemas import get_schema_view

from apps.upload.views import image_upload

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken import views as token_views


class DocsView(APIView):
    def get(self, request, *args, **kwargs):
        apidocs = {'users': request.build_absolute_uri('users/'),
                   'groups': request.build_absolute_uri('groups/'),
                   'notes': request.build_absolute_uri('Note/'),
                   'upload': request.build_absolute_uri('upload/'),
                   'email': request.build_absolute_uri('Email/send_email'),
                   }
        return Response(apidocs)


urlpatterns = [
    path('', DocsView.as_view()),
    path('', include('apps.UserGroup.urls')),
    path('upload/', image_upload, name='upload'),
    path('Email/', include('apps.Email.urls')),
    path('Note/', include('apps.Note.urls')),

    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api-token-auth/', token_views.obtain_auth_token)

    # path(r'$', generic.RedirectView.as_view(url='/api/', permanent=False)),
    # path(r'api/', get_schema_view()),
    # path(r'auth/', include('rest_framework.urls', namespace='rest_framework')),
]
# urlpatterns = [path(r'api/', include(urlpatterns))]

if bool(settings.DEBUG):
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
