import React from 'react'
import styled from 'styled-components'

const Alert = ({alert}) => {
    return (
        <Alert1>
            <h3>{alert}</h3>
            </Alert1>
    )
}

export default Alert


const Alert1 = styled.div`
h3{
 text-align:center;
    color:green;
}

`; 
