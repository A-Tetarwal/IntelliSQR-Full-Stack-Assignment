
import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { apiClient } from "@/lib/api-client";
import { User, LoginDto } from "@/types/api";
import { LoginFormValues } from "@/lib/validations/auth";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (data: LoginFormValues) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("auth_token");
      
      if (token) {
        try {
          const response = await apiClient.getCurrentUser();
          setUser(response.user);
        } catch (error) {
          console.error("Auth initialization error:", error);
          localStorage.removeItem("auth_token");
        }
      }
      
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (data: LoginFormValues) => {
    try {
      // Since LoginFormValues and LoginDto have the same required fields,
      // we can safely cast or explicitly create a LoginDto object
      const loginData: LoginDto = {
        email: data.email,
        password: data.password,
      };
      
      const response = await apiClient.login(loginData);
      apiClient.setToken(response.token);
      setUser(response.user);
      toast.success("Logged in successfully!");
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error?.message || "Failed to login. Please check your credentials.");
      throw error;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await apiClient.register({ email, password });
      apiClient.setToken(response.token);
      setUser(response.user);
      toast.success("Registration successful!");
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Registration error:", error);
      toast.error(error?.message || "Failed to register. Please try again.");
      throw error;
    }
  };

  const logout = () => {
    apiClient.clearToken();
    setUser(null);
    toast.info("You have been logged out");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};
