from rest_framework import serializers
from .models import *

class StudentSerializer(serializers.Serializer):
    class Meta:
        model = Student
        fields='__all__'

        # def create(self,validated_data):
        #     return Student.objects.create(**validated_data) 

        # def read(self):
        #     return Student.objects.all()

        # def update(self,instance,validated_data):
        #     instance.rollno = validated_data.get('rollno', instance.rollno)
        #     instance.name= validated_data.get('name', instance.name)
        #     instance.department = validated_data.get('department', instance.department)
        #     instance.subject= validated_data.get('subject', instance.subject)   
        #     instance.remarks= validated_data.get('remarks', instance.remarks)   
        #     instance.application_document= validated_data.get('application_document', instance.application_document)
        #     instance.state= validated_data.get('state', instance.state)
        #     instance.save()
        #     return instance
        

