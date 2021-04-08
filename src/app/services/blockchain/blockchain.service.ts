import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Star} from '../../component/star-form/star-form.component';

interface Data  {
  address: string;
  message: string;
  signature: string;
  star: {
    dec: string,
    ra: string,
    story: string
  };
}

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  readonly server_route: string;
  private requestedMessage: string;
  // readonly  httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private http: HttpClient) {
    this.server_route = 'http://localhost:3000';
  }

  public requestMessageOwnershipVerification(pubAddress: string): Observable<string> {

    return this.http.get(`${this.server_route}/signature/request/${pubAddress}`, {responseType: 'text'})
      .pipe(map((signatureOwnership: string) => {
        this.requestedMessage = signatureOwnership;
        return signatureOwnership;
      }));
  }

  public submitStar(starData: Star, pubAddress: string, signedMessage: string): void {
    console.log('submitting star');
    
    const toSubmit: Data = {
      address: pubAddress,
      message: this.requestedMessage,
      signature: signedMessage,
      star: starData
    };
    
    this.http.post<any>(`${this.server_route}/submitStar`, toSubmit).subscribe(temp => console.log('Block submitted', temp));
  }
}
