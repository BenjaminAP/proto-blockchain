import { Component } from '@angular/core';
import {WalletService} from './services/wallet/wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proto-block';

  constructor(private walletService: WalletService) {
  }
}
