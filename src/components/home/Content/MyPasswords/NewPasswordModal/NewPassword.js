import styled from "styled-components"
import { AiOutlineClose } from 'react-icons/ai';
import { useCustomForm } from "../../../../../hooks/useCustomForms";
import { useEffect } from "react";
import InformationType from "./InformationType";
import Button from "../../../../../common/form/Button";
import api from "../../../../../services/API";
import { toast } from "react-toastify";
import CardInputs from "../../../inputs/CardInputs";
import LoginInput from "../../../inputs/LoginInputs";
import OtherNotesInputs from "../../../inputs/OtherNotesInputs";

export default function NewPassword ({setShowOverContainer, token}) {
    const [form, handleForm, setForm] = useCustomForm()

    useEffect(() => {
        console.log(form)
    }, [form])

    const formsObj = {
        Cartão: <CardInputs handleForm={handleForm} form={form} setForm={setForm}/>,
        Login: <LoginInput handleForm={handleForm} form={form} setForm={setForm}/>,
        Outro: <OtherNotesInputs handleForm={handleForm} form={form} setForm={setForm}/>,
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
    function formatBody({type, obj}){
        if (type === "Cartão"){
            const body = {
                type: formatType(type),
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
        if (type === "Login"){
            const body = {
                type: formatType(type),
                name: obj?.name,
                ref: obj?.ref,
                email: obj?.email,
                password: obj?.password,
                passwordStrongLevel: obj?.strongLevel,
                color: obj?.color,
                iconName: obj?.iconName
            }
            return body
        }
        if (type === "Outro"){
            const body = {
                type: formatType(type),
                name: obj?.name,
                text: obj?.text,
                iconName: obj?.iconName,
                color: obj?.color,
            }
            return body
        }
        
        return {}
    }

    async function submitForms(){
        try {
            const body = formatBody({type: form?.type, obj: form})
            console.log(body)
            const result = await api.CreateNewItem({token, body})
            console.log(result)
            if (result.status === 201){
                toast.dark("Credencial salva com Sucesso")
                setShowOverContainer(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    

    return(
        <Container>
            <SubContainer>

                <UpperContainer>
                    <h1>{"Adicionar Senha"}</h1>
                    <AiOutlineClose onClick={() => setShowOverContainer(false)}/>
                </UpperContainer >

                <MiddleContainer>

                    <InformationType setForm={setForm} form={form}/>

                    {formsObj[form?.type]}

                    <ButtonContainer>
                        <Button 
                            width={"100%"} 
                            height={"55px"}
                            background={"#d4ed6cff !important"}
                            backgroundhover={"#C4ED6C !important"}
                            onClick={() => submitForms()}
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
const ButtonContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3vh;
`