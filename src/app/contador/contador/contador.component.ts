import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1 style="text-align: center;">Bienvenido a {{titulo}}</h1>
        <button (click)="acumular(base)"> + {{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)"> - {{base}}</button>
 `
})
export class contadorcomponent {
    titulo: string = 'Contador APP';
    // por defecto las variables son publicas
    numero: number = 10;
    // poner ; es opcional
    base: number = 5;

    acumular(valor: number) {
        this.numero += valor;
    }
}
