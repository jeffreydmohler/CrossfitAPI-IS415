# Generated by Django 3.0.5 on 2020-04-08 03:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_campaign_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donation',
            name='campaign_id',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='update',
            name='campaign_id',
            field=models.IntegerField(),
        ),
    ]
