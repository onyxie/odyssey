import { BrowserRouter, Route, Routes as Routing } from "react-router-dom"
import Home from "./pages/Home"

const Routes = () => {
    return (
        <BrowserRouter>
            <Routing>
                <Route path='/' element={<Home />}></Route>
            </Routing>
        </BrowserRouter>
    )
}

export default Routes