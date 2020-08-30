from django.contrib.auth.models import User, Group

from rest_framework import generics
from .serializers import UserSerializer, GroupSerializer
# MessageSerializer

from rest_framework import permissions
from rest_framework import viewsets

from rest_framework import views as rest_views, serializers, status
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)

    queryset = User.objects.all()
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)

    queryset = Group.objects.all()
    serializer_class = GroupSerializer


# class EchoView(rest_views.APIView):
#     def post(self, request, *args, **kwargs):
#         serializer = MessageSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
