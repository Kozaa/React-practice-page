import React from 'react';
import styled from 'styled-components';


const Sun = styled.div`
    border-radius: 50%;
    width: ${({ scale }) => `${scale * 1400}px`};
    height: ${({ scale }) => `${scale * 1400}px`};
    background-color: yellow;
    flex-shrink: 0;
`
const Orbit = styled.div`
    padding: 50px;
    border: white solid 5px;
    border-radius: 50%;
`


const Star = ({ scale }) => (
    <Orbit>
        <Sun scale={scale}/>
    </Orbit>
)

export default Star;