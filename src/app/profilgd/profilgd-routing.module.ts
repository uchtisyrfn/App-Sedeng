import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilgdPage } from './profilgd.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilgdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilgdPageRoutingModule {}
