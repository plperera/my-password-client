import styled from "styled-components"
import { AiOutlineClose } from 'react-icons/ai';
import Button from "../../../../../common/form/Button";
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../../../../services/API";
import { BsFillTrashFill } from 'react-icons/bs';
import { toast } from "react-toastify";
import CopyLoginInputs from "../../../inputs/CopyLoginInputs";
import CopyCardInputs from "../../../inputs/CopyCardInputs";
import CopyOtherNotesInputs from "../../../inputs/CopyOtherNotesInputs";

export default function PasswordExpanded ({setShowOverContainer, itemId, itemType, setPasswordSelected, token, refresh, setRefresh}) {
    const [ form, handleForm, setForm ] = useCustomForm()
    const [ itemData, setItemData ] = useState(false)
    const [ editMode, setEditMode ] = useState(false)

    const formsObj = {
        card: <CopyCardInputs editMode={editMode} form={form} handleForm={handleForm} setForm={setForm} itemData={itemData}/>,
        login: <CopyLoginInputs editMode={editMode} form={form} handleForm={handleForm} setForm={setForm} itemData={itemData}/>,
        other: <CopyOtherNotesInputs editMode={editMode} form={form} handleForm={handleForm} setForm={setForm} itemData={itemData}/>
    }
    
    function formatType(type){
        const typeList = {
            Cartão: "card",
            Cartao: "card",
            cartao: "card",
            Login: "login",
            login: "login",
            otherNotes: "other",
            Outro: "other",
        }
        return typeList[type]
    }
    async function getItemData(){
        try {
            console.log(itemType)
            const body = {
                type: formatType(itemType),
                itemId: itemId
            }
            console.log(body)
            const result = await api.GetItemData({query: body, token})
            console.log(result)
            if (result.status ===  200){
                setItemData(result.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    function handleButton(){

        if (editMode) {
            submitForm()
            return
        }
        setEditMode(true)
        return
    }
    function inicializeValuesByType(){
        const formatedType = formatType(itemType)
        if (formatedType === "card"){
            const body = {
                type: formatedType,
                name: itemData?.name,
                ownerName: itemData?.ownerName,
                number: itemData?.number,
                password: itemData?.password,
                securityCode: itemData?.securityCode,
                expirationDate: itemData?.expirationDate,
                iconName: itemData?.iconName,
                issuer: itemData.issuer,
                color: itemData?.color
            }
            return body
        }
        if (formatedType === "login"){
            const body = {
                type: formatedType,
                name: itemData?.name,
                ref: itemData?.ref,
                email: itemData?.email,
                password: itemData?.password,
                passwordStrongLevel: itemData?.strongLevel,
                color: itemData?.color,
                iconName: itemData?.iconName
            }
            return body
        }
        if (formatedType === "other"){
            const body = {
                type: formatedType,
                name: itemData?.name,
                text: itemData?.text,
                iconName: itemData?.iconName,
                color: itemData?.color,
            }
            return body
        }
    }
    async function submitForm(){
        try {
            const body = formatBody({type: formatType(itemType), obj: form})
            console.log(form)
            const result = await api.UpdateNewItem({body, token})
            if (result.status === 200){
                toast.dark("Item Atualizado com Sucesso")
                setRefresh(refresh + 1)
                setEditMode(false)
            }
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    async function submitDeleteForm(){
        try {
            const body = {                
                itemId: itemData?.id,
                type: formatType(itemType),
            }
            const result = await api.DeleteItem({body, token})
            if (result.status === 200){
                toast.dark("Item removido com Sucesso")
                setRefresh(refresh + 1) 
                setShowOverContainer(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
    function formatBody({type, obj}){
        if (type === "card"){
            const body = {
                itemId: itemData.id,
                type: type,
                name: obj?.name,
                ownerName: obj?.ownerName,
                number: obj?.number,
                password: obj?.password,
                securityCode: obj?.securityCode,
                expirationDate: obj?.expirationDate,
                iconName: obj?.iconName,
                issuer: "visa",
                color: obj?.color
            }
            return body
        }
        if (type === "login"){
            const body = {
                itemId: itemData.id,
                type: type,
                name: obj?.name,
                ref: obj?.ref,
                email: obj?.email,
                password: obj?.password,
                passwordStrongLevel: obj?.strongLevel.toLowerCase(),
                color: obj?.color,
                iconName: obj?.iconName
            }
            return body
        }
        if (type === "other"){
            const body = {
                itemId: itemData.id,
                type: type,
                name: obj?.name,
                text: obj?.text,
                iconName: obj?.iconName,
                color: obj?.color,
            }
            return body
        }
        return {}
    }

    useEffect(() => {
        getItemData()
    }, [refresh])

    useEffect(() => {
        const body = inicializeValuesByType()
        setForm({ ...body })
    }, [itemData])

    return(
        <Container>
            <SubContainer>
                {itemData ? (
                    <>
                        <UpperContainer>
                            <h1>{itemData?.name}</h1>
                            <AiOutlineClose onClick={() => setShowOverContainer(false)}/>
                        </UpperContainer>

                        <MiddleContainer>

                            {formsObj[formatType(itemType)]}
                            

                            <ButtonContainer>
                                <Button
                                    width={"60%"} 
                                    height={"55px"}
                                    background={editMode ? ("#8CED6C !important"):("#6CEDBB !important")}
                                    backgroundhover={editMode ? ("#4DDD52 !important"):("#6CDEED !important")}
                                    onClick={() => handleButton()}
                                >{editMode ? ("Salvar"):("Editar")}</Button>

                                <DeleteButton onClick={() => submitDeleteForm()}>
                                    <BsFillTrashFill/>
                                </DeleteButton>

                            </ButtonContainer>
                        </MiddleContainer>
                    </>
                ):(
                    <>
                    </>
                )}
                
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
    @media (max-width: 850px) {
        padding-top: 4vh;
    }
`
const SubContainer = styled.div`
    width: 50%;
    right: 30vw;
    height: auto;
    padding-bottom: 20px;
    background-color: #FAFAFA;
    z-index: 3;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    @media (max-width: 1366px) {
        max-height: 98vh;
        padding-bottom: 6px;
    } 
    @media (max-width: 850px) {
        width: 96%; 
    }
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
    @media (max-width: 1366px) {
        align-items: end;
        height: auto;
        padding-top: 2vh;
        h1 {
            font-size: 22px; 
        }
        svg {
            font-size: 28px; 
        }
    }
    @media (max-width: 850px) {
        padding: 0 4vw;
        padding-top: 2vh;
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
    column-gap: 1vw;
`
const DeleteButton = styled.div`
    width: 55px;
    height: 55px;
    border: 4px solid #CF4646;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
        font-size: 34px;
        user-select: none;
        color: #CF4646;
    }
    @media (max-width: 1366px) {

        svg {
            font-size: 28px; 
        }
    }
`