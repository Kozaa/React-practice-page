import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: ${({ distance, scale }) => `${distance * scale}px`};
    align-items: center;
    transform: translateY(-50px);
`

const Wrapper = ({ children, distance, scale }) => (
    <StyledWrapper distance={distance} scale={scale}>
        {children}
    </StyledWrapper>
);


export default Wrapper;