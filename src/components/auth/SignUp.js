import styled from "styled-components"
import Input from "../../common/form/Input"
import Button from "../../common/form/Button"
import { useCustomForm } from "../../hooks/useCustomForms"

export default function SignUp ({setHasLogin}) {

    const [form, handleForm] = useCustomForm()

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
                type="text" 
                name={"password"} 
                width="80%"
                onChange={handleForm}
                value={form?.password}
            />

            <Input 
                label="Repita a Senha"     
                type="text" 
                name={"passwordVerify"} 
                width="80%"
                onChange={handleForm}
                value={form?.passwordVerify}
            />
            <ButtonContainer>
                <Button 
                    width={"60%"} 
                    height={"55px"}
                    background={"#d4ed6cff !important"}
                    backgroundhover={"#C4ED6C !important"}
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
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;
`
const ButtonSignUp = styled.div`
    color: #31FF9F47;
    padding-bottom: 2px;
    width: auto;
    text-decoration: underline;
    cursor: pointer;
    margin-top: .4vh;
`