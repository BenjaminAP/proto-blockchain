import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  private server_route: string;

  constructor(private http: HttpClient) {
    this.server_route = 'http://localhost:3000/';
  }

  public requestMessageOwnershipVerification(pubAddress: string): Observable<string> {
    

    return this.http.get(`${this.server_route}signature/request/${pubAddress}`, {responseType: 'text'})
      .pipe(map((signatureOwnership: string) => signatureOwnership));
  }
}
