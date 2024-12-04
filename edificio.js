class Edificio {
    static plantas = [];

    constructor(calle, numero, codigoPostal) {
        this._calle = calle;
        this._numero = numero;
        this._codigoPostal = codigoPostal;
    }
    set calle(value) {
        this._calle = value;
    }
    get calle() {
        return this._calle;
    }

    set numero(value) {
        this._numero = value;
    }
    get numero() {
        return this._numero;
    }

    set codigoPostal(value) {
        this._codigoPostal = value;
    }
    get codigoPostal() {
        return this._codigoPostal;
    }

    agregaPlantasYPuertas(nPlantas, nPuertas) {
        for (let i = 0; i < nPlantas; i++) {
            let piso = [];
            for (let j = 1; j <= nPuertas; j++) {
                piso.push(null);
            }
            Edificio.plantas.push(piso); 
        }
    }
    agregarPropietario(prop,planta,puerta){
        Edificio.plantas[planta-1][puerta-1]=prop.nombre;
    }

    getNumeroPlantas(){
        return Edificio.plantas.length;
    }

    getNumeroPuertas(planta){
        return Edificio.plantas[planta].length;
    }

    imprimePlantas() {
        console.table(Edificio.plantas); 
    }
}
