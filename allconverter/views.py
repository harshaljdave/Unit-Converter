from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'allconverter/index.html')

def length(request):
    return render(request,'allconverter/length.html')

def area(request):
    return render(request,'allconverter/area.html')

def volume(request):
    return render(request,'allconverter/volume.html')

def temprature(request):
    return render(request,'allconverter/temprature.html')

def mass(request):
    return render(request,'allconverter/mass.html')

def data(request):
    return render(request,'allconverter/data.html')

def time(request):
    return render(request,'allconverter/time.html')

def speed(request):
    return render(request,'allconverter/speed.html')

