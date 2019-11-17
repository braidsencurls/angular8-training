import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public footerMessage: string;
  public currentDate: Date;
  constructor() {
    this.footerMessage = 'Copyright &copy Arvato';
    this.currentDate = new Date();
  }

  ngOnInit() {
  }

}
