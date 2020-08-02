from django.shortcuts import render
from django.contrib.auth import authenticate, login as dj_login, logout as dj_logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse


def login(request):
    username = request.POST['username']
    password = request.POST['password']
    print('yang')
    print(username)
    print(password)
    print('end yang')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        dj_login(request, user)
        return HttpResponse("login")
    else:
        return HttpResponse("Response 403")


@login_required
def logout(request):
    dj_logout(request)
    return HttpResponse("logout")


@login_required(login_url='/User/noauth')
def test(request):
    return HttpResponse("Hello, world !")


def noauth(request):
    return HttpResponse("HTTP 403 code")
