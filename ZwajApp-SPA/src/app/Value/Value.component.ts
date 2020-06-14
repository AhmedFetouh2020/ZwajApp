import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Value',
  templateUrl: './Value.component.html',
  styleUrls: ['./Value.component.css']
})
export class ValueComponent implements OnInit {
Values:any;
  constructor(private Http:HttpClient) { }

  ngOnInit() {
   this.getValues();
  }

  getValues(){
    this.Http.get('http://localhost:5000/api/values').subscribe(
      response=>{this.Values=response;},
      error=>{console.log(error);}
      
    )
  }

}
