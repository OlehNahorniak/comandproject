import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component5Component } from './component5/component5.component';
import { Component6Component } from './component6/component6.component';
import { Component7Component } from './component7/component7.component';
import { Component8Component } from './component8/component8.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: '', redirectTo: 'Index', pathMatch:'full'},
  { path: 'Index', component: IndexComponent},
  { path: 'component1', component: Component1Component},
  { path: 'component2', component: Component2Component},
  { path: 'component3', component: Component3Component},
  { path: 'component4', component: Component4Component},
  { path: 'component5', component: Component5Component},
  { path: 'component6', component: Component6Component},
  { path: 'component7', component: Component7Component},
  { path: 'component8', component: Component8Component},
  { path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
