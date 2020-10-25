from django.db import models

class jobOffer(models.Model):
    company_name = models.CharField(max_length=100)
    company_email = models.EmailField()
    job_title = models.CharField(max_length=100)
    job_description = models.CharField(max_length=100)
    salary = models.PositiveIntegerField()
    prefectures = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    create_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.company_name
    