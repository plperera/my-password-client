import styled from "styled-components"
import SearchBar from "./SearchBar"
import Filter from "./Filter"
import PasswordCard from "./PasswordCard"
import { useState } from "react"
import { useEffect } from "react"
import NewPassword from "./NewPassword/NewPassword"

export default function MyPasswords () {

    const [ result, setResult ] = useState('')
    const [ showPasswordForms, setShowPasswordForms ] = useState(true)

    const PasswordsData = [
        {
            name: "YouTube",
            color: "#C75858",
            icon: "MdMonitor",
            passwordLevel: "",
            linkRef: "https://www.youtube.com/",
        },
        {
            name: "Notebook",
            color: "#58ADC7",
            icon: "MdComputer",
            passwordLevel: "",
            linkRef: "",
        },
        {
            name: "gmail",
            color: "#4E4E4E",
            icon: "AiOutlineMail",
            passwordLevel: "",
            linkRef: "https://mail.google.com/mail/",
        },
        {
            name: "Cartão Nubank",
            color: "#9B58C7",
            icon: "BsFillCreditCardFill",
            passwordLevel: "",
            linkRef: "",
        },
        {
            name: "Cartão Inter",
            color: "#C78A58",
            icon: "AiFillCreditCard",
            passwordLevel: "",
            linkRef: "",
        },
        {
            name: "CNH",
            color: "#4E4E4E",
            icon: "HiIdentification",
            passwordLevel: "",
            linkRef: "",
        },
        {
            name: "Celular",
            color: "#5863C7",
            icon: "MdOutlinePhoneIphone",
            passwordLevel: "",
            linkRef: "99935-1124",
        },
        {
            name: "Endereço",
            color: "#C75895",
            icon: "MdOutlineOtherHouses",
            passwordLevel: "",
            linkRef: "Apartamento",
        },
        {
            name: "SnapChat",
            color: "#FFFB0D",
            icon: "RiLockPasswordFill",
            passwordLevel: "",
            linkRef: "https://www.snapchat.com/pt-BR",
        },
    ];

    useEffect(() => {
        setResult(PasswordsData)
    }, [])

    return(
        <Container>     
            {showPasswordForms ? (<NewPassword setShowPasswordForms={setShowPasswordForms}/>):(<></>)}     
            <UpperContainer>
                <h1>{"Minhas Senhas"}</h1>
                <SearchBar/>
            </UpperContainer>

            <MiddleContainer>
                <Filter/>
                <NewPasswordButton onClick={() => setShowPasswordForms(true)}>{"Adicionar Senha"}</NewPasswordButton>
            </MiddleContainer>

            <BottomContainer>
                {PasswordsData ? (PasswordsData?.map(e => <PasswordCard PasswordData={e}/>)):(<></>)}
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