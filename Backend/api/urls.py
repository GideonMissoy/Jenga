from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView
from .views import *

router = DefaultRouter()
router.register(r'my-projects', ProjectViewSet)

urlpatterns = [
    path('user/register/', CreateUserView.as_view(), name='register'),
    path('token/', CustomTokenObtainPairView.as_view(), name='get_token'),
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh'),
]