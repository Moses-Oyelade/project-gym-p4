# (FIX'T GYM)
#### Date, 2023/11/21
#### By *Moses O. Oyelade*

# FIX'T - A GYM website
Fix'T is a Gym website, commited to enrolling individual of age over sixteen years(16+).
this age controll became neccesary as there was a call for high safety level at the fitness facility.

FIX'T is a website allowing users both admin and enrolled to query from a SQLAlchemy database of users(enrolled). The database is set up with many-to-many relationships backrefered through the user table. Users can have many Plans and Users can have more than one instructor.

The Navigation pages include:

* Home
* About
* Register

There are still more functionality to be created as time goes by.


## Installation instruction
```
Git clone https://github.com/Moses-Oyelade/project-gym-p4.git
```

Fork and clone a copy of the repository. This project requires python3, react.js, pip and npm to be installed on your computer. Install dependencies by 
1. Running pipenv install, then start up a virtual environment by running pipenv shell.
2. Running npm install

### Seed Database

1. In order to seed the database, run the following commands:

```python
cd sever
flask db --autogenerate -m "message"
flask db upgrade
python seed.py
```
2. Database seeding can also be done via the front-end input/form fields.

### Run back-end

cd to the server folder, then run the following command:

```python app.py
```

### Run front-end

cd to the client folder, then run the following command:

```npm start
```
You can now access and interact with the data from the database through the front-end(website).

## Usage
 

## Technologies used
Python
Github
flask
Reacts js
Vercel

## Resources

To learn more about querying using SQLAlchemy: [SQLAlchemy Documentation](https://www.sqlalchemy.org/)

Check out Faker for all of your database seeding needs: [Faker Documentation](https://faker.readthedocs.io/en/master/)

Do your tables look awful? Check out Pandas to learn how to pretty-print your data! [Pandas Documentation](https://pandas.pydata.org/)

Test out user input verification: [Regex101](https://regex101.com/)

Display selectable options in the terminal and return the selection ID (or whatever you want!) using Inquirer: [Inquirer Documentation](https://pypi.org/project/inquirer/)


## Surport and contact details
github.com/Moses-Oyelade
oyelademoses@gmail.com
### License
The content of this site is license under the MIT license
Copyright (c) 2018.