
export class Block {
  hash: string;
  height: number;
  body: any[];
  timeStamp: string;
  prevBlockHash: string;

  constructor(data: any) {
    this.hash = '';
    this.height = 0;
    this.body = data;
    this.timeStamp = '';
    this.prevBlockHash = '0x';
  }
}
