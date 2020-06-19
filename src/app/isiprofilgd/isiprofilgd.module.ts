import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsiprofilgdPageRoutingModule } from './isiprofilgd-routing.module';

import { IsiprofilgdPage } from './isiprofilgd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsiprofilgdPageRoutingModule
  ],
  declarations: [IsiprofilgdPage]
})
export class IsiprofilgdPageModule {}
