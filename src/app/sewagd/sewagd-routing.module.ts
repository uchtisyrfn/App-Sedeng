import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SewagdPage } from './sewagd.page';

const routes: Routes = [
  {
    path: '',
    component: SewagdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SewagdPageRoutingModule {}
