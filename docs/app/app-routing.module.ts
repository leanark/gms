import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppFormComponent } from './app-form/app-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-form',
    pathMatch: 'full'
  },
  {
    path: 'app-form',
    component: AppFormComponent
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
