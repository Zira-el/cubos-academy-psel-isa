function solucao(jogadas) {

    let zero = 0,
        um = 0;

    for (count = 0; count < jogadas.length; count++) {
        if (jogadas[count] === 0) {
            zero++;
        } else {
            um++
        }
    }
    if (um === zero) {
        console.log("true");
    } else {
        console.log("false");
    }
}