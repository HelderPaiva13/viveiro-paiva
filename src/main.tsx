import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About.tsx'
import Home from './components/Home.tsx'

const router = createBrowserRouter([
  {
    path: '/viveiro-paiva/',
    element: <App/>,
    children: [
      {
        path: '/viveiro-paiva/',
        element: <Home/>
      },
      {
        path: '/viveiro-paiva/about',
        element: <About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
