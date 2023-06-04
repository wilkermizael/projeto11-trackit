
import { useState } from "react"
import { Link} from "react-router-dom"      
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"
import { TokenContext } from "../Context/TokenContext"
import styled from "styled-components"
import { RotatingLines } from  'react-loader-spinner'


export default function FormularioLogin() {
  
    
    const [emailLogin, setEmailLogin] = useState('')
    const [senhaLogin, setSenhaLogin] = useState('')
    const {token,setToken} = useContext(TokenContext)
    const [desabilitar, setDesabilitar] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    console.log(token)


    let dadosLogin = {};
    
    function myLogin(event){
        setDesabilitar(true)
        setLoading(true)
        event.preventDefault();
        dadosLogin={
            email:emailLogin,
            password:senhaLogin
        }
        setTimeout(() => {
           
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', dadosLogin)
            .then( resposta => {
                setToken(resposta.data.token);
                navigate('/habitos')
                
            })
            .catch( erro => {
                alert(erro.response.data.message)
                setDesabilitar(false)
                setLoading(false)

            })
            
        
        },2000)
       
    }

    
    
    
    return(
        <Formulario>
            <form onSubmit={myLogin}>
                <label htmlFor="email"></label>
                <input disabled={!desabilitar ? false : true} data-test="email-input" type="email" value={emailLogin} name="email" id="email" placeholder="E-mail" onChange={e => setEmailLogin(e.target.value)}/>
                <label htmlFor="password"></label>
                <input disabled={!desabilitar ? false : true}  data-test="password-input" type="password" value={senhaLogin} name="password" id="password" placeholder="Senha" onChange={e => setSenhaLogin(e.target.value)} />
                <label htmlFor="button"></label>
               
                {
                    !loading ?
                        <input data-test="login-btn" type="submit" name="button" id="button" placeholder="Enviar"/>
                        :
                        <Loading>
                        
                            <input data-test="login-btn" type="submit" name="button" id="button" placeholder="Enviar"/>
                                <div>
                                        <RotatingLines
                                    
                                        strokeColor="gray"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="50"
                                        visible={true}
                                        
                                        />
                                </div>
                        
                        </Loading>
                }
               
                
                
            </form>

            <Link to={'/cadastro'}>
            <p data-test="signup-link">Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Formulario>
    )
}

const Formulario = styled.div`

input:disabled{
    background-color: #D4D4D4;
}
`;

const Loading = styled.div`
position: relative;
input{
    background-color: #52B6FF;
    position: relative;
    //margin: 5px 0px 0px 35px;
    bottom:0px;
    left: 3px;
    
}
p{
    position: absolute;
    bottom: 50px;
}
div{
    position: absolute;
    bottom: 0px;
    left: 130px;
}


`;