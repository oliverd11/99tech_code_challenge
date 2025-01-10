# Express CRUD API with MongoDB, TypeScript, and Swagger UI

This is a simple CRUD API built with **Express**, **TypeScript**, **MongoDB**, and **Swagger UI** for API documentation.

## Setup and Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/express-crud-ts.git
    cd express-crud-ts
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start MongoDB locally or use MongoDB Atlas.

4. Start the server:

    ```bash
    npm run start
    ```

## Endpoints

- **POST /resources**: Create a new resource.
- **GET /resources**: List all resources (with optional filtering by `name`).
- **GET /resources/:id**: Get a resource by ID.
- **PUT /resources/:id**: Update a resource by ID.
- **DELETE /resources/:id**: Delete a resource by ID.

## API Documentation

You can view the API documentation at `/api-docs`.

## License

MIT
