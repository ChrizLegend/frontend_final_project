import { Link } from "react-router-dom"
import logo from "./images/logo.png"
export default function Header(){
    return(
        <header>
            <img src={logo} width="30" />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/test">Test</Link>
                <Link to="/about-us">About us</Link>
                <Link to="contact-us">Contact us</Link>
            </nav>
        </header>
    )
}