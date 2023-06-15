import React, {useState} from "react";

export  default function Login({login}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return<form onSubmit={() => login({email, password})}>
        <input type="email" value = {email} onChange={e=> setEmail(e.target.value)} placeholder={"Email"}/>
        <input type="password" value={password} onChange={e=> setPassword(e.target.value)} placeholder={"Password"}/>
        <button>Login</button>
    </form>
}