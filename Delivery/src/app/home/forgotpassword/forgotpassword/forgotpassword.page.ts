import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
 
email : any
  constructor( private http :HttpClient,private router : Router, private toastCtrl : ToastController) {}

  ngOnInit() {
  }
  forgotPassword(){
    //api call if any ?
    this.toastFun("Otp Has Been Sent");
   
     if(this.email =="trilo@gmail.com"){
       this.router.navigate(['verify-password'])
     }
      
  
  }
  async toastFun(msg){
    const toast = await this.toastCtrl.create({
      message: "Token generation : "+msg,
      position: 'bottom',
      color: 'success',
      duration: 3000
    });
    toast.present();

 
  }
 async toastErr(msg){
    const toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      color : 'danger',
      duration: 3000
    });
    toast.present();

 
  }
 

 
}
