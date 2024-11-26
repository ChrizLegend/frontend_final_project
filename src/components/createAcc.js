import { useState } from "react"
import upload_icon from "./images/arrow.png"
import upload from "./images/default_image.png"

export default function CreateAcc(){
    const [arrow, setArrow] = useState(false);
        function moveArrow(){
            setArrow(!arrow)
    }

        const move_arrow ={
            right: arrow && -200 + "px"
        }

        const move_upload ={
            right: arrow && -450 + "px"
        }
    
    function UploadImg(event){
      
    }
    return(
        <section className="creatAcc">
         <button onClick={moveArrow}>
                <div style={move_arrow}><img src={upload_icon} width="80"/></div>
                <article style={move_upload}>
                    <img src={upload} width="80"/>
                    <span>
                        <input type="file" id="uploaded_file"/>
                        <label for="uploaded_file" onChange={UploadImg}>Upload</label>
                    </span>
                </article>
         </button>
            <form>
                <h3>Create Account</h3>
                <input type="text" placeholder="Username"/>
                <input type="Email" placeholder="Email"/>
                <input type="Password" placeholder="Password"/>
                <input type="Password" placeholder="Confirm Password"/>
                <button>Create</button>
                <span>Already a member? <a href="">Login</a></span>

            </form>   
        </section>
    )
}