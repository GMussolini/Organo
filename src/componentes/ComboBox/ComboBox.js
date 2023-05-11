import './ComboBox.css'

export const ComboBox = (props) => {
    return (
        <div className='combo-box'>
            <label>{props.label}</label>
            <select onChange={e => props.aoAlterado(e.target.value) } value={props.valor} required={props.obrigatorio}>
                <option value=""></option>
                {props.itens.map(x => <option key={x}>{x}</option>)}
            </select>
        </div>
    )
}