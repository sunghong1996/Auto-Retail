from common.json import ModelEncoder
from .models import Salesperson, Customer, AutomobileVO, Sale


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "vin",
        "sold",
    ]


class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "id",
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "automobile",
        "salesperson",
        "customer",
        "id",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder,
        "salesperson": SalespersonEncoder,
        "customer": CustomerEncoder,
    }
