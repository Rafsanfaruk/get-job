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
import ViewDetails from './components/ViewDetails/ViewDetails'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    
    children: [
      {path: '/', element:<Home />,
      loader:()=>fetch('/public/jobCatg.json')
     },
     {
      path: 'feature/:id',
      element: <ViewDetails />,
      // loader:({params})=>fetch(`/data.json/${params.id}`),
      
    },
      {path: '/statistics', element:<Statistics /> },
      {path: '/applied-jobs', element:<AppliedJobs /> ,loader:() =>fetch('/data.json')},
      {path: '/blog', element:<Blog /> },
      {path: 'loader',element: <LoadingSpinner />,},
     
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}>
  </RouterProvider>
    
  </>
)
