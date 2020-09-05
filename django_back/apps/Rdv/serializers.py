from rest_framework import serializers
from .models import Order, Product, Prefecture, Order_Product_Prefecture_Relationship


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


class Order_Product_Prefecture_RelationshipSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Order_Product_Prefecture_Relationship
    fields = ('id', 'url', 'order', 'product', 'prefecture', 'quantity')
    extra_kwargs = {
      'url': {'view_name': 'Rdv:order_product_prefecture_relationship-detail'},
      'order': {'view_name': 'Rdv:order-detail'},
      'product': {'view_name': 'Rdv:product-detail'},
      'prefecture': {'view_name': 'Rdv:prefecture-detail'},
    }
