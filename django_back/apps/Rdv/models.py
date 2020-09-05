from django.db import models


STATUS = (
  ('1', 'status 1'),
  ('2', 'status 2'),
  ('3', 'status 3'),
)


class Order(models.Model):
  status = models.CharField(max_length=1, choices=STATUS, default='1')
  created = models.DateTimeField(auto_now_add=True)
  user = models.ForeignKey('auth.User', related_name='orders', on_delete=models.CASCADE)


class Product(models.Model):
  name = models.CharField(max_length=30)
  url = models.CharField(max_length=100)
  price = models.IntegerField()
  status = models.CharField(max_length=1, choices=STATUS, default='1')
  created = models.DateTimeField(auto_now_add=True)
  orders = models.ManyToManyField(Order, through='Order_Product')


class Prefecture(models.Model):
  name = models.CharField(max_length=30)
  STATUS = (
    ('A', 'Available'),
    ('C', 'Close'),
  )
  status = models.CharField(max_length=1, choices=STATUS, default='C')


class Order_Product(models.Model):
  order = models.ForeignKey(Order, related_name='order_product', on_delete=models.CASCADE)
  product = models.ForeignKey(Product, related_name='order_product', on_delete=models.CASCADE)
  quantity = models.IntegerField()
  prefecture = models.ForeignKey(Prefecture, related_name='order_product', on_delete=models.CASCADE)
