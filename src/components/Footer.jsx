import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import { PercentageContext } from "../Context/PercentageContext";
import { Link } from "react-router-dom";

export default function Footer(){
const {percentage} = useContext(PercentageContext)

    return(
        <>
        
        <Side>
            <>
            <Link to={'/habitos'}>
            <div><h1>Hábitos</h1></div>
            </Link>
            
            <div style={
                { 
                width: 85, 
                height: 85, 
                marginTop:-55,
            
                }}>
                <CircularProgressbar value={percentage} text={`Hoje`} background backgroundPadding={4} styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        
                        rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'round',

                        // Text size
                        textSize: '18px',

                        font:'Lexend Deca',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `rgba(255, 255, 255, 255)`,
                        textColor: '#ffffff',
                        trailColor: "#3e98c7",
                        backgroundColor:"#3e98c7",
                    })}/>
            </div>
            <Link to={'/historico'}>
            <div><h2>Histórico</h2></div>
            </Link>
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
position: fixed;
position: relative;


div h2{
    font-family: 'Lexend Deca', cursive;
    font-weight: 400;
    font-size:18px;
    color: #52B6FF;
    margin-left: 15px;
    position: absolute;
    top: 20px;  
    right: 15px;
    position: absolute;
}

div h1{
    font-family: 'Lexend Deca', cursive;
    font-weight: 400;
    font-size:18px;
    color: #52B6FF;
    margin-left: 15px;
    position: absolute;
    top: 20px;  
    left: 2px;
    position: absolute;
}
`;
