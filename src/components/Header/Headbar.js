import React from 'react'
import styled from "styled-components";
import Form from "../Forms/Form";

/* Nice to have:
onscroll trigger state to display {profile.url} and profile.name in the headbar 




*/





export default function Headbar({HandleSubmit, HandleChange, data , alert}) {
    return (
        
        <Head>
    <HeadWrapper>
        
        <Form HandleSubmit ={HandleSubmit} HandleChange = {HandleChange} data = {data}  alert = {alert}/> 
   
        </HeadWrapper>
            
        </Head>
     
    )
}


const Head = styled.header`
grid-area:header;
width:100vw;
block-size: min(15vh);

top:0;


`;

const HeadWrapper = styled.div`
display:flex;
  align-items: center;
justify-content:center;
padding-bottom:4em;
padding-top:1em;

`

