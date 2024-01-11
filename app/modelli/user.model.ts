export class User {
    constructor(
        public email:string,
        public id: string,
        private _token: string,
        private _expirationDate: Date
    ){}

    get token(){
        if(!this._expirationDate || new Date()>this._expirationDate){
            return null
    //controllo per verificare se la data di scadenza non è valida o 
    //se è minore della data di adesso e quindi comunque non è valido

        }
        return this._token
    }
}
