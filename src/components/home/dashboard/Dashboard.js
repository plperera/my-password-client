import styled from "styled-components"
import api from "../../../services/API"
import UserContext from "../../../context/UserContext";
import { useContext } from "react";

export default function Dashboard ({OptionsObjArray, selected, setSelected, userData}) {
    const { setUserData } = useContext(UserContext);
    console.log(userData)
    async function Logout(){
        try {
            const response = await api.LogoutSession(userData?.token)
            console.log(response)
            setUserData({})
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <Container>          
            <h1>{`Olá, ${userData?.name}`}</h1>
            <h2>{`WePass`}</h2>
            <OptionsContainer>

                {
                    OptionsObjArray.map(e => 
                        <OptionCard onClick={() => setSelected(e)} isSelected={e?.name === selected?.name}>
                            {e?.name}
                        </OptionCard>
                    )
                }

            </OptionsContainer>
            <h3 onClick={() => Logout()}>{"Sair"}</h3>
        </Container>
    )
}
const Container = styled.div`
    width: 16%;
    min-height: 100vh;
    background-color: #052E1B;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
        display: flex;
        align-items: center;
        justify-content: left;
        width: 100%;
        padding: 3vh 1.5vw;
        font-size: 22px;
        color: #D4ED6C;
        cursor: pointer;
        user-select: none;
    }
    h2 {
        display: none;
    }
    h3 {
        display: flex;
        align-items: center;
        justify-content: left;
        width: 100%;
        padding: 3vh 1.5vw;
        font-size: 22px;
        color: #FFFFFF;
        cursor: pointer;
        user-select: none;
    }
    @media (max-width: 1366px) {
        h1 {
            font-size: 17px;
        }
        h3 {
            font-size: 22px;
        }
    }
    @media (max-width: 850px) {
        width: 100%;
        min-height: 10vh;
        max-height: 10vh;
        flex-direction: row;
        h1 {
            display: none;
        }
        h2 {
            width: 60%;
            display: flex;
            align-items: center; 
            justify-content: left;
            padding-left: 7vw;
            font-size: 24px;
            font-weight: 600;
            color: #D4ED6C;
        }
        h3 {
            width: 20%;
            font-size: 19px;
            font-weight: 600;
        }
    }
`
const OptionsContainer = styled.div`
    width: 100%;
    height: 50vh;
    margin-left: 1.5vw;
    display: flex;
    flex-direction: column;
    row-gap: 2vh;
    user-select: none;
    @media (max-width: 850px) {
        display: none;
    }
`
const OptionCard = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 0 1vw;
    border-radius: 15px 0 0 15px;
    background-color: ${props => props.isSelected ? ("#FCF5EC"):("#FCF5EC00")};
    color: ${props => props.isSelected ? ("#052E1B"):("#FCF5EC")};
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    @media (max-width: 1366px) {
        font-size: 16px;        
    }
`