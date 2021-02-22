import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  this.toggleMenu();
  }

  toggleMenu() {
  // let navigate = document.querySelector('.navigate');
  // let toggle = document.querySelector('.toggle');
  // navigate.classList.toggle('active');
  // toggle.classList.toggle('active');
}
}


