from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.utils import timezone


class UserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None):
        if not email:
            raise ValueError('Users must have an email address.')
        
        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            last_name=last_name,
            )
        
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_staff(self, email, first_name, last_name, password=None):
        user = self.create_staff(
            email,
            first_name=first_name,
            last_name=last_name,
            password=password,
        )
        user.is_staff = True
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, first_name, last_name, password=None):
        user = self.create_superuser(
            email,
            first_name=first_name,
            last_name=last_name,
            password=password,
        )
        user.is_Admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    username = None
    first_name = models.CharField(max_length=75)
    last_name = models.CharField(max_length=75)
    email = models.EmailField(verbose_name='email_address', max_length=75, unique=True, null=False)
    phone_no = models.IntegerField(verbose_name='phone number', null=False, unique=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'phone_no'
    REQUIRED_FIELDS = [first_name, last_name, email]

    objects = UserManager()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        return self.is_staff

    @property
    def is_admin(self):
        "Is the user a member of staff?"
        return self.is_admin   


class Profile(models.Model):
    summary = models.TextField(null=False)
    profile_img = models.ImageField(null=True)


class Project(models.Model):
    STATUS_CHOICES = (
        ('Open', 'Open'),
        ('In Progress', 'In Progress'),
        ('Completed', 'Completed'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='projects',null=True, blank=True)
    title = models.CharField(max_length=211)
    budget = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    location = models.CharField(max_length=100, null=True, blank=True)
    description  = models.TextField(null=True, blank=True)
    status = models.CharField(choices=STATUS_CHOICES, default='Open', max_length=20)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    

class Bid(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    bidder = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    proposal = models.TextField(blank=True)
    bid_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Bid for {self.project.title} by {self.bidder.username}"
    

class Reviews(models.Model):
    Project = models.ForeignKey(Project, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.TextField()