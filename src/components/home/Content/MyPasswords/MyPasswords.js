import styled from "styled-components"
import SearchBar from "./SearchBar"
import Filter from "./Filter"
import PasswordCard from "./PasswordCard"
import { useState } from "react"
import { useEffect } from "react"
import NewPassword from "./NewPassword/NewPassword"
import PasswordExpanded from "./PasswordExpanded/PasswordExpanded"

export default function MyPasswords () {

    const [ result, setResult ] = useState('')
    const [ showOverContainer, setShowOverContainer ] = useState(false)
    const [ passwordSelected, setPasswordSelected ] = useState(false)

    const PasswordsData = [
        {
            name: "YouTube",
            email: "pedro@email.com",
            password: "1234567",
            color: "#C75858",
            icon: "MdMonitor",
            passwordLevel: "",
            ref: "https://www.youtube.com/",
        },
        {
            name: "Notebook",
            email: "pedro@email.com",
            password: "1234567",
            color: "#58ADC7",
            icon: "MdComputer",
            passwordLevel: "",
            ref: "",
        },
        {
            name: "gmail",
            email: "pedro@email.com",
            password: "1234567",
            color: "#4E4E4E",
            icon: "AiOutlineMail",
            passwordLevel: "",
            ref: "https://mail.google.com/mail/",
        },
        {
            name: "Cartão Nubank",
            email: "pedro@email.com",
            password: "1234567",
            color: "#9B58C7",
            icon: "BsFillCreditCardFill",
            passwordLevel: "",
            ref: "",
        },
        {
            name: "Cartão Inter",
            email: "pedro@email.com",
            password: "1234567",
            color: "#C78A58",
            icon: "AiFillCreditCard",
            passwordLevel: "",
            ref: "",
        },
        {
            name: "CNH",
            email: "pedro@email.com",
            password: "1234567",
            color: "#4E4E4E",
            icon: "HiIdentification",
            passwordLevel: "",
            ref: "",
        },
        {
            name: "Celular",
            email: "pedro@email.com",
            password: "1234567",
            color: "#5863C7",
            icon: "MdOutlinePhoneIphone",
            passwordLevel: "",
            ref: "99935-1124",
        },
        {
            name: "Endereço",
            email: "pedro@email.com",
            password: "1234567",
            color: "#C75895",
            icon: "MdOutlineOtherHouses",
            passwordLevel: "",
            ref: "Apartamento",
        },
        {
            name: "SnapChat",
            email: "pedro@email.com",
            password: "1234567",
            color: "#DAA208",
            icon: "RiLockPasswordFill",
            passwordLevel: "",
            ref: "https://www.snapchat.com/pt-BR",
        },
    ];

    useEffect(() => {
        setResult(PasswordsData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <Container>     
            {showOverContainer === "showNewPassword" ? (<NewPassword setShowOverContainer={setShowOverContainer}/>):(<></>)}     
            {showOverContainer === "showFilter" ? (<Filter setShowOverContainer={setShowOverContainer}/>):(<></>)}     
            {showOverContainer === "showPasswordExpanded" ? (<PasswordExpanded setShowOverContainer={setShowOverContainer} setPasswordSelected={setPasswordSelected} passwordData={passwordSelected}/>):(<></>)}     
            <UpperContainer>
                <h1>{"Minhas Senhas"}</h1>
                <SearchBar/>
            </UpperContainer>

            <MiddleContainer>
                <FilterButton onClick={() => setShowOverContainer("showFilter")}>{"Filtrar"}</FilterButton>
                <NewPasswordButton onClick={() => setShowOverContainer("showNewPassword")}>{"Adicionar Senha"}</NewPasswordButton>
            </MiddleContainer>

            <BottomContainer>
                {PasswordsData ? (PasswordsData?.map(e => <PasswordCard PasswordData={e} setShowOverContainer={setShowOverContainer} setPasswordSelected={setPasswordSelected}/>)):(<></>)}
            </BottomContainer>
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FCF5EC;
    padding-top: 8vh;
    
`
const UpperContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2vw;
    h1 {
        font-size: 40px;
        font-weight: 600;
        color: #052E1B;
    }
`
const MiddleContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 3vh 2vw;
    display: flex;
    align-items: center;
    column-gap: 1.5vw;
`
const BottomContainer = styled.div`
    width: 100%;
    height: 20px;
    padding: 0 2vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 2vw;
    row-gap: 3vh;
`
const NewPasswordButton = styled.div`
    width: 280px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D4ED6C;
    border-radius: 5px;
    font-size: 20px;
    user-select: none;
    cursor: pointer;
`
const FilterButton = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: #EBEBEB;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
`