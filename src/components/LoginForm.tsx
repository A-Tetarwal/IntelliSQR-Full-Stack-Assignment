
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema, LoginFormValues } from "@/lib/validations/auth";
import { useAuth } from "@/contexts/AuthContext";
import { Mail, Lock, Loader2 } from "lucide-react";

export function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data);
    } catch (error) {
      // Error is handled in the auth context
      console.error("Form submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="input-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            className={`pl-9 ${errors.email ? "border-destructive" : ""}`}
            placeholder="Enter your email"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>

      <div className="input-group">
        <div className="flex justify-between items-center mb-1.5">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <button
            type="button"
            className="auth-link"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot password?
          </button>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="password"
            type="password"
            className={`pl-9 ${errors.password ? "border-destructive" : ""}`}
            placeholder="Enter your password"
            {...register("password")}
          />
        </div>
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Logging in...
          </>
        ) : (
          "Log In"
        )}
      </Button>

      <div className="text-center mt-4">
        <span className="text-sm text-muted-foreground">
          Don't have an account?{" "}
        </span>
        <button
          type="button"
          className="auth-link"
          onClick={() => navigate("/register")}
        >
          Create account
        </button>
      </div>
    </form>
  );
}
