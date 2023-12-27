import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterValidGuard } from './guards/register-valid.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
