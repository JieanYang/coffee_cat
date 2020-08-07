import requests
import time
import csv
import datetime
import random
import Send_Email
import pandas as pd


if __name__ == "__main__":
    df_requester_list = pd.read_csv("requester.csv",header=0, sep=',')
    df_requester_list = df_requester_list.rename(columns={"Horodateur": "time", "你的邮箱": "email", "你需要哪个Prefecture的RDV？": "prefecture","你需要哪种RDV？":"Type_of_Rdv","你申请RDV的页面链接？(非常重要)":"url"})

    headers={
        "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,zh;q=0.5",
        "Connection":"keep-alive",
        "Host":    "www.hauts-de-seine.gouv.fr",
        "Upgrade-Insecure-Requests":"1",
        "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:55.0) Gecko/20100101 Firefox/55.0"
    }

    while True:

        try:
            for index, row in df_requester_list.iterrows():
                print(row['email'], row['url'],row['Type_of_Rdv'])

                url=row['url']
                url_NoRDV = url[:-1]+'2'

                gmail_user = 'rdv.reminder666@gmail.com'
                gmail_password = 'Pascalc4!'
                recipient = ['rdv.reminder666@gmail.com',row['email']]
                subject = 'RDV Prefecture Disponible'
                body = 'Votre RDV est disponible. Aller sur le site ' + url 
                #print(type(body))

                repone_data = {}

                respone=requests.post(url,timeout=10,headers=headers,data = {'condition':'on','nextButton':'Effectuer+une+demande+de+rendez-vous'})

                repone_data = {"status_code":str(respone.status_code),"url":str(respone.url),"repone_history":str(respone.history)}
                print(repone_data)
                if repone_data['status_code'] == '200' and repone_data["url"] != url_NoRDV :
                    result = 'RDV available'
                    Send_Email.send_email(gmail_user,gmail_password, recipient,subject,body)
                else:
                    result = 'RDV not available'
                    #Send_Email.send_email(gmail_user,gmail_password, recipient,subject,body)
                
                print(result)
                with open('rdv_connections.csv','a', newline='') as csvfile:
                    spamwriter = csv.writer(csvfile, delimiter=';')
                    spamwriter.writerow([datetime.datetime.now(),row['email'], row['url'],row['Type_of_Rdv'],result,str(respone.status_code),str(respone.url),str(respone.history)])


            time.sleep(random.randint(30,60))

        except Exception as e:
            result = str(e)
            with open('rdv_connections.csv','a', newline='') as csvfile:
                    spamwriter = csv.writer(csvfile, delimiter=';')
                    spamwriter.writerow([datetime.datetime.now(),row['email'], row['url'],row['Type_of_Rdv'],result,str(respone.status_code),str(respone.url),str(respone.history)])
            print("let's sleep 3 minutes")
            time.sleep(180)

