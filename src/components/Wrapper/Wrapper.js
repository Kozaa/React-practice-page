import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: ${({ distance, scale }) => `${distance * scale}px`};
    align-items: center;
    justify-content: center;
    transform: translateY(-50px); 

    @media screen and (max-width: 768px){
        margin-left: 0;
        margin-top: ${({ distance, scale }) => `${distance * scale}px`};
        transform: translateY(0);
    }
`

const InterfaceWrapper = styled.div`
    width: 100vw;
    min-height: 20vh;
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
        flex-direction: column;

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