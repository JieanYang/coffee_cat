from django.contrib.auth.models import User, Group
from apps.Note.models import Note
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    notes = serializers.PrimaryKeyRelatedField(many=True, queryset=Note.objects.all())

    class Meta:
        model = User
        fields = ('id', 'url', 'username', 'email', 'groups', 'notes')
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
