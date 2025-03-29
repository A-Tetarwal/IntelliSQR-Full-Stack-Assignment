
import React from "react";
import { RegisterForm } from "@/components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="auth-layout">
      <div className="auth-card animate-fade-in">
        <h1 className="auth-title">Create an account</h1>
        <p className="auth-subtitle">Join us to get started with your account</p>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
