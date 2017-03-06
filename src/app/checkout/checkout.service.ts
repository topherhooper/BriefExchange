import {Injectable} from '@angular/core';

@Injectable()
export class CheckoutService {
  openCheckout(name, description, amount) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_a2tf6oMw6N3xsPFK8loKfRba',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({name, description, amount});

  }

}
