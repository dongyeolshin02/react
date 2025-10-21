import { createBrowserRouter, Link, Navigate } from "react-router";
import Layout from "../../pages/Layout";
import BestBooksList from "../../pages/BestBooksList";


export const router = createBrowserRouter([
 
    {
        path:"/",
        element: <Layout/>,
        children :[
            {
               index: true,
               element: <Navigate  to="/books/best" replace/>

            },
            {
                path:'books/best',
                element: <BestBooksList/>
            }
        ]
    }
]);
