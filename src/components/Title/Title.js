import React from 'react';
import styled from 'styled-components';


const H2 = styled.div`
    font-size: 1.2em;
    color: black;
    font-weight: 800;
    padding: 0 100px;
`

const H1 = styled(H2)`
    font-size: 1.6em;
    color: white;
    padding: 0;
    width: 100vw;

    z-index: 1;
    text-align: center;

    position: fixed;
    top: 10px;
    left: 0;
`



const Title = ({ children, main }) => (
     main ? (<H1> Scale of The Solar System </H1>) : (<H2>{ children }</H2>)
);

export default Title;