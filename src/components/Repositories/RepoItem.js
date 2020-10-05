import React from 'react'
import styled from "styled-components";
import {AiFillStar} from "react-icons/ai";
// come back to this later. 
// 

const RepoItem = ({repos}) => {
   
// finally, mapping the component here works a treat. always wrap it in a div. don't make the same mistake I did, twice. 
    return (
     <RepoWrapper>
      {repos.map((item) => (

        
        <Card key = {item.id}>
        <p>
     
          {item.name}
      

        </p>
        <p>{item.description}</p>
        <Info>
        
        <p><AiFillStar /> {item.stargazers_count}</p>
        </Info>
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
p{
 padding-left: 2em;


}

`;

const RepoWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;


`;

const Info = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-content:flex-start;
padding:0;
margin:0;

p{

padding-left:3em;


}

`;