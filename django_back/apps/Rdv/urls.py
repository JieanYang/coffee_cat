from django.urls import path, include
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import routers
from .views import OrderViewSet, ProductViewSet, PrefectureViewSet

class RdvView(APIView):
  """
    Api for order, product and prefecture
    """
  def get(self, request, *args, **kwargs):
    apidocs = {
      'orders': request.build_absolute_uri('orders/'),
      'products': request.build_absolute_uri('products/'),
      'prefectures': request.build_absolute_uri('prefectures/')
    }
    return Response(apidocs)

app_name = 'Rdv'
router = routers.DefaultRouter()
router.register('orders', OrderViewSet)
router.register('products', ProductViewSet)
router.register('prefectures', PrefectureViewSet)
urlpatterns = [
  path('', RdvView.as_view()),
  path('', include(router.urls)),
]
