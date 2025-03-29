import { AuthResponse, LoginDto, RegisterDto } from "@/types/api";

// Update the API URL to work with development environments
// For a production app, this should be an environment variable
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

class ApiClient {
  private token: string | null = null;

  constructor() {
    // Load token from localStorage during initialization
    this.token = localStorage.getItem("auth_token");
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem("auth_token", token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem("auth_token");
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    return headers;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const data = await response.json();

    if (!response.ok) {
      throw {
        message: data.message || "An error occurred",
        statusCode: response.status,
      };
    }

    return data;
  }

  async login(credentials: LoginDto): Promise<AuthResponse> {
    console.log("Attempting to login with:", credentials);
    console.log("API URL:", API_URL);
    
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify(credentials),
      });

      return this.handleResponse<AuthResponse>(response);
    } catch (error) {
      console.error("Login fetch error:", error);
      throw error;
    }
  }

  async register(userData: RegisterDto): Promise<AuthResponse> {
    console.log("Attempting to register with:", userData);
    console.log("API URL:", API_URL);
    
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify(userData),
      });

      return this.handleResponse<AuthResponse>(response);
    } catch (error) {
      console.error("Registration fetch error:", error);
      throw error;
    }
  }

  async getCurrentUser(): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/me`, {
      headers: this.getHeaders(),
    });

    return this.handleResponse<AuthResponse>(response);
  }

  async logout(): Promise<void> {
    this.clearToken();
  }
}

// Export a singleton instance
export const apiClient = new ApiClient();
