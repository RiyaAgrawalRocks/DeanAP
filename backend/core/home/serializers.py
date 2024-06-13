from rest_framework import serializers
from .models import Application

choices=((0,'inward'),(1, 'outward'))

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'

        def create(self, validated_data):
            return Application.objects.create(**validated_data)
        
        def update(self, application, validated_data):
            application.roll_number=validated_data.get('roll_number', application.roll_number)
            application.name=validated_data.get('name', application.name)
            application.department=validated_data.get('department', application.department)
            application.subject=validated_data.get('subject', application.subject)
            application.remarks=validated_data.get('remarks', application.remarks) 
            application.application_document=validated_data.get('application_document', application.application_document)
            application.save() 
            return application
        
              
