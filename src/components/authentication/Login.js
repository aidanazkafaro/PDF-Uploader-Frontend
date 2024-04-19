import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle user login
  async function loginUser(event) {
    event.preventDefault();

    // Send a POST request to the server for user login
    const response = await fetch("http://34.128.138.220/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    // Parse the response data
    const data = await response.json();

    if (data.user) {
      // If the login is successful, store the token in localStorage
      localStorage.setItem("token", data.user);
      alert("Login successful");
      navigate("/home"); // Navigate to the home page
    } else {
      // If login fails, display an error message
      alert("Please check your username and password");
    }
  }

  return (
    <div className="login min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl text-center font-semibold text-gray-800 mb-4">Login</h1>

        <form onSubmit={loginUser}>
          <input
            value={email}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            onClick={loginUser}
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="mb-2 text-gray-600">OR</p>
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
