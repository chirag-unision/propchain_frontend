import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import "../index.css"
import { BASE_URL } from '../constants'
import axios from 'axios'


function LoginPage() {
  const [count, setCount] = useState(0)
  const [islogin, setLogin] = useState(true)

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    let form = document.getElementById('signupForm')
    let data = new FormData(form)
    let email = data.get('email')
    let password = data.get('password')
    let name = data.get('name')
    let number = data.get('number')
    let aadhar = data.get('aadhar')
    let confirmPassword = data.get('confirmPassword')
    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match')
      return
    }
    axios.post(BASE_URL + "api/user/signup", {
      email: email,
      password: password,
      name: name,
      mobile: number,
      aadhar: aadhar
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    console.log("bhej diya");
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    let form = document.getElementById('loginForm')
    let data = new FormData(form)
    let email = data.get('email')
    let password = data.get('password')
    let dataJson = {
      email: email,
      password: password
    }
    console.log(dataJson);
    axios.post(BASE_URL + "api/user/login", dataJson).then((res) => {
      console.log(res)
    }
    ).catch((err) => {
      console.log(err)
    })
  }



  return (
    <div className='bg-login-bg h-screen'>
      <div className='backdrop-blur-sm h-screen'>
        <div className="w-full flex justify-start items-center ">
          <span className="mt-5 text-2xl mx-10 font-semibold text-white">PROPCHAIN</span>
        </div>
        {islogin ? (
          <form id='loginForm'>
            <div className="mt-20 w-max mx-auto flex flex-col justify-center items-center backdrop-blur-sm border-2 border-gray-600 rounded-xl">
              <h2 className="font-bold text-4xl m-4 text-white">Login</h2>
              <div className="flex flex-col border-white border-2 rounded-xl  p-10">
                <label htmlFor="mobile" className='text-white'>Email</label>
                <input className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Email" name='email' />
                <label htmlFor="password" className='text-white'>Password</label>
                <input type="password" className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Password" name='password' />
                <div className="m-2 h-10 bg-black rounded-md text-center text-xl">
                  <button className="text-white h-8" onClick={handleLoginSubmit}>Login</button>
                </div>
                <div className="h-3"></div>
              </div>
              <div className="h-3"></div>
              <span className='text-white'>New Here? <button className="font-bold text-blue-500" onClick={
                (e) => {
                  e.preventDefault()
                  setLogin(false)
                }
              }>Create Account</button></span>
            </div>
          </form>) : (
          <form id='signupForm'>
            <div className=" w-max mx-auto flex flex-col justify-center items-center backdrop-blur-sm border-2 border-gray-600 rounded-xl">
              <h2 className="font-bold text-4xl m-4 text-white">Signup</h2>
              <div className="flex flex-col border-white border-2 rounded-xl  p-10">
                <label htmlFor="mobile" className='text-white'>Email</label>
                <input className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Email" type='email' name='email' />
                <label htmlFor="mobile" className='text-white'>Name</label>
                <input className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Name" type='text' name="name" />
                <label htmlFor="mobile" className='text-white'>Phone Number</label>
                <input className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Phone Number" type='tel' name='number' />
                <label className='text-white'>Aadhar Number</label>
                <input className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Aadhar" type='tel' name="aadhar" />
                <label htmlFor="password" className='text-white'>Password</label>
                <input type="password" className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Password" name='password' />
                <label htmlFor="password" className='text-white'>Confirm Password</label>
                <input type="password" className="m-2 h-10 rounded-md p-4 text-xl" placeholder="Confirm Password" name='confirmPassword' />
                <div className="m-2 h-10 bg-black rounded-md text-center text-xl">
                  <button className="text-white h-8" type='submit' onClick={handleSignupSubmit} >Signup</button>
                </div>
                <div className="h-3"></div>
              </div>
              <div className="h-3"></div>
              <span className='text-white'>Already have an accunt < button className="font-bold text-blue-500 " onClick={
                () => setLogin(true)
              }>Login</button></span>
            </div>
          </form>
        )}
      </div>
    </div>

  )
}

export default LoginPage
