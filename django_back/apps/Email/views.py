from django.http import HttpResponse
from . import Send_Email

from rest_framework import views as rest_views
from rest_framework.response import Response


class EmailView(rest_views.APIView):
    """
    Method: POST
    data:
    {
        "recipient": "[email]",
        "subject": "title",
        "body": "content"
    }
    """

    # def get(self, request, *args, **kwargs):
    #     return Response('nothing', status=200)

    def post(self, request, *args, **kwargs):
        print("POST call")
        print(request.data)
        send_email(request, **request.data)
        return Response('successfully sent the mail', status=200)


def send_email(request, **kwargs):
    gmail_user = 'rdv.reminder666@gmail.com'
    gmail_password = 'Pascalc4!'
    recipient = [kwargs.get('recipient')]
    subject = kwargs.get('subject')
    body = kwargs.get('body')
    body += ' -- supported by Jiean Yang'

    try:
        Send_Email.send_email(gmail_user, gmail_password, recipient, subject, body)
    except Exception as err:
        print('An exception occurred')
        print(err)
