# Express CRUD API with MongoDB, TypeScript, and Swagger UI

This is a simple CRUD API built with **Express**, **TypeScript**, **MongoDB**, and **Swagger UI** for API documentation.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version >= 18)
- Docker

## Setup and Installation

Follow these step to install and run this application locally:

1. Clone the repository:

    ```bash
    git clone git@github.com:oliverd11/99tech_code_challenge.git
    cd src/problem5
    ```

2. Set the environment variables:

    ```bash
    cp .env.example .env
    ```

3. Set the docker compose file:

    ```bash
    cp docker-compose.yaml.example docker-compose.yaml
    ```

## Commands

1. Running locally:

```bash
npm install
npm run start
```

2. Docker:

```bash
npm run docker:run
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=5000
# URL of the Mongo DB
MONGODB_URL=mongodb://127.0.0.1:27017/problem5
```

## Endpoints

- **POST /resources**: Create a new resource.
- **GET /resources**: List all resources (with optional filtering by `name`).
- **GET /resources/:id**: Get a resource by ID.
- **PUT /resources/:id**: Update a resource by ID.
- **DELETE /resources/:id**: Delete a resource by ID.

## API Documentation

You can view the API documentation at `http://localhost:5000/api-docs`.

## License

MIT
