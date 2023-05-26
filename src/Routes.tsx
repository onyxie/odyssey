import { BrowserRouter, Route, Routes as Routing } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/navbar"

const Routes = () => {
    return (
        <>
        <NavBar></NavBar>
        <BrowserRouter>
            <Routing>
                <Route path='/' element={<Home />}></Route>
            </Routing>
        </BrowserRouter>
        </>
    )
}

export default Routes