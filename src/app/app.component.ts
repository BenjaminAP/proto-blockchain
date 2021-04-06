import { Component } from '@angular/core';
import {WalletService} from './services/wallet/wallet.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'proto-block';
  public pubAddress: string;

  constructor(private walletService: WalletService) {
    this.pubAddress = this.walletService.getPublicKey();
  }
}
