from .models import Order, Product, Prefecture, Order_Product_Prefecture_Relationship
from .serializers import OrderSerializer, ProductSerializer, PrefectureSerializer, Order_Product_Prefecture_RelationshipSerializer
from rest_framework import viewsets


class OrderViewSet(viewsets.ModelViewSet):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer


class ProductViewSet(viewsets.ModelViewSet):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer


class PrefectureViewSet(viewsets.ModelViewSet):
  queryset = Prefecture.objects.all()
  serializer_class = PrefectureSerializer


class Order_Product_Prefecture_RelationshipViewSet(viewsets.ModelViewSet):
  queryset = Order_Product_Prefecture_Relationship.objects.all()
  serializer_class = Order_Product_Prefecture_RelationshipSerializer
