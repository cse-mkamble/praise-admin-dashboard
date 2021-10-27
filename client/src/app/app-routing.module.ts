import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PraiseGuard } from './guards/praise.guard';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [PraiseGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
