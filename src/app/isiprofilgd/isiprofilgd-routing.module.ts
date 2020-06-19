import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsiprofilgdPage } from './isiprofilgd.page';

const routes: Routes = [
  {
    path: '',
    component: IsiprofilgdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsiprofilgdPageRoutingModule {}
