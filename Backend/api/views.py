from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from .models import Project, Bid
from .serializers import UserSerializer, ProjectSerializer, BidSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.exceptions import PermissionDenied
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class CreateUserView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            print(user)
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ProjectListCreate(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Returns only the projects created by the user"""
        user = self.request.user
        return Project.objects.filter(user=user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ProjectDelete(generics.DestroyAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Returns only the projects created by the user"""
        user = self.request.user
        return Project.objects.filter(user=user)

class ProjectUpdate(generics.UpdateAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Project.objects.filter(user=user)

class BidListCreate(generics.ListCreateAPIView):
    serializer_class = BidSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Returns only the bids made by the user"""
        return Bid.objects.filter(bidder=self.request.user)
    
    def perform_create(self, serializer):
        project = serializer.validated_data['project']
        if project.user == self.request.user:
            raise PermissionDenied("You cannot bid on your own project.")
        serializer.save(bidder=self.request.user)

class BidDelete(generics.DestroyAPIView):
    serializer_class = BidSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Return only the bids made by the authenticated user"""
        return Bid.objects.filter(bidder=self.request.user)