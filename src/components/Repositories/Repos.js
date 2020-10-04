import React from 'react'
import RepoItem from "./RepoItem";
// green name is the name for the prop when passed, {} is what its called in the parent. 




const Repos = ({repos}) => {
   
   // passing the useState variable as a prop to a child component, and pass it again to another. 

   
    return (
        
        <ul>
    <RepoItem repos = {repos} /> 


        </ul>
    
    )
}

export default Repos
