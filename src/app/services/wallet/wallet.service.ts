import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Wallet} from '../../classes/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private server_route = 'http://localhost:3000/';
  private mnemonic: string;
  private wallet: Wallet;

  constructor(private http: HttpClient) { }

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
  }

  public getPublicKey(): string {
    return this.wallet.getPublicKey();
  }
}
