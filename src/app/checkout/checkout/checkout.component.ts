import {Component} from '@angular/core';

@Component({
  selector: 'app-checkout',
  template: `
<button (click)="openCheckout()">Purchase</button>
`,
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  @Input()
  amount: Function;
  @Input()
  description: Function;
  @Input()
  name: Function;

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_a2tf6oMw6N3xsPFK8loKfRba',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: this.name,
      description: this.description,
      amount: this.amount
    });

  }

}
