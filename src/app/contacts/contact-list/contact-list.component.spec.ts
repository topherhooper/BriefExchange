/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContactListComponent } from './contact-list.component';
import {CheckoutService} from '../../checkout/checkout.service'

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  constructor (private checkoutService: CheckoutService) {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  openService(name: String, amount: Float32Array): void {
    this.checkoutService.openCheckout(name, amount);
  }
});
