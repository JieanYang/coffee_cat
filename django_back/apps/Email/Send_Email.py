import smtplib


def send_email(user, pwd, recipient, subject, body):
    FROM = user
    TO = recipient if isinstance(recipient, list) else [recipient]
    SUBJECT = subject
    TEXT = body

    # Prepare actual message
    message = """From: %s\nTo: %s\nSubject: %s\n\n%s
    """ % (FROM, ", ".join(TO), SUBJECT, TEXT)
    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.ehlo()
        server.starttls()

        server.ehlo()
        server.login(user, pwd)
        server.sendmail(FROM, TO, message)
        server.close()
        print('successfully sent the mail')
    except Exception as err:
        print("failed to send mail")
        print(err)


if __name__ == "__main__":
    gmail_user = 'rdv.reminder666@gmail.com'
    gmail_password = 'Pascalc4!'
    recipient = ['dev.sb.yja@gmail.com']
    subject = 'RDV Nanterre Prefecture Disponible'
    url = 'http://www.hauts-de-seine.gouv.fr/booking/create/14086/0'
    body = 'Aller sur le site ' + url

    send_email(gmail_user, gmail_password, recipient, subject, str(body))
