import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/Routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="w-full">
    <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={routes}/>
    </AuthProvider>
  </React.StrictMode>
  </div>
)
