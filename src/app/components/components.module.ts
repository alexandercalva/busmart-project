import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { IngresoComponent } from './ingreso/ingreso.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, IngresoComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    IngresoComponent
  ]
})
export class ComponentsModule { }
