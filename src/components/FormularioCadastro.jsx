
import axios from "axios";
import { Link } from "react-router-dom"
export default function FormularioCadastro(props) {
    // eslint-disable-next-line react/prop-types
const {setEmail, setSenha, setUrlFoto, setUsuario, setDados, email, senha, urlFoto, usuario} = props
        

    function enviarCadastro(event){
        event.preventDefault();
        let informacoes = {
            email: email,
            name:usuario,
            image:urlFoto,
            password:senha
            
        }
        setDados(informacoes);   
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', informacoes)
        promise.then(resposta => console.log(resposta.data))
        promise.catch( erro => console.log( erro.response.message))

    }
    
    return(
        <div>
            <form onSubmit={enviarCadastro}>
                <label htmlFor="email"></label>
                <input type="email" value={email} name="email" id="email" placeholder="E-mail" onChange={ e =>setEmail( e.target.value) }/>
                <label htmlFor="password"></label>
                <input type="password" value={senha} name="password" id="password" placeholder="Senha" onChange={ e =>setSenha( e.target.value) }/>
                <label htmlFor="nome"></label>
                <input type="txt" value={usuario} name="nome" id="nome" placeholder="Nome" onChange={ e => setUsuario( e.target.value) }/>
                <label htmlFor="button"></label>
                <input type="url" value={urlFoto} name="url" id="url" placeholder="Foto" onChange={ e => setUrlFoto(e.target.value) }/>
                <label htmlFor="buttonn"></label>
                <Link to={'/'}>
                <input type='submit' name="buttonn" id="buttonn" placeholder="Enviar"/>
                </Link> 
                
            </form>

            <Link to={'/'}>
            <p>Já tem uma conta? Faça login!</p>
            </Link>
        </div>
    )
}