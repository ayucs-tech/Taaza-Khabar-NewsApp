import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createHashRouter, RouterProvider} from "react-router-dom";
import News from './components/News';
import Error from './components/Error';

const appRouter= createHashRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
    element: <News category="general"/>
      },
      {
        path:"/business",
    element: <News category="business"/>
      },
      {
        path:"/entertainment",
    element: <News category="entertainment"/>
      },
      {
        path:"/health",
    element: <News category="health"/>
      },
      {
        path:"/science",
    element: <News category="science"/>
      },
      {
        path:"/sports",
    element: <News category="sports"/>
      },
      {
        path:"/technology",
    element: <News category="technology"/>
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
