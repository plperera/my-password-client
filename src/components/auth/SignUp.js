import styled from "styled-components"
import Input from "../../common/form/Input"
import Button from "../../common/form/Button"
import { useCustomForm } from "../../hooks/useCustomForms"
import api from "../../services/API"
import { toast } from "react-toastify"

export default function SignUp ({setHasLogin}) {

    const [form, handleForm] = useCustomForm()

    async function submitForms(){
        try {
            const body = {
                name: form?.name,
                email: form?.email,
                password: form?.password,
                passwordVerify: form?.passwordVerify
            }
            const result = await api.CreateAccount(body)
            if (result.status === 201){
                toast.dark("Cadastro realizado com sucesso!")
                setHasLogin(true)
            }
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Container>
            <h1>{"Cadastro"}</h1>

            <Input 
                label="Nome"     
                type="text" 
                name={"name"} 
                width="80%"
                onChange={handleForm}
                value={form?.name}
            />

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
                type="password"
                name={"password"} 
                width="80%"
                onChange={handleForm}
                value={form?.password}
            />

            <Input 
                label="Repita a Senha"     
                type="password"
                name={"passwordVerify"} 
                width="80%"
                onChange={handleForm}
                value={form?.passwordVerify}
            />
            <ButtonContainer>
                <Button 
                    width={"80%"} 
                    height={"55px"}
                    background={"#d4ed6cff !important"}
                    backgroundhover={"#C4ED6C !important"}
                    onClick={() => submitForms()}
                >{"Criar"}</Button>
            </ButtonContainer>
            <ButtonSignUp onClick={() => setHasLogin(true)}>{"Já tem um Login? Entrar!!"}</ButtonSignUp>
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
    row-gap: 3vh;
    h1 {
        font-size: 50px;
        margin-top: 2vh;
        margin-bottom: 2vh;
        color: #d4ed6cff;
    }
    @media (max-width: 1366px) {
        row-gap: 1.4vh;
        h1 {
            font-size: 42px;
            margin-bottom: 1vh;
            margin-top: -1vh;
        }
    }
    @media (max-width: 850px) {
        width: 100%;
        min-height: 0vh;
        h1 {
            font-size: 42px;
            margin-bottom: 2vh;
            margin-top: -1vh;
        }
    }
`
const ButtonContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;
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
    @media (max-width: 850px) {
        margin-top: 1vh;
    }
`