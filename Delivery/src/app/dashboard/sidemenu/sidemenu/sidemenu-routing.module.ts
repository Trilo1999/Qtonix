
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidemenuPage } from './sidemenu.page';

const routes: Routes = [
  {
    path: '',
    component: SidemenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./../../dashboard/dashboard.module').then(m => m.DashboardPageModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./../../profile/profile.module').then( m => m.ProfilePageModule)
      },
     
    
    ]
  },
  {
    path: '',
    redirectTo: '/home'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidemenuPageRoutingModule {}
