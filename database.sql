CREATE DATABASE IF NOT EXISTS heroku_b5b309c959adca7;

use heroku_b5b309c959adca7;

CREATE TABLE
  IF NOT EXISTS consumer(
    consumerID INT AUTO_INCREMENT,
    fname_of_consumer varchar(150) NOT NULL,
    lname_of_consumer varchar(150) NOT NULL,
    email varchar(150) NOT NULL UNIQUE,
    phone_number char(15) NOT NULL UNIQUE,
    location varchar(50) NOT NULL,
    consumer_profile varchar(250),
    password varchar(250) NOT NULL,
    role varchar(150) NOT NULL,
    active_account BIT(50) NOT NULL,
    strip_customer_id varchar(250),
    PRIMARY KEY (consumerID)
  );

CREATE TABLE
  IF NOT EXISTS business(
    consumerID INT,
    businessID INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
    business_name VARCHAR(150) NOT NULL,
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
    FOREIGN KEY (consumerID) REFERENCES consumer(consumerID) ON UPDATE CASCADE ON DELETE CASCADE
  );

CREATE TABLE
  IF NOT EXISTS recentSearches(
    businessID INT,
    consumerID INT
  );

CREATE TABLE
  IF NOT EXISTS chat(
    chatID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    consumerID INT,
    businessID INT,
    time_stamp DATE,
    chat_message VARCHAR(500)
  );

CREATE TABLE
  IF NOT EXISTS education_history(
    businessID INT,
    education_level VARCHAR(255),
    highest_education_completed VARCHAR(50)
  );

CREATE TABLE
  IF NOT EXISTS job_type(
    businessID INT,
    job_title VARCHAR(50),
    job_category VARCHAR(50)
  );

CREATE TABLE
  IF NOT EXISTS ads(
    adID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    businessID INT,
    ad_title VARCHAR(50),
    ad_body VARCHAR(500),
    location VARCHAR(50),
    rate_per_hour CHAR(10)
  );