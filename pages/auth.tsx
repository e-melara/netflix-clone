import { ChangeEvent, useCallback, useState } from "react";
import Input from "@/components/Input";

const Auth = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [variant, setVariant] = useState('login')
  const toggleVariant = useCallback(() => {
    setVariant(variant === 'login' ? 'register' : 'login')
  }, [variant])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-4/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Sign In' : 'Create an account'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  label="Username"
                  onChange={(ev: ChangeEvent<HTMLInputElement>) => {
                    setUsername(ev.target.value)
                  }}
                  id="username"
                  type="text"
                  value={username}
                />
              )}
              <Input
                label="Email"
                onChange={(ev: ChangeEvent<HTMLInputElement>) => {
                  setEmail(ev.target.value)
                }}
                id="email"
                type="email"
                value={email}
              /> 
              <Input
                label="Password"
                onChange={(ev: ChangeEvent<HTMLInputElement>) => {
                  setPassword(ev.target.value)
                }}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button 
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === 'login' ? 'Sign In' : 'Register'}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === 'login' ? 'New to Netflix?' : 'Already have an account?'}
              <span
              onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
              {variant === 'login' ? 'Sign Up now.' : 'Sign In.'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
