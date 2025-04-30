import { useState } from 'react'
import Button from '../components/ui/Button'

import authInstance from '../keycloak';


export default function Profile() {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-black">
                batori UI
            </h2>

            <div>SECURE</div>
        </div>
    </div>
  )
}