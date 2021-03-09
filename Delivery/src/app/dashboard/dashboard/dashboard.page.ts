import { HttpClient } from '@angular/common/http';

import { Component, ViewChild ,Renderer2 , OnInit  } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { CommonService } from '../services/common.service';
import { LoadingService } from '../services/loading.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit{
  
  @ViewChild('barChart',{ static: true }) barChart;
  bars: any;
  canvasElement: any;
  colorArray: any;
  dataCount :any ={}
 
 
  constructor(public renderer: Renderer2,private http : HttpClient,private common : CommonService,private toastCtrl : ToastController,private loader : LoadingService) { }
  loginId = localStorage.getItem("loginId")
  ngOnInit(){
   
       this.canvasElement = this.barChart.nativeElement;
       this.renderer.setAttribute(this.canvasElement,'height','260px')
       this.createBarChart();
  //  this.loader.present();

   
  }

 

  createBarChart() {
 //   this.loader.dismiss();
    this.bars = new Chart(this.canvasElement, {
      type: 'bar',
      data: {
        labels: ['JAN', 'FEB', 'MAR'],
        datasets: [{
          label: 'constraint 1',
          data: [2,4,6],
          backgroundColor: '#33FF3C', // array should have same number of elements as number of dataset
          borderColor: '#33FF3C',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'constraint 2',
          data: [4,6,8],
          backgroundColor: '#FF3333', // array should have same number of elements as number of dataset
          borderColor: '#FF3333',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    
  }
  async toastFun(msg){
    const toast = await this.toastCtrl.create({
      message: msg,
      position: 'middle',
      color: 'danger',
      duration: 1000
    });
    toast.present();

 
  }
 
  
}
