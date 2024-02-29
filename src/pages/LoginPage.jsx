import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function LoginPage() {
  const [count, setCount] = useState(0)

  return (
    <div className='rounded-mds'>
      <div className='rounded-md'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo block mx-auto" alt="Vite logo" />
        </a>
      </div>
      <h1>Login | Signup</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default LoginPage
