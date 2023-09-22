import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  
   constructor(private dbzService:DbzService){};
  //@Input() personajes:Personaje[]=[];
  //@Output() onNuevoPersonaje: EventEmitter<Personaje>= new EventEmitter();
  @Input() nuevo: Personaje={
    nombre:'',
    poder: 0
  }
  agregar(){
    //console.log(this.nuevo);
    if(this.nuevo.nombre.trim().length===0){return;}
    //this.personajes.push(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo={nombre:'',poder:0};
  }
}
