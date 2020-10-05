import React from 'react'
import styled from "styled-components";
import { GoOrganization, GoPerson, GoLocation} from "react-icons/go";

// pass the oprops down from the app component  
const UserProfile = ({profile}) => {

  // blank display until request is made. LETS GO 
if (!profile |profile.length === 0 ) return null;

    return (
        <Profile>

      <h1>{profile.name} </h1>
      <p><a href = {profile.url}>{profile.login}</a></p>

      <ProfileImage src = {profile.avatar_url}  alt = "github User profile" loading = "lazy" /> 

     <FollowsWrapper>
      <FollowItem><GoOrganization/>  {profile.followers} followers</FollowItem>
      <FollowItem><GoPerson />  {profile.following} following</FollowItem>
      
      </FollowsWrapper>
      <Location>
        <GoLocation /> {profile.location}
        </Location>
        </Profile>
    )
}
export default UserProfile


const Profile = styled.div`
display:flex; 
align-items:center;
justify-content:center;
flex-direction:column;



`


const ProfileImage = styled.img`
 position: relative;
  width: 20vw;
  height: 20vw;
  overflow: hidden;
  border-radius: 50%;
  margin-top:2em;
  border: 0.3rem solid #081d2c;

`;

const FollowsWrapper = styled.div`
display:flex;
flex-direction:row;
padding-top:2em`;

const FollowItem = styled.p`
padding:1em;


`;

const Location = styled.p`
padding:2em;`;