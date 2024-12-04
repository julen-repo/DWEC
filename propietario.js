class Propietario{
    constructor(nombre, genero, miembros) {
        this._nombre = nombre;
        this._genero = genero;
        this._miembros = miembros;
    }

    set nombre(value) {
        this._nombre = value;
    }
    get nombre() {
        return this._nombre;
    }

    set genero(value) {
        this._genero = value;
    }
    get genero() {
        return this._genero;
    }

    set miembros(value) {
        this._miembros = value;
    }
    get miembros() {
        return this._miembros;
    }
}