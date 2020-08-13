import React from 'react';
import styled from 'styled-components';


const StyledDescription = styled.div`
    font-size: .6em;
    font-weight: 400;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
`
const SpacedDiv = styled.div`
    margin-bottom: 5px;
`


const Description = ({ description }) => (
    <StyledDescription>
        {description.map((item, i) => {

            switch(i) {
                case 0: return (<SpacedDiv>Diameter: <br/> {item}</SpacedDiv>)
                case 1: return (<SpacedDiv>Position: <br/> {item}</SpacedDiv>)
                default: return (<SpacedDiv>{item}</SpacedDiv>)
            }
        })}
    </StyledDescription>
);


export default Description;