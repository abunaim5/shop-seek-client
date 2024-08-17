import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import Register from "../../Pages/Register/Register";
import ViewDetails from "../../Pages/ViewDetails/ViewDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/products',
                element: <Products />,
                loader: async () => await fetch('https://shop-seek-server.vercel.app/productCount')
            },
            {
                path: '/details/:id',
                element: <ViewDetails />,
                loader: async({params}) => await fetch(`https://shop-seek-server.vercel.app/product/${params.id}`)
            }
        ],
    },
]);

export default router;