const SHA256 = require('crypto-js/sha256');
const hex2ascii = require('hex2ascii');

class Block {
  hash: string;
  height: number;
  body: string;
  timeStamp: string;
  prevBlockHash: string;

  constructor(data: any) {
    this.hash = null;
    this.height = 0;
    this.body = new Buffer(JSON.stringify(data)).toString('hex');
    this.timeStamp = '';
    this.prevBlockHash = '0x';
  }

  public validate(): Promise<any> {
    return new Promise<any>((resolve, reject) => {

    });
  }

  public getBlockData(): void {

  }
}
