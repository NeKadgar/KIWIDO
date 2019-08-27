from django.db import models
from djoser.urls.base import User
# Create your models here.

class Note(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    note = models.CharField(max_length=50)
    done = models.BooleanField(default=0)
    editing = models.BooleanField(default=0)
    number = models.IntegerField(default=0)
    #def __str__(self):
    #    return self.username

class Desk(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    color = models.CharField(max_length=10)
    number = models.IntegerField(default=10001)

class Table(models.Model):
    desk = models.ForeignKey(Desk, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    number = models.IntegerField(default=10001)

class TableNote(models.Model):
    table = models.ForeignKey(Table, on_delete=models.CASCADE)
    note = models.CharField(max_length=50)
    description = models.TextField()
    color = models.CharField(max_length=10)
    number = models.IntegerField(default=10001)
