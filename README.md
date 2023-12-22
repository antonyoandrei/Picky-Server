<div align="center">
  <img src="https://res.cloudinary.com/du94mex28/image/upload/v1699002532/Picky/logo_hlbuat.png" alt="Picky" width="350">
</div>

Welcome to the Picky project backend! This section provides an overview of the backend development, focusing on the technologies used, architecture, and deployment details.

## Overview

Picky's backend serves as the engine that powers the movie management application. It is built using Node.js, Express, MongoDB, Prisma, PostgreSQL, Auth0, and Cloudinary. The backend handles CRUD operations for movie management and ensures secure authentication and authorization through Auth0.

## Table of Contents

- [CRUD of Movies](#crud-of-movies)
- [MVC Folder Architecture](#mvc-folder-architecture)
- [Mongoose Implementation](#mongoose-implementation)
- [Route Protection](#route-protection)
- [Multi-Client Prisma Implementation](#multi-client-prisma-implementation)
- [Proper Use of Types](#proper-use-of-types)
- [Cloudinary Integration](#cloudinary-integration)
- [Environment Variables (.env) Implementation](#environment-variables-env-implementation)
- [Deployment on Railway](#deployment-on-railway)

## CRUD of Movies

The backend supports comprehensive CRUD operations for managing movies. Users can create, read, update, and delete movie entries, providing a robust set of functionalities for movie management.

## MVC Folder Architecture

Picky's backend follows the Model-View-Controller (MVC) architecture for clear separation of concerns. Models handle data logic, views manage user interfaces, and controllers oversee the flow of data between models and views.

## Mongoose Implementation

MongoDB is seamlessly integrated using Mongoose to interact with the database. This provides a scalable and flexible solution for handling movie data.

## Route Protection

To ensure the security of movie data, certain routes are protected. Only authenticated and authorized users can access and modify movie information, adding an extra layer of protection to the application.

## Multi-Client Prisma Implementation

Prisma is utilized as the database toolkit, supporting multiple clients for different database types. This allows for seamless integration with both MongoDB and PostgreSQL, accommodating different use cases and preferences.

## Proper Use of Types

TypeScript is employed in the backend code to enforce type safety. This reduces the likelihood of runtime errors and enhances overall code quality.

## Cloudinary Integration

Cloudinary is integrated into the backend for efficient handling of movie poster images. This ensures that the application can seamlessly manage and display movie posters from the cloud.

## Environment Variables (.env) Implementation

Sensitive information and configuration settings are stored in environment variables (.env) to enhance security and maintain flexibility across different deployment environments.

## Deployment on Railway

Picky's backend is deployed on Railway, providing a scalable and reliable hosting solution. Railway streamlines the deployment process, ensuring that the backend is readily accessible and performs optimally.

Feel free to explore and enhance the Picky backend!