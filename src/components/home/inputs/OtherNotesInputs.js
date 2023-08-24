import InputDark from "../../../common/form/InputDark"

export default function OtherNotesInputs({handleForm, form, setForm}) {
    return(
        <>
            <InputDark 
                label="Nome / Apelido / Título"     
                type="text" 
                name={"name"} 
                width="80%"
                onChange={handleForm}
                value={form?.name}
            />
            <InputDark 
                label="Anotação"     
                type="text" 
                name={"text"} 
                width="80%"
                onChange={handleForm}
                value={form?.text}
            />
        </>
    )
}