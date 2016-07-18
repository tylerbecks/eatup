CREATE DATABASE dbeatup;

USE dbeatup;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) UNIQUE NOT NULL,
  password VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE sessions (
  id INT NOT NULL AUTO_INCREMENT,
  sessionname VARCHAR(30) NOT NULL,
  latitude INT NOT NULL,
  longitude INT NOT NULL,
  userid INT,
  FOREIGN KEY (userid) REFERENCES users(id),
  PRIMARY KEY (id)
);

CREATE TABLE attendees (
  id INT NOT NULL AUTO_INCREMENT,
  sessionid INT NOT NULL,
  userid INT NOT NULL,
  FOREIGN KEY (sessionid) REFERENCES sessions(id),
  FOREIGN KEY (userid) REFERENCES users(id)
);



