
import React from "react";
import { LoginForm } from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="auth-layout">
      <div className="auth-card animate-fade-in">
        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-subtitle">Log in to your account to continue</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
