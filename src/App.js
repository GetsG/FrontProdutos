import './App.css';
import Topo from "./components/Topo/Topo.jsx";
import Produto from './components/Produto/Produto.jsx';
import { retornarProdutos } from './servicos/apiProdutos.js';
import {useState} from "react";
import CadastroProduto from './components/CadastroProduto/CadastroProduto.jsx';
import Rodape from './components/Rodape/Rodape.jsx';

const listarProdutos = await retornarProdutos();


function App() {

const [menuAberto, setMenuAberto] = useState(false);

function abrirMenu(){
  setMenuAberto(!menuAberto);
}

  return (
    <div className={'container'}>
      <Topo/>

<div className={'main_content'}>
    <div className="description_button">
      <h1>Painel Administrativo de Produtos</h1>
      <button onClick={abrirMenu}>+ Novo produto</button>

      {menuAberto && (<div className='overlay'> <CadastroProduto setMenu={setMenuAberto}/> </div>)}
    </div>

    


    <div className='lista_produtos'>
      { 
    listarProdutos.map((produtos, index) => (
      <Produto key={index} descricao={produtos.description} image={produtos.imagem} price={produtos.value}/>
    ))
  } 
    </div>
     
     <Rodape/>
</div>
    

    </div>
  );
}

export default App;
