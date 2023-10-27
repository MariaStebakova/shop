import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from '../../validators';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {

  orderForm: FormGroup = this.fb.group({
    firstName: this.fb.control('', [Validators.required, CustomValidators.startCase]),
    lastName: this.fb.control(''),
    email: this.fb.control('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), Validators.email]),
    phones: this.fb.array([this.buildPhone()]),
    delivery: this.fb.control(false),
    address: this.fb.control('', {updateOn: 'blur'})
  });

  validationMessagesMap = new Map([
    ['firstName', {
      message: '', // <== message for user
      required: 'Please enter your first name.',
      startCase: 'The first name must start with a capital letter.'
    }],
    ['lastName', {
      message: ''
    }],
    ['email', {
      message: '',
      required: 'Please enter your email address.',
      pattern: 'Please enter a valid email address.',
      email: 'Please enter a valid email address.',
      emailValidator: 'This email is invalid. Please enter other email address.'
    }],
    ['delivery', {
      message: ''
    }],
    ['address', {
      message: '',
      required: 'Please enter your address.'
    }]
  ]);

  addressPlaceholder: string = 'Address'

  get firstName(): AbstractControl {
    return this.orderForm.get('firstName')!;
  }

  get lastName(): AbstractControl {
    return this.orderForm.get('lastName')!;
  }

  get email(): AbstractControl {
    return this.orderForm.get('email')!;
  }

  get phones(): FormArray {
    return this.orderForm.get('phones') as unknown as FormArray;
  }

  get delivery(): AbstractControl {
    return this.orderForm.get('delivery')!;
  }

  get address(): AbstractControl {
    return this.orderForm.get('address')!;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.watchValueChanges();
    this.setValidationMessages();
  }

  onSave(): void {

  }

  onReset(): void {
    this.orderForm.reset();
  }

  onAddPhone(): void {
    this.phones.push(this.buildPhone());
  }

  onRemovePhone(i: number): void {
    this.phones.removeAt(i);
  }

  isShowValidationMessage(controlName: string): boolean {
    return this.validationMessagesMap.get(controlName)!.message && (this as {[index: string]: any})[controlName].touched;
  }

  private buildPhone(): AbstractControl {
    return this.fb.control('', [Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$')]);
  }

  private watchValueChanges(): void {
    this.delivery.valueChanges.subscribe(value => this.setPickup(value));
    this.orderForm.valueChanges.subscribe(_ =>
      this.setValidationMessages()
    );
  }

  private setPickup(value: boolean): void {
    if (value) {
      this.address.setValidators(Validators.required);
      this.addressPlaceholder += ' (required)';
    } else {
      this.address.removeValidators(Validators.required);
      this.addressPlaceholder = 'Address';
    }

    this.address.updateValueAndValidity();
  }

  private setValidationMessages(): void {
    this.validationMessagesMap.forEach((_, cntrlName) => {
        this.buildValidationMessages(cntrlName);
      });
  }

  private buildValidationMessages(controlName: string): void {
    const c: AbstractControl = (this as {[index: string]: any})[controlName];
    this.validationMessagesMap.get(controlName)!.message = '';

    if (c.errors) {
      this.validationMessagesMap.get(controlName)!.message = Object.keys(c.errors)
        .map(key => {
          const value = this.validationMessagesMap.get(controlName)!;
          return (value as {[index: string]: any})[key];
        })
        .join(' ');
    }
  }
}
