import {Component, Inject, OnInit} from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {WalletService} from "../../services/wallet/wallet.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

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
      width: '250px',
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

  constructor(
    private walletService: WalletService,
    public dialogRef: MatDialogRef<Mnemonic_Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    this.mnemonic = this.walletService.getMnemonic().pipe(map((mnemonic: string) => mnemonic));
    this.mnemonic.subscribe(data => data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
