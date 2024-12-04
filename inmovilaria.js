class Inmovilaria{
    static edificios=[];
    addEdificio(edificio){
        Inmovilaria.edificios.push(edificio);
    }
    getEdificio(calle,numero){
        return Inmovilaria.edificios.find(edificio => edificio.calle === calle && edificio.numero === numero) ?? null;
    }
}