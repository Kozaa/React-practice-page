import React from 'react';
import styled from 'styled-components';


const StyledDescription = styled.div`
    font-size: .7em;
    font-weight: 400;


`

const Description = ({ children }) => (
    <StyledDescription>
        {children}
    </StyledDescription>
);


export default Description;