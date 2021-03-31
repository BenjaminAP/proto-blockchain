import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadComponent } from './component/upload/upload.component';

import { NgxFileDropModule } from 'ngx-file-drop';
import { BlockchainComponent } from './component/blockchain/blockchain.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    BlockchainComponent
  ],
  imports: [
    BrowserModule,
    NgxFileDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
