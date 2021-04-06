import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  readonly server_route: string;
  // readonly  httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  public tempData = {
    address: 'test',
    message: 'test msg',
    signature: 'test signature',
    star: {
      dec: 'test dec',
      ra: 'test ra',
      story: 'story test'}
  }

  constructor(private http: HttpClient) {
    this.server_route = 'http://localhost:3000';
  }

  public requestMessageOwnershipVerification(pubAddress: string): Observable<string> {

    return this.http.get(`${this.server_route}/signature/request/${pubAddress}`, {responseType: 'text'})
      .pipe(map((signatureOwnership: string) => signatureOwnership));
  }

  public submitStar(): void {
    console.log('submitting star');
    this.http.post<any>(`${this.server_route}/submitStar`, this.tempData).subscribe(temp => console.log(temp));
  }
}
