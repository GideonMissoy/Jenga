from rest_framework import serializers
from .models import *


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'user', 'title', 'budget', 'location', 'description', 'status', 'created_at', 'updated_at']

class BidSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bid
        field = ['id', 'project', 'bidder', 'bid_amount', 'proposal', 'bid_time']
