import App from "@/App";
import Home from "@/scenes/home";
import LoginPage from "@/scenes/loginPage";
import MyBag from "@/scenes/myBag";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/loginpage", element: <LoginPage/>},
            {path: "/mybag", element: <MyBag/>}
        ],
    },
]);

