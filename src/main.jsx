import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './Components/Layout/HomeLayout.jsx'
import NewsByCategory from './Components/Fragments/NewsByCategory.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />
  },
  {
    path: "/category/:category",
    element: <NewsByCategory />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
