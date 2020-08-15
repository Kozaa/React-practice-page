import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: ${({ distance, scale }) => `${distance * scale}px`};
    align-items: center;
    transform: translateY(-50px);
`

const InterfaceWrapper = styled.div`
    width: 100vw;
    height: 20vh;
    padding: 10px 20px;

    position: fixed;
    bottom: 0;
    left: 0;
    background-color: black;

    border: 3px white solid;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        height: auto;
        min-height: 20vh;
    }

`



const Wrapper = ({ children, distance, scale, appInterface }) => {


    
    return (
    
        appInterface ? (
            <InterfaceWrapper>
                {children}
            </InterfaceWrapper>
        ) : (
            <StyledWrapper distance={distance} scale={scale}>
                {children}
            </StyledWrapper>
        )
    )
}

export default Wrapper;