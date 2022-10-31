import { Observable} from "../interfaces/Observable"
import {Agent} from "./agent"
import { Auctioneer} from "../interfaces/auctioneer"

export class AuctioneerA implements Auctioneer {
  name = "AuctioneerA";
  MAX_LIMIT = 100;

  public update(agent: Observable): void {
    if (!(agent instanceof Agent)) {
      throw new Error("ERROR: Agent is not a ConcreteAgent");
    }

    if (agent.product.auctionner === this) {
      return console.log(`${this.name}: I'm the owner... I'm waiting`);
    }

    console.log(`${this.name}: I am not the owner... I'm thinking`);
    const bid = Math.round(agent.product.price * 1.1);
    if (bid > this.MAX_LIMIT) {
      return console.log(`${this.name}: The bid is higher than my limit.`);
    }
    agent.bidUp(this, bid);
  }
}