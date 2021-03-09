import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {


 
   name : any;
  constructor(private routes : Router,private toastCtrl : ToastController) { }
 
  ngOnInit() {
    localStorage.removeItem('userName');
   this.name = localStorage.getItem("userName");
 
  }
   logout(){

    localStorage.removeItem('userName');
    localStorage.setItem('isLoggedIn',"false");
    this.routes.navigate(['/home'])
   }
 async toastFun(msg){
    const toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      color: 'success',
      duration: 2000
    });
    toast.present();

 
  }

 
}
