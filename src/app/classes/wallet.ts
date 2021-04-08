
import * as elliptic from 'elliptic';
import {Buffer} from 'buffer';

export class Wallet {

    private keyPair: any;

    constructor(mnemonic: string) {
      const ec = new elliptic.eddsa('ed25519');

      /// private/public key generated.
      this.keyPair = ec.keyFromSecret(Buffer.from(JSON.stringify(mnemonic)));
    }

    public getPublicKey(): string {
      return this.keyPair.getPublic('hex');
    }

    public sign(msg: string): string {
        return this.keyPair.sign(msg).toHex();
    }
}


/// TODO: yarn install elliptic
/// llok for mnemonic generator = bip39

