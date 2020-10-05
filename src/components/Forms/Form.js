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
         <FiSearch    /> 
         </Icon>
 
            </FormItem>
       </SearchContainer>
       </FlexWrapper>
    )
    }
    export default Form
   

const SearchInput = styled.input`

  border-top-left-radius:15px;
  border-bottom-left-radius:15px;
  border: none;
  background-color: #f5f5f0;
 padding:2.5px;
`;



const Icon = styled.div`

display:inline-block;
font-size:1.2rem;
position:relative;
top:5px;

border-top-right-radius:15px;
border-bottom-right-radius:15px;
background-color: #f5f5f0;
height:20px;

`;




const FormItem = styled.form`




`;


const SearchContainer = styled.div`
position:relative;
top:10px;

`;



const FlexWrapper = styled.div`

`;
