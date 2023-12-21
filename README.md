<div align="center">
  <img src="https://res.cloudinary.com/du94mex28/image/upload/v1699002532/Picky/logo_hlbuat.png" alt="Picky" width="350">
</div>

## Overview

Welcome to the Picky project! Picky is a movie management application that allows users to create, read, update, and delete movies. The project focuses on both frontend and backend development, with the frontend built using React and the backend employing Node.js, Express, MongoDB, Prisma, PostgreSQL, Auth0, and Cloudinary.

## Table of Contents

- [Frontend](#frontend)
- [Backend](#backend)

## Frontend

### Folder Architecture

The frontend follows a modular folder architecture for better organization and scalability. Each component and feature is structured within the designated folders, ensuring a clean and maintainable codebase.

### Integration of Auth0

Picky incorporates Auth0 for authentication and authorization. Users can securely log in and perform CRUD operations based on their roles and permissions.

### Sending JWT in HTTP Requests

JSON Web Tokens (JWT) are utilized to handle user authentication. JWTs are securely sent in HTTP requests to validate user actions and maintain a secure communication channel between the frontend and backend.

### Proper Use of Types

TypeScript is employed for type safety throughout the frontend codebase. This ensures better code quality, catching potential errors during development.

### Code Modularization

Code is modularized to enhance readability and reusability. Components and functions are organized logically, promoting an efficient and maintainable code structure.

### UX/UI Design

The application's user interface is designed with a focus on user experience. The Figma design provides a visually appealing and intuitive layout, making movie management an enjoyable and straightforward process.

## Backend

### CRUD of Movies

The backend supports CRUD operations for managing movies. Users can create, read, update, and delete movie entries, providing a comprehensive set of functionalities for movie management.

### MVC Folder Architecture

The backend follows the Model-View-Controller (MVC) architecture for clear separation of concerns. Models handle data logic, views manage user interfaces, and controllers oversee the flow of data between models and views.

### Mongoose Implementation

MongoDB is integrated using Mongoose to interact with the database. This provides a scalable and flexible solution for handling movie data.

### Route Protection

Certain routes are protected to ensure that only authenticated and authorized users can access and modify movie data. This adds an extra layer of security to the application.

### Multi-Client Prisma Implementation

Prisma is employed as the database toolkit, supporting multiple clients for various database types. This allows for seamless integration with both MongoDB and PostgreSQL, catering to different use cases and preferences.

### Proper Use of Types

TypeScript is utilized in the backend code to enforce type safety, reducing the likelihood of runtime errors and improving overall code quality.

### Cloudinary Integration

Cloudinary is integrated for efficient handling of movie poster images. This ensures that the application can seamlessly manage and display movie posters from the cloud.

### Environment Variables (.env) Implementation

Sensitive information and configuration settings are stored in environment variables (.env) to enhance security and maintain flexibility across different deployment environments.

Feel free to explore and enhance Picky!
