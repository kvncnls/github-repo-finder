import React from 'react';
import Repos from "./Repositories/Repos";
import UserProfile from "./User/UserProfile";
import styled from "styled-components";


const Content = ({repos, profile}) => {
    return (
        <Wrapper>
        
        <UserProfile  profile = {profile}/> 
        <Repos repos = {repos} />
            
        </Wrapper>
    )
}

export default Content

const Wrapper = styled.div`
grid-area:main;
`;