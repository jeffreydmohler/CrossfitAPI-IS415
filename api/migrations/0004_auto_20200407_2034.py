# Generated by Django 3.0.5 on 2020-04-08 02:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20200407_2032'),
    ]

    operations = [
        migrations.RenameField(
            model_name='campaign',
            old_name='goalUSD',
            new_name='goal_USD',
        ),
    ]
