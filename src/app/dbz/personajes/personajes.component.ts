import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  constructor(private dbzService:DbzService){}
  get personajes(){
    return this.dbzService.personajes;
  }
 //@Input() personajes:Personaje[]=[];
 //CTRL + PTO
}
