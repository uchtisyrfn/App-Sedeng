import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSedengPageRoutingModule } from './detail-sedeng-routing.module';

import { DetailSedengPage } from './detail-sedeng.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSedengPageRoutingModule
  ],
  declarations: [DetailSedengPage]
})
export class DetailSedengPageModule {}
