from django.contrib import admin
from .models import Customer, Salesperson, Sale

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    pass


@admin.register(Salesperson)
class SalespersonAdmin(admin.ModelAdmin):
    pass


@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    pass
