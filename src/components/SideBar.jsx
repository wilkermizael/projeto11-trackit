import styled from "styled-components"
export default function SideBar(){
    return(
        <>
        
        <Side>
            <>
            <div><h1>Hábitos</h1></div>
            <Circulo> Hoje</Circulo>
            <div>Histórico</div>
            </>
        </Side>
        </>
    )
}

const Side = styled.div`
width: 373px;
height: 70px;
background-color: white;
border: 1px solid #dadada;
display: flex;
justify-content: space-between;
z-index: 1;
//position: relative;


h1{
   
    font-family: 'Lexend Deca', cursive;
    font-weight: 400;
    font-size:18px;
    color: #52B6FF;
    margin-left: 15px;
    position: absolute;
    top: 15px;  
    left: 2px;
    position: absolute;
}
`;

const Circulo = styled.div`
width: 100px;
height: 90px;
//order-radius: 40%;
background-color: #52B6FF;
position: relative;
z-index: 2;
`;