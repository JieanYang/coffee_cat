import smtplib

def send_email(user, pwd, recipient, subject, body):
    import smtplib

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
        print ('successfully sent the mail')
    except:
        print ("failed to send mail")

if __name__ == "__main__":
    gmail_user = 'rdv.reminder666@gmail.com'
    gmail_password = 'Pascalc4!'
    recipient = ['pascalliangc4@gmail.com','pierre.lee88@gmail.com']
    subject = 'RDV Nanterre Prefecture Disponible'
    url = 'http://www.hauts-de-seine.gouv.fr/booking/create/14086/0'
    body = 'Aller sur le site ' + url 

    send_email(gmail_user,gmail_password,recipient,subject,str(body))