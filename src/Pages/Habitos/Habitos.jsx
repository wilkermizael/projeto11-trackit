
import { useContext } from "react";
import styled from "styled-components"
import Navbar from '../../components/Navbar.jsx';
import SideBar from "../../components/SideBar.jsx";
import { TokenContext } from "../../Context/TokenContext.jsx";

export default function Habitos() {
    const {token} = useContext(TokenContext)
    /*const config = {
        headers: { Authorization: `Bearer ${token}` }
    };*/
    
    console.log(token)
    return (
        <TelaContainer>
            <>
            <Navbar/>
            <p>meus habitos</p>
            <SideBar/>
            </>
        </TelaContainer>
    )
}

const TelaContainer = styled.div`
width:375px;
height: 670px;
background-color:#f4f4f4;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top: 20px;
font-family: 'Lexend Deca', sans-serif;


div{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
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
    color: white;
}

p{
    font-size: 14px;
    font-weight: 400;
    color:#52B6FF;
}

`;
