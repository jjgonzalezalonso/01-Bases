import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['aaa', 'bbb', 'ccc', 'ddd'];
  heroeBorrado: string = '';

  borrarHeroe() {
    //this.heroes=[];
    //this.heroeBorrado = this.heroes.shift() || ''; // borro el primero
    this.heroeBorrado = this.heroes.pop() || ''; // borro el último
  }
}
