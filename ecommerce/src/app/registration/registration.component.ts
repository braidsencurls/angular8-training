import { Component, OnInit } from '@angular/core';
import {Registration} from '../models/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public user: Registration;
  public registration: boolean;
  public appTitle: string ;
  ngOnInit() {
  }
  constructor() {
    this.initialize();
    this.registration = true;
    this.appTitle = 'Registration';
  }
  initialize() {
    this.user = new Registration(0, '' , '', '', '');
  }
  doSave() {
    this.registration = false;
  }
  doCancel() {
    this.initialize();
    this.registration = true;
  }
}

