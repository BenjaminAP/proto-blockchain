import {Component, Inject, OnInit} from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {WalletService} from "../../services/wallet/wallet.service";
import {map} from "rxjs/operators";
import {Observable, of} from 'rxjs';
import {BlockchainService} from "../../services/blockchain/blockchain.service";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css']
})
export class HeaderToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(Mnemonic_Dialog, {
      width: '400px',
      height: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'mnemonic-dialog',
  templateUrl: 'mnemonic_dialog.html',
})
export class Mnemonic_Dialog {

  public mnemonic: Observable<string>;
  public mnemonic_by_user: string;

  constructor(
    private walletService: WalletService,
    private blockchainService: BlockchainService,
    public dialogRef: MatDialogRef<Mnemonic_Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

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

  public requestMessageOwnershipVerification(): void {
    
    this.walletService.generateWallet();
    const pubAddress = this.walletService.getPublicKey();

    this.blockchainService.requestMessageOwnershipVerification(pubAddress).subscribe(data => console.log('verification signature', data));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
