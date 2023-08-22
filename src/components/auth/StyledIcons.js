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
`
const StyledFacebookIcon = styled(BsFacebook)`
    font-size: 35px;
    color: #052E1B;
    cursor: pointer;
`
const StyledInstagramIcon = styled(BsInstagram)`
    font-size: 35px;
    color: #052E1B;
    cursor: pointer;
`
const StyledLinkedInIcon = styled(BsLinkedin)`
    font-size: 35px;
    color: #052E1B;
    cursor: pointer;
`
const StyledYouTubeIcon = styled(BsYoutube)`
    font-size: 35px;
    color: #052E1B;
    cursor: pointer;
`