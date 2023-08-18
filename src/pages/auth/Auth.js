import styled from "styled-components"
import SecurityImage from "../../assets/images/Security.png"
import Input from "../../common/form/Input"
import Button from "../../common/form/Button"
import { useState } from "react"

export default function Auth () {

    const [hasLogin, setHasLogin] = useState(true)

    return(
        <Container>
            <SubContainer>
                <LeftContainer>
                    <h1>{"Seja Bem Vindo(a) ao MyPassword"}</h1>
                    <img src={SecurityImage} alt=""/>
                    <p>{"Tão Seguro e Fácil de usar que atua como um Cofre Digital para todas as suas informações mais importantes. Sabe aquelas anotações que você normalmente guardaria em um pedaço de papel ou em um caderno escondido? Agora, elas têm um novo lar seguro e acessível para elas."}</p>
                </LeftContainer>

                
                <RightContainer>

                    { !hasLogin ?  (
                        <>
                            <h1>{"Cadastro"}</h1>

                            <Input 
                                label="Nome"     
                                type="text" 
                                name={"name"} 
                                width="100%"
                            />

                            <Input 
                                label="Email"     
                                type="text" 
                                name={"email"} 
                                width="100%"
                            />                           

                            <Input 
                                label="Senha"     
                                type="text" 
                                name={"password"} 
                                width="100%"
                            />

                            <Input 
                                label="Repita a Senha"     
                                type="text" 
                                name={"password"} 
                                width="100%"
                            />

                            <Button 
                                width={"100%"} 
                                height={"55px"}
                                background={"#7b5ff1ff !important"}
                                backgroundhover={"#5C38EE !important"}
                            >{"Criar"}</Button>

                            <ButtonSignUp onClick={() => setHasLogin(!hasLogin)}>{"Já tem um Login? Entrar!!"}</ButtonSignUp>
                        </>
                    ):(
                        <>
                            <h1>{"Fazer Login"}</h1>

                            <Input 
                                label="Email"     
                                type="text" 
                                name={"email"} 
                                width="100%"
                            />

                            <Input 
                                label="Senha"     
                                type="text" 
                                name={"password"} 
                                width="100%"
                            />

                            <Button 
                                width={"100%"} 
                                height={"55px"}
                                background={"#7b5ff1ff !important"}
                                backgroundhover={"#5C38EE !important"}
                            >{"Entrar"}</Button>

                            <ButtonSignUp onClick={() => setHasLogin(!hasLogin)}>{"Ainda não tem conta? Fazer um cadastro"}</ButtonSignUp>
                        </>
                    )}

                </RightContainer>
            </SubContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 10vh 10vw;
    display: flex;
    align-items: start;
    justify-content: center;
`
const SubContainer = styled.div`
    width: 100%;
    min-height: 70vh;
    display: flex;   
`
const LeftContainer = styled.div`
    width: 50%;
    min-height: 70vh;
    background-color: #F0EFEF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 50px 0 0 50px;
    row-gap: 2vh;
    h1 {
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
    }
    img {
        max-width: 100%;
        max-height: 30vh;
    }
    p {
        color: #000000;
        font-size: 20px;
        letter-spacing: 0.4px;
        line-height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 95%;
    }
`
const RightContainer = styled.div`
    width: 50%;
    min-height: 70vh;
    background-color: #F8F8F8;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 0px 50px 50px 0px;
    row-gap: 2vh;
    padding: 0 3vw;
    padding-top: 8vh;
    h1 {
        font-size: 35px;
        font-weight: 700;
        margin-bottom: 2vh;
    }
`
const ButtonSignUp = styled.div`
    color: #686868;
    padding-bottom: 2px;
    width: auto;
    text-decoration: underline;
    cursor: pointer;
`
