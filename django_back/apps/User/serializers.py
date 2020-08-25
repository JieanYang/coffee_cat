from django.contrib.auth.models import User, Group
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'url', 'username', 'email', 'groups')
        extra_kwargs = {
            'url': {'view_name': 'User:user-detail'},
            'groups': {'view_name': 'User:group-detail'},
        }


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'url', 'name')
        extra_kwargs = {'url': {'view_name': 'User:group-detail'}}


class MessageSerializer(serializers.Serializer):
    message = serializers.CharField()
