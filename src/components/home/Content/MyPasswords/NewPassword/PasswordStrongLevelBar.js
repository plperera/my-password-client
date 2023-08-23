import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"

export default function PasswordStrongLevelBar ({validation}) {

    const levelRef = {
        0: {
            color: "#00000000",
            strongLevel: "Fraca",
        },
        1: {
            color: "#D30707",
            strongLevel: "Fraca",
        },
        2: {
            color: "#D35207",
            strongLevel: "Fraca",
        },
        3: {
            color: "#D3A307",
            strongLevel: "Fraca",
        },
        4: {
            color: "#D3BE07",
            strongLevel: "Fraca",
        },
        5: {
            color: "#74C40C",
            strongLevel: "FORTE",
        }
    } 
    const [ progressLevel, setProgressLevel ] = useState(0)

    function handleLevel(){
        let cont = 0
        Object.keys(validation).forEach(key => {
            if(validation[key]) {
                cont++
            }
        });
        setProgressLevel(cont)
    }

    useEffect(() => {
        handleLevel()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [validation])

    return(
        <Container>
            <Level hasProgress={progressLevel >= 1} color={levelRef[progressLevel].color} style={{ borderRadius: "50px 0 0 50px"}}></Level>
            <Level hasProgress={progressLevel >= 2} color={levelRef[progressLevel].color}></Level>
            <Level hasProgress={progressLevel >= 3} color={levelRef[progressLevel].color}></Level>
            <Level hasProgress={progressLevel >= 4} color={levelRef[progressLevel].color}></Level>
            <Level hasProgress={progressLevel >= 5} color={levelRef[progressLevel].color} style={{ borderRadius: "0px 50px 50px 0px"}}></Level>
            <TitleLevel color={levelRef[progressLevel].color}>{"Nível da senha: "}<span>{levelRef[progressLevel].strongLevel}</span></TitleLevel>
        </Container>         
    )
}

const Container = styled.div`
    width: 100%;
    height: 10px;
    background-color: #00000021;
    display: flex;
    border-radius: 50px;
    margin-top: 2vh;
    margin-bottom: 1vh;
    position: relative;
`
const Level = styled.div`
    width: calc(100% / 5);
    background-color: ${props => props.hasProgress ? (props.color):("#00000000")};
`
const TitleLevel = styled.div`
    width: 100%;
    font-size: 11px;
    font-weight: 700;
    position: absolute;
    top: -2vh;
    span { 
        color: ${props => props.color};
    }
`
