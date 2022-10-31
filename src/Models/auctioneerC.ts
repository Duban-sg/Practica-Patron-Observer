import { Observable} from "../interfaces/Observable"
import {Agent} from "./agent"
import { Auctioneer} from "../interfaces/auctioneer"

export class AuctioneerC implements Auctioneer {
  name = "AuctioneerC";
  MAX_LIMIT = 1000;

  public update(agent: Observable): void {
    if (!(agent instanceof Agent)) {
      throw new Error("ERROR: Agent is not a ConcreteAgent");
    }

    if (agent.product.auctionner === this) {
      return console.log(`${this.name}: I'm the owner... I'm waiting`);
    }

    console.log(`${this.name}: I am not the owner... I'm thinking`);
    const isBid = Math.random() < 0.8;
    if (!isBid) {
      return console.log(`${this.name}: I give up!`);
    }
    const bid = Math.round(agent.product.price * 1.2);
    if (bid > this.MAX_LIMIT) {
      return console.log(`${this.name}: The bid is higher than my limit.`);
    }
    agent.bidUp(this, bid);
  }
}