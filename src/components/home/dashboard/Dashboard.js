import styled from "styled-components"

export default function Dashboard ({OptionsObjArray, selected, setSelected}) {

    return(
        <Container>          
            <h1>{"Olá, Pedro"}</h1>
            <OptionsContainer>

                {
                    OptionsObjArray.map(e => 
                        <OptionCard onClick={() => setSelected(e)} isSelected={e?.name === selected?.name}>
                            {e?.name}
                        </OptionCard>
                    )
                }

            </OptionsContainer>
            <h3>{"Sair"}</h3>
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
`
const OptionsContainer = styled.div`
    width: 100%;
    height: 50vh;
    margin-left: 1.5vw;
    display: flex;
    flex-direction: column;
    row-gap: 2vh;
    user-select: none;
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
`