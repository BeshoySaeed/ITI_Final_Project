import { Component } from '@angular/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent {
  branches = [
    {
      id: 0,
      name: "Al Haram",
      address: "12 Haram Street",
      location: "https://www.google.com/"
    },
    {
      id: 1,
      name: "Al Giza",
      address: "12 Giza Street",
      location: "https://www.google.com/"
    },
    {
      id: 2,
      name: "Al Suez",
      address: "12 Suez Street",
      location: "https://www.google.com/"
    }
  ]
}
