import styled from 'styled-components'
import { CiSearch } from "react-icons/ci";


const Row = styled.div` 
margin: 20px 20px;
display: flex; 
justify-content: space-between; 
align-items: center;   
@media (max-width: 684px) { 
    flex-direction: column; 
    gap: 20px; 

    & select{
      width:100%
    } 
    & div{
        width:126%  ;
    }
  } 
 

`
const Input = styled.input`
    width: 380px; 
    height: 50px; 
    outline :none ; 
    padding-left: 20px; 
    margin-left: 30px;
    border-radius: 5px;
    border:none ;   
    position: relative;
    background-color: var(--color-mode-back); 
    color: var(--color-mode-text);
    box-shadow: 0px 0px 5px var(--color-toggle-4);
    font-size: 18px; 

    font-family: "Nunito Sans", sans-serif;
    font-weight: 600;  
     
        padding-left:40px;
   
    &::placeholder{
        position: absolute;
        left:40px; 
        color: var(--color-mode-text);
    }
   

`
const Select = styled.select` 
    padding: 12px 10px;
   
    font-family: "Nunito Sans", sans-serif;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: var(--color-mode-back); 
    color: var(--color-mode-text);
    height: 52px;
    margin-right: 35px; 
    box-shadow: 0px 0px 5px var(--color-toggle-4); 
    width: 178px; 
   
`

const Option = styled.option` 
padding: 10px 10px;  
font-family: "Nunito Sans", sans-serif; 
font-weight: 600;
`

const Icon = styled(CiSearch)`
    position: absolute;
    left: 44px;
    top: 16px;
    z-index: 1;
`

const SearchContainer = styled.div` 
width:35% ; 
height :25%  ; 
position: relative; 
font-family: "Nunito Sans", sans-serif; 
font-weight: 600; 
@media (max-width: 684px) { 
    
        width:126%  ;
   
  } 
`
export default function CountriesFilter({ countryName, region, setRegion, setCountryName }) {




    function handleSelectRegion(e) {

        setRegion(e.target.value)
    }

    console.log(region)
    return (
        <Row>
            <SearchContainer>
                <Icon />
                <Input typt='search' placeholder='Search for a country...' value={countryName} onChange={(e) => setCountryName(e.target.value)} />
            </SearchContainer>



            <Select type='light' value={region} onChange={handleSelectRegion} >
                <option defaultChecked hidden>Filter by Region</option>
                <Option>Africa</Option>
                <Option>Americas</Option>
                <Option>Asia</Option>
                <Option>Europe</Option>
                <Option>Oceania</Option>
            </Select>
        </Row>
    )
}
