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

urlpatterns = [
    path('Note/', include('apps.Note.urls')),
    path('User/', include('apps.User.urls')),
    path('', image_upload, name='upload'),
    path('admin/', admin.site.urls),

    # path(r'$', generic.RedirectView.as_view(url='/api/', permanent=False)),
    path(r'api/', get_schema_view()),
    path(r'auth/', include('rest_framework.urls', namespace='rest_framework')),
]
# urlpatterns = [path(r'api/', include(urlpatterns))]

if bool(settings.DEBUG):
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
