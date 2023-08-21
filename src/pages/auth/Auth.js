import styled from "styled-components"
import AuthImage from "../../assets/images/AuthImage.png"
import { useState } from "react"
import SignUp from "../../components/auth/SignUp"
import SignIn from "../../components/auth/SignIn"

export default function Auth () {

    const [hasLogin, setHasLogin] = useState(true)

    return(
        <Container>
            <SubContainer>
                <LeftContainer>
                    <img src={AuthImage} alt=""/>
                </LeftContainer>

                { hasLogin ?  (
                    <SignIn setHasLogin={setHasLogin}/>
                ):(
                    <SignUp setHasLogin={setHasLogin}/>
                )}
            </SubContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: start;
    justify-content: center;
`
const SubContainer = styled.div`
    width: 100%;
    min-height: 70vh;
    padding-top: 6vh;
    display: flex;   
    background-color: #052E1B;
`
const LeftContainer = styled.div`
    width: 50%;
    min-height: 70vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    img {
        max-width: 100%;
        max-height: 100%;
    }
`
