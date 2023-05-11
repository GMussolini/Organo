import { Personagem } from '../Personagem/Personagem'
import './Time.css'

export const Time = (props) => {
    return (
        props.personagens.length > 0 && <section className='time' style={{ backgroundColor: props.corPrimaria }}>
            <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.personagens.map(x => <Personagem corDeFundo={props.corSecundaria} key={x} personagem={x} />)}
            </div>
        </section>
    )
}