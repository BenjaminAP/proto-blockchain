import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {WalletService} from '../../services/wallet/wallet.service';
import {BlockchainService} from '../../services/blockchain/blockchain.service';
import {map} from 'rxjs/operators';
import {SnackbarService} from '../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {

  public requested_sig: Observable<string>;
  public veryMsg: string;
  public signature: string;

  @Output() pubAddressEvent: EventEmitter<string> = new EventEmitter();

  constructor(private walletService: WalletService,
              private blockchainService: BlockchainService,
              private snackBarService: SnackbarService) {
    this.requested_sig = null;
    this.signature = null;
  }

  ngOnInit(): void {
  }

  public requestSignature(): void {
    
    if (!this.walletService.getPublicKey()) {
      this.snackBarService.openSnackBar('Wallet not connected', 'error');
      return;
    }
    
    this.pubAddressEvent.emit(this.walletService.getPublicKey());
    this.requested_sig = this.blockchainService.requestMessageOwnershipVerification(this.walletService.getPublicKey()).pipe(map((vm: string) => {
      this.veryMsg = vm;
      return vm;
    }));
  }

  public signMsg(): void {
    this.signature = this.walletService.signMsg(this.veryMsg);
  }

}
