import styled from 'styled-components'
import Button from './Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


const First = styled.div` 
    display: flex;
    align-items: center;
    gap:10rem; 
    color:var( --color-mode-text); 
@media (max-width: 800px) {
  display: flex; 
  flex-direction: column; 
  justify-content: center;
}
`
const ListContainer = styled.div` 
    display: flex;
    gap: 13.5rem;
    justify-content: space-evenly;
    align-items: stretch; 
    margin:10px 0 48px 0; 
 

`
const NavContainer = styled.div` 
 
display: flex; 
flex-direction: column; 
gap: 8px;
`
const Thired = styled.div` 
    display: flex;
     gap: 10px;  
     & span{
        color:var( --color-mode-text); 
        font-size: 1.6rem;
     } 
     @media(max-width:412px){
       padding-left: 154px;
     }
`
const Img = styled.img` 
max-width :35% ; 
@media(max-width:412px){
   max-width: 100%;
     }
`
const StyledList = styled.ul` 
    
    font-size:15px;  
    font-weight: 600; 
 

`
const StyledSpan = styled.span`
    font-size: 15px; 
    font-weight: 500; 
    color:  var(--color-mode-input);
`
const Heading = styled.h2`
margin:0px 353px 0px 0px ;

@media (max-width:412px){
    width: 100% ; 
    margin-left: 160px;
}

`
const StyledCountryDetails = styled.div` 
margin-top:10rem; 
padding: 0px 6.5rem; 
height: 422px; 

`
const Row = styled.div` 
 display: flex; 
 gap:38px ;
 @media(max-width:412px){
  flex-direction: column; 
  gap:18px ; 
 }
 `
const ButtonRow = styled.div`
    display: flex; 
    flex-wrap: wrap;
     gap:10px

 `
export default function CountryDetails() {
    const x = useParams();
    const naviagte = useNavigate();
    const [data, setData] = useState([]);


    useEffect(function () {
        async function getData() {

            const res = await fetch(`https://restcountries.com/v3.1/name/${x.name}`);
            const data = await res.json();
            setData(data);

        }
        getData();
    }, [x.name])
    const v1 = data[0]?.languages;
    const v2 = data[0]?.currencies;
    const [x1] = v1 === undefined ? '' : Object.keys(v1);
    const [x2] = v2 === undefined ? '' : Object.keys(v2);
    const handel = data[0]?.tld === undefined ? 'Not available' : data[0]?.tld[0]

    return (
        <>
            {!data?.length && <StyledCountryDetails>
                <p>isLoading....</p>
            </StyledCountryDetails>
            }
            {data?.length > 0 && <>
                <Button position='relative' onClick={() => naviagte('/')}  >⬅ Back</Button>
                <StyledCountryDetails>

                    <First >
                        <Img src={data[0]?.flags?.svg} alt='country-flag' />

                        <NavContainer>

                            <Heading>{data[0]?.name?.common}</Heading>
                            <ListContainer>
                                <Row>

                                    <StyledList>
                                        <li>Native Name: <StyledSpan>{data[0]?.name?.nativeName[x1]?.official}</StyledSpan></li>
                                        <li>Population: <StyledSpan>{data[0]?.population}</StyledSpan></li>
                                        <li>Region: <StyledSpan>{data[0]?.region}</StyledSpan></li>
                                        <li>Sub Region: <StyledSpan> {data[0]?.subregion}</StyledSpan>
                                        </li>
                                        <li>Capital: <StyledSpan>{data[0]?.capital[0]}</StyledSpan></li>
                                    </StyledList>


                                    <StyledList>
                                        <li>Top Level Domain: <StyledSpan>{handel}</StyledSpan>  </li>
                                        <li>Currencies: <StyledSpan>{data[0]?.currencies[x2]?.name}</StyledSpan></li>
                                        <li>Languages: <StyledSpan>{Object.values(data[0].languages).join(',')}</StyledSpan> </li>
                                    </StyledList>
                                </Row>
                            </ListContainer>

                            <Thired>
                                <span>Border Countries: </span>
                                <ButtonRow>
                                    {data[0]?.borders?.length > 0 ? data[0]?.borders?.map((country, index) => <Button key={index} poisition='relative'>{country}</Button>) : 'UnAvailable Now'}
                                </ButtonRow>

                            </Thired>
                        </NavContainer>





                    </First>

                </StyledCountryDetails>
            </>}
        </>
    )
}

