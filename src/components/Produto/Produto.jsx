import estilos from "./Produto.module.css";

export default function Produtos({descricao, image, price}){
    return(
        <div className={estilos.container}>
            <img className={estilos.imgProduct} src={`data:image/jpeg;base64,${image}`} alt={descricao}/>
            <h1 className={estilos.nameProduct}>{descricao}</h1>
            <p className={estilos.priceProduct}>R${price}</p>
        </div>
    )
}