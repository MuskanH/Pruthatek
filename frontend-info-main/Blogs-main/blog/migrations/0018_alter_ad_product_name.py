# Generated by Django 5.0 on 2024-01-29 04:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0017_ad_delete_category_remove_post_category_post_ads'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ad',
            name='product_name',
            field=models.CharField(default='', max_length=30),
        ),
    ]