import React from 'react'
import styled from "styled-components";
import Form from "../Forms/Form";

/* Nice to have:
onscroll trigger state to display {profile.url} and profile.name in the headbar 




*/





export default function Headbar({HandleSubmit, HandleChange, data}) {
    return (
        <Head>
        
        <Form HandleSubmit ={HandleSubmit} HandleChange = {HandleChange} data = {data}/> 
   
  
            
        </Head>
    )
}


const Head = styled.header`
grid-area: header;
block-size: min(10vh);
display:flex;
align-items:center;
justify-content:center;
align-content:center;
`;

