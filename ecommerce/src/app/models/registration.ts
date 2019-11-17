export class Registration {
  public id: number;
  public lastname: string;
  public firstname: string;
  public email: string;
  public password: string;


  constructor(id: number, lastname: string, firstname: string, email: string, password: string) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.email = email;
    this.password = password;
  }
}
