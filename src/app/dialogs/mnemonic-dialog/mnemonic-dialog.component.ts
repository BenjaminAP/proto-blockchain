import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {WalletService} from '../../services/wallet/wallet.service';
import {BlockchainService} from '../../services/blockchain/blockchain.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {map} from 'rxjs/operators';

export interface DialogData {

}

@Component({
  selector: 'app-mnemonic-dialog',
  templateUrl: './mnemonic-dialog.component.html',
  styleUrls: ['./mnemonic-dialog.component.css']
})
export class MnemonicDialogComponent {
  
  public mnemonic: Observable<string>;
  public mnemonic_by_user: string;
  public placeholder: string;
  
  constructor(
          private walletService: WalletService,
          private blockchainService: BlockchainService,
          public dialogRef: MatDialogRef<MnemonicDialogComponent>,
          @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    
    this.placeholder = 'Enter mnemonic to recover wallet or press the magic wand button to create new wallet with it';
    
  }
  
  public generateMnemonic(): void {
    this.mnemonic = this.walletService.getMnemonic()
            .pipe(map((mnemonic: string) => {
              this.mnemonic_by_user = mnemonic;
              return mnemonic;
            }));
  }
  
  public setMnemonic(): void {
    this.walletService.setMnemonic(this.mnemonic_by_user);
    console.log('mnemonic changed');
  }
  
  public createWallet(): void {
    this.walletService.generateWallet();
  }
  
  public requestMessageOwnershipVerification(): void {
    
    const pubAddress = this.walletService.getPublicKey();
    
    this.blockchainService.requestMessageOwnershipVerification(pubAddress).subscribe(data => console.log('verification signature', data));
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
