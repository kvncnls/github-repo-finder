import React from 'react'
import styled from "styled-components";
import theme from '../../styles/theme';
import { FaGithubSquare, FaLinkedin,FaTwitterSquare } from 'react-icons/fa';

export default function Footer() {
    return (
        <FootWrapper>
               
      

          Built
      
         
          by Tommy Maher
          <SocialList> 
        <SocialListItem><a href = "https://github.com/tommymaher15"><FaGithubSquare /></a></SocialListItem>
        <SocialListItem><a href ="https://www.linkedin.com/in/tommymaher10/"><FaLinkedin /></a></SocialListItem>
        <SocialListItem><a href = "https://twitter.com/TommyMa88163906"><FaTwitterSquare /></a></SocialListItem>
       
        </SocialList>
        </FootWrapper>
    )
}


const FootWrapper = styled.footer`
background: linear-gradient(225deg, #d9dee1, #ffffff);
box-shadow:  -5px 5px 5px #e5ebee, 
             5px -5px 5px #fdffff;
display:flex;
background-color:#f1f7fa;
align-items:center;
justify-content:center;
border-top-right-radius: 80px;
height:15vh;
bottom:0;
grid-area:footer;
margin-top:2em;
font-family: "SF Mono";
    font-weight: 400;
    font-size:18px;
    color:#777763;
`;

const SocialList = styled.ul`

list-style-type:none;


`;


const SocialListItem = styled.li`
display:inline-block;
align-self:right;
justify-self:right;
font-size:24px;
padding-left:1em;
color:#777763;
&:hover{
  color:${theme.colors.green};
 
};
`