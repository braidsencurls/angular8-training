import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public appTitle: string;
  constructor() {
    this.appTitle = 'Arvato Systems';
  }

  ngOnInit() {
  }

}
