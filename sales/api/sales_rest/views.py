import json
from sales_rest.models import AutomobileVO, Customer, Salesperson, Sale
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .encoders import (
    SalespersonEncoder,
    CustomerEncoder,
    SaleEncoder,
)


@require_http_methods(["GET", "POST"])
def api_salesperson(request):
    if request.method == "GET":
        salesperson = Salesperson.objects.all()
        return JsonResponse(
            {"salesperson": salesperson},
            encoder=SalespersonEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False
            )
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Salesperson does not exist"},
                status=400
            )


@require_http_methods(["GET", "DELETE"])
def api_salesperson_delete(request, pk):
    if request.method == "GET":
        salesperson = Salesperson.objects.get(id=pk)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False
        )
    else:
        count, _ = Salesperson.objects.get(id=pk).delete()
        return JsonResponse(
            {"deleted": count > 0}
        )


@require_http_methods(["GET", "POST"])
def api_customer(request):
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {"customer": customer},
            encoder=CustomerEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist"},
                status=400
            )


@require_http_methods(["GET", "DELETE"])
def api_customer_delete(request, pk):
    if request.method == "GET":
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False
        )
    else:
        count, _ = Customer.objects.get(id=pk).delete()
        return JsonResponse(
            {"deleted": count > 0}
        )


@require_http_methods(["GET", "POST"])
def api_sale(request):
    if request.method == "GET":
        sale = Sale.objects.all()
        return JsonResponse(
            {"sale": sale},
            encoder=SaleEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            salesperson = Salesperson.objects.get(id=content["salesperson"])
            content["salesperson"] = salesperson
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
            sale = Sale.objects.create(**content)

            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False
            )
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Salesperson does not exist"},
                status=400
            )
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist"},
                status=400
            )
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Automobile does not exist"},
                status=400
            )


@require_http_methods(["GET", "DELETE"])
def api_sale_delete(request, pk):
    if request.method == "GET":
        sale = Sale.objects.get(id=pk)
        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False
        )
    else:
        count, _ = Sale.objects.get(id=pk).delete()
        return JsonResponse(
            {"deleted": count > 0}
        )
