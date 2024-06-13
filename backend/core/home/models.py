from django.db import models

choices=((0,'inward'),(1,'outward'))

class Application(models.Model):
    id=models.AutoField(primary_key=True)
    roll_number=models.CharField(max_length=100, default=None)
    time=models.DateTimeField(auto_now_add=True)
    name=models.CharField(max_length=100, default=None)
    department=models.CharField(max_length=100, default=None)
    subject=models.CharField(max_length=100, default=None)
    remarks=models.CharField(max_length=100, default=None)
    application_document=models.CharField(max_length=100, default=None)
    state=models.IntegerField(choices=choices,default=0)
    
    def __str__(self):
       return self.name
