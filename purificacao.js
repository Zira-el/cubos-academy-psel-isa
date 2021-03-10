function solucao(stringCorrompida) {
    
    let palavra = "";

    for (count = 0; count < stringCorrompida.length; count++) {
        if (stringCorrompida[count] !== "!" && stringCorrompida[count] !== "@" && stringCorrompida[count] !== "#" && stringCorrompida[count] !== "$" && stringCorrompida[count] !== "%" && stringCorrompida[count] !== "&" && stringCorrompida[count] !== "*" && stringCorrompida[count] !== "(" && stringCorrompida[count] !== ")") {
            palavra = palavra + stringCorrompida[count];
        }

    }
    console.log(palavra);
}
