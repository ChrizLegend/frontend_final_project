import "./app.css"
import { BrowserRouter } from "react-router-dom"
import Main from "./components/main"
import Footer from "./components/footer"
import Header from "./components/header"
export default function App(){
    return(
       <BrowserRouter>
            <div className="app-container">
                <Header/>
                <Main/>
                <Footer/>
            </div>
       </BrowserRouter>
    )
}