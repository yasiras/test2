import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustompipePipe } from './custompipe.pipe';
import { Box1Component } from './box1/box1.component';
import { Box2Component } from './box2/box2.component';
import { Box3Component } from './box3/box3.component';
import { BoxComponent } from './box/box.component';
import { Box4Component } from './box4/box4.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
const appRoute:Routes=
[
  { path: '', component: Box1Component },
  { path: 'Home', component: Box1Component },
  { path: 'Services', component: Box2Component },
  { path: 'Contact', component: Box3Component },
  { path: 'About', component: Box4Component }
]
@NgModule({
  declarations: [
    AppComponent,
    CustompipePipe,
    Box1Component,
    Box2Component,
    Box3Component,
    BoxComponent,
    Box4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
