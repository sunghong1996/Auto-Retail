from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import Technician, AutomobileVO, Appointment
from .encoders import TechnicianEncoder, AppointmentEncoder
from django.http import JsonResponse
import json


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            response = JsonResponse(
                {"message": "Error! Can not create new technician!"},
                status=400,
            )
            return response


@require_http_methods(["DELETE"])
def api_delete_technician(request, id):
    try:
        technician = Technician.objects.get(employee_id=id).delete()
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )
    except Technician.DoesNotExist:
        return JsonResponse(
            {"message": "Error! Technician does not exist!"},
            status=404,
        )


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            employee_id = content["technician"]
            technician = Technician.objects.get(id=employee_id)
            content["technician"] = technician

            if AutomobileVO.objects.filter(vin=content["vin"]).exists():
                content["is_vip"] = True
            else:
                content["is_vip"] = False

        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Error! Invalid technician!"},
                status=400,
            )
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_delete_appointment(request, id):
    try:
        appointment = Appointment.objects.get(id=id).delete()
        return JsonResponse(
            {"message": "Success! Appointment deleted"},
        )
    except Appointment.DoesNotExist:
        return JsonResponse(
            {"message": "Error! Invalid appointment!"},
            status=400,
        )


@require_http_methods(["PUT"])
def api_cancel_appointment(request, id):
    appointment = Appointment.objects.get(id=id)
    appointment.status = "cancel"
    appointment.save()
    return JsonResponse(
        appointment,
        encoder=AppointmentEncoder,
        safe=False,
    )


@require_http_methods(["PUT"])
def api_finish_appointment(request, id):
    appointment = Appointment.objects.get(id=id)
    appointment.status = "finish"
    appointment.save()
    return JsonResponse(
        appointment,
        encoder=AppointmentEncoder,
        safe=False,
    )
