import { useKeycloak } from "@react-keycloak/web";
import React from "react";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>; // или `<Spinner />`, пока Keycloak загружается
  }

  if (!keycloak.authenticated) {
    keycloak.login({ redirectUri: "http://localhost:5173/" });
    return null; // или `<div>Redirecting to login...</div>`
  }

  return <>{children}</>;
};

export default PrivateRoute;