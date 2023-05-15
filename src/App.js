import { useState } from "react";
import { Banner } from "./componentes/Banner/Banner";
import { Formulario } from "./componentes/Formulario/Formulario";
import { Time } from "./componentes/Time/Time";
import { Rodape } from "./componentes/Rodape/Rodape";
import useApp from "./componentes/hooks/useApp";


function App() {
  const { alterandoCorTime, aoDeletarPersonagem, aoNovoPersonagemAdicionado, aoNovoTimeAdicionado, resolverFavoritar, personagens, times } = useApp();

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times}
        aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}
        aoTimeCadastrado={time => aoNovoTimeAdicionado(time)}
      />
      {times.map(x =>
        <Time
          key={x.nome}
          nome={x.nome}
          id={x.id}
          cor={x.cor}
          personagens={personagens.filter(c => c.time === x.nome)}
          aoDeletar={aoDeletarPersonagem}
          alterandoCor={alterandoCorTime}
          aoFavoritar={e => resolverFavoritar(e)}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;
