function prepararPedido(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve("Pizza pronta!");
        }, 2000)
    });
}

async function fazerPedido(){
    console.log("Pedido realizado.");

    const Pedido = await prepararPedido();

    console.log(Pedido);
    console.log("Pedido Entregue");
}

fazerPedido()