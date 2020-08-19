from django.http import HttpResponse
from . import Send_Email


def send_email(request):
    gmail_user = 'rdv.reminder666@gmail.com'
    gmail_password = 'Pascalc4!'
    recipient = ['dev.sb.yja@gmail.com']
    subject = 'RDV Nanterre Prefecture Disponible'
    url = 'http://www.hauts-de-seine.gouv.fr/booking/create/14086/0'
    body = 'Aller sur le site ' + url 

    try:
        Send_Email.send_email(gmail_user,gmail_password, recipient,subject,body)
        return HttpResponse('successfully sent the mail', status=200)
    except:
        print('An exception occurred')

if __name__ == "__main__":
    send_email()