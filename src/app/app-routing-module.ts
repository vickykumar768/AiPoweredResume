import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';

const routes: Routes = [
  {
    path: '', component: Home
  },
  {
    path: 'profile', component:Profile
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
