
import { useContext } from "react";
import styled from "styled-components"
import Navbar from '../../components/Navbar.jsx';
import Footer from "../../components/Footer.jsx";
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
            <NewHabito>
                
                <h1>meus habitos</h1>
                <img src="/src/assets/plus.svg " alt="plus" />
                
            </NewHabito>
            <Footer/>
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

`;

const NewHabito = styled.div`
display: flex;
justify-content: space-between;
background-color: blue;

`;