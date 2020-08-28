from django.contrib import admin

from .models import Note


class NoteAdmin(admin.ModelAdmin):
    fields = ['title', 'content', 'owner']

    list_display = ('title',)


admin.site.register(Note, NoteAdmin)
