from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.authtoken.models import Token
from djoser.urls.base import User
from .models import Note, Desk, Table, TableNote

# Mini Notes
def postNote(request, token, note):
    username = Token.objects.get(key=token)
    post = Note(username=username.user, note=note, done=False)
    post.save()
    return HttpResponse(username.user)

def getNote(request, token):
    username = Token.objects.get(key=token)
    q = []
    if Note.objects.filter(username=username.user):
        for i in Note.objects.filter(username=username.user):
            d = dict(note=i.note, done=i.done, id=i.id, editing=0, number=i.number)
            q.append(d)
        q.reverse()
        last = len(q) - 1
        for z in range(0, last):
            for x in range(0, last):
                if int(q[x]['number']) > int(q[x+1]['number']):
                    q[x], q[x+1] = q[x+1], q[x]
    else:
        q = [{'note':'Create first note', 'done':0, 'id':0, 'editing':0, 'number':0}]
    return JsonResponse(q, safe=False)

def editNote(request, token, id, note, done, numberOf):
    username = Token.objects.get(key=token)
    Note(username=username.user, note=note, done=done, id=id, number=numberOf).save()
    return HttpResponse(done)

def deleteNote(request, token, id):
    username = Token.objects.get(key=token)
    Note.objects.filter(username=username.user, id=id).delete()
    return HttpResponse(id)

#------------------------------------------------------------------
#Desks-------------------------------------------------------------
#------------------------------------------------------------------

def postDesk(request, token, deskName, color, numberOf):
    username = Token.objects.get(key=token)
    Desk(username=username.user, name=deskName, color=color, number=numberOf).save()
    return HttpResponse(deskName)

def getDesk(request, token):
    username = Token.objects.get(key=token)
    q = []
    for desk in Desk.objects.filter(username=username.user):
        d = dict(id=desk.id, name=desk.name, color=desk.color, number=desk.number)
        q.append(d)
    q.reverse()
    last = len(q) - 1
    for z in range(0, last):
        for x in range(0, last):
            if int(q[x]['number']) > int(q[x+1]['number']):
                print(q[x])
                q[x], q[x+1] = q[x+1], q[x]
    return JsonResponse(q, safe=False)

def getInfoDesk(request, token, deskId):
    username = Token.objects.get(key=token)
    p = Desk.objects.get(username=username.user, id=deskId)
    q = dict(name=p.name, color=p.color)
    return JsonResponse(q, safe=False)

def editDesk(request, token, deskName, color, numberOf, id):
    username = Token.objects.get(key=token)
    Desk(username=username.user, name=deskName, color=color, number=numberOf, id=id).save()
    return HttpResponse(id)

def deleteDesk(request, token, id):
    username = Token.objects.get(key=token)
    Desk.objects.filter(username=username.user, id=id).delete()
    return HttpResponse(id)

#------------------------------------------------------------------
#Table-------------------------------------------------------------
#------------------------------------------------------------------

def postTable(request, token, deskId, name, numberOf):
    username = Token.objects.get(key=token)
    p = Desk.objects.get(username=username.user, id=deskId,)
    Table(desk=p, name=name, number=numberOf).save()
    return HttpResponse('Ok')

def getTable(request, token, deskId):
    username = Token.objects.get(key=token)
    p = Desk.objects.get(username=username.user, id=deskId,)
    q = []
    for table in Table.objects.filter(desk=p):
        q1 = []
        for note in TableNote.objects.filter(table=table):
            tableNote = dict(note=note.note, description=note.description, color=note.color, id=note.id, number=note.number)
            q1.append(tableNote)
        last1 = len(q1) - 1
        for z in range(0, last1):
            for x in range(0, last1):
                if int(q1[x]['number']) > int(q1[x+1]['number']):
                    q1[x], q1[x+1] = q1[x+1], q1[x]
        d = dict(id=table.id, name=table.name, number=table.number, editing=0, view=0, newNote='', color='', list=q1)
        q.append(d)
    q.reverse()
    last = len(q) - 1
    for z in range(0, last):
        for x in range(0, last):
            if int(q[x]['number']) > int(q[x+1]['number']):
                print(q[x])
                q[x], q[x+1] = q[x+1], q[x]
    return JsonResponse(q, safe=False)


#------------------------------------------------------------------
#TableNote-------------------------------------------------------------
#------------------------------------------------------------------

def postTableNote(request, token, deskId, name, description, color, numberOf, tableId):
    username = Token.objects.get(key=token)
    p = Desk.objects.get(username=username.user, id=deskId,)
    table = Table.objects.get(desk=p, id=tableId)
    TableNote(table=table, note=name, description=description, color=color, number=numberOf).save()
    return HttpResponse('Ok')

def editTableNote(request, token, deskId, name, description, color, numberOf, tableId, NoteId):
    username = Token.objects.get(key=token)
    p = Desk.objects.get(username=username.user, id=deskId,)
    table = Table.objects.get(desk=p, id=tableId)
    TableNote(table=table, note=name, description=description, color=color, number=numberOf, id=NoteId).save()
    return HttpResponse('ok')

def deleteTableNote(request, token, deskId, tableId, NoteId):
    username = Token.objects.get(key=token)
    p = Desk.objects.get(username=username.user, id=deskId,)
    table = Table.objects.get(desk=p, id=tableId)
    TableNote.objects.get(table=table, id=NoteId)
    return HttpResponse('ok')
