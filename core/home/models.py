from django.db import models

# Create your models here.
class Student(models.Model):
    id=models.AutoField(primary_key=True)
    roll_number=models.CharField(max_length=100, null=True, blank=True, default='')
    date=models.DateTimeField(auto_now_add=True, null=True, blank=True)
    name = models.CharField(max_length=100, null=True, blank=True, default='')
    department = models.CharField(max_length=100, null=True, blank=True, default='')
    subject= models.CharField(max_length=100, null=True, blank=True, default='')
    remarks= models.CharField(max_length=100,   null=True, blank=True, default='')
    application_document=models.CharField(max_length=100, null=True, blank=True, default='')
   
    ##change the state to choices
    state=models.IntegerField(choices=[(0,'inward'),(1,'outward')],default=0)
    def __str__(self):
        return self.name
    