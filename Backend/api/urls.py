from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import *

urlpatterns = [
    path('user/register/', CreateUserView.as_view(), name='register'),
    path("api/user/register/", CreateUserView.as_view(), name="register"),
    path("api/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path('my-projects/', ProjectListCreate.as_view(), name='project-list-create'),
    path('my-projects/<int:pk>/', ProjectUpdate.as_view(), name='project-update'),
    path('my-projects/<int:pk>/delete/', ProjectDelete.as_view(), name='project-delete'),
]