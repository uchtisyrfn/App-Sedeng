import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiapakamuPageRoutingModule } from './siapakamu-routing.module';

import { SiapakamuPage } from './siapakamu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiapakamuPageRoutingModule
  ],
  declarations: [SiapakamuPage]
})
export class SiapakamuPageModule {}
