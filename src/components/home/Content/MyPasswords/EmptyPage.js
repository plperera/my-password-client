import styled from "styled-components"

export default function EmptyPage () {
    return(
        <Container>          
            {"Nenhuma senha encontrada."} 
        </Container>
    )
}
const Container = styled.div`
    width: 80vw;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fefaf6;
    font-size: 38px;
    font-weight: 700;
    color: #CECAC6;
    user-select: none;
    border-radius: 15px;
    @media (max-width: 850px) {
        font-size: 25px;
        text-align: center;
        height: 200px;  
    }
`