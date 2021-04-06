import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {WalletService} from '../../services/wallet/wallet.service';
import {BlockchainService} from '../../services/blockchain/blockchain.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {
  
  public requested_sig: Observable<string>;
  public signature: string;

  constructor(private walletService: WalletService,
              private blockchainService: BlockchainService) {
    this.requested_sig = null;
    this.signature = null;
  }

  ngOnInit(): void {
  }
  
  public requestSignature(): void {
  
  }
  
  public sign(): void {
  
  }

}
