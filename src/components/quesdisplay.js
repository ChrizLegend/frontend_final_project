import logo from "./images/html_logo.png"
export default function Ques(){
    return(
        <section className="ques">
            <div>
                <article className="first-area">
                    <img src={logo} width="70"/>
                    <b>00</b>
                </article>
                <article className="second-area">
                    <b>What is the full meaning of HTML?</b>
                    <ul>
                        <li>HyperText Markup Language</li>
                        <li>HyperText Makeup Language</li>
                        <li>HyperText Mendup Language</li>
                        <li>No answer</li>
                    </ul>
                </article>
                <article className="third-area">
                    <aside>
                        <span className="first-span"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </aside>
                    <button>Next</button>
                </article>
            </div>

        </section>
    )
}