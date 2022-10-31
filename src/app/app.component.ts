import { Component, VERSION } from '@angular/core';
import { Agent } from '../Models/agent';
import { AuctioneerB } from '../Models/auctioneerB';
import { AuctioneerA } from '../Models/auctioneerA';
import { AuctioneerC } from '../Models/auctioneerC';
import { Product } from '../Models/product';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  ngOnInit(){
    this.subasta()
  }

  public subasta() {


    const concreteAgent = new Agent();

    const auctioneerA = new AuctioneerA();
    const auctioneerB = new AuctioneerB();
    const auctioneerC = new AuctioneerC();


    concreteAgent.subscribe(auctioneerA);
    concreteAgent.subscribe(auctioneerB);
    concreteAgent.subscribe(auctioneerC);

    const diamond = new Product({ name: 'Diamond', price: 5 });
    concreteAgent.product = diamond;

    concreteAgent.bidUp(auctioneerA, 10);

    console.log('--------- new Bid-----------');

    concreteAgent.unsubscribe(auctioneerC);

    // const gem = new Product({ name: 'Gem', price: 3 });
    // concreteAgent.product = gem;

    // concreteAgent.bidUp(auctioneerB, 5);

    // console.log(`The winner of the bid is 
    // Product: ${gem.name}
    // Name: ${gem.auctionner.name}
    // Price: ${gem.price}`);

    console.log(`The winner of the bid is 
             Product: ${diamond.name}
             Name: ${diamond.auctionner.name}
             Price: ${diamond.price}`);


  }
}
