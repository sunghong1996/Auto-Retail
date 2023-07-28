# CarCar

Team:

* Sung Hong - Sales
* Zachary Ceniceros - Services

## Design

## Service microservice

The three models that are needed for the Service microservice are the Technician, AutomobileVO, and Appointment models. Using the poller.py file in the service application, we will update AutomobileVO in 60s intervals, using the VINs from the Inventory microservice.

## Sales microservice
-Front End
Sales microservice provides forms to create sales, customers, and salesperson and lists for sales, customers, and salesperson.
-Back End
Sales had four models (Salesperson, Customer, Sale, AutomobileVO) that are using poller updating rate of 60s. 


