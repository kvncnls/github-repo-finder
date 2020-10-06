import React from 'react'
import styled from "styled-components";


export default function Footer() {
    return (
        <FootWrapper>
               
      

          Built
      
         
          by Tommy Maher
 
        </FootWrapper>
    )
}


const FootWrapper = styled.footer`
box-shadow: 3px 4px 15px 0px rgba(0,0,0,0.44);
box-shadow: 3px 4px 15px 0px rgba(168,156,168,1);
display:flex;
background-color:#f1f7fa;
align-items:center;
justify-content:center;
border-top-right-radius: 80px;
height:10vh;
bottom:0;
grid-area:footer;
margin-top:2em;
font-family: "SF Mono";
    font-weight: 400;
    font-size:18px;
    color:#777763;
`;