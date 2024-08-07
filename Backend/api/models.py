from Accounts.models import User
from django.db import models
from django.utils import timezone


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