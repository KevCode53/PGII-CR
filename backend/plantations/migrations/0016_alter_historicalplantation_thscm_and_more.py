# Generated by Django 4.2 on 2023-06-01 05:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plantations', '0015_alter_state_irrigation_duration'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historicalplantation',
            name='thscm',
            field=models.CharField(blank=True, help_text='Identifer Number Temperature and humidity sensor control module', max_length=256, null=True, verbose_name='THSCM'),
        ),
        migrations.AlterField(
            model_name='plantation',
            name='thscm',
            field=models.CharField(blank=True, help_text='Identifer Number Temperature and humidity sensor control module', max_length=256, null=True, verbose_name='THSCM'),
        ),
    ]
