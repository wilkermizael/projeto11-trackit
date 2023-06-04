import styled from "styled-components"
import FormularioLogin from "../../components/FormularioLogin";
export default function Login() {
    // eslint-disable-next-line react/prop-types
   
    return (
        <TelaLogin>
            <div>
                <img src="/src/assets/logo.svg " alt="logo" />
            </div>

            <FormularioLogin />
        
        </TelaLogin>
    )
}

const TelaLogin = styled.div`
max-width:375px;
height: 670px;
background-color:#f4f4f4;
margin: 0 auto;
display: flex;
flex-direction: column;
margin-top: 20px;
font-family: 'Lexend Deca', sans-serif;

div:nth-child(1){
    width: 180px;
    height: 80px;
    margin: 100px auto;
   
}
div:nth-child(2){
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-top: -180px;
  
    
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


}
form input:last-child{
    background-color: #52B6FF;
    width: 303px;
    height: 45px;
    color: white;
    
    
}   

p{
    font-size: 14px;
    font-weight: 400;
    color:#52B6FF;
    margin-top: 20px;
}

`;
