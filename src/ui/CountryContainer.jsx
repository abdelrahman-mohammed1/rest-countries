import styled from "styled-components";
import Cart from "./Cart";

const Container = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 40px; 
    background-color: var(--color-mode-back); 
`
const StyledDiv = styled.div`

height: 437px; 
`
export default function CountryContainer({ data, region, countryName }) {
    const searchResult = countryName.length > 0 ? data.filter((country) => `${country.name.common}`.toLowerCase().includes(countryName?.toLowerCase())).map((country, index) => <Cart key={index} country={country} />) : region ? data.map((country, index) => country.region === region && <Cart key={index} country={country} />) : data.map((country, index) => <Cart key={index} country={country} />)

    return (
        <Container>
            {searchResult.length > 0 ? searchResult : <StyledDiv>No Result is Found place Try Again.</StyledDiv>}
        </Container>
    )
}