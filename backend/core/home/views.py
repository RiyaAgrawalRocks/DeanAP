#import logging
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import StudentSerializer  # Add the missing import statement
# Create your views here.

#logger=logging.getLogger('home')

@api_view(['GET'])
def home(request):
    student_objs = Student.objects.all()
    serializer = StudentSerializer(student_objs,many=True) 
    #logger.debug(f'Number of students retrieived: {student_objs.count()}')
    return Response({'data': serializer.data})


@api_view(['POST'])
def compose(request):
    serializer = StudentSerializer(data=request.data)
    if not serializer.is_valid():
        return Response({'errors':serializer.errors,'message':'Check input again'})
    serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def outward(request):
    student_objs = Student.objects.filter(state=1)
    serializer = StudentSerializer(student_objs,many=True) 
    return Response({'data': serializer.data})


@api_view(['GET'])
def inward(request):
    student_objs = Student.objects.filter(state=0)
    serializer = StudentSerializer(student_objs,many=True)  
    return Response({'data': serializer.data})


@api_view(['PATCH'])
def update_inward(request):
    try:
        data = request.data
        instance = Student.objects.get(id=data.get('id'))  # Define the "instance" variable
        serializer = StudentSerializer(instance, data, partial=True) 
        #    instance.roll_number = data.get('roll_number')
        #  instance.department = data.get('department')
        #   instance.subject = data.get('subject')
        #   instance.remarks = data.get('remarks')
        #   instance.application_document = data.get('application_document')
        #   instance.state = data.get('state')
        #student_objs = Student.objects.filter(id=data.get('id'))
        if not serializer.is_valid:
                print(serializer.errors)
                return Response({'status': 403, 'errors': serializer.errors, 'message': 'Something went wrong'})
        serializer.save()
        return Response({'status' : 200, 'data': serializer.data, 'message': 'Your data has been saved'})
    except Exception as e:
        print(e)
        return Response({'status': 403, 'errors': serializer.errors, 'message': 'An error occcured'})

##fetch using id
@api_view(['GET'])
def fetch(request, id):
    student_objs = Student.objects.get(id=id)
    serializer = StudentSerializer(student_objs)  
    return Response({'data': serializer.data})

##state change using id
@api_view(['PUT'])
def state_change(request,id):
    data = request.data
    instance = Student.objects.get(id=id)
    instance.state = 0
    return Response({'message':'State changed to outward'})
      