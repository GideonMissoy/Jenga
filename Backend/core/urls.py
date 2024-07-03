from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
# from api.views import CreateUserView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/users/auth/', include('Accounts.urls')),
    path("api/", include("api.urls")),
]
