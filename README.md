# coffee_cat

Run PostgreSQL in Docker https://www.saltycrane.com/blog/2019/01/how-run-postgresql-docker-mac-local-development/


nginx-proxy/nginx-proxy https://github.com/nginx-proxy/nginx-proxy  
nginx-proxy/docker-letsencrypt-nginx-proxy-companion https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion


React Redux Tutorial for Beginners: The Complete Guide (2020) https://www.valentinog.com/blog/redux/  
Webpack配置区分开发环境和生产环境 https://juejin.im/post/5da67a0251882559ba681829

Authentication Django and React with JWT:  
https://medium.com/netscape/full-stack-django-quick-start-with-jwt-auth-and-react-redux-part-i-37853685ab57  
https://medium.com/@viewflow/full-stack-django-quick-start-with-jwt-auth-and-react-redux-part-ii-be9cf6942957  
https://medium.com/@viewflow/full-stack-django-quick-start-with-jwt-auth-and-react-redux-part-iii-873584a65119  

```pip3 install psycopg2-binary``` Install psycopg2 in MacOs, connect Django with PostgreSQL  
Settting to connect PostgreSQL in Django https://docs.djangoproject.com/en/3.0/ref/settings/

Commands dev:
```
docker-compose down -v

docker-compose up -d --build
docker-compose logs -f

docker-compose exec django python manage.py flush --no-input
docker-compose exec django python manage.py migrate

docker volume inspect coffee_cat_postgres_data
```

Commands prod:
```
docker-compose -f docker-compose.prod.yml down -v

docker-compose -f docker-compose.prod.yml up -d --build
docker-compose -f docker-compose.prod.yml logs -f

docker-compose -f docker-compose.prod.yml exec django python manage.py migrate --noinput
docker-compose -f docker-compose.prod.yml exec django python manage.py collectstatic --no-input --clear
```

Install Docker and Docker-compose:
```
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update
sudo apt install docker-ce
sudo usermod -aG docker ${USER}
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

Install AWS CLI:
```
sudo apt install unzip
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
aws --version
```

Commands AWS:
```
ssh -i [/path/my-key-pair.pem] [my-instance-user-name@my-instance-public-dns-name]
scp -i [/path/my-key-pair.pem] [/path/SampleFile.txt my-instance-user-name@my-instance-public-dns-name:~]

# staging
scp -r $(pwd)/{django_back,nginx,.env.staging,.env.staging.proxy-companion,docker-compose.staging.yml,react_front,.env.staging.react} [user@your-ip-or-domain:/path/to/django-on-docker]
# prod
scp -r $(pwd)/{django_back,nginx,.env.prod,.env.prod.proxy-companion,docker-compose.prod.yml,react_front,.env.staging.react} [user@your-ip-or-domain:/path/to/django-on-docker]

```
Login AWS-CLI:
```
local:
aws ecr get-login-password --region eu-west-3 | docker login --username AWS --password-stdin <aws-account-id>.dkr.ecr.eu-west-3.amazonaws.com

Instance with role:
aws ecr get-login-password --region eu-west-3 | docker login --username AWS --password-stdin <aws-account-id>.dkr.ecr.eu-west-3.amazonaws.com
```

Django:
```
Check syntax
python3 -m flake8 --ignore=E501,F401,E111 .

Project
python3 -m django startproject projectname
python3 manage.py startapp appname

Authentication
python manage.py createsuperuser
python manage.py *username*

Shell
python manage.py shell

Static files
python manage.py collectstatic --no-input --clear

Database
python manage.py flush --no-input
python manage.py makemigrations
python manage.py migrate
```
