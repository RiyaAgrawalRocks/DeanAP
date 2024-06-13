from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

#home
@api_view(['GET'])
def home(request):
    applications=Application.objects.all()
    data=ApplicationSerializer(applications, many=True).data
    return Response(data=data)


#inward
@api_view(['GET'])
def inward(request):
    applications=Application.objects.filter(state=0)
    data=ApplicationSerializer(applications, many=True).data
    return Response(data=data)


#outward
@api_view(['GET'])
def outward(request):
    applications=Application.objects.filter(state=1)
    data=ApplicationSerializer(applications, many=True).data
    return Response(data=data)


#fetch
@api_view(['GET'])
def fetch(request, id):
    try:
        application=Application.objects.get(id=id)
    except Application.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)    
    data=ApplicationSerializer(application).data
    return Response(data=data)



#compose
@api_view(['POST'])
def compose(request):
    serializer=ApplicationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#edit + display old
@api_view(['POST'])
def edit(request):
    try:
        application=Application.objects.get(roll_number=request.data.get('roll_number'))
    except Application.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ApplicationSerializer(application, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#inward to outward
@api_view(['PATCH'])
def change_state(request):
    try:
        application=Application.objects.get(roll_number=request.data.get('roll_number'))
    except Application.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)    
    serializer = ApplicationSerializer(instance=application, data={"state":1}, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
   
