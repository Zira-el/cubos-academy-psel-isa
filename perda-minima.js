function solucao(precos) {
    

    let a = 0;

    for (count = 0; count < precos.length; count++) {
        for (aux = count + 1; aux < precos.length; aux++) {

            if (precos[count] - precos[aux] < a && precos[count] - precos[aux] > 0 || a === 0) {
                a = precos[count] - precos[aux];
                if (a < 0) {
                    a = 0;
                }
            }
        }
    }
    console.log(a);
}