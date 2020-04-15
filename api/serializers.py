from rest_framework import serializers

from api.models import Mens, Womens

# Serializers define the API representation.

class MensSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mens
        fields = [ 
            'Country',
            'Age',
            'Height',
            'BodyWeight',
            'GamesQualify',
            'BackSquat',
            'CleanAndJerk',
            'Snatch',
            'Deadlift',
            'FightGoneBad',
            'MaxPullUps',
        ]

class WomensSerializer(serializers.ModelSerializer):
    class Meta:
        model = Womens
        fields = [ 
            'Country',
            'Age',
            'Height',
            'BodyWeight',
            'GamesQualify',
            'BackSquat',
            'CleanAndJerk',
            'Snatch',
            'Deadlift',
            'FightGoneBad',
            'MaxPullUps',
            ]
