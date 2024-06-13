from django.urls import path
from .views import * 

urlpatterns=[
path('', home),
path('inward/', inward),
path('outward/', outward),
path('fetch/<int:id>/', fetch),
path('compose/', compose),
path('edit/', edit),
path('change_state/', change_state),
]