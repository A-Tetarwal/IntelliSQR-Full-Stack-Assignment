
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const NotFoundPage = () => {
  const { isAuthenticated } = useAuth();
  const redirectPath = isAuthenticated ? "/dashboard" : "/login";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-4">
      <div className="text-center animate-fade-in">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild>
          <Link to={redirectPath}>
            Go to {isAuthenticated ? "Dashboard" : "Login"}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
