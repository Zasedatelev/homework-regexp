
export default class Validator{

    validateUsername(name) {
        const reNumbers = /\d{3}/;
        const re = /^[a-zA-Z0-9\_\-]+$/;
        const reBeginningEnding = /^[\d\-\_]|[\d\-\_]$/


    if (str.search(re) === -1){
            throw new Error('Допустимы только латинские буквы, символы тире -,                       подчёркивания _ и цифры (0-9)');
        }
        
    
    if (str.match(reNumbers) !== null){
        throw new Error('Имя не должно содержать подряд более трёх цифр');
    }
    

    if (str.match(reBeginningEnding) !== null){
        throw new Error('Имя не должно  начинаться и заканчиваться цифрами, символами подчёркивания или тире');
    }
    
    this.name = name;
    return this.name;
        
    }

}
