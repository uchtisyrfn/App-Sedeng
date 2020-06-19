import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsiprofilmuPage } from './isiprofilmu.page';

const routes: Routes = [
  {
    path: '',
    component: IsiprofilmuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsiprofilmuPageRoutingModule {}
