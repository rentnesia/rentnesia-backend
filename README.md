# Rentnesia Backend, API & Data Specification

Rentnesia, a web app that can make users store, borrow and rent things online in your neighborhood

## Tech Stack

-   [**Nodejs**](http://nodejs.org/) Server Runtime Environment
-   [**Expressjs**](http://expressjs.com/) Node.js Framework
-   [**Sequalizejs**](http://docs.sequelizejs.com/) ORM That Talks to Database
-   [**MySQL**](http://mysql.com/) SQL Database Management System
-   [**AWS**](http://aws.amazon.com/) Amazon Web Services
-   [**Heroku**](http://heroku.com/) Backend Deployment System
-   [**JWT**](http://jwt.io/) Securely Transmitting Information
-   [**bcrypt**](http://github.com/kelektiv/node.bcrypt.js) Password Hashing Function

## Preparation

### Diagram Design

![Rentnesia Flow Diagram Design](./rentnesia-diagram-design.png "Rentnesia Flow Diagram Design")

### Database Design

![Rentnesia Database Design](./rentnesia-database-design.png "Rentnesia Database Design")

### Database Management System

Install `mysql` database management system

## Installation and Configuration

1.  Run: `npm install` or `yarn install` to install the dependencies
2.  Create database
3.  Edit .env
4.  Run: `npm migrate` or `yarn migrate` to create the tables into the database

## Running

### Development

Run: `npm run dev` or `yarn dev` to run server

### API Testing

Install: `POSTMAN` or `INSOMNIA` to test API

### Production

Run: `npm run start` or `yarn start` to run server

## API Endpoints

### Authentication

`Authorization: Bearer jwt.token.here`

Root URL: `http://localhost:8000`

### Items

| Endpoint           | HTTP | Description                 |
| ------------------ | ---- | --------------------------- |
| `/items`           | GET  | Get all items               |
| `/items/:id`       | GET  | Get item by id              |
| `/items/search?q=` | GET  | Search item data by keyword |
| `/items`           | POST | Insert a new item           |
| `/items/:id`       | DEL  | Delete item by id           |
| `/items/:id`       | PUT  | Update item by id           |

### Role:Customer Request Things to Pick-up

| Endpoint        | HTTP   | Description                        |
| --------------- | ------ | ---------------------------------- |
| `/requests/`    | GET    | Get all requests                   |
| `/requests/:id` | GET    | Get one request by id              |
| `/requests/:id` | POST   | Create a new pick-up request by id |
| `/requests/:id` | DELETE | Delete request by id               |

### Rent or Store Payment

| Endpoint        | HTTP | Description           |
| --------------- | ---- | --------------------- |
| `/payments/`    | GET  | Get all payments      |
| `/payments/:id` | GET  | Get one payment by id |

### Role:Customer Borrow Things to Other Customer

| Endpoint        | HTTP   | Description                        |
| --------------- | ------ | ---------------------------------- |
| `/requests/`    | GET    | Get all requests                   |
| `/requests/:id` | GET    | Get one request by id              |
| `/requests/:id` | POST   | Create a new pick-up request by id |
| `/requests/:id` | DELETE | Delete request by id               |

### Users

| Endpoint                 | HTTP | Description                             |
| ------------------------ | ---- | --------------------------------------- |
| `/users/`                | GET  | Get all users                           |
| `/users/:id`             | GET  | Get one user by id                      |
| `/users/register`        | POST | Create sign up form by email validation |
| `/users/forgot_password` | POST | Forgot password                         |
| `/users/login`           | POST | Create login user                       |
| `/users/:id`             | PUT  | Update user profile                     |

## License

[MIT License](./LICENSE)
