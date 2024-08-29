
import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import { MainContent } from "./style/styled";
import { listaProdutos } from "./listaProdutos";

export default function App(){

  return(
    <div>
      
      <Cabecalho listaProps={listaProdutos}/>
      <MainContent>
        <Outlet/>
      </MainContent>
      <Rodape/>
      
    </div>
  );
}