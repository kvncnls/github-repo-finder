import React from 'react'
import styled from "styled-components";

const Form = ({HandleSubmit, HandleChange, data}) => {
    return (
    
        <FormItem onSubmit = {HandleSubmit}>
        <SearchInput type = "text" placeholder = "Search.. " onChange ={HandleChange} value = {data}/>
        <FormInput type="button" value="Search "/>
            </FormItem>
            )

    }
    export default Form


const SearchInput = styled.input`
  width: 100%;
  height: 2.2rem;
  background: #f5f5f5;
  outline: none;
  border: none;
  border-radius: 1.625rem;
  padding: 0 3.5rem 0 1.5rem;
  font-size: 1rem;
margin-top:2em;
  

`;


const FormItem = styled.form`
text-align:center;


`;


const FormInput = styled.button`
width: 3.5rem;
height: 2.8rem;
margin-left: -3.5rem;
background: none;
border: none;
outline: none;
`;