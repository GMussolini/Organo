import { useState } from "react";
import { Banner } from "./componentes/Banner/Banner";
import { Formulario } from "./componentes/Formulario/Formulario";
import { Time } from "./componentes/Time/Time";
import { Rodape } from "./componentes/Rodape/Rodape";


function App() {

  const times = [
    {
      nome: 'Duelista',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69',
    },
    {
      nome: 'Controladores',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF',
    },
    {
      nome: 'Iniciadores',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA',
    },
    {
      nome: 'Sentinelas',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278',
    },
  ]

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) =>{
    console.log(personagem)

    setPersonagens([...personagens, personagem])

    console.log(personagens)

  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times} aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}/>
      {times.map(x => <Time 
      key={x.nome} 
      nome={x.nome} 
      corPrimaria={x.corPrimaria} 
      corSecundaria={x.corSecundaria} 
      personagens={personagens.filter(c => c.time === x.nome)}/>)}
      <Rodape />
    </div>
  );
}

export default App;
