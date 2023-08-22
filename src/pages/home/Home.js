import styled from "styled-components"
import Content from "../../components/home/Content/Content"
import Dashboard from "../../components/home/dashboard/Dashboard"
import { useState } from "react"
import MyPasswords from "../../components/home/Content/MyPasswords/MyPasswords"

export default function Home () {

    const OptionsObjArray = [
        {
            component: <MyPasswords/>,
            name: "Minhas Senhas"
        },
        {
            component: <>Minhas Etiquetas</>,
            name: "Minhas Etiquetas"
        },
        {
            component: <>Gerador de Senhas</>,
            name: "Gerador de Senhas"
        },
    ]

    const [ selected, setSelected ] = useState(OptionsObjArray[0])

    return(
        <Container>
            <Dashboard OptionsObjArray={OptionsObjArray} selected={selected} setSelected={setSelected}/>
            <Content selected={selected} setSelected={setSelected}/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
`
