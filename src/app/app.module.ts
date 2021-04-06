import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadComponent } from './component/upload/upload.component';

import { NgxFileDropModule } from 'ngx-file-drop';
import { BlockchainComponent } from './component/blockchain/blockchain.component';
import {HttpClientModule} from '@angular/common/http';
import { WalletComponent } from './component/wallet/wallet.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import { SignatureComponent } from './component/signature/signature.component';
import { MnemonicDialogComponent } from './dialogs/mnemonic-dialog/mnemonic-dialog.component';
import {HeaderToolbarComponent} from './component/header-toolbar/header-toolbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    BlockchainComponent,
    WalletComponent,
    HeaderToolbarComponent,
    SignatureComponent,
    MnemonicDialogComponent
  ],
        imports: [
                BrowserModule,
                NgxFileDropModule,
                HttpClientModule,
                MatIconModule,
                MatToolbarModule,
                MatDialogModule,
                MatSnackBarModule,
                MatCardModule,
                BrowserAnimationsModule,
                FormsModule,
                MatInputModule,
                MatDividerModule,
                MatButtonModule,
        ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
