import { useState } from "react"
import styled from "styled-components"
import SelectIconAndColor from "./SelectIconAndColor"

export default function InformationType () {
    const [selectedType, setSelectedType ] = useState("Login")
    return(
        <Container>
            <OptionsContainer>
                <OptionCard onClick={() => setSelectedType("Login")} isSelected={selectedType === "Login"} style={{ borderRadius: "7px 0 0 7px"}}>{"Login"}</OptionCard>
                <OptionCard onClick={() => setSelectedType("Cartão")} isSelected={selectedType === "Cartão"}>{"Cartão"}</OptionCard>
                <OptionCard onClick={() => setSelectedType("Outro")} isSelected={selectedType === "Outro"} style={{ borderRadius: "0px 7px 7px 0px", border: "none"}}>{"Outro"}</OptionCard>
            </OptionsContainer>
            <SelectIconAndColor/>
        </Container>         
    )
}

const Container = styled.div`
    width: 80%;
    height: 40px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
`
const OptionsContainer = styled.div`
    width: 46%;
    height: 40px;
    border-radius: 15px;
    display: flex;
`
const OptionCard = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5vw;
    background-color: ${props => props.isSelected ? ("#0000000E"):("#00000023")};
    color: ${props => props.isSelected ? ("#052E1B"):("#00000042")};
    font-weight: ${props => props.isSelected ? ("600"):("600")};
    border-right: 3px solid #CEC8C2;
    cursor: pointer;
`
