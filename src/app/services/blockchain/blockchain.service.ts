import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  private server_route: string;

  constructor(private http: HttpClient) {
    this.server_route = 'http://localhost:3000/';
  }

  public requestMessageOwnershipVerification(pubAddress: string): void {
    //
    // let params = new HttpParams();
    // params = params.append('_page', 1);
    console.log(pubAddress);

    this.http.get(`${this.server_route}signature/request/?${pubAddress}`, {responseType: 'text'})
      .pipe(map((signatureOwnership: string) => {
        console.log(signatureOwnership)
    }));
  }
}
