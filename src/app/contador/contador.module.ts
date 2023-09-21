import { NgModule } from '@angular/core';
import { contadorcomponent } from './contador/contador.component';


@NgModule({
    declarations:[
        contadorcomponent
    ],
    exports: [
        contadorcomponent
    ],
    imports:[
        //CommonModule  
        //no hace falta porque en el html no utilizamos
        //las directivas *ngIf, *nFor  
    ]
})
export class ContadorModule{
    }

