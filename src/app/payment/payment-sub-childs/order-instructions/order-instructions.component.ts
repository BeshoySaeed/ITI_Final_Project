import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-instructions',
  templateUrl: './order-instructions.component.html',
  styleUrls: ['./order-instructions.component.scss']
})
export class OrderInstructionsComponent {
  @Input() paymentForm! :FormGroup;

  instructions = [
    {
      id: 0,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },

    {
      id: 1,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },

    {
      id: 2,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    }
  ];
}
