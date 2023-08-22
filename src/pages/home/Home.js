import styled from "styled-components"
import Content from "../../components/home/Content/Content"

export default function Home () {

    return(
        <Container>
            <Dashboard/>
            <Content/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 0;
`
