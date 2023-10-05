import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Jogadores'
import './Times'


const router = createBrowserRouter([
  {
    path: "/times",
    element: <Times/>
  },
  {
    path: "/jogadores/:id",
    element: <App/>
  }
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
