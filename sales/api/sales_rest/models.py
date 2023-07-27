from django.db import models
from django.urls import reverse


class Salesperson(models.Model):
    name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.name

    def get_api_url(self):
        return reverse("api_salesperson", kwargs={"pk": self.pk})


class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200)
    vin = models.CharField(max_length=200, unique=True)
    sold = models.BooleanField(default=False)

    def __str__(self):
        return self.vin


class Sale(models.Model):
    price = models.PositiveIntegerField()
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sale",
        on_delete=models.CASCADE,
    )
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="sale",
        on_delete=models.CASCADE,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sale",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.salesperson.name

    def get_api_url(self):
        return reverse("api_sale", kwargs={"pk": self.pk})
