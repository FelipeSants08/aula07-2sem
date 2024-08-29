import { Header } from "../../style/styled";
import Menu from "../Menu/Menu";

export default function Cabecalho(props:{listaProps:listaProduto}){
  return(
    <Header>
      <h1>Cabeçalho</h1>
      <Menu/>
    </Header>
  );
}