import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSedengPage } from './detail-sedeng.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSedengPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSedengPageRoutingModule {}
