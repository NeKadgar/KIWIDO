# Generated by Django 2.0.6 on 2019-08-18 08:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20190818_1124'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='done',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='note',
            name='editing',
            field=models.TextField(blank=True),
        ),
    ]
