import { Observable } from '../interfaces/Observable';
import { Auctioneer } from '../interfaces/auctioneer';
import { Product } from './product';

export class Agent implements Observable {
  public product: Product;
  private auctioneers: Auctioneer[] = [];

  public subscribe(auctioneer: Auctioneer): void {
    const isExist = this.auctioneers.indexOf(auctioneer) !== -1;
    if (isExist) {
      return console.log('Agent: Auctioneer has been attached already.');
    }

    console.log('Agent: Attached an auctioneer.');
    this.auctioneers.push(auctioneer);
  }

  public unsubscribe(auctioneer: Auctioneer): void {
    const auctioneerIndex = this.auctioneers.indexOf(auctioneer);
    if (auctioneerIndex === -1) {
      return console.log('Agent: Nonexistent auctioneer.');
    }

    this.auctioneers.splice(auctioneerIndex, 1);
    console.log('Agent: Detached an auctioneer.');
  }

  public notify(): void {
    console.log('Agent: Notifying auctioneer...');
    for (const auctioneer of this.auctioneers) {
      auctioneer.update(this);
    }
  }

  public bidUp(auctioneer, bid): void {
    console.log("Agent: I'm doing something important.");
    const isExist = this.auctioneers.indexOf(auctioneer) !== -1;
    if (!isExist) {
      return console.log('Agent: Auctioneer there is not in the system.');
    }
    if (this.product.price >= bid) {
      console.log('bid', bid);
      console.log('price', this.product.price);
      return console.log(`Agent: ${auctioneer.name}, your bid is not valid`);
    }
    this.product.price = bid;
    this.product.auctionner = auctioneer;

    console.log(
      `Agent: The new price is ${bid} and the new owner is ${auctioneer.name}`
    );
    this.notify();
  }
}
