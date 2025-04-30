import { useState } from 'react'
import Button from '../components/ui/Button'

import authInstance from '../keycloak';


try {
    const authenticated = await authInstance.init({onLoad: 'login-required', pkceMethod: 'S256', checkLoginIframe: false});
    console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
  } catch (error) {
      console.error('Failed to initialize adapter:', error);
  }

export default function Profile() {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false);




  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-black">
                batori UI
            </h2>
            
            {error && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                {error}
                </div>
            )}

            <div>SECURE</div>
        </div>
    </div>
  )
}