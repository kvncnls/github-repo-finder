import React from 'react'
import styled from "styled-components";
import { GoOrganization, GoPerson, GoLocation} from "react-icons/go";
import theme from '../../styles/theme';
// pass the oprops down from the app component  
const UserProfile = ({profile}) => {

  



if (!profile |profile.length === 0 ) return null;

    return (
        <Profile>
   
      <h1>{profile.name} </h1>
      <p><a href = {profile.url}> {profile.login}</a></p>

      <ProfileImage src = {profile.avatar_url}  alt = "github User profile" loading = "lazy" /> 
      <IconWrap>
     <FollowsWrapper>
      <FollowItem><GoOrganization color = "777763"/>  {profile.followers} followers</FollowItem>
      <FollowItem><GoPerson color = "777763" />  {profile.following} following</FollowItem>
    
   
      </FollowsWrapper>
      <Location>
        <GoLocation color = "777763" /> {profile.location}
        </Location>
</IconWrap>
        </Profile>
    )
}
export default UserProfile


const Profile = styled.div`

display:flex; 
align-items:center;
justify-content:center;
flex-direction:column;
h1 {
  font-family: Calibre;
    font-weight: 600;
  color:${theme.colors.slate};
  font-size:3em;

}

p{
  font-family: "SF Mono";
    font-weight: 400;
    font-size:20px;
  color:#777763;
  padding-bottom:1em;
 a:visted{
   color:#777763;
 };

 a:hover{

  color:red;

 }
}



`



const ProfileImage = styled.img`

 width: 100%;
  max-width: 350px;
  height: auto;
  overflow: hidden;

  border-radius: 50%;

  ;

`;

const FollowsWrapper = styled.div`
display:flex;
flex-direction:row;
padding-top:2em`;

const FollowItem = styled.p`
padding:1em;


`;

const Location = styled.p`
padding:2em;
text-align:center;`;

const IconWrap = styled.div``;