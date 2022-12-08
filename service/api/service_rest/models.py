from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200,unique=True)
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin


class Technician(models.Model):
    technician_name = models.CharField(max_length=200)
    employee_number = models.PositiveIntegerField()

    def __str__(self):
        return self.technician_name

    def get_api_url(self):
        return reverse("api_show_technician", kwargs={"pk": self.pk})


class Appointment(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    vip = models.BooleanField(default=False, null=True)
    consumer_name = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=False,auto_now=False)
    time = models.TimeField(auto_now_add=False,auto_now=False)
    reason = models.CharField(max_length=200)
    is_finished = models.BooleanField(default=False, null=True)

    technician = models.ForeignKey(
        Technician,
        related_name="appointment",
        on_delete=models.PROTECT,
    )

    def __str__(self):
        return self.consumer_name

    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"pk": self.pk})
