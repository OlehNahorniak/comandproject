import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'Index', pathMatch:'full'},
  { path: 'Index', component: IndexComponent},
  { path: 'component1', component: Component1Component},
  { path: 'component2', component: Component2Component},

  { path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
