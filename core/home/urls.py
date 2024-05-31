from django.contrib import admin
from django.urls import path
from .views import *
urlpatterns = [
path('', home), 
path('outward/', outward),
path('compose/', compose),
path('inward/edit', update_inward),
path('inward/', inward),
path('fetch/<int:id>/', fetch),
]
