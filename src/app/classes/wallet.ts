//
// const EdDSA = require('elliptic').eddsa
import * as elliptic from 'elliptic';
import {Buffer} from 'buffer';

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

    constructor(mnemonic: string) {
      const ec = new elliptic.eddsa('ed25519');
      this.keyPair = ec.keyFromSecret(Buffer.from(JSON.stringify(mnemonic)));
    }

    public getPublicKey(): string {
      return this.keyPair.getPublic('hex');
    }
}


/// TODO: yarn install elliptic
/// llok for mnemonic generator = bip39

