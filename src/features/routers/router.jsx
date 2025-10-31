import { createBrowserRouter, Link, Navigate } from "react-router";
import Layout from "../../pages/Layout";
import BestBooksList from "../../pages/books/BestBooksList";
import BookDetail from "../../pages/books/BookDetail";


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
                path:'books',
                children : [
                    {
                        path :'best',
                        element: <BestBooksList/>
                    },
                     {
                        path :'detail',
                        element: <BookDetail/>
                    }
                ]
              
            }
        ]
    }
]);
