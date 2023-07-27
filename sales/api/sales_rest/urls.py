from django.urls import path
from sales_rest.views import (
    api_salesperson,
    api_sale,
    api_customer,
    api_salesperson_delete,
    api_sale_delete,
    api_customer_delete,
)

urlpatterns = [
    path(
        "salesperson/",
        api_salesperson,
        name="api_salesperson"
         ),
    path(
        "salesperson/<int:pk>/",
        api_salesperson_delete,
        name="api_salesperson_delete"
    ),
    path(
        "sale/",
        api_sale,
        name="api_sale"
    ),
    path(
        "sale/<int:pk>/",
        api_sale_delete,
        name="api_sale_delete"
    ),
    path(
        "customer/",
        api_customer,
        name="api_customer"
    ),
    path(
        "customer/<int:pk>/",
        api_customer_delete,
        name="api_customer_delete"
    ),
]
