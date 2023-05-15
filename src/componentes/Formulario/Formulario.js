import './Formulario.css'
import { v4 as uuidv4 } from 'uuid';
import { Campo } from "../Campo/Campo";
import { ComboBox } from '../ComboBox/ComboBox';
import { Botao } from '../Botao/Botao';
import { useState } from 'react';
export const Formulario = ({aoPersonagemCadastrado, aoTimeCadastrado, times }) => {

    const [nome, setNome] = useState('')
    const [poder, setPoder] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const OnSalvarPersonagem = (e) => {
        e.preventDefault()

        aoPersonagemCadastrado({
            id: uuidv4(),
            favorito: false,
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

    const OnSalvarTime = (e) => {
        e.preventDefault()

        aoTimeCadastrado({
            id: uuidv4(),
            nome: nomeTime,
            cor: corTime
        })

        setNomeTime('')
        setCorTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={OnSalvarPersonagem}>
                <h2>Crie um novo personagem</h2>
                <Campo
                    label="Nome"
                    valor={nome}
                    placeholder="Digite o nome do personagem"
                    aoAlterado={valor => setNome(valor)}
                    obrigatorio
                />
                <Campo
                    label="Poder"
                    valor={poder}
                    placeholder="Digite o poder do personagem"
                    aoAlterado={valor => setPoder(valor)}
                    obrigatorio
                />
                <Campo
                    label="Foto"
                    valor={imagem}
                    placeholder="Digite o endereço da imagem do personagem"
                    aoAlterado={valor => setImagem(valor)}
                    obrigatorio
                />
                <ComboBox
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    obrigatorio
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={OnSalvarTime}>
                <h2>Crie um novo time</h2>
                <Campo
                    label="Nome"
                    valor={nomeTime}
                    placeholder="Digite o nome do time"
                    aoAlterado={valor => setNomeTime(valor)}
                    obrigatorio
                />
                <Campo
                    label="Cor"
                    valor={corTime}
                    type='color'
                    placeholder="Digite a cor do time"
                    aoAlterado={valor => setCorTime(valor)}
                    obrigatorio
                />
                <Botao>
                    Criar Novo Time
                </Botao>
            </form>
        </section>
    )
}