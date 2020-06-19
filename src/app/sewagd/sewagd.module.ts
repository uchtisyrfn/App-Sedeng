import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SewagdPageRoutingModule } from './sewagd-routing.module';

import { SewagdPage } from './sewagd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SewagdPageRoutingModule
  ],
  declarations: [SewagdPage]
})
export class SewagdPageModule {}
