import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import "../index.css"


function LoginPage() {
  const [count, setCount] = useState(0)
  const [islogin, setLogin] = useState(true)


  return (
    <div className='bg-login-bg h-screen'>
      <div className='backdrop-blur-sm h-screen'>
        <div className="w-full flex justify-start items-center ">
          <span className="mt-5 text-2xl mx-10 font-semibold text-white">PROPCHAIN</span>
        </div>
        {islogin ? (
        <div className="mt-20 w-max mx-auto flex flex-col justify-center items-center backdrop-blur-sm border-2 border-gray-600 rounded-xl">
          <h2 className="font-bold text-4xl m-4 text-white">Login</h2>
          <div className="flex flex-col border-white border-2 rounded-xl  p-10">
            <label htmlFor="mobile" className='text-white'>Email</label>
            <input className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Email"/>
            <label htmlFor="password" className='text-white'>Password</label>
            <input type="password" className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Password" />
            <div className="m-2 h-10 bg-black rounded-md text-center text-xl">
              <button className="text-white h-8" >Login</button>
            </div>
            <div className="h-3"></div>
          </div>
          <div className="h-3"></div>
          <span className='text-white'>New Here? <button className="font-bold text-blue-500" onClick={
            () => setLogin(false)
          }>Create Account</button></span>
        </div>) : (
        <div className=" w-max mx-auto flex flex-col justify-center items-center backdrop-blur-sm border-2 border-gray-600 rounded-xl">
          <h2 className="font-bold text-4xl m-4 text-white">Signup</h2>
          <div className="flex flex-col border-white border-2 rounded-xl  p-10">
            <label htmlFor="mobile" className='text-white'>Email</label>
            <input className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Email" type='email' />
            <label htmlFor="mobile" className='text-white'>Name</label>
            <input className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Name" type='text'/>
            <label htmlFor="mobile" className='text-white'>Phone Number</label>
            <input className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Phone Number" type='tel'/>
            <label htmlFor="password" className='text-white'>Password</label>
            <input type="password" className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Password" />
            <label htmlFor="password" className='text-white'>Confirm Password</label>
            <input type="password" className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Password" />
            <div className="m-2 h-10 bg-black rounded-md text-center text-xl">
              <button className="text-white h-8" >Login</button>
            </div>
            <div className="h-3"></div>
          </div>
          <div className="h-3"></div>
          <span className='text-white'>Already have an accunt < button className="font-bold text-blue-500 " onClick={
            () => setLogin(true)
          }>Login</button></span>
        </div>
        )}
      </div>
    </div>

  )
}

export default LoginPage
