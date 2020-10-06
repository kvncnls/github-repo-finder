import React from 'react'
import styled from "styled-components";
import {AiFillStar} from "react-icons/ai";
import theme from '../../styles/theme';
// 

const RepoItem = ({repos}) => {
   
// finally, mapping the component here works a treat. always wrap it in a div. don't make the same mistake I did, twice. 
    return (
     <RepoWrapper>
      {repos.map((item) => (

        
        <Card key = {item.id}>
        <h4><a href = {item.html_url}> {item.name}</a> </h4>

        <p>{item.description}</p>
        <Info>
        
        <p><AiFillStar color = "777763" /> {item.stargazers_count}</p>
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
height:150px;
border-radius: 38px;
background: #f1f7fa;
box-shadow:  8px -8px 16px #d2d7da, 
             -8px 8px 16px #ffffff;
margin:1em;

p{
 padding-left: 2em;
 font-family: Calibre;
    font-weight: 400;
    color:${theme.colors.slate};
    font-size: 20px;
    padding-top:.5em;

}
h4{
  font-family: Calibre;
    font-size: 20px;
    font-weight: 600;
    color:${theme.colors.slate};
   padding-left:1em;
   padding-top:.5em;
}

a:hover{

color: #777763;


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