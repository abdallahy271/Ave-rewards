PRAGMA foreign_keys=ON;

CREATE TABLE Restaurants (
	name varchar(50) PRIMARY KEY,
	address varchar(50),
	description varchar(50),
	price_digits int,
	discount int,
	discount_type int, --1 for %, 0 for $
	discount_cost);
	
.mode csv
.import restaurants.csv Restaurants
	
CREATE TABLE Customer (
	username varchar(50) PRIMARY KEY,
	points int);
	
CREATE TABLE Visited (
	name REFERENCES Restaurants(name),
	username REFERENCES Customer(username),
	PRIMARY KEY(username, name));