from django.db import models


# Create your models here.
class Mens(models.Model):
    Country = models.TextField()
    Age = models.TextField()
    Height = models.TextField()
    BodyWeight = models.TextField()
    GamesQualify = models.TextField()
    BackSquat = models.TextField()
    CleanAndJerk = models.TextField()
    Snatch = models.TextField()
    Deadlift = models.TextField()
    FightGoneBad = models.TextField()
    MaxPullUps = models.TextField()

class Womens(models.Model):
    Country = models.TextField()
    Age = models.TextField()
    Height = models.TextField()
    BodyWeight = models.TextField()
    GamesQualify = models.TextField()
    BackSquat = models.TextField()
    CleanAndJerk = models.TextField()
    Snatch = models.TextField()
    Deadlift = models.TextField()
    FightGoneBad = models.TextField()
    MaxPullUps = models.TextField()
   
