import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

const useApp = () => {

    const timesDefault = [
        {
            id: uuidv4(),
            nome: 'Duelista',
            cor: '#FDE7E8'
        },
        {
            id: uuidv4(),
            nome: 'Controladores',
            cor: '#FAE9F5',
        },
        {
            id: uuidv4(),
            nome: 'Iniciadores',
            cor: '#E8F8FF',
        },
        {
            id: uuidv4(),
            nome: 'Sentinelas',
            cor: '#D9F7E9',
        },
    ]

    const [times, setTimes] = useState([...timesDefault])

    const [personagens, setPersonagens] = useState([])

    const aoNovoPersonagemAdicionado = (personagem) => {
        console.log(personagem)

        setPersonagens([...personagens, personagem])

        console.log(personagens)

    }

    const aoNovoTimeAdicionado = (time) => {
        console.log(time)

        setTimes([...times, time])

        console.log(times)

    }

    const aoDeletarPersonagem = (id) => {
        setPersonagens(personagens.filter(x => x.id !== id))
    }

    function alterandoCorTime(cor, id) {
        setTimes(times.map(time => {
            if (time.id === id) {
                time.cor = cor;
            }

            return time;
        }))
    }

    function resolverFavoritar(id) {
        setPersonagens(personagens.map(personagem => {
            if (personagem.id === id) {
                personagem.favorito = !personagem.favorito;
            }

            return personagem;
        }))
    }

    return {
        times,
        personagens,
        aoNovoPersonagemAdicionado,
        aoDeletarPersonagem,
        alterandoCorTime,
        aoNovoTimeAdicionado,
        resolverFavoritar
    }
}
export default useApp;