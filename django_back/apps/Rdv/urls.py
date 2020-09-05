from rest_framework import routers
from .views import OrderViewSet, ProductViewSet, PrefectureViewSet


app_name = 'Rdv'
router = routers.DefaultRouter()
router.register('orders', OrderViewSet)
router.register('products', ProductViewSet)
router.register('prefectures', PrefectureViewSet)
urlpatterns = router.urls