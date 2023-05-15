import { Personagem } from '../Personagem/Personagem'
import './Time.css'
import hexToRgba from 'hex-to-rgba';


export const Time = ({ personagens, cor, alterandoCor, id, nome, aoDeletar, aoFavoritar }) => {
    return (
        personagens.length > 0 && <section className='time' style={{ background: 'url(imagens/fundo.png)', backgroundColor: hexToRgba(cor, 0.6) }}>
            <input type='color' value={cor} onChange={e => alterandoCor(e.target.value, id)} className='input-cor' />
            <h3 style={{ borderColor: cor }}>{nome}</h3>
            <div className='colaboradores'>
                {personagens.map(x => {
                    return (
                        <Personagem
                            corDeFundo={cor}
                            key={x} personagem={x}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                }
                )}
            </div>
        </section>
    )
}