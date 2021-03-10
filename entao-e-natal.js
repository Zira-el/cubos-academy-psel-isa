function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
    

    let total = 0,
        frete = 0,
        totalS = 0,
        totalB = 0,
        totalD = 0;

    for (count = 0; count < produtos.length; count++) {
        if (produtos[count].categoria === "SALGADO") {
            totalS = totalS + (produtos[count].valor * produtos[count].quantidade) - (
                produtos[count].valor * produtos[count].quantidade * (10 / 100)
            );
        } else if (produtos[count].categoria === "DOCE") {
            totalD = totalD + (produtos[count].valor * produtos[count].quantidade) - (
                produtos[count].valor * produtos[count].quantidade * (15 / 100)
            );
        } else if (produtos[count].categoria === "BEBIDA") {
            totalB = totalB + (produtos[count].valor * produtos[count].quantidade) - (
                produtos[count].valor * produtos[count].quantidade * (30 / 100)
            );
        }
    }
    total = totalS + totalD + totalB;
    frete = distanciaRestaurante * 120;

    if (ehPrimeiraCompra) {
        if (cupomDesconto === "NATAL10" && total >= 3000) {
            total = total - (total * (10 / 100));
        } else if (cupomDesconto === "NATAL20" && total >= 4500) {
            total = total - (total * (20 / 100));
        } else if (cupomDesconto === "NATAL30" && total >= 6000) {
            total = total - (total * (30 / 100));
        } else if (cupomDesconto === "NATALSUPREMO" && total >= 6000) {
            total = total - (total * (30 / 100)) - frete;
        }
    }
    total = total + frete;
    console.log(total);
}
