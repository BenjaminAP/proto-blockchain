import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Wallet} from '../../classes/wallet';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private server_route = 'http://localhost:3000/';
  private mnemonic: string;
  private wallet: Wallet;

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) { }

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
    this.wallet = new Wallet(this.mnemonic);
    this.snackBar.open('wallet Recovered/Generated', 'Success', {
      duration: 2000,
    });
  }

  public getPublicKey(): string {
    return this.wallet.getPublicKey();
  }
}
