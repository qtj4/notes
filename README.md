# 🎉 Notes Application 📓

Welcome to the **Notes Application**! This is a powerful and user-friendly web application that allows users to create, manage, and share notes. With a sleek design and robust features, you can easily keep track of your thoughts and ideas.

## 🚀 Project Overview

The Notes Application is built using **Node.js** and **Express** for the backend, with **MongoDB** as the database. The frontend is crafted with **HTML**, **CSS**, and **JavaScript**. This application supports user authentication, allowing users to register, log in, and manage their notes securely.

### 🌟 Features

- **User Registration & Login**: Secure authentication using JSON Web Tokens (JWT).
- **Create, Read, Update, Delete (CRUD)**: Manage your notes effortlessly.
- **Role-Based Access Control**: Admin users can manage all users and their notes.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## 🛠️ Setup Instructions

To get started with the Notes Application, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/notes-app.git
cd notes-app
```

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed. Then, run:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following variables:

```plaintext
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
PORT=3000
```

### 4. Start the Application

Run the following command to start the server:

```bash
npm run dev
```

Your application will be running on `http://localhost:3000`.

## 📚 API Documentation

### Authentication

#### Register a User

- **Endpoint**: `POST /api/auth/register`
- **Request Body**:
  ```json
  {
    "username": "your_username",
    "email": "your_email@example.com",
    "password": "your_password"
  }
  ```
- **Response**:
  ```json
  {
    "user": { /* user object */ },
    "token": "your_jwt_token"
  }
  ```

#### Login a User

- **Endpoint**: `POST /api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "your_email@example.com",
    "password": "your_password"
  }
  ```
- **Response**:
  ```json
  {
    "user": { /* user object */ },
    "token": "your_jwt_token"
  }
  ```

### User Management

#### Get User Profile

- **Endpoint**: `GET /api/users/profile`
- **Headers**:
  ```plaintext
  Authorization: Bearer your_jwt_token
  ```
- **Response**:
  ```json
  {
    "username": "your_username",
    "email": "your_email@example.com",
    "role": "user"
  }
  ```

#### Update User Profile

- **Endpoint**: `PUT /api/users/profile`
- **Headers**:
  ```plaintext
  Authorization: Bearer your_jwt_token
  ```
- **Request Body**:
  ```json
  {
    "username": "new_username",
    "email": "new_email@example.com",
    "password": "new_password" // optional
  }
  ```
- **Response**:
  ```json
  {
    "username": "new_username",
    "email": "new_email@example.com",
    "role": "user"
  }
  ```

### Notes Management

#### Create a Note

- **Endpoint**: `POST /api/notes`
- **Headers**:
  ```plaintext
  Authorization: Bearer your_jwt_token
  ```
- **Request Body**:
  ```json
  {
    "title": "Note Title",
    "type": "text", // or "drawing", "tasklist"
    "content": "Your note content here"
  }
  ```
- **Response**:
  ```json
  {
    "title": "Note Title",
    "type": "text",
    "content": "Your note content here",
    "owner": "user_id"
  }
  ```

#### Get All Notes

- **Endpoint**: `GET /api/notes`
- **Headers**:
  ```plaintext
  Authorization: Bearer your_jwt_token
  ```
- **Response**:
  ```json
  [
    {
      "title": "Note Title",
      "type": "text",
      "content": "Your note content here",
      "owner": "user_id"
    },
    // more notes...
  ]
  ```

#### Update a Note

- **Endpoint**: `PUT /api/notes/:id`
- **Headers**:
  ```plaintext
  Authorization: Bearer your_jwt_token
  ```
- **Request Body**:
  ```json
  {
    "title": "Updated Note Title",
    "content": "Updated content"
  }
  ```
- **Response**:
  ```json
  {
    "title": "Updated Note Title",
    "content": "Updated content",
    "owner": "user_id"
  }
  ```

#### Delete a Note

- **Endpoint**: `DELETE /api/notes/:id`
- **Headers**:
  ```plaintext
  Authorization: Bearer your_jwt_token
  ```
- **Response**:
  ```json
  {
    "message": "Note deleted successfully"
  }
  ```

## 🎨 Contributing

We welcome contributions! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgments

- Thanks to the open-source community for their amazing libraries and tools!
- Special thanks to [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) for the JWT implementation.

---

✨ Happy Note Taking! ✨
