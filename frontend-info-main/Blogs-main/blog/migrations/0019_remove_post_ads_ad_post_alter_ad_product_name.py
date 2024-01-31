# Generated by Django 5.0 on 2024-01-29 05:05

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0018_alter_ad_product_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='ads',
        ),
        migrations.AddField(
            model_name='ad',
            name='post',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='blog.post'),
        ),
        migrations.AlterField(
            model_name='ad',
            name='product_name',
            field=models.CharField(default='', max_length=10),
        ),
    ]
