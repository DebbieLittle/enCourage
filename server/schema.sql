DROP DATABASE IF EXISTS encourage;

CREATE DATABASE encourage;

USE encourage;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(25) NOT NULL,
  messages varchar(500) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE authorize (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(20) UNIQUE NOT NULL,
  password varchar(75) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


-- INSERT INTO authorize (username, password) VALUES ('Ana', '050690hi');
-- INSERT INTO authorize (username, password) VALUES ('Dan', '121095bl');
-- INSERT INTO authorize (username, password) VALUES ('DavidK', '101969butt');
-- INSERT INTO authorize (username, password) VALUES ('DavidL', '081483juul');
-- INSERT INTO authorize (username, password) VALUES ('Debbie', '010491me');
-- INSERT INTO authorize (username, password) VALUES ('Ed', '012189cap');
-- INSERT INTO authorize (username, password) VALUES ('Erik', '040796blok');
-- INSERT INTO authorize (username, password) VALUES ('Frank', '050488smile');
-- INSERT INTO authorize (username, password) VALUES ('Guillermo', '120693gaf');
-- INSERT INTO authorize (username, password) VALUES ('Irwin', '102489sauce');
-- INSERT INTO authorize (username, password) VALUES ('Marty', '061185soy');
-- INSERT INTO authorize (username, password) VALUES ('Mitch', '020792best');
-- INSERT INTO authorize (username, password) VALUES ('Parker', '030386mvp');
-- INSERT INTO authorize (username, password) VALUES ('Peter', '092791fav');