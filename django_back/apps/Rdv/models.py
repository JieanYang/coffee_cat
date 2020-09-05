from django.db import models


class Order(models.Model):
  STATUS = (
    ('1', 'status 1'),
    ('2', 'status 2'),
    ('3', 'status 3'),
  )
  created = models.DateTimeField(auto_now_add=True)
  user = models.ForeignKey('auth.User', related_name='orders', on_delete=models.CASCADE)


class Product(models.Model):
  name = models.CharField(max_length=200)
  url = models.CharField(max_length=200)
  price = models.IntegerField()
  STATUS = (
    ('1', 'status 1'),
    ('2', 'status 2'),
    ('3', 'status 3'),
  )
  created = models.DateTimeField(auto_now_add=True)


