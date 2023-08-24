import styled from "styled-components"
import AuthImage from "../../assets/images/AuthImage.png"
import { useState } from "react"
import SignUp from "../../components/auth/SignUp"
import SignIn from "../../components/auth/SignIn"
import StyledIcons from "../../components/auth/StyledIcons"

export default function Auth () {

    const [hasLogin, setHasLogin] = useState(true)

    return(
        <Container>
            <SubContainer>
                <LeftContainer>
                    <img src={AuthImage} alt=""/>
                </LeftContainer>

                { hasLogin ?  (
                    <SignIn setHasLogin={setHasLogin}/>
                ):(
                    <SignUp setHasLogin={setHasLogin}/>
                )}
            </SubContainer>
            <BottomContainer>
                <TextLeftContainer>
                    <h1>{"Menos Senhas, Mais Liberdade"}</h1>
                    <p>{"Segurança digital simplificada. Nosso gerenciador de senhas oferece proteção robusta e fácil de usar, eliminando as dores de cabeça associadas à gestão de múltipas senhas."}</p>
                </TextLeftContainer>
                <StyledIcons/>
            </BottomContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
`
const SubContainer = styled.div`
    width: 100%;
    min-height: 65vh;
    padding-top: 6vh;
    display: flex;   
    background-color: #052E1B;
`
const BottomContainer = styled.div`
    width: 100%;
    min-height: 29vh;
    display: flex;   
    background-color: #FCF5EC;
    justify-content: space-between;
    @media (max-width: 850px) {
        flex-direction: column;
        min-height: 35vh;
    }
`
const LeftContainer = styled.div`
    width: 50%;
    min-height: 65vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    img {
        max-width: 100%;
        max-height: 65vh;
    }
    @media (max-width: 850px) {
        display: none;
    }
`
const TextLeftContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-left: 4vw;
    padding-top: 4vh;
    row-gap: 3vh;
    h1 {
        font-size: 35px;
        width: 45%;
        font-weight: 600;
        color: #25D390;
        line-height: 45px;
    }
    p {
        font-size: 20px;
        font-weight: 600;
        color: #052E1B;
    }
    @media (max-width: 1366px) {
        width: 45%;
        h1 {
            width: 45%;
            font-size: 28px;
            line-height: 35px;
        }
        p {
            font-size: 16px;
        }
    }
    @media (max-width: 850px) {
        width: 100%;
        h1 {
            width: 60%;
        }
        p {
            width: 95%;
        }
    }
`
