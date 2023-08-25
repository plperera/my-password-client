import styled from "styled-components"
import { AiOutlineClose } from 'react-icons/ai';
import Button from "../../../../common/form/Button";
import api from "../../../../services/API";
import { toast } from "react-toastify";

export default function Filter ({setShowOverContainer, token, setFilteredItensData, form, handleForm, setForm}) {
    function formatType(type){
        const typeList = {
            Cartão: "card",
            Cartao: "card",
            cartao: "card",
            Login: "login",
            login: "login",
            otherNotes: "other",
            Outro: "other",
        }
        return typeList[type]
    }
    async function getFilteredItens(){
        try {
            const orderBy = form?.orderBy?.replace(/ /g, "")
            const orderByRef = {
                MaisRecentes: "orderByUpdatedAtDesc",
                MaisAntigos: "orderByUpdatedAtAsc",
                SenhasmaisFortes: "orderByPasswordStrongLeverAsc",
                SenhasmaisFRACAS: "orderByPasswordStrongLeverDesc"
            }
            const formatedIncludes = form?.includes?.map(e => formatType(e))
            const body = {
                includes: formatedIncludes.join("AND"),
                orderBy: orderByRef[orderBy] 
            }
            const result = await api.GetAllItemDataWithFilter({query: body, token})

            if(result.status === 200) {
                
                setFilteredItensData(result.data)
                setShowOverContainer(false)
                toast.dark("Filtro Aplicado!")
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    function customHandleForm({ target }) {
        if(target.value === undefined){
            return
        }
        let newIncludesArray = form?.includes || []

        if (newIncludesArray?.includes(target?.value)){
            newIncludesArray = newIncludesArray.filter(e => e !== target?.value)
            setForm({...form, includes: newIncludesArray})
            return
        }
        newIncludesArray.push(target.value)
        setForm({...form, includes: newIncludesArray})
        return
    }
    return(
        <Container>
            <SubContainer>

                <UpperContainer>
                    <h1 onClick={() => console.log(form)}>{"Filtrar"}</h1>
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
                            <MultipleSelect 
                                placeholder="Parcelas"   
                                type="text" 
                                name={"includes"} 
                                value={form?.includes} 
                                onChange={customHandleForm}
                                multiple={true}
                            >
                                <option>{"Login"}</option>
                                <option>{"Cartão"}</option>
                                <option>{"Outro"}</option>
                            </MultipleSelect>
                        </div>
                    </OrderByContainer>

                    <ButtonContainer>
                        <Button 
                            width={"100%"} 
                            height={"55px"}
                            background={"#d4ed6cff !important"}
                            backgroundhover={"#C4ED6C !important"}
                            onClick={() => getFilteredItens()}
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
    width: 22%;
    height: auto;
    right: 30vw;
    background-color: #FAFAFA;
    z-index: 3;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    @media (max-width: 1366px) {
        width: 35%;                
    }
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
    @media (max-width: 1366px) {
        h1 {
            font-size: 27px; 
        }   
        svg {
            font-size: 29px;
        }          
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
    @media (max-width: 1366px) {
        row-gap: 5vh;          
    }
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
    height: 240px;
    padding: 0 2vw;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    row-gap: 2vh;
    > div {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    div > h2 { 
        width: 90%;
        font-size: 14px;
        margin-bottom: 5px;
        @media (max-width: 1366px) {
            font-size: 16px;        
        }
    }
    @media (max-width: 1366px) {
        row-gap: 4vh;      
    }
`
const Select = styled.select`
    width: 90%;
    height: 60px;
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px 10px;
    background-color: #fff;
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
const MultipleSelect = styled(Select)`
    height: 120px;
    font-size: 17px;
    
    &:hover {
        border-color: #082a20;
    }

    &:focus {
        outline: none;
    }
    
    option {
        background-color: none;
        margin-bottom: 7px;
        padding: 4px 8px;
        &:hover {
            background-color: #e0e0e0;
        }

        &:checked {
            border-left: 4px solid #66bb6a;
            background-color: #DADADA59;
            color: #171717A8;
            font-size: 17px;
            font-weight: 600;
        }
        @media (max-width: 1366px) {
            padding: 6px 8px;  
        }
    }
    @media (max-width: 1366px) {
        height: 130px; 
    }
    
`