import { useEffect } from 'react';
import keycloak from '../keycloak';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

  useEffect(() => {
    try {
      const auth = keycloak.token !== null;
      if (auth) {
        const navigate = useNavigate();
        navigate('/');
      }
    } catch (error) {
      console.error('Failed to initialize adapter:', error);
    }
  });

  const handleLogin = () => {
    keycloak.login({
      redirectUri: window.location.origin + '/'
    });
  };

  const handleRegister = () => {
    keycloak.register({
      redirectUri: window.location.origin + '/'
    });
  };

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Основной контейнер с адаптивной шириной */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* Левая часть (50% на десктопе, 100% на мобильных) */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-blue-600/20 to-purple-600/20">
          <div className="space-y-6 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center space-x-4">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Welcome Back
              </h1>
            </div>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl">
              Connect, collaborate, and build the future with our developer platform.
            </p>
            <div className="hidden lg:block space-y-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span className="text-gray-300">Secure authentication</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span className="text-gray-300">Real-time collaboration</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span className="text-gray-300">Advanced analytics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Правая часть (50% на десктопе, 100% на мобильных) */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="space-y-8 max-w-md mx-auto lg:mx-0">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-100">Get Started</h2>
              <p className="text-gray-400 text-sm sm:text-base">Sign in or create new account</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleLogin}
                className="w-full group relative flex items-center justify-center gap-2 bg-blue-600/30 hover:bg-blue-600/40 transition-all duration-200 px-6 py-3 rounded-xl border border-blue-500/30"
              >
                <span className="absolute left-4">
                  <svg className="w-5 h-5 text-blue-300 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                  </svg>
                </span>
                <span className="text-blue-100 font-medium">Sign In</span>
              </button>

              <button
                onClick={handleRegister}
                className="w-full group relative flex items-center justify-center gap-2 bg-emerald-600/30 hover:bg-emerald-600/40 transition-all duration-200 px-6 py-3 rounded-xl border border-emerald-500/30"
              >
                <span className="absolute left-4">
                  <svg className="w-5 h-5 text-emerald-300 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                  </svg>
                </span>
                <span className="text-emerald-100 font-medium">Create Account</span>
              </button>
            </div>

            <div className="border-t border-gray-700/30 pt-6">
              <p className="text-center text-xs sm:text-sm text-gray-400">
                By continuing, you agree to our <br className="hidden sm:block"/>
                <a href="#" className="text-blue-300 hover:text-blue-200">Terms of Service</a> and <a href="#" className="text-blue-300 hover:text-blue-200">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 