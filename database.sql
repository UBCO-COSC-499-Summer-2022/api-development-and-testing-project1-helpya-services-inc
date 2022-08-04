CREATE DATABASE IF NOT EXISTS heroku_b5b309c959adca7;

use heroku_b5b309c959adca7;

CREATE TABLE
  IF NOT EXISTS consumer(
    consumerID INT NOT NULL UNIQUE PRIMARY KEY,
    fname_of_consumer varchar(150) NOT NULL,
    lname_of_consumer varchar(150) NOT NULL,
    email varchar(150) NOT NULL UNIQUE,
    phone_number char(15) NOT NULL UNIQUE,
    location varchar(50) NOT NULL,
    consumer_profile varchar(250),
    password varchar(250) NOT NULL,
    role varchar(150) NOT NULL,
    active_account BIT(50) NOT NULL,
    strip_customer_id varchar(250) NOT NULL,
  );
CREATE TABLE
  IF NOT EXISTS recentSearches(
    businessID INT NOT NULL UNIQUE,
    consumerID INT,
    store_name varchar(150) NOT NULL,
    store_profile varchar(250),
    PRIMARY KEY(businessID),
    FOREIGN KEY (consumerID) REFERENCES consumer(consumerID)
  );

CREATE TABLE
  IF NOT EXISTS business(
    FOREIGN KEY (consumerID) REFERENCES consumer(consumerID),
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
    active_account BIT(50) NOT NULL
  );

CREATE TABLE
  IF NOT EXISTS consumer_history(
    consumerID INT NOT NULL PRIMARY KEY,
    businessID INT,
    payment_method VARCHAR(50),
    business_name VARCHAR(150),
    payment_logs VARCHAR(250),
    FOREIGN KEY (businessID) REFERENCES payment(businessID)
  );

CREATE TABLE
  IF NOT EXISTS chat(
    chatID INT NOT NULL PRIMARY KEY,
    consumerID INT,
    businessID INT,
    FOREIGN KEY (consumerID) REFERENCES consumer(consumerID),
    FOREIGN KEY (businessID) REFERENCES business(businessID)
  );

CREATE TABLE
  IF NOT EXISTS education_history(
    businessID INT,
    education_level VARCHAR(255),
    highest_education_completed VARCHAR(50),
    FOREIGN KEY (businessID) REFERENCES business(businessID)
  );

CREATE TABLE
  IF NOT EXISTS job_type(
    businessID INT,
    job_title VARCHAR(50),
    job_category VARCHAR(50),
    FOREIGN KEY (businessID) REFERENCES business(businessID)
  );