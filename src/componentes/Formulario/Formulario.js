import './Formulario.css'
import { CampoTexto } from "../CampoTexto/CampoTexto";
import { ComboBox } from '../ComboBox/ComboBox';
import { Botao } from '../Botao/Botao';
import { useState } from 'react';
export const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [poder, setPoder] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const OnSalvar = (e) => {
        e.preventDefault()

        props.aoPersonagemCadastrado({
            nome: nome,
            poder: poder,
            imagem: imagem,
            time: time
        })

        setNome('')
        setPoder('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={OnSalvar}>
                <h2>Crie um novo personagem</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    valor={nome}
                    placeholder="Digite o nome do personagem"
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Poder"
                    valor={poder}
                    placeholder="Digite o poder do personagem"
                    aoAlterado={valor => setPoder(valor)}
                />
                <CampoTexto
                    label="Foto"
                    valor={imagem}
                    placeholder="Digite o endereço da imagem do personagem"
                    aoAlterado={valor => setImagem(valor)}
                />
                <ComboBox
                    obrigatorio={true}
                    label="Time"
                    itens={props.times.map(x => x.nome)}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}