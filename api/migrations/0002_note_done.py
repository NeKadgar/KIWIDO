# Generated by Django 2.0.6 on 2019-08-17 12:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='done',
            field=models.BooleanField(default=False),
        ),
    ]
