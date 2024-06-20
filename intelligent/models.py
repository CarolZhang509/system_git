from django.db import models

#Create your models here.
class WaterQualityPredict(models.Model):
    TEMP = models.FloatField()
    PH = models.FloatField()
    DO = models.FloatField()
    Cond = models.FloatField()
    NTU = models.FloatField()
    Mn= models.FloatField()
    NH3 = models.FloatField()

    def __str__(self):
        return self.TEMP