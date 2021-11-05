import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React ,{useState} from 'react'
import styled from 'styled-components'

function Header() {

   const[show,setshow]=useState(false)
    return (
        <Container>
            <a href="#">
                <img src='/images/logo.svg' alt='logo'></img>
            </a>

            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>    
            </Menu>
            <Sidebar>
            <a href="#">Shop</a>
            <a href="#">Account</a> 
            <p onClick={()=>{setshow(true);}}><FontAwesomeIcon icon={faBars} size="lg"></FontAwesomeIcon></p>
            </Sidebar>
            <BurgerMenu show={show}>
            <div>
                <Iconclose>
                <FontAwesomeIcon onClick={()=>{setshow(false);}} icon={faTimes} size="lg"></FontAwesomeIcon>
                </Iconclose>
                    <ul>
                    <Li>Model S</Li>
                    <Li>Model 3</Li>
                    <Li>Model X</Li>
                    <Li>Model Y</Li>
                    <Li>Solar Roof</Li>
                    <Li>Solar Panels</Li>  
                    <li>Existing Inventory</li>
                    <li>Used Inventory</li>
                    <li>Test Drive</li>
                    <li>Cybertruck</li>
                    <li>Roadster</li>
                    <li>Semi</li>
                    <li>Charging</li>
                    <li>Powerwall</li>
                    <li>Commercial Energy</li>
                    <li>Utilities</li>
                    <Lis>Shop</Lis>
                    <Lis>Account</Lis>
                    <li>Find Us</li>
                    <li>Support</li>
                    <li>Investor Relations</li>
                    </ul>
              </div>  
        </BurgerMenu>
        </Container>

        

    
    )
}

export default Header

const Container = styled.div`
display:flex;
position:fixed;
justify-content:space-between;
align-items:center;
height:10vh;
top:0;
right:0;
left:0;
z-index:1;
    a{
        margin-left:3vw;
    }
`
const Menu=styled.div`
display:flex;
justify-content:center;
align-items:center;
a{
    text-decoration:none;
    padding:3px 7px;
    border-radius:10px;
    transition:0.4s;

    &:hover{
        background-color:rgba(0,0,0,0.3);
    }
    @media (max-width:1000px){
        display:none;
    }
}
`
const Sidebar=styled.div`
display:flex;
justify-content:center;
align-items:center;
a{
    text-decoration:none;
    margin:4px;
    padding:3px 7px;
    border-radius:10px;
    transition:0.4s;
    &:hover{
        background-color:rgba(0,0,0,0.3);
    }
    @media (max-width:600px){
        display:none;
    }
}
p{
    margin:0.5vw;
    cursor:pointer;
    @media (max-width:600px){
        margin-right:3vh;
    }
}
`

const BurgerMenu=styled.div`
position:fixed;
right:0;
top:0;
bottom:0;
background-color:rgba(0,0,0,0.5);
    div{
        transition:transform 1s;
        transform:${props=> props.show ?`translateX(0px);`:`translateX(300px);`}
        width:260px;
        position:absolute;
        right:0px;
        display:flex;
        flex-direction:column;
        background-color:white;
        padding:20px;
        height:100vh;
        ul{
            overflow:overlay;
            list-style:none;
            display:flex;
            flex-direction:column;
            li{
                padding:7px;
                border-radius:10px;
                cursor:pointer;
                transition:0.4s;
                &:hover{
                    background-color:rgba(0,0,0,0.3);
                }
            }
        
           
        }
    }
`

const Iconclose=styled.p`
align-self:end;
padding:10px 5px;
cursor:pointer;
`
const Li=styled.li`
@media (min-width:1000px){
    display:none;
}
`
const Lis=styled.li`
@media (min-width:500px){
    display:none;
}
`



