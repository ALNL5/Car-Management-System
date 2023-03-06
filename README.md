# CarCar
## Built With
* React.js
* Python
* Django
* Bootstrap
* RESTful API
* PostgreSQL
## How to Run this Application:

### Operation steps:
1. Open browser at http://localhost:3000/ to see the main page
2. On main page, click the "Inventory" on Navigation bar to reach the dropdown Nav link to manufacturer, model and automobile list page.
3. On each list page in step 2, you can see an add new form button. Click the button to create a new one on its create form page.
4. Once a new one is created, you will be redirected to the list page.
5. On the manufacturer, model and automobile list page, you can also delete items by click the Delete button, and the page will be reloaded.
6. Back to main page, click the "Service" on navigation bar to reach the dropdown Nav link to technician, appointment and service history page.
7. On the technician and appointment list page, you can see an add new form button. Click the button to create a new one on its create form page.
8. Once a new one is created, you will be redirected to the list page.
9. On the list page, you can also delete items by click the Delete button, and the page will be reloaded.
10. On the service history page, input the VIN on the search bar, and the service history of the car with that VIN will be loaded on this page.
11. Heading back to the main page, click the "Sales" section on the navigation bar to reach the dropdown Nav link to sales people, customers, sales record, and the sales history page.
12. Both the "Sales People" and "Customers" pages show you a list of sales people and customers that you created after clicking on the button that allows you to create a new person for each section.
13. These list pages also give you the option to delete items by clicking on the Delete button.
14. The "Sales Record" page lets you create a sales record by clicking on an automobile, sales person, and customer that you created. You can also include the sale price to show how much money the specific customer bought the automobile for.
15. The "Sales History" page allows you to click on a dropdown navigation bar in order to click on a specific sales person. After clicking on the sales person of your choice, it will show the VIN of the automobile they sold and the customer that purchased it.

## Functionalities

This can either be a separate section with the services, their URLs, and ports listed here or you can include it in the application diagram

## URLS:
    Home page: localhost:3000
  ### inventory:
    1. Manufacturers list:
        localhost:3000/manufacturers
    2. Create manufacturer form:
        localhost:3000/manufacturers/new
    3. Models list:
        localhost:3000/models
    4. Create model form:
        localhost:3000/models/new
    5. Automobiles list:
        localhost:3000/automobiles
    6. Create automobile form:
        localhost:3000/automobiles/new

  ### service:
    1. Technicians list:
        localhost:3000/technicians
    2. Create technician form:
        localhost:3000/technicians/new
    3. Appointments list:
        localhost:3000/appointments
    4. Create appointment form:
        localhost:3000/appointments/new
    5. Service history:
        localhost:3000/service-history

  ## sales:
    1. Sales Person list:
        localhost:3000/employees/
    2. Create Sales Person Form:
        localhost:3000/employees/new/
    3. Customers List:
        localhost:3000/customers
    4. Create Customers Form:
        localhost:3000/customers/new/
    5. Sales History List:
        localhost:3000/sales/records/
    6. Create Sales Record:
        localhost:3000/sales/records/new/

## Ports:
    1. React:
        - "3000:3000"
    2. sales-api:
        - "8090:8000"
    3. service-api:
        - "8080:8000"
    4. inventory-api:
        - "8100:8000"

## API Documentation
  ### Inventory
    1. Manufacturer
        GET: Manufacturer list API: http://localhost:8100/api/manufacturers/
        GET: A specific manufacturer: http://localhost:8100/api/manufacturers/:id/
        POST: A new manufacturer: http://localhost:8100/api/manufacturers/
        PUT: A manufacturer: http://localhost:8100/api/manufacturers/:id/
        DELETE: A manufacturer: http://localhost:8100/api/manufacturers/:id/
    2. Model:
        GET: Model list API: http://localhost:8100/api/models/
        GET: A specific model: http://localhost:8100/api/models/:id/
        POST: A new model: http://localhost:8100/api/models/
        PUT: A model: http://localhost:8100/api/models/:id/
        DELETE: A model: http://localhost:8100/api/models/:id
    3. Automobile:
        GET: Automobile list API: http://localhost:8100/api/automobiles/
        GET: A specific auto: http://localhost:8100/api/automobiles/:vin/
        POST: A new auto: http://localhost:8100/api/automobiles/
        PUT: An auto: http://localhost:8100/api/automobiles/:vin/
        DELETE: An auto: http://localhost:8100/api/automobiles/:vin/
  ### Service
    1. Technician
        GET: A list of technicians: http://localhost:8080/api/technicians/
        GET: A specific technician: http://localhost:8080/api/technicians/:id/
        POST: A new technician: http://localhost:8080/api/technicians/
        DELETE: a technician: http://localhost:8080/api/technicians/:id/
    2. Appointment
        GET: A list of appointment: http://localhost:8080/api/appointment/
        GET: A specific appointment: http://localhost:8080/api/appointments/:id/
        POST: A new appointment: http://localhost:8080/api/appointments/
        PUT: An appointment: http://localhost:8080/api/appointments/:id/
        DELETE: an appointment: http://localhost:8080/api/appointments/:id/

  ### Sales
    1. Sales Person
        GET: A list of sales people: http://localhost:8090/api/salespersons/
        GET: A specific sales person: http://localhost:8090/api/salespersons/:id/
        POST: A new sales person: http://localhost:8090/api/salespersons/
        DELETE: A sales person: http://localhost:8090/api/salespersons/:id/
    2. Customer
        GET: A list of customer: http://localhost:8090/api/customers/
        GET: A specific customer: http://localhost:8090/api/customers/:id/
        POST: A new customer: http://localhost:8090/api/customers/
        PUT: A customer: http://localhost:8090/api/customers/:id/
        DELETE: A customer: http://localhost:8090/api/customers/:id/
