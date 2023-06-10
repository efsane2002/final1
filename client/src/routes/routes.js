import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MainRoot from "../pages/MainRoot";
import Register from "../pages/Register/Register";
import Users from "../pages/User/Users";

export const ROUTES = [
    {
        path: '/',
        element: <MainRoot/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'users',
                element: <Users/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    }
]