import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

 login_user : any;
 login_password : any;
 loader : Boolean = false
  constructor( private router : Router,private http : HttpClient,private toastCtrl : ToastController) {
  }
  isLoggedIn : String =localStorage.getItem('isLoggedIn')
  ngOnInit(){
    this.login_user = '';
    this.login_password = '';
  }

  userLogin(){ 
   
    this.loader=true

   //api call if there
   if(this.isLoggedIn == "false"){ //this should be implemented in authguard but lack of time 
    if(this.login_password == "trilo" && this.login_user =="trilo"){
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('userName', this.login_user);
     
      //success toast start
      this.toastFun("Login Success")
      //success toast end
      this.router.navigate(['/dashboard/home']);
     this.loader=false
    }
    else{
     this.loader=false
      this.toastErr("invalid credentials")

    }
   }else{
    this.router.navigate(['/dashboard/home']);
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
      duration: 3000
    });
    toast.present();

 
  }

}
