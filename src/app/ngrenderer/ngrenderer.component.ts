import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ngrenderer',
  templateUrl: './ngrenderer.component.html',
  styleUrls: ['./ngrenderer.component.scss']
})
export class NgrendererComponent implements OnInit {
  forms:object 
  selected : any
  isallowed: boolean;

  constructor(private service : DataService) { }
  selectedForm(event)
  {
    this.selected=event;
    this.isallowed=true;
  }
  getdata()
  {
    this.service.nggetdata().subscribe(forms=> {this.forms = forms})
  }
  ngOnInit() {
    this.isallowed=false;
    this.getdata();
   }
  }