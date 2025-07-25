# API Service for Scoreboard

## Overview

This software module is designed to handle the API service for a website that displays a **live scoreboard**. The scoreboard shows the **top 10 users' scores** and updates in **real-time**. Each time a user completes an action (e.g., completing a task or game), their score is updated. The API ensures **security** by validating that only authorized users can update their scores to prevent malicious activity.

---

## Features

### 1. Live Scoreboard Update
- Display top 10 users' scores in real-time.
- Ensure the scoreboard is updated whenever a user's score changes.

### 2. Action Completion
- Users complete actions that lead to an increase in their score.
- An API call is dispatched to update the score on the backend once the action is completed.

### 3. Security Measures
- **Authorization** is required to update a user's score. Prevent unauthorized users from modifying scores.
- Utilize **authentication tokens** (e.g., JWT) or **API keys** to validate users.
- **Rate Limiting**: To prevent malicious users from spamming the system with multiple requests.

### 4. API Endpoint to Update Scores
- A secure endpoint to handle score updates and ensure that users' scores are only changed if they are authorized to do so.

---

## API Specifications

### 1. **POST /api/v1/update-score**

#### **Description**
This endpoint allows users to update their score after completing an action. The score update request must contain the user ID, score to increase, and a valid authorization token to verify the user.

#### **Request Body**
```json
{
  "user_id": "string",
  "score": "number",
  "auth_token": "string"
}
```

#### **Header**
- `Content-Type`: application/json
- `Authorization`: Bearer {auth_token} (Optional: Depends on token management implementation)

#### **Response**
- Success (200 OK)
```json
{
  "status": "success",
  "message": "Score updated successfully."
}
```

- Unauthorized (401 Unauthorized)
```json
{
  "status": "error",
  "message": "Unauthorized access. Invalid or missing token."
}
```

- Invalid Input (400 Bad Request)
```json
{
  "status": "error",
  "message": "Invalid input. Please check the user ID and score."
}
```

- Internal Server Error (500 Internal Server Error)
```json
{
  "status": "error",
  "message": "An unexpected error occurred. Please try again later."
}
```

#### **Sample Request**
```properties
POST /api/v1/update-score HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer YOUR_AUTH_TOKEN
```
```json
{
  "user_id": "user_123",
  "score": 50,
  "auth_token": "YOUR_AUTH_TOKEN"
}
```
#### **Sample Response**
```json
{
  "status": "success",
  "message": "Score updated successfully."
}
```

### 2. **GET /api/v1/top-scores**

#### **Description**
This endpoint retrieves the top 10 highest user scores, which are displayed on the scoreboard.

#### **Request Body**
No request body needed.

#### **Response**
- Success (200 OK)
```json
{
  "status": "success",
  "data": [
    {
      "user_id": "user_123",
      "score": 300
    },
    {
      "user_id": "user_456",
      "score": 290
    },
    {
      "user_id": "user_789",
      "score": 280
    },
    {
      "user_id": "user_112",
      "score": 270
    },
    {
      "user_id": "user_113",
      "score": 260
    },
    {
      "user_id": "user_222",
      "score": 250
    },
    {
      "user_id": "user_333",
      "score": 240
    },
    {
      "user_id": "user_444",
      "score": 230
    },
    {
      "user_id": "user_555",
      "score": 220
    },
    {
      "user_id": "user_666",
      "score": 210
    }
  ]
}
```

- Internal Server Error (500 Internal Server Error)
```json
{
  "status": "error",
  "message": "An error occurred while fetching the top scores. Please try again later."
}
```

#### **Sample Request**
```properties
GET /api/v1/top-scores HTTP/1.1
Host: api.example.com
```
#### **Sample Response**
```json
{
  "status": "success",
  "data": [
    {
      "user_id": "user_123",
      "score": 300
    },
    {
      "user_id": "user_456",
      "score": 290
    },
    {
      "user_id": "user_789",
      "score": 280
    },
    {
      "user_id": "user_112",
      "score": 270
    },
    {
      "user_id": "user_113",
      "score": 260
    },
    {
      "user_id": "user_222",
      "score": 250
    },
    {
      "user_id": "user_333",
      "score": 240
    },
    {
      "user_id": "user_444",
      "score": 230
    },
    {
      "user_id": "user_555",
      "score": 220
    },
    {
      "user_id": "user_666",
      "score": 210
    }
  ]
}
```

---

## Considerations

### 1. **Authentication:**
- Every score update request should include a valid authentication token (JWT or API key).
- Tokens should be validated to ensure that the user is authenticated.
- Tokens must be checked for expiration and validity on each request.

### 2. **Authorization:**
- Only the legitimate user who owns the `user_id` can update their score.
- Backend will validate that the `user_id` in the request matches the authenticated user associated with the `auth_token`.

### 3. **Rate Limiting:**
- To prevent malicious users from spamming the score update endpoint, rate limiting will be applied. For example, a user can only make 5 requests per minute.

### 4. **Input Validation:**
- Backend should validate that the score is a positive integer and that the `user_id` is valid.
- If any input is malformed or missing, the API will respond with a 400 Bad Request.

### 5. **Logging and Monitoring:**
- All score updates and API interactions should be logged for auditing purposes.
- Monitoring tools (e.g., Cloudwatch, X-Ray, Datadog) should be in place to track and alert on unusual activities (e.g., a sudden spike in score updates).

---

## Diagram

<div align="center">
  <img src="https://github.com/user-attachments/assets/e4db50f2-f2f1-47a1-aed4-526b743a5da5">
</div>

