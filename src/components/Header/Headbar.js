import React from 'react'
import styled from "styled-components";
import Form from "../Forms/Form";

/* Nice to have:
onscroll trigger state to display {profile.url} and profile.name in the headbar 




*/





export default function Headbar({HandleSubmit, HandleChange, data}) {
    return (
        <HeadWrapper>
        <Head>
        
        <Form HandleSubmit ={HandleSubmit} HandleChange = {HandleChange} data = {data}/> 
   
  
            
        </Head>
        </HeadWrapper>
    )
}


const Head = styled.header`
grid-area:header;
width:100vw;
block-size: min(10vh);
background-color:red;
top:0;

`;

const HeadWrapper = styled.div`

`

