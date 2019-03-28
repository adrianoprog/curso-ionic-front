import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { CategoriasPage } from './categorias';

@IonicPage()
@NgModule({
  declarations: [
    CategoriasPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriasPage),
  ],
})
export class CategoriasPageModule {}
