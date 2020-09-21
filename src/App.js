import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";

import Headbar from "./components/Header/Headbar";
import Footer from "./components/Footer/Footer";


function App() {
  const [query, setQuery] = useState("");
const url = `https://api.github.com/${query}/repos`;

//const [repos, setRepos] = useState([]);

// can't call it within a function. why? 
 function getData(){

// make the http request and run it on submit. 


 };






const HandleChange = (event) => {
  // 
setQuery(event.target.value);

}


const HandleSubmit = (e) => {
e.preventDefault();
// need to write a good http request function and run it here to handle the submit. thats the next step. 
};


  return (
    <AppWrapper>
    <GlobalStyle />
    <Headbar /> 

    
    <Form onSubmit = {HandleSubmit}>
    <SearchInput type = "text" placeholder = "Search.. " onChange = {HandleChange} value = {query}/>
    <input type="button" value="Search "/>
        </Form>


<Footer />
    </AppWrapper>
  );
}
export default App;





























const AppWrapper = styled.div`

 block-size: min(100vh);
 display:grid;
 grid-template-areas:
 " header "
 "  main  ";
 grid-template-rows: min-content 1fr;
`;




const SearchInput = styled.input`
margin:1em;

`;


const Form = styled.form`
text-align:center;


`;

