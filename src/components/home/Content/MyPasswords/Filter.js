import styled from "styled-components"

export default function Filter () {
    return(
        <Container>
            {"Filtrar"}
        </Container>
    )
}

const Container = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: #D9D9D9;
    user-select: none;
    cursor: pointer;
`