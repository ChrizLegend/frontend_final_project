import { Link } from "react-router-dom"
import del from "./images/delete.png"
import thumpsUp from "./images/thumpsUP.png"
export default function Success(){
    return(
        <section className="successfulAcc">
            <div>
                <Link to="/"><img src={del} width="90"  /></Link>
                <article>
                    <img src={thumpsUp} width="290" />
                    <button>Login Now</button>
                </article>
            </div>
        </section>
    )
}