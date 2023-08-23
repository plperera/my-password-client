import styled from "styled-components"
import ICON_MAPPING from "../../../../common/icons/iconsObj";
import { RiLockPasswordFill } from 'react-icons/ri';

export default function PasswordCard ({PasswordData, setShowOverContainer, setPasswordSelected}) {
    const IconComponent = ICON_MAPPING[PasswordData?.icon]
    function handleSelect(){
        setPasswordSelected(PasswordData)
        setShowOverContainer("showPasswordExpanded")
    }
    return(
        
        <Container color={PasswordData?.color} onClick={() => handleSelect()}>  

            <IconContainer color={PasswordData?.color}>
                {IconComponent ? (<IconComponent/>):(<RiLockPasswordFill/>)}
            </IconContainer>

            <TitleContainer>
                <Title>{PasswordData?.name?.toUpperCase()}</Title>
            </TitleContainer>

            <LinkContainer>
                <h2>{PasswordData?.linkRef}</h2>
            </LinkContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 270px;
    height: 110px;
    padding: 0 10px;
    column-gap: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 20px;
    background-color: #D9D9D9;
    user-select: none;
    cursor: pointer;
    border-left: 5px solid;
    border-color: ${props => props.color};
    position: relative;
`
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 15px;
`
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(20% - 5px);
    svg {
        font-size: 35px;
        color: ${props => props.color};
        cursor: pointer;
    } 
`
const TitleContainer = styled.div`
    width: calc(80% - 5px);;
`
const LinkContainer = styled.div`
    width: calc(100% - 10px);
    display: flex;
    align-items: center;
    justify-content: right;
    font-size: 12px;
    padding-right: 10px;
    height: auto;
    position: absolute;
    bottom: 8px;
    color: #9B9B9B;
`