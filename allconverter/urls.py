from django.urls import path
from . import views

urlpatterns = [
    path("",views.index,name='index'),
    path("length",views.length,name="length"),
    path("area",views.area,name="area"),
    path("volume",views.volume,name="volume"),
    path("temprature",views.temprature,name="temprature"),
    path("mass",views.mass,name="mass"),
    path("data",views.data,name="data"),
    path("time",views.time,name="time"),
    path("speed",views.speed,name="speed")
]