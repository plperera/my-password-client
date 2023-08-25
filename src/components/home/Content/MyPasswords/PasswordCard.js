import styled from "styled-components"
import ICON_MAPPING from "../../../../common/icons/iconsObj";
import { RiLockPasswordFill } from 'react-icons/ri';
import { CgDanger } from 'react-icons/cg';
import { HiShieldCheck } from 'react-icons/hi';

export default function PasswordCard ({passwordData, setShowOverContainer, setPasswordSelected}) {
    const IconComponent = ICON_MAPPING[passwordData?.iconName]
    function handleSelect(){
        setPasswordSelected(passwordData)
        setShowOverContainer("showPasswordExpanded")
    }

    return(
        
        <Container color={passwordData?.color} onClick={() => handleSelect()}>  

            <IconContainer color={passwordData?.color}>
                {IconComponent ? (<IconComponent/>):(<RiLockPasswordFill/>)}
            </IconContainer>

            <TitleContainer>
                <Title>{passwordData?.name?.toUpperCase()}</Title>
            </TitleContainer>

            <LinkContainer>
                <h2>{passwordData?.linkRef}</h2>
            </LinkContainer>

            {passwordData?.passwordStrongLevel ? (
                <StrongLevelContainer isStrong={passwordData?.passwordStrongLevel === "forte"}>
                    <span>{`Senha ${passwordData?.passwordStrongLevel.toUpperCase()}`}</span>
                    {passwordData?.passwordStrongLevel === "forte" ? (<HiShieldCheck/>):(<CgDanger/>)}
                </StrongLevelContainer>
            ):(<></>)}
            
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
    background-color: #E7E7E7;
    user-select: none;
    cursor: pointer;
    border-left: 5px solid;
    border-color: ${props => props.color};
    position: relative;
    :hover {
        transform: translateY(-.6vh);
        background-color: #E7E7E7B3;
    }
    @media (max-width: 1366px) {
        width: 320px;                
    }    
    @media (max-width: 850px) {
       width: 100%;
       border-left: 8px solid;
       border-color: ${props => props.color};
    }
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
        @media (max-width: 850px) {
            font-size: 40px;
        }
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
const StrongLevelContainer = styled.div`
    position: absolute;
    width: auto;
    height: 25px;
    background-color: ${props => props.isStrong ? ("#39AD3B00"):("#BE4949")};
    right: 8px;
    top: 10px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    column-gap: 8px;
    padding: 2px 10px;
    span {
        font-size: 10px;
        color: #FFFFFF;
        display: ${props => props.isStrong ? ("none"):("initial")};
    }
    svg {
        font-size: ${props => props.isStrong ? ("30px"):("20px")};;        
        color: ${props => props.isStrong ? ("#18842C"):("#FFFFFF")};
    }
`