import React from "react";


function Login(){

    const block = "login";

    function login() {
        console.log("login!");
        //fire base login
    }

    return (
        <div className={`${block}__fjdiofjs`}>
            <button onClick={login}>Login</button>
        </div>
        
    );
}

export default Login;