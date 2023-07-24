from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import Technician, AutomobileVO, Appointment
from common.json import ModelEncoder
from django.http import JsonResponse
import json

# Create your views here.
