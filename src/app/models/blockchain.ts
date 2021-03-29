import {Block} from './block';

const SHA256  = require('crypto-js/sha256');

export class Blockchain {
  private chain: Block[];

  constructor(block: Block) {
    this.chain = [];

    this.addBlock(this.createGenesisBlock());
  }

  private createGenesisBlock(): Block {
    return new Block('Genesis Block');
  }

  private getPrevBlockHash(): string {
    return this.chain[this.chain.length - 1].hash;
  }

  private getChainHeight(): number {
    return this.chain.length;
  }

  private hashBlock(block: Block): string {
    return SHA256(JSON.stringify(block)).toString();
  }

  private setTimeStamp(): string {
    return new Date().getTime().toString().slice(0, -3);
  }

  public addBlock(newBlock: Block): void {

    newBlock.height = this.getChainHeight();
    newBlock.timeStamp = this.setTimeStamp(); /// UTC t.s

    if (this.chain.length > 0) {
      newBlock.prevBlockHash = this.getPrevBlockHash();
    }

    newBlock.hash = this.hashBlock(newBlock);

    this.chain.push(newBlock);
  }
}
