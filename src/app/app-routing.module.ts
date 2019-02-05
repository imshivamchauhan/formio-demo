import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbuilderComponent } from './ngbuilder/ngbuilder.component';
import { NgrendererComponent } from './ngrenderer/ngrenderer.component';
import { JsbuilderComponent } from './jsbuilder/jsbuilder.component';
import { JsrendererComponent } from './jsrenderer/jsrenderer.component';

const routes: Routes = [
  { path: '', redirectTo: 'jsbuilder', pathMatch: 'full' },
  { path: 'ngbuilder', component: NgbuilderComponent },
  { path: 'ngrenderer', component: NgrendererComponent },
  { path: 'jsbuilder', component: JsbuilderComponent },
  { path: 'jsrenderer', component: JsrendererComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
