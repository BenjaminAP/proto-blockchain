//
// const EdDSA = require('elliptic').eddsa
import * as elliptic from 'elliptic';

//
// const ec = new EdDSA('ed25519');
//
// const key = ec.keyFromSecret(Buffer.from(JSON.stringify(mnemonic), 'hex'));
//
// // console.log(key);
//
// // console.log(mnemonic);
//
// const  bitcointLib = require('bitcoinjs-lib');

export class Wallet {

    private keyPair: any;
    private ec: any;

    constructor() {
       this.ec = new elliptic.eddsa('ed25519');
    }

    public generateWallet(mnemonic: string): void {
      this.keyPair = this.ec.keyFromSecret(Buffer.from(JSON.stringify(mnemonic), 'hex'));
    }

    public getPublicKey(): string {
      return this.keyPair.getPublicKey();
    }
}


/// TODO: yarn install elliptic
/// llok for mnemonic generator = bip39

