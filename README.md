
# Full-Stack Authentication Application

This project is a full-stack authentication application built with React, TypeScript, Node.js, and Prisma, following modern development practices.

## Project Structure

The repository is organized into two main directories:

- `/frontend`: React application with TypeScript
- `/backend`: Node.js server with Express, TypeScript, and Prisma

## Frontend

The frontend is built with:

- **React**: UI library
- **TypeScript**: Type safety
- **React Router**: Routing and navigation
- **React Hook Form**: Form management and validation
- **Zod**: Schema validation
- **React Query**: Data fetching and state management
- **Tailwind CSS**: Styling

See the [frontend README](./src/README.md) for more details.

## Backend

The backend is built with:

- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **TypeScript**: Type safety
- **Prisma**: ORM for database management
- **PostgreSQL**: Database
- **JWT**: Authentication

See the [backend README](./backend/README.md) for more details.

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with the following content:

```
VITE_API_URL=http://localhost:3000/api
```

4. Start the development server:

```bash
npm run dev
```

The frontend will be available at http://localhost:8080.

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with the following content (replace with your PostgreSQL credentials):

```
DATABASE_URL="postgresql://user:password@localhost:5432/auth_db?schema=public"
JWT_SECRET="your-jwt-secret-key-here"
PORT=3000
NODE_ENV=development
```

4. Run the Prisma migration to set up your database:

```bash
npx prisma migrate dev --name init
```

5. Start the development server:

```bash
npm run dev
```

The backend API will be available at http://localhost:3000/api.

## Features

- User registration with email and password
- User login and authentication
- Protected routes on the frontend
- JWT-based authentication
- Complete type safety across frontend and backend
- Form validation with Zod
- Efficient state management with React Query
- Clean and modern UI

## Error Handling

Both frontend and backend implement robust error handling:

### Frontend
- Form validation errors
- API error handling with toast notifications
- Loading states

### Backend
- Custom error classes
- Validation error handling
- Proper HTTP status codes

