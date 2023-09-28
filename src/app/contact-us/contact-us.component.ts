import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  phones = [
    {
      id: 0,
      phone: "+01243342421"
    },
    {
      id: 1,
      phone: "+01244234421"
    },
    {
      id: 2,
      phone: "+01246554421"
    },
  ]

  emails = [
    {
      id: 0,
      email: "m@gmail.com"
    },
    {
      id: 1,
      email: "m@gmail.com"
    },
    {
      id: 2,
      email: "m@gmail.com"
    },
  ]
}
