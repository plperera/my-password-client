import styled from "styled-components"
import { FaWindowClose } from 'react-icons/fa';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import InputDark from "../../../../../common/form/InputDark";
import { useState } from "react";
import { useEffect } from "react";
import PasswordValidation from "./PasswordValidation";

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
        console.log(validation)
    }, [validation])

    function handlePassword({ target: { value, name } }){

        const minLength = value?.length >= 6;
        const hasDigit = /[0-9]/.test(value);
        const hasLowercase = /[a-z]/.test(value);
        const hasUppercase = /[A-Z]/.test(value);
        const hasSpecialCharacter = /[!@#$%^&*()\-+]/.test(value);

        setValidation({
            minLength,
            hasDigit,
            hasLowercase,
            hasUppercase,
            hasSpecialCharacter
        })
        
        setForm({ ...form, [name]: value });
          
    }

    useEffect(() => {

    }, [form])

    // {
    //     name: "YouTube",
    //     color: "#C75858",
    //     icon: "MdMonitor",
    //     passwordLevel: "",
    //     linkRef: "https://www.youtube.com/",
    // },
    return(
        <Container>
            <SubContainer>

                <UpperContainer onClick={() => setShowPasswordForms(false)}>
                    <h1>{"Adicionar Senha"}</h1>
                    <FaWindowClose/>
                </UpperContainer>

                <MiddleContainer>
                    <InputDark 
                        label="Nome"     
                        type="text" 
                        name={"name"} 
                        width="80%"
                        onChange={handleForm}
                        value={form?.name}
                    />
                    <InputDark 
                        label="Senha"     
                        type={showPassword ? ("text"):("password")} 
                        name={"password"} 
                        width="80%"
                        onChange={handlePassword}
                        value={form?.password}
                    />
                    <PasswordIconContainer onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (<BsFillEyeSlashFill/>):(<BsFillEyeFill/>)}
                    </PasswordIconContainer>

                    <PasswordValidation validation={validation}/>

                </MiddleContainer>

                <BottomContainer></BottomContainer>
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
    align-items: center;
    justify-content: center;
`
const SubContainer = styled.div`
    width: 50%;
    right: 30vw;
    background-color: #FCF5EC;
    z-index: 3;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
`
const UpperContainer = styled.div`
    width: 100%;
    height: 100px;
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
        font-size: 40px;
        cursor: pointer;
    }
`
const MiddleContainer = styled.div`
    width: 100%;
    height: 700px;
    border: 1px solid blue;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    padding-top: 2vh;
    row-gap: 1.4vh;
`
const BottomContainer = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid green;
`
const PasswordIconContainer = styled.div`
    position: absolute;
    top: 27.3vh;
    right: 31vw;
    color: #052E1B;
    cursor: pointer;
    svg {
        font-size: 30px;
        user-select: none;
    }
`