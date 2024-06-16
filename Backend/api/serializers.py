from django.db.models.fields import SlugField
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate
from .models import *


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    username_field = 'email'

    def validate(self, attrs):
        password = attrs.get("password")
        user = authenticate(
            request=self.context.get('request'),
            username=attrs.get("email"),
            password=password
        )

        if user is None:
            raise serializers.ValidationError(
                'No active account found with the given credentials'
            )

        refresh = self.get_token(user)

        data = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

        # Add extra responses here
        data['email'] = user.email
        data['first_name'] = user.first_name
        data['last_name'] = user.last_name
        data['phone_no'] = user.phone_no

        return data


class UserSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    phone_no = serializers.IntegerField(required=True)
    password = serializers.CharField(min_length=6, max_length=15, write_only=True)

    class Meta:
        model = User
        fields = ["first_name", "last_name", "email", "phone_no", "password"]
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
