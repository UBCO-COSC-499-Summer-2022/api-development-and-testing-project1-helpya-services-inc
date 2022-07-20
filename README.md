![Open in Codespaces](https://classroom.github.com/assets/open-in-codespaces-abfff4d4e15f9e1bd8274d9a39a0befe03a0632bb0f153d0ec72ff541cedbe34.svg)
# Project-Starter
Please use the provided folder structure for your scope & charter, design documenation, communications log, weekly logs and final documentation.    You are free to organize any additional folder structure as required by the project.

# Introduction
HelpYa is a trade service procurement app that connects clients and businesses. Using the platform, customers will be able to purchase, search, and negotiate services with the business of their choosing. The client would like to design and develop a backend for an ios app for now with plans for cross-platform for android and the web in the future. During our time in capstone, our scope is to create an API that can handle login authentication, create delete updates and report user information and is able handle monetary transactions.

# User Groups
- **Consumer Account:**
These are any users looking for services.
- **Business Account:**
These are companies or services that are looking to gain popularity and provide services to whomever are looking for them.
- **Admin Account:**
These are staff members who can access the backend and frontend of the software and edit the data.

# User Interface
**List of Features:** 
1. Consumers can search businesses by their name and/or a keyword
2. Ability to message a business with any inquiries 
3. Purchase a service from the consumer's desired choice
4. Favourite certain business of the consumers choosing
5. Ability to create an account, either a consumer or business 
6. Consumers can upgrade to a business account later on


# System Architecture
| Feature    | Description |
| ---------- | ----------------------------------------------------------------------- |
| Database ER Diagram | The back-end database schema. Includes all the tables and connections in the database. ![Imgur](https://i.imgur.com/sEddeVw.png) |
| User side USE Case Diagram | The USE Case Diagram explains the user side of what access the user will have. Diagram also includes the process of how things will be linked. ![Imgur](https://i.imgur.com/BkI07dN.png) |
| Admin side USE Case Diagram | The USE Case Diagram explains the admin side of what access the user will have. ![Imgur](https://i.imgur.com/QJW0zir.png) |


# Descriptions of the Endpoints
-**Accounting:**
This endpoint will take in the contents for accounting. The accounting endpoint is associated with the businesses. You will be able to find the business' accounting's using the businessID. 

-**Business:**
This endpoint will hold the contents for the business table. You will be able to manipulate this table using the businessID. This endpoint will have all contents the business's will need to make a account.

-**Chat:**
This endpoint represents the communication between a consumer and business. This will hold basic information on the user side and on the admin side will have the ID's of both users in the chat. To find and manipulate the chat you can do so using the chatID. 

-**Consumer_History:**
The consumer history endpoint will hold the accounting information for the consumer. This will be able to be accessed using the consumerID. 

-**Consumer:**
This endpoint will hold the contents for the consumer table. You will be able to manipulate this table using the consumerID. This endpoint will have all contents the consumer's will need to make a account.

-**Credit_Card_Info:**
This endpoint will hold the payment information for the consumer, it can be accessed and manipulated using the consumerID. You will be able to create, find, delete and update this endpoint. 

-**Education_History:**
This endpoint holds the education level of the business's owners. Will have a number associated with this as well as description of their highest level of education completed. Can be accessed and manipulated using the businessID.

-**Job_Type:**
This endpoint holds the jobs the business's are offering - they will also be able to categorize these jobs from a selected list.
-**Login:**

-**Payment:**

-**recentSearches:**
