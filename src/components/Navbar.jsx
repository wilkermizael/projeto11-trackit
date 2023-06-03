import styled from "styled-components"
export default function Navbar() {
    return(
        <div data-test="header">
            <Nav>  
                <div>
                    <h1>TrackIt</h1>
                </div>
                
                    <img data-test="avatar" src="https://w7.pngwing.com/pngs/888/686/png-transparent-spongebob-spongebob.png" alt="picture" />
                
            </Nav>
        </div>
        
    );
}

const Nav = styled.div`
width: 375px;
height: 70px;
background-color: #126BA5;
position: relative;


h1{
    width: 97px;
    height: 49px;
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size:39px;
    color: white;
    margin-left: 15px;
    position: absolute;
    top: 15px;  
    left: 2px;
}

img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
    position: absolute;
    top: 10px;
    right: 2px;
}
`;