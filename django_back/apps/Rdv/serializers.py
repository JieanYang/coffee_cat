from rest_framework import serializers
from .models import Order, Product, Prefecture


class OrderSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Order
    fields = ('id', 'url', 'status', 'created', 'user')
    extra_kwargs = {
      'url': {'view_name': 'Rdv:order-detail'},
      'user': {'view_name': 'UserGroup:user-detail'},
    }


class ProductSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Product
    fields = ('id', 'url', 'name', 'link', 'price', 'status', 'created')
    extra_kwargs = {
      'url': {'view_name': 'Rdv:product-detail'},
    }


class PrefectureSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Prefecture
    fields = ('id', 'url', 'name', 'status')
    extra_kwargs = {
      'url': {'view_name': 'Rdv:prefecture-detail'},
    }
