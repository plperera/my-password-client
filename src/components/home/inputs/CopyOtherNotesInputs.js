import { useState } from "react"
import InputDark from "../../../common/form/InputDark"
import styled from "styled-components";
import { BsFillEyeFill, BsFillEyeSlashFill, BsCheck } from 'react-icons/bs';
import { AiOutlineCopy } from 'react-icons/ai';
import ICON_MAPPING from "../../../common/icons/iconsObj";
import SelectIconAndColor from "../Content/MyPasswords/NewPasswordModal/SelectIconAndColor";

export default function CopyOtherNotesInputs({editMode, form, handleForm, setForm, itemData}) {
    const [ showPassword, setShowPassword ] = useState(false)
    const [ isloading, setIsloading ] = useState(false)
    const IconComponent = ICON_MAPPING[itemData?.iconName]
    const [ isCopied, setIsCopied ] = useState(
        {
            name: false,
            ownerName: false,
            number: false,
            password: false,
            securityCode: false,
            expirationDate: false,
            iconName: false,
            issuer: "visa",
            color: false
        }
    );
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
    return(
        <>
            <IconContainer editMode={editMode}>
                {editMode ? (<SelectIconAndColor form={form} setForm={setForm}/>):(<StyledIcon color={itemData?.color}><IconComponent/></StyledIcon>)}
            </IconContainer>

            <InputWrapper>
                <InputDark 
                    label="Nome / Apelido / Título"     
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
                    label="Anotação"     
                    type="text" 
                    name={"text"} 
                    width="80%"
                    onChange={handleForm}
                    value={form?.text}
                    events={editMode ? ("initial"):("none")}
                    background={editMode ? (""):("#A0A0A023 !important")}
                />
                <CopyIconContainer onClick={() => handleCopy({value: form?.text, key:"text"})} isCopied={isCopied?.text}> 
                    {isCopied?.text ? (<BsCheck/>):(<AiOutlineCopy/>)}
                </CopyIconContainer>
            </InputWrapper>
        </>
    )
}
const IconContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h3 {
        font-size: 14px;
        color: #9D9D9D;
        text-decoration: underline;
        margin-top: 5px;
    }
`
const StyledIcon = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.color};
    font-size: 50px;
    padding: 10px;
    border-radius: 10px;
    background-color: #d9d9d9;
`
const InputWrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 1vh;
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
    @media (max-width: 1366px) {
        right: 1vw;
        top: 2vh;
    }
`