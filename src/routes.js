import PrivateRoute from "components/PrivateRoute";
import AuthLayout from "pages/auth";
import ProfilPage from "pages/Profile";
import Home from "pages/Home";
import Layout from "pages/Layout";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import Posts from "pages/Profile/Posts";
import Tagged from "pages/Profile/Tagged";
import Logout from "pages/Profile/Logout";

const routes = [
    {
        path: '/',
        element: <Layout />,
        auth: true,
        children: [
            {
                index: true, 
                element: <Home />
            },
            {
                path: 'logout',
                element: <Logout />
            },
            {
                path: ':username',
                element: <ProfilPage />,
                children: [
                    {
                        index: true,
                        element: <Posts />
                    },
                    {
                        path: 'tagged',
                        element: <Tagged />
                    }
                ]
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            
        ]
    }
]

const authCheck = routes => routes.map(route => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if (route?.children) {
        route.children = authCheck(route.children)
    }
    return route
})


export default authCheck(routes)