from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.bloghome, name="bloghome"),
    path('blogpost/', views.blogPost, name="blogPost"),
    path('deletedposts/', views.isDeletedCheck, name="deletedposts")
]
