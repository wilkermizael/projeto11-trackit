
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"
import { TokenContext } from "../Context/TokenContext"
export default function FormularioLogin() {
  
    
    const [emailLogin, setEmailLogin] = useState('')
    const [senhaLogin, setSenhaLogin] = useState('')
    const {token,setToken} = useContext(TokenContext)
    console.log(token)

    let dadosLogin = {};
    
    function myLogin(event){
        event.preventDefault();

            dadosLogin={
            email:emailLogin,
            password:senhaLogin
        }
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', dadosLogin)
        .then( resposta => setToken(resposta.data.token))
        .catch( erro => console.log(erro.response))
        console.log(dadosLogin) 
    }
    
    
    return(
        <div>
            <form onSubmit={myLogin}>
                <label htmlFor="email"></label>
                <input data-test="email-input" type="email" value={emailLogin} name="email" id="email" placeholder="E-mail" onChange={e => setEmailLogin(e.target.value)}/>
                <label htmlFor="password"></label>
                <input data-test="password-input" type="password" value={senhaLogin} name="password" id="password" placeholder="Senha" onChange={e => setSenhaLogin(e.target.value)} />
                <label htmlFor="button"></label>
               <Link to={'/habitos'}>
                <input data-test="login-btn" type="submit" name="button" id="button" placeholder="Enviar" />
                </Link>
                
            </form>

            <Link to={'/cadastro'}>
            <p data-test="signup-link">Não tem uma conta? Cadastre-se!</p>
            </Link>
        </div>
    )
}