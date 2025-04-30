import Button from '../components/ui/Button'
import authInstance from '../keycloak';
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";

const SignInButton = () => {
    return (
        <Button
            variant='secondary'
            size='sm'
            className='mt-3'
            fullWidth
            onClick={() => authInstance.login(
                {
                    redirectUri: 'http://localhost:5173/user'
                }
            )}
        >
        Войти
    </Button>
    )
}

const SingUpButton = () => {
    return (
        <Button
            variant='secondary'
            size='sm'
            className='mt-3'
            fullWidth
            onClick={() => authInstance.register()}
        >
        Создать аккаунт
    </Button>
    )
}


export default function Home() {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-black">
                batori UI
            </h2>

            <SignInButton />
            <SingUpButton />


        </div>
    </div>
  )
}