import styled from "styled-components"

export default function Content ({selected, setSelected}) {
    return(
        <Container>          
            {selected ? (
                selected.component
            ):(<></>)}
        </Container>
    )
}
const Container = styled.div`
    width: calc(100% - 16%);
    height: 100vh;
    background-color: #FCF5EC;
    @media (max-width: 850px) {
        width: 100%;
    }
`