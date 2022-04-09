# Services
Auth - Everything related to user signup/signin/signout
tickets - ticket creation/editing. Knows wheter a ticket can be updated
orders - order creation/editing
expiration - Watches for orders to be created, cancels them after 15 minutes
payments - Handles credit card payments. Cancels orders if payments fails, completes if payment succeeds