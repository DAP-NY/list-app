import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material';
//import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputComponent } from './input';
import { SelectComponent } from './select';


@NgModule({
    imports: [ CommonModule, AngularMaterialModule, ReactiveFormsModule,  ],
    exports: [InputComponent, SelectComponent ],
    declarations: [ InputComponent, SelectComponent ],
    // entryComponents: [ DialogComponent ],
    // providers: [ { provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} } ],
    schemas: []
})
export class SharedComponentsModule { }
