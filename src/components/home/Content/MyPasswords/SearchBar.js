import { useState } from "react"
import { AiOutlineSearch } from 'react-icons/ai';
import styled from "styled-components"

export default function SearchBar () {

    const [ search, setSearch ] = useState('')

    function handleResult({ target: { value }}){
        // const result = products.filter(e => e.name.toLowerCase().includes(value.toLowerCase()))
        // setFilteredProducts(result)
        setSearch(value)
    }

    return(
        <Container>
            <SearchInput onChange={handleResult} value={search}/>
            <SearchIcon onClick={() => console.log(search)}/>
        </Container>
    )
}

const Container = styled.div`
    width: 22vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;  
    @media (max-width: 1366px) {
        width: 24vw;
    }
    @media (max-width: 850px) {
        width: 95%;
        position: relative;
    }
`
const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    background-color: transparent;
    margin: 0;
    padding: 0;
    padding-right: 3.5vw;
    padding-left: 1vw;
    border: 0;
    vertical-align: baseline;
    outline: none;

    background-color: #052E1B;
    border: none;
    border-radius: 15px;

    margin-left: -1.1vw; 
    font-size: 18px;
    color: #FFFFFF;
    &:focus {
        background-color: #084629;
    }
    @media (max-width: 1366px) {
        font-size: 15px;
    }
    @media (max-width: 850px) {
        padding-left: 5vw;
    }
`
const SearchIcon = styled(AiOutlineSearch)`
    font-size: 25px;
    color: #FFFFFF; 
    margin-left: -2.4vw;  
    cursor: pointer; 

    @media (max-width: 1366px) {
        font-size: 20px;
    }
    @media (max-width: 850px) {
        position: absolute;
        right: 4vw;
        font-size: 25px;
    }
`