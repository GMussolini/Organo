import './ComboBox.css'

export const ComboBox = ({label, aoAlterado, valor, obrigatorio = false, itens}) => {
    return (
        <div className='combo-box'>
            <label>{label}</label>
            <select onChange={e => aoAlterado(e.target.value) } value={valor} required={obrigatorio}>
                <option value=""></option>
                {itens.map(x => <option key={x.id}>{x.nome}</option>)}
            </select>
        </div>
    )
}