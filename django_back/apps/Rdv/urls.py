from django.urls import path, include
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import routers
from .views import OrderViewSet, ProductViewSet, PrefectureViewSet, Order_Product_Prefecture_RelationshipViewSet

class RdvView(APIView):
  """
    Api for order, product, prefecture and order_product_prefecture_relationship
    """
  def get(self, request, *args, **kwargs):
    apidocs = {
      'orders': request.build_absolute_uri('orders/'),
      'products': request.build_absolute_uri('products/'),
      'prefectures': request.build_absolute_uri('prefectures/'),
      'order_product_prefecture_relationship': request.build_absolute_uri('order_product_prefecture_relationship/')
    }
    return Response(apidocs)

app_name = 'Rdv'
router = routers.DefaultRouter()
router.register('orders', OrderViewSet)
router.register('products', ProductViewSet)
router.register('prefectures', PrefectureViewSet)
router.register('order_product_prefecture_relationship', Order_Product_Prefecture_RelationshipViewSet)
urlpatterns = [
  path('', RdvView.as_view()),
  path('', include(router.urls)),
]
