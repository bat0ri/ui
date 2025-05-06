import Keycloak from "keycloak-js";

const keycloakSetting = {
    url: "http://localhost:8080",
    realm: "platform-realm",
    clientId: "frontend-client-id",
};

const keycloak = new Keycloak(keycloakSetting)
  
export default keycloak;