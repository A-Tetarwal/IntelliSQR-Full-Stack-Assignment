
# Frontend Application

This is the frontend part of the full-stack authentication application built with React, TypeScript, and modern libraries.

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety across the application
- **React Router** - Routing and navigation
- **React Hook Form** - Form management and validation
- **Zod** - Schema validation
- **React Query** - Data fetching, caching and state management
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Shadcn UI** - Component library

## Project Structure

The project follows a modular structure organized into several key areas:

### UI Components

Located in `/components`, these are reusable UI elements built following the Figma design:

- `LoginForm.tsx` - Login form component with validation
- `RegisterForm.tsx` - Registration form component with validation
- `ProtectedRoute.tsx` - Component for route protection based on auth state

### Business Logic

- `/contexts/AuthContext.tsx` - Authentication context for managing user state
- `/lib/validations` - Schema validation for forms using Zod

### API Handling

- `/lib/api-client.ts` - API client for interacting with the backend
- `/types/api.ts` - TypeScript interfaces for API responses and requests

### Pages

- `/pages/LoginPage.tsx` - Login page
- `/pages/RegisterPage.tsx` - Registration page
- `/pages/Dashboard.tsx` - Protected dashboard page
- `/pages/NotFoundPage.tsx` - 404 page for handling non-existent routes

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:

```
VITE_API_URL=http://localhost:3000/api
```

3. Start the development server:

```bash
npm run dev
```

The application should now be running at http://localhost:8080.

## Type Safety

All components, hooks, and API interactions are fully typed using TypeScript interfaces and types, ensuring type safety throughout the application. This includes:

- API response types
- Form validation schemas
- Component props
- Context values

## Error Handling

The application implements comprehensive error handling:

- Form validation errors using Zod schemas
- API error responses with meaningful messages
- Loading states during API requests
- Protected routes with proper redirects

