import React from 'react'
import styled from "styled-components";
import Form from "../Forms/Form";

/* Nice to have:
onscroll trigger state to display {profile.url} and profile.name in the headbar 
 Nice to have 
 



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
background-color:#1b2b45;
box-shadow: 3px 4px 15px 0px rgba(0,0,0,0.44);
box-shadow: 3px 4px 15px 0px rgba(168,156,168,1);
display:flex;
align-items:center;
justify-content:center;
`;

