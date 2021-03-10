function solucao(produtos, valorMaximo, avaliacaoMinima) {
    // seu código aqui
    let aux = [];

    for (count = 0; count < produtos.length; count++) {
        if (produtos[count].valor <= valorMaximo && produtos[count].avaliacao >= avaliacaoMinima) {
            aux.push(produtos[count]);
        }
    }
    console.log(aux);

}