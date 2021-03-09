import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

 
  
  constructor(private http : HttpClient,private loader : LoadingService) {
                
               }
  res : any ={};
  profile_name : any =localStorage.getItem('userName')
  ngOnInit() {
   
  }

  

}
