
# Backend Application

This is the backend part of the full-stack authentication application built with Node.js, Express, TypeScript, and Prisma.

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Prisma** - ORM for database management
- **JSON Web Token (JWT)** - Authentication
- **Bcrypt** - Password hashing
- **Zod** - Schema validation

## Project Structure

The project follows a modular structure organized into several key areas:

### Controllers

Located in `/controllers`, these handle the business logic for each endpoint:

- `auth.controller.ts` - Authentication-related functionality (login, register, etc.)
- `user.controller.ts` - User-related functionality

### Routes

Located in `/routes`, these define the API endpoints:

- `auth.routes.ts` - Authentication routes
- `user.routes.ts` - User routes

### Middleware

Located in `/middleware`, these handle cross-cutting concerns:

- `auth.middleware.ts` - Authentication middleware
- `error.middleware.ts` - Error handling middleware

### Prisma Schema

The database schema is defined in `/prisma/schema.prisma`, including:

- User model with email and password fields

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:

```
DATABASE_URL="postgresql://user:password@localhost:5432/auth_db?schema=public"
JWT_SECRET="your-jwt-secret"
```

3. Run Prisma migrations:

```bash
npx prisma migrate dev --name init
```

4. Start the development server:

```bash
npm run dev
```

The API should now be running at http://localhost:3000/api.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate a user
- `GET /api/auth/me` - Get current user information

### Error Handling

The application implements robust error handling:

- Custom error classes for different types of errors
- Error handling middleware to catch and format errors
- Proper HTTP status codes for different error scenarios

## Database

The application uses a PostgreSQL database managed through Prisma ORM. The schema includes:

- User model with email (unique) and password fields
- Created and updated timestamps tracking
- Proper indexing for performance

