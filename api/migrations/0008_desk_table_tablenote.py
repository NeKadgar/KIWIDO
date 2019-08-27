# Generated by Django 2.0.6 on 2019-08-19 15:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0007_note_editing'),
    ]

    operations = [
        migrations.CreateModel(
            name='Desk',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('color', models.CharField(max_length=10)),
                ('number', models.IntegerField(default=10001)),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Table',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('color', models.CharField(max_length=10)),
                ('number', models.IntegerField(default=10001)),
                ('desk', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Desk')),
            ],
        ),
        migrations.CreateModel(
            name='TableNote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('color', models.CharField(max_length=10)),
                ('number', models.IntegerField(default=10001)),
                ('table', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Desk')),
            ],
        ),
    ]