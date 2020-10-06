import React from 'react'
import styled from "styled-components";
import Form from "../Forms/Form";

/* Nice to have:
onscroll trigger state to display {profile.url} and profile.name in the headbar 




*/





export default function Headbar({HandleSubmit, HandleChange, data}) {
    return (
        
        <Head>
    <HeadWrapper>
        
        <Form HandleSubmit ={HandleSubmit} HandleChange = {HandleChange} data = {data}/> 
   
        </HeadWrapper>
            
        </Head>
     
    )
}


const Head = styled.header`
grid-area:header;
width:100vw;
block-size: min(10vh);

top:0;


`;

const HeadWrapper = styled.div`
display:flex;
  align-items: center;
justify-content:center;
padding-bottom:4em;

`

