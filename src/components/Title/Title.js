import React from 'react';
import styled from 'styled-components';


const H2 = styled.div`
    font-size: 1.2em;
    color: black;
    font-weight: 800;
`


const Title = ({ children }) => (
    <H2>
        {children}
    </H2>
);

export default Title;