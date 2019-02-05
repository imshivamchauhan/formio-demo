import { Component, OnInit } from '@angular/core';
import { Formio } from 'formiojs'
import { DataService } from '../data.service';

@Component({
  selector: 'app-jsbuilder',
  templateUrl: './jsbuilder.component.html',
  styleUrls: ['./jsbuilder.component.scss']
})
export class JsbuilderComponent implements OnInit {
  formioBuilder: any = {};
  header = '';
  disabled: boolean;

  constructor(private service: DataService) { }
  builder() {
    window['Formio'].forms = {};
    window['Formio']['builder'](document.getElementById('formio'), this.formioBuilder)
  }
  title() {
    if (this.header.length === 0) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }
  onSave() {
    this.disabled = true;
    this.formioBuilder.title = this.header;
    this.formioBuilder.components = window['Formio'].forms[Object.keys(window['Formio'].forms)[0]].components.map(e => e.component);
    console.log(this.formioBuilder, 'builderdata');
    this.service.jssavedata(this.formioBuilder).subscribe((result) => {
      alert(result.message);
    }, (err) => {
      alert(err)
    });
  }
  ngOnInit() {
    this.builder();
    this.formioBuilder.title = '';
    this.formioBuilder.components = [];
    this.disabled = true;

  }
}
