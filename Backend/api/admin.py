from django import forms
from django.contrib import admin
from django.contrib.auth.models import Group
from django.core.exceptions import ValidationError
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from .models import Project, User, Bid, Profile, Reviews
from .models import User

class UserCreationForm(forms.ModelForm):
    """A form for creating new users."""
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Confirm Password', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('email', 'firs_name', 'last_name')

        def clean_password2(self):
            """confirms both passwords match, then returns the password if they do"""
            password1 = self.cleaned_data.get('password1')
            password2 = self.cleaned_data.get('password2')
            if password1 and password2 and password1 != password2:
                raise ValidationError("Both passwords have to match!")
            return password2
        
        def save(self, commit=True):
            """Hashes and saves the provided password."""
            user = super().save(commit=False)
            user.set_password(self.cleaned_data['password1'])
            if commit:
                user.save()
            return user


class UserChangeForm(forms.ModelForm):
    """"Form for updating users, but replaces the password field with
    admin's password hash display field."""
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('email', 'password', 'first_name', 'last_name', 'is_active')

    def clean_password(self):
        return self.initial['password']
    
   
class UserAdmin(BaseUserAdmin):
    """Forms to add and change user instances."""
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = ('email', 'first_name', 'last_name', 'is_admin')
    list_filter = ('email')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {'fields': 'is_admin'}),
    )

    add_fieldsets = (
        (None, {
            'classes': 'wide',
            'fields': ('email', 'first_name', 'last_name', 'password1', 'password2'),
        }),
    )
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email')
    filter_horizontal = ()

admin.site.register(User, UserAdmin)
admin.site.unregister(Group)