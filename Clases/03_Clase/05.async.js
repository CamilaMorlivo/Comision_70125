const calculo = async () => {
    try {
        const resultado = await dividir(10,2);
        console.log(resultado)
    } catch (error) {
        console.log("Paso por el error");
        console.log(error);
    }
}

calculo();