// import { useState, useEffect } from 'react'
// import StringInput from '../components/ui/StringInput'
// import Button from '../components/ui/Button'
// import { useKeycloak } from "@react-keycloak/web";

// type AuthMode = 'login' | 'register'

// export default function AuthForm() {
//   const [mode, setMode] = useState<AuthMode>('login')
//   const [username, setUsername] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const [isLoading, setIsLoading] = useState(false);
  




//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-500">
//         <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//             <h2 className="text-2xl font-bold mb-6 text-center text-black">
//                 {mode === 'login' ? 'Вход' : 'Регистрация'}
//             </h2>
            
//             {error && (
//                 <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
//                 {error}
//                 </div>
//             )}

//             <form onSubmit={handleSubmit}>
//                 <StringInput
//                     label="Имя пользователя"
//                     value={username}
//                     onChange={setUsername}
//                     id="username"
//                     required
//                 />

//                 {mode === 'register' && (
//                     <StringInput
//                         label="Email"
//                         value={email}
//                         onChange={setEmail}
//                         id="email"
//                         required
//                     />
//                 )}

//                 <StringInput
//                         label="Пароль"
//                         value={password}
//                         onChange={setPassword}
//                         id="password"
//                         type="password"
//                         required
//                     />

//                 <Button 
//                         type="submit"
//                         variant="primary"
//                         fullWidth
//                         isLoading={isLoading}
//                         onClick={handleSubmit}
//                     >
//                         Войти
//                 </Button>
//             </form>

//             <Button
//                 variant='secondary'
//                 size='sm'
//                 className='mt-3'
//                 fullWidth
//                 onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
//             >
//                 {
//                     mode === 'login'
//                     ? 'Нет аккаунта? Зарегистрироваться'
//                     : 'Уже есть аккаунт? Войти'
//                 }
//             </Button>


//         </div>
//     </div>
//   )
// }