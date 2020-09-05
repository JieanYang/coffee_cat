from .models import Order, Product, Prefecture
from .serializers import OrderSerializer, ProductSerializer, PrefectureSerializer
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
