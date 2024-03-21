class Display{
    constructor(displayValorAnterior,displayValorActual){
        this.displayValorActual =displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual= '';
        this.valorAnterior= '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
        }
    }


    borrar(){
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual='';
        this.valorAnterior='';
        this.tipoOperacion= undefined;
        this.imprimirValores();
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular(); //si el tipo de operacion es diferente a igual se agrega el tipo de operacion
        this.tipoOperacion = tipo; 
        this.valorAnterior = this.valorActual || this.valorAnterior; 
        this.valorActual = ''//siempre que precionamos una operacion dejamos vacio el valorActual
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual   = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return //si los valores son nulos, se retorna 
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}