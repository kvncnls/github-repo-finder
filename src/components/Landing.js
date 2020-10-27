import React from 'react'
import styled from "styled-components";
const Landing = () => {
    return (
        <LandingWrapper>
        <h1> Github Repo Finder</h1>

        <h2> Search for anyone on github and view their work!</h2>


        
 
        </LandingWrapper>
    )
}

export default Landing

const LandingWrapper = styled.div`
display:flex;
flex-direction:column;

height: 70vh;
width:100vw;
text-align:center;


h1{
    padding-top:2em;

}

h2{

    padding-top:1em;
}
`;