import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginGuardService} from './dashboard/services/login-guard.service'
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate : [LoginGuardService]
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./home/forgotpassword/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/sidemenu/sidemenu/sidemenu.module').then( m => m.SidemenuPageModule)
  },
  {
    path: 'verify-password',
    loadChildren: () => import('./home/forgotpassword/verify-password/verify-password.module').then( m => m.VerifyPasswordPageModule)
  },
 
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
