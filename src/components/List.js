import React from 'react';
import styled from "styled-components";


const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <List>
    <RepoCard>
      <RepoHeader>Available Public Repositories</RepoHeader>
      {repos.map((repo) => {
        return (
          <ListItem key={repo.id} >
            <span className='repo-text'>{repo.name} </span>
            <span className='repo-description'>{repo.description}</span>
          </ListItem>
        );
      })}
      </RepoCard>
    </List>
  );















  
}
export default List;


const RepoHeader = styled.h2`
  font-size: 30px;
  text-align: center;
  color: var(--basic-color);

`;

 const ListItem = styled.li`
 
 list-style: none;
 `;

 const RepoCard = styled.div`
   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
 transition: 0.3s;
 height:25vh;
 `;

 