import React, { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return;
  }

  console.log("token", user?.accessToken);

  if (!user) {
    return <Navigate to="/register"></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
