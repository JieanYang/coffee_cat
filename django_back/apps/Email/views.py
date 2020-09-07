from django.http import HttpResponse
from . import Send_Email

from rest_framework import views as rest_views
from rest_framework.response import Response
from .tasks import send_email_task


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
    #     send_email_task.delay()
    #     return Response('successfully sent the mail in task', status=200)

    def post(self, request, *args, **kwargs):
        print("POST call")
        print(request.data)
        send_email_task.delay(**request.data)
        return Response('successfully sent the mail', status=200)
