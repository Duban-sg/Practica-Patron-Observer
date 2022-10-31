import {Observer} from "./Observer"

export interface Auctioneer extends  Observer {
  name: string;
  MAX_LIMIT: number;
  
}