from rest_framework import generics
from jobs.models import jobOffer
from jobs.api.serializers import JobOfferSerializer

class ListView(generics.ListCreateAPIView):
    queryset = jobOffer.objects.all().order_by('-id')
    serializer_class = JobOfferSerializer

class DetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = jobOffer.objects.all()
    serializer_class = JobOfferSerializer