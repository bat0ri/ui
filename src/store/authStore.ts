import { create } from 'zustand';
import keycloak from '../keycloak';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  token: string | null;
  initAuth: () => Promise<void>;
  login: () => void;
  logout: () => void;
  updateToken: () => Promise<boolean>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  isLoading: true,
  token: null,

  initAuth: async () => {
    try {
      const authenticated = await keycloak.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256'
      });
      
      set({
        isAuthenticated: authenticated,
        isLoading: false,
        token: keycloak.token
      });
    } catch (error) {
      console.error('Failed to initialize adapter:', error);
      set({ isAuthenticated: false, isLoading: false });
    }
  },

  login: () => {
    keycloak.login({
      redirectUri: window.location.origin + '/'
    });
  },

  logout: () => {
    keycloak.logout({
      redirectUri: window.location.origin + '/login'
    });
  },

  updateToken: async () => {
    try {
      const updated = await keycloak.updateToken(300);
      set({ token: keycloak.token });
      return updated;
    } catch (error) {
      console.error('Failed to update token:', error);
      set({ isAuthenticated: false, token: null });
      return false;
    }
  }
})); 