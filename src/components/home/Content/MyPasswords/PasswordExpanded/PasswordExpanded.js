import styled from "styled-components"
import { AiOutlineClose, AiOutlineCopy } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';
import Button from "../../../../../common/form/Button";
import InputDark from "../../../../../common/form/InputDark";
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import { useState } from "react";
import { useEffect } from "react";
import ICON_MAPPING from "../../../../../common/icons/iconsObj";

export default function PasswordExpanded ({setShowOverContainer, passwordData, setPasswordSelected}) {
    const [ form, handleForm, setForm ] = useCustomForm()
    const [ showPassword, setShowPassword ] = useState(false)
    const [ isloading, setIsloading ] = useState(false)
    const [ editMode, setEditMode ] = useState(false)
    const [ isCopied, setIsCopied ] = useState(
        {
            name: false,
            ref: false,
            email: false,
            password: false,
        }
    );
    const IconComponent = ICON_MAPPING[passwordData?.icon]

    useEffect(() => {
        setForm({
            name: passwordData?.name,
            ref: passwordData?.ref,
            email: passwordData?.email,
            password: passwordData?.password,
        })
    }, [])

    async function handleCopy({value, key}){

        if (isloading) return

        try {
            setIsloading(true)
            await navigator.clipboard.writeText(value); 
            setIsCopied({...isCopied, [key]: true});
            setTimeout(() => {
                setIsCopied({...isCopied, [key]: false})
                setIsloading(false)
            }, 800); 
        } catch (err) {
        console.error('Erro ao copiar o texto: ', err);
        }      
    }

    function handleButton(){

        if (editMode) {
            setEditMode(false)
            return
        }
        setEditMode(true)
        return
    }
    
    return(
        <Container>
            <SubContainer>
                <UpperContainer>
                    <h1>{passwordData?.name}</h1>
                    <AiOutlineClose onClick={() => setShowOverContainer(false)}/>
                </UpperContainer>

                <MiddleContainer>

                    <IconContainer color={passwordData?.color}>
                        <IconComponent/>
                    </IconContainer>

                    <InputWrapper>
                        <InputDark 
                            label="Nome / Apelido"     
                            type="text" 
                            name={"name"} 
                            width="80%"
                            onChange={handleForm}
                            value={form?.name}
                            events={editMode ? ("initial"):("none")}
                            background={editMode ? (""):("#A0A0A023 !important")}
                        />
                        <CopyIconContainer onClick={() => handleCopy({value: form?.name, key:"name"})} isCopied={isCopied?.name}> 
                            {isCopied?.name ? (<BsCheck/>):(<AiOutlineCopy/>)}
                        </CopyIconContainer>
                    </InputWrapper>

                    <InputWrapper>
                        <InputDark 
                            label="Link / Referência"     
                            type="text" 
                            name={"ref"} 
                            width="80%"
                            onChange={handleForm}
                            value={form?.ref}
                            events={editMode ? ("initial"):("none")}
                            background={editMode ? (""):("#A0A0A023 !important")}
                        />
                        <CopyIconContainer onClick={() => handleCopy({value: form?.ref, key:"ref"})} isCopied={isCopied?.ref}> 
                            {isCopied?.ref ? (<BsCheck/>):(<AiOutlineCopy/>)}
                        </CopyIconContainer>
                    </InputWrapper>
                    
                    <InputWrapper>
                        <InputDark 
                            label="Email"     
                            type="text" 
                            name={"email"} 
                            width="80%"
                            onChange={handleForm}
                            value={form?.email}
                            events={editMode ? ("initial"):("none")}
                            background={editMode ? (""):("#A0A0A023 !important")}
                        />
                        <CopyIconContainer onClick={() => handleCopy({value: form?.email, key:"email"})} isCopied={isCopied?.email}> 
                            {isCopied?.email ? (<BsCheck/>):(<AiOutlineCopy/>)}
                        </CopyIconContainer>
                    </InputWrapper>
                    
                    <InputWrapper>
                        <InputDark 
                            label="Senha"     
                            type={showPassword ? ("text"):("password")} 
                            name={"password"} 
                            width="80%"
                            onChange={handleForm}
                            value={form?.password}
                            events={editMode ? ("initial"):("none")}
                            background={editMode ? (""):("#A0A0A023 !important")}
                        />
                        <CopyIconContainer onClick={() => handleCopy({value: form?.password, key:"password"})} isCopied={isCopied?.password}> 
                            {isCopied?.password ? (<BsCheck/>):(<AiOutlineCopy/>)}
                        </CopyIconContainer>
                    </InputWrapper>
                    

                    <ButtonContainer>
                        <Button
                            width={"80%"} 
                            height={"55px"}
                            background={editMode ? ("#8CED6C !important"):("#6CEDBB !important")}
                            backgroundhover={editMode ? ("#4DDD52 !important"):("#6CDEED !important")}
                            onClick={() => handleButton()}
                        >{editMode ? ("Salvar"):("Editar")}</Button>
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
    min-height: 800px;
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
    padding: 0 2vw;
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
    padding-bottom: 25px;
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1vh;
    padding: 0 2vw;
`
const IconContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        color: ${props => props.color};
        font-size: 70px;
        padding: 10px;
        border-radius: 10px;
        background-color: #d9d9d9;

    }
`
const InputWrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
const CopyIconContainer = styled.div`
    position: absolute;
    width: 45px;
    height: 45px;
    right: 2.2vw;
    top: 1.3vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    border: 2px solid #052e1bff;
    border: ${props => props.isCopied ? ("3px solid #74C40C"):("2px solid #052e1bff")};
    color: ${props => props.isCopied ? ("#FFFFFF"):("#052e1bff")};
    background-color: ${props => props.isCopied ? ("#74C40C"):("#00000000")};
    
    user-select: none;
    :hover {
        border: 4px solid #74C40C;
    }
    svg {
        font-size: ${props => props.isCopied ? ("40px"):("30px")};
    }
`