Test a single piece of code in isolation | Single middleware
Test how different pieces of code work together | Request flowing through multiple middlewares to a request handler
test how different components work together | Make request to service, ensure write to database was completed
Test how different services work together | Creating a 'payment' at the 'payments' service should affect the 'orders' service


jest | Start in-memory copy of MongoDB
| Start up our express app
| Use supertest library to make fake requests to our express app
| Run assertions to make sure the request did the right thing