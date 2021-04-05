import { Component } from '@angular/core';
import {WalletService} from "./services/wallet/wallet.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proto-block';

  constructor(private wallet_service: WalletService) {
    this.wallet_service.getMnemonic().subscribe(data => console.log(data));
  }
}
