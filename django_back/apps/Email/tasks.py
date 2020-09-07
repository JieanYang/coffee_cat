from time import sleep
from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings

@shared_task
def send_email_task(**kwargs):
  sleep(20)
  subject = kwargs.get('subject')
  message = kwargs.get('body')
  email_from = settings.EMAIL_HOST_USER
  recipient_list = [kwargs.get('recipient')]
  send_mail(subject, message, email_from, recipient_list)

  return None
