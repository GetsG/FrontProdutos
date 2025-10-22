import axios from "axios";

export async function retornarProdutos(){

    const endpoint = "https://cadastroprodutos-1d6d.onrender.com/produtos";
    const listarProdutos = (await axios.get(endpoint)).data;

return listarProdutos;
}

export async function criarProduto(produto) {

    const endpoint = "https://cadastroprodutos-1d6d.onrender.com/produtos";
    const cadastrarProduto = await axios.post(endpoint, produto, {headers: { "Content-Type": "application/json" }}).data

return cadastrarProduto;
    
}

