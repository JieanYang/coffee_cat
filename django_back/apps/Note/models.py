from django.db import models


class Note(models.Model):
    title = models.CharField(max_length=200)
    content = models.CharField(max_length=2000)
    created = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey('auth.User', related_name='notes', on_delete=models.CASCADE)

    class Meta:
        ordering = ('created',)
