import { useEffect, useState } from "react";
import "./App.css";
import Checkout from "./components/Checkout.tsx";
import Login from "./components/Login.tsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard.tsx";
import { User } from "./utils/auth.ts";
import { useUser } from "./hooks/useUser.ts";
import { UserProvider } from "./context/UserContext.tsx";

function App() {
  return (
    <UserProvider>
      <Router>
        <AppRoutes />
      </Router>
    </UserProvider>
  );
}

function AppRoutes() {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<RoleBasedComponent user={user} />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
    </Routes>
  );
}

function RoleBasedComponent({ user }: { user: User | null }) {
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role === "admin") {
    return <Dashboard />;
  } else if (user.role === "cashier") {
    return <Checkout />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;
