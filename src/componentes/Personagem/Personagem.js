import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Personagem.css'

export const Personagem = ({ personagem, aoDeletar, corDeFundo, aoFavoritar }) => {

    function Favoritar() {
        aoFavoritar(personagem.id)
    }

    const propsfavorito = {
        size: 25,
        onClick: Favoritar
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} color='red' value={personagem.id} onClick={() => aoDeletar(personagem.id)} className='deletar'></AiFillCloseCircle>
            <div className='cabecalho' style={{ background: corDeFundo }}>
                <img className='img' src={personagem.imagem} alt={personagem.nome} />
            </div>
            <div className='rodape'>
                <h4>{personagem.nome}</h4>
                <h5>{personagem.poder}</h5>
                <div className='favoritar'>
                    {personagem.favorito
                        ? <AiFillHeart {...propsfavorito} color='red' />
                        : <AiOutlineHeart {...propsfavorito} />
                    }
                </div>
            </div>
        </div>
    )
}