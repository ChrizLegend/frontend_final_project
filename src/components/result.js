import logo from "./images/logo.png"
import profile from "./images/default_image.png"
import del from "./images/delete.png"
import share from "./images/share_icon.png"
import dload from "./images/download_icon.png"
import prnt from "./images/print_icon.png"

export default function Result(){
    return(
        <section className="results">
            <div>
                <img src={logo} width="350" />
                <article className="top-area">
                    <aside>
                        <img src={logo} width="40"/>
                        <p>Codeprof Academy</p>
                    </aside>
                    <img src={profile} width="70"/>
                </article>
                <article className="details">
                        <h4>
                            <b>Username</b>
                            <span>Codeprof</span>
                        </h4>
                        <h4 className="skyblue">
                            <b>Email</b>
                            <span>codeprof2@gmail.com</span>
                        </h4>
                        <h4>
                            <b>Total Questions</b>
                            <span>4</span>
                        </h4>
                        <h4 className="skyblue">
                            <b>No of Correct Answers</b>
                            <span>2</span>
                        </h4>
                        <h4>
                            <b>Score</b>
                            <span>20</span>
                        </h4>
                        <h4 className="skyblue">
                            <b>Percentage</b>
                            <span>50%</span>
                        </h4>
                        <h4>
                            <b>Grade</b>
                            <span>E</span>
                        </h4>
                        <h4 className="skyblue">
                            <b>Remarks</b>
                            <span>Pass</span>
                        </h4>
                </article>
                <aside>
                    <img src={prnt} width="20"/>
                    <img src={dload} width="20"/>
                    <img src={share} width="20"/>
                    <img src={del} width="20"/>
                </aside>

            </div>

        </section>
    )
}