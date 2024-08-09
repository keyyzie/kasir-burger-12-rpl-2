import React, { useState } from "react";
import { useUser } from "../hooks/useUser";
import apiClient from "../utils/axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      await apiClient.post("http://localhost:8000/api/logout");

      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      Dashboard
      <ul>
        <li>{user?.id}</li>
        <li>{user?.name}</li>
        <li>{user?.email}</li>
        <li>{user?.role}</li>
      </ul>
      <button
        onClick={handleLogout}
        className="btn btn-danger"
        disabled={loading}
      >
        {loading ? "Loading..." : "Logout"}
      </button>
    </div>
  );
};

export default Dashboard;
