
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-ngbuilder',
  templateUrl: './ngbuilder.component.html',
  styleUrls: ['./ngbuilder.component.scss']
})
export class NgbuilderComponent implements OnInit {
  form= {title : '', components: []};
  header='';
  disabled : boolean;
  onChange(event) {
    console.log(event.form,'formdata')
  }
  title()
  {
    if(this.header.length===0)
    {
       this.disabled=true;
    }
    else
    this.disabled=false;
  }
  save()
  {
    this.disabled=true;
    this.form.title=this.header;
    this.service.ngsavedata(this.form).subscribe();
  }

  constructor(private service:DataService) { }

  ngOnInit() {
  this.disabled=true;
  }

}

