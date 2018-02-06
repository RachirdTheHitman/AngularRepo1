import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TestServersComponent } from './test-servers/test-servers.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TestServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
