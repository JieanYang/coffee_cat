from celery import shared_task
from time import sleep


@shared_task
def add(x, y):
    return x + y


@shared_task
def mul(x, y):
    return x * y


@shared_task
def xsum(numbers):
    return sum(numbers)


@shared_task
def sleepy(duration):
    sleep(duration)
    return None
