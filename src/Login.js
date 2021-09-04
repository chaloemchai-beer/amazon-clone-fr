import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom' 
import { auth } from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const reginster = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) { 
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
                alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange=
                    {e => setEmail(e.target.value)} />

                    <h5>Passwork</h5>
                    <input type="password" value={password} onChange=
                    {e => setPassword(e.target.value)}/>

                    <button 
                    type="submit"
                    onClick={signIn}
                    className="login__singInButton">Sign</button>
                </form>

                <p>By singing-in you agree to the amazon fake clone conditions of use & sale.
                    please see our privacy notic, our cookies notice and our interest-based ads notice.
                </p>

                <button
                onClick={reginster}
                className="login__registerButton">Create your account</button>
            </div>
        </div>
    )
}

export default Login
