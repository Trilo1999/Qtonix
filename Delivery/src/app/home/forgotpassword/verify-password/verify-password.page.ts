import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-verify-password',
  templateUrl: './verify-password.page.html',
  styleUrls: ['./verify-password.page.scss'],
})
export class VerifyPasswordPage implements OnInit {
password : any =""
confirmPassword : any =""
email : String =localStorage.getItem("forgetMail");
token : any =""
  constructor( private router : Router,private toastCtrl : ToastController,private http : HttpClient) { }

  ngOnInit() {
  }
  ResetPassword(){
    if(this.password == this.confirmPassword){
           //api call start

           console.log(this.email)

           
    let resetData = {
      "Email":this.email,
      "Token" : this.token,
      "Password" : this.password
    }
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                 .set('Accept', 'application/json')
                                 .set('responseType', 'text')
    this.http.post("https://backend-dev.thebookturf.com/Login/ResetPwd",resetData,{ headers: headers })
    .subscribe(data=>{

      console.log(data.toString());
      let response :any = {};
      response = data ;
     
      if(response.isSuccess){
        console.log(response.message);
        this.toastFun(response.message);
        localStorage.removeItem("forgetMail");
        this.router.navigate(['/home']);
      }
      else{
        console.log(response.message)
        this.toastErr(response.message);
      }
      
    },error=>{
      console.log(error)
      this.toastErr("Please check your Internet Conn.");

    })


           //api call end
    }
    else{
      this.toastErr("Password Mismatched");
    }
    //this.router.navigate(['/home'])
  }

  async toastFun(msg){
    const toast = await this.toastCtrl.create({
      message: msg,
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
