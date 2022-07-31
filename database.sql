CREATE DATABASE IF NOT EXISTS helpyadb;
use helpyadb;
CREATE TABLE IF NOT EXISTS consumer(
consumerID INT NOT NULL UNIQUE PRIMARY KEY,
fname_of_consumer varchar(150) NOT NULL,
lname_of_consumer varchar(150) NOT NULL,
email varchar(150) NOT NULL UNIQUE,
phone_number char(15) NOT NULL UNIQUE,
location varchar(50) NOT NULL,
consumer_profile varchar(250),
generalID INT NOT NULL,
password varchar(250) NOT NULL
);

CREATE TABLE IF NOT EXISTS accounting(
businessID INT NOT NULL PRIMARY KEY,
payment_history VARCHAR(150),
bank_information VARCHAR(150),
rate_per_hour CHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS recentSearches(

businessID INT NOT NULL UNIQUE,
consumerID INT,
store_name varchar(150) NOT NULL,
store_profile varchar(250),
PRIMARY KEY(businessID),
FOREIGN KEY (consumerID) REFERENCES consumer(consumerID)
);

CREATE TABLE IF NOT EXISTS credit_card_info(
consumerID INT NOT NULL UNIQUE,
name_on_card varchar(150) NOT NULL,
credit_card_number char(16) NOT NULL,
exp_date char(255) NOT NULL,
csc_num INT NOT NULL,
PRIMARY KEY (consumerID)
);

CREATE TABLE IF NOT EXISTS payment(
transactionID INT NOT NULL UNIQUE,
consumerID INT,
businessID INT,
payment_logs VARCHAR(250),
payment_method VARCHAR(50),
PRIMARY KEY (transactionID),
FOREIGN KEY (consumerID) REFERENCES credit_card_info (consumerID),
FOREIGN KEY (businessID) REFERENCES accounting (businessID)
);

CREATE TABLE IF NOT EXISTS business(
businessID INT NOT NULL UNIQUE PRIMARY KEY,
business_name VARCHAR(150) NOT NULL UNIQUE,
owner_fname VARCHAR(150),
owner_lname VARCHAR(150),
business_profile VARCHAR(250),
email VARCHAR(150) NOT NULL UNIQUE,
phone_number CHAR(11) NOT NULL UNIQUE,
rate_per_hour CHAR(10) NOT NULL,
location VARCHAR(50),
keywords VARCHAR(50),
education VARCHAR(150),
pictures VARCHAR(500),
description VARCHAR(500),
general_ID INT NOT NULL
);

CREATE TABLE IF NOT EXISTS consumer_history(
consumerID INT NOT NULL PRIMARY KEY,
businessID INT, 
payment_method VARCHAR(50),
business_name VARCHAR(150), 
payment_logs VARCHAR(250),
FOREIGN KEY (businessID) REFERENCES payment(businessID)
);

CREATE TABLE IF NOT EXISTS chat(
chatID INT NOT NULL PRIMARY KEY,
consumerID INT,
businessID INT,
FOREIGN KEY (consumerID) REFERENCES consumer(consumerID),
FOREIGN KEY (businessID) REFERENCES business(businessID)
);

CREATE TABLE IF NOT EXISTS education_history(
businessID INT,
education_level VARCHAR(255),
highest_education_completed VARCHAR(50),
FOREIGN KEY (businessID) REFERENCES business(businessID)
);

CREATE TABLE IF NOT EXISTS job_type(
businessID INT,
job_title VARCHAR(50),
job_category VARCHAR(50),
FOREIGN KEY (businessID) REFERENCES business(businessID)
);