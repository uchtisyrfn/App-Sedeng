import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsiprofilmuPageRoutingModule } from './isiprofilmu-routing.module';

import { IsiprofilmuPage } from './isiprofilmu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsiprofilmuPageRoutingModule
  ],
  declarations: [IsiprofilmuPage]
})
export class IsiprofilmuPageModule {}
