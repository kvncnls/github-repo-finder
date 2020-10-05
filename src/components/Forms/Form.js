import React from 'react'
import styled from "styled-components";
import {  FiSearch } from "react-icons/fi";
const Form = ({HandleSubmit, HandleChange, data}) => {
    return (
      <FlexWrapper>

     <SearchContainer>
        <FormItem onSubmit = {HandleSubmit}>

        <SearchInput type = "text" placeholder = "Search.. " onChange ={HandleChange} value = {data}></SearchInput>
        <Icon>
         <FiSearch  size = "1.2rem"  /> 
         </Icon>
 
            </FormItem>
       </SearchContainer>
       </FlexWrapper>
    )
    }
    export default Form
   

const SearchInput = styled.input`
  display:inline;

  border-top-left-radius:15px;
  border-bottom-left-radius:15px;
 border: none;
 background-color: #f5f5f0;

`;



const Icon = styled.div`
text-align:right;
display:inline-block;
font-size:1.2rem;


border-top-right-radius:15px;
border-bottom-right-radius:15px;
background-color: #f5f5f0;
height:20px;

`;




const FormItem = styled.form`
text-align:center;



`;


const SearchContainer = styled.div`


`;



const FlexWrapper = styled.div`



top:50%;
`;
