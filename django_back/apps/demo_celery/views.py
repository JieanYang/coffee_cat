from django.shortcuts import render
from django.http import HttpResponse
from .tasks import sleepy


def index(request):
  sleepy.delay(10)
  return HttpResponse('Done!')
