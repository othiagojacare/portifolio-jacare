import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from './pages/Home'
import Cadastro from "./pages/Cadastro";


export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={ <Home /> }/>
                <Route path="/cadastro" element={ <Cadastro /> }/>
            </Routes>
        </BrowserRouter>
    )
}
