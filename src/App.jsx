import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
// import PropertyPage from './pages/ListProperty'
import PaymentsPage from './pages/PaymentsPage'
import ProfilePage from './pages/ProfilePage'
// import TenentsPage from './pages/TenetsPage'
import PropertyCard from './components/dashboard/propertyCard'
import AddPropertyPage from './pages/ListProperty'
import DashboardPage from './pages/DashboardPage' 
import PropertyPage from './pages/PropertyPage'
import RequestsPage from './pages/RequestsPage'
import SearchResults from './pages/SearchResults'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/property",
    element: <PropertyPage />,
  },
  {
    path: "/payments",
    element: <PaymentsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/tenents",
    element: <PropertyCard   />,
  },
  {
    path:"/addProperty",
    element: <AddPropertyPage/>
  },
  {
    path:"/requests",
    element: <RequestsPage/>
  },
  {
    path:"dashboard",
    element: <DashboardPage/>
  
  },
  {
    path:"/searchResults",
    element: <SearchResults/>
  }
  
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router}/>
  )
}

export default App
