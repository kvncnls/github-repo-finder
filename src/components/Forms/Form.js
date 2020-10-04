import React from 'react'
import styled from "styled-components";

const Form = ({HandleSubmit, HandleChange, data}) => {
    return (
    
        <FormItem onSubmit = {HandleSubmit}>
        <SearchInput type = "text" placeholder = "Search.. " onChange ={HandleChange} value = {data}/>
        <input type="button" value="Search "/>
            </FormItem>
            )

    }
    export default Form


const SearchInput = styled.input`
margin:1em;

`;


const FormItem = styled.form`
text-align:center;


`;

