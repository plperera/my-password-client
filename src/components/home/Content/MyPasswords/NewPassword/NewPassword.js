import styled from "styled-components"
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import InputDark from "../../../../../common/form/InputDark";
import { useState } from "react";
import { useEffect } from "react";
import PasswordValidation from "./PasswordValidation";
import InformationType from "./InformationType";
import Button from "../../../../../common/form/Button";

export default function NewPassword ({setShowPasswordForms}) {
    const [form, handleForm, setForm] = useCustomForm()
    const [ showPassword, setShowPassword ] = useState(false)

    const [ validation, setValidation ] = useState({
        minLength: false,
        hasDigit: false,
        hasLowercase: false,
        hasUppercase: false,
        hasSpecialCharacter: false
    })

    useEffect(() => {
        console.log(form)
    }, [form])

    function handleValidation(){
        const minLength = form?.password?.length >= 6;
        const hasDigit = /[0-9]/.test(form?.password);
        const hasLowercase = /[a-z]/.test(form?.password);
        const hasUppercase = /[A-Z]/.test(form?.password);
        const hasSpecialCharacter = /[!@#$%^&*()\-+]/.test(form?.password);

        setValidation({
            minLength,
            hasDigit,
            hasLowercase,
            hasUppercase,
            hasSpecialCharacter
        })
          
    }

    useEffect(() => {handleValidation()}, [form?.password])

    return(
        <Container>
            <SubContainer>

                <UpperContainer>
                    <h1>{"Adicionar Senha"}</h1>
                    <AiOutlineClose onClick={() => setShowPasswordForms(false)}/>
                </UpperContainer >

                <MiddleContainer>

                    <InformationType setForm={setForm} form={form}/>

                    {form?.type === "Login" ? (
                        <>
                            <InputDark 
                            label="Nome / Apelido"     
                            type="text" 
                            name={"name"} 
                            width="80%"
                            onChange={handleForm}
                            value={form?.name}
                            />
                            <InputDark 
                                label="Link / Referência"     
                                type="text" 
                                name={"ref"} 
                                width="80%"
                                onChange={handleForm}
                                value={form?.ref}
                            />
                            <InputDark 
                                label="Email"     
                                type="text" 
                                name={"email"} 
                                width="80%"
                                onChange={handleForm}
                                value={form?.email}
                            />
                            <InputDark 
                                label="Senha"     
                                type={showPassword ? ("text"):("password")} 
                                name={"password"} 
                                width="80%"
                                onChange={handleForm}
                                value={form?.password}
                            />

                            <PasswordIconContainer onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? (<BsFillEyeSlashFill/>):(<BsFillEyeFill/>)}
                            </PasswordIconContainer>

                            <PasswordValidation validation={validation}/>
                        </>
                    ):(
                        form?.type === "Cartão" ? (
                            <>
                                <InputDark 
                                label="Nome / Apelido / Título"     
                                type="text" 
                                name={"name"} 
                                width="80%"
                                onChange={handleForm}
                                value={form?.name}
                                />
                                <InputDark 
                                    label="Nome Impresso no Cartão"     
                                    type="text" 
                                    name={"cardOwner"} 
                                    width="80%"
                                    onChange={handleForm}
                                    value={form?.cardOwner}
                                />
                                <InputDark 
                                    label="Número do Cartão"     
                                    type="text" 
                                    name={"cardNumber"} 
                                    width="80%"
                                    onChange={handleForm}
                                    value={form?.cardNumber}
                                />
                                <InputDark 
                                    label="Senha do Cartão"     
                                    type={showPassword ? ("text"):("password")} 
                                    name={"cardPassword"} 
                                    width="80%"
                                    onChange={handleForm}
                                    value={form?.cardPassword}
                                />
                                <InputDark 
                                    label="CVC / Código de Segurança"     
                                    type="text" 
                                    name={"cvc"} 
                                    width="80%"
                                    onChange={handleForm}
                                    value={form?.cvc}
                                />
                                <InputDark 
                                    label="Data de Expiração"     
                                    type="text" 
                                    name={"expirationDate"} 
                                    width="80%"
                                    onChange={handleForm}
                                    value={form?.expirationDate}
                                />

                                <PasswordIconContainer onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? (<BsFillEyeSlashFill/>):(<BsFillEyeFill/>)}
                                </PasswordIconContainer>

                            </>
                        ):(
                            <>
                                <InputDark 
                                label="Nome / Apelido / Título"     
                                type="text" 
                                name={"name"} 
                                width="80%"
                                onChange={handleForm}
                                value={form?.name}
                                />
                                <InputDark 
                                    label="Anotação"     
                                    type="text" 
                                    name={"note"} 
                                    width="80%"
                                    onChange={handleForm}
                                    value={form?.note}
                                />
                            </>
                        )
                    )}

                    

                    <ButtonContainer>
                        <Button 
                            width={"100%"} 
                            height={"55px"}
                            background={"#d4ed6cff !important"}
                            backgroundhover={"#C4ED6C !important"}
                        >{"Criar"}</Button>
                    </ButtonContainer>

                </MiddleContainer>
            </SubContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    background-color: #131313A2;
    z-index: 2;
    display: flex;
    align-items: start;
    justify-content: center;
    padding-top: 2vh;
`
const SubContainer = styled.div`
    width: 50%;
    right: 30vw;
    background-color: #FAFAFA;
    z-index: 3;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
`
const UpperContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.2vw;
    color: #052E1B;
    h1 {
        font-size: 31px;
        font-weight: 600;
    }
    svg {
        font-size: 32px;
        cursor: pointer;
        margin-right: -2px;
    }
`
const MiddleContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    padding-top: 2vh;
    row-gap: 1.4vh;
    padding-bottom: 50px;
`
const PasswordIconContainer = styled.div`
    position: absolute;
    top: 42vh;
    right: 31vw;
    color: #052E1B;
    cursor: pointer;
    svg {
        font-size: 30px;
        user-select: none;
    }
`
const ButtonContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3vh;
`