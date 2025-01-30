import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData : {username : string, password: string} = {username : "", password : ""};

  formIsValid : boolean = false;

  checkFormValidity() {
    this.formIsValid = this.loginData.username.length > 0 && this.loginData.password.length > 0;
  }

  handleSubmit() {
    console.log("logging in with ", this.loginData);
  }

}
