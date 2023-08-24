import styled from "styled-components"
import Input from "../../common/form/Input"
import Button from "../../common/form/Button"
import { useCustomForm } from "../../hooks/useCustomForms"
import { toast } from "react-toastify"
import api from "../../services/API"
import UserContext from "../../context/UserContext"
import { useContext } from "react"
import useNavigateAndMoveUp from "../../hooks/useNavigateAndMoveUp"

export default function SignIn ({setHasLogin}) {

    const [form, handleForm] = useCustomForm()
    const { setUserData } = useContext(UserContext);
    const navigateAndMoveUp = useNavigateAndMoveUp();

    async function submitForms(){
        try {
            const body = {
                email: form?.email,
                password: form?.password,
            }
            const result = await api.CreateSession(body)
            if (result.status === 200){
                setUserData(result.data)
                toast.dark("Login realizado com sucesso!")
                navigateAndMoveUp({locate: ""})
                return
            }       
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <Container>
            <h1>{"WePass"}</h1>

            <Input 
                label="Email"     
                type="text" 
                name={"email"}
                width="80%"
                onChange={handleForm}
                value={form?.email}
            />

            <Input 
                label="Senha"     
                type="text" 
                name={"password"} 
                width="80%"
                onChange={handleForm}
                value={form?.password}
            />

            <ButtonContainer>
                <Button 
                    width={"80%"} 
                    height={"55px"}
                    background={"#d4ed6cff !important"}
                    backgroundhover={"#C4ED6C !important"}
                    onClick={() => submitForms()}
                >{"Entrar"}</Button>
            </ButtonContainer>
            
            <ButtonSignUp onClick={() => setHasLogin(false)}>{"Ainda não tem conta? Fazer um cadastro"}</ButtonSignUp>
        </Container>
    )
}
const Container = styled.div`
    width: 50%;
    min-height: 65vh;
    padding: 0 4vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2vh;
    h1 {
        font-size: 50px;
        margin-top: 11vh;
        margin-bottom: 3vh;
        color: #d4ed6cff;
    }
    @media (max-width: 1366px) {
        h1 {
            font-size: 42px;
        }
    }
    @media (max-width: 850px) {
        h1 {
            margin-top: 5vh;
        }
        width: 100%;
        min-height: 0vh;
    }
`
const ButtonContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3vh;
    @media (max-width: 850px) {
        margin-top: 2vh;
        width: 100%;
    }
`
const ButtonSignUp = styled.div`
    color: #31FF9F47;
    padding-bottom: 2px;
    width: auto;
    text-decoration: underline;
    cursor: pointer;
    margin-top: .4vh;
    @media (max-width: 1366px) {
        font-size: 13px;   
    }
`