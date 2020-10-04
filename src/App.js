import React, {   useState} from 'react';
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Axios from 'axios'
import Headbar from "./components/Header/Headbar";
import Footer from "./components/Footer/Footer";
import Repos from "./components/Repositories/Repos"
import UserProfile from "./components/User/UserProfile";
  


function App() {

  const [userData, SetUserData] = useState([]);
  const [repos, setRepos] = useState([]);
  const [query, setQuery] = useState("");

const userUrl = `https://api.github.com/users/${query}`;
const repoUrl = `https://api.github.com/users/${query}/repos`;


const HandleChange = (event) => {
  
  setQuery(event.target.value);
  
  };


const getRepoData = async() => {
 await Axios.get(repoUrl) 
.then(res => {
console.log(res.data)
setRepos(res.data)

})
};


const getUserData = async() => {
await Axios.get(userUrl)
.then(res => {
  SetUserData(res.data)
})
}


const HandleSubmit = (event) => {
event.preventDefault();
getUserData();
getRepoData();

}
  return (
    <AppWrapper>
     <GlobalStyle />
     <Headbar HandleSubmit ={HandleSubmit} HandleChange = {HandleChange} data = {query} /> 
      <UserProfile profile = {userData}  /> 
      <Repos  repos = {repos}/> 
     <Footer />
    </AppWrapper>
  );
}

export default App;


// Styles for component Below. 


const AppWrapper = styled.div`

 block-size: min(100vh);
 display:grid;
 grid-template-areas:
 " header "
 "  main  ";
 grid-template-rows: min-content 1fr;
`;








