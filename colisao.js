function solucao(velocidade, aceleracao, distanciaObjeto) {
    
    let resultado = 0;
    resultado =  -(velocidade * velocidade) / (2 * aceleracao);

    if (resultado > distanciaObjeto) {
        console.log("COLISAO A FRENTE");
    } else if (resultado === distanciaObjeto) {
        console.log("NAO ACELERE");
    } else {
        console.log("CAMINHO SEGURO");
    }
}