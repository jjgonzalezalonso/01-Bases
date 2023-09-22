import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";
@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        { nombre: 'Goku', poder: 15000 },
        { nombre: 'Vegeta', poder: 7500 },
    ]

    get personajes():Personaje[]{
        return [...this._personajes];
        //pasa una copia del array, no una referencia
        //en ts todo se pasa por referencia
    }
     
    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }

}

