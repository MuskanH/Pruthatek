import json
from multiprocessing import context
from django.shortcuts import render
from django.http import HttpResponse
from yaml import serialize
from .models import Post
import mimetypes
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core import serializers
from django.core.serializers.json import DjangoJSONEncoder


@csrf_exempt
def bloghome(request):
        
    if request.method == 'GET':
        allPosts = Post.objects.filter(status='Approved').order_by('-timeStamp') 
        data = serializers.serialize("json", allPosts)
        print(data)
        return HttpResponse(data, content_type="application/json")
        
# def bloghome(request):
#     allPosts = Post.objects.filter(status='Approved').order_by('-timeStamp') 

#     context = {'allPosts' : allPosts}
#     return render(request,'blog/home.html',context)


def blogPost(request):
    if request.method == "GET":
        id1=request.GET.get("id") 
        post = Post.objects.filter(pk=id1)
        # context = {'post' : post}    
        data = serializers.serialize("json", post)
        # print(data)
        return HttpResponse(data, content_type="application/json")
        # return render(request,'blog/blogpost.html',context)

def isDeletedCheck(request):
    allpost = Post.objects.filter(isDeleted=True).all()
    data = serializers.serialize("json", allpost)
    print("done")
    return HttpResponse(data, content_type="application/json")

