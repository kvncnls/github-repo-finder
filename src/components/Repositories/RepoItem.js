import React from 'react'
import styled from "styled-components";

// come back to this later. 


const RepoItem = ({repos}) => {
   
// finally, mapping the component here works a treat. always wrap it in a div. don't make the same mistake I did, twice. 
    return (
     <RepoWrapper>
      {repos.map((item) => (

        
        <Card key = {item.id}>
        <p>
        <a href = {item.html_url}>
          {item.name}
        </a>

        </p>
        <p>{item.description}</p>
        </Card>
    )
    )}

    </RepoWrapper>

    )
}

export default RepoItem

const Card = styled.div`
width:80vw;
height:20vh;
border-radius: 25px;
  border: 1px solid grey;
background-color:white;
margin:1em;

`;

const RepoWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;


`;