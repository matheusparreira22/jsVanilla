class Validador {
    _emails = ['matheuparreira972@gmail.com', 'pacote@gmail.com'];
    verificaemail (email) {
        const isEmail = this._emails.find(
            usuario => usuario === email    
        )
        console.log(isEmail)
        return isEmail !== undefined
    }
}
const validador = new Validador();
console.log(validador.verificaemail('pacote@gmail.com'));