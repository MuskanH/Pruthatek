# Generated by Django 4.2.5 on 2023-11-27 06:32

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("blog", "0011_post_isdeleted"),
    ]

    operations = [
        migrations.AlterField(
            model_name="post",
            name="timeStamp",
            field=models.DateField(blank=True),
        ),
    ]
