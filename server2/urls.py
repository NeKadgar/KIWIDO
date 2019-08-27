"""server2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from api.views import *
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    #--------Mini Notes--------
    url(r'^api/mnote/post/(?P<token>[\w ]+)/(?P<note>[\w ]+)/$', postNote),
    url(r'^api/mnote/get/(?P<token>[\w ]+)/$', getNote),
    url(r'^api/mnote/delete/(?P<token>[\w ]+)/(?P<id>[\w ]+)/$', deleteNote),
    url(r'^api/mnote/edit/(?P<token>[\w ]+)/(?P<id>[\w ]+)/(?P<note>[\w ]+)/(?P<done>[\w ]+)/(?P<numberOf>[\w ]+)/$', editNote),
    #---------------------------
    #----------Desk-------------
    url(r'^api/desk/post/(?P<token>[\w ]+)/(?P<deskName>[\w ]+)/(?P<color>[\w ]+)/(?P<numberOf>[\w ]+)/$', postDesk),
    url(r'^api/desk/get/(?P<token>[\w ]+)/$', getDesk),
    url(r'^api/desk/info/(?P<token>[\w ]+)/(?P<deskId>[\w ]+)/$', getInfoDesk),
    url(r'^api/desk/edit/(?P<token>[\w ]+)/(?P<deskName>[\w ]+)/(?P<color>[\w ]+)/(?P<numberOf>[\w ]+)/(?P<id>[\w ]+)/$', editDesk),
    url(r'^api/desk/delete/(?P<token>[\w ]+)/(?P<id>[\w ]+)/$', deleteDesk),
    #---------------------------
    #----------Table------------
    url(r'^api/table/post/(?P<token>[\w ]+)/(?P<deskId>[\w ]+)/(?P<name>[\w ]+)/(?P<numberOf>[\w ]+)/$', postTable),
    url(r'^api/table/get/(?P<token>[\w ]+)/(?P<deskId>[\w ]+)/$', getTable),
    #--------------------------- token, deskId, name, description, color, numberOf, tableId
    #----------TableNote--------
    url(r'^api/tableNote/post/(?P<token>[\w ]+)/(?P<deskId>[\w ]+)/(?P<name>[\w ]+)/(?P<description>[\w ]+)/(?P<color>[\w ]+)/(?P<numberOf>[\w ]+)/(?P<tableId>[\w ]+)/$', postTableNote),
    url(r'^api/tableNote/delete/(?P<token>[\w ]+)/(?P<deskId>[\w ]+)/(?P<tableId>[\w ]+)/(?P<NoteId>[\w ]+)/$', deleteTableNote),
    url(r'^api/tableNote/edit/(?P<token>[\w ]+)/(?P<deskId>[\w ]+)/(?P<name>[\w ]+)/(?P<description>[\w ]+)/(?P<color>[\w ]+)/(?P<numberOf>[\w ]+)/(?P<tableId>[\w ]+)/(?P<NoteId>[\w ]+)/$', editTableNote),
    #---------------------------
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('auth/', include('djoser.urls.jwt'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*',  include("start.urls"))]
