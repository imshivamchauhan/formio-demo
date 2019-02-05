import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { rendererTypeName } from '@angular/compiler';

@Component({
  selector: 'app-jsrenderer',
  templateUrl: './jsrenderer.component.html',
  styleUrls: ['./jsrenderer.component.scss']
})
export class JsrendererComponent implements OnInit {
  isallowed: boolean;
  forms: object;
  selected: any;
  constructor(private service: DataService) { }
  selectedForm(event) {
    this.selected = event;
    this.isallowed = true;
    this.renderer();
  }
  renderer() {
    window['Formio']['createForm'](document.getElementById('formio'), this.selected)
  }
  getdata() {
    this.service.jsgetdata().subscribe((result) => {
      this.forms = result;
    }, (err) => {
      alert(err);
    });
  }
  ngOnInit() {
    this.isallowed = false;
    this.getdata();
  }

}
