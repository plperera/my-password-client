import { useState } from "react"
import styled from "styled-components"
import InputDark from "../../../common/form/InputDark"
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import PasswordValidation from "../Content/MyPasswords/NewPasswordModal/PasswordValidation";
import { useEffect } from "react";

export default function LoginInput ({handleForm, form, setForm}) {
    const [ showPassword, setShowPassword ] = useState(false)
    const [ validation, setValidation ] = useState({
        minLength: false,
        hasDigit: false,
        hasLowercase: false,
        hasUppercase: false,
        hasSpecialCharacter: false
    })

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {handleValidation()}, [form?.password])

    return(
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

            <PasswordIconContainer onClick={ () => setShowPassword(!showPassword)}>
            {showPassword ? (<BsFillEyeSlashFill/>):(<BsFillEyeFill/>)}
            </PasswordIconContainer>

            <PasswordValidation validation={validation} setForm={setForm} form={form}/>
        </>
    )
}
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

