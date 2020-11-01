import React, {useState} from 'react';
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import GlobalFonts from "./styles/Fonts/Fonts";
import Axios from 'axios'

import Headbar from "./components/Header/Headbar";
import Content from "./components/Content";
import Footer from "./components/Footer/Footer";

// conditionally render the loading prop as the request is in progress. 
// how to achieve this?


function App() {

  const [userData, SetUserData] = useState([]);
  const [repos, setRepos] = useState([]);
  const [query, setQuery] = useState("");
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);

const userUrl = `https://api.github.com/users/${query}`;
const repoUrl = `https://api.github.com/users/${query}/repos`;


const HandleChange = (event) => {
  
  setQuery(event.target.value);
  
  };


const getRepoData = async() => {
 
      const res = await Axios.get(repoUrl)
   
     setRepos(res.data)
     console.log(res.data)
     setAlert("")
     setQuery("");
     setLoading(true)
   }
  
   




const getUserData = async() => {
if (query !== ""){

 const res = await Axios.get(userUrl)

  if (!res.data){
    return setAlert("No such user available")
  }
SetUserData(res.data)
console.log(res.data)

setQuery("");
} 
else{
 return setAlert("Please Fill the form")
}


}


const HandleSubmit = (event) => {
event.preventDefault();
getUserData();
getRepoData();

}
  return (
    <AppWrapper>
     <GlobalStyle />
     <GlobalFonts />
  
     <Headbar HandleSubmit ={HandleSubmit} HandleChange = {HandleChange} data = {query}  alert = {alert} /> 
     
      <Content profile = {userData} repos = {repos} loading = {loading} /> 
      

      
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
 "  main  "
 "footer";
 grid-template-rows: min-content 1fr min-content;
`;








