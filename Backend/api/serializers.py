from django.db.models.fields import SlugField
from rest_framework import serializers
from .models import Project, Bid, User, Profile, Reviews


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    phone_no = serializers.IntegerField(required=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=6, max_length=15, write_only=True)

    class Meta:
        model = User
        fields = ["email", "phone_no", "first_name", "last_name", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


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
