export default function Login(){
    return(
        <section className="login">
            <form>
                <h3>Login</h3>
                <input type="Email" placeholder="Email"/>
                <input type="Password" placeholder="Password"/>
                <button>Login</button>
                <span>Foget Password? <a href="">click here!</a></span>

            </form>  
        </section>
    )
}