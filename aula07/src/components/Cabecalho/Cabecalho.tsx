import { Header } from "../../style/styled";
import Menu from "../Menu/Menu";
import { Lista } from "../../types";

export default function Cabecalho({listaProps}:{listaProps:Lista[]}){

  return(
    <Header>
      <h1>Cabeçalho</h1>

        <div>
          {listaProps.map((produto)=>(
            <p key={produto.id}>{produto.nome}</p>
          ))}
        </div>

      <Menu/>
    </Header>
  );
}