# Generated by Django 3.2.8 on 2022-01-28 01:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('sno', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=250)),
                ('content', models.CharField(max_length=2000)),
                ('Author', models.CharField(max_length=25)),
                ('timestemp', models.DateTimeField(blank=True)),
            ],
        ),
    ]