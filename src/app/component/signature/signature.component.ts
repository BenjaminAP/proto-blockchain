import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {WalletService} from '../../services/wallet/wallet.service';
import {BlockchainService} from '../../services/blockchain/blockchain.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {
  
  public requested_sig: Observable<string>;
  public signature: Observable<string>;

  constructor(private walletService: WalletService,
              private blockchainService: BlockchainService) {
    this.requested_sig = null;
    this.signature = null;
  }

  ngOnInit(): void {
  }
  
  public requestSignature(): void {
    this.requested_sig = this.blockchainService.requestMessageOwnershipVerification(this.walletService.getPublicKey());
  }
  
  public signMsg(): void {
    this.signature = this.requested_sig.pipe(map((msg: string ) => this.walletService.signMsg(msg)));
  }

}
