/* eslint-disable react/prop-types */
import styled from "styled-components"
import FormularioCadastro from "../../components/FormularioCadastro";
export default function Cadastro(props) {
    const {setEmail, setSenha, setUrlFoto, setUsuario,setDados, dados, email, senha, urlFoto, usuario} = props
    return (
        <TelaCadastro>
            <>
            <FormularioCadastro  setEmail={setEmail} 
        setSenha={setSenha} 
        setUrlFoto={setUrlFoto} 
        setUsuario={setUsuario}
        setDados={setDados}
        dados={dados}
        email={email}
        senha={senha}
        urlFoto={urlFoto}
        usuario={usuario}/>
           
            </>
        </TelaCadastro>
    )
}

const TelaCadastro = styled.div`
width:375px;
height: 670px;
background-color:#f4f4f4;
margin: 0 auto;
display: flex;
flex-direction: column;
margin-top: 20px;
font-family: 'Lexend Deca', sans-serif;
//font-family: 'Playball', cursive;

div{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
}

form{
display: flex;
flex-direction: column;
margin-top: 250px;

}

input{
width: 303px;
height: 45px;
border-radius: 5px;
border: 1px solid whitesmoke;
background-color: white;
margin: 5px auto;
padding-left: 5px;

}
form input:last-child{
    background-color: #52B6FF;
    color: white;
}

p{
    font-size: 14px;
    font-weight: 400;
    color:#52B6FF;
}

`;
