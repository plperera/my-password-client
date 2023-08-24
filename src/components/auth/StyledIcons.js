import styled from "styled-components"
import { BsLinkedin, BsYoutube, BsInstagram, BsFacebook } from 'react-icons/bs';

export default function StyledIcons () {
    return(
        <Container>          
            <StyledInstagramIcon/>
            <StyledFacebookIcon/>
            <StyledLinkedInIcon/>
            <StyledYouTubeIcon/>    
        </Container>
    )
}
const Container = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2vh;
    @media (max-width: 850px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 2vh 0;
    }
`
const StyledFacebookIcon = styled(BsFacebook)`
    font-size: 35px;
    color: #052E1B;
    cursor: pointer;
    @media (max-width: 1366px) {
        font-size: 30px;
    }
`
const StyledInstagramIcon = styled(BsInstagram)`
    font-size: 35px;
    color: #052E1B;
    cursor: pointer;
    @media (max-width: 1366px) {
        font-size: 30px;
    }
`
const StyledLinkedInIcon = styled(BsLinkedin)`
    font-size: 35px;
    color: #052E1B;
    cursor: pointer;
    @media (max-width: 1366px) {
        font-size: 30px;
    }
`
const StyledYouTubeIcon = styled(BsYoutube)`
    font-size: 35px;
    color: #052E1B;
    cursor: pointer;
    @media (max-width: 1366px) {
        font-size: 30px;
    }
`