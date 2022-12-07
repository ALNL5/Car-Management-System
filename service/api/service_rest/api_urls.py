from django.urls import path
from .api_views import api_technicians, api_list_appointments


urlpatterns = [
    path("technicians/", api_technicians, name="api_create_technicians"),
    path("technicians/", api_technicians, name="api_list_technicians"),
    path("appointments/", api_list_appointments, name="api_create_appointments"),
    path("appointments/", api_list_appointments, name="api_list_appointments"),
]
