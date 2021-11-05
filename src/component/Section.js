import React from 'react'
import styled from 'styled-components';




function Section(props) {

    return (
        <Main bgImg={props.bgImg} >
           
                <Head >
                    <h1 className="">{props.title}</h1>
                    <p>{props.description}</p>
                </Head>

            <Down>
                <ButtonGP>
                    <ButtonRight>{props.right}</ButtonRight>
                    {props.left && <ButtonLeft>{props.left}</ButtonLeft>}
                </ButtonGP>
                 {props.arrow && <Arrow src="/images/down-arrow.svg"></Arrow>}
            </Down>
        </Main>
    )
}

export default Section


const Main=styled.div`
height:100vh;
width:100wh;
background-image:${props=> `url('/images/${props.bgImg}')`};
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
`

const Head=styled.div`

margin-top:15vh;
text-align:center;
p{
    margin-top:5px;
    color:grey;
}

`



const Down=styled.div`

display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;


`
const ButtonGP=styled.div`
display:flex;

@media (max-width:769px){
    flex-direction:column;
}
margin-bottom:70px;
`

const ButtonRight=styled.div`
background-color:rgba(23,26,32,0.8);
height:35px;
width:250px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
cursor:pointer;
text-transform:uppercase;
font-size:12px;
transition:1s all;

&:hover{
    opacity:1;
}
`

const ButtonLeft=styled(ButtonRight)`
background-color:white;
opacity:0.65;
color:black;
@media (min-width:769px){
    margin-left:20px;
}
@media (max-width:769px){
    margin-top:10px;
    margin-bottom:5px;
}
`


const Arrow = styled.img`
height:30px;
width:30px;
position:absolute;
bottom:0px;
animation-name:animated;
animation-duration:1s;
animation-iteration-count: infinite;
overflow-x: hidden;
`
