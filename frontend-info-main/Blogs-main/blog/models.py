import datetime
from importlib.resources import contents
from multiprocessing import AuthenticationError
import os
from turtle import mode, title
from django.db import models

# Create your models here.

# Create your models here.

def filepath(request, filename):
    old_filename = filename
    timeNow = datetime.datetime.now().strftime('%Y%m%d%H:%M:%S')
    filename = "%s%s" % (timeNow, old_filename)
    return os.path.join('uploads/', filename)



class Post(models.Model):
    sno=models.AutoField(primary_key=True)
    title=models.CharField(max_length=255)
    author=models.CharField(max_length=14)
    Category = models.CharField(max_length=255, default="")
    slug=models.CharField(max_length=130)
    timeStamp=models.DateField(blank=True)
    head0 = models.CharField(max_length=500, default="")
    chead0 = models.CharField(max_length=5000, default="")
    cimages0 = models.ImageField(upload_to='blog/images', default="")
    head1 = models.CharField(max_length=500, default="")
    chead1 = models.CharField(max_length=5000, default="")
    cimages1 = models.ImageField(upload_to='blog/images', default="")
    head2 = models.CharField(max_length=500, default="")
    chead2 = models.CharField(max_length=5000, default="")
    cimages2 = models.ImageField(upload_to='blog/images', default="")
    thumbnail = models.ImageField(upload_to='blog/images', default="")
    status = models.CharField(max_length=50)
    content =models.CharField(max_length=50000,null=True)
    isDeleted = models.BooleanField(default=False)
    


    def _str_(self):
        return self.title



class Ad(models.Model):
    image = models.ImageField(upload_to='blog/images', default="")
    product_name = models.CharField(max_length=10, default="")
    description = models.CharField(max_length=100, default="")
    price = models.CharField(max_length=10, default="")
    link = models.URLField()
    post = models.ForeignKey(Post, on_delete=models.SET_NULL, null=True)

    def _str_(self):
        return self.product_name