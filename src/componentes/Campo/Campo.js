import './Campo.css'

export const Campo = ({label, valor, type = 'text', placeholder, aoAlterado, obrigatorio = false}) => {
   
    return(
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input value={valor} type={type} onChange={e => aoAlterado(e.target.value)} required={obrigatorio} placeholder={placeholder}/>
        </div>
    )
}