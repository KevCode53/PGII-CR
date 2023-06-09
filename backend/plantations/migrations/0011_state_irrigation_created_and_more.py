# Generated by Django 4.2.1 on 2023-05-29 02:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plantations', '0010_alter_historicalplantation_thscm_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='state_irrigation',
            name='created',
            field=models.DateField(auto_now_add=True, default=1, verbose_name='Fecha de creación'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='historicalirrigation',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='historicalplantation',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='historicalplantation',
            name='name',
            field=models.CharField(max_length=256, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='irrigation',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='plantation',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='plantation',
            name='name',
            field=models.CharField(max_length=256, verbose_name='Name'),
        ),
    ]
