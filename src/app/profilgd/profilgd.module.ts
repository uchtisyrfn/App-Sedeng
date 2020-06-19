import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilgdPageRoutingModule } from './profilgd-routing.module';

import { ProfilgdPage } from './profilgd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilgdPageRoutingModule
  ],
  declarations: [ProfilgdPage]
})
export class ProfilgdPageModule {}
