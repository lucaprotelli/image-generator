import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contact from './routes/contact.jsx'
import History from './routes/history.jsx'
import Collections from './routes/collections.jsx'
import Documentation from './routes/documentation.jsx'

import ErrorPage from './error-page.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'history',
    element: <History />,
  },

  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'collections',
    element: <Collections />,
  },
  {
    path: 'documentation',
    element: <Documentation />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
