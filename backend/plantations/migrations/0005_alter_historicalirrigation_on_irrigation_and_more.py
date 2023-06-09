# Generated by Django 4.2.1 on 2023-05-13 04:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plantations', '0004_historicalirrigation_on_irrigation_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historicalirrigation',
            name='on_irrigation',
            field=models.PositiveSmallIntegerField(default=0, verbose_name='On Irrigation'),
        ),
        migrations.AlterField(
            model_name='irrigation',
            name='on_irrigation',
            field=models.PositiveSmallIntegerField(default=0, verbose_name='On Irrigation'),
        ),
        migrations.AlterField(
            model_name='state_irrigation',
            name='start_time',
            field=models.TimeField(auto_now_add=True, verbose_name='Start Time'),
        ),
    ]
