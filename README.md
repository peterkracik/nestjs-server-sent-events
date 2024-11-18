# Nest.js Server-Sent Events (SSE) Example

This is a simple Nest.js application demonstrating the use of Server-Sent Events (SSE) to send real-time notifications to clients. The project includes a basic backend service to handle notifications and a frontend example to display them.

## Features

-   **Backend**: A Nest.js server that provides endpoints to post notifications and stream notifications to clients in real-time using SSE.
-   **Frontend**: A simple HTML page to demonstrate receiving notifications in real-time and displaying them with a notification badge.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install the dependencies:

   ```bash
   yarn install
   ```

## Running the Application

1. Start the Nest.js server:

   ```bash
   yarn start:dev
   ```

   The server will run on `http://localhost:3000`.

2. Open the frontend example:

   Open the `index.html` file located in the `app` folder in a web browser. You can specify a user ID using a query parameter (e.g., `index.html?user=1`).

## Endpoints

### POST /notifications

-   **Description**: Receives a new notification and adds it to the store.
-   **Request Body**:
  ```json
  {
    "message": "string",
    "userId": "string"
  }
  ```

### GET /notifications/:id

-   **Description**: Returns all notifications for a given user.
-   **Parameters**:
  - `id`: User ID

### SSE /notifications/:id/stream

-   **Description**: Returns a stream of notifications for a given user.
-   **Parameters**:
  - `id`: User ID

## Frontend Example

The frontend is a simple HTML page using Tailwind CSS for styling. It demonstrates how to:

-   Send notifications via a form.
-   Display notifications count using a badge.
-   Receive real-time notifications using SSE.

### How to Use

1. Open the `index.html` file in a browser.
2. Use the form to send notifications to a user.
3. The notification count badge will update in real-time as new notifications are received.

## Dependencies

-   `@nestjs/common`: Core Nest.js components.
-   `@nestjs/event-emitter`: Used to emit and listen to events within the application.
-   `rxjs`: Library for reactive programming using Observables.

## License

This project is licensed under the MIT License.

