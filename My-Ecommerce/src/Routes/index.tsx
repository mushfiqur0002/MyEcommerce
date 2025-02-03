import App from "@/App";
import Home from "@/scenes/home";
import LoginPage from "@/scenes/loginPage";
import MyBag from "@/scenes/myBag";
import RegisterPage from "@/scenes/RegisterPage";
import { createBrowserRouter } from "react-router-dom";


// React routing set up for each page
export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/loginpage", element: <LoginPage/>},
            {path: "/registerpage", element: <RegisterPage/>},
            {path: "/mybag", element: <MyBag/>}
            
        ],
    },
]);

