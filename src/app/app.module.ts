import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadComponent } from './component/upload/upload.component';

import { NgxFileDropModule } from 'ngx-file-drop';
import { BlockchainComponent } from './component/blockchain/blockchain.component';
import {HttpClientModule} from "@angular/common/http";
import { WalletComponent } from './component/wallet/wallet.component';
import {HeaderToolbarComponent, Mnemonic_Dialog} from './component/header-toolbar/header-toolbar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    BlockchainComponent,
    WalletComponent,
    HeaderToolbarComponent,
    Mnemonic_Dialog
  ],
        imports: [
                BrowserModule,
                NgxFileDropModule,
                HttpClientModule,
                MatIconModule,
                MatToolbarModule,
                MatDialogModule,
                BrowserAnimationsModule,
                FormsModule,
        ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
