function solucao(produtos, valorMaximo, avaliacaoMinima) {
   
    let aux = [];

    for (count = 0; count < produtos.length; count++) {
        if (produtos[count].valor <= valorMaximo && produtos[count].avaliacao >= avaliacaoMinima) {
            aux.push(produtos[count]);
        }
    }
    console.log(aux);

}