function solucao(palpite, palavra) {
    

    let acerto = 0;

    for (count = 0; count < palavra.length; count++) {
        if (palpite === palavra[count]) {
            acerto++;
        }
    }
    console.log(acerto);
}