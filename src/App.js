import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import { UserProvider } from "./context/UserContext";
export default function App (){
 
    return(
        <>
            <ToastContainer 
            position="top-right"
            autoClose={3500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/auth" element={<Auth/>} />
                    </Routes>
                </BrowserRouter>
            </UserProvider>

        </>
    )
}

