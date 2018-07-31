/**
 * Created by Claudiu on 7/3/2018.
 */
import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

@NgModule({
  imports: [
    ServerModule,
    AppModule,
    ServerTransferStateModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppPrerenderModule  { }
