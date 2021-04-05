import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private server_route = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public getMnemonic(): Observable<string> {
    console.log(`${this.server_route}wallet/new/mnemonic`);

    return this.http.get(`${this.server_route}wallet/new/mnemonic`, {responseType: 'text'}).pipe(map((mnemonic: string) => {
      console.log(`${this.server_route}wallet/new/mnemonic`, mnemonic);
      return mnemonic;
    }));
  }
}
