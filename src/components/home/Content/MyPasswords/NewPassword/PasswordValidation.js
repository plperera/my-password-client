import styled from "styled-components"
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import PasswordStrongLevelBar from "./PasswordStrongLevelBar";

export default function PasswordValidation ({validation, setForm, form}) {
    return(
        <Container>
            <PasswordStrongLevelBar validation={validation} setForm={setForm} form={form}/>
            <PasswordValidationLine isValid={validation?.hasSpecialCharacter}>
                {validation?.hasSpecialCharacter ? (<StyledCheck/>):(<StyledUnCheck/>)}
                <h3>{"A senha deve conter pelo menos um caractere especial. (!@#$%^&*()-+)"}</h3>
            </PasswordValidationLine>

            <PasswordValidationLine isValid={validation?.hasUppercase}>
                {validation?.hasUppercase ? (<StyledCheck/>):(<StyledUnCheck/>)}
                <h3>{"A senha deve conter pelo menos um caractere maiúsculo."}</h3>
            </PasswordValidationLine>
            

            <PasswordValidationLine isValid={validation?.hasLowercase}>
                {validation?.hasLowercase ? (<StyledCheck/>):(<StyledUnCheck/>)}
                <h3>{"A senha deve conter pelo menos um caractere minúsculo."}</h3>
            </PasswordValidationLine>

            <PasswordValidationLine isValid={validation?.minLength}>
                {validation?.minLength ? (<StyledCheck/>):(<StyledUnCheck/>)}
                <h3>{"A senha deve conter 6 caracteres"}</h3>
            </PasswordValidationLine>

            <PasswordValidationLine isValid={validation?.hasDigit}>
                {validation?.hasDigit ? (<StyledCheck/>):(<StyledUnCheck/>)}             
                <h3>{"A senha deve ao menos 1 dígito"}</h3>     
            </PasswordValidationLine>            
        </Container>         
    )
}

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: left;
    row-gap: 0.8vh;
`
const PasswordValidationLine = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.isValid ? ("#0425167E"):("#052E1B")};
    svg {
        margin-right: 0.4vw;
        font-size: 20px;
    }
`
const StyledCheck = styled(AiFillCheckCircle)`
    color: #74C40C;
`
const StyledUnCheck = styled(AiFillCloseCircle)`
    color: #CE3131;
`