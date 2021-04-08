import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {BlockchainService} from '../../services/blockchain/blockchain.service';
import {WalletService} from '../../services/wallet/wallet.service';

export interface Star {
  dec: string;
  ra: string;
  story: string;
}

@Component({
  selector: 'app-star-form',
  templateUrl: './star-form.component.html',
  styleUrls: ['./star-form.component.css']
})
export class StarFormComponent implements OnInit {
  
  public dec: FormControl;
  public ra: FormControl;
  public story: FormControl;

  constructor(public blockchainService: BlockchainService,
              private walletService: WalletService) {
    this.dec = new FormControl('');
    this.ra = new FormControl('');
    this.story = new FormControl('');
  }

  ngOnInit(): void {
  }
  
  submitStar(): void {
    const star: Star = {
      dec: this.dec.value.toString(),
      ra: this.ra.value.toString(),
      story: this.story.value.toString(),
    };
    
    const pubAddress = this.walletService.getPublicKey();
    const signedMessage = this.walletService.getSignedMsg();
    
    this.blockchainService.submitStar(star, pubAddress, signedMessage);
  }

}
