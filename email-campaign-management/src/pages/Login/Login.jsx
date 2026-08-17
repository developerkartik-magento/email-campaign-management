import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { demoUser } from "../../data/user";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);


  const handleSubmit = (event) => {

    event.preventDefault();

    setError("");


    // Basic validation

    if (!email || !password) {

      setError(
        "Please enter your email and password."
      );

      return;
    }


    setLoading(true);


    // Simulate API request

    setTimeout(() => {

      if (
        email === demoUser.email &&
        password === demoUser.password
      ) {

        // Save demo authentication state

        localStorage.setItem(
          "isAuthenticated",
          "true"
        );

        localStorage.setItem(
          "user",
          JSON.stringify({
            name: demoUser.name,
            email: demoUser.email,
            role: demoUser.role,
          })
        );


        // Redirect to Dashboard

        navigate("/dashboard", {
          replace: true,
        });

      } else {

        setError(
          "Invalid email or password."
        );

        setLoading(false);
      }

    }, 700);

  };


  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          EC
        </div>

        <h1>
          Welcome Back
        </h1>

        <p className="login-subtitle">
          Sign in to Email Campaign Management Platform
        </p>


        <form onSubmit={handleSubmit}>

          {/* Email */}

          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />

          </div>


          {/* Password */}

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
            />

          </div>


          {/* Error */}

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}


          {/* Login Button */}

          <button
            type="submit"
            className="primary-button login-button"
            disabled={loading}
          >

            {loading
              ? "Signing in..."
              : "Sign In"
            }

          </button>

        </form>


       

      </div>

    </div>
  );
}