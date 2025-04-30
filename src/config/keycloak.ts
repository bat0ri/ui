import Keycloak from 'keycloak-js';

const keycloakConfig = {
    url: import.meta.env.VITE_KEYCLOAK_URL || 'http://localhost:5173/auth',
    realm: import.meta.env.VITE_KEYCLOAK_REALM || 'platform-realm',
    clientId: 'frontend-client-id'
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak; 