import { styled } from 'styled-components'
import ToggleMode from './ToggleMode'
const StyledHeader = styled.header`
    display: flex; 
    justify-content: space-between; 
    align-items:  center; 
    background-color: var(--color-mode-back);
    padding: 14px 50px; 
 
    box-shadow: 0px 0px 5px var(--color-toggle-4);
`
const Heading = styled.h2`
    font-weight: 700; 
    font-size: 20px;  
    font-family: "Nunito Sans", sans-serif; 
    color:var( --color-mode-text);
    
`
export default function Header() {
    return (
        <StyledHeader>
            <Heading>Where in the world?</Heading>
            <ToggleMode />
        </StyledHeader>
    )
}
