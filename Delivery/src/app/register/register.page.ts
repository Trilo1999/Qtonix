import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  login_email : any
  login_address : any
  login_confirm_password : any 
  login_password :any
  login_user :any
  constructor(private toastCtrl : ToastController,private router : Router) { }

  ngOnInit() {
  }
  register(){
    if(this.login_confirm_password == this.login_password){
      this.toastFun("user registration successful")
      this.router.navigate(['/home'])
    }
    else{
      this.toastFun("user registration failed")
    }
  }
  async toastFun(msg){
    const toast = await this.toastCtrl.create({
      message: msg,
      position: 'bottom',
      color: 'success',
      duration: 2000
    });
    toast.present();

 
  }
 async toastErr(msg){
    const toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      color : 'danger',
      duration: 2000
    });
    toast.present();

 
  }


}
