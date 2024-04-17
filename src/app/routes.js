import { BrowserRouter, Router , Route } from "react-router-dom";

export default function RouterApp(){
    return(
        <BrowserRouter>
            <Router>
                <Route path="/home" element={ <Home /> }/>

            </Router>
        </BrowserRouter>
    )
}