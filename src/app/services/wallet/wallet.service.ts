import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Wallet} from '../../classes/wallet';
import {SnackbarService} from '../snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private server_route = 'http://localhost:3000/';
  private mnemonic: string;
  private wallet: Wallet;
  private signedMsg: string;

  constructor(private http: HttpClient,
              private snackBarService: SnackbarService) {
    this.mnemonic = null;
    this.wallet = null;
  }

  public getMnemonic(): Observable<string> {

    return this.http.get(`${this.server_route}wallet/new/mnemonic`, {responseType: 'text'})
      .pipe(map((mnemonic: string) => {
        this.mnemonic = mnemonic;
        return mnemonic;
    }));
  }

  public setMnemonic(new_mnemonic: string): void {
    this.mnemonic = new_mnemonic;
  }

  public generateWallet(): void {

    if (!this.mnemonic) {
      this.snackBarService.openSnackBar('Mnemonic empty', 'error');
      return;
    }

    this.wallet = new Wallet(this.mnemonic);
    this.snackBarService.openSnackBar('wallet Recovered/Generated', 'Success');
  }

  public getPublicKey(): string {
  
    if (!this.verifyWalletExist()) {
      return;
    }

    return this.wallet.getPublicKey();
  }

  public signMsg(msg: string): string {
    if (!this.verifyWalletExist()) {
      return;
    }
    
    this.signedMsg = this.wallet.sign(msg);
    
    return this.signedMsg;
  }
  
  public getSignedMsg(): string {
    return this.signedMsg;
  }
  
  private verifyWalletExist(): boolean {
    if (!this.wallet) {
      this.snackBarService.openSnackBar('wallet not connected', 'error');
      return false;
    }
    
    return true;
  }
}
