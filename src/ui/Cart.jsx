import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled.div`
    width: 265px;
    height: 325px;
    border-radius: var(--border-radius-md); 
    box-shadow: 0 0 5px var(--color-toggle-4); 
    background-color: var(--color-mode-back); 
    margin: 10px; 
    color:var(--color-mode-text);  
    cursor:pointer ;
`
const Img = styled.img` 
width: 100%;  
height: 50%;
object-fit: cover;
border-top-left-radius:var(--border-radius-md) ; 
border-top-right-radius:var(--border-radius-md) ;
`
const StyledHeading = styled.h2`
padding:10px 20px ;  
font-size :19px ;  
font-weight: 700;
color:var(--color-mode-text);
`
const StyledList = styled.ul`
    padding:0 20px 10px 20px ;  
    font-size:15px;  
    font-weight: 500; 
    color:var(--color-mode-text);

`
const StyledSpan = styled.span`
    font-size: 14px; 
    font-weight: 600; 
    color: var(--color-mode-input);
`

export default function Cart({ country }) {
    const navigate = useNavigate()
    const { population
        , region, capital, name, flags } = country;

    const { common } = name;
    const { svg } = flags;


    return (

        <StyledNavLink onClick={() => navigate(`/${common}`)}>
            <Img src={svg} alt='country-image' />
            <StyledHeading>{common}</StyledHeading>
            <StyledList>
                <li>Population:<StyledSpan> {population}</StyledSpan> </li>
                <li>Region:<StyledSpan> {region}</StyledSpan></li>
                <li>Capital:<StyledSpan> {capital?.join('')}</StyledSpan></li>
            </StyledList>
        </StyledNavLink>

    )
}
