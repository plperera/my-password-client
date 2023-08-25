import { useState } from "react"
import styled from "styled-components"
import InputDark from "../../../common/form/InputDark"
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

export default function CardInputs ({handleForm, form, setForm}) {
    const [ showPassword, setShowPassword ] = useState(false)

    return(
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
                name={"ownerName"} 
                width="80%"
                onChange={handleForm}
                value={form?.ownerName}
            />
            <InputDark 
                label="Número do Cartão"     
                type="text" 
                name={"number"} 
                width="80%"
                onChange={handleForm}
                value={form?.number}
                mask="9999 9999 9999 9999"
            />
            <InputDark 
                label="Senha do Cartão"     
                type={showPassword ? ("text"):("password")} 
                name={"password"} 
                width="80%"
                onChange={handleForm}
                value={form?.password}
            />
            <InputDark 
                label="CVC / Código de Segurança"     
                type="text" 
                name={"securityCode"} 
                width="80%"
                onChange={handleForm}
                value={form?.securityCode}
            />
            <InputDark 
                label="Data de Expiração"     
                type="text" 
                name={"expirationDate"} 
                width="80%"
                onChange={handleForm}
                value={form?.expirationDate}
                mask="99/99"
            />

            <PasswordIconContainer onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (<BsFillEyeSlashFill/>):(<BsFillEyeFill/>)}
            </PasswordIconContainer>
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
    @media (max-width: 1366px) {
        top: 41.5vh;
        right: 31.5vw;
    } 
    @media (max-width: 850px) {
        top: 48.5vh;
        right: 16vw;
    }
`

