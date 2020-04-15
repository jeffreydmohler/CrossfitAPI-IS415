from django.http import Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.models import Mens, Womens
from api.serializers import MensSerializer, WomensSerializer
import json
import requests
import numpy as np
# import stripe

# CLASS NAMES HAVE BEEN UPDATED, BUT THE LOGIC NEEDS UPDATING

class MensList(APIView):
    '''Get all campaigns or create a campaign'''
    @csrf_exempt
    def get(self, request, format=None):
        camp = Mens.objects.all()
        #UPDATE TITLE AFTER CREATING MODELS
        if request.query_params.get('title'):
            camp = camp.filter(title__contains=request.query_params.get('title'))
        serializer = MensSerializer(camp, many=True)
        return Response(serializer.data)

    @csrf_exempt
    def post(self, request, format=None):
        print("data", request.data)
        serializer = MensSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MensDetail(APIView):
    '''Work with an individual Campaign object'''
    @csrf_exempt
    def get(self, request, pk, format=None):
        camp = Mens.objects.get(id=pk)
        serializer = MensSerializer(camp)
        return Response(serializer.data)

    @csrf_exempt
    def put(self, request, pk, format=None):
        camp = Mens.objects.get(id=pk)
        serializer = MensSerializer(cat, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @csrf_exempt
    def delete(self, request, pk, format=None):
        camp = Mens.objects.get(id=pk)
        camp.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class WomensList(APIView):
    '''Get all Update or create a Update'''
    @csrf_exempt
    def get(self, request, format=None):
        upd = Womens.objects.all()
        #update category after making the models
        if request.query_params.get('update_id'):
            upd = upd.filter(title__contains=request.query_params.get('update_id'))
        serializer = WomensSerializer(upd, many=True)
        return Response(serializer.data)

    @csrf_exempt
    def post(self, request, format=None):
        serializer = WomensSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class WomensDetail(APIView):
    '''Work with an individual Update object'''
    @csrf_exempt
    def get(self, request, pk, format=None):
        upd = Womens.objects.get(id=pk)
        serializer = WomensSerializer(upd)
        return Response(serializer.data)

    @csrf_exempt
    def put(self, request, pk, format=None):
        upd = Womens.objects.get(id=pk)
        serializer = WomensSerializer(upd, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @csrf_exempt
    def delete(self, request, pk, format=None):
        upd = Womens.objects.get(id=pk)
        upd.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PredictMens(APIView):
    '''predicts success score off of given inputs'''
    @csrf_exempt
    def post(self, request, format=None):
        body = json.loads(request.body) # import this library at top..dont need to install tho
        body = body['values']
        
        url = "https://ussouthcentral.services.azureml.net/workspaces/1eac01dc796f491a9fa7fdbf5d686d86/services/55bf3b244a79497681aa991ec49ab931/execute?api-version=2.0&details=true"

        payload = "{\r\n  \"Inputs\": {\r\n    \"input1\": {\r\n      \"ColumnNames\": [\r\n        \"title\",\r\n        \"description\",\r\n        \"has_beneficiary\",\r\n        \"location_country\",\r\n        \"is_charity\",\r\n        \"location_state\",\r\n        \"goal_lnplus\",\r\n        \"success_score\"\r\n      ],\r\n      \"Values\": [\r\n        [\r\n          \"" + body['title'] + "\",\r\n          \"" + body['description'] + "\",\r\n          \"" + body['has_beneficiary'] + "\",\r\n          \"" + body['location_country'] + "\",\r\n          \"" + body['is_charity'] + "\",\r\n          \"" + body['location_state'] + "\",\r\n          \"" + body['goal_lnplus'] + "\",\r\n          \"0\"\r\n        ]\r\n      ]\r\n    }\r\n  },\r\n  \"GlobalParameters\": {}\r\n}"
        payload = "{\r\n  \"Inputs\": {\r\n    \"input1\": {\r\n      \"ColumnNames\": [\r\n    \t\"Country\",\r\n        \"Age\",\r\n        \"CleanAndJerk\",\r\n        \"Snatch\",\r\n        \"Deadlift\",\r\n        \"FightGoneBad\",\r\n        \"MaxPullUps\",\r\n        \"GamesQualify\"\r\n      ],\r\n      \"Values\": [\r\n        [\r\n        \t\"" + body['Country'] + "\",\r\n\t        \"" + body['Age'] + "\",\r\n\t        \"" + body['CleanAndJerk'] + "\",\r\n\t        \"" + body['Snatch'] + "\",\r\n\t        \"" + body['Deadlift'] + "\",\r\n\t        \"" + body['FightGoneBad'] + "\",\r\n\t        \"" + body['MaxPullUps'] + "\",\r\n\t        \"\"\r\n        ]\r\n      ]\r\n    }\r\n  },\r\n  \"GlobalParameters\": {}\r\n}"
        
        #payload.encode('utf-8', errors='ignore')
        headers = {
            'Authorization': 'Bearer t0mXbmUdONgQ+1jkpx5rGJzEWuSzndH3uImCSOXYbF2Ga83aQpiJeVYAQhIztnppUWt4L9tNAQdWUrPxHRHy6g==',
            'Content-Type': 'application/json',
            # 'Content-Type': 'text/plain'
        }
        payload = payload.encode('utf-8', errors='ignore')
        response = requests.request("POST", url, headers=headers, data = payload)
        
        response = json.loads(response.content)
        print(response)

        try:
            success_score = response["Results"]["output1"]["value"]["Values"][0][0]
        except: 
            success_score = "Error"

        return Response(
            success_score
        )

class PredictWomens(APIView):
    '''predicts success score off of given inputs'''
    @csrf_exempt
    def post(self, request, format=None):
        body = json.loads(request.body) # import this library at top..dont need to install tho
        body = body['values']
        
        url = "https://ussouthcentral.services.azureml.net/workspaces/e2459f1ad61b43b1a09a347614c7ff19/services/893570f2cd57438f843e31bd60bdf27f/execute?api-version=2.0&details=true"

        payload = "{\r\n  \"Inputs\": {\r\n    \"input1\": {\r\n      \"ColumnNames\": [\r\n    \t\"Country\",\r\n        \"Age\",\r\n        \"Height\",\r\n        \"Body Weight\",\r\n        \"Games Qualify\",\r\n        \"Back Squat\",\r\n        \"Clean and Jerk\",\r\n        \"Snatch\",\r\n        \"Deadlift\",\r\n        \"Max Pull-Ups\"\r\n      ],\r\n      \"Values\": [\r\n        [\r\n        \t\"" + body['Country'] + "\",\r\n\t        \"" + body['Age'] + "\",\r\n\t        \"" + body['Height'] + "\",\r\n\t        \"" + body['BodyWeight'] + "\",\r\n\t        \"\",\r\n\t        \"" + body['BackSquat'] + "\",\r\n\t        \"" + body['CleanAndJerk'] + "\",\r\n\t        \"" + body['Snatch'] + "\",\r\n\t        \"" + body['Deadlift'] + "\",\r\n\t        \"" + body['MaxPullUps'] + "\"\r\n        ]\r\n      ]\r\n    }\r\n  },\r\n  \"GlobalParameters\": {}\r\n}"
        
        
        #payload.encode('utf-8', errors='ignore')
        headers = {
            'Authorization': 'Bearer Z8d/6RzrI/acYeX6h/Z4i8GVUXqKZfoz/Q15o3DOjWiNJsp+O7Lum7SS3dr78NgBjuSKol9zf6LvYCyruN4egQ==',
            'Content-Type': 'application/json',
            # 'Content-Type': 'text/plain'
        }
        payload = payload.encode('utf-8', errors='ignore')
        response = requests.request("POST", url, headers=headers, data = payload)
        
        response = json.loads(response.content)
        print(response)

        try:
            success_score = response["Results"]["output1"]["value"]["Values"][0][0]
        except: 
            success_score = "Error"

        return Response(
            success_score
        )
