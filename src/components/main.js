import { Routes, Route } from "react-router-dom";
import CreateAcc from "./createAcc";
import Success from "./successfulAcc";
import Login from "./login";
import Start from "./startBtn";
import Ready from "./ready";
import Ques1 from "./quesdisplay";
import Result from "./result";

export default function main(){
    return(
        <main>
              {/* <Routes>
            <Route path="/" element={<CreateAcc/>} />
            <Route path="/register" element={<CreateAcc/>} />
            <Route path="/login" element={<Login/>}/>
            </Routes> */}
            {/* <Success/> */}
            {/* <Start/> */}
            {/* <Ready/> */}
            {/* <Ques1/> */}
            <Result/>
        </main>
    )
}