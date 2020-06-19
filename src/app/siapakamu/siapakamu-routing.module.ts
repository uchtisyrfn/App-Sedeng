import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiapakamuPage } from './siapakamu.page';

const routes: Routes = [
  {
    path: '',
    component: SiapakamuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiapakamuPageRoutingModule {}
