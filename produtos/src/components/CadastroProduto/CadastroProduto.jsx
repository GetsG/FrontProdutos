import estilos from "./CadastroProduto.module.css";
import { useState } from "react";
import { criarProduto } from "../../servicos/apiProdutos";

export default function CadastroProduto({setMenu}){

    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [imagem, setImagem] = useState(null);

    function toBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result.split(",")[1]); // tira o prefixo
            reader.onerror = reject;
            reader.readAsDataURL(file);
  });
}

    async function createProduct(e){
         e.preventDefault();

        const base64 = imagem ? await toBase64(imagem) : null;

        const novoProduto = {
        description,
        value,
        imagem: base64
    };


    await criarProduto(novoProduto);
    setMenu(false);
   
    setTimeout(() => window.location.reload(), 2000);

    }



    return(
        <div className={estilos.container}>
            <h1>Cadastrar Produto</h1>


        <form onSubmit={createProduct}>
            <div className={estilos.container_inputs}>
                <div className={estilos.inputs}>
                    <p>Descrição:</p>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                </div>

                <div className={estilos.inputs}>
                    <p>Valor:</p>
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
                </div>

                <div className={estilos.inputimg}>
                    <input type="file" onChange={(e) => setImagem(e.target.files[0])}></input>
                </div>

                <div className={estilos.save}>
                    <button onClick={() => setMenu(false)}>Cancelar</button>
                    <button type="submit">Salvar</button>
                </div>
            </div>
        </form>

        </div>
    )
}