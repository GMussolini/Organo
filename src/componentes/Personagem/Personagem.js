import './Personagem.css'

export const Personagem = (props) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{background: props.corDeFundo}}>
                <img className='img' src={props.personagem.imagem} alt={props.personagem.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.personagem.nome}</h4>
                <h5>{props.personagem.poder}</h5>
            </div>
        </div>
    )
}