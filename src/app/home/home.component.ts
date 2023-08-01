import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

uhiArray:any
sampledata:any
selected:string='All'
  constructor(private ds:DataService){
    this.ds.Ali().subscribe((result:any)=>{
      this.uhiArray=result
      this.sampledata= [...this.uhiArray]
      
    })
    }
All(key:any){
  this.selected=key
  this.uhiArray=this.sampledata;
  
}
getdata(key:any){
  this.selected=key
  console.log(key)
  console.log(this.sampledata);
  
this.uhiArray=this.sampledata.filter( (x:any) => x.region===key);
}
}












