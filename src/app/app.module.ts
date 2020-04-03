import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './layouts/appheader/appheader.component';
import { AppmenuComponent } from './layouts/appmenu/appmenu.component';
import { AppfooterComponent } from './layouts/appfooter/appfooter.component';
import { AppquicksidebarComponent } from './layouts/appquicksidebar/appquicksidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    AppquicksidebarComponent,
    DashboardComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
