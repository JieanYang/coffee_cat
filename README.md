# coffee_cat

Run PostgreSQL in Docker https://www.saltycrane.com/blog/2019/01/how-run-postgresql-docker-mac-local-development/


```pip3 install psycopg2-binary``` Install psycopg2 in MacOs, connect Django with PostgreSQL  
Settting to connect PostgreSQL in Django https://docs.djangoproject.com/en/3.0/ref/settings/

commands:  
```
$ docker-compose up -d --build
$ docker-compose down -v

$ docker-compose exec django python manage.py flush --no-input
$ docker-compose exec django python manage.py migrate

$ docker volume inspect coffee_cat_postgres_data
```
prod:
```
docker-compose -f docker-compose.prod.yml down -v

$ docker-compose -f docker-compose.prod.yml up -d --build
$ docker-compose -f docker-compose.prod.yml logs -f

$ docker-compose -f docker-compose.prod.yml exec django python manage.py migrate --noinput
```