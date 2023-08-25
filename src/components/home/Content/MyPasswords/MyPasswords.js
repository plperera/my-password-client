import styled from "styled-components"
import SearchBar from "./SearchBar"
import Filter from "./Filter"
import PasswordCard from "./PasswordCard"
import { useContext, useState } from "react"
import { useEffect } from "react"
import NewPassword from "./NewPasswordModal/NewPassword"
import PasswordExpanded from "./PasswordExpandedModal/PasswordExpanded"
import UserContext from "../../../../context/UserContext"
import api from "../../../../services/API"
import { useCustomForm } from "../../../../hooks/useCustomForms"
import EmptyPage from "./EmptyPage"

export default function MyPasswords () {

    const { userData } = useContext(UserContext);
    const [ showOverContainer, setShowOverContainer ] = useState(false)
    const [ passwordSelected, setPasswordSelected ] = useState(false)
    const [ itensData, setItensData ] = useState(undefined)
    const [ filteredItensData, setFilteredItensData ] = useState(undefined)
    const [ refresh, setRefresh ] = useState(0)
    const [form, handleForm, setForm] = useCustomForm({
        orderBy: "Mais Recentes",
        typeFilter: "Login",
    })

    async function getAllItens(){
        try {
            const result = await api.GetAllItens(userData?.token)
            console.log(result)
            if (result.status === 200){
                setItensData(result.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        if(filteredItensData){

            return
        }
        getAllItens()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])

    useEffect(() => {
        getAllItens()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])

    useEffect(() => {
        setItensData(filteredItensData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filteredItensData])

    // useEffect(() => {
    //     setResult(itensData)
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [itensData])

    function getType(item){
        if (item?.ownerName){
            return 'cartao'
        }
        if (item?.password){
            return 'login'
        }
        if (item?.text){
            return 'otherNotes'
        }
    }

    return(
        <Container>    
            {itensData ? (
            <>
                {showOverContainer === "showNewPassword" ? (
                    <NewPassword 
                        setShowOverContainer={setShowOverContainer} 
                        token={userData?.token}
                        refresh={refresh}
                        setRefresh={setRefresh}
                    />):(<></>)}     
                {showOverContainer === "showFilter" ? (
                    <Filter 
                        setShowOverContainer={setShowOverContainer} 
                        token={userData?.token} 
                        filteredItensData={filteredItensData} 
                        setFilteredItensData={setFilteredItensData}
                        form={form}
                        handleForm={handleForm}
                        setForm={setForm}
                    />):(<></>)}     
                {showOverContainer === "showPasswordExpanded" ? (
                    <PasswordExpanded  
                        setShowOverContainer={setShowOverContainer} 
                        setPasswordSelected={setPasswordSelected} 
                        itemId={passwordSelected?.id} 
                        itemType={getType(passwordSelected)} 
                        token={userData?.token}
                        refresh={refresh}
                        setRefresh={setRefresh}
                    />
                    ):(<></>)
                }     
                <UpperContainer>
                    <h1 onClick={() => setRefresh(refresh + 1)}>{"Minhas Senhas"}</h1>
                    <SearchBar/>
                </UpperContainer>

                <MiddleContainer>
                    <FilterButton onClick={() => setShowOverContainer("showFilter")}>{"Filtrar"}</FilterButton>
                    <NewPasswordButton onClick={() => setShowOverContainer("showNewPassword")}>{"Adicionar Senha"}</NewPasswordButton>
                </MiddleContainer>

                <BottomContainer>
                    {itensData?.length > 0 ? (itensData?.map(e => <PasswordCard passwordData={e} setShowOverContainer={setShowOverContainer} setPasswordSelected={setPasswordSelected}/>)):(<EmptyPage/>)}
                </BottomContainer>
            </>
            ):(<>123</>)}
            
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FCF5EC;
    padding-top: 8vh;
    
`
const UpperContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2vw;
    h1 {
        font-size: 40px;
        font-weight: 600;
        color: #052E1B;
    }
    @media (max-width: 1366px) {
        h1 {
            font-size: 30px; 
        }       
    }
`
const MiddleContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 3vh 2vw;
    display: flex;
    align-items: center;
    column-gap: 1.5vw;
`
const BottomContainer = styled.div`
    width: 100%;
    height: 20px;
    padding: 0 2vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 2vw;
    row-gap: 3vh;
    @media (max-width: 1366px) {
        grid-template-columns: 1fr 1fr 1fr;               
    }
`
const NewPasswordButton = styled.div`
    width: 280px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D4ED6C;
    border-radius: 5px;
    font-size: 20px;
    user-select: none;
    cursor: pointer;
    :hover {
        transform: translateY(-.6vh);
        background-color: #E0FF63;
    }
`
const FilterButton = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: #EBEBEB;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    :hover {
        transform: translateY(-.6vh);
        background-color: #EAE9E9;
    }
`