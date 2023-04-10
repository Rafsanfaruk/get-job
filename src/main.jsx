import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Blog from './components/Blog/Blog'
import Error from './components/Error/Error'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    
    children: [
      {path: '/', element:<Home />,
      loader:()=>fetch('/public/jobCatg.json')
     },
      {path: '/statistics', element:<Statistics /> },
      {path: '/applied-jobs', element:<AppliedJobs /> },
      {path: '/blog', element:<Blog /> },
     
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}>
  </RouterProvider>
    
  </>
)
