DROP DATABASE IF EXISTS game_on;

CREATE DATABASE game_on;

USE game_on;

CREATE TABLE user (

	user_email VARCHAR(80) not null,
    password VARCHAR(50) not null,
    mobile CHAR(10) not null,
    first_name VARCHAR(30) not null,
    last_name VARCHAR(30) not null,
    birthdate CHAR(8) not null,
    city VARCHAR(45) not null,
    state CHAR(2) not null,
    zip CHAR(5) not null,
    primary key (user_email)

);

CREATE TABLE event (

	game_id int not null auto_increment,
    game_name VARCHAR(140) not null,
    city VARCHAR(45) not null,
    state CHAR(2) not null,
    zip CHAR(5) not null,
    min_players INT(10) not null,
    max_players INT(10) not null,
    game_date CHAR(8) not null,
    game_time TIME not null,
    equipment BOOLEAN not null,
    min_birthdate CHAR(8) not null,
    game_fee VARCHAR(10) not null,
    disability BOOLEAN not null,
    pub_priv VARCHAR(10) not null,
    owner_id VARCHAR(80) not null,
    sport_type_id INT not null,
    gender_code INT not null,
    skill_level_code INT not null,
    primary key (game_id)
    
);

CREATE TABLE sport_type (
	
    sport_type_id int not null auto_increment,
    sport_type_name VARCHAR(65) not null,
	primary key (sport_type_id)
    
);

CREATE TABLE gender (

    gender_code int not null auto_increment,
    gender_name VARCHAR(15) not null,
    primary key (gender_code)
    
);

CREATE TABLE skill_level (

	skill_level_code int not null auto_increment,
    skill_level_name VARCHAR(20) not null,
    primary key (skill_level_code)
    
);

INSERT INTO sport_type VALUES ("Soccer"), ("Football"), ("Basketball"), ("Beach Volleyball"), ("Indoor Volleyball"), ("Floor Hockey"), ("Ice Hockey"), ("Golf"), ("Badminton"), ("Bowling"), ("Pickleball"), ("Ping Pong"), ("Broomball"), ("Dodgeball"), ("Curling"), ("Kickball"), ("Softball"), ("Tennis"), ("Rugby"), ("Cricket"), ("Billiards"), ("Water Polo"), ("Handball"), ("Cycling"), ("Box Lacrosse"), ("Paintball"), ("Polo"), ("Equestrian"), ("Ultimate Frisbee"), ("Frisbee Golf");

INSERT INTO gender VALUES ("Men Only"), ("Women Only"), ("Gender Agnostic"), ("Coed");

INSERT INTO skill_level VALUES ("Novice"), ("Intermediate"), ("Expert");