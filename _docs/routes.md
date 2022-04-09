# routes
Route | Method | Body | Purpose
------ | ------ | ------ | ------
/api/users/signup | POST | {email: string, password: string} | sign up for an account
/api/users/signin | POST | {email: string, password: string} | sign in for an existing account
/api/users/signout | POST | {} | sign out
/api/users/currentuser | GET | - | Return info about the user
