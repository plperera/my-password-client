import styled from "styled-components"
import { AiOutlineClose } from 'react-icons/ai';
import Button from "../../../../common/form/Button";
import { useCustomForm } from "../../../../hooks/useCustomForms";

export default function Filter ({setShowOverContainer}) {
    const [form, handleForm] = useCustomForm()
    return(
        <Container>
            <SubContainer>

                <UpperContainer>
                    <h1>{"Filtrar"}</h1>
                    <AiOutlineClose onClick={() => setShowOverContainer(false)}/>
                </UpperContainer>

                <MiddleContainer>
                    <OrderByContainer>
                        <div>
                            <h2>{"Ordenar por:"}</h2>
                            <Select 
                                placeholder="Parcelas"   
                                type="text" 
                                name={"orderBy"} 
                                value={form?.orderBy} 
                                onChange={handleForm}
                            >
                                <option>{"Mais Recentes"}</option>
                                <option>{"Mais Antigos"}</option>
                                <option>{"Senhas mais Fortes"}</option>
                                <option>{"Senhas mais FRACAS"}</option>
                            </Select>
                        </div>
                        <div>
                            <h2>{"Selecione o Tipo: "}</h2>
                            <Select 
                                placeholder="Parcelas"   
                                type="text" 
                                name={"typeFilter"} 
                                value={form?.typeFilter} 
                                onChange={handleForm}
                            >
                                <option>{"Login"}</option>
                                <option>{"Cartão"}</option>
                                <option>{"Outro"}</option>
                            </Select>
                        </div>
                    </OrderByContainer>

                    <ButtonContainer>
                        <Button 
                            width={"100%"} 
                            height={"55px"}
                            background={"#d4ed6cff !important"}
                            backgroundhover={"#C4ED6C !important"}
                        >{"Filtrar"}</Button>
                    </ButtonContainer>
                </MiddleContainer>

            </SubContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: absolute;
    background-color: #131313A2;
    z-index: 2;
    display: flex;
    align-items: start;
    justify-content: center;
    padding-top: 2vh;
`
const SubContainer = styled.div`
    width: 28%;
    height: auto;
    right: 30vw;
    background-color: #FAFAFA;
    z-index: 3;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
`
const UpperContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2vw;
    color: #052E1B;
    h1 {
        font-size: 31px;
        font-weight: 600;
    }
    svg {
        font-size: 32px;
        cursor: pointer;
        margin-right: -2px;
    }
`
const MiddleContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    padding-top: 2vh;
    row-gap: 1.4vh;
    padding-bottom: 25px;
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: left;
    justify-content: left;
    margin-top: 1vh;
    padding: 0 2vw;
`
const OrderByContainer = styled.div`
    width: 100%;
    height: 100px;
    padding: 0 2vw;
    display: flex;
    justify-content: space-between;
    > div {
        width: 48%;
    }
    div > h2 { 
        font-size: 14px;
        margin-bottom: 5px;
    }
`
const Select = styled.select`
    width: 100%;
    height: 60px;
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px 10px;
    background-color: #fff;
    font-size: 17px;
    color: #171717A8;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    &:focus {
        border: 2px solid #094B2C;
    }

    &:disabled {
        opacity: 0.5;
    }
`;
