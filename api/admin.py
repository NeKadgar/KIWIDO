from django.contrib import admin
from .models import Note, Desk, Table, TableNote
# Register your models here.

admin.site.register(Note)
admin.site.register(Desk)
admin.site.register(Table)
admin.site.register(TableNote)
