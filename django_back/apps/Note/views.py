
from django.http import HttpResponse
from django.core.serializers import serialize
from .models import Note

def get_all_notes(request):
    all_notes = Note.objects.all()
    data = serialize('json', all_notes)
    return HttpResponse(data, status=200)

def get_note_by_id(request, note_id):
    try:
        note = Note.objects.get(pk=note_id)
        data = serialize('json', [note])
    except Note.DoesNotExist:
        raise Http404("Note does not exist")
    return HttpResponse(data, status=200)
